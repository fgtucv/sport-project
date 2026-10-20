import { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = ["Fgtucv", "Іван", "Юра", "Коля"]

export const LoginPage = () => {
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [pasword, setPasword] = useState("");

    const clickHandlate = () => {
        console.log(users[2])
        console.log(login)
        if (!users.includes(login)) {
            navigate("/regisration", { replace: true });
        } else {
            navigate("/profile")
        }
    }

    return (
        <div>
            <input type="text" placeholder="Логін або email" value={login}  onChange={(e) => {setLogin(e.value)}}/>
            <input type="text" placeholder="Пароль" value={pasword}  onChange={(e) => {setPasword(e.value)}}/>
            <button onClick={clickHandlate} type="button">Увійти</button>
        </div>
    );
};