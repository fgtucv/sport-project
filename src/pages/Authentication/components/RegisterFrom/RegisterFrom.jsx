import { useState } from 'react';

import { toast } from 'sonner';

import { signUpService } from '../../../../api/services/authService.js';

import { FormField } from '../FormField/FormField';
import { PasswordField } from '../PasswordField/PasswordField';
import { Checkbox } from '../Checkbox/Checkbox';
import { AuthSwitch } from '../AuthSwitch/AuthSwitch';
import { Divider } from '../Divider/Divider';
import { GoogleButton } from '../GoogleButton/GoogleButton';

import style from './RegisterForm.module.scss';

export const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        nickname: ""
    });

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const createData = (data) => {
        return ({
            email: data.email,
            password: data.password,
            profile: {
                first_name: data.firstName,
                last_name: data.lastName,
                nickname: data.nickname.includes('@') ? data.nickname : '@' + data.nickname,
                avatar_url: null,
                level: 0,
                elo: 0,
                pts: 0
            }
        })
    };

    // const submitHandler = async (event) => {
    //     event.preventDefault()

    //     try {
    //         const url = 'https://6aa2acebccb3db9689a6e211.mockapi.io/user';
    //         const user = createData(formData);

    //         let existing = [];

    //         try {
    //             const res = await axios.get(url);
    //             existing = res.data;
    //         } catch (err) {
    //             if (err.response?.status !== 404) throw err;
    //         }

    //         const isEmailTaken = existing.some(
    //             (u) => u.profile.email === user.profile.email
    //         );

    //         if (isEmailTaken) {
    //             console.log('Вже є користувач з цією поштою');
    //              navigation("/login")
    //             return;
    //         }

    //         const { data: createdUser } = await axios.post(url, user);
    //         context.authorization(createdUser);
    //     } catch (error) {
    //         console.error(`Помилка при запиті на сервер: ${error.message}`);
    //     }


    // };

    const singUp = async (event) => {
        event.preventDefault();

        try {
            await signUpService(createData(formData));

        } catch (e) {
            if (e.message === "User already registered") {
                toast.error("Вже є користувач з такою поштою або логіном")
                return
            }
            console.log(e.message);
        }
    };

    return (
        <div className={style.inner}>
            <h2 className={style.title}>Створити акаунт 👋</h2>
            <h3 className={style.subtitle}>
                Приєднуйтесь до гравців у падел та теніс
            </h3>

            <form className={style.form} onSubmit={singUp}>
                <FormField
                    label="Нікнейм"
                    id="nickname"
                    name="nickname"
                    placeholder="daragon45"
                    onChange={changeHandler}
                    value={formData.nickname}
                    required
                />
                <div className={style.row}>
                    <FormField
                        label="Ім’я"
                        id="firstName"
                        name="firstName"
                        placeholder="Alejandro"
                        onChange={changeHandler}
                        value={formData.firstName}
                        required
                    />
                    <FormField
                        label="Прізвище"
                        id="lastName"
                        name="lastName"
                        placeholder="García"
                        onChange={changeHandler}
                        value={formData.lastName}
                        required
                    />
                </div>

                <FormField
                    label="Електронна пошта"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    onChange={changeHandler}
                    value={formData.email}
                    required
                />

                <PasswordField
                    label="Пароль"
                    id="password"
                    name="password"
                    placeholder="Мінімум 8 символів"
                    onChange={changeHandler}
                    value={formData.password}
                    minLength={8}
                    required
                />

                <Checkbox
                    id="terms"
                    name="terms"
                    required
                    label={
                        <>
                            Погоджуюсь з <a className={style.link} href="/terms">умовами</a> та{' '}
                            <a className={style.link} href="/privacy">політикою конфіденційності</a>
                        </>
                    }
                />

                <button className={style.submitBtn} type="submit">
                    Створити акаунт
                </button>

                <AuthSwitch text="Вже є акаунт?" linkText="Увійти" href="/login" />
            </form>

            <Divider>або</Divider>
            <GoogleButton />
        </div>
    );
}