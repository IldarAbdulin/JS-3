//Создание объекта

// let user1 = new Object();
// let user2 = {

// } 



//2

// let user = new Object();
// user.name = 'admin';
// user.email = 'admin@mail.ru';
// console.log(user);
// console.log(user.name);
// console.log(user.email);
// console.log('<--------------->');
// user.email = 'ildar@gmail.com';
// console.log(user.email);



//3

// let user = {
//     name: 'admin',
//     email: 'tatar@mail.ru',
//     password: 'ildarilhammomgader228',
//     address: 'Bishkek',
// };

// console.log(user);
// console.log(user.name);
// console.log(user.email);

// user.email = 'admin@mail.ru';
// user.address = 'Moscow'
// user.password = 54321;

// console.log(user.email);
// console.log(user.password);



//4

// let user = {
//     name: 'admin',
//     email: 'pupsik@gmail.com',
//     city: 'Moscow',
//     //метод
//     sayHello: function() {
//         console.log(`Hello`);
//     }
// };

// console.log(user.city)
// console.log(user.name);
// console.log(user.email);

// user.sayHello();



//5

// let user = new Object();
//     user.name = 'admin';
//     user.email = 'muhtar@gmail.com';
//     user.city = 'Moscow';
//     user.sayHello = function () {
//         console.log(`Hello`);
//     }

// console.log(user.city)
// console.log(user.name);
// console.log(user.email);

// user.sayHello();

// home work 

let user = {
    firstName: prompt('Введите ваше имя'),
    lastName: prompt('Ваша фамилия ?')
}

function print() {
    alert(`Первый пользователь ввел: ${user.firstName} ${user.lastName}`);
    console.log(user);
}
print()

let user2 = new Object();
    user2.firstName = prompt('Введите ваше имя'),
    user2.lastName = prompt('Ваша фамилия ?')

function secondPrint() {
    alert(`Второй пользователь ввел: ${user2.firstName} ${user2.lastName}`);
    console.log(user2)
}
secondPrint()