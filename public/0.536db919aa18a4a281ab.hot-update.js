webpackHotUpdate(0,{

/***/ "./js/Landing.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { setSearchTerm } from './actionCreators';

var Landing = function Landing() {
    return _react2.default.createElement(
        'div',
        { className: 'landing' },
        _react2.default.createElement(
            'h1',
            null,
            'svideo'
        ),
        _react2.default.createElement('input', { type: 'text', placeholder: 'Search' }),
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/search' },
            'or Browse All'
        )
    );
};
//import type { RouterHistory } from 'react-router-dom';
var _default = Landing;
exports.default = _default;
// class Landing extends React.Component {
//   static contextTypes = {
//     history: object
//   };
//   props: {
//     searchTerm: string,
//     handleSearchTermChange: Function,
//     history: RouterHistory
//   };
//   goToSearch = event => {
//     event.preventDefault();
//     this.props.history.push('/search');
//   };
//   render() {
//     return (
//       <div className="landing">
//         <h1>svideo</h1>
//         <form onSubmit={this.goToSearch}>
//           <input
//             onChange={this.props.handleSearchTermChange}
//             value={this.props.searchTerm}
//             type="text"
//             placeholder="Search"
//           />
//         </form>
//         <Link to="/search">or Browse All</Link>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   searchTerm: state.searchTerm
// });

// const mapDispatchToProps = (dispatch: Function) => ({
//   handleSearchTermChange(event) {
//     dispatch(setSearchTerm(event.target.value));
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Landing);

;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Landing, 'Landing', 'C:/Users/Dzmitry_Koshaleu/Desktop/reactgit/complete-intro-to-react-1/js/Landing.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Dzmitry_Koshaleu/Desktop/reactgit/complete-intro-to-react-1/js/Landing.jsx');
}();

;

/***/ })

})