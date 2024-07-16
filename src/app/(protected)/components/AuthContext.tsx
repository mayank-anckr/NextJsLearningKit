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
  if (!cookie || cookie !== "true") {
    redirect(`/auth/signin`);
  }

  return <div>{children}</div>;
};

export default AuthProvider;
