function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao //pode-se nao atribuir valor na doWhile

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`O número escolhido foi ${opcao}.`)
} while (opcao != 1)

console.log('Tchau!')