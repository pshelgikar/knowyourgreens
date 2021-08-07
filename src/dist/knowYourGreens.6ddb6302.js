// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/Homepage.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Homepage;

function Homepage(props) {
  var isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pageContents"
    }, /*#__PURE__*/React.createElement("h1", null, "Welcome!"), /*#__PURE__*/React.createElement("h1", null, "Know Your Greens"), /*#__PURE__*/React.createElement("div", null, "Care instructions for your green housemates."));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "pageContents"
  }, /*#__PURE__*/React.createElement("h1", null, "Know Your Greens"), /*#__PURE__*/React.createElement("div", null, "Care instructions for your green housemates."));
}
},{}],"components/SearchBar.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SearchBar;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SearchBar() {
  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      plant = _React$useState2[0],
      searchPlant = _React$useState2[1];

  var _React$useState3 = React.useState(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isPlant = _React$useState4[0],
      setPlant = _React$useState4[1];

  var history = ReactRouterDOM.useHistory();

  var handleInput = function handleInput(evt) {
    searchPlant(evt.target.value);
  };

  React.useEffect(function () {});

  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    fetch('/plant/<plantname>', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plantname': plant
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data == null) {
        console.log(data);
        setPlant(false);
      } else {
        setPlant(true);
        history.push("/plants/".concat(plant));
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "pageContents"
  }, !isPlant && /*#__PURE__*/React.createElement("div", null, "Hmmm this doesn't exist in our database. Please try with another plant name."), /*#__PURE__*/React.createElement("div", null, "Worried about your plants? Not sure how to care for your new green housemates?"), /*#__PURE__*/React.createElement("div", null, "Enter a name to find out how to take care of your plants!"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Plant Name",
    type: "text",
    value: plant,
    name: "plant_name",
    onChange: handleInput,
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Search")));
}
},{}],"components/Login.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Login;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Login(props) {
  //change setUser to something else -> convention for useState
  var setUser = props.setUser,
      isValid = props.isValid;

  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      username = _React$useState2[0],
      setUsername = _React$useState2[1];

  var _React$useState3 = React.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      password = _React$useState4[0],
      setPassword = _React$useState4[1];

  var handleUsername = function handleUsername(evt) {
    setUsername(evt.target.value);
  };

  var handlePassword = function handlePassword(evt) {
    setPassword(evt.target.value);
  };

  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    setUser(username, password);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "pageContents"
  }, !isValid && /*#__PURE__*/React.createElement("div", null, "Uh oh, login credentials don't look right.."), /*#__PURE__*/React.createElement("h1", null, "Log In"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, "Enter Username", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "username",
    required: true,
    onChange: handleUsername
  }), "Password", /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password",
    required: true,
    onChange: handlePassword
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit"
  })));
}
},{}],"components/SignUp.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SignUp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SignUp(props) {
  var setUser = props.setUser,
      isNewUser = props.isNewUser;
  console.log(isNewUser);
  var history = ReactRouterDOM.useHistory();

  var _React$useState = React.useState({
    username: "",
    password: "",
    name: ""
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var handleChange = function handleChange(evt) {
    var _evt$target = evt.target,
        id = _evt$target.id,
        value = _evt$target.value;
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, id, value));
    });
  };

  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    setUser(state.username, state.password, state.name);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "pageContents"
  }, !isNewUser && /*#__PURE__*/React.createElement("div", null, "User exists, please pick another username!"), /*#__PURE__*/React.createElement("h1", null, "Sign Up"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, "First Name", /*#__PURE__*/React.createElement("input", {
    type: "name",
    id: "name",
    value: state.name,
    required: true,
    onChange: handleChange
  }), "Enter Username", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "username",
    value: state.username,
    required: true,
    onChange: handleChange
  }), "Password", /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    value: state.password,
    required: true,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Sign up!")));
}
},{}],"components/AddToFavorites.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddToFavorites;

function AddToFavorites(props) {
  var isLoggedIn = props.isLoggedIn,
      fav = props.fav,
      onAddToFavorites = props.onAddToFavorites,
      onRemoveFromFavorites = props.onRemoveFromFavorites,
      name = props.name;

  var onAddFavs = function onAddFavs(evt) {
    evt.preventDefault();
    onAddToFavorites(name);
  };

  var onRemoveFavs = function onRemoveFavs(evt) {
    evt.preventDefault();
    onRemoveFromFavorites(name);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "pageContents"
  }, isLoggedIn && (fav ? /*#__PURE__*/React.createElement("button", {
    onClick: onRemoveFavs
  }, "Remove from Favorites") : /*#__PURE__*/React.createElement("button", {
    onClick: onAddFavs
  }, "Add to Favorites")));
}
},{}],"components/PlantCard.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PlantCard;

var _AddToFavorites = _interopRequireDefault(require("./AddToFavorites"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PlantCard(props) {
  var plant_id = props.plant_id,
      name = props.name,
      img = props.img,
      isLoggedIn = props.isLoggedIn,
      favorites = props.favorites,
      onAddToFavorites = props.onAddToFavorites,
      onRemoveFromFavorites = props.onRemoveFromFavorites;
  var fav = false;

  var _iterator = _createForOfIteratorHelper(favorites),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var plant = _step.value;

      if (plant['name'] == name) {
        fav = true;
      }
    } //look into "includes"/verify keys

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return /*#__PURE__*/React.createElement("div", {
    key: plant_id,
    className: "plant-card"
  }, /*#__PURE__*/React.createElement("h2", null, name), /*#__PURE__*/React.createElement("img", {
    src: img
  }), /*#__PURE__*/React.createElement(_AddToFavorites.default, {
    isLoggedIn: isLoggedIn,
    fav: fav,
    name: name,
    onAddToFavorites: onAddToFavorites,
    onRemoveFromFavorites: onRemoveFromFavorites
  }));
}
},{"./AddToFavorites":"components/AddToFavorites.jsx"}],"components/NavigateToPlant.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavigateToPlant;

function NavigateToPlant(props) {
  var plant = props.plant;
  var history = ReactRouterDOM.useHistory();

  var onShowDetails = function onShowDetails() {
    history.push("/plants/".concat(plant.name));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "pageContents"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onShowDetails
  }, "View Details"));
}
},{}],"components/Favorites.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Favorites;

var _PlantCard = _interopRequireDefault(require("./PlantCard"));

var _NavigateToPlant = _interopRequireDefault(require("./NavigateToPlant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Favorites(props) {
  var isLoggedIn = props.isLoggedIn,
      favorites = props.favorites,
      onAddToFavorites = props.onAddToFavorites,
      onRemoveFromFavorites = props.onRemoveFromFavorites;
  var favoritePlants = [];
  var isFav = false;
  var favCard = null;

  for (var fav in favorites) {
    if (!favorites) {
      isFav = false;
    } else {
      isFav = true;

      for (var _i = 0, _Object$entries = Object.entries(favorites[fav]); _i < _Object$entries.length; _i++) {
        var item = _Object$entries[_i];
        favCard = /*#__PURE__*/React.createElement("div", {
          className: "plant-card",
          key: favorites[fav]['plant_id']
        }, /*#__PURE__*/React.createElement(_PlantCard.default, {
          name: favorites[fav]['name'],
          img: favorites[fav]['img'],
          favorites: favorites,
          isLoggedIn: isLoggedIn,
          onAddToFavorites: onAddToFavorites,
          onRemoveFromFavorites: onRemoveFromFavorites
        }), /*#__PURE__*/React.createElement(_NavigateToPlant.default, {
          plant: favorites[fav]
        }));
      }

      favoritePlants.push(favCard);
    }
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "pageContents"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Favorites")), !isFav && /*#__PURE__*/React.createElement("div", null, "This looks a little empty right now, add some plants to your list of favorites!"), /*#__PURE__*/React.createElement("div", null, favoritePlants));
}
},{"./PlantCard":"components/PlantCard.jsx","./NavigateToPlant":"components/NavigateToPlant.jsx"}],"components/Nav.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Nav;

function Nav(props) {
  var isLoggedIn = props.isLoggedIn,
      logUserOut = props.logUserOut;

  function onLogout(evt) {
    evt.preventDefault();
    window.localStorage.removeItem('favPlants');
    logUserOut();
  }

  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
    to: "/"
  }, /*#__PURE__*/React.createElement("li", null, "know your greens")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
    to: "/all-plants"
  }, /*#__PURE__*/React.createElement("li", null, "All Plants")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
    to: "/favorites"
  }, isLoggedIn && /*#__PURE__*/React.createElement("li", null, "My Favorites")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
    to: "/logout",
    onClick: onLogout
  }, isLoggedIn && /*#__PURE__*/React.createElement("li", null, "Logout")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
    to: "/login"
  }, !isLoggedIn && /*#__PURE__*/React.createElement("li", null, "Login")), /*#__PURE__*/React.createElement(ReactRouterDOM.NavLink, {
    to: "/sign-up"
  }, !isLoggedIn && /*#__PURE__*/React.createElement("li", null, "Sign Up"))));
}
},{}],"components/AllPlants.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AllPlants;

var _PlantCard = _interopRequireDefault(require("./PlantCard"));

var _NavigateToPlant = _interopRequireDefault(require("./NavigateToPlant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AllPlants(props) {
  var isLoggedIn = props.isLoggedIn,
      favorites = props.favorites,
      onAddToFavorites = props.onAddToFavorites,
      onRemoveFromFavorites = props.onRemoveFromFavorites;

  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      plants = _React$useState2[0],
      getPlants = _React$useState2[1];

  React.useEffect(function () {
    fetch('/api/all-plants').then(function (response) {
      return response.json();
    }).then(function (data) {
      getPlants(data);
    });
  }, []);
  var plantCards = [];

  for (var _i2 = 0, _Object$values = Object.values(plants); _i2 < _Object$values.length; _i2++) {
    var plant = _Object$values[_i2];
    var plantCard = /*#__PURE__*/React.createElement("div", {
      className: "plant-card",
      key: plant.id
    }, /*#__PURE__*/React.createElement(_PlantCard.default, {
      name: plant.name,
      img: plant.img,
      isLoggedIn: isLoggedIn,
      favorites: favorites,
      onAddToFavorites: onAddToFavorites,
      onRemoveFromFavorites: onRemoveFromFavorites
    }), /*#__PURE__*/React.createElement(_NavigateToPlant.default, {
      plant: plant
    }));
    plantCards.push(plantCard);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "pageContents"
  }, /*#__PURE__*/React.createElement("h1", null, "All Plants"), /*#__PURE__*/React.createElement("div", null, plantCards));
}
},{"./PlantCard":"components/PlantCard.jsx","./NavigateToPlant":"components/NavigateToPlant.jsx"}],"components/VarietalCard.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VarietalCard;

function VarietalCard(props) {
  var name = props.name,
      sunlight = props.sunlight,
      water = props.water,
      humidity = props.humidity,
      toxicity = props.toxicity,
      temperature = props.temperature;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, name), /*#__PURE__*/React.createElement("h2", null, "Sunlight"), /*#__PURE__*/React.createElement("div", null, sunlight), /*#__PURE__*/React.createElement("h2", null, "Water"), /*#__PURE__*/React.createElement("div", null, water), /*#__PURE__*/React.createElement("h2", null, "Humidity"), /*#__PURE__*/React.createElement("div", null, humidity), /*#__PURE__*/React.createElement("h2", null, "Toxicity"), /*#__PURE__*/React.createElement("div", null, toxicity), /*#__PURE__*/React.createElement("h2", null, "Temperature"), /*#__PURE__*/React.createElement("div", null, temperature));
}
},{}],"components/AllVarietals.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AllVarietals;

var _VarietalCard = _interopRequireDefault(require("./VarietalCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AllVarietals() {
  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      parentPlant = _React$useState2[0],
      setParentPlant = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      plants = _React$useState4[0],
      setPlants = _React$useState4[1];

  var _ReactRouterDOM$usePa = ReactRouterDOM.useParams(),
      plantName = _ReactRouterDOM$usePa.plantName;

  var img = '';
  React.useEffect(function () {
    fetch('/api/results', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plant_name': plantName
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setPlants(data);
    });
  }, [plantName]);
  React.useEffect(function () {
    fetch("/api/plant/".concat(plantName), {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plantname': plantName
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setParentPlant(data);
    });
  }, [parentPlant]); // if empty return loading state

  var varietalCards = [];
  var varietalCard = null;

  for (var _i2 = 0, _Object$entries = Object.entries(plants); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        varietal = _Object$entries$_i[0],
        care = _Object$entries$_i[1];

    varietalCard = /*#__PURE__*/React.createElement("div", {
      key: varietal
    }, /*#__PURE__*/React.createElement(_VarietalCard.default, {
      name: varietal,
      sunlight: care.Sunlight,
      water: care.Water,
      humidity: care.Humidity,
      toxicity: care.Toxicity,
      temperature: care.Temperature
    }));
    varietalCards.push(varietalCard);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "pageContents"
  }, /*#__PURE__*/React.createElement("h1", null, plantName), /*#__PURE__*/React.createElement("img", {
    src: parentPlant
  }), /*#__PURE__*/React.createElement("div", null, varietalCards));
}
},{"./VarietalCard":"components/VarietalCard.jsx"}],"knowYourGreens.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _Homepage = _interopRequireDefault(require("./components/Homepage"));

var _SearchBar = _interopRequireDefault(require("./components/SearchBar"));

var _Login = _interopRequireDefault(require("./components/Login"));

var _SignUp = _interopRequireDefault(require("./components/SignUp"));

var _Favorites = _interopRequireDefault(require("./components/Favorites"));

var _Nav = _interopRequireDefault(require("./components/Nav"));

var _AllPlants = _interopRequireDefault(require("./components/AllPlants"));

var _AllVarietals = _interopRequireDefault(require("./components/AllVarietals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
  //const [searchTerm, setSearchTerm] = React.useState({});
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      user = _React$useState2[0],
      setUser = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isValid = _React$useState4[0],
      setValid = _React$useState4[1];

  var _React$useState5 = React.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isNewUser = _React$useState6[0],
      setNewUser = _React$useState6[1];

  var history = ReactRouterDOM.useHistory();

  var _React$useState7 = React.useState([]),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      favorites = _React$useState8[0],
      setFavorites = _React$useState8[1];

  var _ReactRouterDOM$useLo = ReactRouterDOM.useLocation(),
      pathname = _ReactRouterDOM$useLo.pathname;

  var onLogin = function onLogin(username, password) {
    fetch('/api/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'password': password
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.isLoggedIn == false) {
        setValid(false);
        setUser(false);
      } else {
        setValid(true);
        setUser(true);
        setFavorites(favorites);
        history.push('/');
      }
    });
  };

  var onLogout = function onLogout() {
    fetch('/api/logout', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function () {
      console.log('Logout successful!');
      setUser(false);
      setValid([]);
      history.push('/');
    });
  };

  var onCreateUser = function onCreateUser(username, password, name) {
    fetch('/api/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'username': username,
        'password': password
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.isUser == true) {
        setNewUser(false);
      } else {
        setNewUser(true);
        setUser(true);
        history.push('/');
      }
    });
  };

  var onAddToFavorites = function onAddToFavorites(name) {
    fetch('/api/add-favorites', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plant': name
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setFavorites(function (favs) {
        return [].concat(_toConsumableArray(favs), [data]);
      });
    });
  };

  var onRemoveFromFavorites = function onRemoveFromFavorites(name) {
    var updatedFavorites = favorites.filter(function (fav) {
      return fav.name != name;
    }); //select only where the condition is true

    setFavorites(updatedFavorites);
    fetch('/api/remove-favorite', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'plant': name
      }) //.catch()

    });
  };

  React.useEffect(function () {
    if (user) {
      fetch('/api/show-favorites', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        setFavorites(data);
      });
    }
  }, [user]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_Nav.default, {
    isLoggedIn: user,
    logUserOut: onLogout
  }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/React.createElement(_Homepage.default, {
    isLoggedIn: user
  }), /*#__PURE__*/React.createElement(_SearchBar.default, null)), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    exact: true,
    path: "/all-plants"
  }, /*#__PURE__*/React.createElement(_AllPlants.default, {
    isLoggedIn: user,
    favorites: favorites,
    onAddToFavorites: onAddToFavorites,
    onRemoveFromFavorites: onRemoveFromFavorites
  })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    exact: true,
    path: "/plants/:plantName"
  }, /*#__PURE__*/React.createElement(_AllVarietals.default, null)), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    exact: true,
    path: "/sign-up"
  }, /*#__PURE__*/React.createElement(_SignUp.default, {
    setUser: onCreateUser,
    isNewUser: isNewUser
  })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    exact: true,
    path: "/login"
  }, /*#__PURE__*/React.createElement(_Login.default, {
    setUser: onLogin,
    isValid: isValid
  })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    exact: true,
    path: "/favorites"
  }, user ? /*#__PURE__*/React.createElement(_Favorites.default, {
    isLoggedIn: user,
    favorites: favorites,
    onAddToFavorites: onAddToFavorites,
    onRemoveFromFavorites: onRemoveFromFavorites
  }) : /*#__PURE__*/React.createElement(ReactRouterDOM.Redirect, {
    to: "/login"
  })), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    exact: true,
    path: "/logout"
  }, /*#__PURE__*/React.createElement(_Homepage.default, {
    isLoggedIn: user
  }))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(ReactRouterDOM.BrowserRouter, null, /*#__PURE__*/React.createElement(App, null)), document.querySelector('#root'));
},{"./components/Homepage":"components/Homepage.jsx","./components/SearchBar":"components/SearchBar.jsx","./components/Login":"components/Login.jsx","./components/SignUp":"components/SignUp.jsx","./components/Favorites":"components/Favorites.jsx","./components/Nav":"components/Nav.jsx","./components/AllPlants":"components/AllPlants.jsx","./components/AllVarietals":"components/AllVarietals.jsx"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57748" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","knowYourGreens.jsx"], null)
//# sourceMappingURL=/knowYourGreens.6ddb6302.js.map