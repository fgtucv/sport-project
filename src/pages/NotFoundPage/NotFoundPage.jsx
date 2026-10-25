import { Link, useNavigate } from "react-router-dom";

import { Container } from "../../components/Container/Container.jsx";
import NotFoundSvg from "../../assets/desctopNotFoundPageLight.svg";

import style from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <section className={style.notFound}>
            <Container>
                <img className={style.image} src={NotFoundSvg} alt="not found page" />
                <h1 className={style.title}>Сторінку не знайдено</h1>
                <p className={style.text}>
                    Схоже, цей матч уже зіграно: сторінки, яку ви шукаєте, не існує або її було переміщено.
                </p>
                <div className={style.actions}>
                    <Link to="/sport-project" className={style.primaryBtn}>
                        На головну
                    </Link>
                    <button type="button" className={style.secondaryBtn} onClick={() => navigate(-1)}>
                        Назад
                    </button>
                </div>
            </Container>
        </section>
    )
}