
import { Newscard } from ".."
import { news } from "./news-data"

export default function index() {
  return (
    <section className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto mt-10">
      <h1 className="text-[60px] text-[#d5f2da] font-Ranga font-normal
        leading-[60px]">
        News
      </h1>
      <p className="w-[80%] text-[#170f49] font-DM text-[32px] font-bold
        leading-9">
        Discover our latest blog posts
      </p>

      <section className="mt-8 grid grid-cols-1 gap-y-5 lg:grid-cols-3 
        lg:gap-x-5 lg:mt-10">
        {news.map((item) => (<Newscard key={item.id} item={item} /> ))}
      </section>
    </section>
  )
}
