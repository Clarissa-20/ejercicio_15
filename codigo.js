let edad = parseFloat(prompt("Ingrese su edad: "));
let resultadoElement = document.getElementById("resultado");

if (edad >= 18) {
    resultadoElement.innerHTML = "Usted es mayor de edad";
} else {
    resultadoElement.innerHTML = "Usted no es mayor de edad";
}