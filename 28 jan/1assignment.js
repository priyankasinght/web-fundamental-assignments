/* Take input n from user and print all numbers in reverse order.
Ex. -> n = 7, Output -> 7, 6, 5, 4, 3, 2, 1, 0 */

var num=prompt("Enter a Number:");
  num=parseInt(num);
      var i=num;
	  while(i>=1)
	  {
		 console.log(i);
		  i--;
	  }