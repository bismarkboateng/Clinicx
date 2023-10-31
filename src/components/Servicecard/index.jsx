export default function index({ icon, header, body  }) {
  return (
    <section className="sticky py-[20px] px-[30px] rounded-[20px]
      shadow-card border border-[#eff0f6] mb-4 top-32 lg:top-0 bg-white">
        <img
          src={icon}
          alt="neurology"
          className=""
        />

        <h4 className="text-lg font-bold leading-6 text-[#170f49]
          font-DM mt-3">
          {header}
        </h4>
        <p className="font-DM text-[#6f6c90] text-lg leading-[30px] mb-3 mt-3">
          {body}
        </p>
    </section>
  )
}


