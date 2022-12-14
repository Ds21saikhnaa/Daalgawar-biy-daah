import Head from './Head';
const Data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
const Render = ({data, value}) => {
    return (
        <>
            <div>  
                <h3>Electronics</h3>
                {data === false ? Data.filter(({ category }) => {
                    return (category === 'Electronics')
                }).filter((el) => {
                    if (el.name.includes(value)) {
                        return el
                    }
                }).map(({ name, price }, i) => {
                    return <Head key={i} name={name} price={price} />
                }) :
                    Data.filter(({ stocked }) => {
                        return (stocked === false)
                    }).map(({ name, price }, i) => {
                        return <Head key={i} name={name} price={price} style={{color:"red"}} />
                    })
                }
            </div>
            <div><h3>Sporting Goods</h3>
                {data === false ? Data.filter(({ category }) => {
                    return (category === "Sporting Goods")
                }).filter((el) => {
                    if (el.name.includes(value)) {
                        return el
                    }
                }).map(({ name, price }, i) => {
                    return <Head key={i} name={name} />
                }) :
                    Data.filter(({ stocked }) => {
                        return (stocked === false)
                    }).map(({ name, price }, i) => {
                        return <Head key={i} name={name} price={price} />
                    })}
            </div>
        </>
    )
}
export default Render