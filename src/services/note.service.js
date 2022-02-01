import { db } from "../firebase.config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export const AddNote = async ({ title, description, uid }) => {
  return await addDoc(collection(db, "notes"), {
    title: title,
    description: description,
    uid: uid,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
};

export const GetNotes = async ({ uid }) => {
  console.log(uid);
  const q = query(collection(db, "notes"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  let response = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    response.push({ id: doc.id, ...doc.data() });
  });
  return response;
};
