import Navbar from "../components/Fragments/Navbar";
import Logo from "../assets/monyet.png";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ListPaslon = () => {
  const nameList = [
    {
      linkTo: "/listpartai",
      list: "Partai",
    },
    {
      linkTo: "/listpaslon",
      list: "Paslon",
    },
  ];

  return (
    <div>
      <body className="bg-white">
        <Navbar textNav="PEMILU PRESIDEN DUMBWAYS.ID" listItem={nameList} />

        <main className="flex items-center justify-center flex-col">
          <div>
            <h1 className="text-[48px] font-[900] my-[50px] text-login text-center">
              LIST PASLON
            </h1>

            <div className="flex justify-end mb-[20px]">
              <Link to="/addpaslon">
                <button className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md">
                  <span className="flex items-center gap-1">
                    <FaPlus />
                    Paslon
                  </span>
                </button>
              </Link>
            </div>

            <div className="w-full max-w-[1095px] overflow-x-auto">
              <table className="w-full table-fixed border-collapse border text-center">
                <thead className="border border-line bg-thead h-[40px]">
                  <tr>
                    <th className=" w-[72px] border-r border-line">No. Urut</th>
                    <th className="w-[183px] border-r border-line">Image</th>
                    <th className="w-[190px] border-r border-line">Name</th>
                    <th className="w-[325px] border-r border-line">
                      Visi & Misi
                    </th>
                    <th className="w-[320px] border-r border-line">Koalisi</th>
                  </tr>
                </thead>
                <tbody className="border borde-line">
                  <tr>
                    <td className="border border-line pb-[90px]">1</td>
                    <td className="border border-line">
                      <img
                        src={Logo}
                        className="my-[10px] ml-[52px] w-[78px] h-[94px] rounded-[10px]"
                        alt="Logo"
                      />
                    </td>
                    <td className="border border-line pb-[90px]">
                      <p className="text-black font-[400] text-[16px]">
                        Cintara Surya Paloh
                      </p>
                    </td>
                    <td className="border border-line pb-[50px]">
                      <ul className="list-disc text-left ml-7 text-[15px] font-[400]">
                        <li>Memindahkan Indonesia ke Isekai.</li>
                        <li>Nonton anime 3x sehari.</li>
                        <li>Melakukan peresapan pada budaya jepang.</li>
                      </ul>
                    </td>
                    <td className="border border-line pb-[50px] ">
                      <ul className="list-disc text-left ml-7 text-[15px] font-[400]">
                        <li>Partai Persatuan Wiboo</li>
                        <li>Partai Redbull.</li>
                        <li>Partai Black Magic.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default ListPaslon;
