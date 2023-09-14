
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('miFormulario');
    const boton = document.getElementById('miBoton');
  
    formulario.addEventListener('input', function () {
      // Verificar si el formulario es válido
      if (formulario.checkValidity()) {
        
        // Habilitar el botón si el formulario es válido
        boton.removeAttribute('disabled');
      } else {
        // Deshabilitar el botón si el formulario no es válido
        boton.setAttribute('disabled', 'disabled');
      }
    });

    formulario.addEventListener('submit', function (e) {
      // Evitar que el formulario se envíe si el botón está deshabilitado
      if (boton.hasAttribute('disabled')) {
        e.preventDefault();
      }
    });
  });
  