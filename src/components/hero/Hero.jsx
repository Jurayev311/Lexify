import React from 'react'
import hero from '../../assets/hero.svg'

const Hero = () => {
  return (
    <section className='mt-[92px]'>
      <div className='containerL bg-[#F0F7FF] h-[699px] rounded-[36px]'>

        <div className='container flex items-center justify-center'>

          <div className='w-1/2'>
            <h2 className='text-[48px] font-semibold leading-[57.5px]'>Boost your language skills quickly and efficiently – <span className='text-[#0C99FF]'> start with Lexify today!</span></h2>

            <p className='text-[18px] font-normal mt-[16px] leading-[32px] text-[#6B6B6B] mb-[16px]'>Lexify is your smart solution for mastering new words! Powered by AI technology, Lexify offers personalized learning plans, interactive tests, and detailed progress tracking to help you improve faster.Take your language learning journey to the next level with ease and efficiency!</p>

            <button className='pt-[16px] pb-[16px] pl-[38px] pr-[38px] bg-[#67CF00] mr-[45px] rounded-[1px] text-white cursor-pointer'>Download The Guide Now</button>
            <button className='pt-[16px] pb-[16px] pl-[65px] pr-[65px] bg-[#fff] text-[#6B6B6B] rounded-[1px] hover:bg-[#E6E6E6] duration-150 cursor-pointer'>Get Started</button>
          </div>

          <div className='w-1/2'>
            <img src={hero} alt="about image" />
          </div>

        </div>


      </div>
    </section>
  )
}

export default React.memo(Hero)