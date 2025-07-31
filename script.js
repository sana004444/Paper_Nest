document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate successful login
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("author-dashboard").style.display = "flex";
});

document.getElementById("submission-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Paper submitted successfully!");
  this.reset(); // Clear the form after submission
});
