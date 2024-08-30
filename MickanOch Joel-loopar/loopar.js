const myArray = ['Joel', 'Mickan', 'Amina', 'Pia', 'Marcus', 'Pelle', 'Amanda', 'Julia'];

// // for loop
// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }
let letterL = []
 for(let i = 0; i < myArray.length; i++) {
    if (myArray[i].includes('l')) {
       //console.log(myArray[i]) // loggar ut alla som har l i namnet
       letterL.push(myArray[i])
    }
     //console.log(myArray[i])
 }
    console.log(letterL)
 

 // filter syntax
 //const array = ['joel', 'amanda', 'tim', 'patrik']
//const result = array.filter((name) => name.length > 3) // callback
//const result = array.filter(name => name.length >3) // kan se ut ävsn så här
//console.log(result)

const result = myArray.filter((element) => element.length > 4)
console.log(result)


// Funktioner
const newArray = ['Adam', 'Bertil', 'Caesar', 'David', 'Erik', 'Fredrik', 'Ginna', 'Hanna', 'Inga']

const findStuff = (stuff) => {
    for (let i = 0; i < stuff.length; i++) {
        if (stuff[i].includes('e')) {
            console.log(stuff[i]) // skriver ut varje separat element som uppfyller ovan condition
        }
    }
}

findStuff(newArray)