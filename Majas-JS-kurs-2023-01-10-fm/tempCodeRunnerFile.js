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
