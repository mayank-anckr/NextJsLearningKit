"use client";

import React from "react";
import Cookies from "js-cookie";

function signClick() {
  console.log("clicked");
  Cookies.set("authenticate", "false");
  window.location.href = "/auth/signin";
}
const DashBoard = () => {
  return (
    <>
      <div>Dashboard</div>
      <div>
        <button onClick={signClick}>Sign out</button>
      </div>
    </>
  );
};

export default DashBoard;
