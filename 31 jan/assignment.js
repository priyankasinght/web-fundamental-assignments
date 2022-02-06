/* (filtering): Use the object created in the class. Take a number from the user input
and return a list. (Do this in console.log) of all the students who have scrored equal to 
or more than those marks.
*/

var obj = {
    "first_name" : "Priyanka",
    "middle_name" : "Niranjan",
    "last_name" : "Singh",
    "email" : "priyanka9097g@gmail.com",
    "class" : "B.E",
     "students" : [ 
	{
	  "name" : "Madhuri",
	  "marks" : 40
	},
	{
	  "name" : "Priyanka",
	  "marks" : 50
	},
	{
	  "name" : "Aarti",
	  "marks" : 35
	},
	{
	  "name" : "Rakhi",
	  "marks" : 36
	},
	{
	  "name" : "Pradnya",
	  "marks" : 45
	},
	{
	  "name" : "Poonam",
	  "marks" : 30
	},
        {
	  "name" : "Akshada",
	  "marks" : 20
	},
	{
	  "name" : "Renuka",
	  "marks" : 21
	},
	{
	  "name" : "Rupali",
	  "marks" : 0
	},
	{
	  "name" : "Jay",
	  "marks" : 29
	}        
	
        ]
}

var num = prompt("Enter the marks to check the list of student who scored equal to or above the given score.")
var num = parseInt(num)
var len = obj.students.length

for(var i = 0 ; i<len ; i++){
     var n = obj.students[i]
     var name = n.name
     var marks = n.marks
     if(num<=marks){
         console.log("Name  : ",name,"\n")
         console.log("Marks : ",marks,"\n")
     }
}