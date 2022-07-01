import "./App.css";
import Header from "./components/Header";
import Form  from './components/Form';
import Footer from "./components/Footer";
import { } from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  return (
    <>
    <Router>
      <Header />
    </Router>
      
      <Form />
      <Footer />
    </>
  );
}
export default App;
