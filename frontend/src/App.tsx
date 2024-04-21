import { Route, Routes } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import PlaceList from "./pages/main/PlaceList"
import PlaceDetail from "./pages/main/PlaceDetail"
import RouteList from "./pages/main/RouteList"
import RouteDetail from "./pages/main/RouteDetail"
import MyRouteList from "./pages/main/MyRouteList"
import MyRouteWrite from "./pages/main/MyRouteWrite"
import Login from "./pages/common/Login"
import NotFound from "./pages/common/NotFound"

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<RouteList />} />
          <Route path="/places" element={<PlaceList />} />
          <Route path="/places/:id" element={<PlaceDetail />} />
          <Route path="/routes" element={<RouteList />} />
          <Route path="/routes/:id" element={<RouteDetail />} />
          <Route path="/my-route" element={<MyRouteList />} />
          <Route path="/my-route/write" element={<MyRouteWrite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
