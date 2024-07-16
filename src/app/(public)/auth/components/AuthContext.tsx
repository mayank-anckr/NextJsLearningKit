import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const AuthProvider = ({ children }: any): any => {
  const data = cookies().get("authenticate")?.value || false;
  return (
    <div>{data && data == "true" ? redirect(`/dashboard`) : children}</div>
  );
};

export default AuthProvider;
