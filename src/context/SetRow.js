
import moment from 'moment';

import { DAYS_WEEK } from '../constants';

export default function setRow(data) {

    let MONTH, YEAR;

    let ARRAY_DATA = []

    MONTH = data.getMonth()

    YEAR = data.getFullYear()

    const DATE = new Date(YEAR, MONTH, 1)

    while (DATE.getMonth() == MONTH) {

        ARRAY_DATA.push({ week: DAYS_WEEK[DATE.getDay()], date: DATE.getDay() });

        DATE.setDate(DATE.getDate() + 1);

    }

    let DAYS_ARRAY = [];

    let DASY_MONTH = moment().daysInMonth();

    while (DASY_MONTH) {

        let CURRENT_DATE = moment().date(DASY_MONTH);

        DAYS_ARRAY.push({ week: CURRENT_DATE });

        DASY_MONTH--;

    }

    return ARRAY_DATA;
}