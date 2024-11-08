
//Variáveis de saldo de vitória e nível do herói
let saldoJogadas = calcularVitorias (120, 40)  //Variável do resultado da função do saldo de vitórias, Alterar valores
let nivelJogador = calcularNivel(saldoJogadas) //Variável do resultado do nível do Herói

//Mensagem final com o saldo de vitórias e o nível do Herói
console.log("O herói tem de saldo de " + saldoJogadas + " e está no nível de " + nivelJogador)


// Função para calcular o saldo de vitórias e derrotas
function calcularVitorias (vitorias, derrotas){

let calculoJogadas = vitorias - derrotas
return calculoJogadas
}

//Função para determinar o nível do herói com base no saldo de vitórias
function calcularNivel(saldoJogadas){

let nivelJogador = ""

    if ( saldoJogadas < 10) {
    nivelJogador = "Ferro"
}
    else if ( saldoJogadas >= 11 && saldoJogadas <= 20) {
    nivelJogador = "Bronze"
}
    else if ( saldoJogadas >= 21 && saldoJogadas <= 50) {
    nivelJogador = "Prata"
}
    else if ( saldoJogadas >= 51 && saldoJogadas <= 80) {
   nivelJogador = "Ouro"
}
    else if ( saldoJogadas >= 81 && saldoJogadas <= 90) {
    nivelJogador = "Platina"
}
    else if ( saldoJogadas >= 91 && saldoJogadas <= 100) {
    nivelJogador = "Ascendente"
}
    else if ( saldoJogadas >= 101) {
    nivelJogador = "Imortal"
}
    return nivelJogador
}
