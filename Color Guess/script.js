const colors = ["cyan", "chartreuse", "lavender", "green", "purple", "orange"];
// let pickedColor = colors[Math.floor(Math.random() * colors.length)];
let targetColor = "";
let score = 0;

// 
function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorBox").style.backgroundColor = targetColor;
    document.getElementById("gameStatus").textContent = "";
    
    const colorOptionsContainer = document.querySelector(".colorOptions");
    colorOptionsContainer.innerHTML = "";
    
    let shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    shuffledColors.forEach(color => {
        let button = document.createElement("button");
        button.className = "colorOption";
        button.style.backgroundColor = color;
        button.setAttribute("data-testid", "colorOption");
        button.onclick = () => checkGuess(color);
        colorOptionsContainer.appendChild(button);
    });
}

function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        document.getElementById("gameStatus").textContent = "Correct!";
        score++;
        document.getElementById("score").textContent = "Score: " + score;
        setTimeout(startGame, 1000); // Automatically start a new round after 1 second
    } else {
        document.getElementById("gameStatus").textContent = "Wrong, try again!";
    }
}


document.getElementById("newGameButton").addEventListener("click", startGame);

startGame();
