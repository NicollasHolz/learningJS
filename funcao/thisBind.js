const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // This will return undefined because the context is different from the object pessoa

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // This will return the correct value because bind will bind the context to the object pessoa
