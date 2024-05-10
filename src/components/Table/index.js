import './index.css';
import React from 'react';
import { USER } from '../../constants';
import { setRowData, setRow, sortsData, sortsDataStatus } from '../../context';
export default function Table({ data }) {

    const date = new Date(data)

    const calendar = setRow(date)

    const row_data = setRowData(date)

    const dateList = [
        { date: '2024-5-1', status: 'НН', value: 'НН' },
        { date: '2024-5-3', status: 'ОТ', value: 'ОТ' },
        { date: '2024-5-2', status: 'Б', value: 'ОТ' },
        { date: '2024-5-4', status: 'В', value: 'В' },
        { date: '2024-5-5', status: 'Д', value: 11 },
        { date: '2024-5-6', status: 'Д', value: 11 },
        { date: '2024-5-7', status: 'Д', value: 11 },
        { date: '2024-5-8', status: 'Д', value: 11 },
        { date: '2024-5-9', status: 'Д', value: 11 },
        { date: '2024-5-10', status: 'Д', value: 11 },
        { date: '2024-5-11', status: 'Д', value: 11 },
        { date: '2024-5-12', status: 'Д', value: 11 },
        { date: '2024-5-13', status: 'Д', value: 11 },
        { date: '2024-5-14', status: 'Д', value: 11 },
        { date: '2024-5-15', status: 'В', value: 'В' },
        { date: '2024-5-16', status: 'В', value: 'В' },
        { date: '2024-5-17', status: 'В', value: 'В' },
        { date: '2024-5-18', status: 'В', value: 'В' },
        { date: '2024-5-19', status: 'В', value: 'В' },
        { date: '2024-5-20', status: 'В', value: 'В' },
        { date: '2024-5-21', status: 'В', value: 'В' },
        { date: '2024-5-22', status: 'В', value: 'В' },
        { date: '2024-5-23', status: 'В', value: 'В' },
        { date: '2024-5-24', status: 'Д', value: 'Д' },
        { date: '2024-5-25', status: 'Д', value: 'Д' },
        { date: '2024-5-26', status: 'Д', value: 'Д' },
        { date: '2024-5-27', status: 'Д', value: 'Д' },
        { date: '2024-5-28', status: 'Д', value: 'Д' },
        { date: '2024-5-29', status: 'НН', value: 'НН' },
        { date: '2024-5-30', status: 'НН', value: 'НН' },
        { date: '2024-5-31', status: 'В', value: 'В' },
    ]

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
                        {calendar.map((el, i) => (
                            <td className="td control" style={{ background: sortsData(el.date, dateList) }} onClick={() => console.log(el)} key={i}>
                                {sortsDataStatus(el.date, dateList)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}