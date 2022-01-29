/* Take n inputs from the user. It has to be dynamic 
(multiple n inputs by user). i.e, I can enter 3 numbers
as well as 30 numbers. It should give me the maximum of all of them. We will be
using Array as the underlying data structure. */

var count=prompt("Enter the size of array:")
var arr=[];
 for(let i=0;i<count;i++)
    { 
       var elem=prompt("enter your element ")
	    arr.push(parseInt(elem))
	 if(i==0)
	   {
		var max=arr[0]
	   }
         else if(max<arr[i])
	   {
		max=arr[i]
	    }
		
     }
alert("The maximum number is "+max);