import React, { useState,useEffect } from 'react';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'
 export default function LoginPage(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
   useEffect(() => {
      console.log('useEffect');
    if (loading) {
      return;
    }
    if (user)  {
      console.log('if user');
      console.log(user);
      user.getIdToken().then((value=>{
      const token=value;
      console.log(token);
    }));
    
      // navigate(`/HomePage/${user.uid}`);
      navigate(`/system`);   
    }
   }, [user, loading]);
  
    return (
        <div className='auth-inner' >
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
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
            onClick={() => logInWithEmailAndPassword(email, password)}>
            Submit
          </button>
        </div>
         <div className="mb-3">
              <div className="d-grid">
              <button type="button" className="login-with-google-btn"
              onClick={signInWithGoogle} >
                Sign in with Google
             </button>
          </div>
          </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p className="forgot-password text-right">
          Already registered <a href="/signUp">Sign Up</a>
        </p>
      </div>
    );
};