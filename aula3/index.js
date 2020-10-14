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

function adicionaPet(objetoPet) {
    if (typeof objetoPet == "object") {
        if (validadaDados(objetoPet)) {
            pets.push(objetoPet);
            console.log(pets);
        } else {
            console.log('Objeto informado não contem todos os dados e/ou tipo de dados necessario');
        }
    } else {
        console.log('Erro ao Adicionar um PED, informe um objeto Valido para cadastratr um novo pet');
    }


}
function validadaDados(objetoPet) {
    return (objetoPet.length == 6
        && objetoPet.nome === 'string'
        && objetoPet.tipo === 'string'
        && objetoPet.raca === 'string'
        && objetoPet.idade === 'number'
        && objetoPet.genero === 'string'
        && objetoPet.vacinado === 'boolean')
}

adicionaPet(pet);
