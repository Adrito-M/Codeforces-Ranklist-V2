import GoogleButton from "./GoogleButton"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../utils/firebase-config";

export default function Nav() {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const authUser = async () => {
    const { user: { email } } = await signInWithPopup(firebaseAuth, provider);
    console.log(email)
  };
  return (
    <div className='flex justify-end mx-[6vw] py-4 sticky top-0 bg-gradient-to-r from-bgblueleft to-bgblueright z-40'>
        <GoogleButton text='REGISTER / EDIT PROFILE' func={authUser} />
    </div>
  )
}
