/* User will give a string. Return the count of vowels. 
-> aayush -> Output: 3 -> AAYuSH -> Output: 3
*/
var a=prompt("enter string");
a= a.toLowerCase();
var b=a.split("");
var count =0;
for( var i=0;i<b.length;i++)
{
  switch (b[i])
  {
    case "a":
       count++;
       break;
    case "e":
       count++;
       break;
    case "i":
       count++;
       break;
    case "o":
        count++;
        break;
    case "u":
        count++;
        break;
  }
}
console.log("Total number of vowels is"+ " " +count);