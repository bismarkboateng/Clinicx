import { FaFacebook } from "react-icons/fa6"
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai"


import { FooterLogo } from "../../assets"
import { pages, utility } from "./links"

export default function index() {

  const linkStyles = "text-[#f5f5f5] font-DM text-sm leading-5 text-center mb-4"
  const headerStyles = "text-sm text-[#f5f5f5] font-bold leading-5 text-center mb-5"
  const wrapperStyles = "mt-9"
  const followLinkstyles = "flex flex-row gap-2 items-center"
  const iconStyles = "text-white w-4 h-4"

  const followText ="text-[#f5f5f5] font-DM text-sm leading-5 text-center"

  return (
    <footer className="bg-[#170f49]">
      <div className="w-[90%] xl:w-[80%] 2xl:w-[78%] pb-7 mx-auto pt-4
        flex flex-col items-center lg:flex-row 2xl:justify-start">
        <div className="flex flex-col items-center lg:mt-0
          2xl:mr-[7%]">
          <img
            src={FooterLogo}
            alt="Logo"
            className="w-40 h-40"
          />
          <p className={`${linkStyles} mt-2 lg:w-[60%]`}>
            We have been caring for you in our clinics for over 100 years
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-32 2xl:gap-44">
          <div className={wrapperStyles}>
            <p className={headerStyles}>Pages</p>
            <ul>
              {pages.map((item) => (
                <li key={item.id}
                  className={linkStyles}
                >
                  {item.title}
                </li>))}
            </ul>
          </div>

          <div className={wrapperStyles}>
            <p className={headerStyles}>Utility Pages</p>
            <ul>
              {utility.map((item) => (
                <li key={item.id}
                  className={linkStyles}
                >
                  {item.title}
                </li>))}
            </ul>
          </div>

          <div className={wrapperStyles}>
            <p className={headerStyles}>Follow us</p>
            <ul className="flex flex-col items-center gap-4">
              <li className={followLinkstyles}>
                <i><FaFacebook className={iconStyles} /></i>
                <span className={followText}>Facebook</span>
              </li>
              <li className={followLinkstyles}>
                <i><AiOutlineInstagram className={iconStyles} /></i>
                <span className={followText}>Instagram</span>
              </li>
              <li className={followLinkstyles}>
                <i><AiOutlineTwitter className={iconStyles} /></i>
                <span className={followText}>Twitter</span>
              </li>
              <li className={followLinkstyles}>
                <i><AiFillYoutube className={iconStyles} /></i>
                <span className={followText}>Youtube</span>
              </li>
            </ul>
          </div>
        </div>


      </div>
    </footer>
  )
}
