import { Route, Routes } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import TripRouteWrite from "./pages/Main/TripRouteWrite"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<TripRouteWrite />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
