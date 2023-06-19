const generar_caracteres = (numero, caracter ) => {
    let contenedor = '';
    for (let i = 0; i < numero; i++) {
        contenedor += caracter;
    }

    return contenedor;

}

const caracterMultiplicado = generar_caracteres(5, 'x');
console.log(caracterMultiplicado);