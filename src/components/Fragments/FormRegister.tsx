import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import Input from "../Elements/Input/Input";
import Label from "../Elements/Input/Label";

type Props = {
  textH1: string;
};
const FormRegister = (props: Props) => {
  const { textH1 } = props;
  return (
    <div>
      <div>
        <div className=" flex items-center justify-center flex-col">
          <div className="w-[500px] bg-white mt-[20px] px-[30px] py-[60px] rounded-[20px] ">
            <h1 className="text-[48px] font-[900] text-login text-center mb-[30px]">
              {textH1}
            </h1>

            <form action="">
              <div className="flex flex-col gap-[20px] mb-[50px]">
                <div>
                  <Label text="Fullname" />
                  <Input placeholder="Aris Kiflan" type="text" name="text" />
                </div>

                <div>
                  <Label text="Alamat" />
                  <Input placeholder="Alamat" type="text" name="text" />
                </div>

                <div>
                  <Label text="Jenis Kelamin" />
                  <Input placeholder="Jenis Kelamin" type="text" name="text" />
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
              lgnBtn="rounded-[10px] bg-login px-[5px] py-[2px] w-full text-white font-bold text-[32px]"
              text="SUBMIT"
            />
            <p className="text-[24px] font-[400] text-acount text-center mt-[15px] italic">
              Sudah Punya Akun? {""}
              <Link to="/login" className="text-register">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
