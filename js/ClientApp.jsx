// @flow

import React from 'react';
import { render } from 'react-dom';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search'
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// const App  = () =>{
//   return (
//     <div className='app'>
//       <div className="landing">
//         <h1>svideo</h1>
//         <input type="text" placeholder="Search"/>
//         <a href="#">or Browse All</a>
//       </div>
//     </div>
//   )
// }
const FourOhFour = () => <h1>404</h1>
const App  = () =>(
  <BrowserRouter>    
      <div className='app'>
      <Switch>
          < Route exact path = "/" component = { Landing } /> 
          < Route path = "/search" component = { Search } />
          {/*< Route path = "/about" component = { About } />*/ } 
          < Route  component = { FourOhFour } /> 
          </Switch>       
      </div>
  </BrowserRouter>
)
// const App  = () =>(
//   <HashRouter>
//     <div className='app'>
//     < Route exact path = "/" component = { Landing } /> 
//     < Route path = "/search" component = { Search } />     
//     </div>
//   </HashRouter>
// )
render(<App />, document.getElementById('app'));
