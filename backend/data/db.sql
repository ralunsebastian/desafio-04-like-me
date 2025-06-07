-- Database: likeme

-- DROP DATABASE IF EXISTS likeme;

CREATE DATABASE likeme
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'es-ES'
    LC_CTYPE = 'es-ES'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


    -- Crear tabla posts
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    descripcion TEXT,
    likes INTEGER DEFAULT 0
);
