// Comprobamos si el navegador es compatible con las notificaciones
if ('Notification' in window) {
    // Solicitamos permiso al usuario para mostrar notificaciones
    Notification.requestPermission()
      .then(function(permission) {
        if (permission === 'granted') {
          // Creamos y mostramos la notificación
          var notification = new Notification('¡Hola!', {
            body: 'Bienvenido a HeyTenis.',
          });
        }
      });
  }
  function toggleDiv(divId) {
    var div = document.getElementById(divId);
    div.style.display = (div.style.display === 'none') ? 'block' : 'none';
  }

