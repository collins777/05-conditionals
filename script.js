// Select the form and suggestion section
const weatherForm = document.getElementById("weatherForm");
const suggestionSection = document.getElementById("suggestion");

// Add an event listener to handle form submission
weatherForm.addEventListener("submit", function (event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Get the selected weather value
  const weather = document.getElementById("weather").value;
  const temperature = document.getElementById("temperature").value;

  // Initialize a message variable
  let message = "";

  // Use conditionals to determine the suggestion based on the weather
  if (weather === "sunny") {
    message = `It's sunny! 🌞 Don't forget your sunglasses and sunscreen.`;
  } else if (weather === "cloudy" || weather === "rainy") {
    message = `It's ${weather}! A light jacket might be a good idea.`;
  } else if (weather === "snowy") {
    message = `It's snowy! ❄️ Wear a warm coat, gloves, and boots.`;
  } else if (weather === "windy") {
    message = `It's windy! 🌬️ A windbreaker jacket would be perfect.`;
  } else {
    message = `Please select a valid weather option.`;
  }

  // Check if the temperature is below 50°F and add a warm jacket suggestion
  if (temperature && temperature < 50) {
    message += ` Also, it's quite cold! 🧥 Wear a warm jacket.`;
  }

  // Display the suggestion message in the suggestion section
  suggestionSection.innerHTML = `<p>${message}</p>`;
});
