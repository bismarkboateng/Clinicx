
import { ValueImage, Loop, Love } from "../../assets"
import { values } from "./values-data"

export default function index() {
  return (
    <section className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto mt-10
      flex flex-col lg:flex-row lg:mt-32 lg:gap-20 xl:gap-10">
      <section className="lg:w-[50%] xl:w-[55%] 2xl:mt-7">
        <h1 className="text-6xl font-Ranga text-[#d5f2da] font-normal
            lg:text-[80px]">
            Values
        </h1>
        <p className="w-[95%] text-[32px] text-[#170f49] font-bold leading-9
          font-DM">
          Key values that guide our work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2
          lg:gap-x-5">
        {values.map((value) => (
          <div className="mt-6" key={value.id}>
            <img
              src={value.icon}
              alt="icon"
            />
            <h3 className="text-2xl font-bold leading-[30px] font-DM
              mt-5 text-[#170f49]">
              {value.header}
            </h3>
            <p className="text-[#6f6c90] text-lg leading-[30px] font-DM
              mt-3">
                {value.body}
            </p>
          </div>
        ))}
        </div>
      </section>

      <section className="lg:w-[50%] xl:w-[45%] relative mt-[20%] md:mt-[8%] lg:mt-20
        2xl:mt-0">
          <img
            src={ValueImage}
            alt="medical doctor" 
            className="w-[100%] max-h-[600px] object-cover object-top
            rounded-[30px]"
            data-aos="zoom-in"
            data-aos-duration="500"
          />

          <img
            src={Love}
            alt="heart"
            className="absolute top-5 right-4 w-16 h-16 md:w-24 md:h-24"
          />
          <img
            src={Loop}
            alt="loop"
            className="absolute max-w-[70%] bottom-[-4%] right-[-4%]
            lg:bottom-[4%] lg:max-w-[94%] xl:bottom-[-3%]"
          />
      </section>

    </section>
  )
}
