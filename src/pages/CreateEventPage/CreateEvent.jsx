import { Component } from "react";
// icons
import { GameEventIcon } from "../../components/Icons/Icons";
import { QualificationEventIcon } from "../../components/Icons/Icons";
import { TournamentEventIcon } from "../../components/Icons/Icons";
import { TimeIcon } from "../../components/Icons/Icons";
import { DataIcon } from "../../components/Icons/Icons";
import { LocationIcon } from "../../components/Icons/Icons";
import { PadelIcon } from "../../components/Icons/Icons";
import { TennisIcon } from "../../components/Icons/Icons";
import { PriceIcon } from "../../components/Icons/Icons";
// component
import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
// style
import style from "./CreateEvent.module.scss";

const text = {
    title: "Створіть подію",
    subtitle: "Створюйте свої ігри, турніри, кваліфікації",
}

export const CreateEvent = () => {
    return <section className={style.create}>
        <Container>
            <MainTitle text={text}/>
            <h2 className={style.createStepTitle}>Крок 1: Вибиріть тип події</h2>
            <ul className={style.createEventTypes}>
                <li className={style.createEventType + ' ' + style.activeType}>
                    <GameEventIcon className={style.createEventTypeIcon + ' ' + style.gameIcon} />
                    <h3 className={style.createEventTypeName}>Звичайна гра</h3>
                    <p className={style.createEventTypeDescription}>Хороший вибір щоб пограти з друзями або завести нові знайомства</p>
                </li>
                <li className={style.createEventType}>
                    <TournamentEventIcon className={style.createEventTypeIcon + ' ' + style.tournamentIcon} />
                    <h3 className={style.createEventTypeName}>Турнір</h3>
                    <p className={style.createEventTypeDescription}>Можна можна перевірити себе та підвищити рівень гри</p>
                </li>
                <li className={style.createEventType}>
                    <QualificationEventIcon className={style.createEventTypeIcon + ' ' + style.qualificationIcon} />
                    <h3 className={style.createEventTypeName}>Кваліфікація</h3>
                    <p className={style.createEventTypeDescription}>Швидкий спосіб підвищитись до Прімавери щоб взяти участь в турнірі</p>
                </li>
            </ul>
            <h2 className={style.createStepTitle}>Крок 2: Вибиріть деталі події</h2>
            <form className={style.createFrom} action="">
                <h2 className={style.createFormTitle}>Виберіть спорт</h2>
                <ul className={style.createFromList}>
                    <li className={style.createFromSportItem + ' ' + style.createFromItem + ' ' + style.activeItem}>
                        <PadelIcon className={style.createFromIcon} />
                        Падель
                    </li>
                    <li className={style.createFromSportItem + ' ' + style.createFromItem}>
                        <TennisIcon className={style.createFromIcon} />
                        Теніс
                    </li>
                </ul>

                <h2 className={style.createFormTitle}>Виберіть кількість гравців</h2>
                <ul className={style.createFromList}>
                    <li className={style.createFromItem + ' ' + style.activeItem}>
                        2
                    </li>
                    <li className={style.createFromItem}>
                        4
                    </li>
                </ul>

                <div className={style.createFromInputDiv}>
                    <div className={style.createFromInputFlexDiv}>
                        <label className={style.createFormTitle} htmlFor="eventData">Виберіть дату</label>
                        <input className={style.createFromInput} type="date" name="eventData" id="eventData" />
                        <DataIcon className={style.createFromInputIcon} />
                    </div>
                    <div className={style.createFromInputFlexDiv}>
                        <label className={style.createFormTitle} htmlFor="eventTime">Виберіть час</label>
                        <input className={style.createFromInput} type="time" name="eventTime" id="eventTime" />
                        <TimeIcon className={style.createFromInputIcon} />
                    </div>
                </div>

                <h2 className={style.createFormTitle}>Виберіть тривалість події</h2>
                <ul className={style.createFromList}>
                    <li className={style.createFromItem}>
                        30 хв
                    </li>
                    <li className={style.createFromItem}>
                        60 хв
                    </li>
                    <li className={style.createFromItem + ' ' + style.activeItem}>
                        90 хв
                    </li>
                    <li className={style.createFromItem}>
                        120 хв
                    </li>
                </ul>

                <div className={style.createFromInputDiv}>
                    <div className={style.createFromInputFlexDiv}>
                        <label className={style.createFormTitle} htmlFor="eventLocation">Вкажіть локацію</label>
                        <input className={style.createFromInput} placeholder="Наприклад: Padel club Oviedo" type="text" name="eventLocation" id="eventLocation" />
                        <LocationIcon className={style.createFromInputIcon} />
                    </div>
                    <div className={style.createFromInputFlexDiv + ' ' + style.createFromSmalInput}>
                        <label className={style.createFormTitle} htmlFor="eventCourt">Вкажіть номер корту</label>
                        <input className={style.createFromInput} placeholder="№ 4" type="text" name="eventCourt" id="eventCourt" />
                    </div>
                </div>

                <div className={style.createFromLevelDiv}>
                    <div className={style.createFromLevelHeader}>
                        <h2 className={style.createFromLevelTitle}>Рівень гравців</h2>
                        <label className={style.createFromLevelSwitch}>
                            <span className={style.createFromLevelSpan}>Строгий рівень</span>
                            <input type="checkbox" />
                            <span className={style.createFromLevelSlider}></span>
                        </label>
                    </div>
                    <div className={style.createFromInputDiv}>
                        <div className={style.createFromInputFlexDiv}>
                            <label className={style.createFormTitle} htmlFor="eventMinLev">Мінімальний рівень</label>
                            <input className={style.createFromInput} placeholder="1.5" type="text" name="eventMinLev" id="eventMinLev" />
                        </div>
                        <div className={style.createFromInputFlexDiv}>
                            <label className={style.createFormTitle} htmlFor="eventMaxLev">Максимальний рівень</label>
                            <input className={style.createFromInput} placeholder="4.0" type="text" name="eventMaxLev" id="eventMaxLev" />
                        </div>
                    </div>
                </div>

                <div className={style.createFromInputDiv}>
                    <div className={style.createFromInputFlexDiv}>
                        <label className={style.createFormTitle} htmlFor="eventPrice">Загальна ціна за оренду корту</label>
                        <input className={style.createFromInput} placeholder="Наприклад: 24 €" type="text" name="eventPrice" id="eventPrice" />
                        <PriceIcon className={style.createFromInputIcon} />
                    </div>
                </div>
            </form>
        </Container>
    </section>
};