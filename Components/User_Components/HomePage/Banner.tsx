import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="w-full">
      <div className="container h-[calc(100vh-7rem)] bg-theme-black overflow-clip relative">
        <div className="w-full h-full flex ">
          <div className="flex items-end h-full w-[200px]">
            <div
              style={{
                borderWidth: "0 100px 280px 100px",
                borderColor: "transparent transparent #df4b0b transparent",
                animation: "bounce 10s infinite",
              }}
              className="w-0 h-0 border-solid  animate-bounce -ml-[100px] mt  "
            ></div>
          </div>

          <div className="w-full h-full flex justify-end mx-14 my-20">
            <div
              style={{
                animation: "bounce 10s infinite",
              }}
              className="w-60 h-60 bg-[#50a1ad] rounded-full animate-bounce "
            ></div>
          </div>
          <div className="w-96 h-96 rotate-12 right-[33%] top-1/4 absolute">
            <div
              style={{
                animation: "bounce 10s infinite",
              }}
              className="w-96 h-96 animate-bounce  bg-yellow-400 rounded-full flex justify-center items-center absolute left-2/4 top-3/4 "
            >
              <div className="w-60 h-60 bg-black rounded-full"></div>
              <div className="absolute w-2/4 right-0  h-full bg-black"></div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex absolute top-0 ">
          <div className="w-[60%] h-full">
            <div className="mx-24 py-20">
              <h1 className="text-white text-6xl font-semibold tracking-wide">
                Free resume builder for modern job seekers
              </h1>
              <p className="text-xl text-gray-100 my-8">
                By employing the best practices and innovative tech,
                <br /> ResumeMy boosts your chances of landing a better job{" "}
                <br /> – completely for free.
              </p>

              <Link href="/templates">
                <a className="bg-[#0c66ff] mt-20 text-white text-base px-8 py-2 rounded-md ">
                  Build Resume
                </a>
              </Link>
            </div>
          </div>
          <div className="w-[40%] h-full">
            <div className="w-[378px] h-[535px] right-[100px] opacity-100 top-[90px] absolute">
              <div
                style={{
                  perspective: "1000px",
                }}
                className="absolute visible w-full h-full top-0 "
              >
                <div
                  style={{
                    transform: "rotateX(4deg) rotateY(-16deg) rotateZ(4deg)",
                  }}
                  className="w-[300px] h-[400px]"
                >
                  <img
                    src="/assets/office-administrator-resume-example-original-retina.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
