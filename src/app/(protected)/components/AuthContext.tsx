import { QueryClient, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const AuthProvider = ({ children }: any): any => {
  //   const { isLoading, data, error } = useQuery({
  //     queryKey: ["auth_status"],
  //     queryFn: async () => {
  //       const isAuthenticated = Cookies.get("authenticate") || false;
  //       return isAuthenticated;
  //     },
  //   });

  //   if (isLoading) {
  //     return (
  //       <>
  //         <h1>loader...</h1>
  //       </>
  //     );
  //   } else {
  //     if (!data || typeof data !== "boolean" || typeof data !== "string") {
  //       window.location.href = "/auth/signup";
  //     } else if (data === true) return { children };
  //     else {
  //       return (window.location.href = "/auth/signup");
  //     }
  //   }

  const data = cookies().get("authenticate")?.value || false;
  return <div>{data ? children : redirect(`/auth/signin`)}</div>;
};

export default AuthProvider;
