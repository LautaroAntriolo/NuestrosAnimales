let contador = 0;
function conteo() {
contador++;
document.querySelector('h2').innerHTML = contador;
if (contador % 10 === 0) {alert(`Llegamos a las ${contador} visitas`)}}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = conteo;});