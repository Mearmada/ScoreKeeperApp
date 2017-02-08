// VARIABLE DECLARATION

var p1Score = 0;
var p2Score = 0;
var p1ScoreLabel = document.getElementById("player1Score");
var p2ScoreLabel = document.getElementById("player2Score");
var maxScoreForm = document.getElementById("maxScoreForm");
var maxScoreUpdateButton = document.getElementById("maxScoreUpdateButton");
var maxScore = document.getElementById("maxScore");
var p1NameLabel = document.getElementById("player1NameLabel");
var p2NameLabel = document.getElementById("player2NameLabel");
var gameOver = false;
var winningScore = 5;

// INCREMENT/DECREMENT SECTION

var p1ButtonPlus = document.getElementById("p1ButtonPlus");

p1ButtonPlus.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		if(p1Score == winningScore) {
			p1ScoreLabel.classList.add("winner");
			p1NameLabel.textContent = "WINNER!";
			p1NameLabel.classList.remove("label-primary");
			p1NameLabel.classList.add("label-success");
			gameOver = true;
		}
	}
	p1ScoreLabel.textContent = p1Score;
});


var p2ButtonPlus = document.getElementById("p2ButtonPlus");

p2ButtonPlus.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		if(p2Score == winningScore) {
			p2ScoreLabel.classList.add("winner");
			p2NameLabel.textContent = "WINNER!";
			p2NameLabel.classList.remove("label-primary");
			p2NameLabel.classList.add("label-success");
			gameOver = true;
		}
	}
	p2ScoreLabel.textContent = p2Score;
});


var p1ButtonMinus = document.getElementById("p1ButtonMinus");

p1ButtonMinus.addEventListener("click", function() {
	gameOver = false;
	if(p1Score == winningScore) {
		p1ScoreLabel.classList.remove("winner");
		p1NameLabel.textContent = "Player 1";
		p1NameLabel.classList.remove("label-success");
		p1NameLabel.classList.add("label-primary");	
	}
	p1Score--;
	p1ScoreLabel.textContent = p1Score;
});


var p2ButtonMinus = document.getElementById("p2ButtonMinus");

p2ButtonMinus.addEventListener("click", function() {
	gameOver = false;
	if(p2Score == winningScore) {
		p2ScoreLabel.classList.remove("winner");
		p2NameLabel.textContent = "Player 2";
		p2NameLabel.classList.remove("label-success");
		p2NameLabel.classList.add("label-primary");	
	}
	p2Score--;
	p2ScoreLabel.textContent = p2Score;
});

// RESET BUTTON SECTION

var resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function() {
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1ScoreLabel.textContent = 0;
	p2ScoreLabel.textContent = 0;
	p1ScoreLabel.classList.remove("winner");
	p2ScoreLabel.classList.remove("winner");
	p1NameLabel.textContent = "Player 1";
	p2NameLabel.textContent = "Player 2";
	p1NameLabel.classList.add("label-primary");
	p1NameLabel.classList.remove("label-success");
	p2NameLabel.classList.add("label-primary");
	p2NameLabel.classList.remove("label-success");

});

// UPDATES WINNING SCORE TO MATCH INPUT NUMBER

maxScoreUpdateButton.addEventListener("click", function() {
	maxScore.textContent = maxScoreForm.value;
	winningScore = maxScoreForm.value;
	maxScoreUpdateButton.classList.remove("btn-success");
	maxScoreUpdateButton.classList.add("btn-default");

	if(p1Score < winningScore){
		p1NameLabel.classList.add("label-primary");
		p1NameLabel.classList.remove("label-success");
		p1NameLabel.textContent = "Player 1";
		p1ScoreLabel.classList.remove("winner");
		gameOver = false;
	}

	if(p2Score < winningScore){
		p2NameLabel.classList.add("label-primary");
		p2NameLabel.classList.remove("label-success");
		p2NameLabel.textContent = "Player 2";
		p2ScoreLabel.classList.remove("winner");
		gameOver = false;
	}

	// IF SCORES ARE HIGHER THAN NEW MAX SCORE, RESET GAME
	if(p1Score || p2Score > winningScore){
		p1Score = 0;
		p2Score = 0;
		gameOver = false;
		p1ScoreLabel.textContent = 0;
		p2ScoreLabel.textContent = 0;
		p1ScoreLabel.classList.remove("winner");
		p2ScoreLabel.classList.remove("winner");
		p1NameLabel.textContent = "Player 1";
		p2NameLabel.textContent = "Player 2";
		p1NameLabel.classList.add("label-primary");
		p1NameLabel.classList.remove("label-success");
		p2NameLabel.classList.add("label-primary");
		p2NameLabel.classList.remove("label-success");
	}
});

maxScoreForm.addEventListener("focus", function() {
	maxScoreUpdateButton.classList.remove("btn-default");
	maxScoreUpdateButton.classList.add("btn-success");
});
