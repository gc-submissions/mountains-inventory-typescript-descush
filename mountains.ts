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

function findNameOfTallestMountain(arrayOfMountains: any): any {
    return Math.max(arrayOfMountains.height)
}


console.log(mountains);