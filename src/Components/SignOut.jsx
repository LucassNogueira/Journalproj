import React from "react";
import { getAuth, signOut } from "firebase/auth";
import Logout from "./svg/Logout";
const SignOut = ({ currentUser, setCurrentUser }) => {
  const auth = getAuth();

  function signoutHandler() {
    signOut(auth)
      .then(() => {
        alert(`You're logged out!`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <span className="text-2xl">
      <button
        className="flex items-center font-bold pl-3 p-2 gap-4"
        onClick={signoutHandler}
      >
        <Logout />
        Sign Out
      </button>
    </span>
  );
};

export default SignOut;
