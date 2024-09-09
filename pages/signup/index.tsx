import Button from "@/components/button";
import InputGroup from "@/components/input-group";
import { Typography } from "@mui/material";
import { useState } from "react";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center  shadow-lg bg-white gap-3  rounded-lg  h-full">
      <Typography variant="h5" className="tracking-wider font-semibold">Sign up</Typography>

      <div className="flex flex-col gap-2 my-4">
        <InputGroup label="Username" />
        <InputGroup label="Email" />
        <InputGroup label="Paswword" />
        <InputGroup label="Confirm Paswword" />
      </div>
      <Button>Register</Button>
    </div>
  );
};

export default Signup;
