import React from 'react'
import Container from './Container'
import { FaPlay } from "react-icons/fa";

const Delivery = () => {
    return (
        <section className='mb-[149px] '>
            <Container>
                <div className='relative' >
                    <img className='w-full' src="images/deleveryimg.png" alt="deleveryimg" />
                    <div className='text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <div className='w-[86px] h-[86px] bg-[#F95C19] rounded-full flex justify-center items-center mx-auto'>
                            <FaPlay className='text-[40px] text-[#FFFFFF] ' />
                        </div>
                        <h3 className='text-[31px] font-primaryFont font-bold text-[#F95C19] mt-[19px] '>FASTEST DELIVERY</h3>
                        <p className='text-[25px] font-primaryFont font-normal leading-[120%] text-[#ffffff]  '> You can get your valuable item in the fastest period of <br />
                            time with safety. Because your emergency <br />
                            is our first priority.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Delivery