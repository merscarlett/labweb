function calculate() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const perimeterOutput = document.getElementById('perimeter');
    const areaOutput = document.getElementById('area');
    const diagonalOutput = document.getElementById('diagonal');

    if (!length || !width) {
        perimeterOutput.textContent = '';
        areaOutput.textContent = '';
        diagonalOutput.textContent = '';
        return;
    }

    if (length <= 0 || width <= 0) {
        perimeterOutput.textContent = 'Некоректні значення';
        areaOutput.textContent = 'Некоректні значення';
        diagonalOutput.textContent = 'Некоректні значення';
        return;
    }

    const perimeter = 2 * (length + width);
    const area = length * width;
    const diagonal = Math.sqrt(length ** 2 + width ** 2);

    perimeterOutput.textContent = perimeter.toString();
    areaOutput.textContent = area.toString();
    diagonalOutput.textContent = diagonal.toString();
}