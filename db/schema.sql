-- TechLearn — schema Neon (Postgres 17, database techlearn)
-- Login, trilhas, aulas em blocos, progresso, arquivos, novidades.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE papel_usuario AS ENUM ('aluno', 'admin');
CREATE TYPE tipo_aula AS ENUM ('aula', 'projeto');
CREATE TYPE tipo_bloco AS ENUM (
  'texto',
  'conceito',
  'codigo',
  'youtube',
  'arquivo',
  'imagem',
  'tente',
  'exercicio'
);

-- Conta. Senha só hashed (argon2/bcrypt no app). Sem verificação de e-mail na v1.
CREATE TABLE usuarios (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  senha_hash text NOT NULL,
  nome text NOT NULL,
  papel papel_usuario NOT NULL DEFAULT 'aluno',
  criado_em timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT usuarios_email_formato CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$')
);

CREATE UNIQUE INDEX usuarios_email_unico ON usuarios (lower(email));

-- Sessão server-side: cookie httpOnly guarda o id; no banco só o hash do segredo.
CREATE TABLE sessoes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id uuid NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  token_hash text NOT NULL UNIQUE,
  expira_em timestamptz NOT NULL,
  criado_em timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX sessoes_usuario_idx ON sessoes (usuario_id);
CREATE INDEX sessoes_expira_idx ON sessoes (expira_em);

CREATE TABLE trilhas (
  id text PRIMARY KEY,
  titulo text NOT NULL,
  descricao text NOT NULL,
  ordem integer NOT NULL UNIQUE,
  publicada boolean NOT NULL DEFAULT false
);

CREATE TABLE aulas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trilha_id text NOT NULL REFERENCES trilhas (id) ON DELETE RESTRICT,
  slug text NOT NULL,
  titulo text NOT NULL,
  resumo text NOT NULL DEFAULT '',
  ordem integer NOT NULL,
  tempo_minutos integer NOT NULL DEFAULT 20 CHECK (tempo_minutos > 0),
  tipo tipo_aula NOT NULL DEFAULT 'aula',
  publicada boolean NOT NULL DEFAULT false,
  criado_em timestamptz NOT NULL DEFAULT now(),
  atualizado_em timestamptz NOT NULL DEFAULT now(),
  UNIQUE (trilha_id, slug),
  UNIQUE (trilha_id, ordem)
);

CREATE INDEX aulas_trilha_ordem_idx ON aulas (trilha_id, ordem);

-- Molde dinâmico: cada linha é um bloco. JSON varia com o tipo.
-- texto:     { "markdown": "..." }
-- conceito:  { "termo": "...", "explicacao": "..." }
-- codigo:    { "linguagem": "javascript", "codigo": "..." }
-- youtube:   { "video_id": "...", "titulo": "...", "canal": "..." }
-- arquivo:   { "arquivo_id": "<uuid>", "rotulo": "Baixar exercício" }
-- imagem:    { "src": "/images/...", "alt": "...", "credito": "Pexels" }
-- tente:     { "instrucao": "..." }
-- exercicio: { "enunciado": "..." }
CREATE TABLE blocos_aula (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  aula_id uuid NOT NULL REFERENCES aulas (id) ON DELETE CASCADE,
  ordem integer NOT NULL,
  tipo tipo_bloco NOT NULL,
  conteudo jsonb NOT NULL DEFAULT '{}'::jsonb,
  UNIQUE (aula_id, ordem)
);

CREATE INDEX blocos_aula_aula_idx ON blocos_aula (aula_id, ordem);

-- Marcar aula feita (exige login).
CREATE TABLE progresso (
  usuario_id uuid NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  aula_id uuid NOT NULL REFERENCES aulas (id) ON DELETE CASCADE,
  concluida_em timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (usuario_id, aula_id)
);

CREATE INDEX progresso_aula_idx ON progresso (aula_id);

CREATE TABLE arquivos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  aula_id uuid REFERENCES aulas (id) ON DELETE SET NULL,
  bloco_id uuid REFERENCES blocos_aula (id) ON DELETE SET NULL,
  nome text NOT NULL,
  caminho text NOT NULL,
  mime text,
  tamanho_bytes integer,
  criado_em timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE noticias (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  titulo text NOT NULL,
  resumo text NOT NULL DEFAULT '',
  corpo jsonb NOT NULL DEFAULT '[]'::jsonb,
  publicada boolean NOT NULL DEFAULT false,
  publicado_em timestamptz,
  criado_em timestamptz NOT NULL DEFAULT now()
);
