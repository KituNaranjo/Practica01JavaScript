var nombre = "Christian";
var apellido = "Naranjo";
var cedula = "1751121680";
var ingresos = 23678.43;
var gastos = 10000;
var declarado = true;

const periodo = 2021;

var datosCompletos = nombre + apellido;
console.log(datosCompletos)
document.write("Datos completos: " + datosCompletos + "<br>");

var baseImponible = ingresos - gastos;
console.log(baseImponible)
document.write("Base imponible: " + baseImponible);

