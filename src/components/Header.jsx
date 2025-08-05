import { Link, useLocation } from "react-router-dom";
import { FaPlane } from "react-icons/fa";
import Buttons from "./Buttons";
import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, error, flights } = useSelector((state) => state.flight);
  const location = useLocation(); // Şu an hangi sayfadayız?

  // List sayfasında farklı, diğer sayfalarda farklı stil verelim
  const isListPage = location.pathname === "/list";

  return (
    <header
      className={`px-3 d-flex justify-content-between align-items-center shadow ${
        isListPage ? "list-header" : "map-header"
      }`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        background: isListPage
          ? "rgba(255, 255, 255, 5)"
          : "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(3px)",
        zIndex: 1000,
      }}
    >
      <Link
        to="/"
        className="d-flex gap-2 align-items-center text-decoration-none"
      >
        <img src="/radar-logo.png" alt="Flight Radar Logo" width={80} />
        <h2>Flight Radar</h2>
      </Link>
      <Buttons />
      <h6 className="info">
        {isLoading
          ? "Searching flights..."
          : error
          ? error
          : `${flights.length} Flights Found`}
      </h6>
    </header>
  );
};

export default Header;
