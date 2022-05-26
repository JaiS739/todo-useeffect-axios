import React, { useEffect, useState } from "react";
import "./style.css";

const Todo = () => {
  const [newtodo, setNewtodo] = useState("");
  const [todos, setTodos] = useState([]);

  //   adding the data to the json server:-

  let saveInfo = () => {
    //   call api here in this function to save the new data from input tag(from the user)
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
          setTodos([...todos, d]);
          setNewtodo("");
        });
    }
  };

  //   deleting data from the json server:-

  let deleteInfo = (id) => {
    fetch(`http://localhost:8025/jai/${id}`, {
      method: "DELETE",
    });
  };

  useEffect(() => {
    fetch("http://localhost:8025/jai")
      .then((r) => r.json())
      .then((d) => {
        setTodos(d);
      });
  });

  return (
    <div>
      Todo
      <div>
        <div>
          <input
            type="text"
            value={newtodo}
            onChange={({ target }) => setNewtodo(target.value)}
          />
          <button onClick={saveInfo}>+</button>
        </div>
        <div className="flexy">
          {todos.map((ele) => (
            <div className="children">
              <div className="para" key={ele.id}>
                {ele.value}
              </div>
              <button className="para" onClick={() => deleteInfo(ele.id)}>
                -
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
