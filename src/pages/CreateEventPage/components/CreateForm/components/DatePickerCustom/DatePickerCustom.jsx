import {
    DatePicker,
    DateInput,
    DateSegment,
    Label,
    Button,
    Popover,
    Dialog,
    Calendar,
    CalendarGrid,
    CalendarHeaderCell,
    CalendarGridHeader,
    CalendarGridBody,
    CalendarCell,
    Heading,
    Group
} from 'react-aria-components';
import { DataIcon } from "../../../../../../components/Icons/Icons.jsx";
import style from './DatePickerCustom.module.scss';

export const DatePickerCustom = ({ setDate }) => {
    return (
        <DatePicker
            onChange={setDate}
            granularity="day"
            className={style.datePicker}
        >
            <Label className={style.label}>Дата</Label>

            <Group className={style.inputGroup}>
                <Button
                    aria-label="Відкрити календар"
                    className={style.calendarButton}
                >
                    <DataIcon />
                </Button>
                <DateInput className={style.dateInput}>
                    {(segment) => <DateSegment segment={segment} />}
                </DateInput>
            </Group>

            <Popover 
                className={style.popover} 
                placement="bottom start"
                offset={8}
            >
                <Dialog className={style.dialog}>
                    <Calendar className={style.calendar}>
                        <header className={style.calendarHeader}>
                            <Button slot="previous" className={style.navButton}>‹</Button>
                            <Heading className={style.heading} />
                            <Button slot="next" className={style.navButton}>›</Button>
                        </header>
                        <CalendarGrid className={style.calendarGrid}>
                            <CalendarGridHeader>
                                {(day) => (
                                    <CalendarHeaderCell className={style.headerCell}>
                                        {day}
                                    </CalendarHeaderCell>
                                )}
                            </CalendarGridHeader>
                            <CalendarGridBody>
                                {(date) => (
                                    <CalendarCell date={date} className={style.cell} />
                                )}
                            </CalendarGridBody>
                        </CalendarGrid>
                    </Calendar>
                </Dialog>
            </Popover>
        </DatePicker>
    );
};