class Pessoa{
    constructor(nome){
        this.nome=nome;
    }
    apresenteSe(){
        console.log(`Olá!Eu sou $(this.nome).`);
    };
}

let tiago=new Pessoa("Tiaago");
console.log(tiago.nome);
tiago.apresenteSe();
let frankie=new Pessoa("Frankie");
console.log(frankie.nome);
frankie.apresenteSe();