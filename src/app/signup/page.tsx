"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


function SignUpPage() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/users/signup", user)
      console.log("Signup Ok",res)

    } catch (error : any) {
      console.log("Signup Error",error)
    } finally {
      setLoading(false);
    }
  };
  const classes = {
    button: "border w-fit px-3 py-1 bg-black text-white rounded-full active:bg-gray-700 self-center",
    link: "self-center text-sm underline"
  }
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2">
        <h1 className="self-center">Sign Up</h1>
        <hr className="h-[6px] mb-2 px-3 rounded-full bg-black w-full" />
        <label htmlFor="username" className="flex gap-2 items-center">
          Username:
          <input 
            type="text" 
            name="username"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            className="border border-gray-800 rounded-lg px-2 py-1"
           />
        </label>
        <label htmlFor="email" className="flex gap-2   items-center">
          Email:
          <input 
            type="text" 
            name="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            className="border border-gray-800 flex-1 rounded-lg px-2 py-1"
           />
        </label>
        <label htmlFor="password" className="flex gap-2   items-center">
          Password:
          <input 
            type="text" 
            name="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            className="border border-gray-800 flex-1 rounded-lg px-2 py-1"
           />
        </label>
        <button className={classes.button} onClick={handleSubmit}>Sign Up</button>
        <Link className={classes.link} href={`/login`}>Alread have an account? <span className="underline">Click here</span></Link>
      </div>
    </div>
  );
}
export default SignUpPage;
