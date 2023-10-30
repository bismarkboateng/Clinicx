import { AboutImg, AboutImg2, AboutLine, AboutLine2, Check, Crown, Doc1, Doc2, Doc3, Doc4, Doc5, Doc6, Ear, Hand, Lines, Plane } from "../../assets"
import { Buttonwrapper, Navbar, Servicecard, Teamcard } from "../../components"

export default function index() {
	return (
		<>
			<main>
				<Navbar />
				<section className="flex flex-col gap-y-5 py-10 relative">
					<div className="absolute z-0 bg-green-100 h-[600px] w-full"></div>
					<div className="flex flex-col gap-y-5 z-10 p-5 lg:justify-center">
						<div className="flex flex-col gap-y-5 z-10 p-5 lg:px-32 md:px-32 lg:flex-row md:flex-row">
							<h1 className="text-4xl font-bold text-[#170F49] lg:w-1/2 md:w-1/2">
								A team of professionals dedicated to your health
							</h1>
							<p className="text-lg text-[#170F49] leading-7 lg:w-1/2 md:w-1/2">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione magni ullam nemo? Suscipit repellat veniam at reprehenderit officia, quae nemo perspiciatis quibusdam voluptate harum repellendus aliquam molestiae, hic illum?
							</p>
						</div>
						<img src={AboutImg} alt="" className="rounded-3xl min-h-[400px] lg:min-h-[300px] lg:w-3/4 md:w-3/4 self-center" />
					</div>
				</section>
				<section className="flex flex-col lg:flex-row md:flex-col p-2 gap-y-10 gap-x-5 lg:px-32 md:px-10">
					<div className="flex relative lg:w-1/2 md:w-full md:h-[550px]">
						<img src={AboutImg2} alt="" className="rounded-3xl w-full"/>
						<img src={AboutLine} alt="" className="absolute w-2/5 -bottom-5 right-0"/>
					</div>
					<div className="flex flex-col gap-y-10 lg:w-1/2 md:w-full lg:self-center md:self-center">
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
				<section className="p-2 flex flex-col py-20 gap-y-10 lg:flex-row md:flex-row lg:px-32 md:px-32 lg:flex-wrap md:flex-wrap">
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
					
					
					<div className="lg:w-1/2 md:w-1/2 px-5 sticky mb-4 top-32 lg:top-0">
						<Servicecard
							icon={Ear}
							header={"Compassion"}
							body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
						/>
					</div>
					<div className="lg:w-1/2 md:w-1/2 p-5 sticky mb-4 top-32 lg:top-0">
						<Servicecard
							icon={Crown}
							header={"Excellence"}
							body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
						/>
					</div>
					<div className="lg:w-1/2 md:w-1/2 p-5 sticky mb-4 top-32 lg:top-0">
						<Servicecard
							icon={Hand}
							header={"Collaboration"}
							body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
						/>
					</div>
						
				</section>
				<section className="flex flex-col p-2 lg:p-32">
					<div className="flex flex-col p-3 bg-green-100 rounded-3xl gap-y-5 lg:p-20">
						<div className="flex flex-col lg:flex-row gap-x-5 gap-y-5">
							<div className="flex flex-col lg:w-1/2 gap-y-5">
								<h3 className="text-4xl font-bold text-[#170F49] leading-10">
									Do you have any questions about our clinic ?
								</h3>
								<p className="text-lg text-[#6f6c90] leading-7 font-normal">
									If you have any questions about our services or our centre, please contact us.
								</p>
							</div>
							<div className="flex flex-col gap-y-10 lg:flex-row md:flex-row gap-x-5 md:justify-start w-full">
								<button className="bg-[#170F49] font-semibold text-lg w-fit text-white py-3 h-12 lg:py-0 px-10 md:px-5 rounded-3xl">Call Us</button>
								<button className="bg-[#79dd97] font-semibold text-lg w-fit text-white py-3 h-12 lg:py-0 px-10 md:px-5 rounded-3xl">Write Us</button>
							</div>
						</div>
						<img src={AboutLine2} alt="" className="pt-20"/>
					</div>
				</section>
				<section className="flex flex-col p-2 gap-y-2 lg:p-32">
					<div className="flex flex-col gap-y-5">
						<h3 className="text-6xl font-Ranga text-[#d5f2da] font-normal leading-[60px]">
							Our Team
						</h3>
						<h3 className="text-4xl font-bold text-[#170F49]">
							Our team of professional doctors to serve you
						</h3>
					</div>
					<div className="flex-col lg:flex-row md:flex-row flex p-3 gap-y-5 relative lg:flex-wrap md:flex-wrap">
						<img src={Lines} alt="" className="absolute right-0 -top-10 w-16"/>
						<Teamcard name={"John Caret"} img={Doc1} position={"dentist"} className={"lg:w-1/3 md:w-1/3 md:px-2"}/>
						<Teamcard name={"Elisa Mercier"} img={Doc2} position={"gynaecologist"} className={"lg:w-1/3 md:w-1/3 md:px-2"}/>
						<Teamcard name={"Sarah Beyer"} img={Doc3} position={"neurologist"} className={"lg:w-1/3 md:w-1/3 md:px-2"}/>
						<Teamcard name={"Maria Cloud"} img={Doc4} position={"paediatrician"} className={"lg:w-1/3 md:w-1/3 md:px-2"}/>
						<Teamcard name={"Jessica Baileys"} img={Doc5} position={"radiologist"} className={"lg:w-1/3 md:w-1/3 md:px-2"}/>
						<Teamcard name={"Samantha Youn"} img={Doc6} position={"nurse"} className={"lg:w-1/3 md:w-1/3 md:px-2"}/>
					</div>
				</section>
				<section className="flex p-5 lg:p-32 justify-center">
					<div className="flex flex-col lg:flex-row shadow-lg rounded-2xl gap-y-5 p-5 lg:p-20 py-20 relative lg:w-full">
						<img src={Plane} alt="" className="w-16 absolute -top-5 right-0"/>
						<div className="flex flex-col gap-y-2">
							<h3 className="text-3xl font-bold text-[#170F49] whitespace-pre-wrap">
								Subscribe to our newsletter
							</h3>
							<p className="text-lg text-[#6f6c90] leading-7 font-normal">
								Keep up to date with important news about our clinic and your medical records.
							</p>
						</div>
						<form action="" className="flex">
							<div className="flex flex-col gap-y-5 lg:flex-row md:flex-row gap-x-5 items-center md:items-center">
								<input type="text" name="" id="" placeholder="Your email address" className="rounded-3xl py-3 px-5 border" />
								<Buttonwrapper className={"bg-[#7ea2e4] w-full font-semibold text-lg text-center text-white py-3 px-10 rounded-3xl"}>Subscribe</Buttonwrapper>
							</div>
						</form>
					</div>
				</section>
			</main>
		</>
	)
}
