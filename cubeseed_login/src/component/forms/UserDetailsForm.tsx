"use client";

import { useState, useEffect } from "react";
import { useSignUpContext } from "@/context/signup"
import { SignUpErrors } from "@cs/types/index"

export default function UserDetailsForm() {
    const { fullName, setFullName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, address, setAddress, errors, setErrors } = useSignUpContext();

    // create a useEffect that will check for errors in the form
    useEffect(() => {
      const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const errObj: SignUpErrors = {}

      if (fullName.length < 1) {
        errObj['fullName'] = 'Please enter your full name'
      } else {
        errObj['fullName'] = ''
      }

      if (!emailValidation.test(email)) {
        errObj['email'] = 'Please enter a valid email'
      } else {
        errObj['email'] = ''
      }

      if(!address) {
        errObj['address'] = 'Please enter your address'
      } else {
        errObj['address'] = ''
      }

      if (password.length < 8) {
        errObj['password'] = 'Password must be at least 8 characters long'
      } else {
        errObj['password'] = ''
      }

      if(!confirmPassword) {
        errObj['emptyConfirmPass'] = 'Please confirm your password'
      } else {
        errObj['emptyConfirmPass'] = ''
      }

      if ((password && confirmPassword) && (password !== confirmPassword)) {
        errObj['confirmPassword'] = 'Passwords do not match'
      } else {
        errObj['confirmPassword'] = ''
      }


      setErrors(errObj)
    }, [fullName, email, password, confirmPassword, address])

    return (
       <div style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'50%', margin:'auto' }} className="w-50 " >
         {errors.fullName && <p className="signup-error">{errors.fullName}</p>}
         <div className="input-wrapper">
            <label htmlFor="first">Full Name</label>
            <input value={fullName} onChange={(e) => setFullName(e.target.value)}  type="text" />
         </div>
         {errors.email && <p className="signup-error">{errors.email}</p>}
         <div className="input-wrapper">
            <label htmlFor="first">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
         </div>
         {errors.address && <p className="signup-error">{errors.address}</p>}
         <div className="input-wrapper">
            <label htmlFor="first">Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
         </div>
          {errors.password && <p className="signup-error">{errors.password}</p>}
         <div className="input-wrapper">
            <label htmlFor="first">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
          {errors.confirmPassword && <p className="signup-error">{errors.confirmPassword}</p>}
         <div className="input-wrapper">
            <label htmlFor="first">Confirm password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
       </div>
    )
}
