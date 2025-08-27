// // const nombre = "Eli"
// // const edad = 30
// const altura = 1.50

// // Creacion de objetos con object literal
// const persona = {
//     nombre: "Eli",
//     edad: 30,
//     altura: 1.50
// }

// // imprimir el objeto
// // Acceder a las propiedades del objeto
// // Acceso por punto
// console.log(persona.nombre);

// // Acceso por corchetes
// console.log(persona['edad']);

// // Agregar nuevas propiedades al objeto
// persona.Genero = "Masculino";
// console.log(persona['Genero']);

// // Eliminar propiedades del objeto
// delete persona.altura;
// console.log(persona);

// // Modificamos el valor de una propiedad o llave
// persona.nombre = "Henry";
// console.log(persona);

// // Asignado el valor de la propiedad del objeto a una variable
// const nom = persona.nombre
// console.log(nom);

// // Destructuring
// // const {nombre} = persona;
// // console.log(nombre);

// // const {edad} = persona;
// // console.log(edad);

// // imprimir los valores en una sola linea
// const {nombre,edad}= persona;
// console.log(nombre);
// console.log(edad);

// // EJERCICIO 1
// const perro = { 
//     raza: "pitbull",
//     tamaño: 0.55,
//     color: "cafe oscuro"
// }
// console.log(perro);
// console.log(perro.raza);
// console.log(perro['tamaño']);
// console.log(perro.color);

// // Ejercicio 2: nueva propiedad
// perro.Nombre = "Puffy";
// console.log(perro.Nombre);
// delete perro.raza;
// console.log(perro);

// Ejercicio 3
const usuario = { 
    usuario1: "Henry",
    email: "henrycortez123@gmail.com",
    rol: "adminastrador"
}

const {usuario1,email,rol}= usuario;
console.log(usuario1);
console.log(email);
console.log(rol);


