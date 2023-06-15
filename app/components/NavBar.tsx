"use client";

import { useState } from "react";
import Link from "next/link";
import AuthModal from "./AuthModal";
import { AuthContext } from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const { data, loading } = AuthContext();
  const { signout } = useAuth();

  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        Open Table
      </Link>
      <div>
        {loading ? null : (
          <div className="flex">
            {data ? (
              <button
                onClick={signout}
                className="bg-white-500 text-gray-700 border p-1 px-4 rounded mr-3"
              >
                SignOut
              </button>
            ) : (
              <>
                <AuthModal isSignIn={isSignIn} />
                <AuthModal isSignIn={true} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
