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
        <div>
        {
            flag ? (
                <div>
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
    )
}
export {Login}