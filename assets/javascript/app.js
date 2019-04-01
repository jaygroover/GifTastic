$(document).ready(function(){

    //This is games intro...
    //hides game play, plays intro and shows game plays features.........
    $("#game").hide();
    setTimeout(function(){ $("body").css("background-image","url(assets/images/avengers.png)"); }, 27000);
    setTimeout(function(){ $("#game").show(); }, 30000);

var topics = ["Iron-man", "Captian America", "Thor", "Thanos", "Hulk", "The Avengers", "Age of Ultron", "The Infinity Stones", "Avenger Infinity War", "Avengers Endgame"];

console.log (topics);

function displayImg (){
$("#display-images").empty();
var input = $(this).attr("data-name");
var limit = 10;

var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + gif +"&api_key=qMx31QXL9WMDmHU2rsENRoaZvQ1GbXME&=10";






var gif = $(this).attr("data-name");



console.log(queryURL);

$.ajax({
  url: queryURL,
  method:"GET"
}).then(function(response){

  for(var j = 0; j < limit; j++){

    var displayDiv = $("<div>");
    displayDiv.addClass("holder");

    console.log(displayDiv);

    var image = $("<div>");
    image.attr("src", response.data[j].images.original_still.url);
    image.attr("data-still", response.data[j].images.original_still.url);
    image.attr("data-animate",response.data[j].images.original.url);
    image.attr("data-state","still");
    image.attr("class","gif");
    displayDiv.append(image);

    var rating = response.data[j].rating;
    console.log(response);
    var pRating = $("<p>").text("rating: " + rating);

    $("#display-images").append(displayDiv);



  }

  });

}

  function renderButtons (){

    $("#topics-button").empty();

    for (var i = 0; i < topics.length; i++){



      var newButton = $("<button>")
      newButton.attr("class", "btn btn-default");
      newButton.attr("id", "input")
      newButton.attr("data-name", topics[i]);
      newButton.text(topics[i]);
      $("#display-buttons").append(newButton);
    }
}


function imageChangeState(){

var state = $(this).attr("data-state");
var animateImage = $(this).attr("data-animate");
var stillImage = $(this).attr("data-still");


if(state === "still"){
$(this).attr("src", animateImage);
$(this).attr("data-state", "animate");
}

else if (state === "animate"){

$(this).attr("src", stillImage);
$(this).attr("data-state", "still");
}


}


$("#submit").on("click", function(){

var input = $("user - input").val().trim();
FormData.reset();
topics.push(input);


renderButtons();

return false;

})


renderButtons();

$(document).on("click", "#input", displayImg);
$(document).on("click", ".gif", imageChangeState);



  //$("button").on("click", function(){

		//$("#game").hide();
	
		
        
       
	//});
    
    //old code for a click option may still use.....
   // $( document ).keypress(function() {
    //$("#game").show();
      //});



      // Game key.......
     //var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + movie +"&api_key=qMx31QXL9WMDmHU2rsENRoaZvQ1GbXME&=10";
});
        










