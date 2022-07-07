
var guess=1;
playername=localStorage.getItem("player_name");


 var y = Math.floor(Math.random()*10+1);

function playAgain()
{
    
    var y = Math.floor(Math.random()*10+1);

}
function submit()
{

var x=document.getElementById("guess_Field").value;
    if(x == y)
{
    alert("CONGRATULATIONS!!!!! " +playername+ " YOU GUESSED IT RIGHT IN" + guess+" GUESS");
    guess=1;
}
  
// function for number guessed by user     
else if (x > y)
{
guess++;
alert("OPPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OPPS SORRY!! TRY A GREATER NUMBER");   
    
}
}
