import './index.css';
import { Link, NavLink } from 'react-router-dom';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-inner">
                <div className="sidebar-header"><Logo /></div>
                <nav className="sdiebar-nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to={`/`}> <SpaceDashboardIcon />Основное</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/work_table`}> <EditCalendarOutlinedIcon />Табель работчего времени</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/statistic`}><EqualizerOutlinedIcon />Статистика текущей смены</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/operation`}><HandymanOutlinedIcon />Операции</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/cadr`}> <EditCalendarOutlinedIcon />Кадры</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/luvr`}> <TodayOutlinedIcon />ЛУВР</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/struct`}><AccountTreeOutlinedIcon />Структуры</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/operations`}><TableViewOutlinedIcon />Группы операций</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/podrabotki`}><AccessTimeOutlinedIcon />Подработки</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}