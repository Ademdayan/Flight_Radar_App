import c from "../../utils/nullCheck";

const Head = ({ info, close }) => {
  return (
    <div>
      <div className="close-wrapper">
        <div>
          <h3 title="Call Sign">
            {c(info?.identification?.callsign, "yellow")}
          </h3>
          <span title="Flight Number" className="number">
            {c(info?.identification?.number?.default)}
          </span>
          <span title="Aircraft IATA/ICAO type code" className="model">
            {c(info?.aircraft?.model?.code)}
          </span>
        </div>
        <button onClick={close}>x</button>
      </div>
    </div>
  );
};

export default Head;
