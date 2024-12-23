import { createHash } from 'crypto';

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash('uma String Qualquer'));

class Usuario {
    constructor(nome, senha) {
     this.nome = nome;
     this.hash = criaHash(senha);   
    }

    autentica(nome, senha) {
        if (nome === this.nome && this.hash === criaHash(senha)) {
            console.log("Usuário cadastrado com sucesso");
            return true;
        }

        console.log("Usuário e/ou senha incorreto(s)")
        return false;
    }
}

const user = new Usuario('marcelo', '123')
user.autentica('marcelo','1234')