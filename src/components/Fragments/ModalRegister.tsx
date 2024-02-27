import React from "react";
import { FaX } from "react-icons/fa6";

type propTypes = {
  registerOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalRegister: React.FC<propTypes> = ({
  registerOpen,
  onClose,
  children,
}) => {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
   fixed inset-0 flex justify-center items-center transition-colors z-50
   ${registerOpen ? "visible bg-black/50" : "invisible"}
 `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
     bg-white rounded-xl shadow p-6 transition-all
     ${registerOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}
   `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <FaX size="20px" color="black" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalRegister;
