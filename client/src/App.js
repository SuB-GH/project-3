import React, { useState } from "react"

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import Contact from "./components/Contact";
import Footer from './components/Footer'
import Search from "./components/Search";
import SignupForm from './components/Signup/SignupForm'
import LoginForm from "./components/Signup/LoginForm";


// apollo imports
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


// graph ql http link
const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


// apolo client call
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [categories] = useState([
  //   { name: "books" },
  //   { name: "articles" }
  // ])

  // const [currentCategory, setCurrentCategory] = useState(categories[0])

  const [otherSelected, setOtherSelected] = useState('Search')

  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Header
        otherSelected={otherSelected}
        setOtherSelected={setOtherSelected}
      ></Header>
      <main>
        {otherSelected === 'Search' ? (
          <Search></Search>
        ) : otherSelected === 'Contact' ? (
          <Contact></Contact>
        ) : otherSelected === 'About Us' ? (
          <About></About>
        ) : (
          <div className="form-container">
            <LoginForm></LoginForm>
            <SignupForm></SignupForm>
          </div>
        )}

      </main>
      <Footer></Footer>

      
    </div>
    </ApolloProvider>
  );
}


export default App;