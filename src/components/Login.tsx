// import React from 'react';
// import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

// const Login=()=>
// {
  
//       const [show, setShow] = React.useState(false)
//      const handleClick = () => setShow(!show)

//   return (
//     <InputGroup size='md'>
//       <Input
//         pr='4.5rem'
//         type={show ? 'text' : 'password'}
//         placeholder='Enter password'
//       />
//       <InputRightElement width='4.5rem'>
//         <Button h='1.75rem' size='sm' onClick={handleClick}>
//           {show ? 'Hide' : 'Show'}
//         </Button>
//       </InputRightElement>
//     </InputGroup>
//   )
// }
// export default Login;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../css/Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;