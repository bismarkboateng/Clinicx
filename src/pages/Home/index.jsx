import { 
  Navbar, Herosection, Services,
  Experience, Values, Appointment,
  Team, Guiding, Testimonial, Subscribe,
  News, Footer
} from "../../components"


export default function index() {
  return (
    <main>
      <Navbar />
      <Herosection />
      <Services />
      <Experience />
      <Values />
      <Appointment />
      <Team />
      <Guiding />
      <News />
      <Testimonial />
      <div className="relative">
        <Subscribe />
        <Footer />
      </div>
    </main>
  )
}
