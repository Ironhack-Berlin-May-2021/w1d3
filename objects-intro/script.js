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

console.clear();

// accessing a property using a variable -> use the bracket notation
// const input = prompt('which property of the dog do you want to see?');
// console.log(dog[input]);

// deleting a property in an object
console.log(dog);
delete dog.age;
console.log(dog);

// checking if a key is present in the object
// is there a key firstName in dog
if ('firstName' in dog) {
    console.log('the key is present')
}

if (dog.firstName !== undefined) {
    console.log('the key is present')
}

console.clear();

// iterating over objects

const person = {
    name: 'Alice',
    age: 35
}

// for in loop
for (let key in person) {
    // this is the key
    console.log(key);
    // this is the value
    console.log(person[key]);
}

// use Object.keys(<nameOfTheObject>) -> returns an array containing all the keys

const keys = Object.keys(person);
console.log(keys)
for (let key of keys) {
    console.log(person[key])
}

Object.keys(person).forEach(function (key) {
    console.log(key)
})

console.clear()
// use Object.values(<nameOfTheObject>) -> returns an array containing all the values

console.log(Object.values(person));

// Object.entries()
// giving you an array containing arrays for every key value pair
console.log(Object.entries(person));

console.clear();
const persons = [
    {
        name: 'mary',
        age: 23
    }, {
        name: 'bob',
        age: 21
    }, {
        name: 'alice',
        age: 25
    }
]

// iterate over persons and log every name

for (let person of persons) {
    console.log(person.name)
}