# Criar o banco de dados
CREATE DATABASE db_biblioteca;

#Usar o banco de dados
USE db_biblioteca;

#Criar a tabela livro com os atributos
CREATE TABLE tbl_livro (
	   id int primary key auto_increment not null,
	   titulo varchar(200) not null,
	   autor varchar(50) not null,
	   ano_publicacao int not null,
	   genero varchar(30) not null,
	   isbn varchar(20) not null,
	   foto varchar(200) not null
	);

#Inserir alguns dados na tabelas, 3 livros
INSERT INTO tbl_livro(id, titulo, autor, ano_publicacao, genero, isbn, foto)values
	(0,"The Witcher: O último desejo","Andrezej Sapkowski",1993,"literatura fantástica",9473894890435,"https://m.media-amazon.com/images/I/61N2ZCfEB4L._AC_UF1000,1000_QL80_.jpg"),
	(0,"Drácrula","Bram Stroker",2018,"Ficção",3804947163097,"https://darkside.vtexassets.com/arquivos/ids/171650/197-dracula-de-bram-stoker-first-edition--2-.jpg?v=637327496733270000"),
	(0,"A garota do lago","Charlie Donlea",2016,"Suspense",3675894064387,"https://m.media-amazon.com/images/I/81sOwcbfp4L.jpg");

#Selecionar a tabela livros para visualizar se todos os atributos estão preenchidos corretamente
SELECT * FROM tbl_livro;
