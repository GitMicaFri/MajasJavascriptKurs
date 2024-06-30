https://github.com/FE22-Javascript/vanilla-bootcamp
variables-exercises
variabler, datatyper och villkor

Datatyper / variabler / villkor
1 Vilka datatyper finns det i JS? Svara i form av en array.

let datatypes = []
2 Är följande if sats true eller false?

let a = 1;
let b = '1';
if(a == b) // true or false
3 Vad är den tekniska skillnaden ( förutom var, let ) på dessa två deklarationer?

let name = 'Greta Thunberg';
var name = 'Greta Thunberg';
4. Hur tar man reda på vad en variabel har för datatyp?

5 Vilken av följande tecken visar ett kodblock?

[] // A 
() // B
{} // C
6 Gör följande:

6.1 Skapa variabeln my_num och tilldela den ett nummer.

6.2 Skapa variabeln my_bool och tilldela den en boolean.

6.3 Skapa variabeln my_str och tilldela den en sträng.

7 Vad kommer följande villkor att skriva ut?

if ("cat" === "dog") {

  var outcome = "if block";

} else {

  var outcome = "else block";

}
8 Vad kommer följande villkor att skriva ut?

if (10 > 5) {

  var outcome = "if block";

}
9 Vad kommer följande switch-sats skriva ut?

var grade='B';

var result;

switch(grade)

{
  case 'A':
          {
            result+="10";
            break;
          }

  case 'B':
          {
          result+=" 9";
          break;
          }

  case 'C':
          {
            result+=" 8";
            break;
          }
          
  default:
  result+=" 0";
}

document.write(result);