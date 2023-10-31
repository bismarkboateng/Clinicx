import { Navbar, Subscribe, Footer, Newscard } from "../../components";
import Gridcards from "./Gridcards";
import { news } from "./blog-data"

export default function index() {
  return (
    <div className="bg-[#fcfdfd]">
      <div>
      <Navbar />
      </div>

      <div className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto 
        flex flex-col justify-center items-center mt-12">
        <div className="text-[#d5f2da] font-normal text-[60px] font-Ranga">
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
      <div className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto
      grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-7 mt-7">
        {news.map((item) => (<Newscard key={item.id} item={item} />))}
        {/* <Gridcards /> */}
      </div>
      <Subscribe />
      <Footer />
  </div>
    
)}