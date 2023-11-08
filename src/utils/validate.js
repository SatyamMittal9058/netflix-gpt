export const checkValidaData=(email,password)=>{
    const isEmailisValid=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
     const isPasswordisValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     if(!isEmailisValid) return "Email is not valid";
     if(!isPasswordisValid) return "Password is not valid";
     return null;
}