-- Criação dos Schemas
CREATE SCHEMA "institucional";
CREATE SCHEMA "eventos";

-- Criação das tabelas do SCHEMA Institucional
CREATE TABLE "institucional".tb_departamento(
	cod_departamento	SERIAL 
		CONSTRAINT nn_cod_departamento NOT NULL,
	nome	VARCHAR(30) 
		CONSTRAINT nn_nome NOT NULL,

	CONSTRAINT pk_departamento PRIMARY KEY (cod_departamento)
);

CREATE TABLE "institucional".tb_curso(
	cod_curso SERIAL 
		CONSTRAINT nn_cod_curso NOT NULL,
	cod_departamento INTEGER 
		CONSTRAINT nn_cod_departamento NOT NULL,
	nome 	VARCHAR(30) 
		CONSTRAINT n_nome NOT NULL,
	descricao TEXT,
	ativo BOOLEAN 
		DEFAULT TRUE
		CONSTRAINT nn_ativo NOT NULL,

	CONSTRAINT pk_curso PRIMARY KEY (cod_curso),
	CONSTRAINT fk_curso_departamento FOREIGN KEY (cod_departamento)
		REFERENCES "institucional".tb_departamento (cod_departamento)
);

CREATE TABLE "institucional".tb_aluno(
	cod_aluno INTEGER 
		CONSTRAINT nn_cod_aluno NOT NULL,
	cod_curso INTEGER 
		CONSTRAINT cod_curso NOT NULL,
	nome 	VARCHAR(60) 
		CONSTRAINT nn_nome NOT NULL,
	senha	VARCHAR(30) 
		CONSTRAINT nn_senha NOT NULL,
	ativo 	BOOLEAN 
		DEFAULT TRUE
		CONSTRAINT nn_ativo NOT NULL,

	CONSTRAINT pk_aluno PRIMARY KEY (cod_aluno),
	CONSTRAINT fk_aluno_curso FOREIGN KEY (cod_curso)
		REFERENCES "institucional".tb_curso (cod_curso)
);

CREATE TABLE "institucional".tb_docente(
	cod_docente INTEGER 
		CONSTRAINT nn_cod_docente NOT NULL,
	nome_usuario VARCHAR(30) 
		CONSTRAINT nn_nome_usuario NOT NULL,
	nome	VARCHAR(60)
		CONSTRAINT nn_nome NOT NULL,
	senha	VARCHAR(30) 
		CONSTRAINT nn_senha NOT NULL,
	email	VARCHAR(60) 
		CONSTRAINT nn_email NOT NULL,
	permissao BOOLEAN  
		DEFAULT FALSE
		CONSTRAINT nn_permissao NOT NULL,
	ativo	BOOLEAN 
		DEFAULT TRUE 
		CONSTRAINT nn_ativo NOT NULL,

	CONSTRAINT pk_docente PRIMARY KEY (cod_docente),
	CONSTRAINT unq_nome_usuario UNIQUE (nome_usuario)
);
 	
CREATE TABLE "institucional".tb_docente_departamento(
	cod_docente INTEGER,
	cod_departamento INTEGER,

	CONSTRAINT pk_docente_departamento PRIMARY KEY (cod_docente, cod_departamento),
	CONSTRAINT fk_docente_departamento_docente FOREIGN KEY (cod_docente)
		REFERENCES "institucional".tb_docente (cod_docente),
	CONSTRAINT fk_docente_departamento_departamento FOREIGN KEY (cod_departamento)
		REFERENCES "institucional".tb_departamento (cod_departamento)
);

--Criação das tabelas do SCHEMA Eventos
CREATE TABLE "eventos".tb_tipo_evento(
	cod_tipo_evento SERIAL
		CONSTRAINT nn_cod_tipo_evento NOT NULL,
	nome	VARCHAR(60)
		CONSTRAINT nn_nome NOT NULL,

	CONSTRAINT pk_tipo_evento PRIMARY KEY (cod_tipo_evento)
);

CREATE TABLE "eventos".tb_estado(
	sigla_estado CHAR(2),

	CONSTRAINT pk_estado PRIMARY KEY (sigla_estado)
);

CREATE TABLE "eventos".tb_cidade(
	cod_cidade SERIAL
		CONSTRAINT nn_cod_cidade NOT NULL,
	nome	VARCHAR(60) 
		CONSTRAINT nn_nome NOT NULL,
	sigla_estado	CHAR(2) 
		CONSTRAINT nn_sigla_estado NOT NULL,

	CONSTRAINT pk_cidade PRIMARY KEY (cod_cidade),
	CONSTRAINT fk_cidade_estado FOREIGN KEY (sigla_estado)
		REFERENCES "eventos".tb_estado (sigla_estado)
);

CREATE TABLE "eventos".tb_local_evento(
	cod_local SERIAL
		CONSTRAINT nn_cod_local NOT NULL,
	cod_cidade INTEGER
		CONSTRAINT nn_cod_cidade NOT NULL,
	nome	VARCHAR(30) 
		CONSTRAINT nn_nome NOT NULL,
	rua 	VARCHAR(30),
	numero 	VARCHAR(10),
	complemento VARCHAR(30),
	bairro 	VARCHAR(30),

	CONSTRAINT pk_cod_local PRIMARY KEY (cod_local),
	CONSTRAINT fk_cod_cidade FOREIGN KEY (cod_cidade)
		REFERENCES "eventos".tb_cidade (cod_cidade)
);

CREATE TABLE "eventos".tb_evento(
	cod_evento SERIAL
		CONSTRAINT nn_cod_evento NOT NULL,
	cod_docente_cadastro INTEGER
		CONSTRAINT nn_docente_cadastro NOT NULL,
	cod_tipo_evento INTEGER 
		CONSTRAINT nn_cod_tipo_evento NOT NULL,
	cod_local INTEGER
		CONSTRAINT nn_cod_local NOT NULL,
	nome	VARCHAR(100)
		CONSTRAINT nn_nome NOT NULL,
	tema	VARCHAR (60),
	descricao TEXT,
	data_inicio TIMESTAMP WITH TIME ZONE 
		CONSTRAINT nn_data_inicio NOT NULL,
	data_fim TIMESTAMP WITH TIME ZONE
		CONSTRAINT nn_data_fim NOT NULL,
	ativo BOOLEAN
		DEFAULT TRUE
		CONSTRAINT nn_ativo NOT NULL,

	CONSTRAINT pk_evento PRIMARY KEY (cod_evento),
	CONSTRAINT fk_evento_docente FOREIGN KEY (cod_docente_cadastro)
		REFERENCES "institucional".tb_docente (cod_docente),
	CONSTRAINT fk_evento_tipo_evento FOREIGN KEY (cod_tipo_evento)
		REFERENCES "eventos".tb_tipo_evento (cod_tipo_evento),
	CONSTRAINT fk_evento_local FOREIGN KEY (cod_local)
		REFERENCES "eventos".tb_local_evento (cod_local)
);

CREATE TABLE "eventos".tb_palestrante(
	cod_palestrante SERIAL
		CONSTRAINT nn_cod_palestrante NOT NULL,
	nome VARCHAR(60)
		CONSTRAINT nn_nome NOT NULL,
	descricao_curriculo	TEXT,
	foto VARCHAR(500),
	ativo	BOOLEAN
		DEFAULT TRUE
		CONSTRAINT nn_ativo NOT NULL,

	CONSTRAINT pk_palestrante PRIMARY KEY (cod_palestrante)
);

CREATE TABLE "eventos".tb_evento_palestrante(
	cod_evento INTEGER,
	cod_palestrante INTEGER,

	CONSTRAINT pk_evento_palestrante PRIMARY KEY (cod_evento, cod_palestrante),
	CONSTRAINT fk_evento_palestrante_evento FOREIGN KEY (cod_evento)
		REFERENCES "eventos".tb_evento (cod_evento),
	CONSTRAINT fk_evento_palestrante_palestrante FOREIGN KEY (cod_palestrante)
		REFERENCES "eventos".tb_palestrante (cod_palestrante)
);

CREATE TABLE "eventos".tb_evento_curso(
	cod_curso INTEGER,
	cod_evento INTEGER,

	CONSTRAINT pk_evento_curso PRIMARY KEY (cod_curso, cod_evento),
	CONSTRAINT fk_evento_curso_evento FOREIGN KEY (cod_evento)
		REFERENCES "eventos".tb_evento (cod_evento),
	CONSTRAINT fk_evento_curso_curso FOREIGN KEY (cod_curso)
		REFERENCES "institucional".tb_curso (cod_curso)
);