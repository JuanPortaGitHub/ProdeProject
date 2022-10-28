// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJN5zFyBK73r6OHt108TGApjRky9c3oYc",
  authDomain: "prodeimage.firebaseapp.com",
  projectId: "prodeimage",
  storageBucket: "prodeimage.appspot.com",
  messagingSenderId: "272083101066",
  appId: "1:272083101066:web:dd4e33df38f2914777d473",
  measurementId: "G-764F8ZGKKD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadFile = async (file) => {
  const imageNameUnique = Math.ceil(Math.random() * 1000000) + file.name;

  const storageRef = ref(storage, imageNameUnique);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};
