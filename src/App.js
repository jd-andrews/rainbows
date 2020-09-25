import React from "react";
import AllStripes from "./stripes/allStripes";
import Input from "./input/input";
import "./App.css";

export default function App() {
  return (
    <div>
      <div>
        <Input />
      </div>
      <div>
        <AllStripes />
      </div>
    </div>
  );
}
