CREATE DATABASE 'ERP'
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

create table IF NOT EXISTS banks (
    id bigserial constraint pk_banks PRIMARY KEY,
    name VARCHAR(60),
    agency VARCHAR(60),
    removed boolean DEFAULT false
);