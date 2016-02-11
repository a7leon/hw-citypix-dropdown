/* ***
 * Hi Alexandra!  I am including feedback about your code in inline Javascript comments.
 * 
 * Overall, great job!  Just please make sure to watch your code formatting a little - it's good, but 
 * make sure your indenting, spacing, etc is always consistent.  It makes the code a lot easier to read 
 * and, therefore troubleshoot.
 */


/* Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; use the array to add values to the <select> menu by using a for loop in JavaScript (don't update the HTML to do this!)
When the user changes the input of the drop-down, update the background image based on what they selected
-Use $.append() in your iteration on the drop-down menu
-Use the $.attr() function to update html classes
-Get the value of user input using $.val()
-Use the $.change event handler to capture user actions
-Use if/else if/else conditionals to control the flow of your application
-Display your pseudocode as Javascript comments */ 

$(document).ready(function(){

var cities = [ "NY", "SF", "LA", "ATX", "SYD"]
var option = '';

// Excellent job with the for loop.
for (var i=0;i<cities.length;i++){

   option += '<option value="'+ cities[i] + '">' + cities[i] + '</option>';
}
$('#city-type').append(option);

// Make sure to pass "event" into the anonymous function to ensure the event.preventDefault() works in all browsers.
$( "#city-type" ).change(function () {
	event.preventDefault();
	var str = '';
	$( "select option:selected" ).each(function() {
      /* Nice find with the += operator.  It absolutely works, but isn't really necessary since
       * your user can only select 1 value, so you could simply use the = operator for a simple assignment.
       */
      str +=$( this ).val();
      console.log(str);

      // Great if-then statement here!
      if  ( str == "NY") {
      	$('body').removeClass('bodyimage').addClass('nyc');
      } else { 
      	$('body').removeClass('nyc'); }

      if ( str == "SF") {
      	$('body').addClass('sf');
      } else {
      	$('body').removeClass('sf'); }

      if ( str == "LA") {
      	$('body').addClass('la');
	  } else {
	  	$('body').removeClass('la');}

	  if (str == "ATX") {
	  	$('body').addClass('austin');
	  } else {
	  	$('body').removeClass('austin');
	  }

	 if (str == "SYD") {
	 	$('body').addClass('sydney');
	 } else {
	 	$('body').removeClass('sydney');
	 }
      

  });
      });


  });



 

//next, i want to know what the user selects using val:

/*i tried using this, and wasn't sucessful. hmm. 
var selectCity = $("#city-type option:selected").val();
OR THIS:

//var selected = $('#city-type option:first').attr('selected', true)})
OR THIS:
var citySelect = $("#city-type option:selected").val();
console.log(citySelect);
console.log(selectCity);  so anyways, i did this instead: console.log(cities[0]); which just returns string

here is another way i am trying to write the function to bring back the value of user input:

$( ".city-type" )
  .change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str + = $( this ).val() + " ";

      not working.

       */

/* 

Regarding the above comment, we went over this in class yesterday and I know you wrote this before class 
happened, but just to review: The value of what the user selects in the drop down is the value of the 
select tag itself.  The values you set on the <option> tags in the HTML simply outline all of the possible
values the <select> could have.  So, you can grab the value of the user's choice by saying?

$("#city-type").val();

Or, if you want to store that value in a variable:

var selectedCity = $("#city-type").val();

Please let me know if you have questions about this!

*/












