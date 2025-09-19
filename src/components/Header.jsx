import { useState } from "react"
import Icon from "./Icon.jsx"

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const [connected, setConnected] = useState(false)

  return (
    <header className="relative grid grid-cols-[1fr_auto_1fr] items-center h-[100px]">
      {/* Logo */}
      <div
        className={`flex items-center gap-2 py-2 md:w-[50px] ${
          openMenu ? "bg-[#ECECF04D] rounded-full" : ""
        }`}
      >
        <a href="#" className="flex items-center gap-2 sm:w-[100px]">
          <Icon name="m-icon" className="w-5 h-5" />
          <span className="text-base leading-5">Backyard</span>
        </a>
      </div>

      {/* Desktop Nav */}
      <nav className="justify-self-center h-full flex items-center">
        <ul className="hidden md:flex items-center gap-2 px-2 py-1 bg-[#F2F3F5] border border-[rgba(225,225,226,0.46)] rounded-full">
          <li><a className="nav-item" href="#home">Home</a></li>
          <li><a className="nav-item" href="#about">About</a></li>
          <li><a className="nav-item" href="#howitworks">How it works</a></li>
          <li><a className="nav-item" href="#token">Token design</a></li>
          <li><a className="nav-item" href="#wheel">YARD flywheel</a></li>
        </ul>
      </nav>

      {/* Right Edge */}
      <div className="justify-self-end relative flex items-center gap-2">
        {/* Connect Button (desktop) */}
        <button
          onClick={() => setConnected(!connected)}
          className={`hidden md:inline-flex relative w-[120px] h-[38px] rounded-full transition-colors
            ${
              connected
                ? "bg-[#E8E9ED] text-[#303030] hover:text-[#ACACAD]"
                : "bg-[#303030] text-[#FBFBFC]"
            }`}
        >
          <div className="flex items-center justify-center gap-2 w-full h-full px-2 text-xs font-medium">
            {connected ? "0x2633...gerb" : "Connect"}

            {connected && (
              <div className="p-2 w-[34px] h-[34px] bg-[rgba(196,196,196,0.21)] rounded-full flex items-center justify-center">
                <Icon
                  name="icon-star"
                  className="w-[17px] h-[17px] fill-[#303030]"
                />
              </div>
            )}
          </div>
        </button>

        {/* Burger Menu */}
        <button
          className="inline-flex md:hidden w-10 h-10 bg-[#F6F7F8] border border-[rgba(222,222,227,0.45)] rounded-md"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Icon
            name={openMenu ? "icon-close" : "m-menu"}
            className="w-4 h-3 m-auto"
          />
        </button>

        {/* Mobile Menu */}
        {openMenu && (
          <div className="absolute right-0 top-full mt-2 z-40 w-[220px] bg-[#E8E9ED] border border-[#E4E4E9] backdrop-blur rounded-xl p-5 flex flex-col gap-4 shadow-lg md:hidden">
            <nav>
              <ul className="flex flex-col gap-2 mb-3">
                <li><a className="nav-item-mobile" href="#hero">Home</a></li>
                <li><a className="nav-item-mobile" href="#about">About</a></li>
                <li><a className="nav-item-mobile" href="#howitworks">How it works</a></li>
                <li><a className="nav-item-mobile" href="#token">Token design</a></li>
                <li><a className="nav-item-mobile" href="#wheel">YARD flywheel</a></li>
              </ul>
              <button
                onClick={() => setConnected(!connected)}
                className={`w-full h-10 rounded-full border flex items-center justify-center gap-3 font-medium text-sm transition-colors
                  ${
                    connected
                      ? "bg-[#E8E9ED] border-[#E4E4E9] text-[#303030]"
                      : "bg-[#303030] border-[#EBEBED] text-[#FBFBFC]"
                  }`}
              >
                {connected ? "0x2633...gerb" : "Connect"}

                {connected && (
                  <div className="p-2 w-[34px] h-[34px] bg-[rgba(196,196,196,0.21)] rounded-full flex items-center justify-center">
                    <Icon name="icon-star" className="w-[17px] h-[17px] fill-[#303030]" />
                  </div>
                )}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}