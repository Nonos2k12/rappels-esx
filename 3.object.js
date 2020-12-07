const character = {
    id: 0,
    firstName: "Jon",
    lastName: "Snow",
    lives: {
        city: "Winterfell"
    }
}

const character2 = {
    id: 1,
    firstName: "Eddard",
    lastName: "Stark",
    lives: {
        city: "Winterfell"
    },
    isAlive: false
}

//Je veux stocker dans une variable firstName
/*
const firstname = character.firstName;
const lastname = character.lastName;
const id = character.id;
const city = character.lives.city;
*/

//On peut faire la meme chose en une seule ligne avec la destructuration
const { id, firstName: prenom, lastName, lives: { city: ville}, isAlive = true} = character
console.log(id, prenom, lastName, ville, isAlive)

const { id: id2, firstName: firstname2, lastName: lastname2, lives: { city: city2}, isAlive: isAlive2 = true} = character2
console.log(id2, firstname2, lastname2, city2, isAlive2)


// Dynamic Key - Clé dynamique - Pratique pour mettre un nom de clé variable dans un objet

const dynamicKey = 'surname'
const tyrion ={
    id: 2,
    firstName: "Tyrion",
    lastName: "Lannister",
    [dynamicKey]: "himp",
    lives: {
        city: "Kings Landing",
    },
}

console.log(tyrion);

//Spread Operator - Ou comment copier un objet rapidement...
const gender = 'male';
const tyrion2 = {
    ...tyrion,
    lives: {
        city: "Meereen",
    },
    //gender: gender
    gender, // version raccourcie de la ligne au dessus
}
console.log(tyrion2);


// Function default parameter
const sayHello = (name = "My Lord") => {
    // Template literals - String interpolation
    console.log(`Hello ${name.toUpperCase()}`)
}
sayHello("Arnaud");
sayHello();


//Rest Operator
const add = (...params ) => {
    let total = 0
    for (const n of params) {
        total += n
    }
    console.log(total)
}

add(5, 6)
add(1, 4, 3)
add(1, 4, 3, 15, 8, 9)