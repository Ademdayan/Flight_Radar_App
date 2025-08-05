import { BsAirplaneFill } from "react-icons/bs";
import c from "../../utils/nullCheck";

const Aircraft = ({ data }) => {
  return (
    <div className="aircraft">
      <div className="icon">
        <BsAirplaneFill />
      </div>
      <div>
        <p>
          <span className="title">
            AIRCRAFT TYPE <small>({c(data?.model?.code)})</small>
          </span>
          <span>{c(data?.model?.text)} </span>
        </p>
        <div>
          <p>
            <span className="title">REGISTRATION</span>
            <span>{c(data?.registration)}</span>
          </p>
          <p>
            <span className="title">COUNTRY OF ID</span>
            <span>{c(data?.countryId)}</span>
          </p>
          <p>
            <span className="title">AIRCRAFT CATEGORY</span>
            <span>Passenger</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aircraft;
