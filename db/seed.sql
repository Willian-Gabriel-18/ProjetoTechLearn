-- Esqueleto das trilhas e aulas (sem blocos ainda).
-- Mini-projeto = última aula de cada nível publicado.

INSERT INTO trilhas (id, titulo, descricao, ordem, publicada) VALUES
  (
    'html-css',
    'HTML e CSS',
    'A estrutura e o visual da página. Melhor depois da trilha Antes de começar.',
    1,
    true
  ),
  (
    'javascript',
    'JavaScript',
    'A página reage ao clique. Melhor depois das trilhas Antes de começar e HTML e CSS.',
    2,
    true
  );

INSERT INTO aulas (trilha_id, slug, titulo, resumo, ordem, tempo_minutos, tipo, nivel, precisa_pagina, publicada) VALUES
  ('html-css', 'o-que-e-uma-pagina', 'O que é uma página', 'Arquivo .html, abrir no navegador, e o mapa HTML / CSS / JS.', 1, 15, 'aula', 'basico', false, false),
  ('html-css', 'abrir-o-arquivo', 'Abrir o que você baixou', 'Extrair o zip, abrir no Chrome e ver o JavaScript no Console.', 2, 20, 'aula', 'basico', false, false),
  ('html-css', 'esqueleto', 'Esqueleto', 'doctype, html, head, body, charset, title e viewport.', 3, 15, 'aula', 'basico', false, false),
  ('html-css', 'texto-e-titulos', 'Texto e títulos', 'h1 a h3, parágrafo, negrito e ênfase.', 4, 15, 'aula', 'basico', false, false),
  ('html-css', 'links-imagens-listas', 'Links, imagens e listas', 'a, img com alt, listas numeradas e com marcador.', 5, 20, 'aula', 'basico', false, false),
  ('html-css', 'nomear-pecas', 'Nomear peças', 'id, class e div: o gancho que o JavaScript vai usar.', 6, 20, 'aula', 'basico', false, false),
  ('html-css', 'botao-e-formulario', 'Botão e formulário', 'button, input, label, form e checkbox. Sem JavaScript ainda.', 7, 20, 'aula', 'basico', false, false),
  ('html-css', 'css-ligar-e-vestir', 'CSS: ligar e vestir', 'Arquivo CSS, seletores, cor e letra.', 8, 20, 'aula', 'basico', false, false),
  ('html-css', 'caixa-e-lado-a-lado', 'Caixa e lado a lado', 'margin, padding, border e três botões em fila.', 9, 20, 'aula', 'basico', false, false),
  ('html-css', 'projeto-pagina-sua', 'Mini-projeto: uma página sua', 'Título, texto, imagem, lista e um botão. Porta atual: JavaScript.', 10, 30, 'projeto', 'basico', false, false),
  ('javascript', 'o-que-e-javascript', 'O que é JavaScript', 'O que o JS faz na página, editor, script e o primeiro Hello World.', 1, 20, 'aula', 'basico', false, false),
  ('javascript', 'console-e-devtools', 'O Console e as ferramentas do navegador', 'Abrir o DevTools, ler o Console e achar o erro vermelho.', 2, 15, 'aula', 'basico', false, false),
  ('javascript', 'variaveis', 'Guardar valores — variáveis', 'let, const e por que quase não usamos var.', 3, 20, 'aula', 'basico', false, false),
  ('javascript', 'tipos-de-dados', 'Tipos de dados', 'Número, texto, verdadeiro/falso e o que é vazio.', 4, 20, 'aula', 'basico', false, false),
  ('javascript', 'operadores', 'Contas e comparações — operadores', 'Contas, juntar texto e comparar do jeito seguro (===).', 5, 20, 'aula', 'basico', false, false),
  ('javascript', 'if-else', 'Decidir — if e else', 'O programa escolhe um caminho.', 6, 20, 'aula', 'basico', false, false),
  ('javascript', 'loops', 'Repetir — loops', 'for, while e como não travar o navegador.', 7, 20, 'aula', 'basico', false, false),
  ('javascript', 'funcoes', 'Funções — um bloco com nome', 'Declarar, chamar, parâmetro e return.', 8, 20, 'aula', 'basico', false, false),
  ('javascript', 'arrays', 'Listas — arrays', 'Vários valores, índice começando em 0.', 9, 20, 'aula', 'basico', false, false),
  ('javascript', 'objetos', 'Fichas — objetos simples', 'Um aluno, uma chave, um valor.', 10, 20, 'aula', 'basico', false, false),
  ('javascript', 'dom', 'A página é uma árvore — DOM', 'Achar um elemento e mudar texto e cor.', 11, 25, 'aula', 'basico', true, false),
  ('javascript', 'eventos', 'Clique e outros eventos', 'Um botão que faz a página reagir.', 12, 25, 'aula', 'basico', true, false),
  ('javascript', 'projeto-pedra-papel-tesoura', 'Mini-projeto: Pedra, papel e tesoura', 'Juntar o que você viu num joguinho com placar na tela.', 13, 40, 'projeto', 'basico', true, false),
  ('javascript', 'arrays-map-filter', 'Arrays com superpoderes', 'map, filter, find e forEach.', 1, 25, 'aula', 'intermediario', false, false),
  ('javascript', 'funcoes-es6', 'Funções do dia a dia', 'Arrow, template string, rest/spread e desestruturar.', 2, 25, 'aula', 'intermediario', false, false),
  ('javascript', 'escopo-e-closure', 'Onde a variável vale — escopo e closure', 'Bloco, função que lembra, contador.', 3, 25, 'aula', 'intermediario', false, false),
  ('javascript', 'json', 'JSON — o formato das APIs', 'Objeto vs texto; parse e stringify.', 4, 20, 'aula', 'intermediario', false, false),
  ('javascript', 'promises', 'Esperar sem travar — Promises', 'then, catch e espera encadeada.', 5, 25, 'aula', 'intermediario', false, false),
  ('javascript', 'async-await', 'async/await', 'Escrever espera como passo a passo.', 6, 20, 'aula', 'intermediario', false, false),
  ('javascript', 'fetch', 'Buscar dados — fetch', 'GET, JSON e API pública sem chave (ViaCEP).', 7, 25, 'aula', 'intermediario', false, false),
  ('javascript', 'formularios', 'Formulários', 'submit, preventDefault e validar vazio.', 8, 25, 'aula', 'intermediario', true, false),
  ('javascript', 'modulos', 'Organizar o código', 'Vários arquivos e import/export no navegador.', 9, 25, 'aula', 'intermediario', true, false),
  ('javascript', 'projeto-lista-de-tarefas', 'Mini-projeto: lista de tarefas', 'Incluir, concluir, filtrar e salvar no localStorage.', 10, 45, 'projeto', 'intermediario', true, false),
  ('javascript', 'this', 'this e objetos com método', 'this em método e por que a arrow é diferente.', 1, 25, 'aula', 'avancado', false, false),
  ('javascript', 'classes', 'Classes (OOP leve)', 'class, constructor e método, sem virar Java.', 2, 25, 'aula', 'avancado', false, false),
  ('javascript', 'prototipo', 'Protótipo (o mecanismo por baixo)', 'Como um objeto encontra o que não tem nele.', 3, 25, 'aula', 'avancado', false, false),
  ('javascript', 'event-loop', 'A fila do JavaScript — event loop', 'Por que o log às vezes sai fora de ordem.', 4, 25, 'aula', 'avancado', false, false),
  ('javascript', 'erros', 'Erros de verdade', 'try/catch e mensagem para o aluno, sem alert na produção.', 5, 20, 'aula', 'avancado', false, false),
  ('javascript', 'bundler', 'Módulos e um bundler de relance', 'O que Vite/Nuxt fazem, em analogia.', 6, 20, 'aula', 'avancado', false, false),
  ('javascript', 'seguranca-front', 'Segurança no front', 'XSS, HTML cru e senha nunca no JS do cliente.', 7, 20, 'aula', 'avancado', true, false),
  ('javascript', 'projeto-consulta-publica', 'Mini-projeto: consulta pública', 'ViaCEP ou Brasil API: loading, erro e lista na tela.', 8, 45, 'projeto', 'avancado', true, false);
