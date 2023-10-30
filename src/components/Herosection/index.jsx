
import { Buttonwrapper, Card } from ".."
import { HomeHero, HeroLine, Quote } from "../../assets" 

export default function index() {
  return (
    <section className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto flex flex-col mt-20 mb-8
        lg:flex lg:flex-row lg:gap-10 lg:items-center lg:justify-between">
        <section className="lg:w-[50%]">
            <h1 className="text-[45px] font-DM leading-[52px] text-[#170f49] font-bold
                mb-5 md:mb-8 w-[90%] lg:w-[85%]">
                Welcome to Clinicx : your health,
                <span className="text-[#79dd97]">  our priority</span>
            </h1>

            <p className="text-lg text-[#6f6c90] mb-5 md:mb-8 leading-[30px] font-DM
                lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse varius enim in eros elementum tristique. 
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, 
                ut commodo diam libero vitae erat.
            </p>

            <Buttonwrapper
                className="bg-[#79dd97] text-white text-center py-[18px]
                px-[20px] w-[85%] font-medium rounded-[100px] md:w-[35%]
                lg:w-[50%] 2xl:w-[40%]"
            >
                <button className="outline-none border-none">
                    Make an appointment
                </button>
            </Buttonwrapper>
        </section>


        <section className="relative mt-[27%] lg:mt-0 lg:w-[50%] w-[100%]
            md:mt-[15%] object-cover">
            <img
                src={HomeHero}
                alt="hero"
                className="rounded-[30px] w-[100%] max-h-[550px] object-cover
                    object-top"
            />
            <img
                src={HeroLine}
                alt="line"
                className="absolute w-[111px] top-[-50px] z-[2] right-1
                md:right-[70%] md:top-[75%] md:w-[200px]"
            />

            <Card
                className="absolute z-[10] bottom-[-3.5%] left-[-2%] backdrop-blur-[5px]
                rounded-3xl bg-[#ffffffcc] py-[16px] px-[24px] w-[80%] shadow-card
                md:w-[45%] md:left-[60%] md:bottom-[4%] lg:bottom-[6%] lg:left-[55%]
                lg:w-[50%] 2xl:w-[60%] 2xl:left-[53%]"
            >
                <img
                    src={Quote}
                    alt="quote"
                    className="mb-3"
                />
                <p className="font-DM text-sm text-[#6f6c90] leading-6">
                    The whole team is superbly competent, and we get an appointment quickly.
                </p>
            </Card>
        </section>
    </section>
  )
}
