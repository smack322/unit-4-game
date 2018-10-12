//initialize variables to store wins, losses, total score
var winsCounter = 0;
var lossesCounter = 0;
var totalScore = 0;

//initialize unique random numbers for images & random number to try and get to

var a = [1,2,3,4,5,6,7,8,9,10,11,12];
var n;
var r=[];
for (n=1; n<=4; ++n)
{
  var i = Math.floor((Math.random() * (12-n)) + 1);
  r.push(a[i]);
  a[i] = a[12-n];
}
var randomStartingNum = Math.floor((Math.random() * 120) + 19);
var diamondValue = r[0];
var emeraldValue = r[1]
var rubyValue = r[2];
var saphireValue = r[3];

console.log(randomStartingNum);
console.log(diamondValue);
console.log(emeraldValue);
console.log(rubyValue);
console.log(saphireValue);

// function to reset the game

function resetGame () {
    if (totalScore === randomStartingNum) {
       winsCounter++;
       totalScore = 0;
       randomStartingNum;
       diamondValue;
       emeraldValue;
       rubyValue;
       saphireValue;
       winsText; //needs to be used with the DOM   
    }
    else {
        lossesCounter++;
        totalScore = 0;
        randomStartingNum;
        diamondValue;
        emeraldValue;
        rubyValue;
        saphireValue;
        lossText; //needs to be used with the DOM
    }
}

// select and write javascript variables to html
var winsText = $("#winsLosses");
var newWinP = $("<p>" + winsText + "</p>");
winsText.text(winsCounter);
var lossesText = $("#winsLosses");
var newLossP = $("<p>" + lossText + "</p>");
lossesText.text(lossesCounter);

// initialize variables that store display message on the win or loss
var winsText = "You Won!!!";
var lossText = "You lost!!!";

// when the user clicks a gem the total score is adjusted based on the value of the diamond
$('#diamond').on("click", function () {
   alert("I am a diamond");
    totalScore += diamondValue;
});

$('#emerald').on("click", function () {
    alert("I am an emerald");
    totalScore += emeraldValue;
 });

 $('#ruby').on("click", function () {
    alert("I am a ruby");
    totalScore += rubyValue;
 });

 $('#saphire').on("click", function () {
    alert("I am a saphire");
    totalScore += saphireValue;
 });
