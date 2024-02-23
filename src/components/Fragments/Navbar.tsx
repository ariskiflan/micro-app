// import Button from "../Elements/Button/Button";
import Menu from "../Elements/Menu/Menu";
import Logo from "../Elements/Logo/Logo";
import Button from "../Elements/Button/Button";

type Props = {
  textNav: string;
};

const Navbar = (props: Props) => {
  const { textNav } = props;
  return (
    <header className="bg-black">
      <nav className="flex justify-between items-center py-3 px-24">
        <div className="flex items-center gap-5">
          <Logo width="w-[41px]" height="h-[41px]" />
          <p className="text-2xl font-bold text-white">{textNav}</p>
        </div>

        <div className="flex items-center gap-5">
          <Menu />
          <Button
            lgnBtn="bg-white text-black text-xl font-bold rounded-md py-1 px-5"
            text="Login"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
