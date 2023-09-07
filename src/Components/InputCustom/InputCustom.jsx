import React from "react";

export const InputCustom = ({ placeholder, type = "text", bg }) => {
  const [value, setValue] = React.useState("");
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
