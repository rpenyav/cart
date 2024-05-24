import React, { useEffect, useState } from "react";
import "./App.css";
import Entries, { EntriesProps } from "./Entries";
import { getLatestData } from "./api";

function App() {
  // El tipo del estado se define como EntriesProps | undefined,
  // lo que permite que data sea undefined inicialmente.
  // Evita usar afirmaciones no nulas (undefined!) para mejorar
  // la seguridad de tipos y hacer que el código sea más comprensible y mantenible.
  // esta norma mantiene la seguridad de tipos
  const [data, setData] = useState<EntriesProps | undefined>(undefined);

  useEffect(() => {
    async function executor() {
      const result = await getLatestData();
      setData(result);
    }
    executor();
  }, []);

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Data</h1>
      <Entries values={data.values} count={data.count} />
    </div>
  );
}

export default App;
