const chocolates = [
    { "dark": true, "flavour": "strawberry", 'price': 10 },
    { "dark": false, "flavour": "strawberry", 'price': 20 },
    { "dark": false, "flavour": "almond", 'price': 30 },
    { "dark": true, "flavour": "almond", 'price': 40 },
    { "dark": false, "flavour": "lemon", 'price': 50 },
];

const checkProperty = (key) => {
    return (value) => {
        return (item, index, arr) => {
            return item[key] === value;
        }
    }
}
const checkPropertyNew = (key) => {
    return (value) => {
        return(callback) => {
            return (item, index, arr) => {
                return callback(item[key], value);
            }
        }
    }
}   
const eq = (a, b) => {
    return a === b;
}

const gte = (a, b) => {
    return a >= b;
}

const lte = (a, b) => {
    return a <= b;
}
const almondChocolates = chocolates.filter(checkPropertyNew('price')(20)(gte));
console.log(almondChocolates );

const strawberry = chocolates.filter(checkPropertyNew('price')(30)(lte));
console.log(strawberry);
// const darkChocolates = chocolates.filter(checkProperty("dark")(true));
// console.log(darkChocolates);
// const almondChocolates = chocolates.filter(checkProperty("flavour")("almond"));