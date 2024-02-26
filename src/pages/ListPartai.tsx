import Navbar from "../components/Fragments/Navbar";
import Logo from "../assets/monyet.png";

const ListPartai = () => {
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
      <body className="bg-white">
        <Navbar textNav="PEMILU PRESIDEN DUMBWAYS.ID" listItem={nameList} />

        <main className="flex items-center justify-center flex-col">
          <h1 className="text-[48px] font-[900] my-[50px] text-login">
            LIST PARTAI
          </h1>
          <div className="w-full max-w-[1095px] overflow-x-auto">
            <table className="w-full table-fixed border-collapse border text-center">
              <thead className="border border-line bg-thead h-[40px]">
                <tr>
                  <th className=" w-[72px] border-r border-line">No. Urut</th>
                  <th className="w-[183px] border-r border-line">Logo</th>
                  <th className="w-[190px] border-r border-line">Ketua Umum</th>
                  <th className="w-[325px] border-r border-line">
                    Visi & Misi
                  </th>
                  <th className="w-[320px] border-r border-line">Alamat</th>
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
                  <td className="border border-line pb-5">
                    <ul className="list-disc text-left ml-7 text-[16px] font-[400]">
                      <li>Memindahkan Indonesia ke Isekai.</li>
                      <li>Nonton anime 3x sehari.</li>
                      <li>Melakukan peresapan pada budaya jepang</li>
                    </ul>
                  </td>
                  <td className="border border-line text-left pl-3 pb-[90px]">
                    <p className="text-black font-[400] text-[16px]">Shibuya</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </body>
    </div>
  );
};

export default ListPartai;
