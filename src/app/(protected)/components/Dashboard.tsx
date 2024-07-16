"use client";

import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const DashBoard = () => {
  const router = useRouter();
  const signClick = () => {
    console.log("clicked");
    Cookies.set("authenticate", "false");
    router.push("/auth/signin");
  };

  const notificationClick = () => {
    router.push("/notification");
  };
  return (
    <>
      <div>Dashboard</div>
      <div>
        <button onClick={notificationClick}>Notifications</button>
      </div>
      <div>
        <button onClick={signClick}>Sign out</button>
      </div>
    </>
  );
};

export default DashBoard;
