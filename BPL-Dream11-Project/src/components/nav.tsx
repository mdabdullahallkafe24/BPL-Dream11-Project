import { AiFillDollarCircle } from "react-icons/ai";
import logo from "../assets/logo.png";

interface NavProps {
  coin: number;
}

const Nav = ({ coin }: NavProps) => {
  return (
    <nav className="bg-red-100">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="logo" />
        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <strong className="flex items-center gap-1">
          <AiFillDollarCircle />
          {coin}
        </strong>
      </div>
    </nav>
  );
};

export default Nav;