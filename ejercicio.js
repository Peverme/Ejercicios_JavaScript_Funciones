function numeroMayor(a, b, c){

    console.log(Math.max(a,b,c));
    if(a===b && a===c && b===c){
        console.log('Son iguales');
    } else {
        console.log('No son iguales');
    }
}

    numeroMayor(3,3,3);
    numeroMayor(10,3,3);
