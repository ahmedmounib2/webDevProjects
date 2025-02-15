CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    review INTEGER CHECK (review BETWEEN 1 AND 10),
    cover_url TEXT
);


INSERT INTO books (title, author, review) VALUES ('The Alchemist', 'Paulo Coelho', 9);

ALTER TABLE books ADD COLUMN review_text TEXT;

ALTER TABLE books ADD COLUMN read_date DATE;
