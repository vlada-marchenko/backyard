import { useState } from "react";
import Icon from "./Icon.jsx";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [connected, setConnected] = useState(false);

  return (
    <header className="relative grid grid-cols-[1fr_auto_1fr] items-center h-[100px]">
      <div className={`flex items-center gap-2 md:w-[50px] py-2 ${openMenu ? "bg-[#ECECF04D] rounded-full" : ""}`}>
        <a href="#" className="flex items-center gap-2 sm:w-[100px]">
          <Icon name="m-icon" className="w-5 h-5" />
          <span className="not-italic font-normal text-base leading-5 text-center">Backyard</span>
        </a>
      </div>

      <nav className="justify-self-center h-full flex items-center">
        <ul className="hidden md:flex items-center gap-2 px-2 py-1 bg-[#F2F3F5] border border-[rgba(225,225,226,0.46)] rounded-full overflow-hidden">
          <li><a className="nav-item" href="#home">Home</a></li>
          <li><a className="nav-item" href="#about">About</a></li>
          <li><a className="nav-item" href="#howitworks">How it works</a></li>
          <li><a className="nav-item" href="#token">Token design</a></li>
          <li><a className="nav-item" href="#wheel">YARD flywheel</a></li>
        </ul>
      </nav>

      {/* RIGHT EDGE WRAPPER */}
      <div className="justify-self-end relative flex items-center gap-2">
<button
  onClick={() => setConnected(!connected)}
  className={`hidden md:inline-flex relative w-[75px] h-[31px] rounded-[100px] lg:hidden transition-colors
    ${connected ? "bg-[#E8E9ED] text-[#303030] md:w-[120px] md:h-[38px] active:bg-[#E7E8EB] hover:text-[#ACACAD] active:text-[#ACACAD]" : "bg-[#303030] text-[#FBFBFC]"}`}
>
  <div className="flex items-center justify-center gap-2 w-full h-full px-2">
    <span className="font-[Konnect] font-medium text-[0.6875rem] leading-[0.875rem]">
      {connected ? "0x2633...gerb" : "Connect"}
    </span>

    {connected && (
      <div className="p-[10px] w-[34px] h-[34px] bg-[rgba(196,196,196,0.21)] rounded-[43px] flex items-center justify-center">
        <Icon
          name="icon-star"
          className="w-[17px] h-[17px] fill-[#303030] hover:fill-[#303030] active:fill-[#303030]"
        />
      </div>
    )}
  </div>
</button>

        <button
          className="inline-flex md:hidden w-10 h-10 relative box-border bg-[#F6F7F8] border border-[rgba(222,222,227,0.45)] rounded-[0.6667rem]"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Icon
            name={openMenu ? "icon-close" : "m-menu"}
            className="w-4 h-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </button>

        {openMenu && (
          <div className="absolute right-0 top-full mt-2 z-40 w-[220px] bg-[#E8E9ED] border border-[#E4E4E9] backdrop-blur-[4.65px] rounded-[19px] p-5 flex flex-col gap-4 shadow-lg md:hidden">
            <nav className="md:hidden">
              <ul className="flex flex-col gap-[7px] w-full">
                <li><a className="nav-item-mobile" href="#hero">Home</a></li>
                <li><a className="nav-item-mobile" href="#about">About</a></li>
                <li><a className="nav-item-mobile" href="#howitworks">How it works</a></li>
                <li><a className="nav-item-mobile" href="#token">Token design</a></li>
                <li><a className="nav-item-mobile" href="#wheel">YARD flywheel</a></li>
              </ul>
              <button
                onClick={() => setConnected(!connected)}
                className={`mt-2 w-full h-10 rounded-[100px] border transition-colors
                  ${connected ? "bg-[#E8E9ED] border-[#E4E4E9] flex flex-row items-center justify-center gap-[27px] font-[Konnect] font-medium text-[13px] leading-[17px] text-[#303030]" : "bg-[#303030] border-[#EBEBED] text-[#FBFBFC]"}`}
              >
                {connected ? "0x2633...gerb" : "Connect"}
                
  {connected && (
    <div className="p-[10px] w-[34px] h-[34px] bg-[rgba(196,196,196,0.21)] rounded-[43px] flex items-center justify-center">
    <Icon
      name="icon-star" 
      className="w-[17px] h-[17px] fill-[#303030]" 
    />
    </div>
  )}
  
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
