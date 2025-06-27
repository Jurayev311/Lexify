import React from 'react'
import subscribe from '../../assets/Subscribe.svg'

const Subscribe = () => {
  return (
    <section className='bg-[#0C99FF]'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div className='text-white'>
                    <h2 className='text-[42px] font-bold mb-[7px]'>Subscribe for Updates</h2>
                    <p className='text-[16px] font-normal mb-[34px]'>Don't miss out on the latest updates and exclusive content. Subscribe now and be the first to know when our AI-scored practice test is live. Stay ahead in your language learning journey!</p>
                    <form className='relative' action="">
                        <input className=' relative w-[656px] h-[53px] bg-white text-[#525252] indent-5 rounded-[13px] outline-0' type="email" placeholder='Enter your Email' required/>
                        <button className='absolute top-[6.1px] right-[305px] pt-[8px] pb-[8px] pl-[17px] pr-[17px] bg-[#67CF00] rounded-[6px] active:scale-95 duration-150 cursor-pointer'>Subscribe</button>
                    </form>
                </div>

                <div>
                    <img src={subscribe} alt="image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default React.memo(Subscribe)