
import { Arrow, curve } from "../../assets"
import { Buttonwrapper } from ".."

export default function index() {
  return (
    <section className="relative w-[100%] mt-[20%] md:mt-[10%] 2xl:mt-[5%] bg-[#170f49f2]
      pb-5 pt-10 mb-10 lg:py-[50px] xl:py-[96px]">
      <div className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto">

        <div className="lg:flex lg:flex-row lg:justify-between">
          <div>
            <h2 className="w-[80%] text-[32px] font-bold text-white leading-9 font-DM">
              Make an appointment now
            </h2>
            <p className="text-lg text-white leading-[30px] font-DM mt-2
              lg:w-[75%]">
              Make an appointment at our medical clinic and trust our professionals to take care of your health.
            </p>
          </div>

          <Buttonwrapper className="flex flex-col mt-5 gap-4 md:flex-row">
            <button className="w-[55%] md:w-[25%] lg:w-[50%] 2xl:w-[70%] lg:py-[10px] 2xl:py-[8px] py-[15px]
              lg:px-[50px] px-[30px] bg-[#7ea2e4] leading-[20px] text-lg font-medium
              text-white rounded-[50px] font-DM">
              Call us
            </button>
            <button className="w-[60%] md:w-[25%] lg:w-[50%] 2xl:w-[80%] lg:py-[10px] 2xl:py-[8px] py-[15px]
              lg:px-[50px] px-[30px] bg-white leading-[20px] text-lg font-medium
              rounded-[50px] font-DM">
              Write us
            </button>
          </Buttonwrapper>
        </div>
        <img
          src={Arrow}
          alt="send"
          className="absolute top-3 right-3"
        />
      </div>
      <img
        src={curve}
        alt="curve"
        className="hidden md:block absolute bottom-0 right-0 w-[30%] lg:z-[1]"
      />
    </section>
  )
}