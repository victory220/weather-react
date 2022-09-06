import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (input.length < 1) {
      alert("Type a city");
    } else {
      setCity(input);
    }
  }
  function updateCity(event) {
    event.preventDefault();
    setInput(event.target.value);
  }
  return (
    <div className="Search">
      <form
        className="d-flex justify-content-center align-items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control search-input"
          type="search"
          placeholder="Enter a city"
          onChange={updateCity}
          autoFocus
        />
        <input className="btn btn-secondary" type="submit" value="Search" />
      </form>
      <Weather city={city} />
    </div>
  );
}
