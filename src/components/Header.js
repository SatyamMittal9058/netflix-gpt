import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "../utils/firebase";
import {useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import {LOGO_URL,USERICON_URL} from "../utils/constant"

const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{})
        .catch((error)=>{
            navigate("/error");
        });
    };
    useEffect(()=>{
        const unsubcribed=onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            navigate("/browse");
          } else {
            // User is signed out
            dispatch(removeUser()); 
            navigate("/"); 
          }
        });
        return ()=>unsubcribed(); 
      },[]); 
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src={LOGO_URL} alt="logo" />
            <div className="flex">
                <img  className="w-9 h-9 mt-5"alt="usericon" src={USERICON_URL} />
                <button onClick={handleSignOut} className="p-2 font-bold text-white">Sign Out</button> 
            </div>

        </div>

    )
}
export default Header;