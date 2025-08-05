import t from "../../utils/formatDate";
import c from "../../utils/nullCheck";

const Time = ({ data }) => {
  return (
    <div className="time">
      <div>
        <p>SCH </p>
        <span>{c(t(data.scheduled?.departure))} </span>
      </div>
      <div>
        <p>SCH</p>
        <span>{c(t(data.scheduled?.arrival))}</span>
      </div>
      <div>
        <p>ACT</p>
        <span>{c(t(data.real?.departure))} </span>
      </div>
      <div>
        <p>EST </p>
        <span>{c(t(data.estimated?.arrival))} </span>
      </div>
    </div>
  );
};

export default Time;
