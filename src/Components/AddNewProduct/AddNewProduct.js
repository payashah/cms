import React from 'react'
import "./AddNewProduct.css"

export default function () {
    return (
        <div className='addNewProduct-ctrl'>
            <div className='addNewProduct'>
                <h1 className='addNewProduct-title'>افزودن محصول جدید :</h1>

                <div className='addNewProduct-inputBox'>
                    <input className='addNewProduct-inputBox-input' type="text" placeholder='' />
                    <input className='addNewProduct-inputBox-input' type="text" placeholder='' />
                    <input className='addNewProduct-inputBox-input' type="text" placeholder='' />
                    <input className='addNewProduct-inputBox-input' type="text" placeholder='' />
                    <input className='addNewProduct-inputBox-input' type="text" placeholder='' />
                    <input className='addNewProduct-inputBox-input' type="text" placeholder='' />
                </div>
                <div className='addNewProduct-btnBox'>
                    <button className='addNewProduct-btnBox-btn'>ثبت محصول</button>
                </div>
            </div>
        </div>
    )
}
