//Ejercicio 1:
let cuadrado = (num) =>{
    let multi = num * num;
    return multi;
}
console.log("El resultado de su numero al cuadrado es: ", cuadrado(5));


// Ejercicio 2

let prom = (a, b, c) => (a + b + c) / 3;
console.log("Su promedio es: ", prom(5,7,5).toFixed(2));

//Ejercicio 3:

let area = (base,altura) =>{
    let result = (base * altura)/2;
    return result.toFixed(2);
}
console.log("El area es: ", area(10,3));
