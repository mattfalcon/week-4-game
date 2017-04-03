
//Score to Match
//variables ScoreToMatch, Your Score, 
//Assign Random Numbers to Image
//Click Image assigns value to your score
//GLOBAL VARIABLES ==========

//Score
var score;
//Number to get
var randomNumber;

var win = 0;
var loss = 0;

// Create Random Number 
//Place random number value in panel 
//document.getElementById("randomNumber").innerHTML = randomNumber;

//Create image numbers at random


//FUNCTIONS =================================================

	function reset()
	{
		//reset 
		score = 0;
		randomNumber = Math.floor(Math.random() * (120 - 19) + 1);
		emeraldNumber = Math.floor(Math.random() * (12 - 1)+ 1);
		topazNumber = Math.floor(Math.random() * (12 - 1) + 1);
		rubyNumber = Math.floor(Math.random() * (12 - 1) + 1);
		sapphireNumber = Math.floor(Math.random() * (12 - 1) + 1);

		//HTML
		$('#randomNumber').html(randomNumber);
		$('.score').html(score);
		start();

	}

	function start()
	{
		//reset
		score = 0;
		randomNumber = Math.floor(Math.random() * (120 - 19) + 1);
		console.log(randomNumber);
		emeraldNumber = Math.floor(Math.random() * (12 - 1) + 1);
		console.log(emeraldNumber);
		topazNumber = Math.floor(Math.random() * (12 - 1) + 1);
		console.log(topazNumber);
		rubyNumber = Math.floor(Math.random() * (12 - 1) + 1);
		console.log(rubyNumber);
		sapphireNumber = Math.floor(Math.random() * (12 - 1) + 1);
		console.log(sapphireNumber);

		//HTML

		$('#randomNumber').html(randomNumber);
		$('#score').html(score);

       //<div type="button" class="box b1 emerald" value ='1'>
       //<a href="#" class="thumbnail">
       //<img src="./assets/images/emerald.png" alt="emerald" id="emerald">
       // </a>
       // </div>


		//Number for images
		$('.emerald').attr("value", emeraldNumber);
		var test = $('.emerald').attr("value");

		$('.topaz').attr('value', topazNumber);
		var test = $('.topaz').attr('value');

		$('.ruby').attr('value', rubyNumber);
		var test = $('ruby').attr('value');

		$('.sapphire').attr('value', sapphireNumber);
		var test = $('sapphire').attr('value');

		//when clicked saves to final score
		$('.box').off().on('click', function()
		{
			var test1 = $(this).attr('value');
			//adds to score  
			score = parseInt(score) + parseInt(test1);
			$('#score').html(score);
		if (score === randomNumber)
		{
			alert('you won');
			win++;
			$('#win').html(win);
			reset();
		}
		if (score > randomNumber)
		{
			alert ('you lose');
			loss++;
			$('#loss').html(loss);
			reset();
		}
		});


//		else(score > randomNumber)
//		{ 	alert('you loss')
//			loss++;
//			$('#loss').html(loss);
//			reset();
//			}

     };



//Assign emeraldNumber to total score on click
//$(".thumbnail").on("click", function() {
//    score + emeraldNumber;
//    $("#score").html(emeraldNumber += score);
//});

//

//----------------
start();

