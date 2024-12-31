import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
import "./Login.css";
import pattern from "../assets/pattern.png";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign in with:", { email, password });
  };

  return (
    <div className="login-container max-w-md p-8 bg-white rounded-lg shadow-lg flex">
      <div className="form-container w-full">
        <form
          style={{ gap: "1.2rem" }}
          className="flex flex-col items-center"
          onSubmit={handleSignIn}
        >
          <h1 className="text-green-700 text-center text-4xl font-bold mb-4">
            Sign in
          </h1>
          <div style={{ gap: "rem" }} className="emailPass mb-4">
            <Input
              style={{ width: "25rem" }}
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-3 w-60"
            />
            <br />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3 max-w-10"
            />
          </div>
          <h6 className="text-right text-sm text-blue-500 cursor-pointer mb-4">
            Forgot your password?
          </h6>
          <Button
            type="submit"
            style={{ backgroundColor: "#059669", width: "20rem" }}
            color="green"
            ripple={true}
            className="mt-4"
          >
            Sign In
          </Button>
        </form>
      </div>
      <div className="overlay-container sm:hidden text-white flex items-center justify-center p-8 rounded-lg">
        <div className="overlay w-full">
          <div style={{ padding: "1.5rem" }} className="text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
            <p className="mb-4">
              Join us on your journey to explore, connect, and achieve your
              goals. Log in to continue where you left off.
            </p>
            <p className="mb-4">
              Don't have an account? Let's get you started.
            </p>
            <Button color="amber">
              <Link to="/reg">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
