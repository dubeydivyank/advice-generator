const adviceNumber = document.getElementById("advice-no");
const advice = document.getElementById("advice");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            adviceNumber.innerHTML = `Advice #${data.slip.id}`;
            advice.innerHTML = `"${data.slip.advice}"`;
        });
});

window.addEventListener("load", () => {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            adviceNumber.innerHTML = `Advice #${data.slip.id}`;
            advice.innerHTML = `"${data.slip.advice}"`;
        });
});
