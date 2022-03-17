import {useState, useEffect} from "react"
const Products = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];
    const Render = () => {
    const [products, setProducts] = useState([])
    Products.map((value, index, array) => {
        if(value.category === 'Sporting Goods'){
            console.log(value.name);
        }
        console.log(value);
    });
    return( 
        <div>
        {Products.map((value, index, array) => (
            <div>
                <h1>{value.name}</h1>
            </div>
        //     if(value.category === 'Sporting Goods'){
        //         console.log(value.name);
        ))}
        </div>
    )
} 
export default Render