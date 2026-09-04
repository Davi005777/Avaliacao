const campoNome = document.getElementById("nome")
const campoPeso = document.getElementById("peso")
const campoAltura = document.getElementById("altura")
const botao = document.getElementById("botao")
const mensagem = document.getElementById("mensagem")

botao.addEventListener("click", function () {
    const nome = campoNome.value.trim()
    const peso = campoPeso.value.trim()
    const altura = campoAltura.value.trim()

    if (nome === "" || peso === "" || altura === "") {

        mensagem.textContent = "preencha todos os campos antes de cadastrar."
        mensagem.style.color = "red"
        return
    }
    if (nome <= "0" || peso <= "0" || altura <= "0") {
        mensagem.textContent = "Erro, use valores validos."
        mensagem.style.color = "red"
        return
    }

    let resultado = peso / (altura * altura)
    if (resultado < 18.5) {
        mensagem.textContent = nome + ", seu IMC é: " + resultado.toFixed(1) + ". Você esta Abaixo do peso"
        mensagem.style.color = "black"
    }
    else if (resultado < 24.9) {
        mensagem.textContent = nome + " Seu IMC é: " + resultado.toFixed(1) + ". Voce esta  no Peso normal"
        mensagem.style.color = "black"
    }
    else if (resultado < 29.9) {
        mensagem.textContent = nome + " Seu IMC é: " + resultado.toFixed(1) + ". Voce esta Sobrepeso"
        mensagem.style.color = "black"
    }
    else if (resultado < 34.9) {
        mensagem.textContent = nome + " Seu IMC é: " + resultado.toFixed(1) + ". Voce esta  na Obesidade Grau I"
        mensagem.style.color = "black"
    }
    else if (resultado < 39.9) {
        mensagem.textContent = nome + " Seu IMC é: " + resultado.toFixed(1) + ". Voce esta  na Obesidade Grau II"
        mensagem.style.color = "black"
    }
    else {
        mensagem.textContent = nome + " Seu IMC é: " + resultado.toFixed(1) + ". Voce esta  na Obesidade Grau III"
        mensagem.style.color = "black"
    }
    console.log(resultado)
})