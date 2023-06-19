const x = [1, 2, 3, 4];
const sumaArreglo = (arreglo) => {
    const longitudArreglo = arreglo.length;
    let sumaArreglo = 0;
    for (let i = 0; i < longitudArreglo; i++) {
        sumaArreglo += arreglo[i];
    }
    return sumaArreglo;
}
console.log(sumaArreglo(x)); 
console.log(x.length);
