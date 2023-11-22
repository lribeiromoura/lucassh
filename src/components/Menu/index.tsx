import { useEffect, useState } from "react";

import Link from "next/link";

type Anchor = "top" | "left" | "bottom" | "right";

export default function Menu() {
  const routes = [
    {
      label: "SHOWS",
      to: "/Shows",
    },
    {
      label: "VIDEOS",
      to: "/Videos",
    },
  ];

  return (
    <>
      <header>
        <div>
          <h1 className="logo long-text">
            <Link href="/">LUCAS STHORACHE</Link>
          </h1>
          <nav>
            <ul>
              {routes.map((route, index) => (
                <li key={index}>
                  <Link href={route.to}>{route.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
