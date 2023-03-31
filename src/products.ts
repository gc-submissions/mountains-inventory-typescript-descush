export interface Product {
    name: string;
    price: number;
}

export const products: Product[] = [
    { name: "milk", price: 4 },
    { name: "bread", price: 3 },
    { name: "chocolate", price: 5 },
]

export function calcAverageProductPrice(arrayOfProducts: Product[]) {
    if (arrayOfProducts.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let product of arrayOfProducts) {
        sum = sum + product.price;
    }

    return sum / arrayOfProducts.length;
}

//ALTERNATE SOLUTION

// function calcAverageProductPrice(arrayOfProducts: Product[]) {
    //arrayOfProducts
    //.map(product => product.price)
    //.reduce(sum, currentValue) => sum = sum + currentValue, 0) / arrayOfProducts.length
// }