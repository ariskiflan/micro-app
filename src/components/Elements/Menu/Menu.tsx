import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="text-white text-2xl flex items-center gap-5 font-normal">
      <Link to="/addpartai">
        <li>Partai</li>
      </Link>
      <li>|</li>
      <Link to="/addpaslon">
        <li>paslon</li>
      </Link>
      <li>|</li>
      <li>Voting</li>
    </ul>
  );
};

export default Menu;
