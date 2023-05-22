function teste1(num) {
    if (num > 7)
        console.log(num)
        console.log('Final') //sempre será executado pois falta o {}, sem ele apenas a 1 linha é executada
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { //cuidar com o ;, nao usar com estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)