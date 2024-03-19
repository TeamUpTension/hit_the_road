import { Route, Routes } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import PlaceList from "./pages/Main/PlaceList"

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<PlaceList />} />
          <Route path="/place-list" element={<PlaceList />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
