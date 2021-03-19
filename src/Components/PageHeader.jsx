import React from "react";

export default function PageHeader({ title }) {
  return (
    <div style={{ position: "sticky" }}>
      <h1>{title}</h1>
    </div>
  );
}
