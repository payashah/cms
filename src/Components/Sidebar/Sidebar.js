import React from 'react'
import "./Sidebar.css"
import { IoHomeSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { AiTwotoneShopping } from "react-icons/ai";
import { BiSolidDollarCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar-ctrl'>
            <div className='sidebar'>
                <h1 className='sidebar-title'> کاربر عزیز به داشبورد خود خوش آمدید</h1>
                <ul className='sidebar-ul'>
                    <li className='sidebar-ul-li mainPage'>
                        <IoHomeSharp className='sidebar-ul-li-icon'></IoHomeSharp>
                        <p className='sidebar-ul-li-title'>صفحه اصلی</p>
                    </li>

                    <Link to="/Users" className='sidebar-ul-li active'>
                        <FaUsers className='sidebar-ul-li-icon'></FaUsers>
                        <p className='sidebar-ul-li-title'>کاربران</p>
                    </Link>

                    <Link to="/Products" className='sidebar-ul-li'>
                        <AiFillProduct className='sidebar-ul-li-icon'></AiFillProduct>
                        <p className='sidebar-ul-li-title'>محصولات</p>
                    </Link>

                    <Link to="/Comments" className='sidebar-ul-li'>
                        <FaCommentAlt className='sidebar-ul-li-icon'></FaCommentAlt>
                        <p className='sidebar-ul-li-title'>کامنت ها</p>
                    </Link>

                    <Link to="/Orders" className='sidebar-ul-li'>
                        <AiTwotoneShopping className='sidebar-ul-li-icon'></AiTwotoneShopping>
                        <p className='sidebar-ul-li-title'>سفارش ها</p>
                    </Link>

                    <Link to="/Offs" className='sidebar-ul-li'>
                        <BiSolidDollarCircle className='sidebar-ul-li-icon'></BiSolidDollarCircle>
                        <p className='sidebar-ul-li-title'>تخفیف ها</p>
                    </Link>


                </ul>
            </div>
        </div>
    )
}
