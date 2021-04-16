-- trabalho com base na Implementação de percentual de desconto de produto


select
codigo,
nome,
valor,
valor - (valor * 0.50)as preço_valor
from produto

-- nesse caso coloquei um unico percentual fixo para todos os produtos mas imagino que possa ser colocado também uma tabela na formula, n ocaso ficaria (valor - (valor * "tabela de %")as preço_valor
-- codigo do trabal
-- CREATE TABLE public.produto
-- (
--     codigo character varying(5) NOT NULL,
--     nome character varying(100) NOT NULL,
--     descricao text,
--     valor double precision,
--     categoria character varying(30) NOT NULL,
--     CONSTRAINT produto_codigo_pkey PRIMARY KEY (codigo)
-- );
-- 
-- 
-- ALTER TABLE public.produto OWNER to postgres;
-- 
-- 
-- INSERT INTO produto (codigo, nome, valor, categoria)
--  VALUES 
--    ('AF56V', 'Geladeira Brastemp', 2220.90, 'Eletro'),
--    ('H5G56', 'Fogão Electrolux', 1605.20, 'Eletro'),
--    ('J5G58', 'Cama Queen Size Ortobom', 1800.07, 'Casa e Jardim'),
--    ('U7445', 'Playstation 5', 7800.03, 'Entretenimento'),
--    ('T9HJu', 'Playstation 5', 2800.03, 'Entretenimento');