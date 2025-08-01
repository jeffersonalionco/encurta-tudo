import sqlite3 from 'sqlite3';

sqlite3.verbose();


const db = new sqlite3.Database('./encurtaUrl.db');


db.serialize( () => {
    // criando uma tabela no banco encurtaUrl chamada urls se nao existir 
    db.run(`
        CREATE TABLE IF NOT EXISTS urls(
        id TEXT PRIMARY KEY,
        original_url TEXT NOT NULL
        )
        `)
});

// exporta a conexão com o banco atraves da variavel db
export default db 