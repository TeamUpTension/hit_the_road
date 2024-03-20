import { Route, Routes } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import PlaceList from "./pages/main/PlaceList"
import PlaceDetail from "./pages/main/PlaceDetail"
import Login from "./pages/common/Login"

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<PlaceList />} />
          <Route path="/place-list" element={<PlaceList />} />
          <Route path="/place-detail" element={<PlaceDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
