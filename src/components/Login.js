import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const history = useHistory();
  return (
    <div className="bg-white p-10 rounded-3xl " id="login-page">
      <div className="" id="login-card">
        <p className="font-mono text-xl mb-5">Welcome to my chat app</p>
        <div
          className="flex justify-center items-center bg-blue-400 text-white py-2.5 rounded-xl text-center cursor-pointer mb-6"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined className="px-1.5" /> Sign In with Google
        </div>
        <div
          className="flex justify-center items-center bg-facebook text-white py-2.5 rounded-xl text-center cursor-pointer"
          onClick={() => history.push("/login")}
        >
          Logowanie tradycyjne
        </div>
      </div>
    </div>
  );
};

export default Login;
