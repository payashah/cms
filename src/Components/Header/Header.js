import React from 'react'
import "./Header.css"
import { GoSearch } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";




export default function Header() {
    return (
        <div className='header-ctrl'>
            <div className='header'>
                <div className='header-right'>
                    <img className='header-right-img' src="./img/paya.png" alt="pic" />
                    <div className='header-right-textBox'>
                        <p className='header-right-textBox-name'>پایا شاه ملکی</p>
                        <p className='header-right-textBox-job'>مسئول فنی  </p>
                    </div>
                </div>

                <div className='header-left'>
                    <div className='header-left-searchBox'>
                        <GoSearch className='header-left-searchBox-icon'></GoSearch>
                        <input className='header-left-searchBox-input' type="text" />
                    </div>
                    <div className='header-left-notifeBox'>
                        <IoNotifications className='header-left-notifeBox-notife'></IoNotifications>
                        <MdOutlineLightMode className='header-left-notifeBox-mode'></MdOutlineLightMode>
                    </div>
                    <div className='header-left-exitBox'>
                        <button className='header-left-exitBox-btn'>خروج</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
