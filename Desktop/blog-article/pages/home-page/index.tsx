"use client";
import { FC, useState } from "react";
import Signup from "../signup";
import Login from "../login";
import bg from "@/assets/image/bg.jpg";
import Button from "@/components/button";

const LandingPage: FC = ({}) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  console.log("mode", mode);
  return (
    <div className="relative w-[800px] h-[400px] bg-white bg-opacity-20 rounded-md flex justify-center items-center border  transition-transform duration-500 shadow-md">
      <div className="relative w-1/2 h-full z-10 flex justify-center items-center flex-col p-4">
        <h2 className="text-xl font-bold p-2">Already has an account ?</h2>
        <Button
          onClick={() => setMode("login")}
          className="p-3 !bg-emerald-300 rounded-sm"
        >
          Sign In
        </Button>
      </div>

      <div className="relative w-1/2 h-full z-10 flex justify-center items-center flex-col p-4 ">
        <h2 className="text-xl font-bold p-2">Don't have an account ?</h2>
        <Button
          onClick={() => setMode("signup")}
          className="p-3 !bg-emerald-300 rounded-sm"
        >
          Sign up
        </Button>
      </div>

      <div
        className={`absolute w-[350px] h-[480px] bg-white  z-20 shadow-lg transition-transform duration-1000 transform rounded-lg  ${
          mode == "login" ? "translate-x-[-180px]" : "translate-x-[180px]"
        } `}
      >
        {mode === "login" && <Login />}
        {mode === "signup" && <Signup />}
      </div>
    </div>
  );
};

export default LandingPage;
