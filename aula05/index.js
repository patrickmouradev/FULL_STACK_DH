const json = require("./json")

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

const listaPets = () => {

    pets.forEach(element => {
        console.log("Nome: " + element.nome + "\n" + "Tipo: " + element.tipo + "\n")

    });
    console.log("Quantidade de Pets: " + pets.length)
}
//listaPets();

let pet = {
    nome: 'Neve',
    tipo: 'cachorro',
    raca: 'viralata',
    idade: 8,
    genero: 'Fêmea',
    vacinado: true,
    servicos: []

}

const adicionaPet = (objetoPet) => {
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
const validadaDados = (objetoPet) => {
    return (objetoPet.length == 6
        && objetoPet.nome === 'string'
        && objetoPet.tipo === 'string'
        && objetoPet.raca === 'string'
        && objetoPet.idade === 'number'
        && objetoPet.genero === 'string'
        && objetoPet.vacinado === 'boolean')
}

//adicionaPet();
//listaPets();

const servicoPrestados = (pet, servicoRealizado) => {
    servicoRealizado(pet)
}

const darBanhoNoPet = (pet) => {
    let data = new Date();
    data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    pet.servicos.push("Banho na data" + data);
    console.log("O Pet " + pet.nome + " tomou Banho")
}

const tosarPet = (pet) => {
    let data = new Date()
    data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    pet.servicos.push("Tosa na data " + data)
    console.log("O Pet " + pet.nome + " foi Tosado")
}

// servicoPrestados(pets[0], darBanhoNoPet)
// servicoPrestados(pets[0], tosarPet)

// listaPets();

// const cadastrarPetsSpreadOperator = (pets, json) => {
//     let arrayPetsJson = JSON.parse(json);
//     pets.push(...arrayPetsJson)
//     return pets

// }


const cadastrarPetsSpreadOperator = (pets, json) => {
    let arrayPetsJson = JSON.parse(json);
    for (let index = 0; index < arrayPetsJson.length; index++) {
        pets.push(arrayPetsJson[index])
    }
    return pets

}
// console.log(cadastrarPetsSpreadOperator(pets, json))

// console.log(cadastrarPetsSpreadOperator(pets, json))


const filtrarPetPorNome = (nome, pets) => {

    let arrayPetfiltrados = pets.filter((pet) => {
        return pet.nome == nome
    });
    if (arrayPetfiltrados.length > 0) {
        return arrayPetfiltrados
    } else {
        return "Pet Não encontrado"
    }

}

//console.log(filtrarPetPorNome('Yoshi', pets))

const campanhaVacinacao = (pets) => {
    var vacinado = 0;
    var semVacina = 0;
    pets.forEach(element => {
        if (element.vacinado) {
            vacinado = vacinado + 1
        } else {
            semVacina = semVacina + 1
        }
    });
    return listaPetsVacina = [vacinado, semVacina]
}
campanha = campanhaVacinacao(pets);
//console.log("Pets Vacinado " + campanha[0] + "\nPets não Vacinado " + campanha[1]);


const removePet = (idpet, listaPets) => {
    let pet = listaPets.filter((pet) => {
        return pet.id == idpet
    });
    if (pet.length > 0) {
        pets.splice(idpet - 1, 1)
        console.log(pets)
    } else {
        console.log('Não Foi encontrado nenhum Pet com esse nome')
    }

}

removePet(1, pets)
