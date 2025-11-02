import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProfider/AuthProvider";
export default function EditProfile() {
    const { manageProfile, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const name2 = user.displayName;
        const photo2 = user.photoURL;
        if (!photo) {
            manageProfile(name, photo2)
        }
        if (!name) {
            manageProfile(name2, photo)
        }

        navigate('/my-profile')
    }


    return (
        <div className="lg:h-screen md:h-screen h-100 ">
            <h1 className='text-center lg:mt-30 md:mt-30 mt-10 mb-5 text-4xl font-extrabold'>
                <span className='text-green-500 hover:text-green-300'>Edit Profile</span>
            </h1>
            <form onSubmit={handleSubmit} className='' action="">
                <div className="card bg-base-100  max-w-sm mx-auto shrink-0 shadow-2xl border border-green-500">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input name="name" type="text" className="input" placeholder="Enter Your Name" />
                            <label className="label">Photo URL</label>
                            <input name="photo" type="text" className="input" placeholder="Enter your Photo Url" />
                            <button className="btn btn-neutral mt-3  bg-green-600 text-white  hover:bg-green-400 border-none">Update</button>
                        </fieldset>
                    </div>
                </div>
            </form>

        </div>
    )
}
