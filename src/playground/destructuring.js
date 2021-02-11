// Object destructuring

// const person = {
    
//     age: 43,
//     location: {
//         city: 'Pully',
//         temp: -1
//     }
// };

// const { name : nomDeLaPersonne = 'Fabio', age } = person;

// console.log(`${nomDeLaPersonne} is ${age}.`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

////////////////////////////////////////////////////////////////////////
// Array destructuring

const address = ['', 'Philadelphia', 'Pennsylvania', '19147'];

const [street = 'some street', city, state] = address;

console.log(`You are in ${city} ${state}, ${street}.`);