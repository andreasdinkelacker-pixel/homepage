import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./navbar/navbar";
import AppRouter from "./router";
import Footer from "./footer/footer";

function App() {
  return (
    <>
      <Router>
        <header>
          <Navbar />
        </header>

        <main>
          <AppRouter />
        </main>

        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
