import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    console.log(user);
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        axios
          .post("https://api.chatengine.io/users/", formdata, {
            headers: {
              "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
            },
          })
          .then(() => {
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }, [user, history]);
  if (!user || loading) return "Loading ...";
  return (
    <div className="w-full h-full bg-facebook">
      <div className=" flex items-center justify-between w-full h-14 ">
        <div className="text-3xl text-white ml-2.5">Secret Chat App</div>
        <div className="text-2xl text-white mr-5" onClick={handleLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(80vh)"
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
