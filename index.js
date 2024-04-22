let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));

let max = Math.max(num1, num2, num3);
let min = Math.min(num1, num2, num3);
let equal = num1 + num2 + num3 - max - min;

document.write("Ordenados de mayor a menor: ", max, equal, min);
document.write("<br/> Ordenados de menor a mayor: ", min, equal, max);

if (num1 === num2 && num2 === num3) {
    document.write("<br/> Los números son iguales.");
}
