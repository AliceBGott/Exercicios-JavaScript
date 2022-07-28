class Pessoa{
  constructor(nome,idade,sexo,cpf,dataNasc,altura){
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
    this.cpf = cpf
    this.dataNasc = dataNasc
    this.altura = altura
  }
}

const calcifer = new Pessoa("Calcifer",88,"male","123456789","09/09/1000",1.90)

//let entradas = Object.entries(calcifer)
let chaves = Object.keys(calcifer)
let valores = Object.values(calcifer)

 for(var i=0;i<6;i++){
   console.log(`A chave "${chaves[i]}" possui valor ${valores[i]}`)
 }
