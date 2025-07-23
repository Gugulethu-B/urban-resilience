// main.js - Starter JavaScript file
// Add your custom JS code here

document.addEventListener('DOMContentLoaded', function() {
  // Example: Show an alert when a button with id 'demoBtn' is clicked
  var demoBtn = document.getElementById('demoBtn');
  if (demoBtn) {
    demoBtn.addEventListener('click', function() {
      alert('Button clicked!');
    });
  }
});
