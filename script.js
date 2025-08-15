function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (user === "Reisya" && pass === "1234") {
        window.location.href = "feed.html";
    } else {
        error.textContent = "Username atau password salah!";
        error.style.color = "red";
    }
}