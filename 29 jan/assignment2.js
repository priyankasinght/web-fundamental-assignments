/* User enters a number, check and tell whether that number is a prime number or not.
(If user enters, abcd. You handle that situation).
*/

var n= prompt("Enter the number");
n=parseInt(n);
if (isNaN(n))
{
    alert("Please enter the valid number");
}       
    else{
        var count=0;
        for (var i=2;i<n;i++)
    {
     if (n%2==0)
        { 
     count=count+1;
     break;
        }
    }
       }
if (count==0)
{
  console.log(n +" "+" is a prime number");
}
else 
{
  console.log(n +" " +" is not a prime number");
}