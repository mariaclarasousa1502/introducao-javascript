const destino = "rio de janeiro";
const precoPassagem = 320;
const idadePassageiro = 65;
const temMeiaEntrada = idadePassageiro >= 60 || idadePassageiro <= 12;
const fatorDesconto = temMeiaEntrada ? 0.5 : 1;
const valorFinal = precoPassagem * fatorDesconto;

document.getElementById("resultado").textContent = `passagem para ${destino}: R$` + ` ${valorFinal.toFixed(2)}`;