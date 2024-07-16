// "use client";
// import { useEffect } from "react";
// import {
//   requestNotificationPermission,
//   onMessageListener,
// } from "../components/firebaseMessaging";

import { cookies } from "next/headers";
import Image from "next/image";
import Dashboard from "./(protected)/dashboard/page";
import SignIn from "./(public)/auth/signin/page";

const isAuthenticated = cookies().get("authenticate")?.value || false;
export default function Home() {
  console.log("im here");
  return <>{isAuthenticated ? <Dashboard /> : <SignIn />}</>;
}
