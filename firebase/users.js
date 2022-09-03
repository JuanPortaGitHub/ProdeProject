import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./client";

export const addUser = async (name, email, password) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      displayName: name,
      email: email,
      password: password,
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getCurrentUser = async () => {
  const user = auth.currentUser;
  console.log(user);
};
// export const getUser = async (id) => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Alan",
//       middle: "Mathison",
//       last: "Turing",
//       born: 1912
//     });

//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
//   }

