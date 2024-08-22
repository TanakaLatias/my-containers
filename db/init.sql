CREATE TABLE your_table (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

INSERT INTO your_table (title) VALUES 
('Hello'),
('Thank you'),
('Goodbye');