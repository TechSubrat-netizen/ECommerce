import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";


const Signup = () => {
    const [FullName,setFullName]=useState('')
    const [Email,setEmail]=useState('')
    const [PhoneNumber,setPhoneNumber]=useState('')
    const [Gender,setGender]=useState('')
    const [Address,setAddress]=useState('')
    const [Password,setPassword]=useState('')
    const [ConfirmPassword,setConfirmPassword]=useState('')
    const [showpassword,setShowpassword]=useState(false)
    const [error,setError]=useState(false)
    const [emailError,setEmailError]=useState(false)
     async  function handleOnClick(e){
            e.preventDefault()
        
            let formData={
              FullName,
              Email,
              PhoneNumber,
              Gender,
              Address,
              Password,
              ConfirmPassword
            }
            if(Password==ConfirmPassword){
           let response= await fetch("http://localhost:5000/user/signup",{
              method:"POST",
              headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify(formData)
            })
            if(response.status==409){
              setEmailError(true)
            }
            else{
         
            
            setFullName('')
            setAddress('')
            setPhoneNumber('')
            setEmail('')
            setGender('')
            setPassword('')
            setConfirmPassword('')
            setError(false)
            setEmailError(false)
            }
          }
          
          else{
          
             setError(true)
          }
            

      }

    
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
        <form className="space-y-4"  onSubmit={handleOnClick} >
          
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              name="FullName"
              placeholder="Enter your full name"
              className="w-full p-2 border rounded-md"
              onChange={(e)=>setFullName(e.target.value)}
              value={FullName}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md"
              onChange={(e)=>setEmail(e.target.value)}
              value={Email}
              required
            />
            {emailError&&<h1 style={{color:"red"}}>Email is already exist</h1>}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="PhoneNumber"
              placeholder="Enter your phone number"
              className="w-full p-2 border rounded-md"
              pattern="[0-9]{10}"
              title="Enter a 10-digit phone number"
              onChange={(e)=>setPhoneNumber(e.target.value)}
              value={PhoneNumber}
              required
            />
          </div>

          {/* Gender Selection */}
          <div>
            <label className="block font-medium">Gender</label>
            <div className="flex items-center space-x-4">
              <label>
                <input type="radio" name="Gender" value="Male" required  checked={Gender === "Male"} onChange={e=>setGender(e.target.value)}/> Male
              </label>
              <label>
                <input type="radio" name="Gender" value="Female" required checked={Gender === "Female"} onChange={e=>setGender(e.target.value)}/> Female
              </label>
              <label>
                <input type="radio" name="Gender" value="Other" required checked={Gender === "Others"} onChange={e=>setGender(e.target.value)}/> Other
              </label>
            </div>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block font-medium">Address</label>
            <textarea
              id="address"
              name="Address"
              rows="3"
              placeholder="Enter your full address"
              className="w-full p-2 border rounded-md"
              required
              onChange={(e)=>setAddress(e.target.value)}
              value={Address}
            ></textarea>
          </div>

          {/* Password */}
          <div className="relative">
  <input
    type={showpassword ? "text" : "password"}
    id="password"
    name="Password"
    placeholder="Enter your password"
    className="w-full p-2 border rounded-md"
    onChange={(e) => setPassword(e.target.value)}
    value={Password}
    required
  />
  <button
    type="button"
    className="absolute top-1/2 right-3 transform -translate-y-1/2"
    onClick={() => setShowpassword(!showpassword)}
  >
    {showpassword ? <Eye className="w-5 h-5 text-gray-500" /> : <EyeOff className="w-5 h-5 text-gray-500" />}
  </button>
</div>


          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block font-medium">Confirm Password</label>
            <input
              type="password"
              id="ConfirmPassword"
              name="ConfirmPassword"
              placeholder="Re-enter your password"
              className="w-full p-2 border rounded-md"
              onChange={(e)=>setConfirmPassword(e.target.value)}
              value={ConfirmPassword}
              required

            />
            {error&&<h1 style={{color:"red"}}>*password is not matching</h1>}
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input type="checkbox" id="terms" required className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account? */}
        <p className="text-center text-sm mt-4">
          Already have an account?
          <Link to="/signin" className="text-blue-600 hover:underline ml-1">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
