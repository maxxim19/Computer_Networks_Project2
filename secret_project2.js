if (localStorage.getItem("project2_logged_in") !== "true") {
  window.location.href = "index.html";
}

const logoutButton = document.getElementById("logout-button");

if (logoutButton) {
  logoutButton.addEventListener("click", function() {
    localStorage.removeItem("project2_logged_in");
    window.location.href = "index.html";
  });
}
