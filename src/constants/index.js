const USER = {
    username: "Дмитрий Иванченко",
    staff: [
        {
            username: "Иванов Иван Иванович",
            position: "Бригадир",
            ratio: 0.75,
            region: "Отбор",
            employee_schedule: [
                {
                    status: 'От',
                    date: new Date('2024-05-20'),
                    date_shedule: new Date('2024-05-20'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },

                  {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },

                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
                {
                    status: 'Нн',
                    date: new Date(),
                    date_shedule: new Date('2024-12-31'),
                },
            ]
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
    vacation: '#BFE9FF',
    medical: '#FFCDC3',
    weekend: '#E6E9F0',
    no_show: '#FF6964',
    works: '#FFF5F2',
    working_days: '#78D4BA',
}

const DAYS_WEEK = [
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Вс',
]

export { USER, COLORS, POSITION, DAYS_WEEK, STATUS_COLORS }