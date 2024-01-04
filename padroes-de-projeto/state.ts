// class Contexto {
//     private estado: Estado;

import { isConstructorDeclaration } from "typescript";

//     constructor(estado: Estado) {
//         this.transicaoPara(estado);
//     }

//     public transicaoPara (estado:Estado): void {
//         console.log(`Contexto: Transição para` + estado.constructor.name);
//         this.estado = estado;
//         this.estado.setContexto(this)
//     }

//     public requisicao1(): void {
//         this.estado.referencia1();
//     }

//     public requisicao2(): void {
//         this.estado.referencia2();
//     }
    
// }

// abstract class Estado {
//     protected context: Contexto;

//     public setContexto(contexto: Contexto) {
//         this.context = contexto;
//     };

//     referencia1(): void {

//     };

//     referencia2(): void {

//     };
// }

// class EstadoConcretoA extends Estado {

//     public referencia1(): void {
//         console.log('EstadoConcretoA Aciona requisicao1');
//         console.log('EstadoConcretoA deseja mudar o estado do contexto');
//         this.context.transicaoPara(new EstadoConcretoB())
//     }

//     public referencia2(): void {
//         console.log('EstadoConcretoA Aciona requisicao2');
//     }
// }

// class EstadoConcretoB extends Estado {

//     public referencia1(): void {
//         console.log('EstadoConcretoB aciona requisicao1')
//     }

//     public referencia2(): void {
//         console.log('EstadoConcretoB Aciona requisicao2')
//         console.log('EstadoConcretoB deseja mudar o estado do contexto');
//         this.context.transicaoPara(new EstadoConcretoA())
//     }
// }

interface EstadoDeAlerta {
    ativar(): void;
    desativar(): void;
    mostrarMensagem(): void;
}

class EstadoAlertaLigado implements EstadoDeAlerta {

    ativar(): void {
        console.log('Alerta já está ativado.');
    }

    desativar(): void {
        console.log('Desativando o alerta.');
    }

    mostrarMensagem(): void {
        console.log('Alerta ativado. Alerta: Intrusão Detectada!');
    }

}

class EstadoAlertaDesligado implements EstadoDeAlerta {

    ativar(): void {
        console.log('Ativando o alerta.');
    }

    desativar(): void {
        console.log('Alerta já está desativado.');
    }

    mostrarMensagem(): void {
        console.log('Alerta desativado. Nenhuma intrusão detectada.');
    }

}

class SistemaDeAlerta {
    private estado: EstadoDeAlerta;

    constructor() {
        this.estado = new EstadoAlertaDesligado();   
    }

    ativarAlerta() {
        this.estado.ativar();
        this.estado = new EstadoAlertaLigado();
    }

    desativarAlerta() {
        this.estado.desativar();
        this.estado = new EstadoAlertaDesligado();
    }

    mostrarMensagemDeAlerta() {
        this.estado.mostrarMensagem();
    }
}

const sistemaDeAlerta = new SistemaDeAlerta();

sistemaDeAlerta.mostrarMensagemDeAlerta();

sistemaDeAlerta.ativarAlerta();
sistemaDeAlerta.mostrarMensagemDeAlerta();

sistemaDeAlerta.ativarAlerta();
sistemaDeAlerta.desativarAlerta();
sistemaDeAlerta.mostrarMensagemDeAlerta();


