import React, { useState } from "react"
import Header from './components/Header'
import About from './components/About'
import Books from './components/Books'
import Contact from "./components/Contact";
import Footer from './components/Footer'
import Page from "./components/Page";


function App() {
  // const [categories] = useState([
  //   { name: "books" },
  //   { name: "articles" }
  // ])

  // const [currentCategory, setCurrentCategory] = useState(categories[0])

  const [otherSelected, setOtherSelected] = useState('About')

  return (
    <div className="App">
      <Header 
        otherSelected={ otherSelected }
        setOtherSelected={ setOtherSelected }
      ></Header>
      <main>
      {otherSelected === 'About' ? (
          <About></About>
        ) : otherSelected === 'Contact' ? (
          <Contact></Contact>
        ) : otherSelected === 'Books' ? (
          <Books></Books>
        ) : (
          <Page></Page>
        )}

      </main>
      <Footer></Footer>
    </div>
  );
}


export default App;