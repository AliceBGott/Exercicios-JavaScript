//comparar com o math.flor ==
function pares(listaNumeros){
  let arrayAux = new Array()
  for(var i=0; i<listaNumeros.length;i++){
    if((listaNumeros[i]/2)==(Math.floor(listaNumeros[i]/2))){
      arrayAux.push(listaNumeros[i])
    }
  }
  return(arrayAux)
}

let numeros=[1,2,3,4,5,6,7,8,9]
console.log(pares(numeros))
