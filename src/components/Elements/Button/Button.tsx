import { useState } from "react";

const Button = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? (
        <button
          onClick={handleClick}
          className="rounded-full font-bold w-10 h-10 text-center items-center bg-white text-black p-2"
        >
          D
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="bg-white text-black text-xl font-bold rounded-md py-1 px-5"
        >
          LOGIN
        </button>
      )}

      {/* <button className="bg-white text-black text-xl font-bold rounded-md py-1 px-5">
        LOGIN
      </button> */}
    </>
  );
};

export default Button;
