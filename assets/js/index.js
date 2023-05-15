let homeScoreText = document.getElementById("homescore");
let guestScoreText = document.getElementById("guestscore");

let homeScore = 0;
let guestScore = 0;

homeScoreText.textContent = homeScore;
guestScoreText.textContent = guestScore;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let buttonChoice = event.target.className;
        switch(buttonChoice) {
            case "plusoneh":
                homeScore += 1;
                homeScoreText.textContent = homeScore;
              break;
            case "plustwoh":
                homeScore += 2;
                homeScoreText.textContent = homeScore;
              break;
            case "plusthreeh":
                homeScore += 3;
                homeScoreText.textContent = homeScore;
              break;
            case "plusoneg":
                guestScore += 1;
                guestScoreText.textContent = guestScore;
              break;
            case "plustwog":
                guestScore += 2;
                guestScoreText.textContent = guestScore;
              break;
            case "plusthreeg":
                guestScore += 3;
                guestScoreText.textContent = guestScore;
              break;
            default:
              // default
          }
        /* console.log("homeScore: ",homeScore, " guestScore: ", guestScore) */
        let homeBackground = document.querySelector("#home");
        let guestBackground = document.querySelector("#guest");

        if (homeScore === guestScore) {
            homeBackground.classList.add("blink");
            guestBackground.classList.add("blink");            
        } else if (guestScore > homeScore) {
            homeBackground.classList.remove("blink");
            guestBackground.classList.add("blink");
        } else if (homeScore > guestScore) {
            homeBackground.classList.add("blink");
            guestBackground.classList.remove("blink") = "";
        }
      });
});

const newGame = document.querySelector(".new");

newGame.addEventListener('click', () => {
    function reset(){
        homeScore = 0;
        guestScore = 0;
        homeScoreText.textContent = homeScore;
        guestScoreText.textContent = guestScore;
        document.querySelector("#home").style.backgroundColor = "";
        document.querySelector("#guest").style.backgroundColor = ""; 
    }
    reset();
})




