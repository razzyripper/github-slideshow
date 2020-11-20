// základní proměnné + jde definovat na jeden řádek jako tady
var totalScore, roundScore, activePlayer, dice, playGame;

newStart();

function newStart(){
  totalScore = [0,0];
  roundScore = 0;
  activePlayer = 0;
  playGame = true;

  //vynulování kostky
  document.getElementById("totalScorePlayer-0").textContent = 0;
  document.getElementById("totalScorePlayer-1").textContent = 0;
  document.getElementById("currentScore0").textContent = 0;
  document.getElementById("currentScore1").textContent = 0;

  // schová kostku
  document.querySelector(".diceImage").style.display = "none";
// zobrazí nápis textu na původní hodnotu
    document.querySelector("#name-0").textContent = "Score 1. hráče ";
    document.querySelector("#name-1").textContent = "Score 2. hráče ";

    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");


}
// reaguje na stisknutí na tlačítko nová hra - btn3
document.querySelector("#btn3").addEventListener("click", newStart);


// měním obrázek - kostka podle funkce random
document.getElementById("btn1").addEventListener("click",
function(){
  if(playGame){
    //1. generujeme náhodné čísla 1- 6
      var dice = Math.ceil(Math.random()*6);

    // 2. zobrazuje správnou kostku
    var diceElement = document.querySelector(".diceImage");
    diceElement.style.display = "block"
    console.log(diceElement.src = "jpg/" + dice + ".jpg" );
    // 3, sčítání a načítaní score z kostky + podmínka když se nerovna dice 1 tak hrajde další hráč
    if(dice !== 1){roundScore = roundScore + dice;
    document.getElementById("currentScore" + activePlayer).textContent = roundScore;
  } else {
    //bude další hráč
    nextPlayer();
  }

  }
});

function nextPlayer(){
  if(activePlayer === 0){
    activePlayer = 1;
  } else {
    activePlayer = 0;

  }
  roundScore = 0;
  // vynuluje se score
      document.getElementById("currentScore0").textContent = 0;
      document.getElementById("currentScore1").textContent = 0;
// opět schová kostku
      document.querySelector(".diceImage").style.display = "none";
      //  tato funkce je třeba dořešit měla by přepínat mezi hráči total score

          document.querySelector(".totalScore0").classList.toggle("active");
          document.querySelector(".totalScore1").classList.toggle("active");

}
// podržet skore
document.getElementById("btn2").addEventListener("click", function(){
  if(playGame){ // pokud někdo vyhrál tak tak hodnota není true a tlačítko nebude fungovat
    //celkové skore se vyplní současným skore při kliknutí na tlačítko
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
    //
    document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];
// pokud hráč má total skore 50 tak je vítěz 
    if(totalScore[activePlayer] >= 50){
      document.querySelector("#name-" + activePlayer).textContent = "!!!VÍTĚŽ!!!";
      playGame = false;
    } else {
      nextPlayer();
      }
  }

});
