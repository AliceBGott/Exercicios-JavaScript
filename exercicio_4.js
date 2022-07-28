let lista1 = [10,20,55,14,78,21,90,86,51,88]
let lista2 = [3,5,1]
let lista3 = [1,2,3,4,5,6,77,88,99,7,8,9,20,33,45,1]

function ordenaLista(listaNumeros){
  let aux = 0
  //let listaAux = []
  if(listaNumeros.length>10){
    console.log("Lista muito grande!")

  }else if(listaNumeros.length==10){
    //bubble sort
    for(var i=0;i<11;i++){
      for(var j=0; j<listaNumeros.length-i-1; j++){
        if(listaNumeros[j]>listaNumeros[j+1]){
          //realiza troca
          aux = listaNumeros[j+1]
          listaNumeros[j+1]=listaNumeros[j]
          listaNumeros[j]=aux
        }
      }
    }
    console.log(listaNumeros)

  }else{
    console.log("Lista muito pequena!")
  }
}

ordenaLista(lista1)
ordenaLista(lista2)
ordenaLista(lista3)
