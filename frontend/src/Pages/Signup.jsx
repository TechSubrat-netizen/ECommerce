import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
        <form className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full p-2 border rounded-md"
              pattern="[0-9]{10}"
              title="Enter a 10-digit phone number"
              required
            />
          </div>

          {/* Gender Selection */}
          <div>
            <label className="block font-medium">Gender</label>
            <div className="flex items-center space-x-4">
              <label>
                <input type="radio" name="gender" value="Male" required /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="Female" required /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="Other" required /> Other
              </label>
            </div>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block font-medium">Address</label>
            <textarea
              id="address"
              name="address"
              rows="3"
              placeholder="Enter your full address"
              className="w-full p-2 border rounded-md"
              required
            ></textarea>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block font-medium">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              className="w-full p-2 border rounded-md"
              required
            />
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
