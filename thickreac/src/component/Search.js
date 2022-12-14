import '../App.css'
const Input = ({onChange ,value, data, setData}) => {
    return(
        <>
            <input onChange={onChange} value={value} placeholder="Search..."/>
            <div className="row">
                <input checked={data}
                    onChange={e => setData(e.target.checked)} type="checkbox"></input>
                    <p>Only show products in stock</p>
            </div>
        </>
    )
}
export default Input;