import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";

export const useReservation = ({
  slug,
  day,
  time,
  partySize,
  bookerFirstName,
  bookerLastName,
  bookerPhone,
  bookerEmail,
  bookerOccasion,
  bookerRequest,
  setReservationCompleted,
}: {
  slug: string;
  time: string;
  partySize: string;
  day: string;
  bookerFirstName: string;
  bookerLastName: string;
  bookerPhone: string;
  bookerEmail: string;
  bookerOccasion: string;
  bookerRequest: string;
  setReservationCompleted: Dispatch<SetStateAction<boolean>>;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const createReservation = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/restaurant/${slug}/reserve`,
        {
          bookerFirstName,
          bookerLastName,
          bookerPhone,
          bookerEmail,
          bookerOccasion,
          bookerRequest,
        },
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
      setLoading(false);
      setReservationCompleted(true);
      return response.data;
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, error, createReservation };
};
