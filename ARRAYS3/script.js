

// let pessoa = {
//   nome: "Rafael",
//   sobrenome: "Pacheco",
//   empresa: "Safra",
//   cargo: "Operador Comercial"
// }

// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.cargo)

// const { nome, cargo, sobrenome: sobrenomePessoa } = pessoa

// console.log(nome)
// console.log(cargo)

// console.log(sobrenomePessoa)

let nomes = ['rafael', 'soares', 'pacheco'];

// let { 0: rafael, 2: pacheco } = nomes; seleciona a posição do array

// console.log(pacheco)

let [primeironome, segundonome] = nomes // vai por ordem do array

console.log(primeironome, segundonome)