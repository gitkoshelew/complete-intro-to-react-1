webpackHotUpdate(3,{

/***/ "./js/ClientApp.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { BrowserRouter } from 'react-router-dom';
// import App from './App';


var ce = _react2.default.createElement;
var MT = function MT(props) {
    return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

var MC = function MC() {
    return ce('div', { id: 'wrapper' }, ce(MT, { title: '1', color: 'yellow' }), ce(MT, { title: '2', color: 'GreenYellow' }), ce(MT, { title: '3', color: 'yellowGreen' }), ce(MT, { title: '4', color: 'peru' }));
};

(0, _reactDom.render)(ce(MC), document.getElementById('app'));

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

;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ce, 'ce', 'C:/Users/Dzmitry_Koshaleu/Desktop/reactgit/complete-intro-to-react-1/js/ClientApp.jsx');

    __REACT_HOT_LOADER__.register(MT, 'MT', 'C:/Users/Dzmitry_Koshaleu/Desktop/reactgit/complete-intro-to-react-1/js/ClientApp.jsx');

    __REACT_HOT_LOADER__.register(MC, 'MC', 'C:/Users/Dzmitry_Koshaleu/Desktop/reactgit/complete-intro-to-react-1/js/ClientApp.jsx');
}();

;

/***/ })

})