import { useEffect, useState } from "react";

function Counter() {
  /*
   * useState mengembalikan sepasang value (array): [0, function()]
   */
  const [angka, setAngka] = useState(0);

  function addAngka() {
    setAngka(angka + 1);
    console.log(angka);
  }

  //   useEffect
  useEffect(
    function () {
      console.log("useEffect lifeCycle: Dimount");

      // Melakukan side effect DOM
      document.title = `hasil: ${angka}`;
    },
    [angka]
  );

  console.log("useEffect: di Render");
  return (
    <>
      <p>hasil: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </>
  );
}
export default Counter;
