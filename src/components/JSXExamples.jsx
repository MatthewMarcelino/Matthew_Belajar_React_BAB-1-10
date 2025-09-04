import React from "react";

/** Bab 4 — JSX (JavaScript XML)
 * - Embedding ekspresi: { ... }
 * - Conditional rendering: ternary / && 
 * - Rendering list dengan .map
 */
export default function JSXExamples() {
  const name = "React";
  const score = 82;
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <section>
      <h2>Bab 4 — JSX Examples</h2>
      <p>Ekspresi sederhana: {"{"}name{"}"} → <b>{name}</b></p>
      <p>Conditional: skor {score} → {score >= 75 ? "Lulus" : "Remedial"}</p>

      <p>Render list:</p>
      <ul>
        {fruits.map((f, i) => <li key={i}>{i+1}. {f}</li>)}
      </ul>

      <div className="code">
{`function Hello({ name }) {
  return <h3>Halo, {name}!</h3>;
}`}
      </div>
    </section>
  );
}