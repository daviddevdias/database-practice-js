function Somar(){       

   let n1 = parseFloat(document.getElementById("num1").value);
   let n2 = parseFloat(document.getElementById("num2").value);
   

   valor = n2 - (n2 * n1 / 100).toFixed(3)

   let Resultado = document.getElementById("Resultado")

   Resultado.textContent = "Valor Calculo " + valor

   





}
