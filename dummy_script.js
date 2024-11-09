// Select elements
const ageForm = document.getElementById('age-form');
const ageInput = document.getElementById('age');
const blowOut = document.getElementById('blowOutButton');
const createImage = document.getElementById('cat-image');
const cakeContainer = document.getElementById('cake-container');
const candlesContainer = document.getElementById('candles');
const birthdayMessage = document.getElementById('happyBirthdayMessage');
const confetti = document.getElementById('confetti')

const jsConfetti = new JSConfetti()

// Event listener for clicking the "Create" image
createImage.addEventListener('click', function() {
    const age = parseInt(document.getElementById('age').value, 10);
    if (isNaN(age) || age < 23 || age > 31) {
        if (age < 25){
            alert("We all want to be younger, don't we? But let's be real now")
        }
        else {
        alert("haha! very funny. Now enter your REAL age.");
        }
        ageInput.value="";
        return;
    }

    // Hide the form and show the cake
    ageForm.style.display = 'none';
    birthdayMessage.style.display = 'none';
    blowOut.style.display = 'block';
    cakeContainer.style.display = 'block';


    generateCandles(age);
});

// Generate unique random positions
// const positions = new Set();

// while (positions.size < age) {
//     // Random position between 0 and 200 (cake width)
//     const randomPosition = Math.floor(Math.random() * 190) + 5; // +5 to keep some margin from the edges
//     positions.add(randomPosition);
// }

// Create candles at the generated positions
// positions.forEach(position => {
// const candle = document.createElement('div');
// candle.className = 'candles';
// candle.style.left = `${position}px`; // Set the random position

// // Create and position candle flame
// const flame = document.createElement('div');
// flame.className = 'flame';

// candle.appendChild(flame);
// candlesContainer.appendChild(candle);
// });

// Function to generate candles based on age
function generateCandles(age) {
    // Clear any existing candles
    candlesContainer.innerHTML = '';
    
    for (let i = 0; i < age; i++) {
        const candle = document.createElement('div');
        candle.classList.add('candle');
        const position = (i * (345 / age)) + 5; // 400 is cake width
        candle.style.left = `${position}px`;

        // Create and position candle flame
        const flame = document.createElement('div');
        flame.className = 'flame';

        candle.appendChild(flame);
        candlesContainer.appendChild(candle);
        // candle.addEventListener('click', () => candle.classList.add('out')); // Click to blow out
        // candlesContainer.appendChild(candle);
    }
}

// Add event listener for blowing out candles
blowOut.addEventListener('click', blowOutCandles);

// Function to blow out candles
function blowOutCandles() {
    const candles = document.querySelectorAll('.candle');
    candles.forEach(candle => {
        candle.classList.add('blow-out'); // Add blow-out class to trigger animation
    });
    jsConfetti.addConfetti()

    // Delay the appearance of the "Happy Birthday" message
    setTimeout(() => {
        const birthdayMessage = document.getElementById('happyBirthdayMessage');
        birthdayMessage.style.display = 'block'; // Show the message
    }, 1000); // Adjust timing if needed

    // setTimeout(() => {
    // birthdayMessage.innerHTML="Now, moving on..."

    // }, 2000);

    // Redirect after the animation finishes (1 second in this case)
    setTimeout(() => {
        
        window.location.href = 'Page2.html'; // Redirect to another HTML file
    }, 6000);
}