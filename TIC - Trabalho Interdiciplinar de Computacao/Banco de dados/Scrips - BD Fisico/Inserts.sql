-- Inserts nas tabelas de dominio
INSERT INTO "institucional".tb_aluno(cod_aluno, cod_curso, senha, nome)
VALUES
(20470, 1, '000000', 'Wilson Guiraldelli'),
(19953, 2, '000000', 'Milena Lameirão'),
(20552, 1, '000000', 'José Higor'),
(20478, 1, '000000', 'Hyan Kelwin');
SELECT * FROM "institucional".tb_aluno

INSERT INTO "institucional".tb_curso(nome, cod_departamento)
VALUES
('Engenharia de Software', 1),
('Sistemas de Informação', 1),
('Ciência da Computação', 1),
('Matematica', 2),
('Engenharia de Produção', 3),
('Engenharia Civil', 3),
('Medicina', 4),
('Enfermagem', 4);
SELECT * FROM "institucional".tb_curso

INSERT INTO "institucional".tb_departamento(nome)
VALUES 
('Departamento de Computação'),
('Departamento de Matematica'),
('Departamento de Engenharia'),
('Departamento de Saúde');
SELECT * FROM "institucional".tb_departamento

INSERT INTO "eventos".tb_estado (sigla_estado)
VALUES
('SP'),
('MG'),
('RJ'),
('GO'),
('ES')

SELECT * FROM "eventos".tb_estado

INSERT INTO "eventos".tb_cidade(nome, sigla_estado)
VALUES
('Franca', 'SP'),
('Ribeirão Preato', 'SP'),
('Araraquara', 'SP'),
('Sertãozinho', 'SP'),
('Belo Horizonte', 'MG'),
('Uberlandia', 'MG'),
('Rio de Janeiro', 'RJ'),
('Buzios', 'RJ')

SELECT * FROM "eventos".tb_cidade

INSERT INTO "eventos".tb_local_evento(cod_cidade, nome, rua, numero, bairro)
VALUES
(1, 'Anfiteatro - Und 1 Uni-FACEF', 'Av. Major Nicácio', '2433', 'São José'),
(1, 'Anfiteatro - Und 2 Uni-FACEF', 'Av. Dr. Ismael Alonso y Alonso', '2400', 'São José'),
(1, 'Anfiteatro - Und 3 Uni-FACEF', 'Av. Dr. Ismael Alonso y Alonso', '2400', 'São José');

SELECT * FROM "eventos".tb_local_evento

INSERT INTO "eventos".tb_tipo_evento (nome)
VALUES
('Mini-curso'),
('Curso'),
('Palestra'),
('Workshop'),
('Prova'),
('Prova - Substitutiva'),
('Prova - DP'),
('Forum Educacional');

SELECT * FROM "eventos".tb_tipo_evento

INSERT INTO "eventos".tb_palestrante (nome, descricao_curriculo, empresa)
VALUES
('Bill Gates', 'CEO/Fundador da Microsoft Corporation', 'Microsoft Corporation'),
('Jeff Bezos', 'CEO/Fundador da Amazon.com ', 'Amazon.com'),
('Mark Zuckerberg', 'CEO/Fundador do Facebook Inc.', 'Facebook Inc.'),
('Larry Page', 'Co-fundador do Google e CEO da Alphabet Inc.', 'Google e Alphabet Inc.');

SELECT * FROM "eventos".tb_palestrante

-- Consultas 

SELECT 	le.nome as "Nome local",
	le.rua || ', '|| le.numero || ', ' || le.bairro as "Endereço",
	ci.nome || ' - ' || ci.sigla_estado as "Cidade"
 FROM "eventos".tb_local_evento le
 INNER JOIN "eventos".tb_cidade ci
  ON (ci.cod_cidade = le.cod_cidade)
 INNER JOIN "eventos".tb_estado es
  ON (es.sigla_estado = ci.sigla_estado)

SELECT 	al.nome || ' - ' || al.cod_aluno as "Aluno/Codigo",
	cur.nome || ' - ' || de.nome as "Curso"
 FROM "institucional".tb_aluno al
 INNER JOIN "institucional".tb_curso cur
  ON (al.cod_curso = cur.cod_curso)
 INNER JOIN "institucional".tb_departamento de
  ON (de.cod_departamento = cur.cod_departamento)

SELECT 	ev.nome as "Nome evento",
	ev.tema,
	ev.descricao,
	le.nome as "Nome local",
	le.rua || ', '|| le.numero || ', ' || le.bairro as "Endereço",
	ci.nome || ' - ' || ci.sigla_estado as "Cidade",
	ev.data_inicio,
	ev.data_fim,
	palestrante.nome as "Nome palestrante",
	palestrante.descricao_curriculo as "Curriculo",
	curso.nome as "Nome curso direcionado"
 FROM "eventos".tb_evento ev
 INNER JOIN "eventos".tb_local_evento le
  ON (le.cod_local = ev.cod_local)
  INNER JOIN "eventos".tb_cidade ci
  ON (ci.cod_cidade = le.cod_cidade)
 INNER JOIN "eventos".tb_estado es
  ON (es.sigla_estado = ci.sigla_estado)
 INNER JOIN "institucional".tb_docente doc
  ON (ev.cod_docente_cadastro = doc.cod_docente)
 LEFT JOIN LATERAL (
	SELECT 
		pa.nome,
		pa.descricao_curriculo
	 FROM "eventos". tb_evento_palestrante ep
	 INNER JOIN "eventos".tb_palestrante pa
	  ON (pa.cod_palestrante = ep.cod_palestrante)
	 WHERE ep.cod_evento = ev.cod_evento
 )AS palestrante on true
 
 LEFT JOIN LATERAL (
	SELECT cur.nome
	 FROM "eventos".tb_evento_curso ec
	 INNER JOIN "institucional".tb_curso cur
	  ON(cur.cod_curso = ec.cod_curso)
	 WHERE ec.cod_evento = ev.cod_evento
)AS curso on true

	
