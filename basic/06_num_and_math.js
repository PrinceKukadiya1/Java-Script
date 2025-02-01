const Balance = new Number(100)

console.log(Balance);

console.log(Balance.toString());
console.log(Balance.toFixed(2));

const price = 1000000
console.log(price.toLocaleString())
console.log(price.toLocaleString('en-IN'))


// we cn conver negative value of integer by using abs value

console.log(Math.abs(-10))

const max = 20
const min = 10 

console.log(Math.floor(Math.random() * (max - min +1)) + min)