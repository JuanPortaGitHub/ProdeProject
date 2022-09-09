import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
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

  const hashedPassword = hashPassword(password);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
    userName: userName,
  });

  //falta crear el manejo de errores
  res
    .status(201)
    .json({ message: "Bienvenido al prode, ahora ganale a tus amigos" });
}

export default handler;
