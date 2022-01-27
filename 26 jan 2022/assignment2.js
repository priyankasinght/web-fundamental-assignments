/* Take a character from the user and show whether 
it is avowel or cosonant. */

var Char = prompt("Enter a character:");
if (Char == 'a' || Char== 'A' || Char== 'e' || Char== 'E' || Char== 'i' || Char== 'I' || Char== 'o' || Char== 'O' || Char== 'u' || Char== 'U') 
{
console.log("It is a vowel");
} 
else if ((Char >= 'a' && Char<= 'z') || (Char>= 'A' && Char<= 'Z')) 
{
console.log("Its a consonant");
} else 
{
console.log("Not a character");
}
