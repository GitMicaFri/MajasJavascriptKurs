// vår första lista:
// två sätt att skapa listor på:

//const { lastDayOfWeekWithOptions } = require("date-fns/fp")

// 1
const pokemons = ['Bulbasaur', 'Ivysaur', 'Venusaur'];
console.log(pokemons)
// 2
let newArray = new Array('jox1', 'jox2', 'osv');
console.log(newArray)

let cars = ['volvo', 'saab', 'ford']

// lista med objekt:
let series = [
    {
        title: 'Breaking Bad',
        genre: 'Drama',
        episodes: 76
    },
    {
        title: 'Game of thrones',
        genre: 'Fantasy',
        episodes: 48
    },
    {
        title: 'Våra bästa år',
        genre: 'Drama',
        episodes: 287
    }
];

let newObj = {
    title: 'Glamour',
    genre: 'Drama',
    episodes: 8000
}

series.push(newObj);
console.log(series);
series.pop();
series.shift();
series.unshift(newObj);
console.log(series)


let nameList = ['Joakim', 'Cecilia', 'Fabiola'];
let index = nameList.indexOf('Cecilia')

// console.log('Fabiola:', index);
// Om något inte finns i en lista, så blir platsen -1.

if (index < 0) {
    // då finns inte elementet i listan
    console.log('Tyvärr fanns inte detta i listan') 
} else {
    console.log(nameList[index], ' finns i listan')
}

// for loop (inte for in eller for of)
 for (let i = 0; i < nameList.length; i++) {
    console.log(nameList[i]);
 }

// while loop (körs så länge en condition inte är uppfylld)
let i = 0;
while (i < nameList.length) {
    console.log(nameList[i])
    i++;
}

// samma fast baklänges
let j = 2;
while (j <= 0) {
    console.log(nameList[j])
    j--;
}

 // for of loop
 for (let name of nameList) {
    console.log(name)
 }



