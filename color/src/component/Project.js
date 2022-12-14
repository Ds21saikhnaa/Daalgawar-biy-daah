import {useParams} from 'react-router-dom'
import { Child } from './Child';
export const Project = () => {
    const { color } = useParams();
    console.log(color);
    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor: `${color}`, height:"100vh", width:"100vw"}}>
            <Child/>
        </div>
    )
}