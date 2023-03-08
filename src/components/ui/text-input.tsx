import React from "react";

interface TextInputProps {
  placeholder?: string;
}

const TextInput = ({ placeholder }: TextInputProps) => {
  return (
    <input
      type="text"
      className="w-72 rounded p-[3px] outline-none border border-[#bd93f9]"
      placeholder={placeholder}
    />
  );
};

export default TextInput;
