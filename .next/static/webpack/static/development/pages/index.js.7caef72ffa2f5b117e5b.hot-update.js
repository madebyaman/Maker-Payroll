webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AddProject.js":
/*!**********************************!*\
  !*** ./components/AddProject.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./components/Context.js");
var _jsxFileName = "/Users/Aman/Documents/Development/maker-payroll/components/AddProject.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var AddProject =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddProject, _React$Component);

  function AddProject(props) {
    var _this;

    _classCallCheck(this, AddProject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddProject).call(this, props));
    _this.nameRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.rateRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.dateRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.hourRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(AddProject, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_1__["Consumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          action: "/",
          onSubmit: _this2.createProject,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, "projectName", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "projectName",
          ref: _this2.nameRef,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, "hourlyRate", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "number",
          name: "hourlyRate",
          ref: _this2.rateRef,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, "deadlineDate", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "date",
          name: "deadlineDate",
          ref: _this2.dateRef,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "hoursToComplete", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "number",
          name: "hoursToComplete",
          ref: _this2.hourRef,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, "Submit"));
      });
    }
  }]);

  return AddProject;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddProject);

/***/ })

})
//# sourceMappingURL=index.js.7caef72ffa2f5b117e5b.hot-update.js.map