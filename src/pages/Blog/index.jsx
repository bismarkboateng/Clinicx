import { Navbar } from "../../components";
import Gridcards from "./Gridcards";


export default function index() {
  return (
    <div className="bg-[#fcfdfd]">
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
      <div className="md:p-24">
      <Gridcards />
      </div>


{/* newsletter subscription */}

<div className="flex justify-around items-center bg-white rounded-lg shadow-xl">
<div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5">
  <div className="px-8 py-8 md:flex flex-row justify-around items-center gap-8">
  
    {/* subscribe */}
    <div>
      <div className="text-3xl font-bold">Subscribe to our newsletter</div>
      <div className="text-[#5b1e61]">Keep up to date with important news about our clinic and</div>
      <div className="text-[#5b1e61]">your medical records.</div>
    </div>
    {/* email and button div */}
    <div className="flex gap-4">
    <input 
        className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-full border-2 border-blue-500 focus:outline-none focus:border-blue-700" 
        type="email" 
        placeholder="Your email address" 
      />
      <button 
        className="px-8 py-4 text-white bg-[#7ea2e4] rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none">
          Subscribe
        </button>
    </div>
  </div>
</div>
</div>

      
      
      </div>
    
  )
}
