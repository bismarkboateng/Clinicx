import { 
  Navbar, Herosection, Services,
  Experience, Values
} from "../../components"


export default function index() {
  return (
    <main>
      <Navbar />
      <Herosection />
      <Services />
      <Experience />
      <Values />
    </main>
  )
}
