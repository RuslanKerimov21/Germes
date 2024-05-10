import { useState } from "react";
import { Modals, Table } from "../../components";
export default function WorkTablePage() {
    const [data, setData] = useState()
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
                {open ? <Modals title="Редактирование ячейки" open={open} data={data} setOpen={setOpen} /> : null}
                <Table open={open} setOpen={setOpen} setData={setData} data={value} />
            </div>
        </div>
    )
}