// Objects - unordered, keyed collections of any various values

const emptyObj = {};

// property: value / key: value 

const dog = {
    firstName: 'Rufus',
    age: 4,
    hobbies: ['eating', 'running'],
    address: {
        street: 'Friedrichstr.',
        city: 'Berlin'
    }
}
console.log(dog)

// accessing a value
// dot notation
// console.log(dog.age, dog.firstName);
console.log(dog.hobbies[1])
console.log(dog.address.street)

// changing a property
dog.age = 5;
console.log(dog);

// adding a property
dog.height = '40 cm';
console.log(dog);

// accessing a property using a variable -> use the bracket notation
// const input = prompt('which property of the dog do you want to see?');
// console.log(dog[input]);



