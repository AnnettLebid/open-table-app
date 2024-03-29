import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import DBClient from "../../../app/DB";

const prisma = DBClient.getInstance().prisma;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["authorization"] as string;
  const token = bearerToken.split(" ")[1];

  const payload = jwt.decode(token) as { email: string };

  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      phone: true,
      city: true,
    },
  });

  if (!user) {
    return res.status(404).json({ errorMessage: "User not found" });
  }

  return res.status(200).json({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    phone: user.phone,
    city: user.city,
  });
}
