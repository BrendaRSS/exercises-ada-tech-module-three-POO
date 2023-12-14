## Desafio 3 - Aplicativo de Lista de Tarefas (To-Do List) com Programação Orientada a Objetos em JavaScript

## Sobre

O projeto se trata de uma To-Do list feita utilizando POO em JavaScript. Para isto, foram criadas três classes: Tarefa, ListaTarefas e AplicativoToDoList. 
- A classe Tarefa possui os atributos: `titulo`, `descricao`, `prioridade` e `status`.
- A classe ListaTarefas possui os atributos: `nome` e `#tarefas`.
- A classe AplicativoToDoList possui os atributos: `listas` e `listasSelecionadas`.

### Como executar o projeto em desenvolvimento

1. Clone esse repositório:
```
git@github.com:BrendaRSS/exercises-ada-tech-module-three-POO.git
```
2. Dentro da pasta, abra o terminal e utilize:
```
node index.js
```
### Métodos das classes e suas funções

- Métodos da classe <strong>Tarefa</strong>:
1. Para criar uma instância da Tarefa execute (a prioridade precisa ser "baixa", "média" ou "alta". Caso contrário o código lançará um erro com a informação):
```
const tarefa1 = new Tarefa('Caminhada', 'Caminhar pelo quarteirão por 1 hora', 'baixa');

const tarefa2 = new Tarefa('Fazer almoços da semana', 'Fazer 30 marmitas para o almoço e jantar da semana', 'baixa');
```
- Métodos da classe <strong>ListaTarefas</strong>:
1. Para instanciar a classe (A lista não pode ter o nome de outra lista. Se isso ocorrer, será lançado um erro com a informação):
```
const listaCasa = new ListaTarefas('Casa');
```
2. Para adicionar uma tarefa (Os títulos das tarefas não podem se repetir. Caso o usuário tente criar duas tarefas com o mesmo nome será lançado um erro):
```
listaCasa.adicionarTarefa(tarefa1);
listaCasa.adicionarTarefa(tarefa2);
```
3. Para remover uma tarefa: 
```
listaCasa.removerTarefa(tarefa1);
```
4. Para concluir uma tarefa:
```
listaCasa.marcarConcluida(tarefa2);
```
5. Para exibir a lista inteira:
```
console.log(listaCasa.exibirLista());
```
6. Para exibir uma tarefa:
```
console.log(listaCasa.exibirTarefa(tarefa2));
```
7. Para calcular estatísticas da lista:
```
console.log(listaCasa.calcularEstatisticas());
```
- Métodos da classe <strong>AplicativoToDoList</strong>:
1. Instância do aplicativo:
```
const appToDoList = new AplicativoToDoList();
```
2. Criação de listas através do app:
```
appToDoList.criarLista('TESTE');
```
3. Adicionar listas criadas anteriormente (utilizando a instância de ListaTarefas):
```
appToDoList.addListaExistente(listaCasa);
```
4. Para exibir todas as listas:
```
appToDoList.exibirListasDisponiveis();
```
5. Para utilizar os métodos seguintes é necessário selecionar uma lista através do método:
```
appToDoList.selecionarLista('TESTE');
```
6. Para exibir apenas a Lista Selecionada:
```
console.log(appToDoList.listaSelecionada.exibirLista());
```
7. Para adicionar uma tarefa na Lista Selecionada:
```
appToDoList.adicionarTarefa(new Tarefa('Leitura', 'Ler 30 páginas por dia', 'Média'));

appToDoList.adicionarTarefa(new Tarefa('Projeto JS/TS', 'Fazer projeto usando TS', 'ALTA'));
```
8. Para remover uma tarefa da Lista Selecionada:
```
appToDoList.removerTarefa(new Tarefa('Leitura', 'Ler 30 páginas por dia', 'Média'));
```
9. Para concluir uma tarefa da Lista Selecionada:
```
appToDoList.concluirTarefa(new Tarefa('Projeto JS/TS', 'Fazer projeto usando TS', 'ALTA'))
```
10. Para exibir apenas uma tarefa da Lista Selecionada:
```
appToDoList.exibirTarefa(new Tarefa('Projeto JS/TS', 'Fazer projeto usando TS', 'ALTA'));
```
11. Para calcular estatísticas da Lista Selecionada:
```
console.log(appToDoList.listaSelecionada.calcularEstatisticas());
```