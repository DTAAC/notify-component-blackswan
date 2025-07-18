"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingNotify = void 0;
var _react = _interopRequireDefault(require("react"));
var _NotifyManager = _interopRequireDefault(require("../NotifyManager"));
var _useRendered = _interopRequireDefault(require("./hooks/useRendered"));
var _getNotifyStyle = _interopRequireDefault(require("./getNotifyStyle"));
var _styles = require("../styles");
var _styles2 = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LoadingNotify = _ref => {
  let {
    id,
    text,
    onClick,
    needRemove,
    percent
  } = _ref;
  const rendered = (0, _useRendered.default)();
  const style = (0, _getNotifyStyle.default)(rendered, needRemove);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.NotifyItem, {
    style: style,
    onClick: onClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_styles2.Preload, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          width: percent && percent > 0 ? `${percent}%` : '0%'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles2.Content, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
        className: `load`,
        width: "80",
        height: "80",
        viewBox: "0 0 80 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M40 11.6665C24.352 11.6665 11.6667 24.3518 11.6667 39.9998C11.6667 53.7015 21.3974 65.1415 34.328 67.7663C37.0342 68.3157 38.7828 70.9548 38.2334 73.661C37.6841 76.3673 35.0449 78.1158 32.3387 77.5665C14.8394 74.0143 1.66669 58.551 1.66669 39.9998C1.66669 18.8289 18.8291 1.6665 40 1.6665C61.1709 1.6665 78.3334 18.8289 78.3334 39.9998C78.3334 57.8685 66.112 72.8701 49.5797 77.1252C46.9054 77.8135 44.1795 76.2036 43.4912 73.5293C42.8029 70.855 44.4128 68.1291 47.0871 67.4408C59.3085 64.2953 68.3334 53.1952 68.3334 39.9998C68.3334 24.3518 55.6481 11.6665 40 11.6665Z",
          fill: "url(#paint0_linear)"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("defs", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("linearGradient", {
            id: "paint0_linear",
            x1: "18.9688",
            y1: "66.6486",
            x2: "44.7472",
            y2: "77.6674",
            gradientUnits: "userSpaceOnUse",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
              stopColor: "#4378FF"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("stop", {
              offset: "1",
              stopColor: "#4378FF",
              stopOpacity: "0.1"
            })]
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
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
    })]
  });
};
exports.LoadingNotify = LoadingNotify;