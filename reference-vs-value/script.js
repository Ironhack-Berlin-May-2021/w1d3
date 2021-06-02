// Primitives are passed by value, objects are passed by reference
const beatles = ['John', 'Paul', 'George', 'Ringo'];

// prefix every string
function prefix(input) {
    // this is not enough to copy the array
    // const copy = input;
    const copy = input.slice();
    // const copy = [...input];
    for (let i = 0; i < copy.length; i++) {
        copy[i] = 'Mr ' + copy[i];
    }
    return copy
}

const prefixedBeatles = prefix(beatles);
console.log(prefixedBeatles);

console.log(beatles);

const user = 'bob';
let userCopy = user;
userCopy = 'alice';
console.log(userCopy)
console.log(user);

const arr = [2, 4];
// let arrCopy = arr;
// to copy an array you can use slice() to make create a so called 
// shallow copy
// let arrCopy = arr.slice();
// another way is to use the spread operator [...<arrayThatYouWantToCopy>]
let arrCopy = [...arr];
arrCopy.push(6);
console.log(arrCopy);
console.log(arr);

// for more complex structures we can use JSON stringify and JSON parse

const complexArr = [{ name: 'a' }, { name: 'b' }];
const complexCopy = JSON.parse(JSON.stringify(complexArr));
console.log(complexCopy);


// this is not enough to compare arrays
const arr1 = ['a'];
const arr2 = ['a'];
console.log(arr1 === arr2);
console.log([] === [])

console.clear();

// if we want to compare two arrays we turn them into strings
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));

// another use case for the spread operator
const numbers = [2, 3, 1];
console.log(Math.max(...numbers));