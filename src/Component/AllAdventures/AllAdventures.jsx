import React from 'react'
import Adventures from '../Adventures/Adventures'
import { useLoaderData } from 'react-router-dom';

export default function AllAdventures() {
    const { adventures } = useLoaderData();
    return (
        <div>
            <h1
                    className='mt-5 text-center  text-4xl font-extrabold '>
                    Adventure Experience <span className='text-green-500 hover:text-green-300'>Packages</span>
                </h1>
            <div
                
                className=' grid lg:grid-cols-3 md:grid-cols-2 lg:w-10/12 md:w-11/12 w-11/12 mx-auto gap-4 my-10'
            >
                {adventures.map((adventure) => (
                    <Adventures key={adventure.id} adventure={adventure}></Adventures>
                ))}
            </div>
        </div>
    )
}
