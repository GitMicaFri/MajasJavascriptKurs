// målet: vid knapptryck:
// ska bilden bytas ut.

// img1 kommer alltid att vara den bild som syns från början:
const img1 = document.querySelector('img').getAttribute('src')
// spara url'en i en variabel:
 const img2 = "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGV8ZW58MHx8MHx8fDA%3D"
 const img3 = "https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbnR8ZW58MHx8MHx8fDA%3D"

 // vilket element targetar vi?
 let btn = document.querySelector('button') // välja knappen från HTML-dokumentet
 // Om bilden skulle användas på andra ställen i koden ska den ligga utanför funktionen,
 // men när den bara används här så är det bättre att den ligger innuti funktionen:
 //let img = document.querySelector('img') // välja bilden från HTML-dokumentet
 //btn.addEventListener('click', function() { // lägga på en lyssnare
   // let img = document.querySelector('img') // välja bilden från HTML-dokumentet
    //img.setAttribute('src', newImgUrl) // targeta bilden och lägga på ett nytt attribut (ny bild) via ny source
    // går även att skriva:
    // img.src = newImgUrl;
 //});

 btn.addEventListener('click', function() {
    //console.log(img1)
    let imgEl = document.querySelector('img')
    let currentImgSrc = imgEl.getAttribute('src')
    
    if (currentImgSrc == img1) {
        // om nuvarande bild är första bilden
        // vill vi byta till andra bilden
        imgEl.setAttribute('src', img2)
    } else if (currentImgSrc == img2) {
        imgEl.setAttribute('src', img3)
    } else {
        imgEl.setAttribute('src', img1)
    }
 })

 let sendButton = document.getElementById('btn')
 sendButton.addEventListener('click', function() {
    
    let inputEl = document.getElementById('text-input')
    //console.log(inputEl.value) // ger oss värdet i inputfältet
 })

 // hur funktionen körs när man klickar på enter, istället för på en knapp
 // OBS att tab är förinställd på att gå från en input till nästa
 // enter är inte förinställd, så den kodar man själv

 // vid enter-klick ska vardet loggas
 let inputEl = document.getElementById('text-input')
 //lägg på en eventlyssnare. Ta med eventet in i funktionen:
 inputEl.addEventListener('keypress', function(event) {
    //console.log(event)
    if (event.key === 'Enter') {
        console.log(inputEl.value)
    }
 })

// Skillnad vanlig funktion och arrowfunction:

// kallar på funktionen INNAN den kommer:
console.log(addStuff(1, 1)); // så får man 2 i konsolen
// kallar på en arrowfunction INNAN:
// console.log(addStuff2(1, 1)); // error: "cannot access...before initialization"
// Detta för att nyckelordet "function" läses av först
 
 function addStuff(num1, num2) {
    let sum = num1 + num2
    return sum
 };

 // Här tänker JS att det är en funktion sparad i en variabel-låda.
 const addStuff2 = (num1, num2) => {
return sum;
 };

// Dock inte skillnad om funktionen är namnlös



