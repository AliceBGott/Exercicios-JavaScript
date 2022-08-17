const Pessoa = {
  nome: '',
  idade: '',
  getNome(){
    return this.nome
  }
  setNome(palavra){
    this.nome = palavra
  }

  getIdade(){
    return this.idade
  }
  setIdade(numero){
    this.idade = numero
  }
}

const p = new Pessoa ()
p.setNome('Calcifer')
p.setIdade('999')
console.log(p.getIdade())
