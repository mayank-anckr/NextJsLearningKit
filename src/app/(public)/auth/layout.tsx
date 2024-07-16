import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = cookies().get("authenticate")?.value || false;
  return (
    <html lang="en">
      <body>
        {!isAuthenticated || isAuthenticated === "false"
          ? children
          : redirect("/dashboard")}
      </body>
    </html>
  );
}
