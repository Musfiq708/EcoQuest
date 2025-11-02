import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AuthProfider/AuthProvider'
import Loading from '../PrivateRoute/Loading'
import { FaEdit } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'

export default function MyProfile() {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
    }

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user, navigate])


    if (!user) {
        return null
    }

    return (
        <div className='lg:w-10/12 w-11/12 mx-auto pt-10 h-screen'>
            <h1 className='text-4xl font-extrabold mb-10'>Profile-</h1>
            <div className='flex gap-5 flex-col lg:flex-row'>
                <div className='border-2 border-green-500 p-5 lg:w-4/10 flex flex-col items-center rounded-2xl'>
                    <h1 className='mb-5 text-3xl font-bold'>{user.displayName}</h1>
                    <img src={user.photoURL} className='rounded-full h-40 w-40 border-15 border-green-300' alt="" />
                </div>
                <div className='border-2 border-green-500 lg:w-6/10 p-5 rounded-2xl flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-sm font-semibold'>Name:</h1>
                            <h1>{user.displayName}</h1>
                            <h1 className='text-sm font-semibold'>Email:</h1>
                            <h1>{user.email}</h1>
                        </div>
                        <div>
                            <div className='flex flex-col items-center gap-1 hover:text-green-500'>
                                <FaEdit className='text-2xl' />
                                <p>Edit Profile</p>
                            </div>
                        </div>
                    </div>
                    <NavLink onClick={handleLogout} className="btn bg-green-300 text-[18px] hover:text-red-400 hover:bg-black mr-3">LogOut</NavLink>
                </div>
            </div>
        </div>
    )
}
