import { useState } from 'react';

import { useAuth } from '../../../../contexts/useAuth.jsx';

import { FormField } from '../FormField/FormField.jsx';
import { PasswordField } from '../PasswordField/PasswordField.jsx';
import { Checkbox } from '../Checkbox/Checkbox.jsx';
import { AuthSwitch } from '../AuthSwitch/AuthSwitch.jsx';
import { Divider } from '../Divider/Divider.jsx';
import { GoogleButton } from '../GoogleButton/GoogleButton.jsx';

import style from './LoginForm.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const navigation = useNavigate();
    const context = useAuth();

    const [confirm, setConfirm] = useState(null);
    const [formData, setFormData] = useState({ email: "", password: "" });


    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const submitHandler = async (event) => {
        event.preventDefault()

        try {
            const { data } = await axios.get(`https://6aa2acebccb3db9689a6e211.mockapi.io/user`);

            const user = data.find((u) => u.profile.email === formData.email);

            console.log(user)

            if (!user) {
                navigation("/register")
                return;
            }

            if (user.profile.password !== formData.password) {
                setConfirm(false)
                return;
            }

            console.log(1)

            context.authorization(user);
            setConfirm(true);
            navigation("/");
        } catch (error) {
            if (error.response?.status === 404) {
                navigation("/register");
                return;
            }
            console.error(`Помилка при запиті на сервер: ${error.message}`);
        }
    };

    return (
        <div className={style.inner}>
            <h2 className={style.title}>З поверненням 👋</h2>
            <h3 className={style.subtitle}>
                Увійдіть, щоб переглянути свої ігри та статистику
            </h3>

            <form className={style.form} onSubmit={submitHandler}>
                <FormField
                    label="Електронна пошта"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    onChange={changeHandler}
                    value={formData.email}
                />
                <PasswordField
                    label="Пароль"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={changeHandler}
                    forgotHref="/forgot"
                />
                <Checkbox id="remember" name="remember" label="Запам’ятати мене" />

                <button className={style.submitBtn} type="submit">Увійти</button>

                <AuthSwitch text="Немає акаунту?" linkText="Реєстрація" href="/register" />
            </form>

            <Divider>або</Divider>
            <GoogleButton />
        </div>
    );
}