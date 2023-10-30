
import { Testimonialcard } from ".."
import { testimonial } from "./testimonial-data"

export default function index() {
  return (
    <section className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto
      flex flex-col lg:flex-row lg:gap-7">
      <section className="mt-20">
        <h1 className="text-[60px] text-[#d5f2da] font-Ranga font-normal
          leading-[60px]">
          Testimonials
        </h1>
        <h2 className="text-[#170f49] text-[32px] font-bold leading-9
          font-DM w-[95%]">
          Our latest customer reviews
        </h2>
        <p className="text-[#6f6c90] text-lg leading-[30px] font-DM mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique.
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </section>

      <section className="relative mt-[20%] md:mt-[10%]">
        {testimonial.map((data) => (<Testimonialcard key={data.id} data={data} />))}
      </section>
    </section>
  )
}