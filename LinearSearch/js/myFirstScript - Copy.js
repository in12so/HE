 var surname; // here we are declaring two variables. 
 var forename;
 
 surname = "Steven"; // now we are storing a string data type
 forename = "O'Connor";

 alert( "Welcome "+surname+ " " +forename); // an example of string concatenation in an alert

 surname = "Stevo"; // overriding a variable

 alert(surname);

 var age = 21; // number or integer datatype
 var mood; // undefined 
 var height = 74.4; // measured in inches, this is in decimal format
 var minHeightRequired = 70;

 alert(" height = minHeightRequired is "+(height==minHeightRequired));
 /* 
 height == minHeightRequired is an example of a Boolean which gives 
 us either a true or false result 
*/

var favouriteMusic = ['Gunship','Pantera','ACDC','Deadmau5','Camelphat','Mark Knight','Cypress Hill',
'Tupac','NIN','Iron Maiden','Machinehead','Stevie Nicks']; 
/* an example of an array data type which can contain
multiple items */

alert(favouriteMusic);

 var name = prompt("Please enter your first name");
 /* putting it to use, we can store some user input data into a variable
 in order to call that same data again to alert to screen. */
 alert("Welcome "+name+ " ! Are you getting the hang of string concatenation?");

//alert("Hello");

// document.getElementById('message').innerHTML = "Hello " +name+ " and welcome!";