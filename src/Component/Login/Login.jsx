import React, { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../AuthProfider/AuthProvider'

export default function Login() {
  const { logIn, handleGoogleLogin } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password);
  }
  return (
    <div>
      <h1 className='text-center mt-20 mb-5 text-4xl font-extrabold'>
        <span className='text-green-500 hover:text-green-300'>Login</span>
      </h1>
      <form onSubmit={handleSubmit} className='' action="">
        <div className="card bg-base-100  max-w-sm mx-auto shrink-0 shadow-xl border border-green-500">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name='password' type="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-3  bg-green-600 text-white  hover:bg-green-400 border-none">Login</button>
            </fieldset>
            <h1 className='text-center mt-2 text-base font-bold'>Don't have an account..? <NavLink className="text-green-500 hover:text-green-700" to="/register">  Please Register</NavLink></h1>
          </div>
        </div>
      </form>
      <div className='mb-40 flex flex-col w-fit mx-auto items-center'>
        <h1 className='text-xl font-bold mt-3'>Or</h1>
        <div onClick={handleGoogleLogin} className='flex items-center gap-2 p-3 border border-green-500 rounded-3xl mt-2 text-[18px] font-bold hover:bg-green-500 hover:text-white'>
          <FcGoogle className="text-3xl" />
          Google Login
        </div>
      </div>
    </div>
  )
}
