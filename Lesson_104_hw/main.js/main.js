const user = {
    name: 'Max',
    age: 20,
    isAdmin: false,
    sayHello(name) {
        console.log(`Hello ${name}, this is my first JS homework`);
    }
}
user.sayHello('Tom')

/* ================================================================ */

const users = [
    {
        name: 'Alex',
        age: 21,
        isAdmin: false
    },
    {
        name: 'John',
        age: 22,
        isAdmin: false
    },
    {
        name: 'Artur',
        age: 19,
        isAdmin: false
    },
    {
        name: 'Calvin',
        age: 26,
        isAdmin: true
    }
]

let simpleUsers = 0
let adminUsers = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) {
        simpleUsers++;
    }
    if (users[i].isAdmin){
        adminUsers++
    }
}
console.log(`${simpleUsers} users is not Admin`);
console.log(`${adminUsers} user is Admin`);




