import Image from "next/image";
import Nav from "./components/Nav.js";
import localFont from "next/font/local";

const impact = localFont({ src: "../../public/fonts/impact.woff" });
const theseasons = localFont({ src: "../../public/fonts/theseasons-reg.otf" });

export default function Home() {
  return (
    <main className={impact.className}>
      <Nav />
      <section className="grid justify-center w-screen h-[140vh] pt-8 px-14">
        <div>
          <h1 className="text-[20.15vw] z-0 absolute">GFX STUDIO</h1>
          <h1 className="text-[20.15vw] relative z-10 text-transparent lsk">
            GFX STUDIO
          </h1>

          <div className="h-[90vh] z-[5] w-[90%] left-1/2 top-[38%] 2xl:top-[35%]  bg-[#707070] -translate-x-1/2 overflow-hidden rounded-3xl absolute">
            <video
              src="/videos/ss.mp4"
              autoPlay
              muted
              loop
              className="absolute bottom-0 right-0 w-auto h-auto min-w-full min-h-full overflow-hidden"
            ></video>
          </div>
        </div>
      </section>
      <section className="w-screen h-[300vh] grid px-[5%] grid-cols-2">
        <div className="absolute right-[5%] border rounded-full w-52 h-52"></div>
        <div className="border  w-[50vw] h-[80vh] mt-20"></div>
        <div className="border  w-[31vw] h-[60vh] right-[5%] mt-[30%] absolute"></div>
        <div className="border absolute left-[5%] mt-[50vw] w-[31vw] h-[60vh]"></div>
        <div className="border  w-[50vw] h-[80vh] mt-[65vw] absolute right-[5%]"></div>
        <button
          className={`absolute left-[5%] mt-[85%] w-[30%] border h-[20%] rounded-[100%] hover:rotate-12 ${theseasons.className}`}
        >
          SEE ALL PROJECTS
        </button>
      </section>
    </main>
  );
}
