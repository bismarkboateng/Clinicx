import { MdOutlineKeyboardArrowDown } from "react-icons/md"

export default function index(props) {

  return (
    <ul className={props.className}>
      <li className={props.linkItemStyles}>
        Home
      </li>

      <li className={props.linkItemStyles}>
        About us
      </li>
      
      <li className={`${props.linkItemStyles} flex flex-row items-center gap-1`}>
        <span>Services</span>
        <i><MdOutlineKeyboardArrowDown
          fontSize={25}
        /></i>
      </li>
      
      <li className={props.linkItemStyles}>
        Blog
      </li>
      
      <li className={props.linkItemStyles}>
        Contact
      </li>
    </ul>
  )
}
