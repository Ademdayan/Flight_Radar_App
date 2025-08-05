import c from "../../utils/nullCheck";

const Airport = ({ data }) => {
  return (
    <div className="airport">
      <div>
        <h2>{c(data.origin?.code?.iata)} </h2>
        <h7>{c(data.origin?.position?.region?.city)} </h7>
        <span>
          {c(data.origin?.timezone?.abbr)} (UTC+{" "}
          {c(data.origin?.timezone?.offsetHours)} )
        </span>
      </div>
      <div className="plane-img">
        <img src="./plane-icon.png" alt="" />
      </div>
      <div>
        <h2>{c(data.destination?.code?.iata)} </h2>
        <h7>{c(data.destination?.position?.region?.city)} </h7>
        <span>
          {c(data.destination?.timezone?.abbr)} (UTC+
          {c(data.destination?.timezone?.offsetHours)} )
        </span>
      </div>
    </div>
  );
};

export default Airport;
