import React from "react";

/** Bab 6 — Props (read-only)
 * - Mengirim data dari parent ke child.
 * - Default props via default parameter.
 */
function Button({ children, onClick, size = "md" }) {
  const pad = size === "lg" ? "12px 16px" : "8px 12px";
  return (
    <button className="nav-btn" style={{padding: pad}} onClick={onClick}>
      {children}
    </button>
  );
}

function Greeting({ name = "Anon" }) {
  return <p>Halo, <b>{name}</b>! (prop dengan default)</p>;
}

export default function PropsDemo() {
  return (
    <section>
      <h2>Bab 6 — Props</h2>
      <Greeting name="Matthew" />
      <Greeting />
      <div className="row">
        <Button onClick={() => alert("Klik kecil!")}>Kecil</Button>
        <Button size="lg" onClick={() => alert("Klik besar!")}>Besar</Button>
      </div>
      <div className="code">
{`function Greeting({ name = "Anon" }) {
  return <p>Halo, <b>{name}</b>!</p>;
}`}
      </div>
    </section>
  );
}