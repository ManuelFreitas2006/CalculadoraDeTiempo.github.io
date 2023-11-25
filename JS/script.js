document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Convert');
    const resultadoElement = document.querySelector('.resultado');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const unidadUno = document.getElementById('unidad-uno').value;
        const unidadDos = document.getElementById('unidad-dos').value;
        const valor = parseFloat(document.getElementById('valor').value);

        let resultado;

        if (unidadUno === 'seg' && unidadDos === 'min') {
            resultado = valor / 60;
        } else if (unidadUno === 'seg' && unidadDos === 'hora') {
            resultado = valor / 3600;
        } else if (unidadUno === 'seg' && unidadDos === 'dia') {
            resultado = valor / 86400;
        } else if (unidadUno === 'min' && unidadDos === 'seg') {
            resultado = valor * 60;
        } else if (unidadUno === 'min' && unidadDos === 'hora') {
            resultado = valor / 60;
        } else if (unidadUno === 'min' && unidadDos === 'dia') {
            resultado = valor / 1440;
        } else if (unidadUno === 'hora' && unidadDos === 'seg') {
            resultado = valor * 3600;
        } else if (unidadUno === 'hora' && unidadDos === 'min') {
            resultado = valor * 60;
        } else if (unidadUno === 'hora' && unidadDos === 'dia') {
            resultado = valor / 24;
        } else if (unidadUno === 'dia' && unidadDos === 'seg') {
            resultado = valor * 86400;
        } else if (unidadUno === 'dia' && unidadDos === 'min') {
            resultado = valor * 1440;
        } else if (unidadUno === 'dia' && unidadDos === 'hora') {
            resultado = valor * 24;
        }

        resultadoElement.textContent = 'Resultado: ' + resultado.toFixed(2) + ' ' + unidadDos;
    });
});
