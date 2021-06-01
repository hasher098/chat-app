import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
const Register = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  const handleLogin = () => {
    history.push("/login");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        auth
          .signInWithEmailAndPassword(userData.email, userData.password)
          .then((userCredential) => {
            console.log("ZALOGOWANO");
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setUserData({
      ...userData,
      [event.target.name]: value,
    });
  };
  return (
    <div className="bg-white p-10 rounded-3xl ">
      <div className="flex justify-center items-center py-3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-end"
        >
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="border-black border-2 mb-4"
            ></input>
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="border-black border-2"
            ></input>
          </label>
          <div className="flex justify-center items-center mt-3">
            <div
              className="flex justify-center items-center bg-blue-400 text-white p-2 rounded-xl text-center cursor-pointer mb-6"
              onClick={handleLogin}
            >
              Masz konto? Zaloguj się
            </div>
            <div className="flex justify-center items-center bg-blue-600 text-white p-2 rounded-xl text-center cursor-pointer mb-6">
              <button type="submit">Rejestruj</button>
            </div>
          </div>
        </form>
      </div>

      <div
        className="flex justify-center items-center bg-blue-500 text-white py-2.5 rounded-xl text-center cursor-pointer mb-6"
        onClick={handleLogout}
      >
        Strona Główna
      </div>
    </div>
  );
};

export default Register;
