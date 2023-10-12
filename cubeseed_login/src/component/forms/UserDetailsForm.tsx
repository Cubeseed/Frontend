"use client";

import { useState, useEffect } from "react";
import { useSignUpContext } from "@/context/signup"
import { SignUpErrors } from "@cs/types/index"

export default function UserDetailsForm() {
    const { username, setUsername, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, errors, setErrors } = useSignUpContext();
    const errorColor = {
      color: 'red'
    }
    // create a useEffect that will check for errors in the form
    useEffect(() => {
      const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const errObj: SignUpErrors = {}

      if (username.includes(' ')) {
        errObj['noSpaces'] = 'Username cannot contain spaces*'
      } else {
        errObj['noSpaces'] = ''
      }

      if (username.length < 1) {
        errObj['username'] = 'Please enter a username*'
      } else {
        errObj['username'] = ''
      }


      if (!emailValidation.test(email)) {
        errObj['email'] = 'Please enter a valid email*'
      } else {
        errObj['email'] = ''
      }

      if (password.length < 8) {
        errObj['password'] = 'Password must be at least 8 characters long*'
      } else {
        errObj['password'] = ''
      }

      if(!confirmPassword) {
        errObj['emptyConfirmPass'] = 'Please confirm your password*'
      } else {
        errObj['emptyConfirmPass'] = ''
      }

      if ((password && confirmPassword) && (password !== confirmPassword)) {
        errObj['confirmPassword'] = 'Passwords do not match*'
      } else {
        errObj['confirmPassword'] = ''
      }


      setErrors(errObj)
    }, [username, email, password, confirmPassword])

    return (
       <div style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'50%', margin:'auto' }} className="w-50 " >
         {errors.username && <p className="signup-error" style={errorColor}>{errors.username}</p>}
         {errors.noSpaces && <p className="signup-error" style={errorColor}>{errors.noSpaces}</p>}
         <div className="input-wrapper">
            <label htmlFor="first">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)}  type="text" />
         </div>
         {errors.email && <p className="signup-error" style={errorColor}>{errors.email}</p>}
         <div className="input-wrapper">
            <label htmlFor="first">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
         </div>
          {errors.password && <p className="signup-error" style={errorColor}>{errors.password}</p>}
         <div className="input-wrapper">
            <label htmlFor="first">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
          {errors.confirmPassword && <p className="signup-error" style={errorColor}>{errors.confirmPassword}</p>}
         <div className="input-wrapper">
            <label htmlFor="first">Confirm password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
       </div>
    )
}
