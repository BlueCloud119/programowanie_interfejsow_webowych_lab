import {Redirect} from "react-router-dom";
import { auth } from "../firebase";
import {useState} from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [redirect, setRedirect] = useState(false);

    const createUserWithEmailAndPasswordHandler = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            auth.signInWithEmailAndPassword(email, password)
            .then(loggedUser => {
                loggedUser.user.updateProfile({
                    displayName: displayName
                })
            })
            .catch(error => {
                console.log(error);
            })
            setRedirect(true);
        })
        .catch(error => {
            console.log(error);
        })
    };

    if (redirect)
        return <Redirect to="/lista" />

    return (
        <div className = "borderAuth">
            <label htmlFor="displayName"> Nazwa: </label>
            <div className = "element">
                <input
                    name = "name"
                    value = {displayName}
                    placeholder="Nazwa"
                    onChange={e => setDisplayName(e.target.value)}
                />
            </div>

            <label htmlFor="email"> Email: </label>
            <div className = "element">
                <input
                    name="email"
                    value={email}
                    placeholder="Twój email"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <label htmlFor="password"> Hasło (min 6 znaków): </label>
            <div className = "element">
                <input
                    name="password"
                    value={password}
                    placeholder="Twoje haslo"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button onClick={createUserWithEmailAndPasswordHandler}>
                Utwórz konto
            </button>
        </div>
    )
}

export default Register;