import React from "react";
import { add, person, greet, mergeAndSum, pickTitle } from "./ES6Examples.js";

export default function ES6Demo() {
  return (
    <section>
      <h2>Bab 2 — JavaScript (ES6) untuk React</h2>
      <ul>
        <li>Arrow function, destructuring, spread/rest, default parameter.</li>
        <li>Module import/export untuk pemisahan kode.</li>
      </ul>
      <div className="code">
{`// ES6Examples.js
export const add = (a, b) => a + b;
export const person = { name: "Matthew", age: 17 };
export function greet({ name }) { return \`Hello, \${name}!\`; }`}
      </div>

      <p><strong>Demo:</strong></p>
      <ul>
        <li>add(2, 3) = {add(2, 3)}</li>
        <li>greet(person) = {greet(person)}</li>
        <li>mergeAndSum([1,2],[3,4]) = {mergeAndSum([1,2],[3,4])}</li>
        <li>pickTitle() (default) = {pickTitle()}</li>
      </ul>
    </section>
  );
}