import Logo from "../Elements/Logo/Logo";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
import Modal from "./Modal";

type Props = {
  textNav: string;
  // listItem: string[];
  listItem: {
    linkTo: string;
    list: string;
  }[];
};

const Navbar = (props: Props) => {
  const { textNav, listItem } = props;
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [userLogin, setUserLogin] = useState(false);

  const handleRegister = (): void => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  const handleLogin = (): void => {
    setOpenLogin(true);
    setOpenRegister(false);
  };

  const loginUser = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setUserLogin(!userLogin);
    setOpenLogin(false);
  };

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
                <Link to={item.linkTo}>
                  <li> {item.list} </li>
                </Link>
                {index < listItem.length - 1 && <li> | </li>}
              </React.Fragment>
            ))}
          </ul>

          {userLogin === false ? (
            <div className="flex items-center">
              <button
                className="bg-white text-xl font-[700] px-7 py-1 rounded-md ml-5 hover:bg-black  hover:text-white border-2 border-white transition-all"
                onClick={() => setOpenLogin(true)}
              >
                LOGIN
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <button className="bg-white text-xl font-[700] h-11 w-11 flex justify-center items-center rounded-full ml-5">
                A
              </button>
            </div>
          )}

          <Modal open={openLogin} onClose={() => setOpenLogin(false)}>
            <div className=" flex items-center justify-center flex-col">
              <div className="w-[350px] bg-white mt-[20px] px-[30px] py-[20px] rounded-[20px] ">
                <h1 className="text-[32px] font-[900] text-login text-center mb-[15px]">
                  LOGIN
                </h1>

                <form action="">
                  <div className="flex flex-col gap-[10px] mb-[20px]">
                    <div>
                      <Label text="Username" htmlfor="username" />
                      <Input
                        placeholder="example@mail.com"
                        type="text"
                        name="text"
                        id="username"
                      />
                    </div>

                    <div>
                      <Label text="Password" htmlfor="password" />
                      <Input
                        placeholder="*********"
                        type="password"
                        name="password"
                        id="password"
                      />
                    </div>
                  </div>
                </form>

                <button
                  onClick={loginUser}
                  className="rounded-[10px] transition-all bg-login px-[4px] py-[5px] w-full text-white font-bold text-[14px]  hover:bg-white  hover:text-login border-2 border-login"
                >
                  SUBMIT
                </button>

                <p className="text-[20px] font-[400] text-acount text-center mt-[10px] italic">
                  Belum Punya Akun? {""}
                  <span
                    onClick={handleRegister}
                    className="text-register cursor-pointer"
                  >
                    Register
                  </span>
                </p>
              </div>
            </div>
          </Modal>

          <Modal open={openRegister} onClose={() => setOpenRegister(false)}>
            <div className=" flex items-center justify-center flex-col">
              <div className="w-[350px] bg-white mt-[10px] px-[30px] py-[20px] rounded-[20px] ">
                <h1 className="text-[32px] font-[900] text-login text-center mb-[15px]">
                  REGISTER
                </h1>

                <form action="">
                  <div className="flex flex-col gap-[10px] mb-[20px]">
                    <div>
                      <Label text="Fullname" htmlfor="fullname" />
                      <Input
                        id="fullname"
                        placeholder="Aris Kiflan"
                        type="text"
                        name="text"
                      />
                    </div>

                    <div>
                      <Label text="Alamat" htmlfor="alamat" />
                      <Input
                        placeholder="Alamat"
                        type="text"
                        name="text"
                        id="alamat"
                      />
                    </div>

                    <div>
                      <Label text="Jenis Kelamin" htmlfor="jeniskelamin" />
                      <Input
                        placeholder="Jenis Kelamin"
                        type="text"
                        name="text"
                        id="jeniskelamin"
                      />
                    </div>

                    <div>
                      <Label text="Username" htmlfor="usernameregist" />
                      <Input
                        placeholder="Example@mail.com"
                        type="text"
                        name="text"
                        id="usernameregist"
                      />
                    </div>

                    <div>
                      <Label text="Password" htmlfor="passwordregist" />
                      <Input
                        placeholder="*************"
                        type="password"
                        name="password"
                        id="passwordregist"
                      />
                    </div>
                  </div>
                </form>

                <button
                  onClick={handleLogin}
                  className="transition-all rounded-[10px] bg-login px-[4px] py-[5px] w-full text-white font-bold text-[14px]  hover:bg-white  hover:text-login border-2 border-login"
                >
                  SUBMIT
                </button>

                {/* <Button
                  lgnBtn="transition-all rounded-[10px] bg-login px-[4px] py-[5px] w-full text-white font-bold text-[14px]  hover:bg-white  hover:text-login border-2 border-login"
                  text="SUBMIT"
                /> */}
                <p className="text-[20px] font-[400] text-acount text-center mt-[10px] italic">
                  Sudah Punya Akun? {""}
                  <span
                    onClick={handleLogin}
                    className="text-register cursor-pointer"
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </Modal>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
