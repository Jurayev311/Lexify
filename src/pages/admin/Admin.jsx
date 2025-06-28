import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink, Outlet } from 'react-router-dom';

const Admin = () => {
  const [SidebarOpen, SetSidebaropen] = useState(true);

  return (
    <div className='flex'>
      {/* sidebar */}
      <div
        className={`bg-[#fff] p-5 transition-all duration-300 ${
          SidebarOpen ? "w-[250px]" : "w-[60px]"
        }`}
      >
        <div className='flex items-center justify-between border-b border-[#DBDBDB] pb-[28px]'>
          {SidebarOpen && (
            <div>
              <img src={logo} alt="dashboard logo" />
            </div>
          )}
          <div
            className='text-[#787486] w-5 h-5 cursor-pointer'
            onClick={() => SetSidebaropen(!SidebarOpen)}
          >
            {SidebarOpen ? <FaAnglesLeft /> : <FaAnglesRight />}
          </div>
        </div>

        <ul className='text-[#787486] space-y-1'>
          <NavLink
            to={"wordsets"}
            className='flex items-center gap-3.5 text-[16px] font-medium rounded-xl hover:bg-[#F5F5F5] py-3 px-0.5 mt-[31px]'
          >
            <div className='text-2xl'><HiOutlineViewGrid /></div>
            {SidebarOpen && <span>Global Wordsets</span>}
          </NavLink>
          <NavLink
            to={"words"}
            className='flex items-center gap-3.5 text-[16px] font-medium rounded-xl hover:bg-[#F5F5F5] py-3 px-0.5'
          >
            <div className='text-2xl'><HiOutlineChatBubbleBottomCenter /></div>
            {SidebarOpen && <span>My words</span>}
          </NavLink>
          <NavLink
            to={"my-statistics"}
            className='flex items-center gap-3.5 text-[16px] font-medium rounded-xl hover:bg-[#F5F5F5] py-3 px-0.5'
          >
            <div className='text-2xl'><HiOutlineClipboardList /></div>
            {SidebarOpen && <span>My statistics</span>}
          </NavLink>
          <NavLink
            to={"settings"}
            className='flex items-center gap-3.5 text-[16px] font-medium rounded-xl hover:bg-[#F5F5F5] py-3 px-0.5'
          >
            <div className='text-2xl'><IoSettingsOutline /></div>
            {SidebarOpen && <span>Settings</span>}
          </NavLink>
        </ul>
      </div>

      {/* sahifa va header */}
      <div className='flex-1 min-h-screen bg-[#F5F5F5]'>
        {/* header */}
        <div className='w-full h-[88px] bg-[#fff] flex items-center'>
          <nav className='flex items-center justify-between w-full ml-[46px] mr-[46px]'>
            <ul className='flex gap-[38px] text-[14px] font-normal'>
              <NavLink className="py-1 px-1 rounded-xl" to={'add-words'}>Add Words</NavLink>
              <NavLink className="py-1 px-1 rounded-xl" to={'quizzes'}>Quizzes</NavLink>
              <NavLink className="py-1 px-1 rounded-xl" to={'statistics'}>Statistics</NavLink>
              <NavLink className="py-1 px-1 rounded-xl" to={'plans'}>Plans</NavLink>
            </ul>
            <div className='flex items-center gap-[15px]'>
              <div className='flex items-center gap-[10px] text-xl'>
                <button className='cursor-pointer border border-[#E7EAE9] hover:bg-[#E7EAE9] duration-200 rounded-md p-1'><IoIosNotificationsOutline /></button>
                <CgProfile className='text-2xl'/>
              </div>
              <h2 className='text-[14px] cursor-default'>Foydalanuvchi</h2>
            </div>
          </nav>
        </div>

        {/* sahifa kontenti */}
        <div className='p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Admin)
