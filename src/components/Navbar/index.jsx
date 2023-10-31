import { useState } from "react"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"

import { Logo} from "../../assets"
import { Navlinks, Buttonwrapper, Servicecard } from "../../components"
import { service } from "../Services/service-data"




export default function index() {
  const [isMobile, setIsMobile] = useState(false)
  const [onHover, setOnHover] = useState(false)

  const onToggleMenuHandler = () => {
    setIsMobile(prevIsMobile => !prevIsMobile)
  }

  const onMouseOverHandler = () => {
    setOnHover(true)
    console.log("Mouse Over")
  }

  const onMouseLeaveHandler = () => {
    setOnHover(false)
    console.log("Mouse leave")
  }

  const onServiceClickHandler = () => {
    setOnHover(prevValue => !prevValue)
  }

  return (
    <nav className="sticky top-0 z-[100] px-[6%] mx-auto flex flex-row
        items-center justify-between bg-white py-5">
      <div className="w-32 md:w-40 h-auto lg:mr-auto">
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <img
            src={Logo}
            alt="clinicx"
            className="w-full h-auto object-fit"
          />
        </Link>
      </div>

      <Navlinks
        onServiceClickHandler={onServiceClickHandler}
        onMouseOverHandler={onMouseOverHandler}
        onMouseLeaveHandler={onMouseLeaveHandler}
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
        <div className="absolute bg-[#170f49] top-20 
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


      { onHover && 
        <div className="absolute top-20 left-0 w-[100%] grid grid-cols-1 md:grid-cols-2
          md:gap-y-5 lg:grid-cols-3 lg:gap-y-5 pl-[4%] pt-[3%] bg-white pb-[2%]">
            {service.map((item) => (
              <div key={item.id}>
                <img
                  src={item.icon}
                  alt="neurology"
                  className="text-[#170f49]"
                />

              <h4 className="text-lg font-bold leading-6 text-[#170f49]
                font-DM mt-3">
                {item.header}
              </h4>
              <p className="font-DM text-[#6f6c90] text-lg leading-[30px] mb-3 mt-3">
                {item.body}
              </p>
              </div>
            ))}
        </div>
      }

    </nav>
  )
}
