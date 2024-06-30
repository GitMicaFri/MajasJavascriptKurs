//var myVariable = 0;

// function declaration:
function myFunction() {
    myVariable = 23;
};
myFunction()
console.log(myVariable)

// function expression:
const sum = function() {
    let mySum = 2;
    return mySum;
};

console.log(sum()) 
// Glöm inte kalla på funktionen!


const h2 = document.querySelector('h2')
console.log(h2)
// mågna fördefinierade funktioner, bla insertAdjecentHTML

h2.insertAdjacentHTML('afterend', '<p>A paragraph</p>')

