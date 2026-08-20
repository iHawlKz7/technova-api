CREATE TABLE IF NOT EXISTS pedidos (
  id SERIAL PRIMARY KEY,
  cliente VARCHAR(255) NOT NULL,
  item VARCHAR(255) NOT NULL,
  quantidade INTEGER NOT NULL,
  status VARCHAR(50) NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO pedidos (cliente, item, quantidade, status) VALUES
  ('TechNova Corp', 'Licença Enterprise', 1, 'aprovado'),
  ('StartupXYZ', 'Plano Básico', 3, 'pendente'),
  ('MegaLtda', 'Consultoria DevOps', 1, 'em_andamento');