var objeto = {
    mascotas: ['perros', 'gatos', 'canarios', 'pez', 'serpiente'],
    eliminarMascota: function(tipoMascota){
        var indiceEliminar = this.mascotas.indexOf(tipoMascota);
        this.mascotas.splice(indiceEliminar, 1);
        return this.mascotas
    },

    eliminarUltimaMascota: function(){
        this.mascotas.pop();
        return this.mascotas
    },

    agregarMascota: function (tipoMascota) {
        this.mascotas.push(tipoMascota);
        return this.mascotas;
    },

    contadorMascotas: function () {
        var contador = 0;
        this.mascotas.forEach(function(mascota, indiceMascota, arrayCompleto){
            if (mascota.endsWith('os')){
                contador++
            } 
        })
        return "En el arreglo hay " + contador + " tipos de mascotas que termina en os"
    },


}

const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicacion: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,
    
}
/* Hacer una función que reciba el objeto trabajador y devuelva un mensaje: 
El trabajador (Jhon Smith) trabaja en (ACME) con cargo (QA) y le gusta (comer) y (2) más, (no tiene hijos) */

const funcionDesestructurada = function({nombre, 
            cargo, 
            empresa:{datos :{nombre:empresa}}, 
            gustos: [primerElemento, ...resto],
            hijos = 'no tiene hijos' }){
                console.log ("El trabajador " + nombre + " trabaja en " + empresa + 
                " con cargo " + cargo + " y le gusta " + primerElemento + " y " + resto.length + " más, "+ hijos)

}

/* Hacer una función que reciba el objeto trabajador y devuelva un mensaje:
 El trabajador (Jhon Smith) va a su trabajo en (Santiago), es (QA), en el puesto (nº 24), 
 trabaja con (Facebook) y (Google) */

 const funcionDesestructurada2 = function({
     nombre,
     cargo,
     empresa:{ubicacion:{comuna, puesto}, clientes},

 }){
     
        console.log ("El trabajador " + nombre + " va a su trabajo en " + comuna + 
        ", es " + cargo + ", en el puesto " + puesto + ", trabaja con " + clientes[0] + " y "+ clientes[1])

}
