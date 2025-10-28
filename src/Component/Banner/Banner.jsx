import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import coxs from '../../assets/Coxs.jpg'
import bandorban from '../../assets/bandorban.jpg'
import sajek from '../../assets/sajek.jpg'
import sundarban from '../../assets/sundarban.jpg'
import sadapathor from '../../assets/sadapathor.jpg'
import teagarden from '../../assets/teagarden.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Banner() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-2xl"
            >
                <SwiperSlide>
                    <div>
                        <img className='lg:relative h-[500px]  w-full  ' src={coxs} alt="" />
                        <h1 className='absolute inset-0 text-white  top-10 left-10 text-2xl font-bold'>Cox's Bazar</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-[500px] w-full overflow-hidden' src={bandorban} alt="" />
                        <h1 className='absolute inset-0 text-white  top-10 left-10 text-2xl font-bold'>Bandarban</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-[500px] w-full ' src={sajek} alt="" />
                        <h1 className='absolute inset-0 text-white  top-10 left-10 text-2xl font-bold'>Sajek Valley</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div>
                        <img className='h-[500px] w-full ' src={sundarban} alt="" />
                        <h1 className='absolute inset-0 text-white  top-10 left-10 text-2xl font-bold'>Sundarban</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div>
                        <img className='h-[500px] w-full ' src={sadapathor} alt="" />
                        <h1 className='absolute inset-0 text-white  top-65 left-10 text-2xl font-bold'>Sada Pathor,Sylhet</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div>
                        <img className='h-[500px] w-full ' src={teagarden} alt="" />
                        <h1 className='absolute inset-0 text-white   top-110 left-230 text-2xl font-bold'> Sreemangal,Sylhet</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

