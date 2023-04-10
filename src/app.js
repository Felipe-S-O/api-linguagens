import express from "express";

const app = express();

app.use(express.json())

const linguagens = [
    { id: 1, "titulo": "node", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", },
    { id: 2, "titulo": "java", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", },
    { id: 3, "titulo": "react", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", },
]

app.get('/', (req, res) => {
    res.status(200).send('Desenvolvedor Felipe Silva 🙅‍♂️');
})

app.get('/linguagens/:id', (req, res) => {
    let index = buscalinguagem(req.params.id);
    res.json(linguagens[index])
})

app.get('/linguagens', (req, res) => {
    res.status(200).json(linguagens);
})

app.post('/linguagens', (req, res) => {
    linguagens.push(req.body);
    res.status(201).send('linguagem foi cadastrada com sucesso');
})

app.put('/linguagens/:id', (req, res) => {

    let index = buscalinguagem(req.params.id);
    linguagens[index].titulo = req.body.titulo;
    res.json(linguagens);

    res.status(201).send('linguagem foi atualizarda com sucesso');
})

app.delete('/linguagens/:id', (req, res) => {

    let { id } = req.params;

    let index = buscalinguagem(id);
    linguagens.splice(index, 1);

    res.send(`linguagem ${id} removida com sucesso`);
})

function buscalinguagem(id) {
    return linguagens.findIndex(linguagem => linguagem.id == id);
}

export default app