import { auth } from "../firebase";

import {useState} from "react";
import {Redirect} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const login = () => {

        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            setRedirect(true);
        })
        .catch(error => {
            console.log(error);
        })
    }

    if(redirect)
        return <Redirect to="/lista" />

    return (
        <div className = "borderAuth">
            <label htmlFor="email">Email: </label>
            <div className = "element">
                <input
                    placeholder = "Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            
            <label htmlFor="hasło">Hasło: </label>
            <div className = "element">
                <input
                    placeholder = "Hasło"
                    type = "password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button onClick={login}>Zaloguj się</button>
        </div>
    )
}

export default Login;