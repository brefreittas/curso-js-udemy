const nome = 'Breno de Freitas';
const idade = 17;
const peso = 84;
const alturaM = 1.8;

let imc = peso / alturaM ** 2;
let anoNascimento = 2023 - idade;

console.log(
    `${nome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaM} de altura e seu IMC é de ${imc}`
);

console.log(`${nome} nasceu em ${anoNascimento}`);
