
// 1. Byt texten i h1-elementet i header till "Welcome to My Practice Site".
const newHeadertext = document.querySelector('main h2')
newHeadertext.innerText = 'Welcome to My Practice Site'

// 2. Ändra klassen på alla länkar i navigeringen till nav-link-active.
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(a => {
    a.classList.remove('nav-link')
    a.classList.add('nav-link-active')
})

// 3. Lyssna efter klick på knapparna "Buy" och logga produktnamnet till konsolen.
// forEach används när man ska iterera över varje element i en array eller NodeList. 
// Man får direkt tillgång till varje element och kan manipulera dem enklare.
const buyButtons = document.querySelectorAll('.buy-button') // hämta alla buy-knappar
buyButtons.forEach(button => { // loopar igenom varje knapp och lägger till händelsen
    button.addEventListener('click', (event) => {
        const productName = event.target.closest('.product').querySelector('h3')-innerText // navigerar till närmaste .product-element och hämtar texten från dess h3:a
        console.log(`Product name: ${productName}`)
    })
})

// 4. Lägg till en ny produkt i products-sektionen med JS.
const productSection = document.querySelector('.products') // Välj produktsektionen
const newProduct4 = document.createElement('article') // Skapa den nya produkten...
newProduct4.classList.add('product') // ...och lägg till den
newProduct4.innerHTML = `
    <h3>Product 4</h3>
    <p>Product 4 description.</p>
    <button class="buy-button">Buy</button>
`;
productSection.appendChild(newProduct4) // lägg till det nya elementet i products-sektionen

// 4b. Lägga till en produkt för att testa om funktionen nedan fungerar.
const newProduct5 = document.createElement('article')
newProduct5.classList.add('product')
newProduct5.innerHTML = `
    <h3>Product 5</h3>
    <p>Product 5 description.</p>
    <button class="buy-button">Buy</button>
`;
productSection.appendChild(newProduct5)

// Uppdatera texten på knapparna, även om fler produkter läggs till
function updateButtonText() {
    const  newTextButtons = document.querySelectorAll('button')
    if (newTextButtons.length > 0) {
        newTextButtons.forEach(button => {
            button.innerText = 'Add to chart'
        })
        console.log('New text added to buttons')
    } else {
        console.error('Buttons not found')
    }
}

// 5. Hitta och ändra texten i alla h2-element i main-sektionen till "New Section Title".
const newTitleAllH2inMainSection = document.querySelectorAll('main h2') // Hitta alla h2 i main.
newTitleAllH2inMainSection.forEach(h2 => { // Iterera över alla h2 i nodeListen i main.
    h2.innerText = 'New Section Title'
    // console.log(h2)
});

// 6. Ändra bakgrundsfärgen på footer-elementet till #333 och textfärgen till #fff.
const newFooterColors = document.querySelector('footer')
newFooterColors.style.backgroundColor = '#333'
newFooterColors.style.color = '#fff'

// 7. Lägg till tre nya länkar i navigeringen (nav) med texten "Blog", "Gallery", och "FAQ". Sätt deras href-attribut till "#".
const nav = document.querySelector('nav') // Välj nav-elementet

const blogLink = document.createElement('a') // Skapa nya länk-element
const galleryLink = document.createElement('a')
const faqLink = document.createElement('a')

blogLink.innerText = 'Blog' // Sätt textinnehåll
blogLink.href = '#' // Sätt href-attribut
galleryLink.innerText = 'Gallery'
galleryLink.href = '#'
faqLink.innerText = 'FAQ'
faqLink.href = '#'

blogLink.classList.add('nav-link-active') // Lägga till klassen på varje länk
galleryLink.classList.add('nav-link-active')
faqLink.classList.add('nav-link-active')

nav.appendChild(blogLink) // Lägg till nya länkar i nav-elementet
nav.appendChild(galleryLink)
nav.appendChild(faqLink)

// 8. Lägg till en mouseover-händelse på alla nav-länkar som loggar "Hovered over [link text]" till konsolen när användaren hovrar över en länk.
const  navLinksHover = document.querySelectorAll('nav a') // Väljer alla länkar
// Loopar igenom varje länk och lägger till en eventlistener
navLinksHover.forEach(link => {
    // Lägger till en mouseover på varje länk
    link.addEventListener('mouseover', (event)=> {
        // Logga texten på länken i konsolen
        console.log(`Hovered over ${event.target.innerText}`)
    })
}) 

// 9. Lägg till en array av bilder på produkterna.
const productImages = [
    'https://images.unsplash.com/photo-1615678815958-5910c6811c25?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1586289883499-f11d28aaf52f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1545529468-42764ef8c85f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1604398907654-ec2bf7108b4a?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1594142404563-64cccaf5a10f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fHw%3D'
]

const products = document.querySelectorAll('.product') // Hämtar alla produktelement.

products.forEach((product, index) => { // Loopa igenom varje produkt, lägg till bild.
    const img = document.createElement('img'); // Skapa nytt img-element.
    img.src = productImages[index]; // Sätt  src-attributet till motsv. bild-URL.
    img.alt = `Image of ${product.querySelector('h3').innerText}`; // Sätt alt-attribut.
    img.classList.add('product-image')
    product.insertBefore(img, product.querySelector('h3').nextSibling); // Lägg till bild-elem i produkt-elem.
})

console.log('Running javascript in terminal')