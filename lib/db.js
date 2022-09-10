import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://ProdeQatar2022:Cuentalinda123@cluster0.hlhsd9r.mongodb.net/prodeQatar2022?retryWrites=true&w=majority"
  );
  //   .then((client) => {
  //     const db = client.db().collection("users");
  //     db.collection("");
  //   });
  return client;
}
