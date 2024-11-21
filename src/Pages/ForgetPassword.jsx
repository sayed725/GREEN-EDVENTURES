import React, { useContext, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';



const ForgetPassword = () => {

    const location = useLocation()

    useEffect(()=>{

        if(location.pathname == "/forgetpassword"){
            document.title = "Reset Pass-GreenEdventures"
        }
    },[])

    const { forgetEmail, setForgetEmail, forgetPassword } = useContext(AuthContext)

 
  


    const handleForm = (e)=>{
        e.preventDefault()

        const email = e.target.email.value 


        forgetPassword(email)
        .then(() => {
        toast.success("Password Reset Email Send")
        window.open("https://mail.google.com", "_blank");
          })

          .catch((error) => {
             toast.error(`${error.code}`)
        
          });


       }


    return (
        <div>
        <header>
            <Navbar></Navbar>
        </header>
       <main className='min-h-screen'>
       <h2 className="text-4xl my-10 text-center text-green-600 font-semibold">Reset Your Password</h2>
            <form onSubmit={handleForm} className=" md:w-3/4 lg:w-1/3 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-green-600">Your Email</span>
                    </label>
                    <input type="Email" required name="email" placeholder="Email" className="input input-bordered"  value={forgetEmail}
        onChange={(e) => setForgetEmail(e.target.value)} />
                </div>
               
                <div className="form-control mt-6">
                    <button  className="btn rounded-md text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] hover:text-black">Reset Password</button>
                </div>
            </form>
       </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
    );
};

export default ForgetPassword;