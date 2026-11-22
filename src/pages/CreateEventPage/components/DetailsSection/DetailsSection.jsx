import { useDispatch, useSelector } from "react-redux";

import { Calendar, Clock, MapPin, Euro } from "lucide-react";

import {
  setStartTime,
  setStartDate,
  setDuration,
  setPrice,
  setLocation,
  setCourt
} from "../../../../redux/slices/createEventSlice/createEventSlice";

import Section from "../Section/Section";
import Field from "../Field/Field";
import Input from "../Input/Input";

import { DURATIONS } from "../../CreateEventPage.constants";
import styles from "./DetailsSection.module.scss";

export default function DetailsSection() {
  const dispatch = useDispatch();

  const date = useSelector((s) => s.create.form.started_at_date);
  const time = useSelector((s) => s.create.form.started_at_time);
  const duration = useSelector((s) => s.create.form.duration_time);
  const price = useSelector((s) => s.create.form.price);
  const location = useSelector((s) => s.create.form.location);
  const court = useSelector((s) => s.create.form.court);

  const onChangeStartDate = (newStartDate) => dispatch(setStartDate(newStartDate));
  const onChangeStartTime = (newStartTime) => dispatch(setStartTime(newStartTime));
  const onChangeDuration = (newDuration) => dispatch(setDuration(newDuration));
  const onChangePrice = (newPrice) => dispatch(setPrice(newPrice));
  const onChangeLocation = (newLocation) => dispatch(setLocation(newLocation));
  const onChangeCourt = (newCourt) => dispatch(setCourt(newCourt));

  return (
    <Section title="Деталі">
      <div className={styles.grid}>
        <Field label="Дата" icon={Calendar}>
          <Input
            type="date"
            value={date || ""}
            onChange={(e) => onChangeStartDate(e.target.value)}
            required
          />
        </Field>
        <Field label="Час початку" icon={Clock}>
          <Input
            type="time"
            step="1800"
            value={time || ""}
            onChange={(e) => onChangeStartTime(e.target.value)}
            required
          />
        </Field>
        <Field label="Тривалість" icon={Clock}>
          <Input
            as="select"
            value={duration || ""}
            onChange={(e) => onChangeDuration(e.target.value)}
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
            value={price || ""}
            onChange={(e) => onChangePrice(e.target.value !== "" ? Number(e.target.value) : "")}
          />
        </Field>
        <Field label="Місце проведення" icon={MapPin}>
          <Input
            type="text"
            placeholder="Padel Oviedo"
            value={location || ""}
            onChange={(e) => onChangeLocation(e.target.value)}
            required
          />
        </Field>
        <Field label="Корт" icon={MapPin}>
          <Input
            type="text"
            placeholder="Корт 3"
            value={court || ""}
            onChange={(e) => onChangeCourt(e.target.value)}
          />
        </Field>
      </div>
    </Section>
  );
}
