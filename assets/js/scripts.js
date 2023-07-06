function totalidad() {

    let cantidadDesk = document.getElementById('cantidad').value;
    let precio = document.getElementById('precio').getAttribute('value');
    let color = document.getElementById('color').value;
    let totalidad = cantidadDesk * precio;

    document.getElementById("result-total").innerHTML = totalidad.toLocaleString();
    document.getElementById("result-cantidad").innerHTML = cantidadDesk;
    document.getElementById("result-color").style.backgroundColor = color;
}