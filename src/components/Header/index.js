import './index.css';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-left"></div>
                    <div className="header-right">
                        <div className="notification">
                            <span className='count'>1</span>
                            <NotificationsNoneOutlinedIcon />
                        </div>
                        <div className="profile">
                            <div className="avatar"></div>
                            <span className='profile-name'>Иванов Даниил</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}