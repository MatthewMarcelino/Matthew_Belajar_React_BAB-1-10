import React, { useRef, useState, useEffect } from "react";

/** Bab 10 — ref & useRef
 * - Menyimpan nilai mutable tanpa memicu render.
 * - Mengakses elemen DOM.
 */
export default function UseRefDemo() {
  const inputRef = useRef(null);            // ref ke elemen DOM
  const renders = useRef(0);                // ref untuk menyimpan nilai antar render
  const [value, setValue] = useState("");

  useEffect(() => { renders.current += 1; });

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <section>
      <h2>Bab 10 — useRef</h2>
      <div className="row">
        <input
          ref={inputRef}
          className="input"
          placeholder="Fokus saya via ref..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="nav-btn" onClick={focusInput}>Fokus</button>
      </div>
      <p>Jumlah render komponen: <b>{renders.current}</b></p>

      <div className="code">
{`const inputRef = useRef(null);
<input ref={inputRef} />`}
      </div>
    </section>
  );
}