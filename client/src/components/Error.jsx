import { AiOutlineInfoCircle } from "react-icons/ai";

const Error = ({ error }) => {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-screen h-[60px] bg-[#D11111] flex gap-2 justify-center items-center font-medium text-lg text-white">
        <AiOutlineInfoCircle />
        <span>{error ? error : `Wahala Wahala`}</span>
      </div>
    </>
  );
};
export default Error;
