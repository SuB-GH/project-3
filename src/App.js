import React, {useState} from "react"
// import Nav from './components/Nav'
import About from './components/About'
// import logo from './logo.svg';
import Books from './components/Books'
import Contact from './components/Contact'
import './App.css';

function App(){
    const [categories] = useState([
        {name: "books"},
        {name: "articles"}
    ])

    const [currentCategory, setCurrentCategory] = useState(categories[0])

    //const
    return (
      <div>
        <main>
          <About></About>
          <Books></Books>
          <Contact></Contact>
        </main>
      </div>
    );
}


export default App;