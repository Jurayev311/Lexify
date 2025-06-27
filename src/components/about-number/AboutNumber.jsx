import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const AboutNumber = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section ref={ref}>
      <div className='containerS bg-[#FFFFFF] h-[216px] translate-y-[-90px] rounded-[16px] shadow-md'>
        <div className='flex items-center justify-center h-full'>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 w-full max-w-4xl px-8'>
            
            <div className='text-center flex-1'>
              <h3 className='text-4xl md:text-[56px] font-bold text-[#0C99FF] mb-3.5'>
                {inView ? <CountUp end={10} duration={5} /> : '0'}k+
              </h3>
              <p className='text-[#6B6B6B] text-sm md:text-base font-normal'>
                New words card
              </p>
            </div>

            <div className='hidden sm:block w-px h-16 bg-gray-200'></div>

            <div className='text-center flex-1'>
              <h3 className='text-4xl md:text-[56px] font-bold text-[#0C99FF] mb-3.5'>
                {inView ? <CountUp end={100} duration={5}/> : '0'}+
              </h3>
              <p className='text-[#6B6B6B] text-sm md:text-base font-normal'>
                Interactive lessons
              </p>
            </div>

            <div className='hidden sm:block w-px h-16 bg-gray-200'></div>

            <div className='text-center flex-1'>
              <h3 className='text-4xl md:text-[56px] font-bold text-[#0C99FF] mb-3.5'>
                {inView ? <CountUp end={24} duration={5} /> : '0'} / {inView ? <CountUp end={7} duration={5} /> : '0'}
              </h3>
              <p className='text-[#6B6B6B] text-sm md:text-base font-normal'>
                Support service
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(AboutNumber)