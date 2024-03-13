import { Route, Routes } from "react-router-dom"
import CourseList from "./pages/CourseList"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CourseList />} />
      </Routes>
    </>
  )
}

export default App
