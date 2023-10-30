import { 
  Navbar, Herosection, Services,
  Experience, Values, Appointment,
  Team, Guiding, Testimonial, Subscribe
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
      <Testimonial />
      <Subscribe />
    </main>
  )
}
