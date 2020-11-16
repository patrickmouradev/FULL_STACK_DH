
let estudantes = [
    {
        nome: 'Alvaro',
        media: 9,
        curso: 'Android',
    },
    {
        nome: 'Daniel',
        media: 6,
        curso: 'Full Stack',
    },
    {
        nome: 'Alexis',
        media: 3,
        curso: 'iOS',
    }
]

estudantes.unshift({
    nome: 'Francisco',
    media: 2,
    curso: 'Full Stack'
})

estudantes.unshift({
    nome: 'Mariana',
    media: 9,
    curso: 'Android'
})

//console.log(estudantes)


let estudantes2 = [
    {
        nome: 'Álvaro',
        media: 9,
        curso: 'Android',
    },
    {
        nome: 'Daniel',
        media: 6,
        curso: 'Full Stack',
    }
]
estudantes2.push({ nome: 'João', media: 5, curso: 'iOs' });
estudantes2.push({ nome: 'Miguel', media: 2, curso: 'Android' });

console.log(estudantes2)