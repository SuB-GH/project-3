import React from "react"
// import Nav from './components/Nav'
import About from './components/About'
// import logo from './logo.svg';
import Books from './components/Books'
import ContactForm from "./components/Contact";


function App() {
  // const [categories] = useState([
  //   { name: "books" },
  //   { name: "articles" }
  // ])

  // const [currentCategory, setCurrentCategory] = useState(categories[0])

  // const
  return (

    <div>
      <h1 className="underline">handleSubmit</h1> 
      <main>
        <ContactForm></ContactForm>
        <About></About>
        <Books></Books>
      </main>
    </div>
  );
}


export default App;