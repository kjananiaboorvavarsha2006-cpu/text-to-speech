const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");
const error = document.querySelector(".error-para");

convertBtn.addEventListener("click", function () {

    const enteredText = text.value.trim();

    // Browser support check
    if (!("speechSynthesis" in window)) {
        error.textContent = "Speech not supported in this browser";
        return;
    }

    // Empty text check
    if (enteredText === "") {
        error.textContent = "Nothing to Convert! Enter text first.";
        return;
    }

    error.textContent = "";

    // Stop any previous speech
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(enteredText);
    utter.lang = "en-US";
    utter.rate = 1;
    utter.pitch = 1;

    convertBtn.textContent = "Sound is Playing...";

    // Reset button when speech ends
    utter.onend = () => {
        convertBtn.textContent = "Play Converted Sound";
    };

    window.speechSynthesis.speak(utter);
});
