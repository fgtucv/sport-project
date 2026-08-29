import {
  GameEventIcon,
  QualificationEventIcon,
  TournamentEventIcon,
} from "../../components/Icons/Icons";

import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { CreateForm } from "./components/CreateForm/CreateForm";
import { EventTypeCard } from "./components/EventTypeList/EventTypeList";

import style from "./CreateEvent.module.scss";

const text = {
  title: "Створіть подію",
  subtitle: "Створюйте свої ігри, турніри, кваліфікації",
};

const eventTypes = [
  {
    Icon: GameEventIcon,
    title: "Звичайна гра",
    description: "Хороший вибір щоб пограти з друзями або завести нові знайомства",
    isActive: true,
  },
  {
    Icon: TournamentEventIcon,
    title: "Турнір",
    description: "Можна перевірити себе та підвищити рівень гри",
  },
  {
    Icon: QualificationEventIcon,
    title: "Кваліфікація",
    description: "Швидкий спосіб підвищитись до Прімавери щоб взяти участь в турнірі",
  },
];

export const CreateEvent = () => {
  return (
    <section className={style.create}>
      <Container>
        <MainTitle text={text} />

        <h2 className={style.createStepTitle}>Крок 1: Виберіть тип події</h2>
        <ul className={style.createEventTypes}>
          {eventTypes.map((eventType) => (
            <EventTypeCard key={eventType.title} {...eventType} />
          ))}
        </ul>

        <h2 className={style.createStepTitle}>Крок 2: Виберіть деталі події</h2>
        <CreateForm />
      </Container>
    </section>
  );
};