
function Calcular() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = (peso/(altura**2)).toFixed(2);
    document.getElementById('operacion').value = resultado;
}
let BotonCalcular = document.getElementById('calcular');
BotonCalcular.addEventListener('click', Calcular);