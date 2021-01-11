// ============CREANDO MI FOREACH()===============
const numbers = [1,2,3,4,10,12,15,10,20,30];
const camilo = {};

function forEac(params) {
      console.log(params);
}
camilo.forEach = (array, fun) => {
      for (let i = 0; i < array.length; i++) {
            fun(array[i])
      }
}

// ============CREANDO MI FOREACH()===============
function saludo() {
     console.log("hola") 
}
camilo.each = (Array, fun) => {
      for (let i = 0; i< Array.length; i++) {
            fun();
      }
}

//========== CREANDO MI FILTER===================
function biggerThan(element) {
         return element > 10;
}
function lessThan(element) {
         return element < 10;
}

camilo.filter = ( array , fun )  => {
      let newarray = [];
      for (let i = 0; i < array.length; i++) {
            if (fun(array[i])) {
                  newarray.push(array[i]);
            }     
      }
      return newarray
}
//========== CREANDO MI MAP ===================
function mapPersonal(element) {
      return element*2;
}
camilo.map = (array, fun) => {
      let newarray = [];
      for (let i = 0; i < array.length; i++) {
            newarray.push(fun(array[i]))
      }
      return newarray;
}
//========== CREANDO MI FIND ===================
function findElement(element) {
      let elemen = 1;
      if (element === elemen) {
            let aux = element
            return aux
      }
}
camilo.find = (array, fun) => {
      let aux = 0;
      for (let i = 0; i < array.length; i++) {
            aux = fun(array[i]);
            if (aux>0) {
                  return aux
            }
      }
}
//========== CREANDO MI FINDINDEX =================== 
function findIndexx(element) {
      const  num = 15;
      if (element === num) {
            return true
      }
}
camilo.findIndex = (array,fun) => {
      let newarray = [];
      for (let i = 0; i < array.length; i++) {
           let position = fun(array[i]);
           if (position === true ){
                 newarray.push(i);
           }
      }
      return newarray
}
//========== CREANDO MI CONTAINS ===================
camilo.contains = (array, fun, from) => {
      for (from = 0; from < array.length; from++) {
            if (array[from] ==fun) {
                  return true;
            }            
      }
      return false
};
//========== CREANDO MI PLUCK =================== 

let array = [{nombre: 'moe', edad: 40}, {nombre: 'larry', edad: 50}, {nombre: 'rizado', edad: 60}];

camilo.pluck = (elemen,element) => { 
      let newarray = [];
      for (let i = 0; i < elemen.length; i++) {
            newarray.push(elemen[i][element]);
      }
      return newarray
};

// //========== CREANDO MI WITHOUT =================== 

camilo.without = (array,value1,value2 ) => {
      let newarra = [];
      for (let i = 0; i < array.length; i++) {
            if (array[i] !=value1 && array[i] !=value2 ) {
                  newarra.push(array[i])
            }
      }
      return newarra
}

//============RESULTS==================
let camiloforeach = camilo.forEach(numbers,forEac);
console.log(camiloforeach);

let camiloeach = camilo.each(numbers,saludo);
console.log(camiloeach);

let datos = camilo.filter(numbers, biggerThan);
console.log(datos);

let datos2 = camilo.filter(numbers, lessThan);
console.log(datos2);

let datos3 = camilo.map(numbers, mapPersonal);
console.log(datos3);

let dato4 = camilo.find(numbers, findElement);
console.log(dato4);

let result = camilo.findIndex(numbers, findIndexx );
console.log(result);

let find = camilo.contains(numbers, 300);
console.log(find);

let resultado = camilo.pluck(array,'nombre');
 console.log(resultado);

let resultadoo = camilo.without(numbers, 10,4);
console.log(resultadoo);