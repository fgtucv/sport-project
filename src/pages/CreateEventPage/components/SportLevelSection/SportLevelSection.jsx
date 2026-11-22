import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ShieldAlert } from "lucide-react";

import { setSport, setMinLevel, setStrict } from "../../../../redux/slices/createEventSlice/createEventSlice";

import Section from "../Section/Section";
import Field from "../Field/Field";
import Input from "../Input/Input";
import Toggle from "../Toggle/Toggle";
import SegmentedControl from "../SegmentedControl/SegmentedControl";

import { SPORTS } from "../../CreateEventPage.constants";
import styles from "./SportLevelSection.module.scss";

export default function SportLevelSection() {
  const dispatch = useDispatch();

  const sport = useSelector((s) => s.create.form.sport);
  const levelMin = useSelector((s) => s.create.form.level_min);
  const strictLevel = useSelector((s) => s.create.form.strict_level);

  const onChangeSport = (newSport) => dispatch(setSport(newSport));
  const onChangeMinLevel = (newMinLevel) => dispatch(setMinLevel(newMinLevel));
  const onChangeStrictLevel = (newLevelType) => dispatch(setStrict(newLevelType));

  return (
    <Section title="Вид спорту та рівень">
      <div className={styles.stack}>
        <SegmentedControl options={SPORTS} value={sport} onChange={onChangeSport} />
        <div className={styles.grid}>
          <div className={styles.toggleWrap}>
            <Toggle
              checked={strictLevel}
              onChange={onChangeStrictLevel}
              label="Суворий рівень"
              hint="Гравці нижчого рівня не зможуть приєднатися"
            />
          </div>
          <Field label="Мінімальний рівень" icon={ShieldAlert}>
            <Input
              type="number"
              min="1"
              max="7"
              step="0.5"
              value={levelMin}
              onChange={(e) => onChangeMinLevel(Number(e.target.value))}
            />
          </Field>
        </div>
      </div>
    </Section>
  );
}
