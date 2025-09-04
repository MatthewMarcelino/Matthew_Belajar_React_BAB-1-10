import React from "react";

/** Bab 1 — Berkenalan Dengan React
 * - React adalah library UI berbasis komponen.
 * - Membuat SPA interaktif dengan state & props.
 * - Bersifat declarative: UI mengikuti state.
 */
export default function Intro() {
  return (
    <section>
      <h2>Bab 1 — Berkenalan Dengan React</h2>
      <p>
        React membantu membuat antarmuka pengguna (UI) yang interaktif dengan memecah UI
        menjadi komponen-komponen kecil yang dapat digunakan ulang.
      </p>
      <ul>
        <li>UI deklaratif: cukup tentukan “seperti apa” tampilan saat ini.</li>
        <li>Komponen: blok penyusun UI yang reusable.</li>
        <li>State & Props: data yang menggerakkan UI.</li>
      </ul>
      <div className="code">
{`function Hello() {
  return <h3>Halo React!</h3>;
}`}
      </div>
    </section>
  );
}