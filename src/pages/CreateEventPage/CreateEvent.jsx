import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { CreateForm } from "./components/CreateForm/CreateForm";
import { EventTypeCard } from "./components/EventTypeItem/EventTypeItem";
import { TEXT_DATA, EVENT_TYPES } from "./CreateEvent.constants";

import style from "./CreateEvent.module.scss";

export const CreateEvent = () => {
  return (
    <section className={style.create}>
      <Container>
        <MainTitle text={TEXT_DATA} />

        <h2 className={style.createStepTitle}>Крок 1: Виберіть тип події</h2>
        <ul className={style.createEventTypes}>
          {EVENT_TYPES.map((eventType) => (
            <EventTypeCard key={eventType.key} data={eventType} />
          ))}
        </ul>

        <h2 className={style.createStepTitle}>Крок 2: Виберіть деталі події</h2>
        <CreateForm />
      </Container>
    </section>
  );
};