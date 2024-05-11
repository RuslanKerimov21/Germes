import './index.css';
import React from 'react';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
export default function Pagination({ pageSize, currentPage, items }) {


    const START = currentPage * pageSize;

    const END = START + pageSize;

    items.forEach((el, i) => {

       

    })

    const pagintaionNav = (index) => {
        console.log(index)
    }

    return (
        <ul className="mr-paginations" style={{ marginTop: 40 }}>
            <li className="pagination-control" onClick={() => pagintaionNav(-1)}>
                <KeyboardArrowLeftOutlinedIcon />
                Назад
            </li>

            <li className="pagination_item">1</li>

            <li className="pagination-control" onClick={() => pagintaionNav(+1)}>
                Вперед<KeyboardArrowRightOutlinedIcon />
            </li>
        </ul>
    )
}