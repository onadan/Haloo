import { useEffect } from "react";
import CreateAvatar from "../utils/createAvatar";

const Game = () => {
  const name = sessionStorage.getItem("nickname") || undefined;

  useEffect(() => {
    // if (!sessionStorage.getItem("avatar")) {
      CreateAvatar();
    // }
  }, []);

  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden px-4 flex justify-center items-center bg-light">
        <div className="flex flex-col items-center gap-4">
          <div
            dangerouslySetInnerHTML={{
              __html: sessionStorage.getItem("avatar"),
            }}
          />

          <p className="font-bold text-3xl text-primary">{name}</p>

          <p className="text-center text-dark font-semibold text-lg">
            You are in! <br /> Wait for the game to start
          </p>
        </div>
      </div>
    </>
  );
};

export default Game;
