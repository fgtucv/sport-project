import { useDispatch, useSelector } from "react-redux";

import { setType } from "../../../../redux/slices/createEventSlice/createEventSlice.js";

import Section from "../Section/Section";
import SegmentedControl from "../SegmentedControl/SegmentedControl";

import { EVENT_TYPES } from "../../CreateEventPage.constants";


export default function EventTypeSection() {
  const dispatch = useDispatch();

  const eventType = useSelector((s) => s.create.form.type)

  const onChange = (newType) => dispatch(setType(newType));

  return (
    <Section title="Тип події">
      <SegmentedControl
        options={EVENT_TYPES}
        value={eventType}
        onChange={onChange}
      />
    </Section>
  );
}
