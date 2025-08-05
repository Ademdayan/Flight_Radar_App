import { NavLink } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="buttons">
      <NavLink to="/">
        <button>Map</button>
      </NavLink>
      <NavLink to="/list">
        <button>List</button>
      </NavLink>
    </div>
  );
};

export default Buttons;
