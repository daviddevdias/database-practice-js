function Somar() {

   let n1 = parseFloat(document.getElementById("num1").value);
   let n2 = parseFloat(document.getElementById("num2").value);

   if (isNaN(n1) || isNaN(n2)) {
      alert("Preenche os dois números aí, tchê!");
      return;
   }

   let valorsomado = n1 + n2;
   let valormultiplicado = n1 * n2;
   let valorRestante = n1 % n2;
   let valordividido = n1 / n2;

   let desconto =  n1 * (n2 / 100)
   let precoFinal = n1 - desconto
   

   let Somado = document.getElementById("Somado");
   let Multiplicado = document.getElementById("Multiplicado");
   let Restante = document.getElementById("Restante");
   let Dividido = document.getElementById("Dividido");
   let Desconto = document.getElementById("Desconto");

   Somado.textContent = "Valor Somado: " + valorsomado;
   Multiplicado.textContent = "Valor Multiplicado: " + valormultiplicado;
   Restante.textContent = "Valor Restante: " + valorRestante;
   Dividido.textContent = "Valor Dividido: " + valordividido;
   Desconto.textContent = "Desconto: " + desconto.toFixed(2) + " → Preço Final: " + precoFinal.toFixed(2);
}