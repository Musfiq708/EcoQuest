import { NavLink } from "react-router-dom";


export default function Register() {
  return (
    <div>
      <h1 className='text-center mt-15 mb-5 text-4xl font-extrabold'>
        <span className='text-green-500 hover:text-green-300'>Register Now</span>
      </h1>
      <form className='mb-20' action="">
        <div className="card bg-base-100  max-w-sm mx-auto shrink-0 shadow-2xl border border-green-500">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Enter Your Name" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Enter your Photo Url" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-3  bg-green-600 text-white  hover:bg-green-400 border-none">Register</button>
            </fieldset>
            <h1 className='text-center mt-2 text-base font-bold'>Already have an account..? <NavLink className="text-green-500 hover:text-green-700" to="/login">  Please Login</NavLink></h1>
          </div>
        </div>
      </form>
      
    </div>
  )
}
