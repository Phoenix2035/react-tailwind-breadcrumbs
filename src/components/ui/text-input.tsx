import React from "react";

interface TextInputProps {
  placeholder?: string;
}

const TextInput = ({ placeholder,...props }: TextInputProps) => {
  return (
    <input
      type="text"
      className="w-96 rounded py-1 px-2 outline-none border border-[#bd93f9] mb-5"
      placeholder={placeholder}
    />
  );
};

export default TextInput;
