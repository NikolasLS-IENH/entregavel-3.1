const personagensNaruto = [
  {
    nome: "Naruto",
    sobrenome: "Uzumaki",
    idade: 17,
    chakra: 100,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Genin",
  },
  {
    nome: "Sasuke",
    sobrenome: "Uchiha",
    idade: 17,
    chakra: 85,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Ninja Renegado",
  },
  {
    nome: "Sakura",
    sobrenome: "Haruno",
    idade: 17,
    chakra: 40,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Kakashi",
    sobrenome: "Hatake",
    idade: 31,
    chakra: 50,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Jonin",
  },
  {
    nome: "Gaara",
    sobrenome: null,
    idade: 17,
    chakra: 90,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Kazekage",
  },
  {
    nome: "Rock",
    sobrenome: "Lee",
    idade: 18,
    chakra: 20,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Hinata",
    sobrenome: "Hyuga",
    idade: 16,
    chakra: 45,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Chunin",
  },
  {
    nome: "Shikamaru",
    sobrenome: "Nara",
    idade: 17,
    chakra: 35,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Tsunade",
    sobrenome: null,
    idade: 55,
    chakra: 95,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Hokage",
  },
  {
    nome: "Jiraiya",
    sobrenome: null,
    idade: 54,
    chakra: 88,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Sannin",
  },
  {
    nome: "Orochimaru",
    sobrenome: null,
    idade: 54,
    chakra: 92,
    ehDaFolha: false,
    possuiKekkeiGenkai: false,
    nivel: "Sannin",
  },
  {
    nome: "Itachi",
    sobrenome: "Uchiha",
    idade: 21,
    chakra: 60,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Ninja Renegado",
  },
  {
    nome: "Neji",
    sobrenome: "Hyuga",
    idade: 18,
    chakra: 55,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Jonin",
  },
  {
    nome: "Tenten",
    sobrenome: null,
    idade: 18,
    chakra: 30,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Ino",
    sobrenome: "Yamanaka",
    idade: 17,
    chakra: 40,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Choji",
    sobrenome: "Akimichi",
    idade: 17,
    chakra: 75,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Kiba",
    sobrenome: "Inuzuka",
    idade: 17,
    chakra: 45,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Shino",
    sobrenome: "Aburame",
    idade: 17,
    chakra: 65,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Sai",
    sobrenome: null,
    idade: 17,
    chakra: 50,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Anbu",
  },
  {
    nome: "Temari",
    sobrenome: null,
    idade: 20,
    chakra: 70,
    ehDaFolha: false,
    possuiKekkeiGenkai: false,
    nivel: "Jonin",
  },
];

// 1 - Selecione os personagens que possuem chakra estritamente maior que 80.
const ninjasPoderosos = personagensNaruto.filter((p) => p.chakra > 80);
console.log("1. Ninjas Poderosos:", ninjasPoderosos);

// 2 - Liste o nome de todos os personagens que possuem Kekkei Genkai.
const listaKekkei = personagensNaruto.filter((p) => p.possuiKekkeiGenkai).map((p) => p.nome);
console.log("\n2. Nomes com Kekkei Genkai:", listaKekkei);

// 3 - Obtenha o chakra de todos os personagens que são "Ninja Renegado".
const chakraForaDaLei = personagensNaruto.filter((p) => p.nivel === "Ninja Renegado").map((p) => p.chakra);
console.log("\n3. Chakra dos Ninjas Renegados:", chakraForaDaLei);

// 4 - Qual a soma total das idades de todos os personagens do vetor?
const somaIdades = personagensNaruto.reduce((acc, p) => acc + p.idade, 0);
console.log("\n4. Soma das idades:", somaIdades);

// 5 - Crie um vetor com o nome dos personagens que possuem mais de 50 de chakra E são da Folha.
const eliteFolha = personagensNaruto.filter((p) => p.chakra > 50 && p.ehDaFolha).map((p) => p.nome);
console.log("\n5. Elite da Folha (>50 chakra):", eliteFolha);

// 6 - Nome do personagem com a maior e com a menor razão chakra-idade.
const razaoChakraIdade = personagensNaruto.map(p => ({ nome: p.nome, razao: p.chakra / p.idade }));
const maiorRazao = razaoChakraIdade.reduce((max, p) => p.razao > max.razao ? p : max).nome;
const menorRazao = razaoChakraIdade.reduce((min, p) => p.razao < min.razao ? p : min).nome;
console.log("\n6. Maior razão chakra-idade:", maiorRazao, "| Menor razão:", menorRazao);

// 7 - Crie um vetor com os personagens que possuem nível "Sannin".
const sannins = personagensNaruto.filter(p => p.nivel === "Sannin");
console.log("\n7. Sannins:", sannins);

// 8 - Filtre todos os personagens que NÃO são da Vila da Folha.
const naoDaFolha = personagensNaruto.filter(p => !p.ehDaFolha);
console.log("\n8. Não são da Folha:", naoDaFolha);

// 9 - Encontre todos os personagens que possuem sobrenome registrado.
const comSobrenome = personagensNaruto.filter(p => p.sobrenome !== null);
console.log("\n9. Com sobrenome registrado:", comSobrenome);

// 10 - Filtre os personagens que têm exatamente 17 anos.
const dezesseteAnos = personagensNaruto.filter(p => p.idade === 17);
console.log("\n10. Exatamente 17 anos:", dezesseteAnos);

// 11 - Crie um vetor apenas com as idades dos personagens.
const idades = personagensNaruto.map(p => p.idade);
console.log("\n11. Apenas idades:", idades);

// 12 - Gere um vetor de strings no formato: "Nome - Nível".
const nomeNivel = personagensNaruto.map(p => `${p.nome} - ${p.nivel}`);
console.log("\n12. Nome - Nível:", nomeNivel);

// 13 - Crie um vetor de objetos contendo apenas nome e chakra de cada ninja.
const nomeEChakra = personagensNaruto.map(p => ({ nome: p.nome, chakra: p.chakra }));
console.log("\n13. Nome e Chakra:", nomeEChakra);

// 14 - Gere um vetor com o "poder total" (chakra multiplicado pela idade) de cada personagem.
const poderTotal = personagensNaruto.map(p => ({ nome: p.nome, poderTotal: p.chakra * p.idade }));
console.log("\n14. Poder Total (chakra * idade):", poderTotal);

// 15 - Crie um vetor de nomes de personagens (cuidado com os sem sobrenome).
const nomesCompletos = personagensNaruto.map(p => p.sobrenome ? `${p.nome} ${p.sobrenome}` : p.nome);
console.log("\n15. Nomes Completos:", nomesCompletos);

// 16 - Crie um vetor somente com os personagens da Folha que são menores de idade ( < 18).
const menoresDaFolha = personagensNaruto.filter(p => p.ehDaFolha && p.idade < 18);
console.log("\n16. Menores da Folha:", menoresDaFolha);

// 17 - Quantos personagens possuem kekkei-genkai?
const qtdKekkeiGenkai = personagensNaruto.filter(p => p.possuiKekkeiGenkai).length;
console.log("\n17. Quantidade com Kekkei Genkai:", qtdKekkeiGenkai);

// 18 - One-liner: selecionar os chakras dos personagens que são Jonin.
const chakrasJonin = personagensNaruto.filter(p => p.nivel === "Jonin").map(p => p.chakra);
console.log("\n18. Chakras dos Jonin:", chakrasJonin);

// 19 - Chakra total, média, menor e maior chakra.
const chakraTotal = personagensNaruto.reduce((acc, p) => acc + p.chakra, 0);
const chakraMedia = chakraTotal / personagensNaruto.length;
const menorChakra = Math.min(...personagensNaruto.map(p => p.chakra));
const maiorChakra = Math.max(...personagensNaruto.map(p => p.chakra));
console.log("\n19. Chakra Total:", chakraTotal, "| Média:", chakraMedia, "| Menor:", menorChakra, "| Maior:", maiorChakra);

// 20 - Razão chakra-idade média dos Chunin.
const chunins = personagensNaruto.filter(p => p.nivel === "Chunin");
const razaoMediaChunins = chunins.reduce((acc, p) => acc + (p.chakra / p.idade), 0) / chunins.length;
console.log("\n20. Razão média chakra-idade dos Chunin:", razaoMediaChunins);