import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input placeholder="User Name" type="text" />
      <Input placeholder="Password" type="password" />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
