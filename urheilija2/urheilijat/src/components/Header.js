import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/" className="headerlink-title">Urheilijat</Link>
        </li>
      </ul>
    </header>
  );
}