import Logo from "../Elements/Logo/Logo";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Button from "../Elements/Button/Button";
import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import ModalLogin from "../../pages/ModalLogin";
import ModalRegister from "../../pages/ModalRegister";

type Props = {
  textNav: string;
  listItem: string[];
};

const Navbar = (props: Props) => {
  const { textNav, listItem } = props;
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleRegister = (): void => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  const handleLogin = (): void => {
    setOpenLogin(true);
    setOpenRegister(false);
  };

  // const [isLogin, setIsLogin] = useState(false);

  // const handleClick = () => {
  //   setIsLogin(!isLogin);
  // };
  return (
    <header className="bg-black">
      <nav className="flex justify-between items-center py-3 px-24">
        <div className="flex items-center gap-5">
          <Link to="/">
            <Logo width="w-[41px]" height="h-[41px]" />
          </Link>
          <p className="text-2xl font-bold text-white">{textNav}</p>
        </div>

        <div className="flex items-center gap-5">
          <ul className="text-white text-2xl flex items-center gap-5 font-normal">
            {listItem.map((item, index) => (
              <React.Fragment key={index}>
                <li> {item} </li>
                {index < listItem.length - 1 && <li> | </li>}
              </React.Fragment>
            ))}

            {/* <Link to="/addpartai">
              <li>Partai</li>
            </Link>
            <li>|</li>
            <Link to="/addpaslon">
              <li>paslon</li>
            </Link>
            <li>|</li>
            <Link to="/vote">
              <li>Voting</li>
            </Link> */}
          </ul>

          {/* <button
            onClick={handleClick}
            className={`${
              isLogin
                ? "rounded-full bg-white text-black font-bold px-3 py-1"
                : "bg-white text-black px-5 py-1 rounded-md font-bold"
            } `}
          >
            {isLogin ? "D" : "LOGIN"}
          </button> */}

          <button
            className="bg-white text-black px-5 py-1 rounded-md font-bold"
            onClick={() => setOpenLogin(true)}
          >
            Login
          </button>

          <ModalLogin open={openLogin} onClose={() => setOpenLogin(false)}>
            <div className=" flex items-center justify-center flex-col">
              <div className="w-[350px] bg-white mt-[20px] px-[30px] py-[20px] rounded-[20px] ">
                <h1 className="text-[32px] font-[900] text-login text-center mb-[15px]">
                  LOGIN
                </h1>

                <form action="">
                  <div className="flex flex-col gap-[10px] mb-[20px]">
                    <div>
                      <Label text="Username" />
                      <Input
                        placeholder="example@mail.com"
                        type="text"
                        name="text"
                      />
                    </div>

                    <div>
                      <Label text="Password" />
                      <Input
                        placeholder="*********"
                        type="password"
                        name="password"
                      />
                    </div>
                  </div>
                </form>

                <Button
                  lgnBtn="rounded-[10px] bg-login px-[4px] py-[5px] w-full text-white font-bold text-[14px]"
                  text="SUBMIT"
                />

                <p className="text-[20px] font-[400] text-acount text-center mt-[10px] italic">
                  Belum Punya Akun? {""}
                  <span onClick={handleRegister} className="text-register">
                    Register
                  </span>
                </p>
              </div>
            </div>
          </ModalLogin>

          <ModalRegister
            registerOpen={openRegister}
            onClose={() => setOpenRegister(false)}
          >
            <div className=" flex items-center justify-center flex-col">
              <div className="w-[350px] bg-white mt-[10px] px-[30px] py-[20px] rounded-[20px] ">
                <h1 className="text-[32px] font-[900] text-login text-center mb-[15px]">
                  REGISTER
                </h1>

                <form action="">
                  <div className="flex flex-col gap-[10px] mb-[20px]">
                    <div>
                      <Label text="Fullname" />
                      <Input
                        placeholder="Aris Kiflan"
                        type="text"
                        name="text"
                      />
                    </div>

                    <div>
                      <Label text="Alamat" />
                      <Input placeholder="Alamat" type="text" name="text" />
                    </div>

                    <div>
                      <Label text="Jenis Kelamin" />
                      <Input
                        placeholder="Jenis Kelamin"
                        type="text"
                        name="text"
                      />
                    </div>

                    <div>
                      <Label text="Username" />
                      <Input
                        placeholder="Example@mail.com"
                        type="text"
                        name="text"
                      />
                    </div>

                    <div>
                      <Label text="Password" />
                      <Input
                        placeholder="*************"
                        type="password"
                        name="password"
                      />
                    </div>
                  </div>
                </form>

                <Button
                  lgnBtn="rounded-[10px] bg-login px-[4px] py-[5px] w-full text-white font-bold text-[14px]"
                  text="SUBMIT"
                />
                <p className="text-[20px] font-[400] text-acount text-center mt-[10px] italic">
                  Sudah Punya Akun? {""}
                  <span onClick={handleLogin} className="text-register">
                    Login
                  </span>
                </p>
              </div>
            </div>
          </ModalRegister>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
