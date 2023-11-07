import Header from "./Header";
import {useState} from "react";
const Login = () => {
    const [SignIn,setSignIn]=useState(true);
    const toggleForm=()=>{
        setSignIn(!SignIn);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo" />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{SignIn?"Sign In":"Sign Up"}</h1>
                {!SignIn && <input text="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
                <input text="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
                
                <input text="password" placeholder="Enter Password" className="p-4 my-4 w-full bg-gray-700"/>
                <button className="w-full p-4 my-6 bg-red-700 rounded-lg">{SignIn?"Sign In":"Sign Up"}</button>
                <p className="py-3 cursor-pointer" onClick={toggleForm}>{SignIn?"New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
}
export default Login;