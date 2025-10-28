import React from 'react'

export default function Adventures({ adventure }) {
    
    const {  image, adventureTitle, bookingAvailability,shortDescription,ecoFriendlyFeatures } = adventure;
    
    return (
        <div className=' '>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        className='h-[300px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {adventureTitle}
                        {
                            bookingAvailability ? <div className="badge badge-secondary bg-green-500 text-white border-none ml-auto">Available</div> : <div className="badge badge-secondary bg-red-500 ml-auto">Booked</div>
                        }
                    </h2>
                    <p>{shortDescription}</p>
                    <div className="card-actions ">
                        {
                            ecoFriendlyFeatures.map((ecoFeature,index)=><div key={index}  className="badge badge-outline border-green-400">{ecoFeature}</div>)
                            
                        }
                        
                    </div>
                    <button className='btn bg-green-600 text-white mt-3 hover:bg-green-400'>Explore Now</button>
                </div>
            </div>
        </div>
    )
}
