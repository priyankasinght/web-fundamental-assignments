/* Take three number from the user and alert minimum 
of those three. */

var n1= prompt("Enter first number");
var n2= prompt("Enter second number");
var n3= prompt("Enter third number");
if(n1<n2 && n1<n3)
{
alert(n1+" is smallest number");
}
else if(n2<n1 && n2<n3)
{
alert(n2+" is smallest number");
}
else
{
alert(n3+" is smallest number" );
}