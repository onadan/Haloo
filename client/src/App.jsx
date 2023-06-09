import { useState } from "react";
import haloo from "./assets/haloo.svg";
import Error from "./components/Error";
import { useNavigate } from "react-router-dom";

function App() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePin = async (e) => {
    e.preventDefault();

    let pin = e.target.pin.value;

    if (!pin) {
      setError("Game Pin cannot be blank!");
    }

    navigate("/join");
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center px-4 overflow-x-hidden">
        {/* Header and Form */}
        <main className="h-full flex flex-col items-center justify-center">
          {/* Header Image */}
          <img src={haloo} alt="" className="max-w-[159px] w-full h-auto" />
          {/* Form */}
          <form
            className="mt-10 w-[320px] flex flex-col gap-2"
            onSubmit={handlePin}
          >
            <input
              type="number"
              name="pin"
              className="border h-12 rounded-lg w-full px-4 flex justify-center font-semibold text-center"
              placeholder="GAME PIN"
            />
            <button className="h-12 bg-primary text-white w-full font-semibold rounded-lg">
              ENTER
            </button>
          </form>
        </main>

        {/* Footer */}
        <footer className="self-center shrink-0 py-2 pb-5">
          <div className=" text-dark font-medium text-lg">
            Create your own game for FREE{" "}
            <span className="font-semibold underline">here.</span>
          </div>
        </footer>
        {error && <Error error={error} setError={setError} />}
      </div>
    </>
  );
}

export default App;
