import React from "react";

import Image from "next/image";
import facebook from "@/public/images/logos/facebook.png"
import google from "@/public/images/logos/google.png"
import Link from "next/link";

function Login() {
  return (
    <div className="auth-page flex flex-col gap-4 px-4">
      <div className="login-form flex flex-col gap-4 p-8">
        <h1 className="font-extrabold text-2xl">Login</h1>
        <div className="open-auth grid w-full">
          <span className="google flex cta">
            <Image src={google} alt="google" height={400} width={400}/>
            Google
          </span>

          <span className="facebook flex cta">
          <Image src={facebook} alt="google" height={400} width={400}/>
            Facebook
          </span>
        </div>

        <div className="or grid gap-8">
          <hr />
          <span className="opacity-60">or continue with Email</span>
          <hr />
        </div>

        <div className="form flex flex-col gap-4 mt-4">
          <div className="input-group">
            <label className ="font-semibold" htmlFor="">Email</label>
            <input className ="font-semibold" type="email" placeholder="example@gmail.com"/>
          </div>
          <div className="input-group">
            <label className ="font-semibold" htmlFor="">Password</label>
            <input className ="font-semibold" type="password"/>
          </div>
        </div>

        <button className="cta w-full">Login</button>

        <div className="text-center">
          Not registered yet? <Link href="#" className="font-extrabold">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
