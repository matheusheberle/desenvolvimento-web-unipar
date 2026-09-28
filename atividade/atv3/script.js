const inputTarefa = document.querySelector('#taskInput');
const botaoAdicionar = document.querySelector('#addTaskButton');
const listaTarefas = document.querySelector('#taskList');

function adicionarTarefa() {
    const tarefa = inputTarefa.value.trim();
    if (tarefa) {
        const itemTarefa = document.createElement('li');
        itemTarefa.textContent = tarefa;
        listaTarefas.appendChild(itemTarefa);
        inputTarefa.value = '';
    }
}

botaoAdicionar.addEventListener('click', adicionarTarefa);

listaTarefas.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});