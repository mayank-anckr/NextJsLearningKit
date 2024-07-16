import AuthProvider from "./components/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider allowedRoles={["user", "admin"]}>{children}</AuthProvider>
      </body>
    </html>
  );
}
