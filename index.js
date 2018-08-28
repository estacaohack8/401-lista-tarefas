const fs = require('fs');
const comando = process.argv[2];
const entrada = process.argv[3];
let listaTarefas = [];

fs.readFile('tarefas.json', {encoding: 'UTF-8'}, function(erro, dados){
    if(!erro){
        listaTarefas = JSON.parse(dados);
    }
    
    if(comando === 'inserir'){
        let tarefa = {
            conteudo: entrada,
            feita: false
        }
        
        listaTarefas.push(tarefa);
        
        let listaTarefasString = JSON.stringify(listaTarefas);
        
        fs.writeFile('tarefas.json', listaTarefasString, function(erro){
            if(erro){
                console.log('Erro ao gravar arquivo');
                return;
            }

            console.log('Tarefa inserida!');
        });
    } else if(comando === 'listar'){
        for(let i = 0; i < listaTarefas.length; i++){
            let tarefa = listaTarefas[i];
            let status = tarefa.feita ? 'feita' : 'pendente';
            //o ternário acima representa essa expressão:
            // if(tarefa.feita){
            //     status = 'feita';
            // }else{
            //     status = 'pendente';
            // }

            console.log(`${i+1} - ${tarefa.conteudo} - ${status}`);
        }
    } else if(comando === 'fazer'){
        console.log('O comando foi fazer');
    } else if(comando === 'limpar'){
        console.log('O comando foi limpar');
    } else {
        console.log('Comando inválido.');
    }
});