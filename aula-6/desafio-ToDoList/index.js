class Tarefa {
    constructor(titulo, descricao, prioridade) {
        if (prioridade.toLowerCase() == 'baixa' || prioridade.toLowerCase() === 'média' || prioridade.toLowerCase() === 'alta') {
            this.titulo = titulo;
            this.descricao = descricao;
            this.prioridade = prioridade.toLowerCase();
            this.status = 'pendente';
        } else {
            throw new Error('Priodidade precisar ser baixa, média ou alta.');
        }
    }
}

class ListaTarefas {
    #tarefas = [];

    constructor(nome) {
        this.nome = nome
    }

    adicionarTarefa(tarefa) {
        if(!tarefa)
            throw new Error('É necesáiro passar uma tarefa.');

        if(this.#tarefas.length > 0){
            let existeTarefa = this.#tarefas.findIndex(t => t.titulo.toLowerCase() === tarefa.titulo.toLowerCase());
            if(existeTarefa !== (-1)){
                throw new Error('Essa tarefa já existe. Por favor, selecione outro título.')
            }
        }

        this.#tarefas.push(tarefa);
        console.log('Tarefa adicionada com sucesso!');
    }

    removerTarefa(tarefa) {
        if (!tarefa) {
            throw new Error('É necesáiro passar uma tarefa.')
        }

        let indexTarefa = this.#tarefas.findIndex(t => t.titulo.toLowerCase() === tarefa.titulo.toLowerCase());
        if (indexTarefa >= 0) {
            this.#tarefas.splice(indexTarefa, 1);

            console.log('Tarefa removida com sucesso!');
        } else {
            throw new Error('A tarefa não existe.')
        }
    }

    marcarConcluida(tarefa) {
        if (!tarefa) {
            throw new Error('É necesáiro passar uma tarefa.')
        }

        let indexTarefa = this.#tarefas.findIndex(t => t.titulo.toLowerCase() === tarefa.titulo.toLowerCase());
        if (indexTarefa >= 0) {
            this.#tarefas[indexTarefa].status = 'concluída';

            console.log('Tarefa concluída com sucesso!');
        } else {
            throw new Error('A tarefa não existe');
        }
    }

    exibirLista() {
        return { NomeDalista: this.nome, Lista: this.#tarefas }
    }

    exibirTarefa(tarefa){
        if (!tarefa) {
            throw new Error('É necesáiro passar uma tarefa.')
        }

        let tarefaEncontrada = this.#tarefas.find(t => t.titulo.toLowerCase() === tarefa.titulo.toLowerCase());
        if(tarefaEncontrada){
            return tarefaEncontrada;
        } else {
            throw new Error('A tarefa não existe.');
        }
    }

    calcularEstatisticas() {
        if(this.#tarefas.length === 0){
            return 'Você não possui tarefas para calcular.';
        }

        const tarefasConcluídas = this.#tarefas.filter(t => {
            return t.status === 'concluída'
        });

        let porcentagemFeita = (tarefasConcluídas.length / this.#tarefas.length)*100

        if(porcentagemFeita < 50){
            return `Você concluiu ${tarefasConcluídas.length} de ${this.#tarefas.length}. Parabéns! Você executou ${porcentagemFeita}%`
        } else if (porcentagemFeita >= 50 && porcentagemFeita <= 99){
            return `Você concluiu ${tarefasConcluídas.length} de ${this.#tarefas.length}. Que ótimo! Falta pouco para você concluir todas as suas metas! Você executou ${porcentagemFeita}%. Continue assim!`
        } else {
            return `Você concluiu ${tarefasConcluídas.length} de ${this.#tarefas.length}. Você executou ${porcentagemFeita}% e concluiu suas tarefas!`
        }
    }
}

class AplicativoToDoList {
    listas = [];
    listaSelecionada;

    addListaExistente(lista){
        if(!lista)
            throw new Error('É necessário passar uma lista');

        if(this.listas.length > 0 ){
            this.listas.forEach( l=> {
                if(l.nome.toLowerCase() === lista.nome.toLowerCase()){
                    throw new Error('Essa lista já existe em seu app. Por favor, escolha outro nome.')
                }
            })
        }

        this.listas.push(lista);
        console.log(`Lista ${lista.nome} adicionada ao app.`);
    }

    criarLista(nome) {
        if(!nome)
            throw new Error('É necessário informar o nome da lista.');

        if(this.listas.length > 0){
            this.listas.forEach(l => {
                if(l.nome.toLowerCase() === nome.toLowerCase()){
                    throw new Error('Essa lista já existe. Por favor, escolha outro nome.')
                }
            })
        }

        let nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
        const lista = new ListaTarefas(nomeFormatado);
        this.listas.push(lista);
        console.log(`Lista ${nomeFormatado} criada com sucesso!`);
    }

    exibirListasDisponiveis() {
        this.listas.forEach(lista => {
            console.log(lista.exibirLista());
        })
    }

    selecionarLista(nome) {
        if (this.listas.length === 0)
            throw new Error('Você ainda não possui listas de tarefas.')

        if(!nome){
            throw new Error('É necessário informar o nome da lista.')
        }

        const listaSelecionada = this.listas.find((lista) => lista.nome.toLowerCase() === nome.toLowerCase());

        if (listaSelecionada) {
            this.listaSelecionada = listaSelecionada;
            console.log(`Lista ${this.listaSelecionada.nome} selecionada com sucesso!`)
        } else {
            throw new Error('Essa lista não existe!');
        }
    }

    adicionarTarefa(tarefa) {
        // Substituir a tarefa por uma instância da tarefa dentro da classe do aplicativo
        if (!tarefa)
            throw new Error('É necessário passar uma tarefa.');

        this.listas.forEach(lista => {
            if (lista.nome.toLowerCase() === this.listaSelecionada.nome.toLowerCase()) {
                lista.adicionarTarefa(tarefa);
            }

        })
    }

    removerTarefa(tarefa) {
        if(!tarefa)
            throw new Error('É necessário passar uma tarefa.');

        this.listas.forEach(lista => {
            if (lista.nome.toLowerCase() === this.listaSelecionada.nome.toLowerCase()){
                lista.removerTarefa(tarefa);
            }
        })
    }

    concluirTarefa(tarefa){
        if (!tarefa)
            throw new Error('É necessário passar uma tarefa.');

        this.listas.forEach(lista => {
            if(lista.nome.toLowerCase() === this.listaSelecionada.nome.toLowerCase()){
                lista.marcarConcluida(tarefa);
            }
        })
    }

    exibirTarefa(tarefa) {
        if (!tarefa)
            throw new Error('É necessário passar uma tarefa.');

        this.listas.forEach(lista => {
            if (lista.nome.toLowerCase() === this.listaSelecionada.nome.toLowerCase()){
                console.log(lista.exibirTarefa(tarefa));
            }
        })
    }

}

// criação de tarefas da lista 1
const tarefa1 = new Tarefa('Caminhada', 'Caminha pelo quarteirão por 1 hora', 'baixa');
const tarefa2 = new Tarefa('Fazer almoços da semana', 'Fazer 30 marmitas para o almoço e jantar da semana', 'baixa');
const tarefa3 = new Tarefa('Fazer projeto em POO', 'Revisar POO e criar as classes iniciais', 'baixa');
const tarefa4 = new Tarefa('Lavar o carro', 'Lavar o carro no terraço com água e sabão', 'baixa');
const tarefa5 = new Tarefa('Levar cachorro para passear', 'caminha ocm o cachorro pelo quarteirão por 1 hora', 'alta');

// criação da lista 1
const lista1 = new ListaTarefas('Casa');
lista1.adicionarTarefa(tarefa1);
lista1.adicionarTarefa(tarefa2);
lista1.adicionarTarefa(tarefa3);
lista1.adicionarTarefa(tarefa4);
lista1.adicionarTarefa(tarefa5);

//criação de tarefas da lista 2
const tarefa6 = new Tarefa('Acordar 6h', 'Caminha pelo quarteirão por 1 hora', 'baixa');
const tarefa7 = new Tarefa('Fazer planilha de dados', 'Fazer 30 marmitas para o almoço e jantar da semana', 'baixa');
const tarefa8 = new Tarefa('Criar classes', 'Revisar POO e criar as classes iniciais', 'baixa');
const tarefa9 = new Tarefa('Enviar projeto final', 'Lavar o carro no terraço com água e sabão', 'baixa');
const tarefa10 = new Tarefa('Gerenciar tasks do Trello', 'caminha com o cachorro pelo quarteirão por 1 hora', 'alta');

// criação da lista 2
const lista2 = new ListaTarefas('Trabalho');
lista2.adicionarTarefa(tarefa6);
lista2.adicionarTarefa(tarefa7);
lista2.adicionarTarefa(tarefa8);
lista2.adicionarTarefa(tarefa9);
lista2.adicionarTarefa(tarefa10);

// Instância do aplicativo
const appToDoList = new AplicativoToDoList();

// Criação de listas e tarefas a partir do appToDoList 
appToDoList.addListaExistente(lista1);
appToDoList.addListaExistente(lista2);

appToDoList.criarLista('TESTE');

appToDoList.exibirListasDisponiveis();

appToDoList.selecionarLista('TESTE');

appToDoList.adicionarTarefa(new Tarefa('Leitura', 'Ler 30 páginas por dia', 'Média'));
appToDoList.adicionarTarefa(new Tarefa('Projeto JS/TS', 'Fazer projeto usando TS', 'ALTA'));

console.log(appToDoList.listaSelecionada.exibirLista());

appToDoList.removerTarefa(new Tarefa('Leitura', 'Ler 30 páginas por dia', 'Média'));
appToDoList.concluirTarefa(new Tarefa('Projeto JS/TS', 'Fazer projeto usando TS', 'ALTA'))

// console.log(appToDoList.listaSelecionada.exibirLista());
// appToDoList.exibirTarefa(new Tarefa('Projeto JS/TS', 'Fazer projeto usando TS', 'ALTA'));
// appToDoList.exibirListasDisponiveis();
console.log(appToDoList.listaSelecionada.calcularEstatisticas());