import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function GuideInfo() {
    const singleData = useLoaderData();
   
    const { name, image, location, experience, languages, rating, specialties, contact, about } = singleData;

    const handletalk = () => {
        const date = new Date();
        const time = date.getHours()

        if (time >= 10 && time < 20) {
            window.open("https://meet.google.com/your-meet-link", "_blank");
        }
        else {
            const modal = document.getElementById("my_modal_3");
            modal.showModal();
        }
    }


    return (
        <div className='h-auto lg:w-10/12 md:w-10/12 w-11/12 mx-auto lg:my-20 mt-10'>
            <div className="card card-side bg-base-100 md:flex-col flex-col lg:flex-row">
                <figure>
                    <img
                        className='h-100 w-200 rounded-xl '
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-4xl font-extrabold text-green-500">{name}</h2>
                    <p className='font-semibold'>{location}</p>
                    <p className='font-semibold'>Experience: {experience}</p>
                    <div className='flex gap-25'>
                        <ul>
                            <p className='font-semibold'>Languages :</p>
                            {
                                languages.map((ins, index) => <li className='' key={index}>{ins}</li>)
                            }
                        </ul>
                        <ul>
                            <p className='font-semibold'>Specialties:</p>
                            {
                                specialties.map((spc, index) =>
                                    <li className='' key={index}>{spc}</li>
                                )
                            }
                        </ul>
                    </div>



                    <ul>
                        <p className='font-semibold'>Contacts:</p>
                        <li><p>{contact.phone}</p></li>
                        <li><a className='hover:text-blue-600' href={contact.email}>{contact.email}</a></li>
                    </ul>
                    <p className='font-semibold'>Rating: {rating}/5</p>

                    <p>{about}</p>

                    <div className="card-actions justify-center">
                        <button onClick={handletalk} className='w-full mx-auto block  bg-green-600 text-white p-3 hover:bg-green-400  text-xl rounded font-semibold '>Contact Now</button>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-3xl text-center text-red-500">Sorry!</h3>
                    <p className="py-4 text-center text-xl">Our experts are not available right now. Please come back between <span className='text-green-500 font-bold'>10 AM to 8 PM</span> for expert consultation</p>
                </div>
            </dialog>
        </div>
    )
}
