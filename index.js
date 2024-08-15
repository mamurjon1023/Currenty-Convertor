let input = document.querySelector("input");
let from = document.querySelector(".from");
let to = document.querySelector(".to");
let button = document.querySelector("button");
let resultEl = document.querySelector(".result");

button.addEventListener("click", function (event) {
    event.preventDefault();

   let amount = Number(input.value);
   let fromCur = from.value;
   let toCur = to.value;
   
    fetch(`https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=${fromCur}&currencies=${toCur}`, {
        headers: {
            "x-rapidapi-key": "fb323d50aemsh021cce6e22c7eccp14cda2jsn5f18a9634617"
        }
    })

    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let result = data.result[toCur]
        result = (result * amount).toFixed(2);

        let h2 = document.createElement("h2");

        h2.textContent = `${ new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(result)} ${toCur}`;

        resultEl.innerHTML = "";
        resultEl.appendChild(h2);
    })
});