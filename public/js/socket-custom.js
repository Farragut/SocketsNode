var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('No hay conexión al servidor');
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Reaper',
    mensaje: 'Asdas'
}, function(resp) {
    console.log('FROM SERVER: ', resp);
});


//recibir informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})