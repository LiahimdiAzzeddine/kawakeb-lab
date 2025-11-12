import { motion } from "framer-motion";
import { slideInFromTop } from "../utils/motion";

const Encryption = () => {
  return (
    <div>
      <span className="hash-span" id="encryption">
        &nbsp;
      </span>
      <div className="select-none flex flex-row flex-wrap justify-center gap-10 justify-items-center top-[16px]">
        <div className="w-auto h-auto absolute translate-y-[270px] flex flex-col items-center justify-center">
          <div className="w-auto h-auto flex flex-col group items-center cursor-pointer">
            <div className="relative top-[-170px]">
              <motion.div
                variants={slideInFromTop}
                className="Microgram text-[35px] font-medium text-center text-gray-200 px-8"
              >
                Performance
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8e8e8] to-[#00a8b5]">
                  {" "}
                  &{" "}
                </span>
                Security
              </motion.div>
            </div>
            <img
              className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
              src="/LockTop.png"
              alt="Lock top"
              width={50}
              height={50}
            />
            <img
              className="w-[70px] z-10"
              src="/LockMain.png"
              alt="Lock Main"
              width={70}
              height={70}
            />
          </div>
          <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#00d7e8] opacity-[0.9]">
            <h1 className="Welcome-text text-[12px]">Encryption</h1>
          </div>
          <div className="relative top-[160px]">
            <div className="security-descr text-center text-gray-300 flex flex-col px-8">
              <span>Secure your data with end-to-end encryption</span>
            </div>
          </div>
        </div>

        <div className="w-[1500px] h-[850px] z-[-10] flex flex-row items-start justify-center opacity-30 relative">
          <video
            className="fixed-size-video w-full h-full object-cover"
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            src="/encryption.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e1a205d] to-transparent"></div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Encryption;
