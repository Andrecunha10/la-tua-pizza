import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes } from "./routes";
import { auth } from "./service/firebase";
import { getUser } from "./service/getuser";
import { deleteUser, updateUser } from "./store/slices/userslices";

function App() {
 const dispatch =  useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const user = await getUser(currentUser.uid)
        dispatch(updateUser(user))
      } else {
        dispatch(deleteUser())
      }
    })
  }, [dispatch])
  return (
    <Routes />
  );
}

export default App;
