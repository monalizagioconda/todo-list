import React from "react";

export default function Subject({ title, onClick }) {
  return <p onClick={onClick}>{title}</p>;
}
