import '../App.css'
const Input = ({ value,target, onClick }) => {
  return ( 
    <div className='Search'>
      <input value={value} onChange={target} />
      <button onClick={onClick}>Search</button>
    </div>
  )
};
export default Input;