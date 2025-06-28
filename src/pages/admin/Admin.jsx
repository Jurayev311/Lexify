import React from 'react'
import logo from '../../assets/logo.svg'
import { FaAnglesLeft } from "react-icons/fa6";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

import { NavLink } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='flex'>
        <div className='w-[250px] bg-[#fff] p-5'>
            <div className='flex items-center justify-between border-b-1 border-[#DBDBDB] pb-[28px]'>
                <div><img src={logo} alt="dashboard logo" /></div>
                <div className='text-[#787486] w-5 h-5 cursor-pointer'><FaAnglesLeft /></div>
            </div>
            <ul className='text-[#787486] space-y-0.5'>
                <li className='flex items-center gap-3.5 text-[16px] font-medium hover:bg-[#F5F5F5] py-3 px-0.5 mt-[31px]'>
                    <div className='text-2xl'><HiOutlineViewGrid /></div>
                    <NavLink to={"wordsets"}>Global Wordsets</NavLink>
                </li>
                <li className='flex items-center gap-3.5 text-[16px] font-medium hover:bg-[#F5F5F5] py-3 px-0.5'>
                    <div className='text-2xl'><HiOutlineChatBubbleBottomCenter /></div>
                    <NavLink to={"words"}>My words</NavLink>
                </li>
                <li className='flex items-center gap-3.5 text-[16px] font-medium hover:bg-[#F5F5F5] py-3 px-0.5'>
                    <div className='text-2xl'><HiOutlineClipboardList /></div>
                    <NavLink to={"statistics"}>My statistics</NavLink>
                </li>
                <li className='flex items-center gap-3.5 text-[16px] font-medium hover:bg-[#F5F5F5] py-3 px-0.5'>
                    <div className='text-2xl'><IoSettingsOutline /></div>
                    <NavLink to={"settings"}>Settings</NavLink>
                </li>
            </ul>
        </div> 

        <div className='flex-1 min-h-screen bg-[#F5F5F5]'></div>
    </div>
  )
}

export default React.memo(Admin)