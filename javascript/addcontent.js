function ourgreeting (){
    //input
var hourNow = prompt("what is the time now?");
var greeting;
//process
if (hourNow > 18 && hourNow <= 24 ) {
    greeting = 'Good evening!';   
} else if (hourNow > 12 && hourNow <= 18 ) {
    greeting = 'Good afternoon!';
}else if (hourNow > 0 && hourNow <= 12 ) {
    greeting = 'Good morning!';
}else {
    greeting = 'Welcome!';
} return greeting;
}
var hello = ourgreeting();
document.write('<h3>' + hello + '</h3>');
