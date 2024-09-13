// para rodar o código, vai no terminal e digita - node app.js

console.log("Olá Mundo");
console.log("Hi world");

// variavel let
let nome = "Priscila Romano";
let idade = 34
let altura = 1.68
let vazio

/* comentário mais de uma linha
*/

// criando a variável objeto
let objeto = {
    "nome": "Priscila Romano",
    "idade": 34,
    "altura": 1.75
}

let objeto2 = {
    nome, 
    idade, 
    altura
}

// imprimindo a msg
console.log(nome, idade, altura, vazio)
console.log(objeto)
console.log(objeto2)


// Usando Colchetes []
let modelos = ['Gol', 'Fusca', 'Corsa'];

// usando o construtor Array ()
let marcas = Array('Chevrolet', 'Ford', 'Fiat');

// Definindo um valor fixo atraves da Array
let acessorios = new Array(5);

// Criando um Vetor Vazio
let cores = [];

// ou
let categoria = new Array();

// p imprimir tem que ir nos ... no topo da tela, run terminal, e ai digita node app.js
// tem que ter o app node javascript instalado no pc
// acho q não precisa de nenhuma extensão
//console.log (modelos);
//console.log (marcas);
//console.log (acessorios);
//console.log (cores);

// exibindo ou recuperando o elemento do vetor
console.log(modelos[0])
console.log(modelos[1])
console.log(modelos[2])

let nome_modelo = modelos[0];
console.log(nome_modelo)

// Exibindo o vetor
console.log(modelos);

// adicionando elementos no dim da array
modelos.push('HB20');
console.log(modelos)

// adicionando elementod no inicio da array
modelos.unshift('Logan')
console.log(modelos)

// removendo elementos no inicio da array
modelos.shift()
console.log(modelos)

// removendo elementos do fim da array
modelos.pop()
console.log(modelos)


let frutas = ['laranja', 'melancia', 'morango'];
let vegetais = ['batata doce', 'cenoura', 'milho'];
let feira = frutas.concat(vegetais);

// exibindo o vetor
console.log(feira);

// selecionando e copiando uma parte da array
let frutas_ = ['laranja', 'melancia', 'morango', 'uva', 'caju', 'batata', 'banana']
let fruta_sel = frutas_.slice(1,5)

console.log (frutas_)
console.log(fruta_sel)

// removendo elemento de array
console.log(frutas_)
frutas_.splice(1,1)
console.log(frutas_)

// adicionando elemento de array
console.log(frutas_)
frutas_.splice(2, 1, 'manga') // o primeiro número é o número do vetor (a posição dele), o segundo é o número de elementos que vai ser substituídos
console.log(frutas_)

// verificando se todos os elementos existem
let existe = frutas.includes('morango')
console.log(existe);

// let r = frutas_.includes('morango')
// let r1 = frutas_.includes('morangooo')
// console.log(r, r1)

// adiciona todos os elementos em uma string separados por um delimitador escolhido
let frutas2 = ['laranja', 'melância', 'morango', 'uva', 'caju'];
let texto = frutas2.join(' , ');
console.log(texto);


// usado para exibir o resultado de uma função
let numeros = [1, 2, 3, 4, 5, 6];
let dobra = numeros.map(x=> x*2);
console.log(dobra);

// exemplo de filter (numeros pares = 0 / numeros impares = 1)
// validação lógica
let pares = numeros.filter(x=> x % 2 ==0);
console.log(pares);

// função find, retorna o valor do primeiro elemento que satisfaz a função fornecida
let localiza_elemento = numeros.find(x => x > 2);
let localiza_index = numeros.findIndex(x=> x>2)

console.log("Foi localizado o elemento: " +localiza_elemento)
console.log("Foi localizado o index: " +localiza_index)

let maior = numeros.some(x=> x>12);
console.log("Atende a condição lógica: "+maior);

let r = numeros.every(x=> x>0)
console.log("Todos atendem a regra: " +r)

// organizar os elementos
let n_aleatorio = [5,3,1,0,6,2,8,7]
console.log(n_aleatorio) // ordem aleatoria original
n_aleatorio.sort()
console.log(n_aleatorio) // na ordem do menor p maior
n_aleatorio.reverse()
console.log(n_aleatorio) // na ordem do maior p menor




// ternario (if-else simplificado em uma linha)
// exemplo aluno aprovado ou não
let nota = 6
let res = nota>=6 ? "Aprovado":"Reprovado"

// ou
let res1 =6;
if (nota>=6){
    console.log ("Aprovado")
} else {
    console.log ("Reprovado")
}



// exemplo de função
function teste (t){
    console.log(t)
}

