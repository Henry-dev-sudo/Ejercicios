import readline from 'readline'

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Guia de ejercicios

//Ejercicio 1:

// console.log('=== Menu de Operaciones ===')
// console.log('1: Suma')
// console.log('2: Restar')
// console.log('3: Multiplicar')
// console.log('4: Dividir')
// console.log('5: Salir')

// rl.question('Ingrese una opcion del (1-5): ', option =>{
//     let opcion = Number(option);

// function suma(a,b){
//     let result = a + b;
//     return result;
// }
// function resta(a,b){
//     let result = a - b;
//     return result;
// }
// function Multiplicar(a,b){
//     let result = a * b;
//     return result;
// }
// function dividir(a,b){
//     if (b === 0) {
//         return 'Error: No se puede dividir por cero';
//     }
//     return a / b;
// }

// function Salir(){
//     console.log('Estas saliendo del programa....');
// }

//     switch (opcion){
//         case 1:
//         case 2:
//         case 3:
//         case 4:

//         rl.question('Ingrese el primer numero: ', num1 =>{
//             rl.question('Ingrese el segundo numero: ', num2 =>{
//                 const a = parseFloat(num1);
//                 const b = parseFloat(num2);

//                 let resultado =0;

//                 switch (opcion){
//                     case 1:
//                         resultado = suma(a,b);
//                         console.log(`La suma de ${a} + ${b} es: ${resultado}`)
//                         break;
//                     case 2:
//                         resultado = resta(a,b);
//                         console.log(`La resta de ${a} - ${b} es: ${resultado}`)
//                         break;
//                     case 3:
//                         resultado = Multiplicar(a,b);
//                         console.log(`La multilicacion de ${a} * ${b} es: ${resultado}`)
//                         break;
//                     case 4:
//                         resultado = dividir(a,b);
//                         console.log(`La division de ${a}/${b} es: ${resultado}`)
//                         break;
//                 }
//                 rl.close();
//             })
//         })
//         break;
                
//         case 5:
//             console.log('Estas saliendo del programa....');
//             rl.close();
//             break;
                
//         default:
//             console.log('Opcion no valida. Intente de nuevo.');
//             rl.close();
//             break;
//     }
// })

//Ejercicio 2: 

// function saludar() {
//     let hora = new Date().getHours();
    
//     if (hora >= 6 && hora <= 11) {
//         console.log("Buenos días");
//     } else if (hora >= 12 && hora <= 17) {
//         console.log("Buenas tardes");
//     } else if (hora >= 18 && hora <= 23) {
//         console.log("Buenas noches");
//     } else {
//         console.log("A dormir");
//     }
// }

// saludar();

//Ejercicio 3:

// console.log(`Las tarifas son las siguientes:
// •	Niños menores de 12 años: pagan $3.00
// •	Adultos de 12 a 59 años: pagan $5.00
// •	Adultos mayores de 60 años o más: pagan $2.50
// `)
// function precioEntrada (edad){
//     let precio;

//     if (edad >= 0 && edad < 12){
//         precio = 3.00
//     }else if (edad >=12 && edad <= 59){
//         precio = 5.00
//     }else if(edad >= 60){
//         precio = 2.50
//     }else{
//         return ('la edad es negativa o no válida')
//     }
//     return precio;
// }

// rl.question('Ingrese su edad: ', (edad)=>{
//     let age = Number(edad);
//     let resultado = precioEntrada(age);

//     if (typeof resultado === 'string') {
//         console.log(resultado);
//     } else {
//         console.log(`El precio que debe pagar según su edad ${age} es: $${resultado}`);
//     }
//     rl.close();
// });

//Ejercicio 4: 
console.log(`Tarifas de estacionamiento:
- 1 hora: $2.00
- 2 a 4 horas: $5.00
- Más de 4 horas: $10.00
`)

function calcularCosto(horas) {
    let precio;
    
    if (horas > 0 && horas <= 1) {  
        precio = 2.00;
    } else if (horas > 1 && horas <= 4) {  
        precio = 5.00;
    } else if (horas > 4) { 
        precio = 10.00;
    } else {
        return 'Las horas son negativas o no válidas';
    }
    return precio;
}

rl.question('¿Cuántas horas estuvo estacionado? ', (horas) => {
    let hrs = Number(horas);
    let resultado = calcularCosto(hrs);
    
    if (typeof resultado === 'string') {
        console.log(resultado);
    } else {
        console.log(`Total a pagar: $${resultado}`);
    }
    
    rl.close();
});