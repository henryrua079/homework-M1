'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if(array.length <= 1) {
    return array
  }
  
 // else{
  let izquierda =[];
  let derecha = [];
  let igual = [];
  let pivote = array[Math.floor(Math.random() * array.length)];
  
  console.log(pivote)

 
  
    for (let i = 0; i < array.length; i++) {

      if(array[i] < pivote){            //si es menor va a la izquierda
        izquierda.push(array[i])
     } else if(array[i] > pivote) {
        derecha.push(array[i])          //si es mayor o igual va a la derecha
     
      }else {
        igual.push(array[i]);
      }
      
    }
      return quickSort(izquierda).concat(igual).concat(quickSort(derecha))

    
}

const a = [10,10,12,16]
const b = [1,2,3]
console.log(a.length) 
console.log(quickSort(a))


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
