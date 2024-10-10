const prompt = require('prompt-sync');
const entrada = prompt();

let anoAtual = 2024;
const nomeCompleto = "Felipe Medeiros Sousa";
let idade = 17;
const cursoFaculdade = "alguma coisa";
let cidadeAtual = "SJP";

console.log(`Olá, eu sou o ${nomeCompleto}, tenho ${idade} anos, moro em ${cidadeAtual}, e quero ano que vem estar cursando ${cursoFaculdade}.`);

anoAtual = 2025;
idade = 18;
cidadeAtual = "Inazuma";
depoisMarço = "exército";
lazer = "Valorant e Genshin";

console.log(`Bom, ano que vem terei ${idade} e continuarei morando em ${cidadeAtual} e provavelmente estarei no ${depoisMarço}. Vou ganhar dinheiro, porém irei ter cada vez menos tempo para jogar ${lazer} com meus amigos.`);

// Agência de viagens
console.log("-------------------------------------------------------------------------------------------------------------------");
console.log("                                             LOGIN                                                                 ");
console.log("-------------------------------------------------------------------------------------------------------------------");

const loginCerto = "Enyfe";
const senhaCerta = "******";

var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");

while (login != loginCerto) {
  console.log("Usuário não encontrado!");
  login = entrada("Digite novamente seu login: ");
}
while (senha != senhaCerta) {
  console.log("Senha incorreta!");
  senha = entrada("Digite novamente sua senha: ");
}

var nomeComprador = entrada("Qual é seu nome? ");
var cpfComprador = entrada("Qual seria seu CPF? ");
var idadeComprador = entrada("Qual é a sua idade? ");
const listaDeDestinos = new Array("Fontaine", "Japão", "Canadá", "Portugal", "Londres");

console.log(`Olá senhor(a) ${nomeComprador}, portador(a) do CPF ${cpfComprador}. A senhor(a) gostaria de confirmar sua passagem para: ${listaDeDestinos}? Poderia nos confirmar sua idade? Aqui consta ${idadeComprador}. Com tudo pronto, você poderá partir para sua viagem. Tenha um ótimo dia!`);

console.log(listaDeDestinos[0]);
console.log(`Olá senhor(a) ${nomeComprador}, conseguimos adicionar mais uma viagem ao seu pacote de interesses.`);
listaDeDestinos.push("Summer Island");

if (idadeComprador < 18) {
  console.log(`Infelizmente não podemos lhe vender uma passagem pois você é menor de idade.`);
} else if (idadeComprador >= 18) {
  console.log(`Parabéns, sua compra de passagem foi um sucesso! \u{1F97A} Favor verificar a lista de destinos: ${listaDeDestinos}`);
}
