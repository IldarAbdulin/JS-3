
//1
 
// let name = 'ildar',
//     login;

// login = name;

// console.log(login)

//2

// let fileData;

// let fileName;

// let sumOfError;


//3 

//Напишите сценарий, который найдет минимальное, максимальное значения массива, а также выведет сумму всех элементов массива.

// let values = [10, 20, 4, 6, 11, 9, 125, -1, 8, 0, 3];
// let max = Number.MIN_VALUE;
// let min = Number.MAX_VALUE;
// let sum = 0;

// for( const value of values){
//     if ( value > max){
//         max = value
//     }else( value < min){
//         min = value
//     }
//     sum+=value;
// }
// console.log('Сумма всех чисел: ' + sum)
// console.log('Максимальное значение: ' + max)
// console.log('Минимальное значение: ' + min)


//4
// При помощи цикла for выведите все четные числа между 0 и 100

// for ( i = 0; i <= 100; i++){
//     if( i % 2 == 0){
//         console.log(i)
//     }
// }

//5

// let number = prompt('Введите любое число , а я сложу его с нуля')
// let sum = 0;

// for( i = 0; i <= number; i++ ){
//     sum+=i;
// }

// console.log(sum)


//Найдите четные и нечетные числа используя 1 из методов массива

// let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
// let oddValues = [];
// let evenValues = [];

// for ( const value of values ){
//     if( value % 2 == 0 ){
//         evenValues.push(value)
//     } else{
//         oddValues.push(value)
//     }
// }
// console.log('Четные')
// for( const even of evenValues){
//     console.log(even)
// }
// console.log('<----------------------------->')
// console.log('Нечетные')
// for ( const odd of oddValues){
//     console.log(odd)
// }

// console.log(evenValues)
// console.log(oddValues)



// function pow(x , n){
//     let result = 1;

//     for( i = 0; i < n; i++){
//         result*=x;
//     }
//     return result;
// }

// let x = prompt('x?' , '');
// let n = prompt('n?' , '');

// if ( n < 0){
//     alert(`zbc`)    
// }else{
//     alert(pow( x , n))
// }