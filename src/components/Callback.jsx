import React from 'react'
import Container from './Container'

const Callback = () => {
  return (
   <section>
    <Container>
        <div className='w-[872px] mx-auto flex justify-between items-center gap-[24px] mt-[172px] '>
            <div>
                <img src="images/callBackimg.png" alt="callBack" />
                <h4 className='text-[24px] font-bold  font-primaryFont text-[#F95C19] '>REQUEST A CALLBACK</h4>
                <h3 className='text-[39px]  font-extrabold leading-[110%] text-[#222132] w-[412px]  font-primaryFont mt-[20px]  '>We will contact in the shortest time.</h3>
                <p className='text-[25px] font-semibold leading-[120%] text-[#9291A1]  font-primaryFont mt-[9px]  '>Monday to Friday, 9am-5pm.</p>
            </div>
            <div>
                <input className='w-[423px] h-[49px] border border-[#C5C5D2] rounded-[8px] bg-transparent placeholder:text-[16px] placeholder:font-primaryFont placeholder:leading-[120%]  placeholder:text-[#9291A1] pl-[19px] ' type="text" placeholder='Name' />
                <input className='w-[423px] h-[49px] border border-[#C5C5D2] rounded-[8px] bg-transparent placeholder:text-[16px] placeholder:font-primaryFont placeholder:leading-[120%]  placeholder:text-[#9291A1] pl-[19px] mt-[16px] ' type="text" placeholder='Email' />
                <textarea className='w-[423px] h-[154px] border border-[#C5C5D2] rounded-[8px] bg-transparent placeholder:text-[16px] placeholder:font-primaryFont placeholder:leading-[120%]  placeholder:text-[#9291A1] pl-[19px] mt-[16px] pt-[13px]  ' type="text" placeholder='Message' />
            </div>
        </div>
    </Container>
   </section>
  )
}

export default Callback