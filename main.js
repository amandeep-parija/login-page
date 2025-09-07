// main.js

function saveCredentials() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username && password) {
    let credentials = JSON.parse(localStorage.getItem("credentials")) || [];
    credentials.push({ username, password, time: new Date().toLocaleString() });
    localStorage.setItem("credentials", JSON.stringify(credentials));

    alert("Credentials saved!");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  } else {
    alert("Please enter both username and password");
  }
}

function showCredentials() {
  let credentials = JSON.parse(localStorage.getItem("credentials")) || [];
  let output = "<h3>Saved Credentials</h3>";

  if (credentials.length > 0) {
    output += "<table><tr><th>Serial</th><th>Username</th><th>Password</th><th>Time</th></tr>";
    credentials.forEach((item, index) => {
      output += `<tr>
                   <td>${index + 1}</td>
                   <td>${item.username}</td>
                   <td>${item.password}</td>
                   <td>${item.time}</td>
                 </tr>`;
    });
    output += "</table>";
  } else {
    output += "<p>No credentials saved yet.</p>";
  }

  document.getElementById("output").innerHTML = output;
}

function clearCredentials() {
  localStorage.removeItem("credentials");
  document.getElementById("output").innerHTML = "<p>All credentials cleared!</p>";
}

// 👇 make functions accessible to onclick in HTML
window.saveCredentials = saveCredentials;
window.showCredentials = showCredentials;
window.clearCredentials = clearCredentials;

// main.js
document.getElementById("btnSave").addEventListener("click", saveCredentials);
document.getElementById("btnShow").addEventListener("click", showCredentials);
document.getElementById("btnClear").addEventListener("click", clearCredentials);

