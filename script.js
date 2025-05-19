function checkGuess() {
    const inputBox = document.getElementById("guess");
    const input_number = parseInt(inputBox.value, 10);
    const random_number = Math.floor(Math.random() * 10) + 1;
    const resultText = document.getElementById("result");

    if (isNaN(input_number) || input_number >= 11) {
        resultText.textContent = "❌ Please enter a valid number!";
        inputBox.value = ""; 

    } else if (input_number === random_number) {
        resultText.textContent = "🎉 You Win!";
        triggerBlusterEffect();
    } else {
        resultText.textContent = "❌ Incorrect guess, try again!";
        inputBox.value = ""; 
    }
}

