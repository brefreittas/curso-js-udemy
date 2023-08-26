const pessoa1 = {
    nome: 'Breno',
    sobrenome: 'Freitas',
    idade: 16,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi!`);
    },
};

pessoa1.fala();

// const criaPessoa = (nome, sobrenome, idade) => {
//     return { nome, sobrenome, idade };
// };

// const pessoa1 = criaPessoa('Breno', 'Freitas', 16);
// console.log(pessoa1.nome);
