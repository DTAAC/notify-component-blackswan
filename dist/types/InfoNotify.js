"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoNotify = void 0;
var _react = _interopRequireDefault(require("react"));
var _NotifyManager = _interopRequireDefault(require("../NotifyManager"));
var _useRendered = _interopRequireDefault(require("./hooks/useRendered"));
var _getNotifyStyle = _interopRequireDefault(require("./getNotifyStyle"));
var _styles = require("../styles");
var _styles2 = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//@ts-ignore

const InfoNotify = _ref => {
  let {
    id,
    text,
    onClick,
    needRemove
  } = _ref;
  const rendered = (0, _useRendered.default)();
  const style = (0, _getNotifyStyle.default)(rendered, needRemove);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.NotifyItem, {
    style: style,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles2.Content, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
        className: "close",
        onClick: () => _NotifyManager.default.delete(id),
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          width: "24",
          height: "24",
          rx: "12",
          fill: "#EFF2F5"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 13.7828L8.58508 17.3301C8.21986 17.7094 7.6144 17.7152 7.24204 17.3428C6.87955 16.9804 6.87399 16.3944 7.22952 16.0251L10.7742 12.343C10.7708 12.3302 10.7676 12.3174 10.7646 12.3044L7.22172 8.59327C6.86883 8.22362 6.8756 7.63984 7.23697 7.27847C7.61039 6.90506 8.21795 6.9121 8.58261 7.29408L12 10.8738L15.4174 7.29408C15.7821 6.9121 16.3897 6.90506 16.7631 7.27847C17.1244 7.63984 17.1312 8.22362 16.7783 8.59327L13.2354 12.3045C13.2325 12.3174 13.2293 12.3302 13.2258 12.343L16.7705 16.0251C17.126 16.3944 17.1205 16.9804 16.758 17.3428C16.3856 17.7152 15.7802 17.7094 15.415 17.3301L12 13.7828Z",
          fill: "#EF5E70"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text",
        children: text
      })]
    })
  });
};
exports.InfoNotify = InfoNotify;