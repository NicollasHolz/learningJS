function nomeDoMes(numeroMes) {
    switch (numeroMes) {
        case 1:
            console.log("Janeiro")
            break;
        case 2:
            console.log("Fevereiro")
            break;
        case 3:
            console.log("Marco")
            break;
        case 4:
            console.log("Abril")
            break;
        default:
            console.log("Mes invalido")
    }
}

function nomeDoMes2(numero) {
    const meses = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio']

    return meses[--numero];
}


nomeDoMes(1)
nomeDoMes(2)
nomeDoMes(3)
nomeDoMes(0)
console.log(nomeDoMes2(4))
console.log(nomeDoMes2(5))
console.log(nomeDoMes2(0))