import moment from "moment";
import { STATUS_COLORS, DAYS_WEEK } from "../constants";

function setRow(data) {

    let DAYS = [];

    let MONTH, YEAR, DATE;

    YEAR = data.getFullYear()

    MONTH = data.getMonth() + 1;

    const MONTH_LENGTH = new Date(YEAR, MONTH, 0).getDate();

    for (let i = 0; i < MONTH_LENGTH; i++) {

        DATE = new Date(YEAR, ~-MONTH, -~i)

        DAYS.push({ week: DAYS_WEEK[DATE.getDay()], date: DATE })

    }

    return DAYS;
}

function sortsData(date, shedule) {

    let BACKGROUND;

    shedule?.forEach(el => {

        let DAYS = date.getDate();

        let SHEDULE = new Date(el.date).getDate();


        if (DAYS === SHEDULE) {

            switch (el.status) {
                case 'absence_from_work':
                    BACKGROUND = STATUS_COLORS.absence_from_work;
                    break;
                case 'year_vacation':
                    BACKGROUND = STATUS_COLORS.year_vacation;
                    break;
                case 'sick_days':
                    BACKGROUND = STATUS_COLORS.sick_days;
                    break;
                case 'weekends':
                    BACKGROUND = STATUS_COLORS.weekends;
                    break;
                case 'maternity_leave':
                    BACKGROUND = STATUS_COLORS.maternity_leave;
                    break;
                default:
                    BACKGROUND = STATUS_COLORS.working_days;
            }
        }

    });

    return BACKGROUND;
}


function sortsDataStatus(date, timesheet) {

    let STATUS;

    timesheet?.forEach(el => {

        let DAYS = date.getDate();

        let SHEDULE = new Date(el.date).getDate();

        if (DAYS === SHEDULE) {

            switch (el.status) {
                case 'absence_from_work':
                    STATUS = 'НН';
                    break;
                case 'year_vacation':
                    STATUS = 'ОТ';
                    break;
                case 'sick_days':
                    STATUS = 'Б';
                    break;
                case 'weekends':
                    STATUS = 'В';
                    break;
                case 'maternity_leave':
                    STATUS = 'Р';
                    break;
                case 'working_days':
                    STATUS = el.works_hours;
                    break;
            }

        }

    });

    return STATUS;

}

function setDate(data) {

    let DAYS = []

    const END_DAY = moment(data.to)

    const START_DAY = moment(data.from)

    let DIFF_MARK = END_DAY.diff(START_DAY, 'day')

    for (let i = 0; i <= DIFF_MARK; i++) {

        DAYS.push(moment(START_DAY).add(i, 'day'))

    }

    return DAYS;

}

export { setRow, sortsData, sortsDataStatus, setDate }