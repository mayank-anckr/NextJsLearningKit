import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Notification = () => {
  const isAuthenticated = cookies().get("authenticate")?.value;
  if (!isAuthenticated) {
    redirect("/");
  }
  return <div>Notification</div>;
};

export default Notification;
