const url = "https://api.adviceslip.com/advice";

async function callApi() { // async torna a função assincrona 
    var resp = await fetch(url); // await é para esperar e fetch é para chamar a api
    if (resp.status === 200) {
        const obj = await resp.json();
        return obj;
    } else {
        console.error("Estado da api não ok");
    }
}

async function main() {
    const result = await callApi();
    if (result && result.slip) {
        const adviceDiv = document.getElementById("conselho"); // Seleciona a div
        adviceDiv.textContent = result.slip.advice; // Define o texto da div
    } else {
        console.error("Resposta inesperada da API");
    }
}

main();
