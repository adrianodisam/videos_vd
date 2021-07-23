create database videos_vd use videos_vd create table categoria(
	id int primary key auto_increment,
	nome varchar(100) not null,
	descricao varchar(100),
	data_criacao datetime not null,
	data_atualizacao datetime not null
);
create table tag(
	id int primary key,
	nome varchar(100) not null,
	data_criacao datetime not null,
	data_atualizacao datetime not null
);
create table video(
	id int primary key auto_increment,
	id_categoria int not null,
	nome varchar(100) not null,
	descricao varchar(100),
	ativo boolean default 1,
	data_atualizacao datetime not null,
	data_criacao datetime not null,
	foreign key(id_categoria) references categoria(id)
);
create table tag_video(
	id int primary key auto_increment,
	id_tag int not null,
	id_video int not null,
	foreign key(id_tag) references tag(id),
	foreign key(id_video) references video(id)
);