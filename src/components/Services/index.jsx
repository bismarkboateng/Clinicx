
import { ServiceLine } from "../../assets"
import { Servicecard } from ".."
import { service } from "./service-data"

export default function index() {
  return (
    <section className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto mt-10 2xl:mt-20
        xl:mt-[10%]">
        <div className="relative">
            <h1 className="text-6xl font-Ranga text-[#d5f2da] font-normal
            leading-[60px]">
                Services
            </h1>
            <p className="text-[#170f49] font-DM font-bold leading-[35px]
                text-[32px] w-[95%]">
                Comprehensive medical
                services tailored for you
            </p>
            <img
               src={ServiceLine}
               alt="service line"
               className="absolute w-[61px] top-[-20px] right-[-10px]
               md:w-[250px] md:top-[120px] md:right-[-40px] xl:right-[-95px]
               2xl:w-[180px] 2xl:right-[-200px] 2xl:top-[260px]" 
            />
        </div>


        <div className="relative mt-10 xl:mt-[7%] grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-x-4">
            {service.map((item) => (
                <Servicecard
                    key={item.id}
                    icon={item.icon}
                    header={item.header}
                    body={item.body}
                />
            ))}
        </div>

    </section>
  )
}
