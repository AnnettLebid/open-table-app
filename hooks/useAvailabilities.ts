import { useState } from "react";
import axios from "axios";
import { Time } from "../utils/convertToDisplayTime";

interface AvailabilityData {
  time: Time;
  available: boolean;
}

export const useAvailabilities = ({
  slug,
  partySize,
  day,
  time,
}: {
  slug: string;
  partySize: number;
  day: string;
  time: string;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<AvailabilityData[] | null>(null);
  const fetchAvailabilities = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurant/${slug}/availability?day=${day}&time=${time}&partySize=${partySize}`

      );
      setLoading(false);   
      setData(response.data);
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, error, data, fetchAvailabilities };
};
