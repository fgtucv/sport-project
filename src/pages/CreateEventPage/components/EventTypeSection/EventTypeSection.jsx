import { useState } from "react";
import Section from "../Section/Section";
import SegmentedControl from "../SegmentedControl/SegmentedControl";
import { EVENT_TYPES } from "../../CreateEventPage.constants";

export default function EventTypeSection() {
  const [eventType, setEventType] = useState("game");

  return (
    <Section title="Тип події">
      <SegmentedControl
        options={EVENT_TYPES}
        value={eventType}
        onChange={setEventType}
      />
    </Section>
  );
}
