'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var antd = require('antd');
var styled = require('styled-components');
var icons = require('@ant-design/icons');
var omit = require('omit.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var omit__default = /*#__PURE__*/_interopDefaultLegacy(omit);

var Switch = function Switch() {
  return /*#__PURE__*/React__default['default'].createElement("h1", null, "Switch");
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var DEFAULTCOLLAYOUT = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 8,
  xxl: 6
};
var DEFAULTGULTER = [{
  xs: 0,
  sm: 0,
  md: 24,
  lg: 24,
  xl: 24,
  xxl: 24
}, {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 24,
  xxl: 24
}];
var typeName = {
  today: '今日',
  yesterday: '昨日',
  week: '7天',
  halfMonth: '15天',
  month: '30天',
  quarter: '90天',
  year: '一年'
};

// 利用闭包自执行创建私有变量
var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: ", ";\n  text-align: right;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var DIV = styled__default['default'].div(_templateObject(), function (_ref) {
  var titleWidth = _ref.titleWidth,
      title = _ref.title;
  return title ? "calc(100% - ".concat(titleWidth, "px)") : "100%";
});
var SPAN = styled__default['default'].span(_templateObject2(), function (_ref2) {
  var titleWidth = _ref2.titleWidth;
  return "".concat(titleWidth, "px");
});

var QueryHeader = function QueryHeader(props) {
  var _props$Items = props.Items,
      Items = _props$Items === void 0 ? [] : _props$Items,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? DEFAULTGULTER : _props$gutter;
  return /*#__PURE__*/React__default['default'].createElement(antd.Row, {
    gutter: gutter
  }, Items.map(function (item) {
    var _item$name = item.name,
        name = _item$name === void 0 ? generateId("queryNoName") : _item$name,
        _item$title = item.title,
        title = _item$title === void 0 ? null : _item$title,
        _item$span = item.span,
        span = _item$span === void 0 ? DEFAULTCOLLAYOUT : _item$span,
        children = item.children,
        _item$titleWidth = item.titleWidth,
        titleWidth = _item$titleWidth === void 0 ? 100 : _item$titleWidth;
    return /*#__PURE__*/React__default['default'].createElement(antd.Col, _extends({
      key: name
    }, span), title && /*#__PURE__*/React__default['default'].createElement(SPAN, {
      titleWidth: titleWidth
    }, title, "\uFF1A"), /*#__PURE__*/React__default['default'].createElement(DIV, {
      titleWidth: titleWidth,
      title: title
    }, children));
  }));
};

var QueryHeader$1 = /*#__PURE__*/React.memo(QueryHeader);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".index_sec-table__3qMQl .ant-pagination-total-text {\n  position: absolute;\n  left: 0;\n}\n.index_sec-table__3qMQl .ant-table-thead > tr > th {\n  background: #f2f2f2;\n}\n";
var styles = {"sec-table":"index_sec-table__3qMQl"};
styleInject(css_248z);

var initstate = {
  page: 1,
  size: 10,
  secId: null
};

var calcPage = function calcPage(payload) {
  var page = payload.page,
      size = payload.size,
      delNum = payload.delNum,
      total = payload.total;
  var pageNo = page;
  var restNum = total - size * (page - 1);
  var pageNoDiff = Math.floor((delNum - restNum) / size) + 1;

  if (pageNoDiff < 0) {
    pageNoDiff = 0;
  }

  pageNo -= pageNoDiff;

  if (pageNo < 1) {
    pageNo = 1;
  }

  return pageNo;
};

var reducer = function reducer(state, action) {
  var _ref = (action === null || action === void 0 ? void 0 : action.payload) || {},
      page = _ref.page,
      size = _ref.size,
      _ref$delNum = _ref.delNum,
      delNum = _ref$delNum === void 0 ? 1 : _ref$delNum,
      total = _ref.total;

  switch (action.type) {
    case "add":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        page: 1,
        secId: generateId("add")
      });

    case "edit":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        secId: generateId("edit")
      });

    case "del":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        page: calcPage(_objectSpread2(_objectSpread2({}, state), {}, {
          delNum: delNum,
          total: total
        })),
        secId: generateId("del")
      });

    case "search":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        page: 1,
        secId: generateId("search")
      });

    case "pageChange":
      return {
        page: page,
        size: size,
        secId: generateId("pageChange")
      };

    default:
      return state;
  }
};

var Sectabel = function Sectabel(props) {
  var getList = props.getList,
      refresh = props.refresh,
      total = props.total,
      queryItem = props.queryItem,
      children = props.children,
      extraProps = props.extraProps,
      _props$mountTo = props.mountTo,
      mountTo = _props$mountTo === void 0 ? true : _props$mountTo,
      _props$pagination = props.pagination,
      pagination = _props$pagination === void 0 ? {} : _props$pagination,
      _props$relyOn = props.relyOn,
      relyOn = _props$relyOn === void 0 ? [] : _props$relyOn,
      rest = _objectWithoutProperties(props, ["getList", "refresh", "total", "queryItem", "children", "extraProps", "mountTo", "pagination", "relyOn"]);

  var _useReducer = React.useReducer(reducer, initstate),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var page = state.page,
      size = state.size,
      secId = state.secId;
  React.useEffect(function () {
    if (!refresh) return;
    var type = refresh && typeof refresh === "string" ? refresh : "del";

    if (type === "del") {
      var _refresh$delNum = refresh.delNum,
          delNum = _refresh$delNum === void 0 ? 1 : _refresh$delNum;
      dispatch({
        type: "del",
        payload: {
          delNum: delNum,
          total: total
        }
      });
    } else {
      dispatch({
        type: type
      });
    }
  }, [refresh]);
  React.useEffect(function () {
    if (!secId && !mountTo) return;
    getList(_objectSpread2({
      page: page - 1,
      size: size
    }, extraProps));
  }, [secId].concat(_toConsumableArray(relyOn)));

  var changeHandle = function changeHandle(pageCurrent, pageSize) {
    dispatch({
      type: "pageChange",
      payload: {
        page: pageCurrent,
        size: pageSize
      }
    });
  };

  var paginationProps = function paginationProps() {
    if (!pagination) return false;
    return _objectSpread2({
      current: page,
      total: total,
      pageSize: size,
      showSizeChanger: true,
      showQuickJumper: true,
      showLessItems: true,
      hideOnSinglePage: false,
      onChange: changeHandle,
      onShowSizeChange: changeHandle,
      showTotal: function showTotal(resultNums) {
        return "\u5171 ".concat(resultNums, " \u6761\u8BB0\u5F55 \u7B2C ").concat(page, " / ").concat(Math.ceil(parseInt(resultNums, 10) / parseInt(size, 10)), " \u9875");
      }
    }, pagination);
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles["sec-table"]
  }, queryItem && /*#__PURE__*/React__default['default'].createElement(QueryHeader$1, {
    Items: queryItem
  }), children, /*#__PURE__*/React__default['default'].createElement(antd.Table, _extends({
    rowKey: function rowKey(record) {
      return record.id;
    },
    pagination: paginationProps(),
    expandIconAsCell: false,
    expandIconColumnIndex: -1,
    expandIcon: function expandIcon() {
      return null;
    }
  }, rest)));
};

var index = /*#__PURE__*/React.memo(Sectabel);

var SelectInput = function SelectInput(props) {
  var _options$;

  var _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _onSearch = props.onSearch,
      onChange = props.onChange,
      value = props.value;

  var _useState = React.useState((_options$ = options[0]) === null || _options$ === void 0 ? void 0 : _options$.value),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  var _useMemo = React.useMemo(function () {
    return options.filter(function (item) {
      return item.value === key;
    });
  }, [key]),
      _useMemo2 = _slicedToArray(_useMemo, 1),
      currentVal = _useMemo2[0];

  var _useState3 = React.useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      val = _useState4[0],
      setVal = _useState4[1];

  React.useEffect(function () {
    if (!value) return;
    setVal(value);
  }, [value]);

  var keyChangeHandle = function keyChangeHandle(k) {
    setKey(k);
    if (!val) return;
    setVal(undefined);

    _onSearch(key, undefined);
  };

  var changeHandle = function changeHandle(e) {
    var changeValue = e.target.value;
    setVal(changeValue);

    if (onChange) {
      onChange(key, changeValue);
    }
  };

  var AddonBefore = function AddonBefore() {
    return /*#__PURE__*/React__default['default'].createElement(antd.Select, {
      options: options,
      defaultValue: key,
      onChange: keyChangeHandle
    });
  };

  return /*#__PURE__*/React__default['default'].createElement(antd.Input.Search, {
    value: val,
    onChange: changeHandle,
    style: {
      width: "100%"
    },
    addonBefore: /*#__PURE__*/React__default['default'].createElement(AddonBefore, null),
    placeholder: currentVal === null || currentVal === void 0 ? void 0 : currentVal.placeholder,
    onSearch: function onSearch(v) {
      return _onSearch(key, v);
    }
  });
};

var TooltipInput = function TooltipInput(_ref) {
  var tooltip = _ref.tooltip,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "input" : _ref$type,
      props = _objectWithoutProperties(_ref, ["tooltip", "type"]);

  var SubInput = function SubInput() {
    switch (type) {
      case "select":
        return /*#__PURE__*/React__default['default'].createElement(antd.Select, props);

      case "switch":
        return /*#__PURE__*/React__default['default'].createElement(antd.Switch, _extends({}, props, {
          checkedChildren: "\u5F00\u542F",
          unCheckedChildren: "\u5173\u95ED"
        }));

      case "textArea":
        return /*#__PURE__*/React__default['default'].createElement(antd.Input.TextArea, props);

      default:
        return /*#__PURE__*/React__default['default'].createElement(antd.Input, _extends({}, props, {
          type: type
        }));
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, {
    title: tooltip
  }, SubInput());
};

var index$1 = /*#__PURE__*/React.memo(TooltipInput);

var css_248z$1 = ".index_addBtn-addBtn__1Kidk {\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  color: #1890ff;\n  border: 1px dashed #d9d9d9;\n  margin-bottom: 24px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.index_addBtn-addBtn__1Kidk:hover {\n  cursor: pointer;\n  border: 1px dashed #1890ff;\n}\n.index_addBtn-drawer__HT-zS {\n  position: absolute;\n  width: 100% !important;\n  top: 34px;\n  z-index: 8 !important;\n}\n.index_addBtn-drawer__HT-zS .ant-drawer-content-wrapper {\n  width: 100% !important;\n  height: auto !important;\n}\n.index_addBtn-drawer__HT-zS .ant-drawer-body {\n  word-wrap: break-word;\n  border: 1px dashed #1890ff;\n}\n.index_addBtn-drawer__HT-zS .ant-drawer-body:hover {\n  border: 1px dashed #1890ff;\n}\n";
var styles$1 = {"addBtn-addBtn":"index_addBtn-addBtn__1Kidk","addBtn-drawer":"index_addBtn-drawer__HT-zS"};
styleInject(css_248z$1);

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var DIV$1 = styled__default['default'].div(_templateObject$1());

var AddButton = function AddButton(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? "添加" : _props$title,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? false : _props$visible,
      _props$addHandle = props.addHandle,
      addHandle = _props$addHandle === void 0 ? function () {} : _props$addHandle,
      children = props.children,
      btStyles = props.btStyles;
  return /*#__PURE__*/React__default['default'].createElement(DIV$1, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$1["addBtn-addBtn"],
    style: btStyles,
    onClick: addHandle
  }, /*#__PURE__*/React__default['default'].createElement(icons.PlusOutlined, null), /*#__PURE__*/React__default['default'].createElement("span", null, "\xA0", title)), visible && /*#__PURE__*/React__default['default'].createElement(antd.Drawer, {
    className: styles$1["addBtn-drawer"],
    visible: true,
    placement: "top",
    closable: false,
    mask: false,
    destroyOnClose: true,
    getContainer: false
  }, children));
};

/**
 * @param {btn} {()=>ReactNode} 弹窗按钮
 * @param {children} modal内容
 * @param {okText} string  确定按钮内容
 * @param {cancelText} string 取消按钮内容
 * @param {Footer} {props=>ReactNode} 底部内容
 * @param {Content} {props=>ReactNode} Modal内容
 */

var FormModal = function FormModal(_ref) {
  var btn = _ref.btn,
      Content = _ref.Content,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? "取消" : _ref$cancelText,
      _ref$okText = _ref.okText,
      okText = _ref$okText === void 0 ? "确定" : _ref$okText,
      _ref$Footer = _ref.Footer,
      Footer = _ref$Footer === void 0 ? null : _ref$Footer,
      submitHandle = _ref.submitHandle,
      cancelHandle = _ref.cancelHandle,
      editHandle = _ref.editHandle,
      _ref$isForm = _ref.isForm,
      isForm = _ref$isForm === void 0 ? true : _ref$isForm,
      _ref$autoClose = _ref.autoClose,
      autoClose = _ref$autoClose === void 0 ? true : _ref$autoClose,
      _ref$initialValues = _ref.initialValues,
      initialValues = _ref$initialValues === void 0 ? null : _ref$initialValues,
      _ref$autoVisible = _ref.autoVisible,
      autoVisible = _ref$autoVisible === void 0 ? false : _ref$autoVisible,
      rest = _objectWithoutProperties(_ref, ["btn", "Content", "cancelText", "okText", "Footer", "submitHandle", "cancelHandle", "editHandle", "isForm", "autoClose", "initialValues", "autoVisible"]);

  var _Form$useForm = antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = React.useState(autoVisible),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      extraProps = _useState4[0],
      setExtraProps = _useState4[1];

  var _useState5 = React.useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      btnProps = _useState6[0],
      setBtnProps = _useState6[1];

  var toExtraProps = {
    setExtraProps: setExtraProps,
    setBtnProps: setBtnProps
  };

  var onOk = function onOk() {
    if (isForm) {
      form.validateFields().then(function (values) {
        submitHandle(_objectSpread2(_objectSpread2({}, values), extraProps)).then(function () {
          if (!autoClose) return;
          form.resetFields();
          setVisible(false);
        });
      });
      return;
    }

    submitHandle(_objectSpread2({}, extraProps));
    if (!autoClose) return;
    setVisible(false);
  };

  var onCancel = function onCancel() {
    form.resetFields();
    setVisible(false);
    if (!cancelHandle) return;
    cancelHandle();
  };

  var ModalButton = function ModalButton() {
    if (btn) {
      return btn();
    }

    return /*#__PURE__*/React__default['default'].createElement(antd.Button, {
      type: "primary"
    }, "\u6DFB \u52A0");
  };

  var modalConfig = {
    okButtonProps: btnProps || {},
    onCancel: onCancel,
    onOk: onOk,
    okText: okText,
    cancelText: cancelText
  };

  var combineBtnProps = _objectSpread2(_objectSpread2({}, btnProps), {}, {
    style: _objectSpread2({
      marginRight: 16
    }, btnProps === null || btnProps === void 0 ? void 0 : btnProps.style)
  });

  if (!Footer) {
    modalConfig.footer = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(antd.Button, _extends({
      type: "primary",
      onClick: onOk
    }, combineBtnProps), "\u786E\u5B9A"), /*#__PURE__*/React__default['default'].createElement(antd.Button, {
      onClick: onCancel,
      style: {
        margin: 0
      }
    }, "\u53D6\u6D88"));
  } else {
    modalConfig.footer = /*#__PURE__*/React__default['default'].createElement(Footer, _extends({
      form: form
    }, omit__default['default'](modalConfig, ["footer"])));
  }

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    onClick: function onClick() {
      setVisible(true);

      if (initialValues) {
        form.setFieldsValue(initialValues);
        return;
      }

      if (editHandle) {
        editHandle();
      }
    }
  }, /*#__PURE__*/React__default['default'].createElement(ModalButton, null)), visible && /*#__PURE__*/React__default['default'].createElement(antd.Modal, _extends({
    centered: true,
    closable: false,
    maskClosable: false,
    getContainer: function getContainer() {
      return document.getElementById("modalRoot");
    },
    visible: true
  }, rest, modalConfig), /*#__PURE__*/React__default['default'].createElement(Content, _extends({
    form: form
  }, toExtraProps))));
};

var css_248z$2 = ".index_radioDate__1U7hR {\n  display: inline-block;\n  margin-right: 24px;\n  margin-left: 24px;\n}\n.index_radioDate__1U7hR a {\n  padding: 4px 14px;\n  color: rgba(0, 0, 0, 0.85) !important;\n  border-color: rgba(0, 0, 0, 0.94) !important;\n  border-top: 1px solid rgba(0, 0, 0, 0.94);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.94);\n  border-right: 1px solid rgba(0, 0, 0, 0.94);\n}\n.index_radioDate__1U7hR a:hover {\n  color: #1890ff !important;\n}\n.index_radioDate__1U7hR a.index_currentDate__1qMao {\n  color: #fff !important;\n  background-color: #1890ff !important;\n  border-color: #1890ff !important;\n}\n.index_radioDate__1U7hR .index_aStart__2Ztxl {\n  border-left: 1px solid rgba(0, 0, 0, 0.94);\n  border-radius: 2px 0 0 2px;\n}\n.index_radioDate__1U7hR .index_aEnd__Mj_RX {\n  border-radius: 0 2px 2px 0;\n}\n@media screen and (max-width: 768px) {\n  .index_radioDate__1U7hR {\n    display: none;\n  }\n}\n";
var styles$2 = {"radioDate":"index_radioDate__1U7hR","currentDate":"index_currentDate__1qMao","aStart":"index_aStart__2Ztxl","aEnd":"index_aEnd__Mj_RX"};
styleInject(css_248z$2);

var eleGenerator = function eleGenerator(items) {
  var findKey = function findKey(value) {
    var compare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
      return a === b;
    };
    return Object.keys(typeName).find(function (k) {
      return compare(typeName[k], value);
    });
  };

  var eles = [];

  for (var _i = 0, _Object$keys = Object.keys(items); _i < _Object$keys.length; _i++) {
    var item = _Object$keys[_i];
    var itemKey = findKey(item);
    eles.push( /*#__PURE__*/React__default['default'].createElement(antd.Radio.Button, {
      value: itemKey,
      key: itemKey
    }, item));
  }

  return eles;
};

var RadioDateBtns = function RadioDateBtns(props) {
  var rangesItem = props.rangesItem,
      selectDate = props.selectDate;
      props.rangePickerValue;
      var flag = props.flag;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$2.radioDate
  }, /*#__PURE__*/React__default['default'].createElement(antd.Radio.Group, {
    size: "small",
    value: flag,
    onChange: function onChange(e) {
      return selectDate(e.target.value);
    }
  }, eleGenerator(rangesItem)));
};

exports.AddButton = AddButton;
exports.FormModal = FormModal;
exports.QueryHeader = QueryHeader$1;
exports.RangePicker = RadioDateBtns;
exports.SecTable = index;
exports.SelectInput = SelectInput;
exports.Switch = Switch;
exports.TooltipInput = index$1;
