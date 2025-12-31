const data = window.location.search;

//console.log(myname);
const fname = document.getElementById('fname');
const timer = document.getElementById('timer');
const targetDate = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);
// const targetDate = new Date(Date.now() + 10 * 1000);
const wisher = document.getElementById('wisher');
let urlParam = new URLSearchParams(data);



let n = urlParam.get('n') || "Hrishikesh";
let d = urlParam.get('d') || "1.1";
let m = urlParam.get('m') || "Always";

console.log(typeof(urlParam.get('d')));
console.log(m);
console.log(n);



const input = d; // Example input
const [day, month] = input.split(".").map(Number); // Split and convert to numbers

// Create a new Date object with the current year
const year = new Date().getFullYear();
const date = new Date(year, month - 1, day); // JavaScript months are 0-based



// Ensure the preloader shows for 5 seconds before hiding
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
      // Fade out the preloader
      const preloader = document.getElementById("preloader");
      preloader.classList.add("fade-out");

      // Wait for the fade-out effect to complete before hiding
      setTimeout(() => {
          preloader.style.display = "none"; // Fully hide the preloader
          document.getElementById("content").style.display = "block"; // Show main content
      }, 1000); // Match this with the CSS transition duration
  }, 1000); // 000ms = 1 seconds
});









// Countdown function
function startCountdown(targetDate) {

  const now = Date.now();
const oneDay = 24 * 60 * 60 * 1000;

if (now >= targetDate && now < targetDate.getTime() + oneDay) {
  startGreetings();
  document.getElementById('countdown').style.display = 'none';
  document.getElementById('flscrn').style.display = 'none';
  return;
}


    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        clearInterval(interval);
        //console.log("Countdown finished!");
    document.getElementById('countdown').style.display = 'none';
        document.getElementById('flscrn').style.display = 'none';
        
        startGreetings();

        return;
      }
      else{
        document.getElementById('countdown').style.display = 'flex';
        document.getElementById('flscrn').style.display = 'flex';
        // Calculate time components
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        days = String(days).padStart(2,"0");
        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");

        
        // Display countdown
        // console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        timer.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
        }

    }, 1000); // Update every second
  }

  // Start the countdown
startCountdown(targetDate);



function startGreetings(){
  document.getElementById('greetings').style.display = 'flex';
  wisher.textContent = String("Seize the Year.");
  // Start displaying quotes
    setTimeout(() => {
      displayQuote(); // Show the first quote
      setInterval(displayQuote, 6000); // Change quote every 3 seconds
    }, 2000);
}



let BDquotes = [
  "🥳 Cheers to a brand new year and endless new beginnings! Happy New Year!",
  "💫 Another year, another chance to shine even brighter. Welcome the New Year!",
  "🌻 New year, new memories, and new reasons to smile.",
  "🎉 Here's to fresh goals, bold dreams, and beautiful moments ahead. Happy New Year!",
  "🪐 May the New Year bring cosmic joy, exciting adventures, and stellar success.",
  "💖 Wishing you a New Year as special and wonderful as the energy you bring to everyone.",
  "🥂 May the coming year be sweet, meaningful, and filled with unforgettable moments.",
  "✨ Keep shining, growing, and spreading your magic in the New Year."
];
BDquotes.push(`🥳 Starting the New Year by wishing you joy, success, and amazing moments ahead!`);

const quoteContainer = document.getElementById('slider');
    let currentIndex = 0;

    // Function to handle showing and animating quotes
    function displayQuote() {
      const allQuotes = document.querySelectorAll('.quote');

      // Hide all quotes
      allQuotes.forEach(quote => {
        quote.style.display = 'none'; // Hide the quote
        quote.style.animation = 'none'; // Reset the animation
      });

      // Show and animate the current quote
      const currentQuote = allQuotes[currentIndex];
      currentQuote.style.display = 'block';
      currentQuote.style.animation = 'opacity 6s infinite';

      // Move to the next quote
      currentIndex = (currentIndex + 1) % BDquotes.length;
    }

    // Add quotes to the DOM
    BDquotes.forEach(quote => {
      const quoteDiv = document.createElement('div');
      quoteDiv.classList.add('quote');
      quoteDiv.textContent = quote;
      quoteContainer.appendChild(quoteDiv);
    });









//fullscreen mode.


    const fullscreenButton = document.getElementById('fullscreenButton');

    fullscreenButton.addEventListener('click', () => {
      // Check if we're currently in fullscreen
      if (!document.fullscreenElement) {
        // Enter fullscreen
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
        fullscreenButton.textContent = "X-FullScrn"; // Update button text
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        fullscreenButton.textContent = "FullScreen"; // Update button text
      }
    });

    // Update button text when the user exits fullscreen with the Esc key
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        fullscreenButton.textContent = "Fullscreen";
      }
    });
