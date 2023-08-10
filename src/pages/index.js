import Image from "next/image";
import Nav from "./components/Nav.js";
import localFont from "next/font/local";
import { useEffect, useRef, useContext, useState } from "react";
import { TbArrowNarrowDown } from "react-icons/tb";
import GlobalStateContext from "@/contexts/GlobalState.js";
import { useRouter } from "next/router.js";
import Load from "./components/Load";

const impact = localFont({ src: "../../public/fonts/impact.woff" });
const theseasons = localFont({ src: "../../public/fonts/theseasons-reg.otf" });

export default function Home() {
  const el = useRef();
  const { isFirstMount, setIsFirstMount } = useContext(GlobalStateContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("../contexts/ScrollSmoother");

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const q = gsap.utils.selector(el);

      let smoother = ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
      });

      return () => {
        smoother.kill();
      };
    };

    loadGsap();
  }, []);

  // if (!GlobalStateContext) {
  //   // Handle the case when the context value is not available
  //   return null;
  // }

  useEffect(() => {
    if (router.pathname === "/" && isFirstMount) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      setIsFirstMount(false);
    }
  }, [isFirstMount]);

  return (
    <main ref={el} className={impact.className}>
      <div id="smooth-content">
        {loading ? (
          <Load />
        ) : (
          <div>
            <Nav />
            <section className="grid justify-center w-screen h-[140vh] pt-8 px-14">
              <div>
                <h1 className="text-[20.15vw] z-0 absolute">GFX STUDIO</h1>
                <h1 className="text-[20.15vw] relative z-10 text-transparent lsk">
                  GFX STUDIO
                </h1>

                <div className="h-[90vh] z-[5] w-[90%] left-1/2 top-[7.8%] 2xl:top-[7%]  bg-[#707070] -translate-x-1/2 overflow-hidden rounded-3xl absolute">
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
            <section className="w-screen h-[250vh] grid px-[5%] grid-cols-2">
              <div className="absolute right-[5%]  rounded-full w-[35vh] h-[35vh]">
                <TbArrowNarrowDown
                  className="absolute text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  color="white"
                  size="3rem"
                />
                <div class={`rounded-text rotating ${theseasons.className}`}>
                  <svg viewBox="0 0 200 200">
                    <path
                      id="textPath"
                      d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                      transform="translate(100,100)"
                      fill="none"
                      stroke-width="0"
                    ></path>

                    <g font-size="13.1px">
                      <text text-anchor="start">
                        <textPath
                          class="coloring"
                          xlinkHref="#textPath"
                          startOffset="0%"
                        >
                          OUR FEATURED PROJECTS OUR FEATURED PROJECTS OUR
                          FEATURED PROJECTS OUR FEATURED PROJECTS OUR
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="  w-[50vw] h-[80vh] mt-20 bg-[#707070]"></div>
              <div className="  w-[31vw] h-[60vh] right-[5%] mt-[30%] absolute bg-[#707070]"></div>
              <div className=" absolute left-[5%] mt-[50vw] w-[31vw] h-[60vh] bg-[#707070]"></div>
              <div className="  w-[50vw] h-[80vh] mt-[65vw] absolute right-[5%] bg-[#707070]"></div>
              <button
                className={`absolute left-[5%] mt-[87%] w-[30%] border-[#2ec4b6] border h-[20vh] rounded-[100%]  ${theseasons.className}`}
              >
                SEE ALL PROJECTS
              </button>
            </section>
            <section className="relative w-screen h-screen">
              <h1 className="text-[9vw] text-center pt-5">
                Edit <span className={`${theseasons.className}`}>the</span>{" "}
                Future
              </h1>

              <div className="flex justify-between px-[5%] items-center bottom-[8%] absolute">
                <p className="w-[30%] font-sans text-sm">
                  The design of the future is not objects, but processes.
                  Honesty, intelligence, vision is what will save us. As well as
                  timeless things. Creating experiences without timless. This is
                  how we identify our mission.
                </p>

                <button
                  className={`h-14 rounded-[100%] w-52 border-[#2ec4b6] border ${theseasons.className}`}
                >
                  Contact Us
                </button>

                <p className="w-[30%] font-sans text-sm">
                  Design creates culture. Culture shapes values. Values
                  determine the future. We believe that the future is built
                  through these phases. That's why we work closely with our
                  clients to understand their needs.
                </p>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
