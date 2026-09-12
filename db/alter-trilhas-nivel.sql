-- Migração: duas trilhas (html-css, javascript) + nível nas aulas.
-- Aplicar no banco vivo. Não apaga usuarios / progresso / sessoes.

DO $$ BEGIN
  CREATE TYPE nivel_aula AS ENUM ('basico', 'intermediario', 'avancado');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

ALTER TABLE aulas ADD COLUMN IF NOT EXISTS nivel nivel_aula NOT NULL DEFAULT 'basico';
ALTER TABLE aulas ADD COLUMN IF NOT EXISTS precisa_pagina boolean NOT NULL DEFAULT false;

ALTER TABLE aulas DROP CONSTRAINT IF EXISTS aulas_trilha_id_ordem_key;
ALTER TABLE aulas DROP CONSTRAINT IF EXISTS aulas_trilha_nivel_ordem;
ALTER TABLE aulas ADD CONSTRAINT aulas_trilha_nivel_ordem UNIQUE (trilha_id, nivel, ordem);

INSERT INTO trilhas (id, titulo, descricao, ordem, publicada)
VALUES (
  'javascript',
  'JavaScript',
  'A página reage. Recomendado: HTML e CSS básico antes.',
  10,
  true
)
ON CONFLICT (id) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  descricao = EXCLUDED.descricao,
  publicada = true;

UPDATE aulas SET trilha_id = 'javascript', nivel = 'basico' WHERE trilha_id = 'iniciante';
UPDATE aulas SET trilha_id = 'javascript', nivel = 'intermediario' WHERE trilha_id = 'intermediario';
UPDATE aulas SET trilha_id = 'javascript', nivel = 'avancado' WHERE trilha_id = 'avancado';

UPDATE aulas SET precisa_pagina = false;
UPDATE aulas SET precisa_pagina = true
WHERE slug IN (
  'dom', 'eventos', 'projeto-pedra-papel-tesoura',
  'formularios', 'modulos', 'projeto-lista-de-tarefas',
  'seguranca-front', 'projeto-consulta-publica'
);

DELETE FROM trilhas WHERE id IN ('iniciante', 'intermediario', 'avancado');

UPDATE trilhas SET ordem = 90 WHERE id = 'html-css';
UPDATE trilhas SET
  ordem = 2,
  titulo = 'JavaScript',
  descricao = 'A página reage. Recomendado: HTML e CSS básico antes.',
  publicada = true
WHERE id = 'javascript';
UPDATE trilhas SET
  ordem = 1,
  titulo = 'HTML e CSS',
  descricao = 'A estrutura e a roupa da página. Comece por aqui.',
  publicada = true
WHERE id = 'html-css';
