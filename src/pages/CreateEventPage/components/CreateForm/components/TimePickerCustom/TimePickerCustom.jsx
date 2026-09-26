import { TimeField, DateInput, DateSegment, Label } from 'react-aria-components';
import styles from './TimePickerCustom.module.scss';
import { Time } from '@internationalized/date';

export const TimePickerCustom = ({ setTime }) => {
    return (
        <TimeField
            onChange={setTime}
            className={styles.timePicker}
            granularity="minute"
        >
            <Label className={styles.label}>Час</Label>
            <DateInput className={styles.select}>
                {(segment) => <DateSegment segment={segment} />}
            </DateInput>
        </TimeField>
    );
};