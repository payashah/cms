import React from 'react'
import "./DetailsModal.css"
import ReactDOM from "react-dom"
import { GrClose } from "react-icons/gr";


export default function DetailsModal({ close }) {
    return ReactDOM.createPortal(
        <div className='modals-parent active'>
            <div className='detailsModal '>
                <GrClose className='detailsModal-closebtn' onClick={close}></GrClose>

                <table className='detailsModal-table'>
                    <thead>
                        <tr className='detailsModal-table-tr'>
                            <th className='detailsModal-table-tr-th'>اسم</th>
                            <th className='detailsModal-table-tr-th'>قیمت</th>
                            <th className='detailsModal-table-tr-th'>محبوبیت</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className='detailsModal-table-tr'>
                            <th className='detailsModal-table-tr-td'>موبایل</th>
                            <th className='detailsModal-table-tr-td'>15,000,000 تومان</th>
                            <th className='detailsModal-table-tr-td'>90%</th>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>, document.getElementById("modals-parent")
    )
}
