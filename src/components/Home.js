
import React from "react";
import Giphy from "./Giphy";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  
  // handel logout 
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>

      <div className="d-grid gap-2">
        <Button className="btn-ss" variant="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div >
        <Giphy />
      </div>
    </>
  );
};

export default Home;