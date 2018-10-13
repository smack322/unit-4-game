//initialize variables to store wins, losses
var winsCounter = 0;
var lossesCounter = 0;


//initialize unique random numbers for images & random number to try and get to

var a = [1,2,3,4,5,6,7,8,9,10,11,12];
var randomStartingNum;
var diamondValue;
var emeraldValue;
var rubyValue;
var saphireValue;
var totalScore;

// store unique random numbers in each gem (between 1 - 12) and a large random number between 19 - 120

function getRandomValues () {
    var r=[];
    for (var n=1; n<=4; ++n)
    {
      var i = Math.floor((Math.random() * (12-n)) + 1);
      r.push(a[i]);
      a[i] = a[12-n];
    }
     randomStartingNum = Math.floor((Math.random() * 120) + 19);
     $("#randomNumBox").text(randomStartingNum);
     diamondValue = r[0];
     emeraldValue = r[1]
     rubyValue = r[2];
     saphireValue = r[3];
     totalScore = 0;
     $("#elementTotalNum").text("Your total score is:");
     $("#elementNum").text(totalScore);
}


// function to reset the game

function checkWin () {
    if (totalScore === randomStartingNum) {
       winsCounter++;
       $("#gameWon").text("Wins: " + winsCounter);
       getRandomValues();     
    }
    else if (totalScore > randomStartingNum) {
        lossesCounter++;
        $("#gameLost").text("Losses: " + lossesCounter);
        getRandomValues();    
    }
}

// when the user clicks a gem the total score is adjusted based on the value of the diamond
$('#diamond').on("click", function () {
    totalScore += diamondValue;
    $("#elementNum").text(totalScore);
    checkWin();
    console.log(totalScore);
});

$('#emerald').on("click", function () {
    totalScore += emeraldValue;
    $("#elementNum").text(totalScore);
    checkWin();
 });

 $('#ruby').on("click", function () {
    totalScore += rubyValue;
    $("#elementNum").text(totalScore);
    checkWin();
 });

 $('#saphire').on("click", function () {
    totalScore += saphireValue;
    $("#elementNum").text(totalScore);
    checkWin();
 });

 getRandomValues();
