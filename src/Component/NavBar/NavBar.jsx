import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/EcoQuest.jpg'
import { AuthContext } from '../AuthProfider/AuthProvider'
export default function NavBar() {

    const { logOut,user } = useContext(AuthContext)

  if(user){
    console.log(user.photoURL)
  }

    const links =
        <>
            <li className='hover:bg-white hover:text-black hover:rounded hover:text-[16px] hover:font-bold'><NavLink to="/all-adventure">All Adventure</NavLink></li>
            <li className='hover:bg-white hover:text-black hover:rounded hover:text-[16px] hover:font-bold'><NavLink>Item 2</NavLink></li>
            <li className='hover:bg-white hover:text-black hover:rounded hover:text-[16px] hover:font-bold'><NavLink >Item 3</NavLink></li>

        </>
    return (
        <div className='bg-green-500 text-white'>
            <div className=" navbar  lg:w-10/12 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">

                            {links}
                        </ul>
                    </div>
                    <div className='flex items-center gap-4 '>
                        <img src={logo} alt="" className='h-[50px] w-[50px] '/>
                        <a className=" text-3xl font-bold">EcoQuest</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    <NavLink onClick={logOut} className="btn text-[18px] hover:text-red-400 hover:bg-black mr-3" >LogOut</NavLink>
                    {
                        user?<button><img className='h-15 w-15 rounded-full ' src={user.photoURL} alt="" /></button>:<NavLink className="btn text-[18px] hover:text-green-400 hover:bg-black" to="/login">LogIn</NavLink>
                    }
                </div>
            </div>
        </div>
    )
}

