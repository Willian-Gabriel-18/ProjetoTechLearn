# TechLearn

Aulas de programação em português, de graça, para quem está começando. Texto direto, rota linear e prática no computador — pasta, VS Code e Chrome.

**[projeto-tech-learn.vercel.app](https://projeto-tech-learn.vercel.app)**

![Página inicial do TechLearn, com as três trilhas](docs/home.jpg)

## O que é

O TechLearn é uma plataforma de tutoriais. Cada aula cabe em pouco tempo: leitura, um conceito novo, um “você tenta” e um exercício com gabarito. Quase toda aula com código traz um arquivo para baixar, abrir no Chrome e alterar.

Dá para estudar **sem conta**. A conta serve só para marcar o que já foi feito.

## Trilhas

| Ordem | Trilha | Conteúdo |
| --- | --- | --- |
| 1 | [Antes de começar](https://projeto-tech-learn.vercel.app/aprender/comecar) | Pasta, extensão, Chrome, VS Code, baixar o zip e as duas bancadas (página e Console). 6 aulas. |
| 2 | [HTML e CSS](https://projeto-tech-learn.vercel.app/aprender/html-css) | Estrutura e visual da página, até um mini-projeto. 10 aulas no básico. |
| 3 | [JavaScript](https://projeto-tech-learn.vercel.app/aprender/javascript) | Básico, intermediário e avançado: da primeira linha no Console até fetch, módulos e um buscador de CEP. 31 aulas. |

Há também a seção [Novidades](https://projeto-tech-learn.vercel.app/novidades): textos curtos sobre API, JSON, Java × JavaScript e o que a IA muda (ou não muda) em quem está aprendendo.

## Funcionalidades

- Trilhas publicadas em sequência, com recado quando outra trilha ajuda — sem trava
- Blocos de aula: texto, palavra nova, código com copiar, imagem, vídeo, “você tenta”, exercício e download
- Progresso por aula e por nível (básico, intermediário, avançado), com login
- Conta: nome, e-mail e senha
- Editor admin em blocos, com preview do que o aluno vê
- Layout pensado para leitura (tipo acessível, skip-link, botão voltar ao topo)

## Stack

| Camada | Tecnologia |
| --- | --- |
| App | [Nuxt 4](https://nuxt.com/) + Vue 3 |
| Estilo | Tailwind CSS |
| API | Nitro (`server/api`) |
| Banco | Postgres ([Neon](https://neon.tech/)) |
| Auth | Sessão em cookie httpOnly, senha com hash |
| Host | [Vercel](https://vercel.com/) (São Paulo, `gru1`) |

Node.js **20.19** ou **22.12+**.

## Como rodar

Crie um banco Postgres e um arquivo `.env` na raiz:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST/techlearn?sslmode=require
SESSION_SECRET=um-segredo-longo-e-aleatorio
ADMIN_EMAIL=voce@email.com
ADMIN_PASSWORD=senha-forte
```

`ADMIN_EMAIL` e `ADMIN_PASSWORD` valem só na máquina, para o script que cria o administrador. Não coloque esses dois no host.

```bash
npm install
```

Aplique o schema (`db/schema.sql`) no Postgres. Depois:

```bash
npm run seed          # gera os arquivos das aulas, empacota os zips e grava o conteúdo
npm run criar-admin   # opcional
npm run dev
```

O app sobe em `http://localhost:3000`.

## Onde está o conteúdo

| O quê | Onde |
| --- | --- |
| Texto das aulas e das novidades | `db/seed-blocos/` |
| Schema | `db/schema.sql` |
| Arquivos que o aluno baixa | `public/files/aulas/` (gerados por `db/gerar-pacotes.mjs`) |
| Imagens e diagramas | `public/images/` |

`npm run seed` apaga os blocos no banco e reinsere o que está nos arquivos. Edições feitas só no admin de bloco voltam para o seed se o comando rodar de novo.

## Licença

[MIT](LICENSE) © [Willian Gabriel](https://github.com/Willian-Gabriel-18)
