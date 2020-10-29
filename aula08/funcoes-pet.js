const momment = require("moment")
const listaPets = () => {

    pets.forEach(element => {
        console.log("Nome: " + element.nome + "\n" + "Tipo: " + element.tipo + "\n")
    });
    console.log("Quantidade de Pets: " + pets.length)
}

const adicionaPet = (pets, objetoPet) => {
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

const validadaDados = (objetoPet) => {
    return (
        typeof objetoPet.nome === 'string'
        && typeof objetoPet.tipo === 'string'
        && typeof objetoPet.raca === 'string'
        && typeof objetoPet.idade === 'number'
        && typeof objetoPet.genero === 'string'
        && typeof objetoPet.vacinado === 'boolean')
}

const cadastrarPetsSpreadOperator = (pets, json) => {
    let arrayPetsJson = JSON.parse(json);
    for (let index = 0; index < arrayPetsJson.length; index++) {
        pets.push(arrayPetsJson[index])
    }
    return pets

}

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
const servicoPrestados = (pet, servicoRealizado) => {
    servicoRealizado(pet)
}



module.exports = {
    listaPets,
    adicionaPet,
    removePet,
    filtrarPetPorNome,
    campanhaVacinacao,
    cadastrarPetsSpreadOperator,
    servicoPrestados,
    darBanhoNoPet,
    tosarPet


}