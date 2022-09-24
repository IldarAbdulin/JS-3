
// 1

// объявление функции с именем show
// function  show() {
//     let a = 30;
//     console.log(a)
// }

// вызов
// show()


// 2

// Определнние функции с двумя параметрами ( аргументами ) - text && repeatCount
// function showMessage(text , repeatCount) {
//     for ( i = 0; i < repeatCount; i++){
//         console.log(text)
//     }
// }

// showMessage('Hello world' , 2);
// showMessage('Привет мир' , 1);


// 3

// function showMessage(text , repeatCount) {
//     if(repeatCount === undefined){
//         repeatCount = 3;
//     }
//     for( i = 0; i < repeatCount; i++){
//         console.log(text)
//     }
// }
// showMessage('Hello world');
// showMessage('Салам пацаны' , 1);
// showMessage('abc');


//4

// Если при вызове для параметра repeatCount не будет предоставлено при вызове , будет использоваться значение по умолчанию -1
// function showMessage(text , repeatCount = 5) {
//     for ( i = 0; i < repeatCount; i++){
//         console.log(text)
//     }
// }
// showMessage('Hello world'); // так как нет второго значения при вызове используется значение по умолчанию для парметра repeatCount
// showMessage('Даня клоун');
// showMessage('abu');


//5
// В функиях можно использовать ключевое слово return для того , чтобы вернуть значение в асть кода , которая вызвала функцию
// Инструкция return прекращает выполнение функции - любые оставшиеся инструкции в функции не выполняются

// function sum( x , y) {
//     let sumResult = x * y;
//     return sumResult;

//     // return x + y; // После return может следовать выражение
//     // Результат выполнения выражения будет возвращаемым значением

//     console.log('Код return не выполняется') // Эта инструкция не сработает , так как return завершает работу функции
// }
// let result = sum( 5 , 2);
// console.log(result);


//6 

// let firstName;
// let lastName;
// let age;

// function ask() {
//     firstName = prompt('Введите ваше имя');
//     lastName = prompt('Введите вашу фамилию');
//     age = prompt('Введите ваш возраст');
// }

// function say() {
//     console.log(`Имя: ${firstName}`);
//     console.log(`Фамилия: ${lastName}`);
//     console.log(`Возраст: ${age}`);
// }
// // ask();
// // say();
// let needRepeat;
// do{
//     ask();
//     say();
//     needRepeat = confirm(`Пройти заполнение еще раз?`)
// }
// while(needRepeat);



//7

// function add(a , b) {
//     return a + b
// }
// function sub(a , b) {
//     return a - b
// }
// function mul(a , b) {
//     return a * b
// }
// function div(a , b) {
//     return a / b
// }
// function del(a , b){
//     return a % b
// }
// function kv(a , b) {
//     return a ** b
// }

// let operand1 = +prompt(`Введите первое число`);
// let sign = prompt(`Введите знак арифметической операции: + , - , * , / , % , **`)
// let operand2 = +prompt(`Введите второе число`);
// let result;

// switch(sign){
//     case '+':
//         result = add(operand1 , operand2);
//         break;
//     case '-':
//         result = sub(operand1, operand2);
//         break;
//     case '*':
//         result = mul(operand1, operand2);
//         break;
//     case '/':
//         result = div(operand1, operand2);
//         break;
//     case '%':
//         result = del(operand1, operand2);
//         break;
//     case '**':
//         result = kv(operand1, operand2);
//         break;
//     default:
//         console.log(`${sign}: не является знаком арифметической операции`)
// }
// if (result !== undefined){
//     console.log(`${operand1} ${sign} ${operand2} = ${result}`)
// }


//8

// function calculatrArea(side1 , side2 , side3){
//     if( side1 === undefined || side2 === undefined){
//         return;
//     }
//     else if(side3 === undefined){
//         return side1 * side2;
//     }
//     else{
//         let p = ( side1 + side2 + side3) / 2;
//         return Math.sqrt(p *(p - side1) * (p - side2) * (p - side3));
//     }
// }
// let result = calculatrArea(10 , 10);
// console.log(`Площадь квадрата: ${result}`);

// result = calculatrArea(10 , 10 , 15);
// console.log(`Площадь треугольника: ${result}`);

// result =calculatrArea(10);


//9

// let names = [];
// names[0] = 'Бумага А4';
// names[1] = 'Биндеры для бумаги';
// names[2] = 'Ручка';

// let prices = [];
// prices[0] = 5; 
// prices[1] = 56;
// prices[2] = 12;

// let orderedProducts = promptOrderedProducts();
// let totalPrice = calculateTotalPrice(orderedProducts);
// showOrderDetails(totalPrice);

// function promptOrderedProducts() {
//     let products = [];
//     for( i = 0; i < names.length; i++){
//         const name = names[i];
//         const price = prices[i];

//         products[i] = +prompt(`Укажите количество продуктов: ${name} , цена: ${price}`)

//     }

//     return products;

// }

// function calculateTotalPrice(products) {
//     let sum = 0;

//     for(i = 0; i < products.length; i++){
//         sum+=prices[i] * products[i];
//     }

//     return sum;

// }

// function showOrderDetails(orderTotalPrice) {
//     alert(`Сумма вашего заказа ${orderTotalPrice}`)

//     let isFreeShipping = orderTotalPrice > 1000;
//     if ( isFreeShipping ){
//         alert(`Доставка будет бесплатной`)
//     }
// }







// Попросите у пользователя ввести название города. Удалите этот город из элементов массива. 
// Если города нет в массиве, сообщите об этом пользователю.
// Выведите массив на экран после удаления элементов.

// let cities = ["London", "Paris", "Berlin", "Rome", "Budapest", "Lisbon", "Madrid", "Amsterdam"]; 
// let input = prompt('Введите название города');

// function citiesElemment(city) {

//     for( count of cities){
//         console.log(count)  

//         let index = cities.indexOf(count)
//         console.log(index)

//         if(count == input){
//             alert(`Такой город есть`)
//             cities.splice(index , 1)
//         } else{
//             alert(`Такого города я не знаю`)
//         }

//     }
// }







// От 0 до 100 игра угадай число
// function random(number) {
//     return Math.floor(Math.random() * number)
// }
// let name = prompt(`Введите ваше имя`);
// while(name =='' || name == null){
//     name = prompt('Введите ваше имя');
// }

// alert(`${name} , привет я загадал случайное число от 0 до 100 , попробуй угадать это число`)

// let number = random(100);
// let guess = prompt(`Какое число я загадал?`);
// let numberOfGuess = 0;

// while( guess != number ){
//     if ( guess > number){
//         guess = prompt('Много , давай еще попыточку');
//         numberOfGuess = numberOfGuess + 1;
//     } else if (guess < number){
//         guess = prompt(`Мало , давай еще попыточку`);
//         numberOfGuess = numberOfGuess + 1;
//     }
// }
// alert(`Правильно , я загадал число: ${number} ,количество попыток: ${numberOfGuess}`);






// home work

// 1
// function min(a , b) {
//     if( a > b){
//         alert(`Наименьшее число: ${b}`)
//     }else if ( a < b){
//         alert(`Наименьшее число: ${a}`)
//     }
// }
// let operand1 = +prompt('Введите первое число')
// let operand2 = +prompt('введите второе число')
// min(operand1 , operand2)

// 2


// let avg;

// function sumAvg(a , b , c) {
//     if ( a === undefined || b === undefined){
//         console.log(`Значений нет`)
//     }
//     else if (c === undefined){
//         console.log(`Третьего значения нет`);
//     }
//     else{ 
//         avg = (a + b + c) / 3;
//         console.log(`Среднее арифметическое: ${avg}`)
//     }
// }
// sumAvg(); 
// sumAvg(5 , 2 , 2);
// sumAvg(5, 3);



// function showMessage(from, text) {

//     let name = prompt('Введите ваше имя')

//     from = '*' + name + '*';
    
//     alert( from + ': ' + text );
//   }
  
//   let from = name;
  
//   showMessage(from, "Привет"); 


// function checkAge(age) {
//     return (age >= 18) || confirm('Родители разрешили?');
// }
  
// let age = prompt('Сколько вам лет?', 18);
  
// if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
// } else {
//     alert( 'Доступ закрыт' );
// }


// function pow(a,b) {
//     return a ** b
// }
    
// let page = prompt('Введите первое число')
// let secondNum = prompt('Второе')

// console.log(pow(page,secondNum))








// functions second theme

//1

     // Область видимости - часть программного кода, в пределах которой созданный идентификатор позволяет обратиться к привязанной к нему сущности.

    // В JS есть две области видимости - глобальная, локальная.
    // Глобальная - объект window, все что определено в элементе script.
    // Локальная function scope - функция, в случае если переменный созданы с помощью ключевого слова var.
    // Локальная block scope - блок кода, выделенный операторными скобками { и } (работает, если переменная создана с использованием ключевого слова let).

    // Если переменная создана в области видимости, то она может использоваться в этой области видимости, или во вложенных областях видимости.
    // Когда выполнение сценария выходит за область видимости, в которой была создана переменная, к переменной нельзя обратиться.


    // идентификаторы global (переменная) и testScope (функция) - находятся в глобальной области видимости
    // let global = "Global variable";

    // function testScope() {
    //     let a = "first";
        
    // // условие - вложенная область видимости
    //     if (a != "") {
    //         let b = "second"; // можно использовать только в условии
    //         console.log(a); // доступна, так как эта область видимости вложена в ту, где создавалась переменная а
    //         console.log(b);
    //         console.log(global);
    //     }

    //     console.log(a);
    //     // console.log(b); // переменная b исчела после выхода из условия
    //     console.log(global);
    //     }


    //     testScope();

    //     console.log(a); // исчезла, после выхода за пределы функции testScope
    //     // console.log(b); // исчезла, после выхода за пределы функции testScope
    //     console.log(global);



//2
// function functionScopeTest() {
//     var a = 'first';

//     if(a){
//         var b = 'second';
//         console.log('1 ' + a)
//         console.log('1 ' + b)
//     }
//     console.log('2 ' + a)
//     console.log('2 ' + b)
// }
// functionScopeTest()




// let a;
// let b;

// function hoist() {
//     a = 20;
//     b = 100
// }
// hoist();
// console.log(a)
// console.log(b)



// => замена
// let add = (a , b) => {
//     return a + b;
// }



// let cities = ["London", "Paris", "Berlin", "Rome", "Budapest", "Lisbon", "Madrid", "Amsterdam"];  
// let deleteCity = [];
// let city = prompt("Введите вашего города:");  

// let index = cities.indexOf(city);

// if ( index == -1){
//     alert('City`s not found')
//     cities.push(city)
// }else{
//     alert('City`s found');
//     cities.splice(index , 1);
//     deleteCity.push(city);
// }
// for( city of cities){
//     console.log(city)
// }
// console.log(deleteCity)