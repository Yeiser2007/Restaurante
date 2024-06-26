const filtroInput = document.getElementById('filtro');
const filas = document.querySelectorAll('tbody tr');

filtroInput.addEventListener('keyup', function() {
    const filtro = filtroInput.value.toUpperCase();

    filas.forEach(function(fila) {
        let mostrarFila = false;
        const celdas = fila.querySelectorAll('td');

        for (let i = 0; i < celdas.length - 1; i++) {
            const textoCelda = celdas[i].querySelector('input').value.toUpperCase();
            if (textoCelda.indexOf(filtro) > -1) {
                mostrarFila = true;
                break; // No es necesario continuar revisando las celdas si ya encontramos una coincidencia
            }
        }

        if (mostrarFila) {
            fila.style.display = '';
        } else {
            fila.style.display = 'none';
        }
    });
});


function habilitarEdicion(btn) {
    const fila = btn.closest('tr');
    fila.querySelectorAll('.entrada').forEach(input => {
        input.disabled = false;
    });
    fila.querySelector('.borrar').disabled = true;
    fila.querySelector('.guardar').disabled = false;
}


function confirmarBorrado(btn) {
    if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
        const fila = btn.closest('tr');
        fila.remove();
    }
}


function guardarCambios(btn) {
    const fila = btn.closest('tr');
    fila.querySelectorAll('.entrada').forEach(input => {
        input.disabled = true;
    });
    fila.querySelector('.borrar').disabled = false;
    fila.querySelector('.guardar').disabled = true;
    alert("Elemento guardado Correctamente")
}

 