"use client"

import { useSelector } from "react-redux";

export default function Home() {
  const items = useSelector(state => state.data); // accessing the entire data slice

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div className="row">
          <h2>Items List</h2>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <strong>{item.name}</strong>: {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
