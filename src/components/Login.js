import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div className="p-10" id="login-page">
      <div className="bg-red" id="login-card">
        <h2>Welcome to my chat app</h2>
        <div>
          <GoogleOutlined /> Sign In with Google
        </div>
        <div>
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
