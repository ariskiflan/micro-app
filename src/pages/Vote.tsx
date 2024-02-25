import Chart from "../assets/chart.png";
import Button from "../components/Elements/Button/Button";
import Footer from "../components/Fragments/Footer";
import Profil from "../assets/monyet.png";
import Navbar from "../components/Fragments/Navbar";

const Vote = () => {
  return (
    <div>
      <body className="bg-white">
        <Navbar
          textNav="PEMILU PRESIDEN DUMBWAYS.ID"
          listItem={["Partai", "Paslon", "Voting"]}
        />

        <main className="flex items-center justify-center flex-col">
          <h1 className="text-[48px] font-[700] mt-[50px] text-login">
            INFO PEMILU TERUPDATE
          </h1>
          <div className="flex justify-center items-center gap-[50px] w-full bg-white pt-[15px] mt-[50px] mb-[50px]">
            <div className="flex flex-col items-center justify-center gap-[30px]">
              <p className="text-[40px] text-black font-[900]">Hasil :</p>
              <img
                className="w-[377px] h-[368px]"
                src={Chart}
                alt="Chart Image"
              />
            </div>

            <div className="flex flex-col gap-[30px]">
              <div className="bg-chart1 w-[657px] h-[146px] rounded-[15px] flex justify-center items-center gap-[30px] px-[30px]">
                <div className="bg-colorpaslon3 w-[80px] h-[112px] rounded-[10px] p-[10px] text-center">
                  <p className="text-[16px] font-[700] text-white">No.</p>
                  <p className="text-[16px] font-[700] text-white">Paslon</p>
                  <p className="text-[32px] font-[700] text-white">3</p>
                </div>

                <div>
                  <p className="text-colorpaslon3 text-[40px] font-[900]">
                    CINTARA SURYA PALOH
                  </p>
                  <p className="text-[36px] font-[700] text-colorpaslon3">
                    78%
                  </p>
                </div>
              </div>

              <div className="bg-chart2 w-[657px] h-[146px] rounded-[15px] flex items-center gap-[30px] px-[30px]">
                <div className="bg-login w-[80px] h-[112px] rounded-[10px] p-[10px] text-center">
                  <p className="text-[16px] font-[700] text-white">No.</p>
                  <p className="text-[16px] font-[700] text-white">Paslon</p>
                  <p className="text-[32px] font-[700] text-white">1</p>
                </div>

                <div>
                  <p className="text-login text-[40px] font-[900]">
                    SURYA SURYA
                  </p>
                  <p className="text-[36px] font-[700] text-login">45%</p>
                </div>
              </div>

              <div className="bg-chart3 w-[657px] h-[146px] rounded-[15px] flex items-center gap-[30px] px-[30px]">
                <div className="bg-colorpaslon1 w-[80px] h-[112px] rounded-[10px] p-[10px] text-center">
                  <p className="text-[16px] font-[700] text-white">No.</p>
                  <p className="text-[16px] font-[700] text-white">Paslon</p>
                  <p className="text-[32px] font-[700] text-white">2</p>
                </div>

                <div>
                  <p className="text-colorpaslon1 text-[40px] font-[900]">
                    CINTARA
                  </p>
                  <p className="text-[36px] font-[700] text-colorpaslon1">
                    25%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[85px] mb-[50px]">
            <Button
              lgnBtn="rounded-[10px] bg-login px-[20px] py-[5px] text-white font-bold text-[32px]"
              text="Masukan Suaramu"
            />
          </div>
        </main>

        <div className="bg-body w-full flex items-center justify-center relative">
          <div className="mt-[50px] mb-[80px] ">
            <button className="rounded-full bg-white text-black font-bold px-3 py-1 absolute top-[55%] left-[100px]">
              &#11164;
            </button>

            <button className="rounded-full bg-white text-black font-bold px-3 py-1 absolute top-[55%] right-[100px]">
              &#11166;
            </button>

            <p className="text-login text-[48px] font-[900] text-center mb-[50px]">
              INFO PASLON
            </p>
            <div className="flex justify-center items-center shadow-xl shadow-neutral-500 ">
              <div className="bg-white w-[947px] h-[494px] flex justify-center items-center gap-[30px] p-[50px] rounded-[10px]">
                <div>
                  <img
                    className="w-[246px] h-[328px]"
                    src={Profil}
                    alt="Profil"
                  />
                </div>

                <div>
                  <p className="text-[24px] font-[700]">Nomor Urut: 1</p>
                  <p className="text-[40px] font-[700]">CINTARA SURYA PALOH</p>
                  <p className="text-[24px] font-[400]">Visi & Misi:</p>
                  <ul className="text-[24px] font-[400] list-disc ps-[40px]">
                    <li>Memindahkan Indonesia ke Isekai.</li>
                    <li>Nonton anime 3x sehari.</li>
                    <li>Melakukan peresapan pada budaya jepang.</li>
                  </ul>
                  <p className="text-[24px] font-[400]">Koalisi:</p>
                  <ul className="text-[24px] font-[400] list-disc ps-[40px]">
                    <li>Partai Persatuan Wiboo.</li>
                    <li>Partai Redbull.</li>
                    <li>Partai Black Magic.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full h-[384px] bg-white flex justify-center items-center px-[120px]">
            <p className="text-[40px] font-bold text-center text-date">
              PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK
              MELEGALKAN SLOT
            </p>
          </div>
        </div>

        <Footer />
      </body>
    </div>
  );
};

export default Vote;
