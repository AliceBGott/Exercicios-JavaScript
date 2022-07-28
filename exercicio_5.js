function removeMeio(lista){
  let aux = Math.floor(lista.length/2)
  console.log(lista[aux])
  lista.splice(aux,1)
  console.log(lista)
}

//lista com elementos de numero impar
let animais = ["Gato", "Cachorro", "Cavalo", "Leão", "Zebra"]
removeMeio(animais)

//lista com elementos de numero par
let frutas = ["Maçã","Pera", "Banana", "Morango"]
removeMeio(frutas)
