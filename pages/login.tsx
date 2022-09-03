import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const router = useRouter();
  const { user, login, loginFromGoogle } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      await login(data.email, data.password);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLoginGoogle = async (e: any) => {
    e.preventDefault();

    try {
      await loginFromGoogle.loginGoogle();
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
      }}
    >
      <h1 className="text-center my-3 ">Login</h1>
      <form onSubmit={handleLogin}>
        <p>Email address</p>
        <input
          onChange={(e: any) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
          value={data.email}
          required
          type="email"
          placeholder="Enter email"
        />

        <p>Password</p>
        <input
          onChange={(e: any) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
          value={data.password}
          required
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <button onClick={handleLoginGoogle}>Login with Google</button>
        <button onClick={() => router.push("/signup")}>Registrarse</button>
      </form>
    </div>
  );
};

export default Login;
