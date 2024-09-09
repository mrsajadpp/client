import React from "react";

interface InputGroupProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="w-full">
      <label className="block text-gray-600 text-sm  py-[2px]" htmlFor={label}>
        {label}
      </label>
      <div className="">
        <input
          type={type?type:"text"}
          id={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className=" border rounded-lg w-full py-2 px-3  leading-tight focus:outline-blue-100 focus:shadow-slate-95"
        />
      </div>
    </div>
  );
};

export default InputGroup;
