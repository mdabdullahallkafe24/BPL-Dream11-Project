import { AiFillDollarCircle } from "react-icons/ai";
import logo from "../assets/logo.png";

interface NavProps {
  coin: number;
}

const Nav = ({ coin }: NavProps) => {
  return (
    <nav className="bg-red-100 py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img src={logo} alt="logo" className="h-10 object-contain" />
        <ul className="flex gap-4 sm:gap-6 items-center text-sm font-medium">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <strong className="flex items-center gap-1 text-sm font-bold">
          <AiFillDollarCircle size={20} color="#f59e0b" />
          {coin}
        </strong>
      </div>
    </nav>
  );
};

export default Nav;