"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Preload = exports.Content = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Preload = exports.Preload = _styledComponents.default.div`
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  position: relative;
  width: 100%;
  padding: 0;
  
  & > div{
    background-color: #2196F3 !important;
    height: 3px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    position: absolute;
    top: 0;
    transition: 1s width;
  }
  
  &:hover{
    opacity: 1;
  }
`;
const Content = exports.Content = _styledComponents.default.div`
  display: flex;
  align-items: center;
  padding: 15px 15px 15px 15px;
`;