function adicionartarefa() {
    // Pega o campo de input pelo ID
    let InputTarefa = document.getElementById("InputTarefa");

    // Pega o valor que o usuário digitou no input
    let tarefa = InputTarefa.value;

    // Pega o elemento onde vamos mostrar mensagens pro usuário
    let aviso = document.getElementById("Aviso");

    // Mostra mensagem de sucesso
    aviso.textContent = "Tarefa adicionada com sucesso!";

    // Pega a lista de tarefas (UL) onde vamos colocar a nova tarefa
    let lista_Tarefa = document.getElementById("lista_Tarefa");

    // Cria um novo item de lista (LI)
    let nova_Tarefa = document.createElement("li");

    // Coloca o texto da tarefa dentro do LI
    nova_Tarefa.textContent = tarefa;

    // Adiciona o novo LI dentro da lista (UL)
    lista_Tarefa.appendChild(nova_Tarefa);

    // Limpa o input para o usuário digitar outra tarefa
    InputTarefa.value = "";
}
