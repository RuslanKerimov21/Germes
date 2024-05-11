import { useState } from "react";
import { USER } from '../../constants';
import { Modals, Pagination, Table } from "../../components";
export default function WorkTablePage() {
    const [date, setDate] = useState(null)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(new Date());
    return (
        <div className="page-container">
            <div className="table-filter">
                <div className="mr-filter">
                    <label className="mr-label">Дата</label>
                    <div className="mr-controls">
                        <input
                            id="date"
                            type="date"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="table-wrapper">
                {open ?
                    <Modals
                        setOpen={setOpen}
                        data={date} open={open}
                        title="Изменение графика"
                    />
                    :
                    null
                }
                <Table data={value} open={open} setOpen={setOpen} setDate={setDate} />
                <Pagination pageSize={10} items={USER.staff} />
            </div>
        </div>
    )
}