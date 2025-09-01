// const estudiante ={ 
//     nombre: "juan",
//     apellidos: "Cruz",
//     edad: "27 años",
//     direccion: {
//         pais: "El salvador",
//         calle: "Los ALmendros",
//         numCasa: 27   
//     }
// }

// //Acceder al objeto
// console.log(estudiante);
// console.log(estudiante.direccion);

// console.log(estudiante['direccion']);

// //Agregamos una propiedad al objeto
// estudiante.colorOjos = "Azules"
// console.log(estudiante);

// //Agregamos propiedad al objeto anidado
// estudiante.direccion.postal =503;
// console.log(estudiante.direccion);

// //Modificamos una propiedad
// estudiante.direccion.numCasa = 20
// console.log(estudiante.direccion);

// //Eliminando propiedades de objeto anidado
// delete estudiante.direccion.numCasa
// console.log(estudiante.direccion);


//Ejercicios

// //Ejercicio 1:
// const productos = { 
//     Detalles: {
//     nombre: "Punulito",
//     precio: "12.50",
//     categoria: "Comestible",
//     },
//     Inventario: {
//         stock: 10,
//         proveedor: "SARITAS",
//         ubicacion: "El Salvador"
//     },
//     Historial: { 
//         FechaIngreso: "25 de julio",
//         ultimaVenta: "30 de julio",
//         ventasTotales: 45,
//     },
// }

// console.log(productos);
// // Mostrar únicamente los detalles.
// console.log(productos.Detalles);
// // Aumentar el stock en 50 unidades.
// productos.Inventario.stock = 50;

// console.log(productos);
// // Cambiar la categoría a "Electrónica".
// productos.Detalles.categoria = "Electronica";
// console.log(productos.Detalles);

// const {precio,nombre} = productos.Detalles;
// console.log(`Precio: ${precio}`);
// console.log(`Nombre: ${nombre}`);

// console.log(productos);

// //Ejercicios 2

// const usuario = {
//     InfoPersonal:{
//         nombre: "Henry",
//         edad: 19,
//         email: "henryzelaya123@gmail.com",
//     },
//     prerenciasApp: {
//         idioma: "Español",
//         notificacione: true,
//         tema: "Oscuro"
//     },
//     Estadisticas: {
//         fechaIngreso: "25 de julio",
//         ultimoAcceso: "3O de julio",
//         numeroSesiones: 250,
//     },
// }

// // Crear un objeto perfilUsuario con tres objetos anidados.
// console.log(usuario);

// // Mostrar cada sección de información por separado.
// console.log(`Informacions personal:`,usuario.InfoPersonal);
// console.log(`Preferencias:`,usuario.prerenciasApp);
// console.log(`Estadistricas:`,usuario.Estadisticas);

// // Mostrar cada sección de información por separado.
// usuario.prerenciasApp.idioma= "Ingles";
// console.log(`Idioma cambiado:`,usuario.prerenciasApp);

// // Actualizar la fecha de último acceso a la fecha actual.
// const fechaActual = new Date()
// usuario.Estadisticas.ultimoAcceso = fechaActual
// console.log(usuario.Estadisticas.ultimoAcceso);

// // Eliminar una preferencia innecesaria.
// delete usuario.prerenciasApp.tema 
// console.log(usuario);

// // Extraer el email y el idioma en variables separadas.
// const {email}= usuario.InfoPersonal;
// const {idioma} = usuario.prerenciasApp;
// console.log(`Este es su email: ${email}`,`Este es su idioma:${ idioma}`);

// // Mostrar el perfil completo actualizado.
// console.log(`perfil completo actualizado`,usuario);

//Ejercicio 3
const libro = {
    informacion: {
        titulo: "Moby Dick",
        autor: "Herman Melville",
        genero: "Romance"
    },
    disponibilidad: {
        copias: 5,
        prestados: 2,
        ubicacion: "Estante b6"
    },
    registro: { 
        fechaPublicacion: "2011-06-20",
        fechaIngreso: "2011-07-15",
        ultimaRevision: "2025-09-30"
    }
};

// Mostrar la información del autor
console.log(libro.informacion.autor);

// Calcular cuántos ejemplares disponibles quedan
const ejemplaresDisponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados;
console.log(`Ejemplares disponibles: ${ejemplaresDisponibles}`);

// Actualizar la ultimaRevision con la fecha actual 
const fechaActual = new Date().toISOString().split('T')[0];
libro.registro.ultimaRevision = fechaActual;
console.log(`Última revisión actualizada: ${libro.registro.ultimaRevision}`);

// Cambiar el género del libro
libro.informacion.genero = "Ficción";
console.log(`Nuevo género: ${libro.informacion.genero}`);

// Extraer título y ubicación en variables
const { titulo } = libro.informacion;
const { ubicacion } = libro.disponibilidad;
console.log(`Título: ${titulo}, Ubicación: ${ubicacion}`);

// Mostrar el objeto actualizado
console.log(libro);
