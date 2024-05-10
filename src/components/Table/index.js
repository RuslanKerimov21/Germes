import './index.css';
import React from 'react';
import { USER } from '../../constants';
import { setRowData, setRow, sortsData } from '../../context';
export default function Table({ data }) {

    const date = new Date(data)

    const calendar = setRow(date)

    const row_data = setRowData(date)

    return (
        <table className="table">
            <thead className="thead">
                <tr className="tr">
                    <th className='th title'> <br /> <br />№</th>
                    <th className='th title'> <br /> <br />ФИО</th>
                    <th className='th title'> <br /> <br />Должность</th>
                    {calendar.map((el, i) => (
                        <th className='th date' key={i}>{el.week} <br /> <br /> {i + 1}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="tbody">
                {USER.staff.map((el, i) => (
                    <tr className="tr" key={i}>
                        <td className='td data'>{i + 1}</td>
                        <td className='td data'>{el.username}</td>
                        <td className='td data'>{el.position}</td>
                        {/* {setRowData(new Date(date))} */}
                        {el.employee_schedule.map((el, i) => (
                            <td className="td control" style={{ background: sortsData(calendar, el.date_shedule) }} onClick={() => console.log(el)} key={i}>{el.status}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}