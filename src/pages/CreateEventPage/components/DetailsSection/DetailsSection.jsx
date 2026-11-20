import { useState } from "react";
import { Calendar, Clock, MapPin, Euro } from "lucide-react";
import Section from "../Section/Section";
import Field from "../Field/Field";
import Input from "../Input/Input";
import { DURATIONS } from "../../CreateEventPage.constants";
import styles from "./DetailsSection.module.scss";

export default function DetailsSection() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState(90);
  const [price, setPrice] = useState("");
  const [venue, setVenue] = useState("");
  const [court, setCourt] = useState("");

  return (
    <Section title="Деталі">
      <div className={styles.grid}>
        <Field label="Дата" icon={Calendar}>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Field>
        <Field label="Час початку" icon={Clock}>
          <Input
            type="time"
            step="1800"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </Field>
        <Field label="Тривалість" icon={Clock}>
          <Input
            as="select"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          >
            {DURATIONS.map((d) => (
              <option key={d} value={d}>
                {d} хв
              </option>
            ))}
          </Input>
        </Field>
        <Field label="Ціна (€)" icon={Euro}>
          <Input
            type="number"
            min="0"
            step="0.5"
            placeholder="6.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Field>
        <Field label="Місце проведення" icon={MapPin}>
          <Input
            type="text"
            placeholder="Padel Oviedo"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            required
          />
        </Field>
        <Field label="Корт" icon={MapPin}>
          <Input
            type="text"
            placeholder="Корт 3"
            value={court}
            onChange={(e) => setCourt(e.target.value)}
          />
        </Field>
      </div>
    </Section>
  );
}
