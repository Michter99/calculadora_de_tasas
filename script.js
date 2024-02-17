// script.js
function convertRate() {
  const interestRate = document.getElementById('interestRate').value / 100; // Convertir a decimal
  const givenTerm = document.getElementById('givenTerm').value;
  const targetTerm = document.getElementById('targetTerm').value;

  // Convertir la tasa del plazo dado a tasa anual
  const annualRate = Math.pow(1 + interestRate, givenTerm) - 1;

  // Convertir la tasa anual al plazo objetivo
  const equivalentRateTarget =
    (Math.pow(1 + annualRate, 1 / targetTerm) - 1) * 100;

  // Mostrar el resultado
  document.getElementById(
    'result'
  ).innerHTML = `Tasa Convertida al Plazo Objetivo:<br><span id="percentage">${equivalentRateTarget.toFixed(
    8
  )}%</span>`;
}
