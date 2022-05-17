
function mostrarPromocao(){
    var inMedicamento = document.getElementById("inMedicamento").value;
    var inPreco = document.getElementById("inPreco").value;
    var outMostrar = document.getElementById("outMostrar");
    var outPromocao = document.getElementById("outPromocao");

    //calcular desconto 
    inPreco = Math.floor(inPreco);

    outMostrar.textContent = "Promoção de " + inMedicamento;
    outPromocao.textContent = "Leve 2 por apenas R$: " + inPreco.toFixed(2);
   

  
    
}

var btnPromocao = document.getElementById("btnPromocao");
btnPromocao.addEventListener("click",mostrarPromocao);