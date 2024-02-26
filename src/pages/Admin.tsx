import Navbar from "../components/Fragments/Navbar";
import Monyet2 from "../assets/monyet2.png";

const Admin = () => {
  const listTable = [
    {
      no: "1",
      name: "Sugeng No Pants",
      addres: "Cileungsi",
      gender: "Laki-Laki",
      paslon: "Paloh",
    },
    {
      no: "2",
      name: "Haris Gams",
      addres: "Serang",
      gender: "Perempuan",
      paslon: "Surya",
    },
    {
      no: "3",
      name: "Aziz Union",
      addres: "Bekasi",
      gender: "Laki-Laki",
      paslon: "Cintara",
    },
    {
      no: "4",
      name: "Lae Tanjung Balai",
      addres: "Tanjung Balai",
      gender: "Laki-Laki",
      paslon: "Paloh",
    },
  ];

  const nameList = [
    {
      linkTo: "/addpartai",
      list: "Partai",
    },
    {
      linkTo: "/addpaslon",
      list: "Paslon",
    },
  ];

  return (
    <div>
      <body bg-white>
        <Navbar textNav="DASHBOARD PEMILU" listItem={nameList} />

        <main className="flex items-center justify-center flex-col my-[50px]">
          <h1 className="text-[48px] font-[700] text-login">DASHBOARD</h1>

          <div className="grid grid-cols-3 gap-[30px] mt-[50px]">
            <div className="col-span-1 ">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-10 bg-dashboard1 border-8 border-login rounded-full text-center text-login text-[40px] font-bold">
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
                  <p className="font-[900] text-[40px] text-login">MALIK</p>
                  <p className="text-login text-[20px] font-[500]">
                    Akumulasi: 45%
                  </p>
                  <p className="text-login text-[20px] font-[500]">
                    Jumlah Vote: 117 Voters
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 ">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-10 bg-dashboard2  border-8 border-nopas2 rounded-full text-center text-nopas2 text-[40px] font-bold">
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
                  <p className="font-[900] text-[40px] text-nopas2">MALIK</p>
                  <p className="text-nopas2 text-[20px] font-[500]">
                    Akumulasi: 75%
                  </p>
                  <p className="text-nopas2 text-[20px] font-[500]">
                    Jumlah Vote: 300 Voters
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 ">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-10 bg-dashboard3 border-8 border-colorpaslon3 rounded-full text-center text-colorpaslon3  text-[40px] font-bold">
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
                  <p className="font-[900] text-[40px] text-colorpaslon3">
                    MALIK
                  </p>
                  <p className="text-colorpaslon3 text-[20px] font-[500]">
                    Akumulasi: 45%
                  </p>
                  <p className="text-colorpaslon3 text-[20px] font-[500]">
                    Jumlah Vote: 117 Voters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="bg-body h-[450px]">
          <div className="w-full flex flex-col items-center ">
            <h1 className="text-[48px] font-[700] my-[30px] text-login text-center">
              LIST VOTER
            </h1>
            <table className="text-left border border-collapse table-auto border-slate-400 border-spacing-x-5">
              <thead className="">
                <tr className="bg-white">
                  <th className="p-3 text-center border bg-slate-200 border-slate-300">
                    No
                  </th>
                  <th className="border ps-2 pe-40 bg-slate-200 border-slate-300">
                    Nama
                  </th>
                  <th className="border ps-2 pe-40 bg-slate-200 border-slate-300">
                    Alamat
                  </th>
                  <th className="border ps-2 pe-40 bg-slate-200 border-slate-300">
                    Jenis Kelamin
                  </th>
                  <th className="border ps-2 pe-40 bg-slate-200 border-slate-300">
                    Paslon
                  </th>
                </tr>
              </thead>
              <tbody>
                {listTable.map((item) => (
                  <tr className="bg-white">
                    <td className="py-2 text-center border border-slate-300">
                      {item.no}
                    </td>
                    <td className="border ps-2 border-slate-300">
                      {item.name}
                    </td>
                    <td className="border ps-2 border-slate-300">
                      {item.addres}
                    </td>
                    <td className="border ps-2 border-slate-300">
                      {item.gender}
                    </td>
                    <td className="border ps-2 border-slate-300">
                      {item.paslon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className=" text-[24px] font-[700] ps-[185px] mt-[20px]">
            TOTAL SUARA TERKUMPUL : 1000 Voters
          </p>
        </div>
      </body>
    </div>
  );
};

export default Admin;
