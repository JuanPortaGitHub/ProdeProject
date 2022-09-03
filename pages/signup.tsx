import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Signup = () => {
  const { user, signup } = useAuth();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<any>("");
  const router = useRouter();

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await signup(data.name, data.email, data.password);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
      }}
    >
      <h1 className="text-center my-3 ">Signup</h1>
      <form onSubmit={handleSignup}>
        <p>Name</p>
        <input
          type="text"
          placeholder="Enter name"
          required
          onChange={(e: any) =>
            setData({
              ...data,
              name: e.target.value,
            })
          }
          value={data.name}
        />
        <p>Email address</p>
        <input
          type="email"
          placeholder="Enter email"
          required
          onChange={(e: any) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
          value={data.email}
        />

        <p>Password</p>
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e: any) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
          value={data.password}
        />

        <button type="submit">Signup</button>
      </form>
      <h3>{error && error.message}</h3>
    </div>
  );
};

export default Signup;
