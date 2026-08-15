//Login Page must be designed with email state, password state, show password , remind me loading(while connecting to the backend)
//Error message
//do frontend and backend (Primary target)


//Top of the card should show login/sign in 

//Then the form to get input

//to be simple (email password and login button)
//dont have an account register

//frontend sends the input in the for of json
//If email already registered show this message Email already exists.
//Please login instead.

//1st step check if email exists
//compare password (if password wrong then incorrect)
//import {useState} from "react";
//import { Link } from "react-router-dom";
/*import { useNavigate } from "react-router-dom";
//the handlesubmit function is used to send a post req to the backend localhost  

export default function Login() {
  const navigate=useNavigate();//useNavigate is a hook , it shouldnt be inside any functions 
  const [Email,setEmail]=useState<string>("");
  const [Password,setPassword]=useState<string>(""); 

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault(); //prevents the browser from refreshing 

  //console.log("submitted!");
  
  try {
    const user = {
      email: Email,
      password: Password,
    };
    //goes to backend loginauth
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

      console.log("Status:", response.status);
      //you will get a response from the backend
      const text = await response.json();
      console.log(text);
      //console.log("Response:", text);
      if(text.success){
        localStorage.setItem("token",text.token); //will be visible in chrome local storage
        localStorage.setItem("role", text.role);
        console.log("Token stored");
      }

      if (text.success) {
        navigate("/products");
      } else {
        alert("Invalid Credentials");
      }

    } catch (error) {
      console.error("Fetch Error:", error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-100">
      <form className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
            Login to your account
        </p>
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            value={Email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-6">
           <label className="block text-gray-700 font-medium mb-2">
               Password
           </label>

           <input
              type="password"
              value={Password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Login</button>    
        <p className="text-center text-gray-600 mt-6">
             Don't have an account?{" "}
        <Link
           to="/register"
           className="text-blue-600 font-semibold hover:underline"
         >
             Register
        </Link>
        </p>

     </form>
    </div>
    
  );
}*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";

export default function Login() {
  const navigate = useNavigate();

  // Loading & Error States
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const API_URL = import.meta.env.VITE_API_URL;
  // Handle Google OAuth Success Response
  async function handleGoogleSuccess(credentialResponse: CredentialResponse) {
    if (!credentialResponse.credential) {
      setErrorMessage("Google Sign-In failed to return credentials.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      // Send Google credential token to backend endpoint
      const response = await fetch(`${API_URL}/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Store auth details in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // Redirect to products page
        navigate("/products");
      } else {
        setErrorMessage(data.message || "Google authentication failed.");
      }
    } catch (error) {
      console.error("Google Auth Error:", error);
      setErrorMessage("Unable to connect to backend server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm text-center">
        
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Sign in to your account
        </h2>

        {/* Error Message Display */}
        {errorMessage && (
          <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded-lg border border-red-200">
            {errorMessage}
          </div>
        )}

        {/* Loading Spinner Indicator */}
        {loading ? (
          <div className="flex items-center justify-center gap-2 py-3 text-blue-600 font-medium">
            <svg className="animate-spin h-5 w-5 text-blue-600" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 8 0 018-8v8H4z" />
            </svg>
            <span>Authenticating...</span>
          </div>
        ) : (
          /* Google Login Button */
          <div className="flex justify-center my-4">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setErrorMessage("Google Sign-In was cancelled or failed.")}
              shape="rectangular"
              theme="outline"
            />
          </div>
        )}

      </div>
    </div>
  );
}