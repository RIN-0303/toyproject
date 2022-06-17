const clock = document.querySelector(".clock");
const today = document.querySelector(".date");

function getClock() {
const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const min = String(date.getMinutes()).padStart(2, "0");
const sec = String(date.getSeconds()).padStart(2, "0");
clock.innerText = `${hours}:${min}:${sec}`;
}

function getDate() {
const now = new Date();
const year = now.getFullYear();
const month = ("0" + (now.getMonth() + 1)).slice(-2);
const day = ("0" + (now.getDate())).slice(-2); 
today.innerText = `${year}년${month}월${day}일`;
}

getClock();
setInterval(getClock, 1000);

getDate();


