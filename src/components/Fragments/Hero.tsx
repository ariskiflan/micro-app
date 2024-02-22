import DumbwaysLogo from "../../assets/brandred.png";
import KotakSuara from "../../assets/kotak-suara.png";

const Hero = () => {
  return (
    <div className="w-[1140px] flex items-center justify-center">
      <div className="gradient w-full h-[516px] rounded-2xl my-12 relative">
        <img
          className="w-[342px] h-[237px] opacity-50"
          src={DumbwaysLogo}
          alt="Dumbways Logo"
        />

        <div className="mt-20 ml-7">
          <h1 className="text-[64px] text-white">SELAMAT DATANG</h1>
          <p className="text-[24px] text-white text-wrap w-[500px] ">
            PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI
            NAMA
          </p>
        </div>
        <img
          className="w-[286px] h-[473px] absolute right-40 top-0"
          src={KotakSuara}
          alt="Kotak Suara"
        />
      </div>
    </div>
  );
};

export default Hero;
