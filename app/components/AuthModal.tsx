"use client";

import { useState, useEffect } from "react";
import { Box, Modal } from "@mui/material";
import AuthModalInputs from "./AuthModalInputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent;
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isSignIn) {
      if (inputs.password && inputs.email) {
        return setBtnDisabled(false);
      }
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.phone &&
        inputs.city &&
        inputs.password
      ) {
        return setBtnDisabled(false);
      }
    }
    setBtnDisabled(true);
  }, [inputs]);

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${renderContent(
          "bg-blue-600 text-white",
          ""
        )} border p-1 px-4 rounded mr-3`}
      >
        {renderContent("Sign In", "Sign Up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="m-auto">
            <h2 className="text-2xl font-light text-center">
              {renderContent(
                "Log In Into Your Account",
                "Create Your Open Table Account"
              )}
            </h2>
            <AuthModalInputs
              inputs={inputs}
              handleChangeInput={handleChangeInput}
              isSignIn={isSignIn}
            />
            <button
              disabled={btnDisabled}
              className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mt-4 disabled:bg-gray-400"
            >
              {renderContent("Sign In", "Create Account")}
            </button>
            {btnDisabled}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
