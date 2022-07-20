import React from "react";
import Party from "./Components/Party";

function App() {
  const [party, setParty] = React.useState(false);
  return (
    <div className="App w-screen h-screen flex items-center justify-center">
      {!party ? (
        <button
          className="bg-red-500 p-20 rounded-full hover:bg-red-300 active:scale-90 transition-all"
          onClick={() => setParty(true)}
        ></button>
      ) : (
        <>
          <h1 className="font-bold ">Happy Birthday Lara ❤️</h1>
          <Party />{" "}
        </>
      )}
    </div>
  );
}

export default App;
