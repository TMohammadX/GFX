import Clock from "react-live-clock";
import { TfiClose } from "react-icons/tfi";
import localFont from "next/font/local";

const impact = localFont({ src: "../../public/fonts/impact.woff" });
const theseasons = localFont({ src: "../../public/fonts/theseasons-reg.otf" });

export default function () {
  return (
    <div
      className={`w-screen h-screen bg-white rounded-[10vh] px-[5%] text-black ${theseasons.className}`}
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

        <TfiClose color="black" size="2rem" />
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
    </div>
  );
}
