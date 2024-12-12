import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#D9D9D9] py-5 text-base font-medium text-black">
      <div className="mx-auto max-w-[72rem] w-full">
        <div className="flex justify-between items-center">
          
          <div>
            <img src="./logo.png" alt="Logo" className="h-8" />
          </div>

          <div className="hidden md:flex flex-row gap-8 items-center">
            <div>Products</div>
            <div>Plans</div>
            <div className="flex flex-row items-center gap-2">
              <div>More</div>
              <button>
                <img src="./more.png" alt="More" className="h-5" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-row gap-8 items-center">
            <div>Login</div>
            <button className="bg-[#2A0896] rounded-[30px] px-8 py-[13px] text-white">
              Request a demo
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <RxHamburgerMenu className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-4 flex flex-col items-center gap-4 md:hidden font-medium">
            <div>Products</div>
            <div>Plans</div>
            <div className="flex flex-row items-center">
              <div>More</div>
              <button>
                <img src="./more.png" alt="More" className="h-5" />
              </button>
            </div>
            <div>Login</div>
            <button className="bg-[#2A0896] rounded-3xl px-8 py-2 text-white">
              Request a demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
