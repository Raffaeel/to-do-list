document.getElementById('addButton').onclick = function() {
    const tarefaInput = document.getElementById('novaTarefa');
    const dataHoraInput = document.getElementById('dataHora');
    const lista = document.getElementById('listaTarefa');

    const tarefaTexto = tarefaInput.value;
    const dataHoraTexto = dataHoraInput.value;

    if (tarefaTexto === '' || dataHoraTexto === '') {
        alert("Por favor, preencha a tarefa e a data/hora.");
        return;
    }

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function() {
        if (checkbox.checked) {
            li.classList.add('tarefa-concluida');
        } else {
            li.classList.remove('tarefa-concluida');
        }
    };

    const span = document.createElement('span');
    span.textContent = `${tarefaTexto} (para ${new Date(dataHoraTexto).toLocaleString()})`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = function() {
        lista.removeChild(li);
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    lista.appendChild(li);

    // Limpar os campos de entrada
    tarefaInput.value = '';
    dataHoraInput.value = '';
};