/* Print the first n numbers of a Fibonacci series.
EX. -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 */

var n1=0;
var n2=1;
 console.log(n1);
 console.log(n2);
var count=10;
var n3;
    for(var i =2;i<=count;i++)
     {
	n3=n1+n2;
	  console.log(n3);
	     n1=n2;
	     n2=n3;
     }
	