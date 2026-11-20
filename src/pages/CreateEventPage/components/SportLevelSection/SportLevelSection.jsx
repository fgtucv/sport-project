import { useState } from "react";
import { ShieldAlert } from "lucide-react";
import Section from "../Section/Section";
import Field from "../Field/Field";
import Input from "../Input/Input";
import Toggle from "../Toggle/Toggle";
import SegmentedControl from "../SegmentedControl/SegmentedControl";
import { SPORTS } from "../../CreateEventPage.constants";
import styles from "./SportLevelSection.module.scss";

export default function SportLevelSection() {
  const [sport, setSport] = useState("padel");
  const [levelMin, setLevelMin] = useState("1.0");
  const [strictLevel, setStrictLevel] = useState(false);

  return (
    <Section title="Вид спорту та рівень">
      <div className={styles.stack}>
        <SegmentedControl options={SPORTS} value={sport} onChange={setSport} />
        <div className={styles.grid}>
          <Field label="Мінімальний рівень" icon={ShieldAlert}>
            <Input
              type="number"
              min="1"
              max="7"
              step="0.5"
              value={levelMin}
              onChange={(e) => setLevelMin(e.target.value)}
            />
          </Field>
          <div className={styles.toggleWrap}>
            <Toggle
              checked={strictLevel}
              onChange={setStrictLevel}
              label="Суворий рівень"
              hint="Гравці нижчого рівня не зможуть приєднатися"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
