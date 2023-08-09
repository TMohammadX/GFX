import Image from "next/image";
import Nav from "./components/Nav.js";
import localFont from "next/font/local";

const impact = localFont({ src: "../../public/fonts/impact.woff" });

export default function Home() {
  return (
    <main className={impact.className}>
      <Nav />
      <section className="grid justify-center w-screen h-[100%] pt-8 px-14">
        <div>
          <h1 className="text-[20.15vw] z-0 absolute">GFX STUDIO</h1>
          <h1 className="text-[20.15vw] relative z-10 text-transparent lsk">
            GFX STUDIO
          </h1>

          <div className="h-[90vh] z-[5] w-[90%] left-1/2 top-[38%]  bg-[#707070] -translate-x-1/2 rounded-3xl absolute"></div>
        </div>
      </section>
      <section className="w-screen h-screen"></section>
    </main>
  );
}
