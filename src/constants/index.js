const USER = {
    CurrentUSerName: "Дмитрий Иванченко",
    staff: [
        {
            name: "Иванов Иван Иванович",
            position: "Бригадир",
            ratio: 0.75,
            region: "Отбор",
            service_number: '2627282882ТА',
            timesheet: []
        },
        {
            name: "Петров Дима Фольфович",
            position: "Кладовщик",
            ratio: 0.75,
            region: "Отбор",
            service_number: '2627282882ТА',
            timesheet: []
        },
        {
            name: "Владимир Владимирович Зюганов",
            position: "Оператор",
            ratio: 0.75,
            region: "Отбор",
            service_number: '2627282882ТА',
            timesheet: []
        },
        {
            name: "Дима Билан Иванов",
            position: "Оператор",
            ratio: 0.75,
            region: "Отбор",
            service_number: '2627282882ТА',
            timesheet: []
        },
        {
            name: "Артем Васильевич Иванов",
            position: "Бригадир",
            ratio: 0.75,
            region: "Отбор",
            service_number: '2627282882ТА',
            timesheet: []
        },
        {
            name: "Аида Владимировна Иванова",
            position: "Бригадир",
            ratio: 0.75,
            region: "Отбор",
            service_number: '2627282882ТА',
            timesheet: []
        },
        {
            name: "Джигеров Азим Кезимович",
            position: "Сборщик",
            ratio: 0.75,
            region: "Отбор",
            service_number: '2627282882ТА',
            timesheet: []
        },
        {
            name: "Ваня Иванов Дмитриеску",
            position: "Бригадир",
            ratio: 0.75,
            region: "Отбор",
            service_number: '2627282882ТА',
            timesheet: []
        },
        {
            name: "Петр Петров Петрович",
            position: "Бригадир",
            ratio: 0.75,
            region: "Отбор",
            service_number: '2627282882ТА',
            timesheet: []
        },
        {
            name: "Аня Петрова Ивановна",
            position: "Бригадир",
            ratio: 0.75,
            region: "Отбор",
            service_number: '2627282882ТА',
            timesheet: []
        },
        {
            name: "Аня Петрова Ивановна",
            position: "Бригадир",
            ratio: 0.75,
            region: "Отбор",
            service_number: '2627282882ТА',
            timesheet: []
        },
    ]
}

const COLORS = {
    operator: "#d6f1ff",
    foreman: "#f2deff",
    storekeeper: "#fff4d0",
}

const POSITION = {
    foreman: "Бригадир",
    storekeeper: "Кладовщик",
    operator: "Оператор",
}

const STATUS_COLORS = {
    year_vacation: '#BFE9FF',
    sick_days: '#FFCDC3',
    weekends: '#E6E9F0',
    absence_from_work: '#FF6964',
    working_days: '#78D4BA',
    maternity_leave: '#FFF5F2',
}

const DAYS_WEEK = [
    'Вс',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
]

const KEY_STATUS_OPTIONS = [
    {
        value: 'sick_days',
        status: 'Больничный лист',
        code: {
            numeric: 19,
            string: 'Б',
        }
    },
    {
        value: 'year_vacation',
        status: 'Ежегодны отспуск',
        code: {
            numeric: 19,
            string: 'ОТ',
        }
    },
    {
        value: 'maternity_leave',
        status: 'Отпуск по беременности',
        code: {
            numeric: 19,
            string: 'Б',
        }
    },
    {
        value: 'absence_from_work',
        status: 'Неявка по невыясненным причинам (до выяснения обстоятельств)',
        code: {
            numeric: 19,
            string: 'НН',
        }
    },
    {
        value: 'weekends',
        status: 'Выходные дни',
        code: {
            numeric: 19,
            string: 'НН',
        }
    }
]

export { USER, COLORS, POSITION, DAYS_WEEK, STATUS_COLORS, KEY_STATUS_OPTIONS }