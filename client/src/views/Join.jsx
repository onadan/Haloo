import { useState } from "react";
import haloo from "../assets/haloo.svg";
import Error from "../components/Error";
import { useNavigate } from "react-router-dom";

function Join() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleName = (e) => {
    e.preventDefault();
    sessionStorage.setItem("nickname", e.target.name.value);
    navigate("/game");
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center px-4 overflow-x-hidden bg-light">
        {/* Header and Form */}
        <main className="h-full flex flex-col items-center justify-center">
          <img src={haloo} alt="" className="max-w-[159px] w-full h-auto" />
          <form
            className="mt-10 w-[320px] flex flex-col gap-2"
            onSubmit={handleName}
          >
            <input
              type="name"
              name="name"
              className="border h-12 rounded-lg w-full px-4 flex justify-center font-semibold text-center"
              placeholder="ENTER NICKNAME"
            />
            <button className="h-12 bg-primary text-white w-full font-semibold rounded-lg">
              OK, GO
            </button>
          </form>
        </main>

        {error && <Error error={error} setError={setError} />}
      </div>
    </>
  );
}

export default Join;
