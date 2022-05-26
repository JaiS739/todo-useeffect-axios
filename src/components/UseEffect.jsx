import React, { useEffect, useState } from "react";
import Todoget from "./Todoget";

const UseEffect = () => {
  const [newtodo, setNewtodo] = useState("");
  const [todo, setTodo] = useState([]);

  let saveInfo = () => {
    if (newtodo !== "") {
      fetch("http://localhost:8025/jai", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          value: newtodo,
          iscompleted: false,
        }),
      })
        .then((r) => r.json())
        .then((d) => {
          setTodo([...todo, d]);
          setNewtodo("");
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8025/jai")
      .then((r) => r.json())
      .then((d) => {
        setTodo(d);
      });
  });

  let ondelete = (id) => {
    fetch(`http://localhost:8025/jai/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      <div>
        UseEffect
        <div>
          <input
            value={newtodo}
            type="text"
            onChange={(e) => setNewtodo(e.target.value)}
          />
          <button onClick={saveInfo}>save</button>
        </div>
      </div>

      <Todoget />
    </>
  );
};

export default UseEffect;
