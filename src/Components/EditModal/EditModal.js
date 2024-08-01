import React from 'react'
import "./EditModal.css"
import ReactDOM from "react-dom"
import { useEffect } from 'react';


export default function EditModal({ children, close, submit }) {

    useEffect(() => {


        const checkKey = (event) => {
            if (event.keyCode !== this) {
                close()
            }
        }
        window.addEventListener("keydown", checkKey)

        return () => window.removeEventListener("keydown", checkKey)
    })

    return ReactDOM.createPortal(
        <div className='modals-parent active'>
            <form className='editModal'>

                <h1 className='editModal-title'>اطلاعات جدید را وارد نمایید : </h1>

                {children}

                <div className='editModal-btnBox'>
                    <button className='editModal-btnBox-btn' onClick={submit} > ثبت اطلاعات</button>
                </div>
            </form>
        </div>, document.getElementById("modals-parent")
    )
}
