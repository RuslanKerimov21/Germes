import './index.css';
import React from 'react';
import { USER } from '../../constants';
import { setRow, sortsData, sortsDataStatus } from '../../context';
export default function Table({ data, open, setOpen, setDate }) {

    const DATE = new Date(data)

    const CALENDAR = setRow(DATE)

    const setStatus = (date, user) => {

        setOpen(!open)

        setDate({ date: date, user: user })

    }

    return (
        <table className="table">
            <thead className="thead">
                <tr className="tr">
                    <th className='th title'> <br /> <br />№</th>
                    <th className='th title'> <br /> <br />ФИО</th>
                    <th className='th title'> <br /> <br />Должность</th>
                    {CALENDAR.map((el, i) => (
                        <th className='th date' key={i}>{el.week} <br /> <br /> {i + 1}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="tbody">
                {USER.staff.map((el, i) => (
                    <tr className="tr" key={i} style={{ background: i % 2 ? "#f5f5f5" : "#fff" }}>
                        <td className='td data'>{i + 1}</td>
                        <td className='td data'>{el.name} <br /> <span className='service_number'>{el.service_number}</span></td>
                        <td className='td data'>{el.position}</td>
                        {CALENDAR.map((elem, i) => (
                            <td className="td control" style={{ background: sortsData(elem.date, el.timesheet) }} onClick={() => setStatus(elem, el)} key={i}>
                                {sortsDataStatus(elem.date, el.timesheet)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}