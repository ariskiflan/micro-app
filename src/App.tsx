import Hero from "./components/Fragments/Hero";
import Navbar from "./components/Fragments/Navbar";
import Headline from "./components/Fragments/Headline";
import "./index.css";

import Footer from "./components/Fragments/Footer";

function App() {
  return (
    <>
      <body>
        <header className="bg-black">
          <Navbar />
        </header>

        <main className="flex items-center justify-center flex-col">
          <Hero />
          <Headline />
        </main>

        <div>
          <div className="w-full h-[384px] bg-white flex justify-center items-center px-[120px]">
            <p className="text-[40px] font-bold text-center">
              PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS
              PASTIKAN MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT
            </p>
          </div>
        </div>

        <Footer />
      </body>
    </>
  );
}

export default App;
