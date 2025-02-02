let score1 = 100
const hero1 = ["spiderman" , "thor"]

const hero2 = ["flash" , "batman"]

// hero1.push(hero2)
// console.log(hero1)

const hero3 = hero1.concat(hero2)
console.log(hero3);

// using spread method
const hero4 =[...hero1 , ...hero2]
console.log(hero4)

let score = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score,score2,score3,score4))
