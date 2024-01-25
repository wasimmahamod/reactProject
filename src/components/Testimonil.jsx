import React from 'react'
import Container from './Container'
import { FaStar } from "react-icons/fa";

const Testimonil = () => {
    return (
        <section className='' >
            <Container>
                <div className='text-center relative mb-[89px] '>
                    <img className=' absolute top-0 left-[26%] ' src="images/TestiQuote.png" alt="TestiQuote" />
                    <h3 className='text-[31px] font-bold font-primaryFont  text-[#F95C19] '>TESTIMONIAL</h3>
                    <h2 className='text-[39px] font-extrabold font-primaryFont  text-[#11111D] leading-[110%] mt-[10px] '>Our Awesome Clients</h2>
                </div>
                <div className='w-[872px] bg-[#FFFFFF] p-[39px] rounded-[16px] mx-auto shadow-lg '>
                    <h3 className='text-[25px] font-bold font-primaryFont text-[#F95C19] leading-[120%] '>Fantastic service!</h3>
                    <p className='text-[16px] font-normal font-primaryFont text-[#464558] leading-[145%] w-[799px] mt-[11px] '>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                    <div className='flex  justify-between mt-[28px] '>
                        <ul className='flex  gap-[7px] '>
                            <li><FaStar className='text-[19px] text-[#F95C19] ' /></li>
                            <li><FaStar className='text-[19px] text-[#F95C19] ' /></li>
                            <li><FaStar className='text-[19px] text-[#F95C19] ' /></li>
                            <li><FaStar className='text-[19px] text-[#F95C19] ' /></li>
                            <li><FaStar className='text-[19px] text-[#F95C19] ' /></li>
                        </ul>
                        <div className='flex gap-[13px] items-center '>
                            <div className='text-right'>
                                <h3 className='text-[16px] font-bold font-primaryFont text-[#222132] leading-[120%] '>Yves Tanguy</h3>
                                <h5 className='text-[16px] font-normal font-primaryFont text-[#464558] leading-[120%] mt-[5px] '>Chief Executive, DLF</h5>
                            </div>
                            <img src="images/testiImg.png" alt="testiImg" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Testimonil