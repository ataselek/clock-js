let userName = prompt(`İsminizi Giriniz`);

let info = document.querySelector("#info");

info.innerHTML = `${userName}!`;

function dateTime() {
  var date = new Date().toLocaleString("tr-TR");
  document.getElementById("time").innerHTML = date;
}

setInterval(dateTime, 1000);
