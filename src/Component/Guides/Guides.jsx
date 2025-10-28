import React from 'react'
import { FaStar } from 'react-icons/fa';

export default function Guides({ guides }) {
    
    const { name, image, specialties ,about,rating} = guides;
    return (
        <div className="card  shadow-md border border-green-500">
            <div className="card-body">
                <img className='h-20 w-20 rounded-full' src={image} alt="" />
                <h2 className="card-title">{name}</h2>
                <div className='grid lg:grid-cols-2  gap-2'>
                    {

                        specialties.map((ecoFeature, index) => <div key={index} className="badge badge-outline border-green-400">{ecoFeature}</div>)
                    }
                </div>
                <p>{about}</p>
                <div className='flex items-center gap-2'>
                <h1 className='text-base'><span className='font-bold'>Rating</span> : {rating} / 5 </h1>
                <FaStar className='text-green-500' />
                </div>
                <div className="card-actions font-bold text-green-700 hover:text-green-400">
                    Details information...
                </div>
            </div>
        </div>
    )
}
