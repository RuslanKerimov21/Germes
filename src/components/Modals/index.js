import './index.css';
export default function Modals({ title, open, data, setOpen }) {
    return (
        <div className="overlay" onClick={() => setOpen(!open)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="moadl-title">{title}</div>
                <div className="staff-profile">
                    <div className="staff-name">{data.username}</div>
                    <div className="staff-position">{data.position}</div>
                </div>
            </div>
        </div>
    )

}