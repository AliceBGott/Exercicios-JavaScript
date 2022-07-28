function nomesArray(nome){
  var stringArray = nome.split()
  var arrayAux1 = new Array()
  var arrayAux2 = new Array()
  var cont=0
  for(var i=0; i<nome.length;i++){
    arrayAux1+=stringArray[i]
    cont++
    if(stringArray[i]==" "){
      break
    }
  }
  for(var j=0;j<cont;j++) arrayAux2+=stringArray[j]
  let nomeComposto = new Array([arrayAux1, arrayAux2])
  return nomeComposto
}

console.log(nomesArray("edmarques lima"))
