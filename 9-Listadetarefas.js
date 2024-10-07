 class Tarefa {
    constructor(id, descricao) {
        this.id = id;
        this.descricao = descricao;
    }
}

class GerenciadorDeTarefas {
    constructor() {
        this.tarefas = [];
        this.proximoId = 1; // Inicia com o ID 1
    }

    adicionarTarefa(descricao) {
        const novaTarefa = new Tarefa(this.proximoId++, descricao);
        this.tarefas.push(novaTarefa);
        console.log(`Tarefa adicionada: [ID: ${novaTarefa.id}] ${novaTarefa.descricao}`);
    }

    removerTarefa(id) {
        const index = this.tarefas.findIndex(tarefa => tarefa.id === id);
        if (index !== -1) {
            const tarefaRemovida = this.tarefas.splice(index, 1);
            console.log(`Tarefa removida: [ID: ${tarefaRemovida[0].id}] ${tarefaRemovida[0].descricao}`);
        } else {
            console.log(`Tarefa com ID ${id} não encontrada.`);
        }
    }

    listarTarefas() {
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa cadastrada.");
            return;
        }

        console.log("Lista de Tarefas:");
        this.tarefas.forEach(tarefa => {
            console.log(`[ID: ${tarefa.id}] ${tarefa.descricao}`);
        });
    }
}

// Função principal
function iniciarGerenciadorDeTarefas() {
    const gerenciador = new GerenciadorDeTarefas();

    while (true) {
        const acao = prompt("Escolha uma ação: 1. Adicionar Tarefa 2. Remover Tarefa 3. Listar Tarefas 4. Sair");

        if (acao === '1') {
            const descricao = prompt("Digite a descrição da tarefa:");
            gerenciador.adicionarTarefa(descricao);
        } else if (acao === '2') {
            const id = parseInt(prompt("Digite o ID da tarefa a ser removida:"));
            gerenciador.removerTarefa(id);
        } else if (acao === '3') {
            gerenciador.listarTarefas();
        } else if (acao === '4') {
            console.log("Saindo do gerenciador de tarefas.");
            break;
        } else {
            console.log("Opção inválida. Tente novamente.");
        }
    }
}

// Iniciar o programa
iniciarGerenciadorDeTarefas();


