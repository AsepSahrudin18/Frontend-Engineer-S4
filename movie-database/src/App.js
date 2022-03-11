import "./App.css";
/**
 * Import Component
 */
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/*
        Memanggil Component : Header, Main dan Footer
        Mengirim props name. 
       */}
       <Header />
       <Main />
       <Footer /> 
    </div>
  );
}

export default App;
