const json = require("./json")
const funcoes_pet = require("./funcoes-pet")

let pets = [
    {
        id: 1,
        nome: 'Yoshi',
        tipo: 'cachorro',
        raca: 'Akita inu',
        idade: 6,
        genero: 'Masculino',
        vacinado: true,
        servicos: []
    },
    {
        id: 2,
        nome: 'Pituco',
        tipo: 'pássaro',
        raca: 'calopsita',
        idade: 3,
        genero: 'Fêmea',
        vacinado: false,
        servicos: []

    }
];


//listaPets();

let novoPet = {
    nome: 'Neve',
    tipo: 'cachorro',
    raca: 'viralata',
    idade: 8,
    genero: 'Fêmea',
    vacinado: true,
    servicos: []

}



//funcoes_pet.adicionaPet(pets, novoPet)
//listaPets();





//funcoes_pet.servicoPrestados(pets[0], funcoes_pet.darBanhoNoPet())
// servicoPrestados(pets[0], tosarPet)

// listaPets();

//console.log(funcoes_pet.cadastrarPetsSpreadOperator(pets, json))

//console.log(funcoes_pet.filtrarPetPorNome('Yoshi', pets))


//campanha = funcoes_pet.campanhaVacinacao(pets);
//console.log("Pets Vacinado " + campanha[0] + "\nPets não Vacinado " + campanha[1]);

//removePet(1, pets)
