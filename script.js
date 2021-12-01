

do {
    var number = +prompt('Введите число') 
}while(isNaN(number) || number == 0){
   console.log(number);
}

do{
    var power = +prompt('Введите степень')
}while(isNaN(power) || power == 0){
   console.log(power);
} 


let a = 1
 for(let i = 0; i < power; i++){
     a = a * number
 }
console.log(a);


// do {
//     var num = +prompt('Введите число')
// }while(isNaN(num) || num == 0)


// do {
//     var power = +prompt('Введите степень')
// }while(isNaN(power) || power == 0)


// let a = 1;

// for(let i = 0; i < power; i++) {
//     a = a * num
// }

// console.log(a);