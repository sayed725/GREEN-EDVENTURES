import React, { useContext, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';



const UpdateProfile = () => {

    const { user , setUser, updateUserProfile , loading }  = useContext(AuthContext)
    const navigate = useNavigate()

    // if(loading){
    //     return <Loading></Loading>
    // }

    // if (!user && user?.email){
    //    return navigate('/auth/login')
    // }





    const location = useLocation()
   

    useEffect(()=>{

        if(location.pathname == "/updateprofile"){
            document.title = "Update Profile-GreenEdventures"
        }
    },[])

   

   

    const handleProfile = (e)=>{
        e.preventDefault()

        const form = new FormData(e.target)

        const name = form.get("name")
        const photo = form.get("photo")

        updateUserProfile({displayName:name, photoURL:photo})
        .then((result)=>{
            // console.log(result)
            toast.success('Your Profile has been updated Successfully')
            navigate('/userprofile')

        })
        .catch(error=>{
            // console.log(error)
        })
    }

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
           <main className='min-h-screen'>
           <h2 className="text-4xl my-10 text-center text-green-600  font-semibold animate__slideInLeft animate__animated">Update Your Profile</h2>
                <form onSubmit={handleProfile}  className=" md:w-3/4 lg:w-1/3 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-600">Your Name</span>
                        </label>
                        <input type="Name" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-600">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                   
                    <div className="form-control mt-6">
                        <button className="btn rounded-md text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] hover:text-black">Update Profile</button>
                    </div>
                </form>
           </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateProfile;