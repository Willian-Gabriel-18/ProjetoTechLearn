-- Esqueleto das trilhas e aulas (sem blocos ainda).
-- Mini-projeto = última aula de cada trilha (tipo projeto).

INSERT INTO trilhas (id, titulo, descricao, ordem, publicada) VALUES
  (
    'iniciante',
    'JavaScript iniciante',
    'Do Console até um botão que muda a página. Termina com um joguinho.',
    1,
    true
  ),
  (
    'intermediario',
    'JavaScript intermediário',
    'Código moderno, dados da internet e um app de tarefas.',
    2,
    false
  ),
  (
    'avancado',
    'JavaScript avançado',
    'O motor da linguagem, um pouco de segurança e um app com API pública.',
    3,
    false
  );

INSERT INTO aulas (trilha_id, slug, titulo, resumo, ordem, tempo_minutos, tipo, publicada) VALUES
  ('iniciante', 'o-que-e-javascript', 'O que é JavaScript', 'O que o JS faz na página, editor, script e o primeiro Hello World.', 1, 20, 'aula', false),
  ('iniciante', 'console-e-devtools', 'O Console e as ferramentas do navegador', 'Abrir o DevTools, ler o Console e achar o erro vermelho.', 2, 15, 'aula', false),
  ('iniciante', 'variaveis', 'Guardar valores — variáveis', 'let, const e por que quase não usamos var.', 3, 20, 'aula', false),
  ('iniciante', 'tipos-de-dados', 'Tipos de dados', 'Número, texto, verdadeiro/falso e o que é vazio.', 4, 20, 'aula', false),
  ('iniciante', 'operadores', 'Contas e comparações — operadores', 'Contas, juntar texto e comparar do jeito seguro (===).', 5, 20, 'aula', false),
  ('iniciante', 'if-else', 'Decidir — if e else', 'O programa escolhe um caminho.', 6, 20, 'aula', false),
  ('iniciante', 'loops', 'Repetir — loops', 'for, while e como não travar o navegador.', 7, 20, 'aula', false),
  ('iniciante', 'funcoes', 'Funções — um bloco com nome', 'Declarar, chamar, parâmetro e return.', 8, 20, 'aula', false),
  ('iniciante', 'arrays', 'Listas — arrays', 'Vários valores, índice começando em 0.', 9, 20, 'aula', false),
  ('iniciante', 'objetos', 'Fichas — objetos simples', 'Um aluno, uma chave, um valor.', 10, 20, 'aula', false),
  ('iniciante', 'dom', 'A página é uma árvore — DOM', 'Achar um elemento e mudar texto e cor.', 11, 25, 'aula', false),
  ('iniciante', 'eventos', 'Clique e outros eventos', 'Um botão que faz a página reagir.', 12, 25, 'aula', false),
  ('iniciante', 'projeto-pedra-papel-tesoura', 'Mini-projeto: Pedra, papel e tesoura', 'Juntar o que você viu num joguinho com placar na tela.', 13, 40, 'projeto', false),
  ('intermediario', 'arrays-map-filter', 'Arrays com superpoderes', 'map, filter, find e forEach.', 1, 25, 'aula', false),
  ('intermediario', 'funcoes-es6', 'Funções do dia a dia', 'Arrow, template string, rest/spread e desestruturar.', 2, 25, 'aula', false),
  ('intermediario', 'escopo-e-closure', 'Onde a variável vale — escopo e closure', 'Bloco, função que lembra, contador.', 3, 25, 'aula', false),
  ('intermediario', 'json', 'JSON — o formato das APIs', 'Objeto vs texto; parse e stringify.', 4, 20, 'aula', false),
  ('intermediario', 'promises', 'Esperar sem travar — Promises', 'then, catch e espera encadeada.', 5, 25, 'aula', false),
  ('intermediario', 'async-await', 'async/await', 'Escrever espera como passo a passo.', 6, 20, 'aula', false),
  ('intermediario', 'fetch', 'Buscar dados — fetch', 'GET, JSON e API pública sem chave (ViaCEP).', 7, 25, 'aula', false),
  ('intermediario', 'formularios', 'Formulários', 'submit, preventDefault e validar vazio.', 8, 25, 'aula', false),
  ('intermediario', 'modulos', 'Organizar o código', 'Vários arquivos e import/export no navegador.', 9, 25, 'aula', false),
  ('intermediario', 'projeto-lista-de-tarefas', 'Mini-projeto: lista de tarefas', 'Incluir, concluir, filtrar e salvar no localStorage.', 10, 45, 'projeto', false),
  ('avancado', 'this', 'this e objetos com método', 'this em método e por que a arrow é diferente.', 1, 25, 'aula', false),
  ('avancado', 'classes', 'Classes (OOP leve)', 'class, constructor e método, sem virar Java.', 2, 25, 'aula', false),
  ('avancado', 'prototipo', 'Protótipo (o mecanismo por baixo)', 'Como um objeto encontra o que não tem nele.', 3, 25, 'aula', false),
  ('avancado', 'event-loop', 'A fila do JavaScript — event loop', 'Por que o log às vezes sai fora de ordem.', 4, 25, 'aula', false),
  ('avancado', 'erros', 'Erros de verdade', 'try/catch e mensagem para o aluno, sem alert na produção.', 5, 20, 'aula', false),
  ('avancado', 'bundler', 'Módulos e um bundler de relance', 'O que Vite/Nuxt fazem, em analogia.', 6, 20, 'aula', false),
  ('avancado', 'seguranca-front', 'Segurança no front', 'XSS, HTML cru e senha nunca no JS do cliente.', 7, 20, 'aula', false),
  ('avancado', 'projeto-consulta-publica', 'Mini-projeto: consulta pública', 'ViaCEP ou Brasil API: loading, erro e lista na tela.', 8, 45, 'projeto', false);
