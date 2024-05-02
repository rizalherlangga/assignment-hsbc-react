import Navbar from "../components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />
      <br />
      <main className="max-w-[1120px] h-full mx-auto mt-[20px] flex flex-col gap-[15px] mb-[50px]">
        <div className="flex items-center gap-[15px]">
          <h1 className="font-bold text-[32px] text-pink-700">ABOUT</h1>
          <div className="w-[50px] bg-pink-600 h-[8px] rounded-[5px]"></div>
        </div>
        <div className="py-[12px] px-[16px] flex flex-col gap-[12px] rounded-[12px] border border-solid border-[#D1D5DB]">
          <p className="text-13px text-neutral-500">Tentang JKT48</p>
          <p className="text-[15px]">
            JKT48 adalah grup idola asal Indonesia dan grup saudari AKB48 yang
            pertama di luar Jepang. Mengadopsi konsep AKB48, "idol you can
            meet". Pembentukan JKT48 pertama kali diumumkan pada 11 September
            2011 di sebuah acara AKB48 yang diadakan di Makuhari Messe di Chiba.
            Wawancara untuk peserta berlangsung pada akhir bulan September,
            dengan audisi final untuk finalis pada 8 Oktober 2011-9 Oktober
            2011. grup ini mengadakan pertunjukan rutin di Teater JKT48 yang
            terletak di Lantai 4 fX Sudirman, Jakarta Pusat, DKI Jakarta.
          </p>
          <div className="flex gap-[15px] text-[23px] mx-auto mt-[30px]">
            <a href="http://www.instagram.com/jkt48/" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="http://jkt48.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} /></a>
            <a href="http://twitter.com/officialJKT48" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
