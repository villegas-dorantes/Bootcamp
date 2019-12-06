const mascota = {

    nombre: 'Orejas',
    animal: 'Conejo',
    edad: '3 años',
        hablar: function () {
            return 'Mi mascota es';
        },
    hijos: [
        {
            nombre: 'Ore'

        }
    ]
    };


document.body.querySelector('#resultado').append(JSON.stringify(mascota));

