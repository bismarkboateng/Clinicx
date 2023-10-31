export default function index({ item }) {
  return (
    <section className="p-[20px] border border-[#eff0f6] bg-white
      rounded-[20px] shadow-card">
        <img
          src={item.image}
          alt="dentist"
          className="w-[100%] max-h-[300px] object-cover 
          object-top rounded-[10px]"
        />
        <h1 className="text-[#170f49] font-DM text-2xl font-bold
          leading-[30px] text-center mt-3">
          {item.name}
        </h1>
        <div className="text-[#79dd97] font-DM text-base font-bold
          leading-5 text-center">
          {item.profession}
        </div>
    </section>
  )
}
