import { MdErrorOutline } from "react-icons/md";

const Error = ({ info, onRetry }) => {
  return (
    <div className="error">
      <div className="error-container">
        <MdErrorOutline className="error-icon" />
        <h2>Flight Information Unavailable</h2>
        <p>
          {info ||
            "There was an issue retrieving flight details. Please try again."}
        </p>
        {onRetry && <button onClick={onRetry}>Retry</button>}
      </div>
    </div>
  );
};

export default Error;
