import Button from "@/components/button";
import InputGroup from "@/components/input-group";
import { Typography } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center  shadow-lg bg-white gap-3  rounded-lg  h-full">
      <Typography variant="h5" className="tracking-wider font-semibold">
        Login
      </Typography>

      <div className="flex flex-col gap-2 my-4">
        <InputGroup label="Username" />
        <InputGroup label="Paswword" />
      </div>
      <Button>Submit</Button>
    </div>
  );
};

export default Login;
