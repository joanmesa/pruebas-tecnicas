/*

Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.

Y añade una capacidad de buscar la información de varios superhéroes a la vez.

Ejemplo:
mostrarInformacionSuperheroe('Iron Man');

Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores

Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);

Salida:
Muestra la información de todos los superheroes

*/

// Crear array de objetos de superheroes marvel
const infoSuperheroes = {
    'Iron Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
        equipo: 'Los vengadores'
    },
    'Capitán América': {
        nombreReal: 'Steve Rogers',
        poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        equipo: 'Los vengadores'
    },
    'Thor': {
        nombreReal: 'Thor Odinson',
        poderes: ['Mjolnir', 'Viento y trueno'],
        equipo: 'Los vengadores'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
        equipo: 'Los vengadores'
    },
    'Hulk': {
        nombreReal: 'Bruce Banner',
        poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
        equipo: 'Los vengadores'
    }
};


const showSuperheroInfo = (nameSuperheroe) => {
    let descriptionSuperheroe = '';
    for (const [key, value] of Object.entries(infoSuperheroes)) {
        if (key === nameSuperheroe) {
            const { nombreReal, poderes, equipo } = value;
            descriptionSuperheroe += `Nombre real : ${nombreReal}\n`;
            descriptionSuperheroe += `Poderes : ${poderes}\n`;
            descriptionSuperheroe += `Equipo : ${equipo}\n\n`;
        }
    }
    return descriptionSuperheroe;
}


const showSuperherosInfo = (superheroes) => {
    let descriptionSuperheroes = '';
    for (const item of superheroes) {
        descriptionSuperheroes += showSuperheroInfo(item);
    }
    return descriptionSuperheroes;
}

const superheroeList = ['Thor', 'Hulk'];

console.log(showSuperheroInfo('Capitán América'));
console.log(showSuperherosInfo(superheroeList));


