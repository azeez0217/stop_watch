import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
     <div className="mt-12 flex justify-center">
  <div className="border border-solid border-blue-900 rounded-xl shadow-lg bg-white shadow-blue-300 ">
    <div className="w-[350px] rounded-xl shadow-md text-center p-6 m-4 shadow-blue-200">
      <h1 className="text-black text-2xl uppercase font-semibold mb-4">
        Stopwatch
      </h1>
      <div className="flex justify-center text-[23px] font-semibold mb-5">
        <p>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</p>
        <span>:</span>
        <p>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</p>
        <span>:</span>
        <p>{("0" + ((time / 10) % 100)).slice(-2)}</p>
      </div>
      <div className="flex justify-between px-4">
        <button
          className="text-white shadow-md px-4 py-2 rounded-md cursor-pointer text-[1.1rem] font-medium bg-blue-700 hover:bg-blue-800 transition duration-150"
          onClick={() => {
            setRunning(!running);
          }}
        >
          {running ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => setTime(0)}
          className="text-white shadow-md px-4 py-2 rounded-md cursor-pointer text-[1.1rem] font-medium bg-red-700 hover:bg-red-800 transition duration-150"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default App;
