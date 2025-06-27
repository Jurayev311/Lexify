import React, { useState } from 'react'
import signup from '../../assets/sign-up.png'
import facebook from '../../assets/fb.svg'
import google from '../../assets/google.svg'
import { NavLink } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaHome } from 'react-icons/fa'


const LoginComponent = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <section className="min-h-screen w-full flex items-stretch bg-white">
            {/* Left image side */}
            <div className="w-1/2 hidden md:flex items-center justify-center bg-blue-50">
                <img src={signup} alt="Sign up visual" className="object-cover w-full h-[720px] min-h-screen" />
            </div>
            {/* Right form side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 min-h-screen max-w-[500px] mx-auto relative">
                {/* Home icon top right with Tailwind ping animation */}
                <NavLink to="/" className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 transition text-blue-600 text-2xl z-10">
                    <span className="relative flex h-10 w-10">
                        <span className="animate-ping duration-1500 absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60"></span>
                        <span className="relative flex items-center justify-center w-10 h-10">
                            <FaHome />
                        </span>
                    </span>
                </NavLink>
                <h2 className="text-5xl font-normal text-center mb-[50px] underline">Log in</h2>
                <button className="flex items-center justify-center gap-2 border border-[#333333] text-[19px] text-[#333333] font-normal rounded-full py-2 mb-3 hover:bg-gray-50 transition w-full">
                    <img src={facebook} alt="Facebook" className="w-5 h-5" />
                    Continue with Facebook
                </button>
                <button className="flex items-center justify-center gap-2 border border-[#333333] text-[19px] text-[#333333] font-normal rounded-full py-2 mb-6 hover:bg-gray-50 transition w-full">
                    <img src={google} alt="Google" className="w-5 h-5" />
                    Continue with Google
                </button>
                <div className="flex items-center gap-2 mb-6">
                    <div className="flex-1 h-px bg-black" />
                    <span className="text-black text-xs">or</span>
                    <div className="flex-1 h-px bg-black" />
                </div>
                <form className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="email" className="block font-medium mb-1 text-[28px]">Email</label>
                        <input id="email" type="email" placeholder="user@email.com" className="px-4 py-2 rounded-[13px] bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium mb-1 text-[28px]">Password</label>
                        <div className="flex justify-end mb-1">
                            <NavLink to="/forgot-password" className="text-xs text-gray-700 underline hover:text-blue-800">Forgot password</NavLink>
                        </div>
                        <div className="relative">
                            <input id="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="px-4 py-2 rounded-[13px] bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10 w-full" />
                            <button type="button" tabIndex={-1} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" onClick={() => setShowPassword(v => !v)}>
                                {showPassword ? (
                                    <FaEye className="w-5 h-5" />
                                ) : (
                                    <FaEyeSlash className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="bg-[#0C99FF] text-white rounded-[13px] py-3 font-semibold text-lg mt-2 hover:bg-blue-500 cursor-pointer active:scale-95 duration-300 transition w-full">Log in</button>
                </form>
                <div className="text-center mt-4 text-gray-700">
                    New user? {' '}
                    <NavLink to="/sign-up" className="text-blue-600 underline hover:text-blue-800">Create an account</NavLink>
                </div>
            </div>
        </section>
    )
}

export default React.memo(LoginComponent)