//primeiro codigo JavaScript
/*posso escrever com varias linhas*/ 
//variavele tipos de dados
//cada variavel guardam valor de um tipo diferente 

const nomeDoce = "Bananda";
const preco = 5.7;
const disponivel = true;

console.log(nomeDoce,preco,disponivel);

document.getElementById("resultado").textContent=`${nomeDoce} custa R$  ${preco.toFixed(2)}- disponivel: ${disponivel}`;