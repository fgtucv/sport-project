import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../../contexts/useAuth.jsx';

import { SignInService } from '../../../../api/services/authService.js';

import { FormField } from '../FormField/FormField.jsx';
import { PasswordField } from '../PasswordField/PasswordField.jsx';
import { Checkbox } from '../Checkbox/Checkbox.jsx';
import { AuthSwitch } from '../AuthSwitch/AuthSwitch.jsx';
import { Divider } from '../Divider/Divider.jsx';
import { GoogleButton } from '../GoogleButton/GoogleButton.jsx';

import style from './LoginForm.module.scss';

export const LoginForm = () => {
    const navigation = useNavigate();
    const context = useAuth();

    const [confirm, setConfirm] = useState(null);
    const [formData, setFormData] = useState({ email: "", password: "" });


    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const signIn = async (event) => {
        event.preventDefault();

        try {
            const user = await SignInService(formData);

            context.authorization();
            navigation("/");
        } catch (error) {
            const errorObject = {
                name: error.name,
                message: error.message,
                status: error.status,
                code: error.code
            };

            console.log(errorObject);
        }
    };

    return (
        <div className={style.inner}>
            <h2 className={style.title}>З поверненням 👋</h2>
            <h3 className={style.subtitle}>
                Увійдіть, щоб переглянути свої ігри та статистику
            </h3>

            <form className={style.form} onSubmit={signIn}>
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