import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

interface AuthProviderProps {
  children: React.ReactNode;
  allowedRoles: string[]; // Add allowedRoles prop to specify which roles are allowed
}

const AuthProvider = ({ children, allowedRoles }: AuthProviderProps): any => {
  const cookie = cookies().get("authenticate")?.value;
  const user = cookies().get("role")?.value;
  console.log("user", user);
  if (!cookie) {
    redirect(`/auth/signin`);
  }
  // if (!user || !allowedRoles.includes(user)) {
  //   redirect(`/unauthorised`);
  //   return null;
  // }

  return <div>{children}</div>;
};

export default AuthProvider;
