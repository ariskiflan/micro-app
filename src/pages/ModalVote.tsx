import Monyet2 from "../assets/monyet2.png";
import Button from "../components/Elements/Button/Button";

const ModalVote = () => {
  return (
    <div>
      <div className=" flex items-center justify-center flex-col">
        <div className="w-[1140px] bg-white mt-[20px] px-[30px] py-[60px] rounded-[20px] ">
          <h1 className="text-[48px] font-[700] text-login text-center">
            MASUKAN PILIHANMU
          </h1>

          <div className="grid grid-cols-3 gap-[30px] mt-[50px]">
            <div className="col-span-1 relative">
              <div className="absolute top-0 right-0 flex items-center justify-center w-24 h-24 mx-auto mb-10 bg-dashboard1 border-8 border-login rounded-full text-center text-login text-[40px] font-bold">
                1
              </div>
              <div className="bg-dashboard1 rounded-xl p-6">
                <div className="mb-2">
                  <img
                    src={Monyet2}
                    className="w-full h-60 rounded-xl"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="font-[900] text-[24px] text-login">MALIK</p>
                  <p className="text-[16px] font-[500]">
                    Memindahkan manusia ke isekai
                  </p>
                  <p className="text-[16px] font-[700]">Partai Pengusung:</p>
                  <ul className="text-[16px] font-[400] list-disc ps-[40px]">
                    <li>Partai Persatuan Wiboo.</li>
                    <li>Partai Redbull.</li>
                    <li>Partai Black Magic.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-1 relative">
              <div className="absolute top-0 right-0 flex items-center justify-center w-24 h-24 mx-auto mb-10 bg-dashboard2  border-8 border-nopas2 rounded-full text-center text-nopas2 text-[40px] font-bold">
                2
              </div>
              <div className="bg-dashboard2 rounded-xl p-6">
                <div className="mb-2">
                  <img
                    src={Monyet2}
                    className="w-full h-60 rounded-xl"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="font-[900] text-[24px] text-nopas2">MALIK</p>
                  <p className="text-[16px] font-[500]">
                    Memindahkan manusia ke isekai
                  </p>
                  <p className="text-[16px] font-[700]">Partai Pengusung:</p>
                  <ul className="text-[16px] font-[400] list-disc ps-[40px]">
                    <li>Partai Persatuan Wiboo.</li>
                    <li>Partai Redbull.</li>
                    <li>Partai Black Magic.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-1 relative ">
              <div className="absolute top-0 right-0 flex items-center justify-center w-24 h-24 mx-auto mb-10 bg-dashboard3 border-8 border-colorpaslon3 rounded-full text-center text-colorpaslon3  text-[40px] font-bold">
                3
              </div>
              <div className="bg-dashboard3 rounded-xl p-6">
                <div className="mb-2">
                  <img
                    src={Monyet2}
                    className="w-full h-60 rounded-xl"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="font-[900] text-[24px] text-colorpaslon3">
                    MALIK
                  </p>
                  <p className="text-[16px] font-[500]">
                    Memindahkan manusia ke isekai
                  </p>
                  <p className="text-[16px] font-[700]">Partai Pengusung:</p>
                  <ul className="text-[16px] font-[400] list-disc ps-[40px]">
                    <li>Partai Persatuan Wiboo.</li>
                    <li>Partai Redbull.</li>
                    <li>Partai Black Magic.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center items-center gap-[30px] mb-[50px]">
          <Button
            lgnBtn="w-[503px] bg-white border-2 border-login hover:bg-login hover:text-white  text-login text-[32px] font-[700] px-8 py-1 rounded-[10px]"
            text="RESET"
          />

          <Button
            lgnBtn="w-[503px] bg-login hover:bg-white  hover:text-login border-2 border-login text-white text-[32px] font-[700] px-8 py-1 rounded-[10px]"
            text="SUBMIT"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalVote;
