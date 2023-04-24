import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Error = ({ error, setError }) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timeoutId = setTimeout(() => {
        setShowError(false);
        setError("");
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [error]);

  return (
    <>
      {showError && (
        <div className="fixed bottom-0 left-0 w-screen h-[60px] bg-[#D11111] flex gap-2 justify-center items-center font-medium text-lg text-white">
          <AiOutlineInfoCircle />
          <span>{error ? error : `Wahala Wahala`}</span>
        </div>
      )}
    </>
  );
};
export default Error;
