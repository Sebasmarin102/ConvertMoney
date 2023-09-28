function calcularMonedas() {
    const pesoColombiano = parseFloat(document.getElementById('colombiano').value);

    const valorDolar = 0.00025;
    const valorEuro = 0.00023;

    let totalDolar = valorDolar * pesoColombiano;
    let totalEuro = valorEuro * pesoColombiano;

    document.getElementById('dolar').value = totalDolar.toFixed(2);
    document.getElementById('euro').value = totalEuro.toFixed(2);
}
