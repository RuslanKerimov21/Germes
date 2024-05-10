
import { DAYS_WEEK } from '../constants';
export default function setRowData(data) {

    let MONTH, YEAR;

    let ARRAY_DATA = []

    MONTH = data.getMonth()

    YEAR = data.getFullYear()

    const DATE = new Date(YEAR, MONTH, 1);

    while (DATE.getMonth() === MONTH) {

        ARRAY_DATA.push(DAYS_WEEK[DATE.getDay()]);

        DATE.setDate(DATE.getDate() + 1);

    }

    return ARRAY_DATA;
}