// Config imports
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'

// Component imports
import { Login } from "./pages/auth/Login"
import { Home } from "./pages/home/Home"

// CSS imports
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
