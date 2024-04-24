function habilitarEdicion(btn) {
    const fila = btn.closest('tr');
    fila.querySelectorAll('.entrada').forEach(input => {
        input.disabled = false;
    });
    
    const select = fila.querySelector('.select-led-status');
    select.style.display = 'none';
    
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control entrada');
    input.value = select.value;
    fila.querySelector('#td_led_status_01').appendChild(input);
    
    fila.querySelector('.borrar').disabled = true;
    fila.querySelector('.guardar').disabled = false;
}
function guardarCambios(btn) {
    const fila = btn.closest('tr');
    
    // Deshabilitar todos los campos de entrada
    fila.querySelectorAll('.entrada').forEach(input => {
        input.disabled = true;
    });
    
    // Obtener el valor del campo de entrada de entradas
    const inputEntradas = fila.querySelector('.entrada');
    const valorEntradas = inputEntradas.value;
    
    // Mostrar el valor actual del campo de entrada de entradas en el select
    const selectEntradas = fila.querySelector('.select-led-status');
    selectEntradas.value = valorEntradas;
    
    // Ocultar el campo de entrada y mostrar el select
    inputEntradas.style.display = 'none';
    selectEntradas.style.display = 'block';
    
    // Deshabilitar el campo de ID
    fila.querySelector('.int').querySelector('.entrada').disabled = true;
    
    // Habilitar el botón de borrar y deshabilitar el botón de guardar
    fila.querySelector('.borrar').disabled = false;
    fila.querySelector('.guardar').disabled = true;
    
    // Alerta de elemento guardado
    alert("Elemento guardado Correctamente");
}

function seleccionarOpcion(opcion) {
    document.getElementById('editableSelectInput').value = opcion;
  }
