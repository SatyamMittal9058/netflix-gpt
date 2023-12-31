import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidaData } from "../utils/validate";
import { signInWithEmailAndPassword,updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import {addUser} from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_IMG_URL } from "../utils/constant";
const Login = () => {
    const [SignIn, setSignIn] = useState(true);
    const [errMessage, seterrMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch=useDispatch();
    const handleSignInSignUp = () => {
        // Validate the form data
        const message = checkValidaData(email.current.value, password.current.value);
        seterrMessage(message);
        if (message) return;
        //Sign In/Sign up Login
        if (!SignIn) {
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName:name.current.value
                      }).then(() => {
                        // Profile updated
                        const {uid,email,displayName}=auth.currentUser;
                        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                      }).catch((error) => {
                        // An error occurred
                        seterrMessage(error.message);
                      });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrMessage(errorCode + "-" + errorMessage);
                });

        } else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // Signed in
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrMessage(errorCode + "-" +errorMessage);
                });
                
        }

    }
    const toggleForm = () => {
        setSignIn(!SignIn);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={BG_IMG_URL} alt="logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{SignIn ? "Sign In" : "Sign Up"}</h1>
                {!SignIn && <input
                    ref={name}
                    text="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />}

                <input ref={email} text="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />

                <input
                    ref={password} text="password" placeholder="Enter Password" className="p-4 my-4 w-full bg-gray-700" />
                <p className="text-red-500">{errMessage} </p>
                <button className="w-full p-4 my-6 bg-red-700 rounded-lg" onClick={handleSignInSignUp}>{SignIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-3 cursor-pointer" onClick={toggleForm}>{SignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
}
export default Login;