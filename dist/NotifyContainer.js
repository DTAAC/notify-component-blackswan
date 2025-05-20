"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _NotifyManager = _interopRequireDefault(require("./NotifyManager"));
var _Portal = _interopRequireDefault(require("./Portal"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const NotifyContainer = () => {
  const [childrenMap, setChildrenMap] = (0, _react.useState)({});

  // Метод для добавления уведомления
  const addItem = (0, _react.useCallback)((id, notify) => {
    setChildrenMap(prev => ({
      ...prev,
      [id]: notify
    }));
  }, []);

  // Метод для удаления уведомления с анимацией
  const removeItem = (0, _react.useCallback)(id => {
    // Этап 1: Обновляем уведомление, чтобы запустить анимацию скрытия
    setChildrenMap(prev => {
      const newChildren = {
        ...prev
      };
      if (newChildren[id]) {
        //@ts-ignore
        newChildren[id] = /*#__PURE__*/_react.default.cloneElement(newChildren[id], {
          needRemove: true
        });
      }
      return newChildren;
    });

    // Этап 2: После задержки удаляем уведомление окончательно
    setTimeout(() => {
      setChildrenMap(prev => {
        const newChildren = {
          ...prev
        };
        delete newChildren[id];
        return newChildren;
      });
    }, 300); // время задержки должно совпадать с длительностью анимации
  }, []);

  // Метод для обновления уведомления (например, процент выполнения)
  const updateItem = (0, _react.useCallback)((id, percent) => {
    setChildrenMap(prev => {
      if (prev[id]) {
        //@ts-ignore
        return {
          ...prev,
          [id]: /*#__PURE__*/_react.default.cloneElement(prev[id], {
            percent
          })
        };
      }
      return prev;
    });
  }, []);

  // Метод для проверки наличия уведомления
  const hasItem = (0, _react.useCallback)(id => {
    return !!childrenMap[id];
  }, [childrenMap]);

  // Привязываем методы к NotifyManager
  (0, _react.useEffect)(() => {
    _NotifyManager.default.bind({
      addItem,
      removeItem,
      updateItem,
      hasItem
    });
  }, [addItem, removeItem, updateItem, hasItem]);

  //@ts-ignore
  const notifies = Object.values(childrenMap);
  if (notifies.length === 0) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Portal.default, {
    id: "notify",
    children: notifies.map(item => {
      if (item?.props?.id) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
          children: item
        }, item.props.id);
      }
      return null;
    })
  });
};
var _default = exports.default = NotifyContainer;