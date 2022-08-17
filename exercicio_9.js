class Funcionario{
  constructor(nome, dataCont){
    this.nome = nome
    this.dataCont = dataCont
  }

  getName(){
    return this.nome
  }
  setName(palavra){
    this.nome = palavra
  }

  getData(){
    return this.dataCont
  }
  setData(numero){
    this.dataCont = numero
  }
}


class Pn extends Funcionario{
  constructor(nome, dataCont, cpf, salario, beneficios ){
    super(nome, dataCont)
    this.cpf = cpf
    this.salario = salario
    this.beneficios = beneficios
  }

  getCpf(){
    return this.cpf
  }

  setCpf(numero){
    this.cpf = numero
  }

  getSalario(){
    return this.salario
  }

  setSalario(valor){
    this.salario = valor
  }

  getBeneficios(){
    return this.beneficios
  }

  setBeneficios(b){
    this.beneficios = b
  }
}


class Pj extends Funcionario{
  constructor(nome, dataCont, cnpj, salario){
    super(nome, dataCont)
    this.cnpj = cnpj
    this.salario = salario
  }

  getCnpj(){
    return this.cpf
  }

  setCnpj(numero){
    this.cpf = numero
  }

  getSalario(){
    return this.salario
  }

  setSalario(valor){
    this.salario = valor
  }
}


const pessoa = new Pn()
pessoa.setName('Calcifer')
console.log(pessoa.getName())
pessoa.setCpf('444444444444')
console.log(pessoa.getCpf())

const empresa = new Pj()
empresa.setCnpj('3333333333')
empresa.getCnpj()
empresa.setSalario(123)
empresa.getSalario()
