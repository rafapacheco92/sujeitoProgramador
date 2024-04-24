let products = ['Computer', 'Phone', 'Mouse', 'Keyboard'];

console.log(products);
console.log(products.length);

let mouseOut = products.filter((p) => p !== 'Mouse')

console.log(mouseOut);

let findPhone = products.find((p) => p === 'Phone')

if (findPhone === 'Phone'){
    console.log('Está na lista')
}else {
    console.log('Não está na lista')
}

products.splice(1, 1)
console.log(products)

let numbers = [1, 3, 5, 7, 0, 9]
console.log(numbers.sort())
console.log(numbers.shift())
console.log(numbers.reverse())


let today = '22/04/2024'

let [day, month, year] = today.split('/')

console.log(day)
console.log(month)
console.log(year)