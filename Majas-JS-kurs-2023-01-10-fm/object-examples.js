// Deklarera ett objekt
let pokemon = {
    name: 'Bulbasaur',
    id: 1,
    type: 'grass'
}

// console.log(pokemons.name)
// console.log(pokemons['type'])
// console.log(pokemons) // ger oss hela objektet, i bokstavsordning

// delete pokemons.type // tar bort det vi punktar oss in i.
// console.log(pokemons) 
pokemon.generation = 1

// Loopa över alla egenskaper i objektet pokemons
// for-in-loop
for (x in pokemon) {
    //console.log(x)
}

// Lopa över värdet i objektet
for (x in pokemon) {
    console.log(pokemon[x])
}

// for-of-loop
// skapar ny array
let arr = [pokemon, pokemon, pokemon, pokemon]
console.log(arr)

// for obj in array
for (obj in arr) {
    console.log(obj)
}

// for obj of array
for (obj of arr) {
    console.log(obj)
}



//////////////////////////////////////////////////////
// Från förra lektionen:
// const sum = function() {
//     let mySum = 2
//     return mySum
// }

// console.log(sum())

// const h2 = document.getElementsByTagName('h2')
// console.log(h2)

// h2[0].insertAdjacentHTML('afterend', `
//     <img 
//         src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//         style="
//             width: 300px; 
//             height: auto;
//             border: 2px solid black;
//             border-radius: 10px;
//         " 
//     />
// `
// );
