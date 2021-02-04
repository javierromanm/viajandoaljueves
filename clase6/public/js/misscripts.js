function ejemploGet() {
    fetch('http://localhost:8080/mi/getty')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log('data = ', data);
        })
        .catch(function(err) {
            console.error(err);
        });
}

function ejemploPostFormulario() {
    fetch('http://localhost:8080/mi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin':'*'
        },
        body: 'a=1&b=2'
        })
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            console.log('data = ', data);
        })
        .catch(function(err) {
            console.error(err);
        });
}

function ejemploPostObject() {
    fetch('http://localhost:8080/mi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({nombre:'aldo', apellido:'sierra'})
        })
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            console.log('data = ', data);
        })
        .catch(function(err) {
            console.error(err);
        });
}


// aca voy a manejar el consultar por nombre
{
    function consultarXNombre(nombre) {
        fetch(['/usuario?firstName', nombre].join('='), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
                }
            })
            .then(function(response) {
                console.log('response =', response);
                return response.json();
            })
            .then(function(data) {
                console.log('data = ', data);
            })
            .catch(function(err) {
                console.error(err);
            });
    }

    $('#btnConsultar').on('click', function() {
        consultarXNombre($('#txtNombre').val())
    })   

    $('#btnSubir').on('click', function() {
        fetch('upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':'*'
            },
            body: $('#txtArchivo')[0].files[0]
        })
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            console.log('data = ', data);
        })
        .catch(function(err) {
            console.error(err);
        });
    })

    $('#btnArrancar').on('click', function() {
        fetch('arrancar', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            }
        })
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            console.log('data = ', data);
        })
        .catch(function(err) {
            console.error(err);
        });
    })


    $('#btnSupervisar').on('click', function() {
        (function innerFn() {
            fetch('supervisar', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                }
            })
            .then(function(response) {
                console.log('response =', response);
                return response.json();
            })
            .then(function(data) {
                console.log('data = ', data);
                $('#txtAvance')[0].innerHTML = data.progreso
            })
            .catch(function(err) {
                console.error(err);
            });
            setTimeout(innerFn, 500)
        })()
    })

    $('#btnFetch').on('click', function() {
        fetch('usuario?firstName=Ned', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            }
        })
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            console.log('data = ', data);
            let template = $('#tmplTabla').html();
            let datosRender = {usuarios : data};
            $('#renderizado').html(Mustache.render(template, datosRender));
        })
        .catch(function(err) {
            console.error(err);
        });
    })

    

}