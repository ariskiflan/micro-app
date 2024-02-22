import Button from "../Elements/Button/Button";
import Menu from "../Elements/Menu/Menu";
import Logo from "../Elements/Logo/Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-3 px-24">
      <div className="flex items-center gap-5">
        <Logo />
        <p className="text-2xl font-bold text-white">
          PEMILU PRESIDEN DUMBWAYS.ID
        </p>
      </div>

      <div className="flex items-center gap-5">
        <Menu />
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
