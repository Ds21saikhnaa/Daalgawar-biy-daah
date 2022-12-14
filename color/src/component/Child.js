import {useParams} from 'react-router-dom'
export const Child = () => {
    const { color1 } = useParams();
    console.log(color1);
    return(
        <div style={{backgroundColor: `${color1}`, height:"50%", width:"50%"}}>
        </div>
    )
}