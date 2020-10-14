const json = require("./json")
let pets = [
    {
        nome: 'Yoshi',
        tipo: 'cachorro',
        raca: 'Akita inu',
        idade: 6,
        genero: 'Masculino',
        vacinado: true,
        servicos: []
    },
    {
        nome: 'Pituco',
        tipo: 'pássaro',
        raca: 'calopsita',
        idade: 3,
        genero: 'Fêmea',
        vacinado: false,
        servicos: []

    }
];

function listaPets() {

    pets.forEach(element => {
        // console.log("Nome: " + element.nome + "\n" + "Tipo: " + element.tipo + "\n"
        //     + "Serviços : " + element.servicos)
        console.log(element)

    });
    // console.log("Quantidade de Pets: " + pets.length)
    // console.log("Quantidade de Pets: " + pets.length)
}
// listaPets();

let pet = {
    nome: 'Neve',
    tipo: 'cachorro',
    raca: 'viralata',
    idade: 8,
    genero: 'Fêmea',
    vacinado: true,
    servicos: []

}

function adicionaPet() {
    pets.push(pet);
}

//adicionaPet();
//listaPets();


function servicoPrestados(pet, servicoRealizado) {
    servicoRealizado(pet)
}

function darBanhoNoPet(pet) {
    let data = new Date();
    data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    pet.servicos.push("Banho na data" + data);
    console.log("O Pet " + pet.nome + " tomou Banho")
}

function tosarPet(pet) {
    let data = new Date()
    data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    pet.servicos.push("Tosa na data " + data)
    console.log("O Pet " + pet.nome + " foi Tosado")
}

// servicoPrestados(pets[0], darBanhoNoPet)
// servicoPrestados(pets[0], tosarPet)

// listaPets();

function cadastrarPetsSpreadOperator(pets, json) {
    let arrayPetsJson = JSON.parse(json);
    pets.push(...arrayPetsJson)

    return pets

}


function cadastrarPetsSpreadOperator(pets, json) {
    let arrayPetsJson = JSON.parse(json);
    for (let index = 0; index < arrayPetsJson.length; index++) {
        pets.push(arrayPetsJson[index])
    }
    return pets

}
// console.log(cadastrarPetsSpreadOperator(pets, json))

// console.log(cadastrarPetsSpreadOperator(pets, json))


function filtrarPetPorNome(nome, pets) {

    let arrayPetfiltrados = pets.filter((pet) => {
        return pet.nome == nome
    });
    if (arrayPetfiltrados.length > 0) {
        return arrayPetfiltrados
    } else {
        return "Pet Não encontrado"
    }

}

console.log(filtrarPetPorNome('Yoshi', pets))