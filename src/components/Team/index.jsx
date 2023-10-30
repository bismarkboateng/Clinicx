
import { Line } from "../../assets"
import { Teamcard } from ".."
import { Team } from "./team-data"

export default function index() {
  return (
    <section className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto">
        <section className="relative">
          <h1 className="text-[60px] font-Ranga text-[#d5f2da] leading-[60px]">
            Our team
          </h1>
          <p className="w-[80%] md:w-[100%] text-[#170f49] font-DM 
            text-[32px] font-bold leading-9">
            Our team of professional doctors to serve you
          </p>

          <img
            src={Line}
            alt="line"
            className="absolute bottom-[-20px] right-0 w-16
              md:bottom-[20px] md:w-20"
          />

        </section>

        <section className="mt-10 grid grid-cols-1 gap-y-4
          md:grid-cols-2 lg:grid-cols-3 md:gap-x-4">
          {Team.map((item) => (<Teamcard key={item.id} item={item} />))}
        </section>
    </section>
  )
}
