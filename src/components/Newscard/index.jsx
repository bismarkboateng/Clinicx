
import { Buttonwrapper } from ".."

export default function index({ item }) {
  return (
    <section className="p-[20px] rounded-[20px] shadow-card">
      <img
        src={item.image}
        alt="news image"
        className="rounded-[15px]"
      />
      <h3 className="w-[80%] text-2xl text-[#170f49] font-bold leading-[30px]
        mt-4">
        {item.header}
      </h3>
      <p className="text-[#6f6c90] text-lg leading-[30px] mb-4 mt-4
        font-DM">
          {item.body}
      </p>

      <Buttonwrapper className="w-[70%] md:w-[25%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] bg-[#7ea2e4]
        text-white rounded-[100px] py-[10px] px-[20px] font-medium text-lg
        text-center">
        <button className="outline-none border-none">
          Read more
        </button>
      </Buttonwrapper>
    </section>
  )
}