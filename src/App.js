import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import DataRow from "./Components/DataRow/DataRow";

function App() {
  return (
    <>
      <div className="w-full bg-[#F4F7FC]">
        <div className="container border py-8 mx-auto">
          <div className="bg-gray-100 px-3 py-4 border">
            {/* user row */}
            <DataRow />
            <DataRow />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
