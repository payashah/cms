import React from 'react'
import "./DeleteModal.css"
import ReactDOM from "react-dom"
import { useEffect } from 'react'

export default function DeleteModal({ accept, reject }) {

    useEffect(() => {


        const checkKey = (event) => {
            if (event.keyCode !== this) {
                reject()
            }
        }
        window.addEventListener("keydown", checkKey)

        return () => window.removeEventListener("keydown", checkKey)
    })

    return ReactDOM.createPortal(

        <div className='modals-parent active'>
            <div className='delete-modal-ctrl'>
                <div className='delete-modal'>
                    <h1 className='delete-modal-title'>آیا از حذف اطمینان دارید ؟</h1>

                    <div className='delete-modal-btnBox'>
                        <button className='delete-modal-btnBox-btn accept' onClick={() => accept()}>بله</button>
                        <button className='delete-modal-btnBox-btn reject' onClick={() => reject()}>خیر</button>
                    </div>
                </div>
            </div>
        </div>, document.getElementById("modals-parent")
    )
}
