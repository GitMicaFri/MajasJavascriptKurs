
// // 1 Vilka datatyper finns det i JS? Svara i form av en array.
// let datatypes = ['array', 'string', 'boolean', 'number', 'object', null, 'undefined']
// // null saknar värde, undefined har ev värde, men det är trasigt.

// //2 Är följande if sats true eller false?
// let a = 1;
// let b = '1';
// if(a == b) { // true or false
//     //console.log('a == b')
//     var c = 'coffee'
//     let d = 'dates' // byter man ut let mot var, så kommer man åt den även utanför scopet.
//     console.log(c, d)
//     // } else if (a !== b) {
//     //     console.log('a inte lika med b')
//     // } else {
//      }
// // svar: true

// //3 Vad är den tekniska skillnaden ( förutom var, let ) på dessa två deklarationer?
// let name = 'Greta Thunberg'; // går inte att komma åt utanför lokalt scope (mellan sina måsvingar)
// var name = 'Greta Thunberg'; // går att komma åt var som helst, även utanför scopet.
// // const är också global
// // barn-scope kommer åt sina föräldrars variabler!


// //4. Hur tar man reda på vad en variabel har för datatyp?

// //5 Vilken av följande tecken visar ett kodblock?
// [] // A 
// () // B
// {} // C

// // 6 Gör följande:

// // 6.1 Skapa variabeln my_num och tilldela den ett nummer.

// // 6.2 Skapa variabeln my_bool och tilldela den en boolean.

// // // 6.3 Skapa variabeln my_str och tilldela den en sträng.

// // 7 Vad kommer följande villkor att skriva ut?

// if ("cat" === "dog") {

//   var outcome = "if block";

// } else {

//   var outcome = "else block";

// }

// // 8 Vad kommer följande villkor att skriva ut?

// if (10 > 5) {

//   var outcome = "if block";

// }

// // 9 Vad kommer följande switch-sats skriva ut?

// var grade='B';

// var result;

// switch(grade)

// {
//   case 'A':
//           {
//             result+="10";
//             break;
//           }

//   case 'B':
//           {
//           result+=" 9";
//           break;
//           }

//   case 'C':
//           {
//             result+=" 8";
//             break;
//           }
          
//   default:
//   result+=" 0";
// }

// document.write(result);

// // exempel
// let myNum = 3;
// switch(myNum) {
//     case 0:
//         console.log('nej');
//         break;
//     case 1:
//         console.log('nej');
//         break;
//     case 2:
//         console.log('nej');
//         break;
//     case 3:
//         console.log('hej');
//         break;
//     default:
//         console.log('no match')
//  }