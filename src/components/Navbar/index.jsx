import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"

import { Logo} from "../../assets"
import { Navlinks, Buttonwrapper } from "../../components"




export default function index() {
  const [isMobile, setIsMobile] = useState(false)

  const onToggleMenuHandler = () => {
    setIsMobile(prevIsMobile => !prevIsMobile)
  }

  return (
    <nav className="sticky top-0 z-[100] w-[90%] mx-auto flex flex-row
        items-center justify-between bg-white py-5">
      <div className="w-32 md:w-40 h-auto lg:mr-auto">
        <img
          src={Logo}
          alt="clinicx"
          className="w-full h-auto object-fit"
        />
      </div>

      <Navlinks
        className="hidden lg:flex lg:flex-row gap-9 lg:mr-10"
        linkItemStyles = "font-DM text-base hover:text-[#7ea2e4] font-normal leading-[30px] text-[170f49] cursor-pointer"
      />

      <Buttonwrapper
        className="hidden lg:flex bg-[#7ea2e4] rounded-[100px] text-lg font-medium
          text-white py-[15px] px-[40px] font-DM cursor-pointer"
      >
        <button className="outline-none border-none">
          Book an appointment
        </button>
      </Buttonwrapper>

      <div className="lg:hidden">
        {isMobile ? (
            <AiOutlineClose
              onClick={onToggleMenuHandler}
              className="w-7 h-7"
            />
        ) : (
            <RxHamburgerMenu
              onClick={onToggleMenuHandler}
              className="w-7 h-7"
            />
        )}
      </div>

      { isMobile && (
        <div className="absolute bg-[#170f49] top-[8%] 
          left-0 w-[100%] z-[100] h-screen lg:hidden">
            <Navlinks
              className="flex flex-col text-white gap-7 mt-10"
              linkItemStyles="text-lg text-white font-DM font-normal leading-[30px]
                w-[90%] mx-auto"
            />

            <Buttonwrapper
              className="flex justify-center lg:hidden bg-[#7ea2e4] rounded-[100px] text-lg font-medium
                text-white py-[10px] md:py-[13px] px-[20px] w-[80%] font-DM cursor-pointer mt-8 ml-4 md:w-[35%]
                md:ml-9"
            >
              <button className="outline-none border-none text-center">
                Book an appointment
              </button>
            </Buttonwrapper>
        </div>
      )}

    </nav>
  )
}
