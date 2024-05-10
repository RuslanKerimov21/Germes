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

function setRowData(data) {

    let MONTH, YEAR;

    let ARRAY_DATA = []

    MONTH = data.getMonth() + 1

    YEAR = data.getFullYear()

    const DATE = new Date(YEAR, MONTH, 1);

    while (DATE.getMonth() === MONTH) {

        ARRAY_DATA.push(DAYS_WEEK[DATE.getDay()]);

        DATE.setDate(DATE.getDate() + 1);

    }

    return ARRAY_DATA;
}


function sortsData(date, shedule) {

    let BACKGROUND;

    shedule?.forEach(el => {

        let DAYS = date.getDate();

        let SHEDULE = new Date(el.date).getDate();

        if (DAYS === SHEDULE) {

            switch (el.status) {
                case 'НН':
                    BACKGROUND = STATUS_COLORS.no_show;
                    break;
                case 'ОТ':
                    BACKGROUND = STATUS_COLORS.vacation;
                    break;
                case 'Б':
                    BACKGROUND = STATUS_COLORS.medical;
                    break;
                case 'В':
                    BACKGROUND = STATUS_COLORS.weekend;
                    break;
                default:
                    BACKGROUND = STATUS_COLORS.working_days;
            }

        }

    });

    return BACKGROUND;
}


function sortsDataStatus(date, shedule) {

    let STATUS;

    shedule?.forEach(el => {

        let DAYS = date.getDate();

        let SHEDULE = new Date(el.date).getDate();

        if (DAYS === SHEDULE) {

            STATUS = el.value;

        }

    });

    return STATUS;

}

export { setRow, setRowData, sortsData, sortsDataStatus }