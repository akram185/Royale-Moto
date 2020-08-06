import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link className="royale" to="/">
        Royale Moto{" "}
      </Link>
      <Link className="home" to="/">
        Royale's Collection{" "}
      </Link>
      <Link className="collection" to="/collection">
        Add to our collection{" "}
      </Link>
    </nav>
  );
}
