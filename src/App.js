import React, {useState} from "react"
// import Nav from './components/Nav'
import About from './components/About'
// import logo from './logo.svg';
import './App.css';

function App(){
    const [categories] = useState([
        {
            name: ""
        }
    ])

    //const
    return (
      <div>
        <main>
          <About></About>
        </main>
      </div>
    );

}


export default App;