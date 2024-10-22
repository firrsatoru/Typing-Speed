let originalText = '';
let score = 0;
let startTime;

// Load a random text when the page loads
window.onload = function() {
  loadText();
};

function loadText() {
  // Expanded text list
  const texts = [
                'The quick brown fox jumps over the lazy dog.',
                'Pack my box with five dozen liquor jugs.',
                'How razorback-jumping frogs can level six piqued gymnasts.',
                'Jinxed wizards pluck ivy from the big quilt.',
                'A quick movement of the enemy will jeopardize six gunboats.',
                'Bright vixens jump; dozy fowl quack.',
                'Sphinx of black quartz, judge my vow.',
                'The five boxing wizards jump quickly.',
                'We promptly judged antique ivory buckles for the next prize.',
                'Jovial king of the land is a peaceful man who loves oxen.',
                'Frogs leap over the lazy dog at dusk in a quaint village.',
                'When the quick brown fox jumps, lazy dogs are startled.',
                'Packs of five dozen liquor jugs swiftly unpacked by my box.',
                'A wizard’s job is to vex chumps quickly in fog.'
            ];

  originalText = texts[Math.floor(Math.random() * texts.length)];
  document.getElementById('text-to-type').innerText = originalText;
  document.getElementById('user-input').value = '';
  document.getElementById('message').innerText = '';
  startTime = new Date().getTime(); // Start timing
  highlightText(); // Highlight text on load
}

function highlightText() {
  const input = document.getElementById('user-input').value;
  const container = document.getElementById('text-to-type');
  let highlightedText = '';

  for (let i = 0; i < originalText.length; i++) {
    if (i < input.length) {
      if (input[i] === originalText[i]) {
        highlightedText += `<span class="highlight-correct">${originalText[i]}</span>`;
      } else {
        highlightedText += `<span class="highlight-incorrect">${originalText[i]}</span>`;
      }
    } else {
      highlightedText += originalText[i];
    }
  }

  container.innerHTML = highlightedText;
}

function checkText() {
  const userInput = document.getElementById('user-input').value.trim();
  const messageElement = document.getElementById('message');
  const elapsedTime = ((new Date().getTime() - startTime) / 1000).toFixed(2); // Time in seconds

  if (!userInput) {
    messageElement.innerText = 'Please enter some text.';
    messageElement.className = 'message error-message';
    return;
  }

  if (userInput === originalText) {
    score += 10;
    document.getElementById('score').innerText = score;
    messageElement.innerText = `Correct! Time: ${elapsedTime} seconds.`;
    messageElement.className = 'message success-message';
  } else {
    messageElement.innerText = `Incorrect. Try again! Time: ${elapsedTime} seconds.`;
    messageElement.className = 'message error-message';
  }

  // Load a new text after displaying the message
  setTimeout(loadText, 2000); // Wait 2 seconds before loading the new text
}
