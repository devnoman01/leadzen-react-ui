import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import DataRow from "./Components/DataRow/DataRow";
import Pagination from "./Components/DataRow/Pagination";

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

  // get limited data
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="w-full bg-[#F4F7FC]">
        <div className="container py-8 mx-auto">
          <div className="px-3 py-4">
            {/* data row */}
            {currentItems.map((item, index) => (
              <DataRow key={index} item={item} />
            ))}
          </div>
          <Pagination
            itemPerPage={itemPerPage}
            totalItems={data.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
