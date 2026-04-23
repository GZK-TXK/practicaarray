////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 1
//Dado un array, retorna el primer elemento del mismo.

let array1 = [4,5,6,7,8]

 console.log(array1[0])

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //PRACTICA 2
 //Dado un array, retorna el último elemento del mismo.

 let array2 = [4,9,7,6,2,8]

 let ultimoDato = array2.length -1;

 console.log(array2[ultimoDato])

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 3
//Agrega un elemento al inicio de un array y devuelve el array actualizado.

let array3 = [7,8,9,5,6]

console.log(array3)

array3.unshift(49);

console.log(array3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 4
//Elimina el primer elemento de un array y devuelve el array resultante.

let array4 = ["casa",475, true,1547 ]

console.log(array4)

let primero = array4.shift()

console.log(primero)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 5
//Agrega un elemento al final de un array y devuelve el array actualizado.

let array5 = [47,false, "coche", 754]

let ultimo = array5.push("probando")

console.log(ultimo)
console.log(array5)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 6
//Elimina el último elemento de un array y devuelve el array resultante.

let array6 = [7,8,9,5,6]

let ultimoAn = array6.pop()

console.log(array6)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 7
//Dado dos arrays, combínalos en uno solo y retorna el resultado.

let arraycom1 = [7,8,9,5,6]

let arraycom2 = [4,5,6,7,8]

let combinado = arraycom1.concat(arraycom2)

console.log(combinado);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 9
//Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.

let array8 = ["silla",64,"Escaparate",7,6]

let busqueda = array8.includes("Maricarmen")

console.log(busqueda)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 9
//Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.

let array9 = ["silla",64,9,7,6]

let indice = array9.indexOf("silla")

console.log(indice)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 10
//Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado.

let array10 = ["silla",64,"Escaparate",7,6]

let arrayReemp = array10.splice(1,1,"Alcachofa", true, "Zanahoria")

console.log(array10)

//O

let arrays11 = ["silla",64,9,7,6]

arrays11[2]= "raton"

console.log(arrays11)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 11
//Dado un array de números, suma todos sus elementos y devuelve el resultado.

let array11 = [64,9,7,6]

let suma = array11.reduce(function(acc, num){
    return acc + num
}, 0)

console.log(suma)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 12
//Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array

let array12 = [64,9,7,6]

let arrayMulti = array12.map(function(num){
    return num*8
});

console.log(arrayMulti)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 13
//Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor.

let array13 = [64,9,7,6]

let arrayMayores = array13.filter(function(num){
    return num>7
})

console.log(arrayMayores)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 14
//Dado un array de números y un valor, verifica si todos los elementos del array son mayores a ese valor.

let array14 = [64,9,7,6]

let arrayVer=array14.every(function(num){
    return num>3
})

console.log(arrayVer)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 15
//Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado.

let array15 = [7,8,9,5,6]

let arrayMasMayor = array15.find(function(num){
    return num>6
})

console.log(arrayMasMayor)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 16
//Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola.



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 17
//Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original.



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 18
//Dado un array de nombres (strings), genera un nuevo array donde cada nombre esté en mayúsculas.
