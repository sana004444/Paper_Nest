function showForm() {
  document.getElementById("formContainer").style.display = "block";
}

document.getElementById("uploadForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop real form submission

  // Show success message
  document.getElementById("successMessage").style.display = "block";

  // Optionally, hide the form after submission
  // document.getElementById("formContainer").style.display = "none";
});
