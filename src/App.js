import { useEffect, useState } from "react";
import "./App.css";
import DataRow from "./Components/DataRow";
import LoadingSpinner from "./Components/LoadingSpinner";
import Pagination from "./Components/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(3);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      });
  }, []);

  // get limited data
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // loading spinner
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="w-full h-screen bg-[#F4F7FC]">
        <div className="container py-8 mx-auto">
          <div className="px-3 py-4">
            {/* data row */}
            {currentItems.map((item, index) => (
              <DataRow key={index} item={item} />
            ))}
          </div>

          {/* pagination component */}
          <Pagination
            itemPerPage={itemPerPage}
            totalItems={data.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}

export default App;
