import React, { useState } from "react";
import RockBand from "./RockBand";

function RockBandList() {
  const [rockBands, setRockBands] = useState([
    { name: "Queen", id: 1 },
    { name: "Led Zepplin", id: 2 },
    { name: "The rolling stones", id: 3 },
    { name: "The beatles", id: 4 },
    { name: "AC/DC", id: 5 },
    { name: "Pink floyd", id: 6 },
    { name: "Nirvana", id: 7 },
    { name: "Metallica", id: 8 },
  ]);

  function addNewRockBand() {
      console.log("Adding new rock band");
      const newBand = {
          name: "This is suhel khan band",
          id: crypto.randomUUID()
      };

      setRockBands((prevBands) => [...prevBands, newBand]);
  }
  return (
    <div>
      <ol>
        {rockBands.map((rockBand) => {
          return <RockBand key={rockBand.id} name={rockBand.name} />;
        })}
      </ol>
      <button onClick={addNewRockBand}>Add new Band</button>
    </div>
  );
}

export default RockBandList;
