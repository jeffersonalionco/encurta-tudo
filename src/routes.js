import express from 'express';

import { nanoid } from 'nanoid';

import db from './db.js';


const router = express.Router();


// Criar uma url encurtada....
router.post('/encurtar', (req, res) => {
    const { url } = req.body
    const id = nanoid(6);


    // verificação de URL
    try {
        new URL(url);
    } catch {
        return res.status(400).json({ error: 'URL inválida' });
    }

    if (!url) {
        return res.status(400).json({ error: 'URL não fornecida!' });
    }


    db.run('INSERT into urls (id, original_url) values (?, ?)', [id, url], (error) => {
        if (error) return res.status(500).json({ error: "Error ao salvar URL." });
        res.json({ urlEncurtada: `${req.protocol}://${req.headers.host}/${id}` });
    })


})

// Rota get para encurtar
router.get('/encurtar', (req, res) => {
    const url = req.query.url;
    const id = nanoid(6);

    // verificação de URL
    try {
        new URL(url);
    } catch {
        return res.status(400).json({ error: 'URL inválida' });
    }

    if (!url) {
        return res.status(400).json({ error: 'URL não fornecida!' });
    }

    

    db.run('INSERT INTO urls (id, original_url) VALUES (?, ?)', [id, url], (error) => {
        if (error) {
            return res.status(500).json({ error: `Erro ao encurtar a URL: ${url}` });
        }

        const shortUrl = `${req.protocol}://${req.headers.host}/${id}`;
        res.status(200).json({ urlOriginal: url, urlEncurtada: shortUrl });
    });
});




// Rota para redirecionar.
router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.get('SELECT original_url FROM urls WHERE id = ?', [id], (error, row) => {

        if (error || !row) return res.status(404).json({ error: 'Url não existe!' });
        res.redirect(row.original_url);
    })
})




export default router;