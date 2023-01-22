create database usertest;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'canela' ;
flush privileges;
SHOW DATABASES;
use usertest;
show tables;
create table users_data(
id int not null auto_increment,
username varchar(250) not null,
stage varchar(250) not null default 'limbo',
chest varchar(250) not null default 'no items',
weapon varchar(250) not null default 'fists',
primary key(id)
)
engine = InnoDB auto_increment= 9 default
charset = utf8mb4 collate= utf8mb4_0900_ai_ci;

insert into users_data(username, stage) values ('badbunny01', 'cold plains');
select * from users_data;