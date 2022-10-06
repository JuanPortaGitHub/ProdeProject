import { read } from "fs";
import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;

  const { userName, email, password } = data;

  // aca hacer una mejor validacion de datos por ahora esto sirve

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "email o contraseña invalida" });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email: email });
  console.log("ex", existingUser);
  if (existingUser) {
    res.status(422).json({ message: "Ya existe un usuario con ese email" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  console.log(hashedPassword);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
    userName: userName,
  });

  //falta crear el manejo de errores
  res
    .status(201)
    .json({ message: "Bienvenido al prode, ahora ganale a tus amigos" });
  client.close();
}

export default handler;
