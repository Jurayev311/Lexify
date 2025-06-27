import React from 'react'
import info from '../../assets/info.png'
import info2 from '../../assets/info2.png'
import info3 from '../../assets/info3.png'
import info4 from '../../assets/info4.png'

const Info = () => {
  return (
    <section className='pb-[30px]'>
      <div className='containerS'>
        <div className='flex items-center justify-between gap-12 flex-wrap md:flex-nowrap'>
          
          <div className='relative flex-shrink-0'>
            <div className='relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden text-black'>
              
              <div className='bg-[#B5D3FF] px-6 py-3 w-full rounded-t-xl mb-0 inline-block border-none text-center'>
                <p className='text-black font-semibold text-[32px]'>
                  Flash <span className='text-[#0EA5E9]'>Quizzes</span>
                </p>
              </div>

              <div className='grid grid-cols-2 gap-4 p-6'>
                
                <div className='w-[143px] h-32 rounded-xl shadow-md border border-[#4697FF] overflow-hidden bg-[#4ECDC4]
                  transform transition duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl'>
                  <div className='bg-[#4ECDC4] px-2 py-1'>
                    <div className='text-[11px] font-semibold'>My words</div>
                  </div>
                  <div className='p-2 flex items-center justify-center h-20 bg-[#4ECDC4]'>
                    <div className='w-[90px] h-[60px] bg-gray-200 rounded flex items-center justify-center'>
                      <img src={info} className='w-[90px] h-[60px]' alt="words image" />
                    </div>
                  </div>
                </div>

                <div className='w-[143px] h-32 rounded-xl shadow-md border border-[#4697FF] overflow-hidden bg-white
                  transform transition duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl'>
                  <div className='bg-white px-2 py-1'>
                    <div className='text-[11px] font-semibold'>Oxford Word Skills</div>
                  </div>
                  <div className='p-2 flex items-center justify-center h-20 bg-white'>
                    <div className='w-[90px] h-[60px] bg-gray-200 rounded flex items-center justify-center'>
                      <img src={info2} className='w-[90px] h-[60px]' alt="oxford image" />
                    </div>
                  </div>
                </div>

                <div className='w-[143px] h-32 rounded-xl shadow-md border border-[#4697FF] overflow-hidden bg-white
                  transform transition duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl'>
                  <div className='bg-white px-2 py-1'>
                    <div className='text-[11px] font-semibold'>Essential words</div>
                  </div>
                  <div className='p-2 flex items-center justify-center h-20 bg-white'>
                    <div className='w-[90px] h-[60px] bg-gray-200 rounded flex items-center justify-center'>
                      <img src={info3} className='w-[90px] h-[60px]' alt="essential image" />
                    </div>
                  </div>
                </div>

                <div className='w-[143px] h-32 rounded-xl shadow-md border border-[#4697FF] overflow-hidden bg-white
                  transform transition duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl'>
                  <div className='bg-white px-2 py-1'>
                    <div className='text-[11px] font-semibold'>Vocabulary in Use</div>
                  </div>
                  <div className='p-2 flex items-center justify-center h-20 bg-white'>
                    <div className='w-[90px] h-[60px] bg-gray-200 rounded flex items-center justify-center'>
                      <img src={info4} className='w-[90px] h-[60px]' alt="vocabulary image" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className='absolute -bottom-10 left-[-70px] w-[278px] h-[278px] bg-gradient-to-br from-[#64BD0B] to-[#4a9208] rounded-full -z-10'></div>
          </div>

          <div className='flex-1 mt-6 md:mt-0'>
            <h2 className='text-[42px] font-semibold mb-[25px] leading-tight'>
              Master English <span className='text-[#64BD0B]'>AI-Powered Quizzes!</span>
            </h2>
            <p className='font-normal text-[16px] text-gray-600 leading-relaxed'>
              Dive into our 5000+ AI-powered quizzes designed to make mastering new words fast, fun, and effective! Whether you're tackling Essential Vocabulary, exploring Oxford Word Skills, or practicing your own personal word lists, we've got you covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Info)
