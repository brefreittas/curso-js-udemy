//Avaliação de curto-circuito

function falaOi() {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao);
