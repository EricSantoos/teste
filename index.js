import express from 'express';

const app = express();

app.use(express.json());

const tarefas = []

app.get('/tarefas/:id', function (req, res){
    const id = parseInt(req.params.id);
    const tarefa = tarefas.find((t) => t.id === id);
    if(!tarefa){
        return res.status(404).json({erro: "tarefa nao encontrada"});
    }
    res.json(tarefa);
});

app.listen(3000);
