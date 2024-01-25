import React from "react";
import Container from "./Container";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="pt-[170px] pb-[168px] ">
      <Container>
        <div className="flex items-center ">
          <div className="w-[30%] ">
            <h1 className=" font-normal text-[48px] font-primaryFont  text-[#261134] ">
              A trusted provider of{" "}
              <span className=" font-extrabold leading-[120%] ">
                courier services.
              </span>
            </h1>
            <p className="text-[20px] font-normal font-primaryFont text-[#4D4D4D] w-[330px] mt-4">
              We deliver your products safely to your home in a reasonable time.
            </p>
            <a
              className="text-[20px] font-medium font-primaryFont text-[#FFFFFF] px-[20px] py-3 bg-[#F95C19] flex items-center gap-2 w-[178px] rounded-[5px] mt-[47px] "
              href="#"
            >
              Get started <FaArrowRight />
            </a>
          </div>
          <div className="w-[70%] ">
            <img src="images/bannerimg.png" alt="bannerimg" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
