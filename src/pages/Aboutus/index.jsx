import { AboutImg, AboutImg2, AboutLine, AboutLine2, Check, Crown, Doc1, Doc2, Doc3, Doc4, Doc5, Doc6, Ear, Hand, Lines, Plane } from "../../assets"
import { 
	Navbar, Servicecard, Team, Subscribe,
	Footer
} from "../../components"

export default function index() {
	return (
		<>
			<main>
				<Navbar />
				<section className="flex flex-col gap-y-5 relative mb-20">
					<div className="absolute z-0 bg-green-100 h-[600px] md:h-[400px] w-full"></div>
					<div className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto flex flex-col gap-y-5 z-10 lg:justify-center">
						<div className="flex flex-col gap-y-5 z-10  mt-5">
							<h1 className="text-4xl font-bold mt-3 text-[#170F49] md:w-[85%]">
								A team of professionals dedicated to your health
							</h1>
							<p className="text-lg text-[#170F49] leading-7 md:w-[100%]">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione magni ullam nemo? Suscipit repellat veniam at reprehenderit officia, quae nemo perspiciatis quibusdam voluptate harum repellendus aliquam molestiae, hic illum?
							</p>
						</div>
						<img src={AboutImg} alt="" 
							className="rounded-3xl min-h-[400px] 
							lg:mi-h-[300px] 2xl:h-[300px] md:w-[100%] 
							self-center object-cover object-top" />
					</div>
				</section>

				<section className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto  
					flex flex-col lg:flex-row lg:gap-20 md:flex-col gap-y-10  gap-x-5 
					2xl:mt-20">
					<div className="flex relative lg:w-1/2 md:w-full md:h-[550px]">
						<img src={AboutImg2} alt="" className="rounded-[30px] w-[100%] max-h-[550px] object-cover
                    object-top rounded-3xl w-full"/>
						<img src={AboutLine} alt="" className="absolute w-2/5 -bottom-5 right-0"/>
					</div>
					<div className="flex flex-col gap-y-10 lg:w-1/2 md:w-full lg:self-center md:self-center
						">
						<div className="flex flex-col gap-y-1">
							<h3 className="text-6xl font-Ranga text-[#d5f2da] font-normal leading-[60px]">
								Story
							</h3>
							<h3 className="text-4xl font-bold text-[#170F49]">
								Your trusted healthcare destination
							</h3>
						</div>
						<p className="text-lg text-[#6f6c90] leading-7 font-normal">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione magni ullam nemo? Suscipit repellat veniam at reprehenderit officia, quae nemo perspiciatis quibusdam voluptate harum repellendus aliquam molestiae, hic illum?
						</p>
						<p className="text-lg text-[#6f6c90] leading-7 font-normal">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione magni ullam nemo? 
						</p>
						<ul className="flex flex-col gap-y-5 lg:flex-row md:flex-row lg:flex-wrap md:flex-wrap">
							<li className="text-[#6f6c90] lg:w-1/2 md:w-1/2 font-normal text-lg flex items-center gap-x-5"><img src={Check} alt="" />Open 24/7</li>
							<li className="text-[#6f6c90] lg:w-1/2 md:w-1/2 font-normal text-lg flex items-center gap-x-5"><img src={Check} alt="" />Over 20 clinics</li>
							<li className="text-[#6f6c90] lg:w-1/2 md:w-1/2 font-normal text-lg flex items-center gap-x-5"><img src={Check} alt="" />Over 100 doctors</li>
							<li className="text-[#6f6c90] lg:w-1/2 md:w-1/2 font-normal text-lg flex items-center gap-x-5"><img src={Check} alt="" />Duty pharmacy</li>
						</ul>
					</div>
				</section>

				<section className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto 
					flex flex-col gap-y-10  lg:flex-row md:flex-row mt-20 mb-10
					lg:flex-wrap md:flex-wrap">
					<div className="flex flex-col gap-y-5 lg:w-1/2 md:w-1/2">
						<h3 className="text-6xl font-Ranga text-[#d5f2da] font-normal leading-[60px]">
							Values
						</h3>
						<h3 className="text-4xl font-bold text-[#170F49]">
							Key values that guide our work
						</h3>
						<p className="text-lg text-[#6f6c90] leading-7 font-normal">
							At Clinicx, we prioritize patient well-being through compassionate care, collaboration, and excellence. Our diverse, nurturing environment elevates healthcare standards.
						</p>
					</div>
					
					
					<div className="md:w-[45%] lg:w-[47%]  sticky mb-4 top-32 lg:top-0">
						<Servicecard
							icon={Ear}
							header={"Compassion"}
							body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
						/>
					</div>
					<div className="md:w-[45%] lg:w-[47%] md:mr-8 lg:mr-[3%] sticky mb-4 top-32 lg:top-0">
						<Servicecard
							icon={Crown}
							header={"Excellence"}
							body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
						/>
					</div>
					<div className="md:w-[45%] lg:w-[47%] sticky mb-4 top-32 lg:top-0">
						<Servicecard
							icon={Hand}
							header={"Collaboration"}
							body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
						/>
					</div>
				</section>

				<section className="w-[90%] xl:w-[80%] 2xl:w-[78%] mx-auto mb-20">
					<div className="flex flex-col p-3 bg-green-100 rounded-3xl gap-y-5
						lg:p-16">
						<div className="flex flex-col lg:flex-row gap-x-5 gap-y-5
							lg:items-center lg:justify-between">
							<div className="flex flex-col lg:w-[100%] gap-y-5 
								mt-3 lg:mr-auto">
								<h3 className="text-4xl font-bold text-[#170F49] leading-10">
									Do you have any questions about our clinic ?
								</h3>
								<p className="text-lg text-[#6f6c90] leading-7 font-normal">
									If you have any questions about our services or our centre, please contact us.
								</p>
							</div>
							<div className="flex flex-col gap-y-10 lg:flex-row md:flex-row gap-x-5 md:justify-start w-[50%]">
								<button className="bg-[#170F49] font-semibold text-lg w-fit text-white 
									py-3 h-12 lg:py-0 px-10 md:px-5 rounded-3xl text-center">
									Call Us
								</button>
								<button className="bg-[#79dd97] font-semibold text-lg w-fit text-white
									py-3 h-12 lg:py-0 px-10 md:px-5 rounded-3xl text-center">
									Write Us
								</button>
							</div>
						</div>
						<img src={AboutLine2} alt="" className=""/>
					</div>
				</section>

				<Team />
				<div className="relative">
					<Subscribe />
					<Footer />
				</div>
			</main>
		</>
	)
}
