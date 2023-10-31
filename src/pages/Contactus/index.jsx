import { Navbar, Footer } from "../../components"


export default function index() {
  return (
    <div>
      <Navbar />
      <section className="lg:flex items-center">
        <form action="" className="flex flex-col items-start justify-center w-[100%] px-[2rem] font-DM text-[#170f49] mt-16 mb-20 md:px-[4rem]">
          <h1 className="text-[#170f49] font-DM font-bold text-[3em] mb-8">Contact us</h1>
          <div className="block w-[100%] md:flex md:gap-8">
            <div className="w-[100%] pb-7 md:w-[45%]">
              <label htmlFor="" className="block text-[1.2em] font-bold">First name</label>
              <input type="text" className="border rounded-3xl py-[12px] px-[12px] w-[100%] text-[1.2em] outline-[#7ea2e4] hover:border-[#7ea2e4] active:[#7ea2e4] focus:[#7ea2e4] "/>
            </div>
            <div className="w-[100%] pb-7 md:w-[45%]">
              <label htmlFor="" className="block text-[1.2em] font-bold">Last name</label>
              <input type="text" className="border rounded-3xl py-[12px] px-[12px] w-[100%] text-[1.2em] outline-[#7ea2e4] hover:border-[#7ea2e4] active:[#7ea2e4] focus:[#7ea2e4]"/>
            </div>
          </div>
          <div className="block w-[100%]  md:flex md:gap-8">
            <div className="w-[100%] pb-7 md:w-[45%]">
              <label htmlFor="email" className="block text-[1.2em] font-bold">Email</label>
              <input type="email" className="border rounded-3xl py-[12px] px-[12px] w-[100%] text-[1.2em] outline-[#7ea2e4] hover:border-[#7ea2e4] active:[#7ea2e4] focus:[#7ea2e4]"/>
            </div>
            <div className="w-[100%] pb-7 md:w-[45%]">
              <label htmlFor="phone" className="block text-[1.2em] font-bold">Phone</label>
              <input type="tel" className="border rounded-3xl py-[12px] px-[12px] w-[100%] text-[1.2em] outline-[#7ea2e4] hover:border-[#7ea2e4] active:[#7ea2e4] focus:[#7ea2e4]"/>
            </div>
          </div>
          <div className="w-[100%]">
            <label htmlFor="" className="block text-[1.2em] font-bold">Message</label>
            <textarea name="message" placeholder="How we can help you?" id="" className="border py-[16px] px-[20px] w-[100%] text-[1.2em] min-h-[150px] rounded-lg outline-[#7ea2e4] hover:border-[#7ea2e4] active:[#7ea2e4] focus:[#7ea2e4]"></textarea>
          </div>
          <input type="submit" value="Submit" role="button" className="bg-[#7ea2e4] text-[#fff] text-[1.2em] font-bold hover:opacity-90 py-3 px-8 rounded-3xl mt-4"/>
        </form>
        <div className="bg-[url('https://assets.website-files.com/64d6620e2ccbfaec26bbc78e/64da96546c673529ecb5e1db_Clinicx%20Webflow%20Medical%20Template%20-%20contact-p-1600.jpg')] bg-cover bg-center
                        w-[84%] md:w-[90%] md:mx-10 lg:h-[60vh] h-[40vh] mx-6 rounded-3xl
                        "></div>
      </section>
      <Footer></Footer>
    </div>
  )
}