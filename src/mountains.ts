interface Mountain {
    name: string,
    height: number
}

const mountains: Mountain[] = [
    {
        name: 'Kilimanjaro',
        height: 19341
    },
    {
        name: 'Everest',
        height: 29029
    },
    {
        name: 'Denali',
        height: 20310
    }
]

export function findNameOfTallestMountain(arrayOfMountains: Mountain[]): any {

    let highest = arrayOfMountains[0];

    arrayOfMountains.forEach((mountain: Mountain) => {
        if (mountain.height > highest.height) {
            highest = mountain;
        }
    });
    return highest.name;
}

let highest = findNameOfTallestMountain(mountains);
console.log(highest);