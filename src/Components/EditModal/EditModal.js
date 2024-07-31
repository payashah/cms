import React from 'react'
import "./EditModal.css"
import ReactDOM from "react-dom"
import { FaCloudUploadAlt } from "react-icons/fa";


export default function EditModal({ close, submit }) {

    return ReactDOM.createPortal(
        <div className='modals-parent active'>
            <form className='editModal'>

                <h1 className='editModal-title'>اطلاعات جدید را وارد نمایید : </h1>

                <div className='editModal-inputBox'>
                    <input className='editModal-inputBox-input' type="text" placeholder='نام محصول ...' />
                </div>

                <div className='editModal-inputBox'>
                    <input className='editModal-inputBox-input' type="text" placeholder='قیمت محصول ...' />
                </div>

                <div className='editModal-inputBox'>
                    <input className='editModal-inputBox-input' type="text" placeholder='موجودی محصول ...' />
                </div>

                <div className='editModal-inputBox'>
                    <input className='editModal-inputBox-input' type="text" placeholder='عکس محصول ...' />
                    <FaCloudUploadAlt className='editModal-inputBox-icon'></FaCloudUploadAlt>
                </div>

                <div className='editModal-inputBox'>
                    <input className='editModal-inputBox-input' type="text" placeholder='میزان محبوبیت محصول ...' />
                </div>

                <div className='editModal-inputBox'>
                    <input className='editModal-inputBox-input' type="text" placeholder='میزان فروش محصول ...' />
                </div>

                <div className='editModal-btnBox'>
                    <button className='editModal-btnBox-btn' onClick={submit} > ثبت اطلاعات</button>
                </div>
            </form>
        </div>, document.getElementById("modals-parent")
    )
}
