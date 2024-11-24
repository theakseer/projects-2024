"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { setuid } from "process";
import { useState } from "react";

function SignUpPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
  };
  const classes = {
    button: "border w-fit px-3 py-1 bg-black text-white rounded-full active:bg-gray-700 self-center",
    link: "self-center text-sm underline"
  }
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2">
        <h1 className="self-center">Log In</h1>
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
        <button className={classes.button} onClick={handleSubmit}>Log In</button>
        <Link className={classes.link} href={`/signup`}>Don't have a account</Link>
      </div>
    </div>
  );
}
export default SignUpPage;
