import '../App.css'
import {useState, useRef, useEffect} from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const Login = () => {
    const [value, setValue] = useState('');
    const[flag, setFlag] = useState(true);
    const recaptchaVerifier = useRef();
    const confirmationResult = useRef();
    useEffect(() => {
        const auth = getAuth();
        recaptchaVerifier.current = new RecaptchaVerifier('recaptcha-container', {}, auth);
    }, [])
    const onClickLogin = async () => {
        const auth = getAuth();
        const phoneNumber = `+976${value}`;
        confirmationResult.current = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier.current);
        setValue('');
        setFlag(false);
    }
    const onClickCheckCode = async () => {
        const code = value;
        await confirmationResult.current.confirm(code);
    }
    return(
        <div className="logCon">
            <div className='miniLog'>
                {
                    flag ? (
                        <div className='input'>
                            <div id="recaptcha-container"></div>
                            <input type="text" placeholder="Phone number" value={ value } onChange={ (e) => setValue(e.target.value) } />
                            <button onClick={ onClickLogin }>Login</button>
                        </div>
                    ) : (
                        <div>
                            <input type="text" placeholder="Code" value={ value } onChange={ (e) => setValue(e.target.value) } />
                            <button onClick={ onClickCheckCode }>Check code</button>
                        </div>
                    )
                }
            </div>
        <div className="reactor-container">
            <div className="tunnel">
                <div className="core-wrapper">
                    <div className="core-outer">
                        <div className="core-inner"></div>
                    </div>
                </div>
            </div>
            <div className="coil-container">
                <div className="coil coil-1"></div>
                <div className="coil coil-2"></div>
                <div className="coil coil-3"></div>
                <div className="coil coil-4"></div>
                <div className="coil coil-5"></div>
                <div className="coil coil-6"></div>
                <div className="coil coil-7"></div>
                <div className="coil coil-8"></div>
            </div>
        </div>
        </div>
    )
}
export {Login}