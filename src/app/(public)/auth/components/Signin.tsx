"use client";
import React from "react";
import Cookies from "js-cookie";
function signClick() {
  console.log("clicked");
  Cookies.set("authenticate", "true");
  Cookies.set("role", "user");
  window.location.href = "/dashboard";
}
function redirectTo() {
  console.log("clicked");
  window.location.href = "/auth/signup";
}
const Signin = () => {
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
