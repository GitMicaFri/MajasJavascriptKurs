// 1: Hälsningsfunktion
// Skriv en funktion som heter sayHello som tar ett namn som en parameter och loggar "Hello, [name]!" till konsolen.
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
// Testa funktionen
sayHello("Alice"); // Output: Hello, Alice!
sayHello("Bob");   // Output: Hello, Bob!

// 2: Addition
// Skriv en funktion som heter add som tar två nummer som parametrar och returnerar deras summa.
function add(a, b) {
    return a + b;
}
// Testa funktionen
const sum = add(5, 3);
console.log(sum); // Output: 8

// 3: Kontrollera Jämna Tal
// Skriv en funktion som heter isEven som tar ett nummer som en parameter och returnerar true om numret är jämnt, annars false.
function isEven(number) {
    return number % 2 === 0;
}
// Testa funktionen
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

// 4: Beräkna Area av en Rektangel
// Skriv en funktion som heter calculateArea som tar två nummer (bredd och höjd) som parametrar och returnerar arean av en rektangel.

function calculateArea(width, height) {
    return width * height;
}
// Testa funktionen
const area = calculateArea(5, 10);
console.log(area); // Output: 50

// 5: Omvandla Celsius till Fahrenheit
// Skriv en funktion som heter celsiusToFahrenheit som tar en temperatur i Celsius som en parameter och returnerar temperaturen i Fahrenheit. Formeln är: 
// 𝐹 = 𝐶 × 95 + 32
// F=C× 59+32
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// Testa funktionen
const fahrenheit = celsiusToFahrenheit(30);
console.log(fahrenheit); // Output: 86

// 6: Hitta Maxvärdet i en Array
// Skriv en funktion som heter findMax som tar en array av nummer som en parameter och returnerar det största numret i arrayen.
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
// Testa funktionen
const maxNumber = findMax([3, 1, 4, 1, 5, 9, 2, 6, 5]);
console.log(maxNumber); // Output: 9

// 7: Omvandla Text till Versaler
// Skriv en funktion som heter toUpperCase som tar en sträng som en parameter och returnerar strängen i versaler.
function toUpperCase(str) {
    return str.toUpperCase();
}

// Testa funktionen
const upperCaseStr = toUpperCase("hello world");
console.log(upperCaseStr); // Output: HELLO WORLD

// 8: Beräkna Summan av en Array
// Skriv en funktion som heter sumArray som tar en array av nummer som en parameter och returnerar summan av alla nummer i arrayen.


function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Testa funktionen
const totalSum = sumArray([1, 2, 3, 4, 5]);
console.log(totalSum); // Output: 15

// 9: Reversera en Sträng
// Skriv en funktion som heter reverseString som tar en sträng som en parameter och returnerar strängen omvänd.
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// Testa funktionen
const reversedStr = reverseString("hello");
console.log(reversedStr); // Output: olleh

// 10: Filtrera Udda Tal
// Skriv en funktion som heter filterOddNumbers som tar en array av nummer som en parameter och returnerar en ny array som bara innehåller de udda numren.
function filterOddNumbers(numbers) {
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}
// Testa funktionen
const oddNumbers = filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

////// Fler övningar ///////////////

// 11: Hälsningsfunktion
// Skriv en funktion som heter greetUser som tar ett namn som en parameter och loggar "Welcome, [name]!" till konsolen.
function greetUser(name) {
    console.log(`Welcome ${name}!`)
}
greetUser('Mickan')

// 12: Multiplikation
// Skriv en funktion som heter multiply som tar två nummer som parametrar och returnerar deras produkt.
function multiply(num1, num2) {
    let product = num1 * num2
    console.log(product)
}
multiply(5, 5)

// 13: Kontrollera Udda Tal
// Skriv en funktion som heter isOdd som tar ett nummer som en parameter och returnerar true om numret är udda, annars false.
function isOdd(number) {
    return number % 2 !== 0; // Kolla om numnret är udda
}
isOdd() // Kalla på funktionen
console.log(isOdd(9))

// 14: Beräkna Omkretsen av en Rektangel
// Skriv en funktion som heter calculatePerimeter som tar två nummer (bredd och höjd) som parametrar och returnerar omkretsen av en rektangel.
function calculatePerimeter(width, height) {
    return (width + height) * 2;
}
calculatePerimeter()
console.log(calculatePerimeter(2, 2))

// 15: Omvandla Fahrenheit till Celsius
// Skriv en funktion som heter fahrenheitToCelsius som tar en temperatur i Fahrenheit som en parameter och returnerar temperaturen i Celsius. Formeln är: 
// 𝐶 = (𝐹−32) × (5/9)
function fahrenheitToCelsius(fTemp) {
    return celsius = (fTemp - 32) * (5/9)
}
fahrenheitToCelsius()
console.log(fahrenheitToCelsius(10))

 

// 16: Hitta Minvärdet i en Array
// Skriv en funktion som heter findMin som tar en array av nummer som en parameter och returnerar det minsta numret i arrayen.
function findMin(numArray) {
    let min = numArray[0]  // Initiera minsta värdet med första elem.
    for (let i = 1; i < numArray.length; i++) { // Loop genom arryay fr. 2:a elementet
        if (numArray[i] < min) { // Jämför och uppdatera min om ett mindre värde hittas
            min = numArray[i]
        }
    }
    return min; // Returnera det minsta värdet
}
// Skapa en array av siffror
let arrayOfNumbers = [10, 20, 30, 40, 45, 100]
let minValue = findMin(arrayOfNumbers) // anropa funktionen
console.log(minValue)

// 17: Omvandla Text till Gemener
// Skriv en funktion som heter toUpperCase som tar en sträng av gemener som en parameter och returnerar strängen i versaler.
function toUpperCase(str) {
    return str.toUpperCase()
}
// Testa funktionen
let smallText = 'hello text!'
let result = toUpperCase(smallText)
console.log(result)

// 18: Beräkna Produkten av en Array
// Skriv en funktion som heter multiplyArray som tar en array av nummer som en parameter och returnerar produkten av alla nummer i arrayen.
function multiplyArray(array) {
    let result = 1 // Startvärde för multiplikation
    for (let i = 0; i < array.length; i++) {
        result *= array[i]
    }
    return result;
}
let numbersArray = [2, 4, 6, 8] // Skapa en array med nummer
let productOfArray = multiplyArray(numbersArray)
console.log(productOfArray)

// 19: Kontrollera Palindrom
// Skriv en funktion som heter isPalindrome som tar en sträng som en parameter och returnerar true om strängen är ett palindrom (läser samma framifrån och bakifrån), annars false.
function isPalindrome(str) {
    // Convertera till gemener göra strängen skiftesOkänslig
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
//isPalindrome('racecar')
console.log(isPalindrome('RaceCar'))

// 20: Filtrera Jämna Tal
// Skriv en funktion som heter filterEvenNumbers som tar en array av nummer som en parameter och returnerar en ny array som bara innehåller de jämna numren.

function filterEvenNumbers(numbersArray) {
    let even = []
    for(let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 == 0)
            even.push(numbersArray[i])
    }
    return even;
}
let numbers = [10, 23, 12, 20]
let evenNumbers = filterEvenNumbers(numbers) // Anropa funktionen
console.log(evenNumbers)

///////////////////////////////////////////////////////////
// Tips för att komma igång:
// Förstå problemet: Läs igenom uppgiften noggrant och förstå vad som efterfrågas.
// Planera din lösning: Tänk på stegen du behöver ta för att lösa problemet.
// Skriv koden: Implementera din lösning steg för steg.
// Testa din funktion: Kontrollera att den fungerar med olika indata.
// Debugga om nödvändigt: Om något inte fungerar, felsök och korrigera din kod.