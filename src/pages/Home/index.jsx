import { 
  Navbar, Herosection, Services,
  Experience, Values, Appointment
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
    </main>
  )
}
