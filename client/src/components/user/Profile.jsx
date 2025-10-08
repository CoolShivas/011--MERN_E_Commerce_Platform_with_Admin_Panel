import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Profile = () => {
  const { profileUser } = useContext(AppContext);
  console.log(profileUser?.data); // Getting data on Browser's Console;
  return (
    <>
      <div className="container text-center my-3">
        <h1>Welcome , {profileUser?.data?.name} </h1>
        <h3> {profileUser?.data?.email} </h3>
      </div>
    </>
  );
};

export default Profile;
