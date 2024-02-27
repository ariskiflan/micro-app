import Navbar from "../components/Fragments/Navbar";
import Headline from "../assets/sample-kpu.png";
import Footer from "../components/Fragments/Footer";
import { FaArrowLeft } from "react-icons/fa6";

const DetailPage = () => {
  const dummy = [
    {
      data: `Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. Sed non diam vel mi tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti. Sed interdum, lacus ac ultrices facilisis, ligula enim pellentesque elit, vel varius nisi odio at purus. Sed suscipit purus quis tortor posuere, in varius est euismod. Mauris aliquam urna non elit faucibus, eu fermentum turpis mattis. Quisque vel nisl vitae sapien congue dapibus. Vivamus auctor, velit ut condimentum bibendum, purus lacus scelerisque ligula, nec gravida arcu velit id libero. In hac habitasse platea dictumst.
    `,
    },
    {
      data: `Fusce eu ex vel turpis pellentesque iaculis. Praesent sit amet mi ut turpis malesuada aliquam a eu orci. Maecenas ut purus eu sapien vestibulum vulputate. Fusce tincidunt fringilla arcu, non efficitur sapien scelerisque et. Maecenas facilisis eros id enim tincidunt, ac vestibulum quam fringilla. Nullam vel malesuada mi, vitae convallis libero. In hac habitasse platea dictumst. Duis cursus nunc vel metus rhoncus, id cursus justo imperdiet. Integer vitae ex ac libero fermentum volutpat ut vitae sapien. Aliquam id luctus nisl. Curabitur et augue ut justo tincidunt varius vel sit amet nunc. Integer tincidunt risus sit amet odio euismod, a finibus ligula blandit. Integer euismod, purus ut malesuada varius, lectus orci feugiat massa, ut egestas enim massa vel urna.
      `,
    },
    {
      data: `Vivamus id dictum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Curabitur aliquet ligula eu nisl bibendum, vel tincidunt justo feugiat. Nam dapibus, ligula id dapibus fermentum, odio libero luctus nunc, et scelerisque sapien libero vel ante. Etiam id odio nec nunc rhoncus lacinia nec eu massa. Nullam fermentum, felis ac bibendum malesuada, lectus felis fermentum dolor, a fermentum sapien mauris vel dui. Fusce vel turpis eu purus fermentum tincidunt a vel elit. Phasellus efficitur sapien vel efficitur rhoncus. Integer vel risus ut neque elementum gravida. Morbi rhoncus, ligula nec posuere tristique, ligula lacus dapibus urna, a lacinia sem metus id libero. Suspendisse luctus ligula eu mauris auctor, non semper elit feugiat.
      `,
    },
    {
      data: `Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. Sed non diam vel mi tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti.
      `,
    },
  ];

  type Dummy = {
    data: string;
  };

  const nameList = [
    {
      linkTo: "/addpartai",
      list: "Partai",
    },
    {
      linkTo: "/addpaslon",
      list: "Paslon",
    },
    {
      linkTo: "/vote",
      list: "Voting",
    },
  ];

  return (
    <div>
      <body className="bg-body">
        <Navbar textNav="PEMILU PRESIDEN DUMBWAYS.ID" listItem={nameList} />

        <main className="flex items-center justify-center flex-col">
          <div className="w-[1140px] px-[100px] bg-white flex flex-col items-center justify-center pt-[15px] relative">
            <div className="absolute left-[100px] top-[15px] flex items-center justify-center gap-[10px]">
              <FaArrowLeft size="20px" />
              <p className="text-[20px] font-[400]  ">Beranda</p>
            </div>

            <p className="text-[20px] font-[400]">BERITA HARI INI</p>

            <div className="mt-[50px] text-center">
              <h1 className="text-[40px] font-[700] text-login">
                KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK
              </h1>
              <p className="text-[26px] font-[500]">Super Admin</p>
              <p className="text-[26px] font-[500]">Senin, 03 Januari 2023</p>
            </div>

            <div className="w-full mt-[50px] mb-[100px]">
              <img
                className="w-full h-[530px] mb-[50px]"
                src={Headline}
                alt="Headline"
              />

              {dummy.map((dummy: Dummy) => (
                <p className="text-[24px] font-[500] mb-[30px] text-justify">
                  {dummy.data}
                </p>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </body>
    </div>
  );
};

export default DetailPage;
