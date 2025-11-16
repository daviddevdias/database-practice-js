function Somar(){       

   let n1 = parseFloat(document.getElementById("num1").value);
   let n2 = parseFloat(document.getElementById("num2").value);
   let n3 = parseFloat(document.getElementById("num3").value);

   valormax = Math.max(n1, n2, n3) 
   valormin = Math.min(n1, n2, n3)

   let Resultado = document.getElementById("Resultado")
   let Resultado2 = document.getElementById("Resultado2")
   
   Resultado.textContent = valormax + " Valor Maximo"
   Resultado2.textContent = valormin + " Valor minimo"




}
