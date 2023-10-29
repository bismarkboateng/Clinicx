import { Navbar } from "../../components";
import Gridcards from "./Gridcards";


export default function index() {
  return (
    <div>
      <div>
      <Navbar />
      </div>

      <div className="flex flex-col justify-center items-center mt-12">
      <div className="text-green-200 font-semibold text-7xl italic">
       News
      </div>
      <div className="text-center sm:text-left font-bold text-3xl sm:flex sm:justify-center items-center">
       Discover our latest blog <span className="">posts</span>
      </div>
      <div className="text-center sm:text-left text-gray-600 font-sans flex flex-col justify-center items-center">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum </div>
        <div>tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
      </div>
      </div>

      {/* grids cards */}
      <Gridcards />


      
      
      </div>
    
  )
}
