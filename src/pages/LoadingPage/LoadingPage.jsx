import { Container } from "../../components/Container/Container.jsx";

import style from "./LoadingPage.module.scss";

export const LoadingPage = () => {
    return (
        <section className={style.loading} role="status" aria-live="polite">
            <Container>
                    <div className={style.spinnerWrap}>
                        <div className={style.ring} />
                        <div className={style.ball}>
                            <span className={style.seamLeft} />
                            <span className={style.seamRight} />
                        </div>
                    </div>

                    <h1 className={style.title}>Завантаження...</h1>
                    <p className={style.text}>Зачекайте, ми готуємо ваші матчі та статистику</p>

                    <div className={style.progress}>
                        <div className={style.progressBar} />
                    </div>
            </Container>
        </section>
    );
};