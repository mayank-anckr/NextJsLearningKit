"use client";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();
  const signClick = () => {
    Cookies.set("authenticate", "true");
    router.push("/dashboard");
  };
  const redirectTo = () => {
    Cookies.set("authenticate", "true");
    router.push("/auth/signup");
  };
  return (
    <>
      <div>Signin page</div>
      <div>
        <button onClick={signClick}>Signin</button>
      </div>
      <div>
        <button onClick={redirectTo}>redirect to signUp</button>
      </div>
    </>
  );
};
export default Signin;
