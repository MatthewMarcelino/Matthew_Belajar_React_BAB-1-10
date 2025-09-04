import React, { Component } from "react";

/** Bab 5 — React Component
 * - Function component (modern) + Class component (legacy)
 */
function Badge({ children }) {
  return <span style={{padding:"4px 8px", border:"1px solid #334155", borderRadius:8}}>{children}</span>;
}

function FunctionWelcome({ name }) {
  return <h3>Halo dari Function Component, {name}!</h3>;
}

class ClassWelcome extends Component {
  render() {
    return <h3>Halo dari Class Component, {this.props.name}!</h3>;
  }
}

export default function ComponentsDemo() {
  return (
    <section>
      <h2>Bab 5 — Components</h2>
      <Badge>Reusable UI</Badge>
      <FunctionWelcome name="Matthew" />
      <ClassWelcome name="Morgan" />
      <div className="code">
{`function FunctionWelcome({ name }) {
  return <h3>Halo, {name}!</h3>;
}

class ClassWelcome extends React.Component {
  render() { return <h3>Halo, {this.props.name}!</h3>; }
}`}
      </div>
    </section>
  );
}