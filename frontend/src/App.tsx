import { Route, Routes } from "react-router-dom"
import TripRouteWrite from "./pages/Main/TripRouteWrite"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TripRouteWrite />} />
        <Route path="/route-write" element={<TripRouteWrite />} />
      </Routes>
    </>
  )
}

export default App
