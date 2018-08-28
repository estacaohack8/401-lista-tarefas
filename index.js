const fs = require('fs');
const comando = process.argv[2];
const entrada = process.argv[3];
let listaTarefas = [];

fs.readFile('tarefas.json', {encoding: 'UTF-8'}, function(erro, dados){
    listaTarefas = JSON.parse(dados);
    
    if(comando === 'inserir'){
        let tarefa = {
            conteudo: entrada,
            feita: false
        }
        
        listaTarefas.push(tarefa);
        
        let listaTarefasString = JSON.stringify(listaTarefas);
        
        fs.writeFile('tarefas.json', listaTarefasString, function(erro){
            console.log(erro);
        });
    } else if(comando === 'listar'){
        console.log('O comando foi listar');
    } else if(comando === 'fazer'){
        console.log('O comando foi fazer');
    } else if(comando === 'limpar'){
        console.log('O comando foi limpar');
    } else {
        console.log('Comando inválido.');
    }
});