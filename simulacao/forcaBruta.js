import { createHash } from 'crypto';

class Usuario {
    constructor(nome, senha) {
     this.nome = nome;
     this.hash = this.criaHash(senha);   
    }

    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex')
    }

    autentica(nome, senha) {
        if (nome === this.nome && this.hash === this.criaHash(senha)) {
            console.log("Usuário autenticado com sucesso!");
            return true;
        }

        // console.log("Usuário e/ou senha incorreto(s)")
        return false;
    }
}

const user = new Usuario('marcelo', '0115')
// console.log(user.autentica('marcelo', '0705'));
for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
    senhaTeste = senhaTeste.toString().padStart(4,'0')

    if (user.autentica('marcelo', senhaTeste)) {
        console.log(`A senha do usuário é ${senhaTeste}`);
    }
}
