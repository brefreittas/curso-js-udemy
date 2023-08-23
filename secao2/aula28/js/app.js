const question = Number(prompt('Digite um número'));
const userNumber = document.querySelector('.user-number');
const content = document.querySelector('.content');

userNumber.innerHTML = question;

content.innerHTML = `<p>A raiz quadrada de ${question} é igual a ${question ** 0.5}<br></p>`;
content.innerHTML += `<p>${question} é inteiro? ${Number.isInteger(question)}<br></p>`;
content.innerHTML += `<p>É NaN? ${Number.isNaN(question)}<br></p>`;
content.innerHTML += `<p>${question} arredondado para cima: ${Math.ceil(question)}<br></p>`;
content.innerHTML += `<p>${question} arredondado para baixo: ${Math.floor(question)}<br></p>`;
content.innerHTML += `<p>${question} com duas casas decimais: ${question.toFixed(2)}<br></p>`;
