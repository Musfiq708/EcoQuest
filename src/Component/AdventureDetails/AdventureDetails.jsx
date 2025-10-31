import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function AdventureDetails() {
  const singleData = useLoaderData();
  const { image, adventureTitle, shortDescription, categoryName, adventureCost, bookingAvailability, location, duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions } = singleData;

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
    <div className='w-10/12 mx-auto mt-7'>
      <img className='w-1/2 mx-auto rounded-2xl mb-5 shadow-xl' src={image} alt="" />
      <h1 className=' text-center mb-5 text-4xl font-extrabold'>{adventureTitle}</h1>
      <table className="w-1/2 mx-auto border border-gray-300 text-sm ">
        <tbody>
          <tr className="border-b">
            <td className="font-semibold p-2 w-1/3 bg-gray-100">Category Name</td>
            <td className="p-2 font-semibold">{categoryName}</td>
          </tr>
          <tr className="border-b">
            <td className="font-semibold p-2 bg-gray-100">Short Description</td>
            <td className="p-2">{shortDescription}</td>
          </tr>
          <tr className="border-b">
            <td className="font-semibold p-2 bg-gray-100">Adventure Cost</td>
            <td className="p-2">{adventureCost} <span className='font-semibold'>BDT</span></td>
          </tr>
          <tr className="border-b">
            <td className="font-semibold p-2 bg-gray-100">Booking Availability</td>
            {/* <td className="p-2">Yes</td> */}
            {
              bookingAvailability ? <td className="p-2">Yes</td> : <td className="p-2">No</td>
            }
          </tr>
          <tr className="border-b">
            <td className="font-semibold p-2 bg-gray-100">Location</td>
            <td className="p-2">{location}</td>
          </tr>
          <tr className="border-b">
            <td className="font-semibold p-2 bg-gray-100">Duration</td>
            <td className="p-2">{duration}</td>
          </tr>
          <tr className="border-b">
            <td className="font-semibold p-2 bg-gray-100">Adventure Level</td>
            <td className="p-2">{adventureLevel}</td>
          </tr>
          <tr className="border-b">
            <td className="font-semibold p-2 bg-gray-100">Included Items</td>
            <td className="p-2 flex gap-2">
              {
                includedItems.map(itms => <p className=" ">{itms}</p>)
              }
            </td>

          </tr>
          <tr className="border-b">
            <td className="font-semibold p-2 bg-gray-100">Eco-Friendly Features</td>
            <td className="p-2 ">
              {
                ecoFriendlyFeatures.map(itms => <p>{itms},</p>)
              }
            </td>

          </tr>
          <tr className="border-b">
            <td className="font-semibold p-2 bg-gray-100">Maximum Group Size</td>
            <td className="p-2">{maxGroupSize}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 bg-gray-100">Special Instructions</td>
            <td className="p-2 ">
              {
                specialInstructions.map(imt => <p>{imt}</p>)
              }
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={handletalk} className='w-1/2 mx-auto block  bg-green-600 text-white p-5 hover:bg-green-400 mb-20 mt-3 text-xl rounded font-semibold '>Talk with Expert</button>
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
    </div >
  )
}
