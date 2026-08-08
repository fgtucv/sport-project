import { GaneEventIcon } from "../../components/Icons/Icons";
import { QualificationEventIcon } from "../../components/Icons/Icons";
import { TournamentEventIcon } from "../../components/Icons/Icons";
import { TimeIcon } from "../../components/Icons/Icons";
import { CalendarIcon } from "../../components/Icons/Icons";
import { LocationIcon } from "../../components/Icons/Icons";
import { PadelIcon } from "../../components/Icons/Icons";
import { TennisIcon } from "../../components/Icons/Icons";
import { Container } from "../../components/Container/Container";
import style from "./CreateEvent.module.scss";

export const CreateEvent = () => {
    return <section className={style.create}>
        <Container>
            <div className={style.createHeader}>
                <h1 className={style.createTitle}>Створіть подію</h1>
                <p className={style.createSubtitle}>Створюй свої ігри, турніри та кваліфікації</p>
            </div>
            <h2 className={style.createStepTitle}></h2>
        </Container>
    </section>
};