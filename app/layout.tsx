import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "./components/NavBar";
import AuthenticationContext from "../context/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <AuthenticationContext>
              <main className="max-w-screen-2xl m-auto bg-white">
                <NavBar />
                {children}
              </main>
          </AuthenticationContext>
        </main>
      </body>
    </html>
  );
}
