import React from "react";

export default function Datalist({ id, values }) {
  return (
    <datalist id={id}>
      {values.map(value => (
        <option key={value} value={value} />
      ))}
    </datalist>
  );
}
