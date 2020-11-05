
var arr = [3,4,5,7,8,9,12,15];  
var arrayLength = arr.length;
var numberChoice = parseInt(prompt("Please enter a number to search for :"));
var addressNumber;

var addressFound = false;

for(var i = 0;i<arrayLength;i++)
{
	
	if(numberChoice == arr[i])
	{
		
		addressNumber = i;
		addressFound = true;
	}

	
}

if(addressFound == true)
{
	
	alert("The number "+numberChoice+ " is located at address "+addressNumber);
}
else
{
	alert("The number "+numberChoice+ " is not on the list");
}
