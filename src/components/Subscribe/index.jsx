
import { Subscribe } from "../../assets"
import { Buttonwrapper } from ".."

export default function index() {
  return (
    <section className="relative w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto
      p-8 md:py-[40px] bg-white shadow-card rounded-[20px] mt-20">
      <img 
        src={Subscribe}
        alt="send"
        className="absolute right-0 top-[-9%]"
      />

      <div className="flex flex-col lg:flex-row 2xl:flex-row 2xl:gap-20">
        <div className="flex flex-col">
          <h2 className="text-[#170f49] font-DM text-[32px] font-bold
            leading-9 lg:w-[50%] 2xl:w-[100%]">
            Subscribe to our newsletter
          </h2>
          <p className="text-[#6f6c90] font-DM text-lg leading-[30px] mt-3
            lg:w-[80%] 2xl:w-[100%]">
            Keep up to date with important news about our clinic and your medical records.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <input
            placeholder="Your email address"
            className="w-[100%] py-[13px] pl-[10px] mt-3 mb-3 rounded-[100px]
              border border-[#7ea2e480] bg-white text-[eff0f6]
              focus:border-[#7ea2e480] outline-none"
          />

          <Buttonwrapper>
            <button className="bg-[#7ea2e4] rounded-[100px] py-[14px] px-[40px] text-lg
              font-medium text-white w-[100%]">
              Subscribe
            </button>
          </Buttonwrapper>
        </div>
      </div>
    </section>
  )
}
