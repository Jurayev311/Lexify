import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/footer-logo.svg'
import sms from '../../assets/sms.svg'
import phone from '../../assets/phone.svg'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 text-sm mt-[27px]">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        <div className="md:w-1/4 flex flex-col items-start">
          <span className="flex items-center gap-2 mb-2">
            <img src={logo} alt="Lexify Logo" className='w-[130px] h-[67px]' />
          </span>
          <p className="text-[#8B8B8B] text-[15px] font-normal mt-2">
            Lexify helps you master the English Test with expert tips, practice resources, and AI-powered learning tools. Achieve your target score with ease and confidence!
          </p>
        </div>
        <div className="flex flex-1 gap-8 xl:gap-20 justify-between">
          <div>
            <h4 className="mb-2 text-[#8B8B8B] text-[15px] font-normal">Links</h4>
            <ul className="space-y-4 text-[16.4px] font-normal text-[#000]">
              <li><NavLink to="/" className="hover:text-[#0C99FF]">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-[#0C99FF] duration-150">About Us</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-[#0C99FF] duration-150">Blog</NavLink></li>
              <li><NavLink to="/services" className="hover:text-[#0C99FF] duration-150">Services</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-[#8B8B8B] text-[15px] font-normal">Resources</h4>
            <ul className="space-y-4 text-[16.4px] font-normal text-[#000]">
              <li><NavLink to="/materials" className="hover:text-[#0C99FF] duration-150">Materials</NavLink></li>
              <li><NavLink to="/vocabulary" className="hover:text-[#0C99FF] duration-150">Vocabulary</NavLink></li>
              <li><NavLink to="/ai-test" className="hover:text-[#0C99FF] duration-150">AI-test</NavLink></li>
              <li><NavLink to="/word-lists" className="hover:text-[#0C99FF] duration-150">Word Lists</NavLink></li>
            </ul>
          </div>
          <div className="ml-0">
            <h4 className="text-[15px] font-normal text-[#8B8B8B] mb-2">Learn More</h4>
            <ul className="space-y-4 text-[16.4px] font-normal text-[#000]">
              <li><NavLink to="/works" className="hover:text-[#0C99FF] duration-150">Works</NavLink></li>
              <li><NavLink to="/faqs" className="hover:text-[#0C99FF] duration-150">FAQs</NavLink></li>
              <li><NavLink to="/stories" className="hover:text-[#0C99FF] duration-150">Stories</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#0C99FF] duration-150">Contact</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/4 flex flex-col gap-3 xl:ml-36">
          <h4 className="font-semibold mb-2 text-gray-800">Get In Touch</h4>
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-600 rounded-full p-2">
              <img src={sms} alt="sms" className='w-[28px] h-[28px]' />
            </span>
            <span>Email: Lexify@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-600 rounded-full p-2">
              <img src={phone} alt="phone" className='w-[28px] h-[28px]' />
            </span>
            <span>+92 341-091-5684</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center px-4">
        <div className='container flex items-center justify-between'>
          <span className="text-[#2F3235] text-[14.4px] font-light">© 2025 All Copyrights reserved</span>
        <div className="flex items-center gap-2 mt-2 md:mt-0 text-[#2F3235] font-light text-[12.6px]">
          <span className="hover:underline cursor-pointer">Terms of Use</span>
          <span className="text-gray-300">|</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)