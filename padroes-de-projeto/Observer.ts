// exemplo de observer

// abstract class Observador {
//     abstract atualizar():void;

// }

// class Pessoa implements Observador {

//     private acordada: boolean = false;

//     estaAcordada(): boolean {
//         return this.acordada;
//     }

//     atualizar(): void {
//         this.acordada = true
//         if (this.acordada) {
//             console.log(`Acordei!`);
            
//         };
//     }
// }


// class Som {

//     private barulho: boolean = false;
//     private descansando: Observador[] = [];
    
//     adicionarPessoa(pessoa: Observador): void {
//         this.descansando.push(pessoa)
//     }

//     estadoDeSom(): boolean {
//         return this.barulho;
//     }

//     tocar(): void {
//         this.barulho = true;
//         for (const pessoa of this.descansando) {
//             pessoa.atualizar();
//         }
//     }
// }

// const pessoa1 = new Pessoa;
// const pessoa2 = new Pessoa;
// const pessoa3 = new Pessoa;

// const barulho = new Som;

// barulho.adicionarPessoa(pessoa1);
// barulho.adicionarPessoa(pessoa2);
// barulho.adicionarPessoa(pessoa3);

// barulho.tocar()




