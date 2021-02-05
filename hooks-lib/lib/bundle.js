'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var omit = require('omit.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var omit__default = /*#__PURE__*/_interopDefaultLegacy(omit);

var useDebounce = function useDebounce(fn, delay) {
  var timeout = react.useRef();

  var run = function run(value) {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      fn(value);
    }, delay);
  };

  var cancel = function cancel() {
    clearTimeout(timeout.current);
    timeout = null;
  };

  return [run, cancel];
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var useEleVisible = function useEleVisible(className) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 120;

  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var run = function run() {
    var ele = document.querySelector(".".concat(className));
    if (!(ele !== null && ele !== void 0 && ele.getBoundingClientRect)) return;
    var rect = ele.getBoundingClientRect();

    if (rect.top <= top && visible) {
      setVisible(false);
    }
  };

  return [visible, setVisible, run];
};

function useInterval(callback, delay) {
  var savedCallback = react.useRef();
  react.useEffect(function () {
    savedCallback.current = callback;
  });
  react.useEffect(function () {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }

    return function () {};
  }, [delay]);
}

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var useSearchValue = function useSearchValue(initialValue, refresh) {
  var _useState = react.useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var secId = values.secId;
  react.useEffect(function () {
    if (!secId || !(values !== null && values !== void 0 && values.autoFresh) || !refresh) return;
    refresh();
  }, [secId]);
  var setSearchValue = react.useCallback(function () {
    var searchValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoFresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    setValues(function (prevState) {
      return _objectSpread2(_objectSpread2(_objectSpread2({}, prevState), searchValue), {}, {
        autoFresh: autoFresh,
        secId: generateId('secSearch')
      });
    });
  }, []);
  return [omit__default['default'](values, ['secId', 'autoFresh']), setSearchValue];
};

var useSetState = function useSetState(initialState) {
  var _useState = react.useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var setMergeState = react.useCallback(function (patch) {
    setState(function (prevState) {
      return _objectSpread2(_objectSpread2({}, prevState), typeof patch === "function" ? patch(prevState) : patch);
    });
  }, []);
  return [state, setMergeState];
};

function searchData() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = arguments.length > 1 ? arguments[1] : undefined;
  var value = arguments.length > 2 ? arguments[2] : undefined;
  var newObj = obj;

  if (value || value === false) {
    newObj[name] = value;
  } else {
    delete newObj[name];
  }

  var m = Object.keys(obj).map(function (item) {
    return "".concat(item).concat(obj[item]);
  });
  return m;
}

function useSetVal() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var refresh = arguments.length > 1 ? arguments[1] : undefined;
  var searchValue = react.useRef(initialValue);
  var current = searchValue.current;

  var setSearchValue = function setSearchValue(name, value) {
    searchData(current, name, value);
    refresh("search");
  };

  var changeSearchValue = function changeSearchValue(name, value) {
    searchData(current, name, value);
  };

  return [current, setSearchValue, changeSearchValue];
}

exports.useDebounce = useDebounce;
exports.useEleVisible = useEleVisible;
exports.useInterval = useInterval;
exports.useSearchValue = useSearchValue;
exports.useSetState = useSetState;
exports.useSetVal = useSetVal;
