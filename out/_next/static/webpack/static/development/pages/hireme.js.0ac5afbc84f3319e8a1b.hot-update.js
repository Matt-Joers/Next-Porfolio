webpackHotUpdate("static/development/pages/hireme.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/froedtertdeveloper03/Documents/Dev/Portfolio/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = function (url) {
  console.log(url);
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeError = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      title = _ref.title;
  return __jsx("div", {
    className: "jsx-2010784800" + " " + 'root',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2010784800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "NextPortfolio")), __jsx("header", {
    className: "jsx-2010784800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2010784800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "HOME")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2010784800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "ABOUT")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/hireme",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2010784800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "HIRE ME")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("h1", {
    className: "jsx-2010784800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, title), children, __jsx("footer", {
    className: "jsx-2010784800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\xA9 ", new Date().getFullYear()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2010784800",
    __self: this
  }, ".root{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}header{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding:1em;font-size:1.2rem;background:indigo;font-family:arial;}header a{color:darkgrey;-webkit-text-decoration:none;text-decoration:none;}header a:hover{font-weight:bold;color:lightgrey;}footer{padding:1em;}body{margin:0;font-size:110%;background:#f0f0f0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcm9lZHRlcnRkZXZlbG9wZXIwMy9Eb2N1bWVudHMvRGV2L1BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QnVCLEFBR3NCLEFBTUYsQUFTSSxBQUlFLEFBSUwsQUFHSCxTQUNNLEVBcEJGLENBaUJmLEdBUnVCLEVBSUwsT0FRRyxTQVByQixVQVFBLHNCQVpBLFNBaEJ5QixXQU9NLHdGQU5WLG1DQU9QLFlBQ0ssaUJBQ0Msa0JBQ0EsV0FUSSxPQVV4Qix1RUFUQSIsImZpbGUiOiIvVXNlcnMvZnJvZWR0ZXJ0ZGV2ZWxvcGVyMDMvRG9jdW1lbnRzL0Rldi9Qb3J0Zm9saW8vY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gdXJsID0+IHtcbiAgY29uc29sZS5sb2codXJsKTtcbiAgTlByb2dyZXNzLnN0YXJ0KCk7XG59O1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuXG5leHBvcnQgZGVmYXVsdCAoe2NoaWxkcmVuLCB0aXRsZX0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxuICAgIDxIZWFkPlxuICAgIDx0aXRsZT5OZXh0UG9ydGZvbGlvPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxMaW5rIGhyZWY9Jy8nPjxhPkhPTUU8L2E+PC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz48YT5BQk9VVDwvYT48L0xpbms+XG4gICAgICA8TGluayBocmVmPScvaGlyZW1lJz48YT5ISVJFIE1FPC9hPjwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9Jy9ibG9nJz48L0xpbms+XG4gICAgXG4gICAgPC9oZWFkZXI+XG4gICAgPGgxPnt0aXRsZX08L2gxPlxuICAgIHtjaGlsZHJlbn1cblxuICAgIDxmb290ZXI+JmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9mb290ZXI+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIC5yb290IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgICBoZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IGluZGlnbztcbiAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICAgICAgfVxuICAgICAgaGVhZGVyIGEge1xuICAgICAgICBjb2xvcjogZGFya2dyZXk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIGhlYWRlciBhOmhvdmVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgICB9XG4gICAgICBmb290ZXIge1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDExMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICAgXG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/froedtertdeveloper03/Documents/Dev/Portfolio/components/Layout.js */"));
});

/***/ })

})
//# sourceMappingURL=hireme.js.0ac5afbc84f3319e8a1b.hot-update.js.map