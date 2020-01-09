import React, {Component} from 'react';
import {BrowserRouter } from  'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Provider} from  'react-redux';
import store from './REDUX/Redux_store.js';
import { Route, withRouter} from  'react-router-dom';
import Authorize from './components/authorize/authorize.js';
import Sidebar from './components/sidebar/sidebar.js';
import TodoListContainer from './components/content/content_container.js';
import { Redirect } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import main from './components/main/main/main.module.css';
import Button from './components/main/main.js';
function App() {
  return (
    <div className='app-wrapper'>

    <BrowserRouter>
      <Provider store = {store}>
        <div className='wrapper__description'>
{/*<Redirect from="/" to="/start" />*/}
          <Route path='/start'  render = { () => {
             return    <React.Suspense>

                  <div className='wrapper__button'>
                  <p>LoremLoremLoremLoremLorem LoremLoremLoremLoremLorem  LoremLorem
                  LoremLoremLorem LoremLoremLoremLoremL
                  oremLoremLoremLoremLoremLorem Lorem</p>
                      <Button />
                 </div>
                   </React.Suspense>
                     }} />

        <Route path='/authorize'  render = { () => { return    <React.Suspense>
               <Authorize /> </React.Suspense>   }} />

       <Route path='/content'  render = { () => {  return    <React.Suspense>
               <Header />
               <TodoListContainer />
               <Sidebar />
                               {/*  <Footer />*/}
                  </React.Suspense>
                  }} />

          </div>
          </Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
