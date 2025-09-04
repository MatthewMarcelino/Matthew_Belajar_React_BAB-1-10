import React, { useState } from "react";

/** Bab 9 — useState Hook
 * - State di function component.
 */
export default function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  function addTodo() {
    if (!todo.trim()) return;
    setList(prev => [...prev, todo.trim()]);
    setTodo("");
  }

  return (
    <section>
      <h2>Bab 9 — useState</h2>
      <p>Counter: <b>{count}</b></p>
      <div className="row">
        <button className="nav-btn" onClick={() => setCount(c => c - 1)}>-</button>
        <button className="nav-btn" onClick={() => setCount(c => c + 1)}>+</button>
      </div>

      <hr style={{opacity:.1, margin:"16px 0"}} />

      <div className="row">
        <input
          className="input"
          placeholder="Tambah todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="nav-btn" onClick={addTodo}>Tambah</button>
      </div>

      <ul>
        {list.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </section>
  );
}