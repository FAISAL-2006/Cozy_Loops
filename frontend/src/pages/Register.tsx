//from login page this will be redirected if the person is not previously registered  
//register will also check if the user is already present or not , like login 
import {useState} from "react"
import {useNavigate} from "react-router-dom";
export default function Register() {
      const navigate=useNavigate();
      const [Email,setEmail]=useState<string>("");
      const [Password,setPassword]=useState<string>(""); 
      const API_URL = import.meta.env.VITE_API_URL;
      async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    
        e.preventDefault();
        alert("Form Submitted!");
        try {
           const user = {
               email: Email,
               password: Password,
           };
           //goes to  backend register, fetch(url, {options})
           //goes to app.use("/auth", registerauth); registerauth handles it router.post("/register", ...)
           //Content-Type:application/json then only express will know frontend is sending json or not
           //body JSON.stringify(user) converts json object to text
           //need to change everything in axios
           const response = await fetch(`${API_URL}/auth/register`, {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(user),
        });

        console.log("Status:", response.status);
        //you will get a response from the backend
        const text = await response.json();
        if(text.success){
          navigate("/login");
        }
        console.log("Response:", text);

        } catch (error) {
             console.error("Fetch Error:", error);
        }
    
        }
      return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 via-white to-indigo-100">
          <form onSubmit={handleSubmit}
            className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                  Welcome Back
              </h1>

              <p className="text-center text-gray-500 mb-8">
                 Register your account 
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
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            
          
           <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Register</button>    
          </form>
        </div>
        
      );
}