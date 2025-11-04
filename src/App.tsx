import { ThemeProvider } from "@/components/theme-provider"
import Header from "./layout/Header"
import Main from "./sections/Main"
import Footer from "./layout/Footer"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

export default App
