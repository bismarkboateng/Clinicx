import { Link } from "react-router-dom"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

export default function index(props) {

  return (
    <ul className={props.className}>
      <Link to={"/"} style={{ textDecoration: "none"}}>
        <li className={props.linkItemStyles}>
          Home
        </li>
      </Link>

      <Link to={"/about-us"} style={{ textDecoration: "none"}}>
        <li className={props.linkItemStyles}>
          About us
        </li>
      </Link>
      
      <li className={`${props.linkItemStyles} flex flex-row items-center gap-1`}>
        <span>Services</span>
        <i><MdOutlineKeyboardArrowDown
          fontSize={25}
        /></i>
      </li>
      
      <Link to={"/blog"} style={{ textDecoration: "none"}}>
        <li className={props.linkItemStyles}>
          Blog
        </li>
      </Link>
      
      <Link to={"/contact-us"}>
        <li className={props.linkItemStyles}>
          Contact
        </li>
      </Link>
    </ul>
  )
}
