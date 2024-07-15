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
console.log("isAuthenticate", isAuthenticated);
export default function Home() {
  // useEffect(() => {
  //   requestNotificationPermission();

  //   onMessageListener()
  //     .then((payload) => {
  //       console.log("Message received. ", payload);
  //       // Handle the message as per your needs
  //     })
  //     .catch((err) => console.log("Failed: ", err));

  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/firebase-messaging-sw.js")
  //       .then((registration) => {
  //         console.log(
  //           "Service Worker registered with scope:",
  //           registration.scope
  //         );
  //       })
  //       .catch((error) => {
  //         console.error("Service Worker registration failed:", error);
  //       });
  //   }
  // }, []);
  return <>{isAuthenticated ? <Dashboard /> : <SignIn />}</>;
}
