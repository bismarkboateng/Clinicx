
import { 
    ExperienceImage, ExperienceArrow, ExperienceEuro,
    ZigZag
} from "../../assets"
import { Card } from ".."


export default function index() {
  return (
    <section className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto mt-10 lg:mt-20 flex flex-col
        lg:flex-row lg:items-center lg:gap-20 xl:gap-32">
        <section className="relative lg:w-[45%]">
            <img
                src={ExperienceImage}
                alt="hero"
                className="w-[100%] max-h-[600px] object-cover object-top
                rounded-[30px]"
                data-aos="zoom-in"
                data-aos-duration="500"
            />
            <img 
                src={ExperienceArrow}
                alt="arrow"
                className="absolute w-20 top-[-13%] right-[-5%] z-[-1]
                md:w-32 md:top-[-9%] md:z-[0] md:right-[-3%] lg:right-[-150%]
                2xl:right-[-165%]"
            />
            <img
                src={ExperienceEuro}
                alt="euro"
                className="absolute w-12 h-12 top-10 left-8
                md:w-20 md:h-20"
            />

            <img
                src={ZigZag}
                alt="zig zag"
                className="hidden lg:block absolute bottom-[-10%] left-3 w-96
                    z-[-1] xl:w-[2000px]"
            />
            <Card
                className="absolute z-[10] bottom-[-1.5%] left-[-2%] backdrop-blur-[5px]
                rounded-3xl bg-[#ffffffcc] py-[14px] lg:py-[20px] px-[10px] w-[75%] shadow-card
                md:w-[25%] md:bottom-[4%] lg:bottom-[-3%] lg:w-[50%] lg:left-[-5%] 2xl:w-[30%] 
                text-center"
            >
                <p className="text-[32px] font-DM text-[#170f49] font-bold">
                    +600
                </p>
                <p className="text-sm font-DM text-[#170f49] leading-5">
                    Consultations each month
                </p>
            </Card>
        </section>

        <section className="mt-20 lg:mt-0 lg:w-[55%]">
            <h1 className="text-6xl font-Ranga text-[#d5f2da] font-normal
                lg:text-[80px]">
                Experience
            </h1>
            <p className="text-[32px] font-DM text-[#170f49] font-bold
                leading-9 w-[95%] md:w-[100%] lg:w-[90%]">
                We've been looking after you for over 100 years
            </p>
            <p className="text-lg text-[#6f6c90] leading-[30px] font-DM mb-10
                mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. 
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, 
                ut commodo diam libero vitae erat.
                <br />
                <br />
                Duis cursus, mi quis viverra ornare, 
                eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
        </section>

    </section>
  )
}
