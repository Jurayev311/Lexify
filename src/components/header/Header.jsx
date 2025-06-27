import React from 'react'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { LuExternalLink } from "react-icons/lu";

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-white/50 backdrop-blur-[9px]'>
      <div className='container'>
        <nav className='flex items-center justify-between h-[73px]'>
          <div>
            <img src={logo} alt="logo image" />
          </div>

          <ul className='flex items-center gap-10 text-[14px] font-normal'>
            <li className='hover:text-[#0C99FF] duration-150'><NavLink to={'/add-words'}>Add Words</NavLink></li>
            <li className='hover:text-[#0C99FF] duration-150'><NavLink to={'/quizzes'}>Quizzes</NavLink></li>
            <li className='hover:text-[#0C99FF] duration-150'><NavLink to={'/add-words'}>Statistics</NavLink></li>
            <li className='hover:text-[#0C99FF] duration-150'><NavLink to={'/add-words'}>Plans</NavLink></li>
          </ul>

          <div className='flex gap-10 text-[14px] font-semibold'>
            <div className='flex items-center gap-3'>
              <button>Log In</button>
              <span><LuExternalLink /></span>
            </div>
            <button className='pt-[9px] pb-[9px] pl-[16px] pr-[16px] rounded-[8px] text-white bg-[#0C99FF]'>Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default React.memo(Header)