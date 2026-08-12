function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let hasil = document.getElementById("hasil");

    if (username === "maulida" && password === "240309") {

        hasil.innerHTML = "Login Berhasil!";
        hasil.style.color = "green";

        setTimeout(function() {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {

        hasil.innerHTML = "Username atau Password Salah!";
        hasil.style.color = "red";

    }
}