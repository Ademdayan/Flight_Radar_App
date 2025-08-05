import { useSelector } from "react-redux";
import Loader from "../components/Modal/Loader";
import Error from "../components/Modal/Error";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = ({ setDetailId }) => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);
  //görüntülenecek ilk elemanın dizideki sırası
  const [start, setStart] = useState(0);
  //sayfa başına gösterilecek eleman sayısı
  const perPage = 10;
  //görüntülenecek son elemanın dizideki sırası
  const end = start + perPage;
  //slice ile başlangıç ve bitiş sırasını kes
  const currentFlights = flights.slice(start, end);
  //sayfa değiştiğinde state`i güncelle
  const handleChange = (event) => {
    setStart(event.selected * perPage);
  };
  console.log(start, end);
  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (error)
    return (
      <div>
        <Error info={error} />
      </div>
    );
  return (
    <div className="list-container table-responsive ">
      <table className=" table table-striped table-dark table-hover ">
        <thead>
          <tr className="">
            <th>ID</th>
            <th className="text-nowrap">Tail Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Degree</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentFlights.map((flight) => (
            <tr>
              <td>{flight.id} </td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>{flight.deg}</td>
              <td>
                <button onClick={() => setDetailId(flight.id)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handleChange}
        className="pagination"
        pageRangeDisplayed={5}
        pageCount={Math.ceil(flights.length / perPage)}
        previousLabel="< back"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default List;
