const newArray = ['Adam', 'Bertil', 'Caesar', 'David', 'Erik', 'Fredrik', 'Ginna', 'Hanna', 'Inga']

const findStuff = (stuff) => {
    for (let i = 0; i < stuff.length; i++) {
        if (stuff[i].includes('e')) {
            console.log(stuff[i]) // skriver ut varje separat element som uppfyller ovan condition
        }
    }
}

findStuff(newArray)