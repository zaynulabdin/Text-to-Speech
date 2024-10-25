function speakSentences() {
  // Get the sentences
  const sentence1 = document.getElementById("sentence1").innerText;
  const sentence2 = document.getElementById("sentence2").innerText;

  // Combine the sentences
  const combinedText = sentence1 + " " + sentence2;

  // Initialize speech synthesis
  const speech = new SpeechSynthesisUtterance(combinedText);

  // Set the voice parameters
  speech.lang = "en-US"; // Set language
  speech.rate = 0.8; // Set speed
  speech.pitch = 0; // Set pitch

  // Speak the text
  window.speechSynthesis.speak(speech);
}