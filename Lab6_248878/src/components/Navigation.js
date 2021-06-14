import { NavLink, Link } from "react-router-dom";
import {auth} from "../firebase"
import { useState, useEffect } from "react";

const Navigation = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            if (u) {
                setUser(u);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }
    , []);

    const logout = () =>{
        auth.signOut()
    }

    if (user)
        return (
            <nav a>
                <NavLink to="/lista">Lista Wszystkich</NavLink>
                <NavLink to="/dod">Dodaj</NavLink>
                <a href="/" onClick={logout}>Wyloguj</a>
            </nav>
        )
    return (
        <nav>
            <NavLink to="/" exact>Logowanie</NavLink>
            <NavLink to="/reg">Rejestracja</NavLink>
        </nav>
    )
}
export default Navigation;