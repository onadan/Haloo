import haloo from "./assets/haloo.svg";
// import Error from "./components/Error";

function App() {
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center px-4">
        <div className="h-max flex flex-col items-center">
          <img src={haloo} alt="" className="max-w-[189px] w-full h-auto" />
          <div className="my-2 w-[320px] flex flex-col gap-2">
            <input type="number" className="border h-12 rounded-lg w-full px-4 flex justify-center font-semibold text-center" placeholder="GAME PIN"/>
            <button className="h-12 bg-primary text-white w-full font-semibold rounded-lg">ENTER</button>
          </div>
        </div>
        {/* <Error /> */}
        {/* <img src={Haloo} alt="" className="w-full h-auto max-w-[500px]"/> */}
      </main>
    </>
  );
}

export default App;
