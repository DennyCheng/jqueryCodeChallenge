$(document).ready(function(){
  $("#spyButton").on("click",'.spyCreate',createSpy);
  $("#containerResult").on("click",'.change',changeColor);
  $("#containerResult").on("click",".delete",deletePerson);


});
var spyList = [];
var spyNumber;

function addSpyList(){
  spyList.push(0)
  spyNumber = (spyList.length)
  //spyNumber so they have unique ID
};

function createSpy(){
  console.log("iwork");
  addSpyList();
  $("#containerResult").append('<div class="person">'+"Spy number "+spyNumber+'<button class ="change">Change</button><button class = "delete">Delete</button></div>');
  var $spy = $("#containerResult").children().last();
  //create add to the dom
  //have a delete and change buttons
};
function changeColor(){
  console.log("you hit me")
  var currentDiv = $(this).parent();
  //current $(this) is the button, had to go up to parent class to access the div
  //tested over and over and couldn't figure
  //makes me so sad (was so close :(   ) sorry

  if(currentDiv.css("background-color","yellow")){
    //(currentDiv.css('background-color') == "yellow"){(doesn't work)
    console.log("first conditional")
      currentDiv.css("background-color","red")
  }
  else{
    console.log("im here")
    currentDiv.css("background-color","yellow")
    //some reason not reaching this secondary conditional :(
    //I believe it might have something to do with the style sheet's attribute background-color:yellow;
  }
};

function deletePerson(){
  console.log("deleting");
  $(this).parent().remove();
  //$("#containerResult").remove($(this).parent());

};
