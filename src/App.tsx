import React from "react";
import Party from "./Components/Party";
// @ts-ignore
import blow from "./Assets/Audio/blow.mp3";
// @ts-ignore
import horn from "./Assets/Audio/horn.mp3"
// @ts-ignore
import hb from "./Assets/Audio/hb.mp3"
// @ts-ignore
import pop from "./Assets/Audio/pop.mp3"
import useSound from "use-sound";

function App() {
  const [party, setParty] = React.useState(false);
  const [balloonSize, setBalloonSize] = React.useState(1);
  const [playBlow] = useSound(blow);
  const [playHorn] = useSound(horn);
  const [playHb] = useSound(hb);
  const [playPop] = useSound(pop);

  return (
    <div className="App w-screen h-screen flex items-center justify-center">
      {!party ? (
        <button
          className="bg-red-500 p-20 rounded-full active:scale-90 transition-all"
          style={{
            transform: `scale(${balloonSize / 2})`,
          }}
          onClick={() => {
            if (balloonSize > 11) {
              setParty(true);
              playPop()
              playHorn()
              setTimeout(() => {
                playHb()
              }, 2000);

            } else {
              setBalloonSize(balloonSize + 1);
              playBlow();
            }
          }}
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
