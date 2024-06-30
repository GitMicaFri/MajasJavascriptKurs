// logga alla list-items på 3 olika sätt:

// via tagname
let listTagElem = document.getElementsByTagName('li');
//console.log(listTagElem)

// via querySelectorAll

//let listQSAElem = document.querySelectorAll('li')
//console.log(listQSAElem)

// via getElementsBy Classname
let listClassNameElems = document.getElementsByClassName('list-item')
//console.log(listClassNameElems) // Här syns även varje elemet

// via QSA men med klassnamn
let listQSAElem = document.querySelectorAll('.list-item')
//console.log(listQSAElem)


// lägga in en ny h1 i vår html
// först måste vi targeta var vår nya h1 ska ligga:
let bodyElem = document.querySelector('body')

// sen skapa vår nya h1'a
let heading = document.createElement('h1')
heading.innerHTML = 'Hej'

// för att h1'an ska synas måste vi lägga in den i dokumentet:
bodyElem.appendChild(heading)

// om vi vill ha ett element överst:
// bodyElem.prepend(heading);

// ta fram klasslistan på element som har id 'html'
let idHTMLElem = document.getElementById('html');
console.log(idHTMLElem.classList);

//ändra id på elementet med id 'js
let idJSElem = document.getElementById('js')
idJSElem.setAttribute('id', 'Claes'); // först vilket attribut, sen nytt namn på det.

// ändra färg på element
document.getElementById('css').style.color = 'hotpink'

//skapa nytt element
let newElem = document.createElement('p')
newElem.innerText = 'New element'
//console.log(newElem)

// lägga det nya elementet på flera ställen:
// lägga in det i main:
//let mainEl = document.querySelector('main')
//mainEl.appendChild(newElem)
// lägga in dublett av det nya elementet i footer:
//let footerEl = document.querySelector('footer')
//footerEl.appendChild(newElem)

// lägga eventlyssnare på får knapp
// som llyssnar efter ett klick
//leta fram knappen:
let btnEl = document.querySelector('button');
// lägga på eventlyssnare på knappen:
btnEl.addEventListener('click', function() {
    console.log('Du klickade');
    // alert('HEJ') // Använd inte alert!
})

/// Funktioner

// function declaration
function addNums(num1, num2) {
    console.log(num1, num2)
}

addNums(2, 9)

// funktion med return
function subtraction(num1, num2) {
    let sum = num1 - num2

    return sum
}

let mySum = subtraction(3, 1)
console.log(mySum)

let mySum2 = subtraction(89, 54)
console.log(mySum2)

// vad skrivs ut nedan?
let myVariable = 'Hej'

function myFunction() {
    myVariable = 'Tja'
}
myFunction()

console.log(myVariable)

