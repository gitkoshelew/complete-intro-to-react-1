// @flow

import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';


const ce = React.createElement
//const MT = props => ce('div', null,  ce('h1', { style: { color: props.color } }, props.title));


// const MT = function(props){
//     return ce('div', null,
//     ce('h1', { style: { color: props.color } }, props.title)
//     )
// }

// const MT = function(props){
//     const style = {color: props.color}
//     return ( <div>
//         <h1 style = {style}>{props.title.toUpperCase()}</h1>
//     </div>)
// }

// const MT = function(props){  
//   return ( <div>      
//       React.createElement('h1', { style = { color: props.color } }, props.title)
//   </div>)
// }

const MT = function(props){  
  return ( <div>
      <h1 style = { {color: props.color} }>{props.title.toUpperCase()}</h1>
      React.createElement('h1', { style = { color: props.color } }, props.title)
  </div>)
}
    
// const MC = function(){
//     return ce('div', {id: 'wrapper'},
//     ce(MT,{title: '1', color: 'yellow'}),
//     ce(MT,{title: '2', color: 'GreenYellow'}),
//     ce(MT,{title: '3', color: 'yellowGreen'}),
//     ce(MT,{title: '4', color: 'peru'})
//     )
// }
const MC = function(){
  return (
  <div id="MFC">
      <MT title = "1" color = "yellow"/>
      <MT title = "2" color = "GreenYellow"/>
      <MT title = "3" color = "yellowGreen"/>
      <MT title = "4" color = "green"/>
      <MT title = "5" color = "peru"/>  
  </div>
  );
};
// render(
//     ce(MC),
//     document.getElementById('app')
// )

render(<MC/>,  document.getElementById('app'));


// const renderApp = () => {
//   render(
//     <BrowserRouter key={Math.random()}>
//       <App />
//     </BrowserRouter>,
//     document.getElementById('app')
//   );
// };
// renderApp();

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     renderApp();
//   });
// }