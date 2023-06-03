"use client";

import { useState } from "react";
import Link from "next/link";
import AuthModal from "./AuthModal";

const NavBar = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        Open Table
      </Link>
      <div>
        <div className="flex">
          <AuthModal isSignIn={isSignIn} />
          <AuthModal isSignIn={true} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
