const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

const novaString = frase.replace("verde", "rosa").replace("azul", "laranja")

const stringVerde = novaString.includes("verde")
console.log("Contem verde? "+stringVerde)

const stringLaranja = novaString.includes("laranja")
console.log("Contem laranja? "+stringLaranja)

