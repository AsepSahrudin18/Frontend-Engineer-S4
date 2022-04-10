import { useState } from "react";

function Counter() {
  const [hasil, setHasil] = useState(10);

  function tambahNilai() {
    setHasil(hasil + 1);
  }
  return (
    <div>
      <p>Hasil: {hasil}</p>
      <button onClick={tambahNilai}>Add</button>
    </div>
  );
}
export default Counter;
