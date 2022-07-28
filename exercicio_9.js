class Funcionario{
  constructor(nome, dataCont){
    this.nome = nome
    this.dataCont = dataCont
  }

  getNome() => this.nome
  setNome : palavra => this.nome = palavra

  getDataCont() => this.dataCont
  setDataCont : data => this.dataCont = data
}


class Pn extends Funcionario{
  constructor(nome, dataCont, cpf, salario, beneficios ){
    super(nome, dataCont)
    this.cpf = cpf
    this.salario = salario
    this.beneficios = beneficios
  }

  getCpf() => this.cpf
  setNome : numero => this.cpf = numero

  getSalario() => this.salario
  setSalario : valor => this.salario = valor

  getBeneficios() => this.beneficios
  setBeneficios : lista => this.beneficios = lista
}


class Pj extends Funcionario{
  constructor(nome, dataCont, cnpj, salario){
    super(nome, dataCont)
    this.cnpj = cnpj
    this.salario = salario
  }

  getSalario() => this.salario
  setSalario : valor => this.salario = valor

  getCnpj() => this.cnpj
  setCnpj : numero => this.cnpj = numero
}
