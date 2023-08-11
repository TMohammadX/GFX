import Link from "next/link";
import { useState } from "react";
import Clock from "react-live-clock";
import { TfiClose } from "react-icons/tfi";
import localFont from "next/font/local";
import { AnimatePresence, motion } from "framer-motion";

const impact = localFont({ src: "../../../public/fonts/impact.woff" });
const theseasons = localFont({
  src: "../../../public/fonts/theseasons-reg.otf",
});

export default function () {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex h-[5rem] w-screen justify-between items-center px-[5%] fixed z-50 ">
      <h1 className="text-2xl">GFX STUDIO</h1>
      <div className="flex gap-5 font-sans font-medium">
        <Link href="/about" className="text-xs">
          ABOUT
        </Link>
        <Link href="/services" className="text-xs">
          SERVICES
        </Link>
        <Link href="/projects" className="text-xs">
          PROJECTS
        </Link>
        <Link href="/team" className="text-xs">
          THE TEAM
        </Link>
        <button className="text-xs">CONTACT</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0.9, y: "100vh", scale: 0.7 }}
            animate={{ opacity: 2, y: 0, scale: 1 }}
            exit={{ opacity: 0.9, y: "100vh", scale: 0.7 }}
            transition={{ duration: 1, when: "afterChildren" }}
            className={`w-screen h-screen bg-white rounded-[10vh] px-[5%] text-black ${theseasons.className} absolute top-0 left-0`}
          >
            <div className="flex items-center justify-between">
              <Clock
                format={"h:mm a"}
                style={{
                  fontSize: "6vw",
                  textTransform: "uppercase",
                  color: "black",
                  marginTop: "1rem",
                }}
                ticking={true}
              />

              <TfiClose
                color="black"
                size="2rem"
                onClick={handleClose}
                style={{ cursor: "pointer" }}
              />
            </div>

            <h1>Let's build the future together</h1>

            <div className="absolute bottom-[5%] left-0 w-full px-[5%]">
              <div className="grid w-full grid-cols-2 gap-2">
                <input
                  className={`min-h-[4rem] h-[10vh] w-[100%] border border-gray-700 rounded-xl px-5 placeholder:text-gray-500 font-sans `}
                  placeholder="Your Name"
                />
                <input
                  className={`min-h-[4rem] h-[10vh] w-[100%] border border-gray-700 rounded-xl px-5 placeholder:text-gray-500 font-sans `}
                  placeholder="Email"
                />
                <input
                  className={`min-h-[4rem] h-[10vh] w-[100%] border border-gray-700 rounded-xl px-5 placeholder:text-gray-500 font-sans `}
                  placeholder="Select Service"
                />
                <input
                  className={`min-h-[4rem] h-[10vh] w-[100%] border border-gray-700 rounded-xl px-5 placeholder:text-gray-500 font-sans `}
                  placeholder="Budget Range"
                />
              </div>
              <input
                className={`w-full min-h-[4rem] h-[10vh]  px-5 mt-2 border border-gray-700 rounded-xl placeholder:text-gray-500 font-sans `}
                placeholder="Message"
              />
              <button
                className={`w-full min-h-[5rem] h-[12vh]  text-white bg-black border border-gray-700 mt-7 rounded-xl font-sans font-bold`}
              >
                SUBMIT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
