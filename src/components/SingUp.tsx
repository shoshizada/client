
import React, { useState,useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword,signInWithGoogle } from "../firebase";
 import {Role, User} from './user';
// import { createUser} from '../api/user';
import "../css/Register.css";
import axios from 'axios';
 export default function SignUpPage() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
    if (loading) {
      return;
    }
      if (user) {
          createInMongo();
         navigate(`/system`);   
      };
    }, [user, loading]);
  
  //   const signUpWithPassword = async () => {
  //     debugger;
  //     //׳™׳¦׳™׳¨׳” ׳¢׳ ׳₪׳™׳™׳¨׳‘׳™׳™׳¡
  //     await registerWithEmailAndPassword(firstName+' '+lastName,email, password);
  //    debugger;
  //    console.log("create");
  //    console.log(user);
  //     //׳™׳¦׳™׳¨׳” ׳¢׳ ׳׳•׳ ׳’׳•
  //     createInMongo();
  // }
   const createUser= async (newUser:User) => {
    debugger;
    try {
        const user= await axios.post('http://localhost:3333/user/', newUser);
        console.log(user.data);
         debugger;
    }
    catch (error) {
        console.log('error-createUser',error);
    }
}

  const createInMongo=async()=>{
      const newUser = {
        uid: String(user?.uid),
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email
            }
            try{
      await createUser(newUser);
            }catch{
console.log("create failed");
            }
  }
      const signInGoogle = () => {
        signInWithGoogle();
  };
  
    return (
       <form  className='auth-inner' 
      //  onSubmit={()=>registerWithEmailAndPassword(firstName+' '+lastName,email, password)}
      >
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text"
           className="form-control" 
           placeholder="Last name" 
           onChange={(e) => setLastName(e.target.value)}/>
        </div>
           <div className="mb-3">
          <label>Phone</label>
          <input
            type="string"
            className="form-control"
            placeholder="Enter phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="button" className="btn btn-primary" 
          onClick={()=>registerWithEmailAndPassword(firstName+' '+lastName,email, password)}>
            Sign Up
          </button>
        </div>
          <div className="mb-3">
              <div className="d-grid">
                <button type="button" className="login-with-google-btn" onClick={() => signInGoogle()}>
                 Sign Up with Google
             </button>
          </div>
          </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    )
}
