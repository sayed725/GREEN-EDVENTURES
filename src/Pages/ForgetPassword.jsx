import React, { useContext, useEffect, useState  } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';


const ForgetPassword = () => {

    


    // const [inputValue, setInputValue] = useState(forgetEmail);

//   // Update state when input value changes
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

 
  const { forgetEmail, setForgetEmail } = useContext(AuthContext)

//   const handleInputChange = (e) => {
// setForgetEmail({ ...forgetEmail, email: e.target.value }); // Update context state
//   };

   


    // const handleResetPassword = () => {
    //     window.location.href = 'https://mail.google.com';
    //   };
  


    const handleForm = (e)=>{
        e.preventDefault()

      
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
                    <input type="Email" required name="email" placeholder="Email" className="input input-bordered"  value={forgetEmail}  />
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