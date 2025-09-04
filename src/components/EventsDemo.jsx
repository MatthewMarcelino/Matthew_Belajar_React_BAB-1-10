import React, { useState } from "react";

/** Bab 7 — Event
 * - onClick, onChange, onSubmit, dll.
 */
export default function EventsDemo() {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form disubmit dengan nilai: " + text);
  }

  return (
    <section>
      <h2>Bab 7 — Events</h2>
      <div className="row">
        <button className="nav-btn" onClick={() => alert("Tombol diklik!")}>
          onClick
        </button>

        <form onSubmit={handleSubmit} className="row">
          <input
            className="input"
            placeholder="Ketik sesuatu..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="nav-btn" type="submit">Submit</button>
        </form>
      </div>

      <div className="code">
{`<button onClick={...}>onClick</button>
<input value={text} onChange={(e) => setText(e.target.value)} />`}
      </div>
    </section>
  );
}