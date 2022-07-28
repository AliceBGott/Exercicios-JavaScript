function inverte(palavra){
  let invertida = ""
  for(var i=palavra.length-1;i>=0;i--) invertida += palavra[i]
  return invertida
}

console.log(inverte("Calcifer"))
