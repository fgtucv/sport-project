import { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = ["Fgtucv", "Іван", "Юра", "Коля"]

export const RegisterPage = () => {
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [pasword, setPasword] = useState("");

    const clickHandlate = ( ) => {
        if (users.includes(login)) {
            navigate("/logining", { replace: true });
        } else {
            navigate("/profile")
        }
    }

    return (
        <div>
            <input type="text" placeholder="Логін або email" value={login} onChange={(e) => {setLogin(e.value)}}/>
            <input type="text" placeholder="Пароль" value={email} onChange={(e) => {setEmail(e.value)}}/>
            <input type="text" placeholder="Логін або email" value={fullName}  onChange={(e) => {setFullName(e.value)}}/>
            <input type="text" placeholder="Пароль" value={pasword} onChange={(e) => {setPasword(e.value)}}/>
            <button onClick={clickHandlate} type="button">Зареєструватися</button>
        </div>
    );
};