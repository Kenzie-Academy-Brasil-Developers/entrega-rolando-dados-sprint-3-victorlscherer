// Simular a rolagem de dois dados várias vezes
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function rollDices() {

    for (let i = 0; i < 1000; i++) {
        let dice1 = Math.floor(Math.random() * 6 +1);
        let dice2 = Math.floor(Math.random() * 6 + 1);
        let sumOfDices = dice1 + dice2;
        count[sumOfDices - 2] = count[sumOfDices - 2] + 1;
    }
}
rollDices();
console.log(count);

const backColors = ["Red", "Orange", "Yellow", "Green", "aquamarine","Blue", "Purple", "black", "pink", "brown", "violet"];

const geral = document.getElementsByTagName("body")[0];

function criarBarras() {
    for (let i = 0; i < count.length; i++) {
    const faceTitle = document.createElement("h2");
    faceTitle.innerText = `Resultado da soma ${i + 2}`
    const resultText = document.createElement("p");
    resultText.innerText = `${count[i]} vezes`
    const criarDiv = document.createElement("div");
    // criarDiv.id = "minhaId";
    criarDiv.style.width = `${count[i]}px`;
    criarDiv.style.backgroundColor = `${backColors[i]}`;
    criarDiv.style.height = "20px";

    geral.appendChild(faceTitle);
    geral.appendChild(resultText);
    geral.appendChild(criarDiv);}

}

criarBarras();
