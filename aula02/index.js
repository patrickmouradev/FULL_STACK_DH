let nome = 'Pet Shop NodeJS DH';
// console.log(nome);

let array = ['Leão', 'Cavalo', 'Cachorro']

// array.forEach(element => {
//     console.log(element);
// });

let pets = [
    {
        nome: 'Yoshi',
        tipo: 'cachorro',
        raca: 'Akita inu',
        idade: 6,
        genero: 'Masculino',
        vacinado: true
    },
    {
        nome: 'Pituco',
        tipo: 'pássaro',
        raca: 'calopsita',
        idade: 3,
        genero: 'Fêmea',
        vacinado: false
    }
];

function listaPets() {

    pets.forEach(element => {
        console.log("Nome: " + element.nome + "\n" + "Tipo: " + element.tipo + "\n")

    });
    console.log("Quantidade de Pets: " + pets.length)
}
listaPets();

let pet = {
    nome: 'Neve',
    tipo: 'cachorro',
    raca: 'viralata',
    idade: 8,
    genero: 'Fêmea',
    vacinado: true
}

function adicionaPet() {
    pets.push(pet));
}

adicionaPet();
listaPets();