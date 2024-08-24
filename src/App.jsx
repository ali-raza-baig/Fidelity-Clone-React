import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ContactPage from "./Pages/ContactPage"
import AboutPage from "./Pages/AboutPage"
import TeamPage from "./Pages/TeamPage"
import CloudAndHosting from "./Pages/CloudAndHosting"

function App() {

  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/cloud-hosting" element={<CloudAndHosting />} />
    </Routes>
  )
}

export default App
