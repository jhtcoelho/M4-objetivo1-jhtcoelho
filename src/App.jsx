import { Header } from "./components/Header"
import { SeeProjects } from "./components/SeeProjects"
import { MyProjects } from "./components/MyProjects"
import { Conversation } from "./components/Conversation"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
    <Header />

    <main>
      <SeeProjects />
      <MyProjects />
      <Conversation />
    </main>

    <Footer />
    </>
  )
}

export default App
