let array= [1,2,3,4,5];
let newarray = [];

function array1 (array,value1,value2) {
      array.splice(2,value1,value2);
      return array
};
let hola =array1(array,1,5);
console.log(hola);

