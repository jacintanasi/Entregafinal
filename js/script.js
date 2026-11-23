fetch('data/datos.json')
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(datos) {

        let contenedor = document.getElementById('contenedorExperiencias');

        datos.forEach(function(item) {

            contenedor.innerHTML += `
                <div class="col-12 col-md-4">
                    <article class="tarjeta border border-2 rounded-3">
                        <span class="numero">${item.numero}</span>
                        <h3>${item.nombre}</h3>
                        <p>${item.descripcion}</p>
                        <strong>${item.detalle}</strong>
                    </article>
                </div>
            `;

        });

    })
    .catch(function(error) {
        console.log('Error al cargar los datos:', error);
    });


let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();

    if (formulario.checkValidity()) {

        document.getElementById('respuesta').textContent =
            '¡Gracias! Tu consulta fue completada correctamente.';

        formulario.reset();

    }

});