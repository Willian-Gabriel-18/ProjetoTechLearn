-- Capa das novidades (lista /novidades e topo do artigo).
ALTER TABLE noticias ADD COLUMN IF NOT EXISTS imagem_capa text;
