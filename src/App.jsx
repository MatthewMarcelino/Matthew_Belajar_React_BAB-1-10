import React, { useState } from "react";
import Intro from "./components/Intro.jsx";
import ES6Demo from "./components/ES6Demo.jsx";
import JSXExamples from "./components/JSXExamples.jsx";
import ComponentsDemo from "./components/ComponentsDemo.jsx";
import PropsDemo from "./components/PropsDemo.jsx";
import EventsDemo from "./components/EventsDemo.jsx";
import StateClassDemo from "./components/StateClassDemo.jsx";
import UseStateDemo from "./components/UseStateDemo.jsx";
import UseRefDemo from "./components/UseRefDemo.jsx";

const sections = [
  { key: "intro", label: "Bab 1 — Pengenalan" },
  { key: "es6", label: "Bab 2 — ES6" },
  { key: "jsx", label: "Bab 4 — JSX" },
  { key: "components", label: "Bab 5 — Komponen" },
  { key: "props", label: "Bab 6 — Props" },
  { key: "events", label: "Bab 7 — Event" },
  { key: "stateClass", label: "Bab 8 — State (Class)" },
  { key: "useState", label: "Bab 9 — useState" },
  { key: "useRef", label: "Bab 10 — useRef" },
];

export default function App() {
  const [active, setActive] = useState("intro");

  function renderSection() {
    switch (active) {
      case "intro": return <Intro />;
      case "es6": return <ES6Demo />;
      case "jsx": return <JSXExamples />;
      case "components": return <ComponentsDemo />;
      case "props": return <PropsDemo />;
      case "events": return <EventsDemo />;
      case "stateClass": return <StateClassDemo />;
      case "useState": return <UseStateDemo />;
      case "useRef": return <UseRefDemo />;
      default: return <Intro />;
    }
  }

  return (
    <div className="container">
      <h1>React Uncover — Demo Bab 1–10</h1>
      <p style={{color:"#9ca3af", marginTop: -8}}>Contoh ringkas, fokus ke konsep utama.</p>

      <div className="nav">
        {sections.map(s => (
          <button
            key={s.key}
            className={"nav-btn " + (active === s.key ? "active" : "")}
            onClick={() => setActive(s.key)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="card">
        {renderSection()}
      </div>
    </div>
  );
}