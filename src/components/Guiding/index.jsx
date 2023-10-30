import {
    Diamond, Bulb, King
} from "../../assets"

export default function index() {

  const imageStyles = "w-20 h-20"
  const wrapperStyles = "flex flex-col items-center mt-[21%] md:mt-[7%]"
  const titleStyles = "text-[#170f49] text-2xl font-DM font-bold leading-[30px] text-center"
  const paragraphStyles = "text-[#170f49] text-lg leading-[30px] font-DM mt-3 text-center"
  return (
    <section className="bg-[#bed5ff] pb-8 mt-8 lg:mt-20">
        <div className="flex flex-col items-center">
            <h2 className="text-[#170f49] font-DM text-[32px] font-bold leading-9
                w-[70%] text-center mt-9 lg:mt-20">
                Our guiding principles
            </h2>
            <p className="text-[#170f49] text-lg leading-[30px] font-DM text-center
                w-[90%] lg:w-[70%] mt-3">
                At Clinicx, our core values shape every aspect of our care, 
                ensuring that your well-being remains at the heart of our mission.
            </p>
        </div>
        
        <div className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto
            grid grid-cols-1 lg:grid-cols-3 lg:gap-x-5 place-content-center lg:mt-[5%]">
            <div className={wrapperStyles}>
                <img 
                    src={Diamond}
                    alt="diamond"
                    className={imageStyles}
                />
                <h1 className={titleStyles}>Compassionate care</h1>
                <p className={paragraphStyles}>
                    We provide empathetic care, recognizing the unique needs and concerns of each patient.
                </p>
            </div>


            <div className={wrapperStyles}>
                <img 
                    src={Bulb}
                    alt="diamond"
                    className={imageStyles}
                />
                <h1 className={titleStyles}>Collaborative approach</h1>
                <p className={paragraphStyles}>
                    By working closely with patients, families, and experts, we create a shared journey towards optimal health.
                </p>
            </div>

            <div className={wrapperStyles}>
                <img 
                    src={King}
                    alt="diamond"
                    className={imageStyles}
                />
                <h1 className={titleStyles}>Unwavering excellence</h1>
                <p className={paragraphStyles}>
                    Driven by a commitment to the highest medical standards, we strive for excellence in every service we offer.
                </p>
            </div>

        </div>

    </section>
  )
}
