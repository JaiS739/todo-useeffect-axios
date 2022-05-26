import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Todoget = () => {
  const [todo, setTodo] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalcount, setTotalcount] = useState(0);

  useEffect(() => {
    let getTodo = async () => {
      let r = await axios.get(
        `http://localhost:8025/jai?_page=${page}&_limit=${limit}`
      );
      let data = r.data;
      setTodo(data);
      console.log(r);
      setTotalcount(Number(r.headers["x-total-count"]));
    };
    getTodo();
  }, [page, limit]);

  return (
    <div>
      {todo.map((e, index) => (
        <div key={e.id}>
          {e.id} {e.value}
        </div>
      ))}

      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
        {"<"}
      </button>
      <select onChange={(e) => setLimit(Number(e.target.value))}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <button
        disabled={totalcount <= page * limit}
        onClick={() => setPage(page + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Todoget;
