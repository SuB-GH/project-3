import React, { useState } from "react"
// import Nav from './components/Nav'
import About from './components/About'
import ContactForm from "./components/Contact";
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: ""
    }
  ])

  //const
  return (
    <div>
      <main>
        <ContactForm></ContactForm>
        <About></About>
      </main>
    </div>
  );
}


export default App;