// Un sistema  de gestion de pedidos recibe 
// codigos de seguimiento en el formato PED-2025-00045, Se necesita extraer 
// el año swl pedido y el numero de orden usando el metodo subString()
// 1. Extraer el año del pedido (2025) y el numero de orden (00045) usando sudString().

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question ("Ïngrese el codigo del pedido( ej: PED-2025-00045):", ( codigo)=>{
    
//     const año = codigo.substring(4,8);
//     const numeroOrden = codigo.substring(9);

//     console.log(`Áño del pedido: ${año}`)
//     console.log(`Numero de orden: ${numeroOrden}`);

//     rl.close();
// })

// 1. En un formulario web pides al usuario su nombre completo y quieres
// asegurarte de que no haya espacios al inicio o final, y además quieres
// mostrar cuántos caracteres tiene el nombre sin contar los espacios.

// rl.question("Ingrese su nombre completo: ",(nombre)=>{
//     const nombreLimpio = nombre.trim();
//     const nombresinEspacios = nombre.replaceAll(" ","");
//     const caracteres = nombre.length

//     console.log(`Este es su nombre limpio: ${nombreLimpio}`);
//     console.log(`Nombre sin espacios: ${nombresinEspacios}`)
//     console.log (`Esto son todos los caracteres que tiene su nombre sin espacios: ${caracteres}`);

//     rl.close();
// })

// 2. Un sistema de registro de usuarios necesita guardar todos los correos
// electrónicos en minúsculas para evitar duplicados causados por
// diferencias en mayúsculas y minúsculas. Además, se requiere verificar si
// el correo pertenece al dominio @gmail.com antes de aceptarlo.

// rl.question("Ingrese su correo electronico: ", (correo)=>{
//     const correominusculas = correo.toLowerCase() 
//     const verificación = correo.includes('@gmail.com')

//     console.log(`Este es su correo en minusculas: ${correominusculas}`);
//     console.log(`Su correo esta en el dominio @gmail.com: ${verificación}`);

//     rl.close();
// })


// 3. de un código generado automáticamente solo se requiere mostrar los
// últimos 4 caracteres

// rl.question("Ingrese un codigo de 6 digitos: ", (codigo)=>{
//     const digitosUltimos = codigo.slice(-4);

//     console.log(`Su codigo es: ${codigo}`);
//     console.log(`Los ultimos 4 digitos de su codigo son: ${digitosUltimos}`);

//     rl.close();
// })

// 4. Un programador quiere saber en qué parte de su mensaje aparece la
// palabra error.

rl.question("Ingrese un mensaje donde este la palabra erro en cualquier pocision:", (error)=>{
    const palabraerror = error.indexOf('error');
    console.log(`La palabra error se encuentra en la pocision: ${palabraerror}`);
    rl.close();
})