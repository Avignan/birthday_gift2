const body = document.getElementById('whole-page');
const cardContent = document.querySelector('.card-content');
const noBtn = document.getElementById('no-button');
const yesButton = document.querySelector('.yes_button');

const bodyWrapper = body.getBoundingClientRect();
const cardWrapper = cardContent.getBoundingClientRect();
const no_btn = noBtn.getBoundingClientRect();
let count = 5;


// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Use document.querySelector to select the yes_button
    yesButton.addEventListener('click', function(event) {
        const countdownFunction = setInterval(function() {
            yesButton.style.display='none';
            noBtn.style.display='none';
            cardContent.innerHTML = "Thank You!!.. Your gift coming up in " + count; // Action when the button is clicked
            count--;
            event.preventDefault(); // Prevent the default anchor action (if necessary)
            if (count < 0) {
                console.log(count)
                clearInterval(countdownFunction)
                document.getElementById("card-id").innerHTML = "Redirecting...";
                // Redirect to another HTML page after 1 second
                setTimeout(function() {
                    window.location.href = "gift.html"; // Change this to your target page
                }, 1000);
            }

            }, 1000);
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("no-button");

    function moveButton() {
        const x = Math.random() * (bodyWrapper.width - noBtn.offsetWidth);
        const y = Math.random() * (bodyWrapper.height - noBtn.offsetHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        console.log(x, y);
    }

    noBtn.addEventListener('mouseover', moveButton);
});
