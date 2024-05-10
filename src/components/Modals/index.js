import './index.css';
import { setDate } from '../../context';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { USER, KEY_STATUS_OPTIONS } from '../../constants';
export default function Modals({ title, data, open, setOpen }) {

    const { user } = data;

    const [to, setTo] = useState(new Date())

    const [from, setFrom] = useState(new Date())

    const { register, watch, handleSubmit, formState: { errors } } = useForm()

    useEffect(() => {

        watch((value) =>
            setTo(value.to)
        )

        watch((value) =>
            setFrom(value.from)
        )

    }, [])

    const onsubmit = (data) => {

        const DAYS = setDate(data)

        const USERS = USER.staff.find((el) => el.name == user.name);

        DAYS.forEach(el => {

            const OBJECT = {
                status: data.status,
                works_hours: 12,
                date: el.format('YYYY-MM-DD')
            }

            USERS.timesheet.push(OBJECT)
        })

        setOpen(!open)

    }

    return (
        <div className="overlay" onClick={() => setOpen(!open)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="moadl-title">{title}</div>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="modal-content">
                        <div className="staff-profile">
                            <div className="staff-name">{user.name}</div>
                            <div className="staff-position">{user.position}</div>
                        </div>
                        <div className="modal-contros">
                            <span>Временной период</span>
                            <div className="controls-group">
                                <div className="modal-control" style={errors.from && { border: "1px solid red" }}>
                                    <label className="control-label">С</label>
                                    <input
                                        type="date"
                                        value={from}
                                        {...register("from", {
                                            required: 'Выберите начальну дату'
                                        })}
                                    />
                                </div>
                                <div className="modal-control" style={errors.to && { border: "1px solid red" }}>
                                    <label className="control-label">По</label>
                                    <input
                                        type="date"
                                        value={to}
                                        {...register("to", {
                                            required: 'Выберите конечную дату',
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="modal-control" style={errors.status && { border: "1px solid red" }}>
                                <select {...register("status", { required: 'Выберите статус' })}>
                                    {KEY_STATUS_OPTIONS.map((el, i) => (
                                        <option value={el.value} key={i}>{el.status}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className='mr-button send'>Подтвердить</button>
                        <button type='button' className='mr-button default' onClick={() => setOpen(!open)}>Отменить</button>
                    </div>
                </form>
            </div>
        </div>
    )

}