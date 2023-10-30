import { Star } from "../../assets"

export default function index({ data }) {
  return (
    <section className="sticky p-8 rounded-[20px]
      shadow-card border border-[#eff0f6] top-[15%] 
      md:top-[20%] mb-10 bg-white">
        <div className="flex flex-row gap-4">
          {[0, 1, 2, 3, 4].map((index) => (
            <img src={Star} key={index} className="w-6 h-6" alt="start" />
          ))}
        </div>
        <h1 className="text-[#170f49] font-DM text-2xl font-bold
          leading-[30px] mt-4">
          {data.header}
        </h1>
        <p className="text-[#6f6c90] font-DM text-lg leading-[30px] mt-2">
          {data.body}
        </p>
    </section>
  )
}