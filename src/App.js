import React, {Component} from 'react';
import {HashRouter } from  'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Provider} from  'react-redux';
import store from './REDUX/Redux_store.js';
import { Route, withRouter} from  'react-router-dom';
import Authorize from './components/authorize/authorize.js';
import Sidebar from './components/sidebar/sidebar.js';
import TodoListContainer from './components/content/content_container.js';
import HeaderContainer from './components/header/header_container.js';
import { Redirect } from 'react-router-dom';
import Footer from './components/footer/footer.js';
import main from './components/main/main/main.module.css';
import Button from './components/main/main.js';
import counterpart from 'counterpart';
import Translate  from 'react-translate-component';
import en from './lang/en';
import uk from './lang/uk';
import ru from './lang/ru';
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ru', ru);
counterpart.registerTranslations('uk', uk);
counterpart.setLocale('en');
class  App  extends Component{
  state = {
    lang: 'en'
  }
  onLangChange =(e) => {
    this.setState({lang: e.target.value});
    counterpart.setLocale(e.target.value);
  }
  render(){
    return (
      <div className='app-wrapper'>
        <div className='app-wrapper-change-lang'>
          <select value={this.state.lang} onChange={this.onLangChange}>
            <option value='en'>EN</option>
            <option value='ru'>RU</option>
            <option value='uk'>UK</option>
         </select>
        </div>
       <HashRouter basename={process.env.PUBLIC_URL}>
         <Provider store = {store}>
            <div className='wrapper__description'>
                <Redirect from="/" to="/start" />
                <Route path='/start'  render = { () => {
                  return    <React.Suspense>
                    <div className='wrapper__button'>
                    <Translate content='title' component='span' className='wrapper__button_content' />
                    <Button />
                   </div>
                   </React.Suspense>
               }} />
               <Route path='/authorize'   render = { () => { return    <React.Suspense>
                   <Authorize onLangChange={this.onLangChange} /> </React.Suspense>   }} />
               <Route path='/content'  render = { () => {  return    <React.Suspense>
                   <HeaderContainer  onLangChange={this.onLangChange}/>
                   <div className="content__wrapper">
                   <TodoListContainer onLangChange={this.onLangChange} />
                   <div className='sidebar__wrapper'>
                   <Sidebar onLangChange={this.onLangChange}  />
                   </div>
                   </div>
              {/*  <Footer />*/}
                    </React.Suspense>
                    }} />
            </div>
        </Provider>
      </HashRouter>
    </div>
    );
 }
}

export default App;
