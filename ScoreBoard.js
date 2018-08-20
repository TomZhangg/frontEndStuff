var p1Button = document.querySelector("#p1");
var p1Score = 0;
var p1TextScore = document.querySelector("#p1TextScore");



var p2Button = document.querySelector("#p2");
var p2Score = 0;
var p2TextScore = document.querySelector("#p2TextScore");

var limit = 5;

var resetButton = document.querySelector("#reset");

var setLimitButton = document.querySelector("#limit");
var limitText = document.querySelector("#limitText");


p1Button.addEventListener("click", function(){
	if(p1Score < limit){
		p1Score += 1;
		p1TextScore.textContent = p1Score;
	}


	if(p1Score === limit){
		p2Score = 99999;
		p1TextScore.classList.add("green");
	}


});



p2Button.addEventListener("click", function(){
	if(p2Score < limit){
		p2Score += 1;
		p2TextScore.textContent = p2Score;
	}

	if(p2Score === limit){
		p1Score = 99999;
		p2TextScore.classList.add("green");
	}

});





resetButton.addEventListener("click", resetAll);


setLimitButton.addEventListener("click", function(){
	resetAll();
	if(setLimitButton.value >= 1){
		p1TextScore.classList.remove("green");
		p2TextScore.classList.remove("green");
		limit = Number(setLimitButton.value);
		limitText.textContent = limit;
	}
});


function resetAll(){
	p1Score = 0;
	p2Score = 0;

	p1TextScore.classList.remove("green");
	p2TextScore.classList.remove("green");

	p1TextScore.textContent = p1Score;
	p2TextScore.textContent = p2Score;


}








