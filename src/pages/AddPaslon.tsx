import MonyetImg from "../assets/monyet.png";
import Label from "../components/Elements/Input/Label";
import Input from "../components/Elements/Input/Input";
import Button from "../components/Elements/Button/Button";

import Navbar from "../components/Fragments/Navbar";

const AddPaslon = () => {
  return (
    <div>
      <Navbar
        textNav="PEMILU PRESIDEN DUMBWAYS.ID"
        listItem={["Partai", "Paslon"]}
      />

      <main className="flex items-center justify-center flex-col">
        <h1 className="text-[48px] font-[700] mt-[50px] text-login">
          ADD PASLON
        </h1>
        <div className="flex gap-[50px] w-[1140px] px-[100px] bg-white pt-[15px] mt-[50px] mb-[20px] ">
          <div>
            <img
              className="w-[368px] h-[523px]"
              src={MonyetImg}
              alt="foto malik"
            />
          </div>

          <div className="w-[500px]">
            <form action="">
              <div className="flex flex-col gap-[20px] mb-[50px] ">
                <div>
                  <Label text="Nama" />
                  <Input placeholder="Malik" type="text" name="text" />
                </div>

                <div>
                  <Label text="Nomor Urut" />
                  <Input placeholder="01" type="text" name="text" />
                </div>

                <div>
                  <Label text="Visi Misi" />
                  <textarea
                    className="border-solid border-[2px] h-[150px] border-black rounded-[10px] text-[20px] w-full px-[10px] py-[10px] placeholder: opacity-50"
                    name=""
                    id=""
                    placeholder="Foya-Foya"
                  ></textarea>
                </div>

                <Button
                  lgnBtn="rounded-[10px] bg-login px-[5px] py-[2px] w-full text-white font-bold text-[32px]"
                  text="SUBMIT"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddPaslon;
