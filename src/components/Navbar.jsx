import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="bg-[#FDF8EF] shadow-lg py-[15px] ">
      <Container>
        <div className="flex justify-between items-center ">
          <img src="images/logo.png" alt="logo" />
          <div className="flex items-center gap-[45px] ">
            <ul className="flex gap-[25px] ">
              <li>
                <a
                  className="text-[16px] font-extrabold text-[#817382] font-primaryFont hover:text-[#F95C19] "
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-[16px] font-extrabold text-[#817382] font-primaryFont hover:text-[#F95C19] "
                  href="#"
                >
                  Our services
                </a>
              </li>
              <li>
                <a
                  className="text-[16px] font-extrabold text-[#817382] font-primaryFont hover:text-[#F95C19] "
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-[16px] font-extrabold text-[#817382] font-primaryFont hover:text-[#F95C19] "
                  href="#"
                >
                  What’s new?
                </a>
              </li>
            </ul>
            <a
              className="text-[20px] font-primaryFont font-bold text-[#F95C19] px-[20px] py-[12px] bg-[#FFE4D9] rounded-[5px] mr-[56px] "
              href="#"
            >
              Contact us
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
