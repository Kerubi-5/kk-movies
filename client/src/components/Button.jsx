import { useEffect, useState } from "react";
const Button = ({ color, children, click }) => {
  const [buttonColor, setButtonColor] = useState("");
  useEffect(() => {
    if (color === "success") setButtonColor("bg-green-700 border-green-800");
    if (color === "primary") setButtonColor("bg-blue-700 border-blue-800");
    if (color === "danger") setButtonColor("bg-red-700 border-red-800");
  }, [color]);

  return (
    <button
      className={`rounded px-3 ${buttonColor} py-2 m-1 border-b-4 border-l-2 shadow-lg  text-white`}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
