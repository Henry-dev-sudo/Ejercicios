import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// const contra = `henry123`;
// let mensaje;

// rl.question(`Ingrese su password: `, (pass) =>{
//     if (contra === pass) {
//         mensaje= 'Contraseña correcta';
//     }else{
//         mensaje= 'Contraseña incorrecta';
//     }

//     console.log(`${mensaje}`);
//     rl.close();
// })

// let mensaje;

// rl.question("Ingrese un numero: ", numero =>{ 
//     if(numero > 0){
//         mensaje = 'El numero es positivo';
//     }else if(numero < 0){ 
//         mensaje = 'El numero es negativo';
//     }else {
//         mensaje = 'Su numero es 0';
//     }

//     console.log(`${mensaje}`);
//     rl.close();
// })

// let desc;

// function descuento(compra){

//     if(compra >= 100){
//         desc = 0.10;
//     }else if(compra>=50 && compra <= 99){
//         desc = 0.05;
//     }else{
//         desc= 0;
//     }

//     const total = compra-(compra*desc);
//     return total;
// }

// rl.question("Ingrese el valor de su compra: ", precio =>{
//     let compra = Number(precio);
//     const totalAPagar = descuento(compra);
//     console.log(`Monto de la compra a pagar es de: $${compra.toFixed(2)} el total a pagar con descuento es de : $${totalAPagar.toFixed(2)}`);
//     rl.close();
// })

// const nombre = ['henry', 'oscar', 'gerardo', 'hector'];


// rl.question("Ingrese un nombre: \n", name =>{

//     if(nombre.includes(name)){ 
//         console.log(`El nombre ${name} esta en el arreglo.`)
//     }else{
//         console.log(`El nombre ${name} no esta en el arreglo.`)
//     }
//     rl.close();
// })

// //funcion de flecha
// const nombres = ['Henry', 'Gerardo', 'chepe', 'Pepe', 'Chasis'];
// //Version de la Ingeniera

// function existe(nombre) {
//     if (nombres.includes(nombre)) {
//         return `El nombre ${nombre} está en el arreglo`;
//     }
//     else { 
//         return `El nombre ${nombre} no está en el arreglo`;
//     }
    
// }

// rl.question("INgrese un nombre: " , (nombre) => {
//     let resultado = existe(nombre);
//     console.log(resultado);
//     rl.close();
// })

function categoria(edad){

    if(edad >= 0 && edad <= 11 ){
        console.log(`Estas en tu niñez`)
    }else if(edad >= 12 && edad <= 17){
        console.log(`Estas en tu adolecencia`);

    }else if(edad >= 18 && edad <= 59){
        console.log(`Estas en tu adultez`);
    }else{
        console.log(`Estas en tu vejez`)
    }
    return edad;
}
 rl.question('Ingresa tu edad: ', edadNum =>{
        let age = Number (edadNum)
        let resultado = categoria(age)
        console.log(resultado);
        rl.close();
    })
    