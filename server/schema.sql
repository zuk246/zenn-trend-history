DROP TABLE IF EXISTS histories;
CREATE TABLE histories (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    link TEXT NOT NULL,
    image TEXT,
    creator TEXT,
    publishedAt INTEGER NOT NULL,
    createdAt INTEGER NOT NULL
);
