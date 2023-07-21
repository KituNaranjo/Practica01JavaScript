document.getElementById("calcularBtn").addEventListener("click", function() {
  var ingresos = parseFloat(document.getElementById("ingresos").value);
  var gastosDeducibles = parseFloat(document.getElementById("gastosDeducibles").value);
  var impuestoCalculado = 0;
  var baseImponible = ingresos - gastosDeducibles;
  var excedente = 0;
  var porcentajeExcedente = 0;

  if (baseImponible <= 11212) {
    impuestoCalculado = 0;
    excedente = 0;
    porcentajeExcedente = 0;
  } else if (baseImponible <= 14285) {
    impuestoCalculado = (baseImponible - 11212) * 0.05;
    excedente = baseImponible - 11212;
    porcentajeExcedente = 5;
  } else if (baseImponible <= 17854) {
    impuestoCalculado = 154 + (baseImponible - 14285) * 0.10;
    excedente = baseImponible - 14285;
    porcentajeExcedente = 10;
  } else if (baseImponible <= 21442) {
    impuestoCalculado = 511 + (baseImponible - 17854) * 0.12;
    excedente = baseImponible - 17854;
    porcentajeExcedente = 12;
  } else if (baseImponible <= 42874) {
    impuestoCalculado = 941 + (baseImponible - 21442) * 0.15;
    excedente = baseImponible - 21442;
    porcentajeExcedente = 15;
  } else if (baseImponible <= 64297) {
    impuestoCalculado = 4156 + (baseImponible - 42874) * 0.20;
    excedente = baseImponible - 42874;
    porcentajeExcedente = 20;
  } else if (baseImponible <= 85729) {
    impuestoCalculado = 8440 + (baseImponible - 64297) * 0.25;
    excedente = baseImponible - 64297;
    porcentajeExcedente = 25;
  } else if (baseImponible <= 114288) {
    impuestoCalculado = 13798 + (baseImponible - 85729) * 0.30;
    excedente = baseImponible - 85729;
    porcentajeExcedente = 30;
  } else {
    impuestoCalculado = 22366 + (baseImponible - 114288) * 0.35;
    excedente = baseImponible - 114288;
    porcentajeExcedente = 35;
  }

  var resultados = "Ingresos: " + ingresos.toFixed(2) + "\n" +
                   "Gastos deducibles: " + gastosDeducibles.toFixed(2) + "\n" +
                   "Base imponible: " + baseImponible.toFixed(2) + "\n" +
                   "Excedente: " + excedente.toFixed(2) + "\n" +
                   "Porcentaje de excedente: " + porcentajeExcedente + "%" + "\n" +
                   "Impuesto a la renta: " + impuestoCalculado.toFixed(2);

  console.log(resultados);
  document.getElementById("resultados").innerHTML = resultados.replace(/\n/g, "<br>");
});
