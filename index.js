const prompt = require('prompt-sync');
const entrada = prompt();

let anoAtual = 2024;
const nomeCompleto = "Felipe Medeiros Sousa";
let idade = 17;
const cursoFaculdade = "alguma coisa";
let cidadeAtual = "SJP";

console.log(`Ola eu sou o ${nomeCompleto} anos, moro em ${cidadeAtual} quero ano que vem estar cursando ${cursoFaculdade}`);

anoAtual = 2025;
idade = 18;
cidadeAtual = "Inazuma";
depoisMarço = "exercito";
lazer = "valorant e genshin"

console.log(`Bom ano que vem terei ${idade} e continuarei morando em ${cidadeAtual} e provavelmente estarei no ${depoisMarço} vou ganhar dinheiro, porém irei ter cada vez menos tempo para jogar ${lazer} com meus amigos`);


//agencia de viagens
console.log("-------------------------------------------------------------------------------------------------------------------");
console.log("                                             LOGIN                                                                 ");
console.log("-------------------------------------------------------------------------------------------------------------------");


const loginCerto = "Enyfe";
const senhaCerta = "******";

var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");

while(login !=loginCerto){
  console.log("usuario não encontrado!");
  login = entrada("Digite novamente seu login: ");
}
while(senha !=senhaCerta){
  console.log("senha incorreta!");
  login = entrada("Digite novamente sua senha: ");
}


var nomeComprador = entrada("Qual é seu nome? ");
var cpfComprador = entrada("Qual seria seu CPF? ");
var idadeComprador = entrada("Qual é a sua idade? ");
const listaDeDestinos = new Array("Fontaine",
"Japão",
"Canada",
"Portugual",
"Londres",
);

console.log(`Olá senhorita ${nomeComprador} Portadora do cpf ${cpfComprador}, a senhorita gostaria de confirmar sua passagem para: ${listaDeDestinos}? Poderia nos confirmar a sua idade? Aqui consta ${idadeComprador}.Com tudo pronto voce podera partir para sua viagem, tenha um otimo dia senhorita`);

console.log(listaDeDestinos[0]);
console.log(`Olá senhorita/ senhor ${nomeComprador} conseguimos adicionar mais uma viagem ao seu pacote de interresses`);
listaDeDestinos.push("Summer Island");

if(idadeComprador<18){
  console.log(`Infelizmente não podemos lhe vender uma passagem pois o sr é menor de idade`)
}
if (idadeComprador>18){
  console.log(`Parabens, sua compra de passagem foi um sucesso, favor verificar a ${listaDeDestinos}`)
}