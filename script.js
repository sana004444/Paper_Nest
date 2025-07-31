document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const role = document.getElementById("role").value;

  document.getElementById("login-screen").classList.add("hidden");

  if (role === "author") {
    document.getElementById("author-dashboard").classList.remove("hidden");
  } else if (role === "reviewer") {
    document.getElementById("reviewer-dashboard").classList.remove("hidden");
  } else if (role === "chair") {
    document.getElementById("chair-dashboard").classList.remove("hidden");
  }
});
