import React, { useState } from "react"
import Header from './components/Header'
import About from './components/About'
import Books from './components/Books'
import Contact from "./components/Contact";
import Footer from './components/Footer'
import Search from "./components/Search";
import SignupForm from './components/Signup/SignupForm'
import LoginForm from "./components/Signup/LoginForm";


function App() {
  // const [categories] = useState([
  //   { name: "books" },
  //   { name: "articles" }
  // ])

  // const [currentCategory, setCurrentCategory] = useState(categories[0])

  const [otherSelected, setOtherSelected] = useState('Search')

  return (
    <div className="App">
      <Header
        otherSelected={otherSelected}
        setOtherSelected={setOtherSelected}
      ></Header>
      <main>
        {otherSelected === 'Search' ? (
          <Search></Search>
        ) : otherSelected === 'Books' ? (
          <Books></Books>
        ) : otherSelected === 'Contact' ? (
          <Contact></Contact>
        ) : otherSelected === 'About Us' ? (
          <About></About>
        ) : (
          <div>
            <SignupForm></SignupForm>
            <LoginForm></LoginForm>
          </div>
        )}

      </main>
      <Footer></Footer>
    </div>
  );
}


export default App;