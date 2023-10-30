import { 
  Navbar, Herosection, Services,
  Experience, Values, Appointment,
  Team, Guiding
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
    </main>
  )
}
