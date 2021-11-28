

do {
    var number = +prompt('Введите число') 
}while(isNaN(number) || number === 0){
   console.log(number);
}

do{
    var power = +prompt('Введите степень')
}while(isNaN(power) || power === 0){
   console.log(power);
} 

var result = (number**power)

alert(result)


console.log(result);