"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import { partySize as partySizes, times } from "../../../data";

import { useAvailabilities } from "../../../../hooks/useAvailabilities";

interface partySize {
  value: number;
  label: string;
}

const ReservationCard = ({
  openTime,
  closeTime,
  slug,
}: {
  openTime: string;
  closeTime: string;
  slug: string;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState(2);
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);
  const { loading, error, data, fetchAvailabilities } = useAvailabilities({ slug, day, time, partySize });

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const filterTimesByRestaurantOpenWindow = () => {
    const timesWithinWindow: typeof times = [];
    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesWithinWindow.push(time);
      }
      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });
    return timesWithinWindow;
  };

  const handleClick = () => {
    fetchAvailabilities();
  };

  return (
    <div className="w-[27%] relative text-reg">
      <div className="fixed md:w-[15%] w-[25%] bg-white rounded p-3 shadow">
        <div className="text-center border-b pb-2 font-bold">
          <h4 className="mr-7text-lg">Make a reservation</h4>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="">Party Size</label>
          <select
            name=""
            className="py-3 border-b font-light"
            id=""
            value={partySize}
            onChange={(e) => setPartySize(parseInt(e.target.value))}
          >
            {partySizes.map((size: partySize) => (
              <option key={size.label} value={size.value}>{size.label}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="">Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleChangeDate}
              dateFormat="MMMM d"
              wrapperClassName="w-[48%]"
              className="py-3 border-b font-light text-reg w-20"
            />
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="">Time</label>
            <select
              name=""
              className="py-3 border-b font-light"
              id=""
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {filterTimesByRestaurantOpenWindow().map((time) => (
                <option value={time.time}>{time.displayTime}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5">
          <button
            className="bg-red-600 rounded w-full px-4 text-white font-bold h-16"
            onClick={handleClick}
          >
            Find a Time
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
