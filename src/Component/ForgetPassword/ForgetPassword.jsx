import React, { useContext, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProfider/AuthProvider'


export default function ForgetPassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const target = location?.state?.email || "";
    

    const { logIn, handleGoogleLogin ,resetPassword} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
       if(target)
       {
        resetPassword(target);
       }
       else
       {
        resetPassword(email);
       }
navigate("/")
    };
    

    return (
        <div className='h-screen'>
            <h1 className='text-center mt-20 mb-5 text-4xl font-extrabold'>
                <span className='text-green-500 hover:text-green-300'>Update Password</span>
            </h1>
            <form onSubmit={handleSubmit} className='' action="">
                <div className="card bg-base-100  max-w-sm mx-auto shrink-0 shadow-xl border border-green-500">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            {
                                target?<input value={target} readOnly name='email' type="email" className="input" placeholder="Email" />:<input   name='email' type="email" className="input" placeholder="Email" />
                            }
                            
                            <button className="btn btn-neutral mt-3  bg-green-600 text-white  hover:bg-green-400 border-none">Reset Password</button>
                        </fieldset>

                    </div>
                </div>
            </form>

        </div>
    )
}