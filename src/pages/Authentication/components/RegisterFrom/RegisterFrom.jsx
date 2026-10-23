import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../../contexts/useAuth.jsx';

import { FormField } from '../FormField/FormField';
import { PasswordField } from '../PasswordField/PasswordField';
import { Checkbox } from '../Checkbox/Checkbox';
import { AuthSwitch } from '../AuthSwitch/AuthSwitch';
import { Divider } from '../Divider/Divider';
import { GoogleButton } from '../GoogleButton/GoogleButton';

import style from './RegisterForm.module.scss';

export const RegisterForm = () => {
    const context = useAuth();
    const navigation = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const createData = (data) => {
        return ({
            profile: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                avatarUrl: '',
            },
            rating: { level: 0, pts: 0, elo: 0 },
            statistics: {
                overall: {
                    winRatePercentage: null,
                    totalMatches: 0,
                    wins: 0,
                    draws: 0,
                    losses: 0,
                    tournamentsPlayed: 0,
                    gamesWon: 0,
                    winStreak: 0,
                    achievementsUnlocked: 0,
                },
                byTournamentType: [],
                timeOnCourt: null,
                topOpponents: [],
                topPartners: [],
                activityByMonth: [],
            },
            games: [],
            notifications: [],
        })
    };

    const submitHandler = async (event) => {
        event.preventDefault()

        try {
            const url = 'https://6aa2acebccb3db9689a6e211.mockapi.io/user';
            const user = createData(formData);

            let existing = [];

            try {
                const res = await axios.get(url);
                existing = res.data;
            } catch (err) {
                if (err.response?.status !== 404) throw err;
            }

            const isEmailTaken = existing.some(
                (u) => u.profile.email === user.profile.email
            );

            if (isEmailTaken) {
                console.log('Вже є користувач з цією поштою');
                 navigation("/login")
                return;
            }

            const { data: createdUser } = await axios.post(url, user);
            context.authorization(createdUser);
            navigation('/sport-project');
        } catch (error) {
            console.error(`Помилка при запиті на сервер: ${error.message}`);
        }


    };

    return (
        <div className={style.inner}>
            <h2 className={style.title}>Створити акаунт 👋</h2>
            <h3 className={style.subtitle}>
                Приєднуйтесь до гравців у падел та теніс
            </h3>

            <form className={style.form} onSubmit={submitHandler}>
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