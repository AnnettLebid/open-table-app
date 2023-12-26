import { Table } from "@prisma/client";
import { NextApiResponse } from "next";
import { times } from "../../app/data";
import DBClient from "../../app/DB";

const prisma = DBClient.getInstance().prisma;

interface TimeDataInterface {
  displayTime: string;
  time: string;
  searchTimes: string[];
}

export const findAvailableTables = async ({
  time,
  day,
  restaurant,
  res,
}: {
  time: string;
  day: string;
  restaurant: {
    tables: Table[];
    open_time: string;
    close_time: string;
  };
  res: NextApiResponse;
}) => {
  const searchTimes = times.find(
    (timeData: TimeDataInterface) => timeData.time === time
  )?.searchTimes;
  console.log("searchTimes", searchTimes);

  if (!searchTimes) {
    return res.status(400).json({ errorMessage: "Invalid time provided" });
  }

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: { number_of_people: true, booking_time: true, tables: true },
  });

  const bookingTableObj: { [key: string]: { [key: number]: true } } = {};

  bookings.forEach((booking) => {
    bookingTableObj[booking.booking_time.toISOString()] = booking.tables.reduce(
      (obj, table) => {
        return {
          ...obj,
          [table.table_id]: true,
        };
      },
      {}
    );
  });

  const tables = restaurant?.tables;

  const searchTimesWithTables = searchTimes.map((searchTime: string) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      time: searchTime,
      tables,
    };
  });

  return searchTimesWithTables;
};
