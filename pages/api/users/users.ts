// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient, User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

const prisma = new PrismaClient();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case "GET":
      return getUsers();
    case "POST":
      // if (req.body.type === "Foo") {
      //   return response.status(200).json(data);
      //   }
      return createUser();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getUsers() {
    try {
      const result = await prisma.user.findMany();
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(403).json({ err: "Error occured." });
    }
  }

  async function createUser() {
    const { mail, name, apellido, password } = req.body;

    try {
      const result = await prisma.user.create({
        data: {
          mail: mail,
          name: name,
          apellido: apellido,
          password: password,
        },
      });
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
