// Set the target giveaway date (change this to your target date)
const targetDate = new Date("February 25, 2025 00:00:00").getTime();

// Update the countdown every second
const interval = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the HTML
  document.getElementById("days").children[0].textContent = days < 10 ? "0" + days : days;
  document.getElementById("hours").children[0].textContent = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").children[0].textContent = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").children[0].textContent = seconds < 10 ? "0" + seconds : seconds;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(interval);
    document.querySelector(".countdown").innerHTML = "<p>The giveaway has ended!</p>";
  }
}, 1000);