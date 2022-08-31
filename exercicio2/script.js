let minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
let tamanho = minhaString.length
console.log(`o tamanho da string com espaço é: ${tamanho}`)

tamanho = minhaString.trim().length
console.log(`O tamanho da string sem espaços é: ${tamanho}`)

minhaString = minhaString.replace("________", "sticioso")
console.log(minhaString)