"use client";
import { useState, useEffect } from "react";
import { useReservation } from "../../../../hooks/useReservation";
import { CircularProgress } from "@mui/material";

const Form = ({
  slug,
  date,
  partySize,
}: {
  slug: string;
  date: string;
  partySize: string;
}) => {
  const [inputs, setInputs] = useState({
    bookerFirstName: "",
    bookerLastName: "",
    bookerPhone: "",
    bookerEmail: "",
    bookerOccasion: "",
    bookerRequest: "",
  });
  const [day, time] = date.split("T");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [reservationCompleted, setReservationCompleted] =
    useState<boolean>(false);
  const { loading, error, createReservation } = useReservation({
    slug,
    day,
    time,
    partySize,
    bookerFirstName: inputs.bookerFirstName,
    bookerLastName: inputs.bookerLastName,
    bookerPhone: inputs.bookerPhone,
    bookerEmail: inputs.bookerEmail,
    bookerOccasion: inputs.bookerOccasion,
    bookerRequest: inputs.bookerRequest,
    setReservationCompleted,
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    const booking = await createReservation();
  };

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerEmail &&
      inputs.bookerPhone
    ) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [inputs]);

  return (
    <div>
      {reservationCompleted ? (
        <div className="mt-5">
          <h1>You are all booked up!</h1>
          <h1>Enjoy your reservation!</h1>
        </div>
      ) : (
        <div className="mt-10 flex flex-wrap justify-between w-[41.25rem]">
          <input
            type="text"
            className="border rounded p-3 mb-4 w-80"
            placeholder="First name"
            name="bookerFirstName"
            value={inputs.bookerFirstName}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 mb-4 w-80"
            placeholder="Last name"
            name="bookerLastName"
            value={inputs.bookerLastName}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 mb-4 w-80"
            placeholder="Phone number"
            name="bookerPhone"
            value={inputs.bookerPhone}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 mb-4 w-80"
            placeholder="Email"
            name="bookerEmail"
            value={inputs.bookerEmail}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 mb-4 w-80"
            placeholder="Occasion (optional)"
            name="bookerOccasion"
            value={inputs.bookerOccasion}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 mb-4 w-80"
            placeholder="Requests (optional)"
            name="bookerRequest"
            value={inputs.bookerRequest}
            onChange={handleChangeInput}
          />
          <button
            onClick={handleClick}
            disabled={disabled || loading}
            className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
          >
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              "Complete reservation"
            )}
          </button>
          <p className="mt-2">
            By clicking “Complete reservation” you agree to the OpenTable Terms
            of Use and Privacy Policy. Message & data rates may apply. You can
            opt out of receiving text messages at any time in your account
            settings or by replying STOP.
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
