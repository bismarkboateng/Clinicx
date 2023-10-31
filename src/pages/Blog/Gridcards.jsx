import first from "../../assets/images/first.jpg"
import second from "../../assets/images/second.jpg"
import third from "../../assets/images/third.jpg"
import fourth from "../../assets/images/fourth.jpg"
const Gridcards = () => {
  return (

    <div className="text-[#170f49] font-[DM Sans, sans-serif] text-base leading-5 box-border md:grid grid-cols-2 gap-x-7 gap-y-7">
      {/* first card */}
      <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5 hover:cursor-pointer">
      <div className="md:flex-col p-4">
        <div className="md:flex-shrink-0 ">
          <img className="w-full object-scale-down rounded-xl " src={first} alt="" />
        </div>
        <div className="p-8">
          <div className="tracking-wide text-2xl text-black font-bold">Common pediatric illness</div>
          <div className="tracking-wide text-lg text-[#493f8c]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
          <button className="bg-[#7ea2e4] hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full">
          Read More
          </button>
        </div>
      </div>
    </div>

      {/* second card */}
      <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5 hover:cursor-pointer">
      <div className="md:flex-col p-4">
        <div className="md:flex-shrink-0 ">
          <img className="w-full object-scale-down rounded-xl " src={second} alt="" />
        </div>
        <div className="p-8">
          <div className="tracking-wide text-2xl text-black font-bold">Empowering Mental Wellness</div>
          <div className="tracking-wide text-lg text-[#493f8c]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
          <button className="bg-[#7ea2e4] hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded-full">
          Read More
          </button>
        </div>
      </div>
    </div>

    {/* third */}
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5 hover:cursor-pointer">
      <div className="md:flex-col p-4">
        <div className="md:flex-shrink-0 ">
          <img className="w-full object-scale-down rounded-xl " src={third} alt="" />
        </div>
        <div className="p-8">
          <div className="tracking-wide text-2xl text-black font-bold">Empowering Mental Wellness</div>
          <div className="tracking-wide text-lg text-[#493f8c]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
          <button className="bg-[#7ea2e4] hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded-full">
          Read More
          </button>
        </div>
      </div>
    </div>

    {/* fourth */}
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5 hover:cursor-pointer">
      <div className="md:flex-col p-4">
        <div className="md:flex-shrink-0 ">
          <img className="w-full object-scale-down rounded-xl " src={fourth} alt="" />
        </div>
        <div className="p-8">
          <div className="tracking-wide text-2xl text-black font-bold">Empowering Mental Wellness</div>
          <div className="tracking-wide text-lg text-[#493f8c]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
          <button className="bg-[#7ea2e4] hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded-full">
          Read More
          </button>
        </div>
      </div>
    </div>



    </div>
  )
}

export default Gridcards