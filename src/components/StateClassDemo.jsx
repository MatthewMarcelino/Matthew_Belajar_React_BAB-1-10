import React from "react";

/** Bab 8 — State (Class Component)
 * - State lokal dengan `this.state` dan update via `this.setState`.
 * - Di React modern, hooks lebih umum, tapi contoh class tetap berguna.
 */
export default class StateClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  inc = () => this.setState(({ count }) => ({ count: count + 1 }));
  dec = () => this.setState(({ count }) => ({ count: count - 1 }));

  render() {
    return (
      <section>
        <h2>Bab 8 — State (Class)</h2>
        <p>Count: <b>{this.state.count}</b></p>
        <div className="row">
          <button className="nav-btn" onClick={this.dec}>-</button>
          <button className="nav-btn" onClick={this.inc}>+</button>
        </div>

        <div className="code">
{`class Counter extends React.Component {
  state = { count: 0 };
  inc = () => this.setState(s => ({ count: s.count + 1 }));
}`}
        </div>
      </section>
    );
  }
}