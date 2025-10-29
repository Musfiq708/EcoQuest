import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa';


export default function Reviews({ review }) {
   
    const { name, packageName, date, comment } = review;
    return (
        <div className="card bg-green-200 w-96 shadow-sm">
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{packageName}</p>
                        <p>Date: {date}</p>
                    </div>

                    <div className='justify-end'>
                        <div className='flex'>
                            <FaStar className='text-green-600 text-base' />
                            <FaStar className='text-green-600 text-base' />
                            <FaStar className='text-green-600 text-base' />
                            <FaStar className='text-green-600 text-base' />
                            <FaStarHalf className='text-green-600 text-base'/>

                        </div>
                    </div>
                </div>
                <p>Comments: {comment}</p>
            </div>
        </div>
    )
}
