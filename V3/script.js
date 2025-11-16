function adicionartarefa() {
    let InputTarefa = document.getElementById("InputTarefa");
    let tarefa = InputTarefa.value.trim();

    let aviso = document.getElementById("Aviso");
    let lista_Tarefa = document.getElementById("lista_Tarefa");

    if (tarefa === "") {
        aviso.textContent = "Digite uma tarefa antes de adicionar!";
        return;
    }

    let nova_tarefa = document.createElement("li");
    nova_tarefa.textContent = tarefa;
    lista_Tarefa.appendChild(nova_tarefa);

    aviso.textContent = "Tarefa adicionada com sucesso!";
    InputTarefa.value = "";
}

function mostrarNome() {
    let Seunome = document.getElementById("Seunome");
    let Salvarnome = Seunome.value.trim();
    let Nome = document.getElementById("Nome");

    const apenasTexto = /^[A-Za-z\s]+$/;

    if (!apenasTexto.test(Salvarnome)) {
        Nome.textContent = "Digite um nome"
        Nome.style.color = "red";


    } else if (Salvarnome) {
        Nome.textContent = `Seu nome é ${Salvarnome}`;
        Nome.style.color = "green";
    } 

    

    Salvarnome.value = "";
}

function Somar (){       

   let n1 = parseFloat(document.getElementById("num1").value);
   let n2 = parseFloat(document.getElementById("num2").value);
   let n3 = parseFloat(document.getElementById("num3").value);

   let Valortotal = (n1 + n2 + n3) /3

   let Resultado = document.getElementById("Resultado")

   if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        Resultado.textContent = "Digite o número"; 
        Resultado.style.color = "red"
        return; 
    }

   if (Valortotal >= 8) {

    Resultado.textContent = "Media =  " + Valortotal.toFixed(2)+ " Aprovado"
    Resultado.style.color = "green";

   }

   else if (Valortotal >= 5 && Valortotal < 7 ){

    Resultado.textContent = "Sua nota está em Recuperação " + Valortotal.toFixed(2)+ " Recuperação"
    Resultado.style.color = "blue"


   }
   
   else {
    Resultado.textContent = "Media = " + Valortotal.toFixed(2) + " Reprovado"
    Resultado.style.color = "black"
   }



}
