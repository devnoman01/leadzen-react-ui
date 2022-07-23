import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import DataRow from "./Components/DataRow/DataRow";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(3);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  // get current posts
  // const indexOfLastItem = currentPage * itemPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="w-full bg-[#F4F7FC]">
        <div className="container border py-8 mx-auto">
          <div className="bg-gray-100 px-3 py-4 border">
            {/* data row */}
            {data.map((item, index) => (
              <DataRow key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
