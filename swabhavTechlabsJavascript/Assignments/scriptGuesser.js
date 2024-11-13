const randomNumber = Math.floor(Math.random() * 20) + 1; 
let chances = 6;

function createButtons() {
    const buttonsContainer = document.getElementById("buttons-container");
    for (let i = 1; i <= 20; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.onclick = () => handleGuess(i, button);
        buttonsContainer.appendChild(button);
    }
}


function handleGuess(guess, button) {
    if (chances <= 0) return; 

    if (guess === randomNumber) {
        alert(`Congratulations!,you won correct number is ${randomNumber}!`);
        button.style.backgroundColor = "green";
        disableButtons();
    } 
 
    else if (guess > randomNumber) {
        chances--;
        document.getElementById("chances").textContent= chances;
        alert("too high! try again");
        button.classList.add("incorrect");
    } 
   
    else if (guess < randomNumber) {
        chances--;
        document.getElementById("chances").textContent = chances;
        alert("t0o low! try again");
        button.classList.add("incorrect");
    }

   
    if (chances === 0 && guess !== randomNumber) {
        alert(`game over!correct number was ${randomNumber}.`);
        disableButtons();
    }
}


function disableButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
}


createButtons();

