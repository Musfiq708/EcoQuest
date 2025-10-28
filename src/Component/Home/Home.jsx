import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Adventures from '../Adventures/Adventures';
import Guides from '../Guides/Guides';
import Reviews from '../Reviews/Reviews';
import Marquee from "react-fast-marquee";
export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const { adventures, guides, reviews } = useLoaderData();


    return (
        <div>
            <div className='lg:w-9/12 md:w-11/12 w-11/12 mx-auto mt-5'>
                <h1 className='text-center mb-5 text-4xl font-extrabold'>
                    Our <span className='text-green-500 hover:text-green-300'>Eco-Adventure</span> locations
                </h1>
                <Banner></Banner>
            </div>
            <div>
                <h1
                    className='mt-20 text-center  text-4xl font-extrabold '>
                    Adventure Experience <span className='text-green-500 hover:text-green-300'>Packages</span>
                </h1>
                <div
                    data-aos="fade-down"
                    data-aos-offset="200"
                    className=' grid lg:grid-cols-3 md:grid-cols-2 lg:w-10/12 md:w-11/12 w-11/12 mx-auto gap-4 mt-15'
                >
                    {adventures.slice(0, 6).map((adventure) => (
                        <Adventures key={adventure.id} adventure={adventure}></Adventures>
                    ))}
                </div>
                <button className='btn mx-auto block mt-7 bg-green-600 text-white  hover:bg-green-400'>More Packages</button>
                <div>
                    <h1 className='text-center my-7 text-4xl font-extrabold'>
                        Meet Our <span className='text-green-500 hover:text-green-300'>Guides</span>
                    </h1>
                    <div
                        data-aos="fade-left"
                        data-aos-offset="200"
                        className=' lg:w-8/12 w-11/12 mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-5 mb-20 '>
                        {
                            guides.map((guides) => (
                                <Guides key={guides.id} guides={guides}></Guides>
                            ))
                        }
                    </div>
                    <div className=' mx-auto mb-20'>
                        <h1 className='text-center my-7 text-4xl font-extrabold'>Eco<span className='text-green-500'>Q</span>uest
                            <span className='text-green-500 hover:text-green-300'> Reviews...</span>
                        </h1>
                        <Marquee
                            pauseOnHover={true}
                            gradient={true}
                            gradientColor='white' 
                            gradientWidth={100}>
                            <div className="flex gap-4">
                                {reviews.map((review, index) => (
                                    <Reviews key={index} review={review} />
                                ))}
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
}
