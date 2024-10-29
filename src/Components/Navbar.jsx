import React from "react";
import { MdEmail } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <div dir="rtl" className="w-full h-20 shadow-lg flex justify-center items-center px-8">
            <div className="flex basis-1/12 flex-col items-center">
                <MdEmail className=" text-red-500 text-4xl" />
                <span>mabdi0258@gmail.com</span>
            </div>
            <ul className="flex  basis-10/12 -mr-10 items-center gap-7 justify-center ">
                <li><NavLink>موبایل</NavLink></li>
                <li><NavLink>تبلت</NavLink></li>
                <li><NavLink>لپ تاپ</NavLink></li>
            </ul>
            <div>
                <FaShoppingCart className="text-2xl text text-purple-400 " />
            </div>
        </div>
    )
}

export default Navbar;
