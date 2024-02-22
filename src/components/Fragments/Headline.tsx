import SampleKpu from "../../assets/sample-kpu.png";

const Headline = () => {
  return (
    <div className="w-[1140px] mb-12">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 relative">
          <img className="w-[753px] h-[390px]" src={SampleKpu} alt="" />
          <div className="bg-gradient-to-t to-transparent from-black w-[753px] h-[390px] absolute left-0 bottom-0 ">
            <div className="my-[10px] mx-[10px] absolute left-0 bottom-0">
              <button className="text-[20px] font-bold text-white bg-date py-1 px-3 rounded-[10px] ">
                Senin, 03-Jan-2023
              </button>
              <p className="text-[32px] font-bold text-white leading-8 mt-[10px]">
                KPU TETAPKAN 3 MENTOR TERBAIK
              </p>
              <p className="text-[24px] mt-[5px] text-white">Super Admin</p>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <img src={SampleKpu} alt="Sample" />

          <div className="my-[10px] mx-[10px] ">
            <button className="text-[20px] font-bold text-white bg-date py-1 px-3 rounded-[10px] ">
              Senin, 03-Jan-2023
            </button>
            <p className="text-[32px] font-bold leading-8 mt-[10px]">
              KPU TETAPKAN 3 MENTOR TERBAIK
            </p>
            <p className="text-[24px] mt-[5px]">Super Admin</p>
          </div>
        </div>

        <div className="bg-white">
          <img src={SampleKpu} alt="Sample" />

          <div className="my-[10px] mx-[10px] ">
            <button className="text-[20px] font-bold text-white bg-date py-1 px-3 rounded-[10px] ">
              Senin, 03-Jan-2023
            </button>
            <p className="text-[32px] font-bold leading-8 mt-[10px]">
              KPU TETAPKAN 3 MENTOR TERBAIK
            </p>
            <p className="text-[24px] mt-[5px]">Super Admin</p>
          </div>
        </div>

        <div className="bg-white">
          <img src={SampleKpu} alt="Sample" />

          <div className="my-[10px] mx-[10px] ">
            <button className="text-[20px] font-bold text-white bg-date py-1 px-3 rounded-[10px] ">
              Senin, 03-Jan-2023
            </button>
            <p className="text-[32px] font-bold leading-8 mt-[10px]">
              KPU TETAPKAN 3 MENTOR TERBAIK
            </p>
            <p className="text-[24px] mt-[5px]">Super Admin</p>
          </div>
        </div>

        <div className="bg-white">
          <img src={SampleKpu} alt="Sample" />

          <div className="my-[10px] mx-[10px] ">
            <button className="text-[20px] font-bold text-white bg-date py-1 px-3 rounded-[10px] ">
              Senin, 03-Jan-2023
            </button>
            <p className="text-[32px] font-bold leading-8 mt-[10px]">
              KPU TETAPKAN 3 MENTOR TERBAIK
            </p>
            <p className="text-[24px] mt-[5px]">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
