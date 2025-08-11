// importamos el modulo
import readline from 'readline';

// Crear la interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Realizamos la pregunta
rl.question("Ingrese una frase:", (frase)=>{
    console.log (`Su frase es: ${frase}`)

    // 1. Lenght
    const fraseLenght = frase.length;
    console.log (`La longitud de la frase es: ${fraseLenght}`)
    
    // 2.toUpperCase
    const fraseMayus = frase.toUpperCase();
    console.log (`La frase en Mayusculas es: ${fraseMayus}`);


    // 3. toLoveCase
    const fraseMinus = frase.toLowerCase();
    console.log (`La frase en Minusculas es: ${fraseMinus}`);

    // 4. trim
    const frasetrim = frase.trim();
    console.log (`La frase si espacio al inico y al final  es: ${frasetrim}`);

    // 5. substring 
    const subCadena = frase.substring(0,5);
    console.log (`Los primeros 5 caracteres de la frase son: ${subCadena}`);


    // 6. slice
    const subCadenaSlice = frase.slice(-5);
    console.log (`Los ultimos 5 caracteres de la frase son: ${subCadenaSlice}`);

    // 7.Replace
    const fraseReemplazada = frase.replace ('hola', 'adios');
    console.log (`La frase con 'hola' reemplazada por 'adios' es: ${fraseReemplazada}`);

    // 8.replaceAll
    const fraseReemplazadaAll = frase.replaceAll('hola', 'adios');
    console.log (`La frase con todas la ocurrencias de 'hola' reemplazadas por 'adios'es: ${fraseReemplazadaAll}`);


    // 9. split divide la frase en palabras separandolas por un espacio
    const fraseArray = frase.split(' ');
    console.log (`La frase divida en palabras es: ${fraseArray}`);

    // 10.Includes
    const incluyeHola = frase.includes('hola');
    console.log (`La frase incluye la palabra 'hola': ${incluyeHola}`);

    // 11. indexOf
    const indiceHola = frase.indexOf ('hola');
    console.log (`El indice de la primera ocurrencia de 'hola'es: ${indiceHola}`);

    // 12.starsWith
    const empiezaConHola = frase.startsWith('hola');
    console.log (`La frase empieza con 'hola': ${empiezaConHola}`);

    // 13.endsWith
    const terminaConAdios = frase.endsWith('adios');
    console.log (`La frase termina con 'adios': ${terminaConAdios}`);
    rl.close();
}) 

