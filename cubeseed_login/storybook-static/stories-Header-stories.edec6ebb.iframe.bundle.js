;(self.webpackChunkcubeseed_login = self.webpackChunkcubeseed_login || []).push(
  [
    [758],
    {
      "./node_modules/@babel/runtime/helpers/esm/extends.js": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict"
        function _extends() {
          return (
            (_extends = Object.assign
              ? Object.assign.bind()
              : function (target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i]
                    for (var key in source)
                      Object.prototype.hasOwnProperty.call(source, key) &&
                        (target[key] = source[key])
                  }
                  return target
                }),
            _extends.apply(this, arguments)
          )
        }
        __webpack_require__.d(__webpack_exports__, { Z: () => _extends })
      },
      "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict"
        function _objectWithoutProperties(source, excluded) {
          if (null == source) return {}
          var key,
            i,
            target = (function _objectWithoutPropertiesLoose(source, excluded) {
              if (null == source) return {}
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source)
              for (i = 0; i < sourceKeys.length; i++)
                (key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key])
              return target
            })(source, excluded)
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
            for (i = 0; i < sourceSymbolKeys.length; i++)
              (key = sourceSymbolKeys[i]),
                excluded.indexOf(key) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(source, key) &&
                    (target[key] = source[key]))
          }
          return target
        }
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _objectWithoutProperties,
        })
      },
      "./stories/Header.stories.ts": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict"
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "Example/Header",
          component: __webpack_require__("./stories/Header.tsx").h,
          tags: ["autodocs"],
          parameters: { layout: "fullscreen" },
        }
      },
      "./stories/Button.tsx": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict"
        __webpack_require__.d(__webpack_exports__, { z: () => Button })
        var esm_extends = __webpack_require__(
            "./node_modules/@babel/runtime/helpers/esm/extends.js"
          ),
          objectWithoutProperties = __webpack_require__(
            "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
          ),
          style = __webpack_require__("./node_modules/styled-jsx/style.js"),
          style_default = __webpack_require__.n(style),
          react = __webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js"
          ),
          injectStylesIntoStyleTag = __webpack_require__(
            "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          ),
          injectStylesIntoStyleTag_default = __webpack_require__.n(
            injectStylesIntoStyleTag
          ),
          styleDomAPI = __webpack_require__(
            "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          ),
          styleDomAPI_default = __webpack_require__.n(styleDomAPI),
          insertBySelector = __webpack_require__(
            "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          ),
          insertBySelector_default = __webpack_require__.n(insertBySelector),
          setAttributesWithoutAttributes = __webpack_require__(
            "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          ),
          setAttributesWithoutAttributes_default = __webpack_require__.n(
            setAttributesWithoutAttributes
          ),
          insertStyleElement = __webpack_require__(
            "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          ),
          insertStyleElement_default =
            __webpack_require__.n(insertStyleElement),
          styleTagTransform = __webpack_require__(
            "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          ),
          styleTagTransform_default = __webpack_require__.n(styleTagTransform),
          cjs_js_stories_button = __webpack_require__(
            "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css"
          ),
          options = {}
        ;(options.styleTagTransform = styleTagTransform_default()),
          (options.setAttributes = setAttributesWithoutAttributes_default()),
          (options.insert = insertBySelector_default().bind(null, "head")),
          (options.domAPI = styleDomAPI_default()),
          (options.insertStyleElement = insertStyleElement_default())
        injectStylesIntoStyleTag_default()(cjs_js_stories_button.Z, options)
        cjs_js_stories_button.Z &&
          cjs_js_stories_button.Z.locals &&
          cjs_js_stories_button.Z.locals
        var _excluded = ["primary", "size", "backgroundColor", "label"],
          __jsx = react.createElement,
          Button = function Button(_ref) {
            var _ref$primary = _ref.primary,
              primary = void 0 !== _ref$primary && _ref$primary,
              _ref$size = _ref.size,
              size = void 0 === _ref$size ? "medium" : _ref$size,
              backgroundColor = _ref.backgroundColor,
              label = _ref.label,
              props = (0, objectWithoutProperties.Z)(_ref, _excluded),
              mode = primary
                ? "storybook-button--primary"
                : "storybook-button--secondary"
            return __jsx(
              "button",
              (0, esm_extends.Z)({ type: "button" }, props, {
                className:
                  style_default().dynamic([["2054451296", [backgroundColor]]]) +
                  " " +
                  ((props && null != props.className && props.className) ||
                    [
                      "storybook-button",
                      "storybook-button--".concat(size),
                      mode,
                    ].join(" ") ||
                    ""),
              }),
              label,
              __jsx(
                style_default(),
                { id: "2054451296", dynamic: [backgroundColor] },
                [
                  "button.__jsx-style-dynamic-selector{background-color:".concat(
                    backgroundColor,
                    ";}"
                  ),
                ]
              )
            )
          }
        ;(Button.displayName = "Button"),
          (Button.__docgenInfo = {
            description: "Primary UI component for user interaction",
            methods: [],
            displayName: "Button",
            props: {
              primary: {
                defaultValue: { value: "false", computed: !1 },
                required: !1,
                tsType: { name: "boolean" },
                description:
                  "Is this the principal call to action on the page?",
              },
              size: {
                defaultValue: { value: '"medium"', computed: !1 },
                required: !1,
                tsType: {
                  name: "union",
                  raw: '"small" | "medium" | "large"',
                  elements: [
                    { name: "literal", value: '"small"' },
                    { name: "literal", value: '"medium"' },
                    { name: "literal", value: '"large"' },
                  ],
                },
                description: "How large should the button be?",
              },
              backgroundColor: {
                required: !1,
                tsType: { name: "string" },
                description: "What background color to use",
              },
              label: {
                required: !0,
                tsType: { name: "string" },
                description: "Button contents",
              },
              onClick: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "() => void",
                  signature: { arguments: [], return: { name: "void" } },
                },
                description: "Optional click handler",
              },
            },
          })
        try {
          ;(Button.displayName = "Button"),
            (Button.__docgenInfo = {
              description: "Primary UI component for user interaction",
              displayName: "Button",
              props: {
                primary: {
                  defaultValue: { value: "false" },
                  description:
                    "Is this the principal call to action on the page?",
                  name: "primary",
                  required: !1,
                  type: { name: "boolean" },
                },
                backgroundColor: {
                  defaultValue: null,
                  description: "What background color to use",
                  name: "backgroundColor",
                  required: !1,
                  type: { name: "string" },
                },
                size: {
                  defaultValue: { value: "medium" },
                  description: "How large should the button be?",
                  name: "size",
                  required: !1,
                  type: {
                    name: "enum",
                    value: [
                      { value: '"small"' },
                      { value: '"medium"' },
                      { value: '"large"' },
                    ],
                  },
                },
                label: {
                  defaultValue: null,
                  description: "Button contents",
                  name: "label",
                  required: !0,
                  type: { name: "string" },
                },
                onClick: {
                  defaultValue: null,
                  description: "Optional click handler",
                  name: "onClick",
                  required: !1,
                  type: { name: "(() => void)" },
                },
              },
            }),
            "undefined" != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES["stories/Button.tsx#Button"] = {
                docgenInfo: Button.__docgenInfo,
                name: "Button",
                path: "stories/Button.tsx#Button",
              })
        } catch (__react_docgen_typescript_loader_error) {}
      },
      "./stories/Header.tsx": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict"
        __webpack_require__.d(__webpack_exports__, { h: () => Header })
        var react = __webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js"
          ),
          Button = __webpack_require__("./stories/Button.tsx"),
          injectStylesIntoStyleTag = __webpack_require__(
            "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          ),
          injectStylesIntoStyleTag_default = __webpack_require__.n(
            injectStylesIntoStyleTag
          ),
          styleDomAPI = __webpack_require__(
            "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          ),
          styleDomAPI_default = __webpack_require__.n(styleDomAPI),
          insertBySelector = __webpack_require__(
            "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          ),
          insertBySelector_default = __webpack_require__.n(insertBySelector),
          setAttributesWithoutAttributes = __webpack_require__(
            "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          ),
          setAttributesWithoutAttributes_default = __webpack_require__.n(
            setAttributesWithoutAttributes
          ),
          insertStyleElement = __webpack_require__(
            "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          ),
          insertStyleElement_default =
            __webpack_require__.n(insertStyleElement),
          styleTagTransform = __webpack_require__(
            "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          ),
          styleTagTransform_default = __webpack_require__.n(styleTagTransform),
          header = __webpack_require__(
            "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/header.css"
          ),
          options = {}
        ;(options.styleTagTransform = styleTagTransform_default()),
          (options.setAttributes = setAttributesWithoutAttributes_default()),
          (options.insert = insertBySelector_default().bind(null, "head")),
          (options.domAPI = styleDomAPI_default()),
          (options.insertStyleElement = insertStyleElement_default())
        injectStylesIntoStyleTag_default()(header.Z, options)
        header.Z && header.Z.locals && header.Z.locals
        var __jsx = react.createElement,
          Header = function Header(_ref) {
            var user = _ref.user,
              onLogin = _ref.onLogin,
              onLogout = _ref.onLogout,
              onCreateAccount = _ref.onCreateAccount
            return __jsx(
              "header",
              null,
              __jsx(
                "div",
                { className: "storybook-header" },
                __jsx(
                  "div",
                  null,
                  __jsx(
                    "svg",
                    {
                      width: "32",
                      height: "32",
                      viewBox: "0 0 32 32",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                    __jsx(
                      "g",
                      { fill: "none", fillRule: "evenodd" },
                      __jsx("path", {
                        d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
                        fill: "#FFF",
                      }),
                      __jsx("path", {
                        d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
                        fill: "#555AB9",
                      }),
                      __jsx("path", {
                        d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
                        fill: "#91BAF8",
                      })
                    )
                  ),
                  __jsx("h1", null, "Acme")
                ),
                __jsx(
                  "div",
                  null,
                  user
                    ? __jsx(
                        react.Fragment,
                        null,
                        __jsx(
                          "span",
                          { className: "welcome" },
                          "Welcome, ",
                          __jsx("b", null, user.name),
                          "!"
                        ),
                        __jsx(Button.z, {
                          size: "small",
                          onClick: onLogout,
                          label: "Log out",
                        })
                      )
                    : __jsx(
                        react.Fragment,
                        null,
                        __jsx(Button.z, {
                          size: "small",
                          onClick: onLogin,
                          label: "Log in",
                        }),
                        __jsx(Button.z, {
                          primary: !0,
                          size: "small",
                          onClick: onCreateAccount,
                          label: "Sign up",
                        })
                      )
                )
              )
            )
          }
        ;(Header.displayName = "Header"),
          (Header.__docgenInfo = {
            description: "",
            methods: [],
            displayName: "Header",
            props: {
              user: {
                required: !1,
                tsType: {
                  name: "signature",
                  type: "object",
                  raw: "{\n  name: string\n}",
                  signature: {
                    properties: [
                      { key: "name", value: { name: "string", required: !0 } },
                    ],
                  },
                },
                description: "",
              },
              onLogin: {
                required: !0,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "() => void",
                  signature: { arguments: [], return: { name: "void" } },
                },
                description: "",
              },
              onLogout: {
                required: !0,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "() => void",
                  signature: { arguments: [], return: { name: "void" } },
                },
                description: "",
              },
              onCreateAccount: {
                required: !0,
                tsType: {
                  name: "signature",
                  type: "function",
                  raw: "() => void",
                  signature: { arguments: [], return: { name: "void" } },
                },
                description: "",
              },
            },
          })
        try {
          ;(Header.displayName = "Header"),
            (Header.__docgenInfo = {
              description: "",
              displayName: "Header",
              props: {
                user: {
                  defaultValue: null,
                  description: "",
                  name: "user",
                  required: !1,
                  type: { name: "User" },
                },
                onLogin: {
                  defaultValue: null,
                  description: "",
                  name: "onLogin",
                  required: !0,
                  type: { name: "() => void" },
                },
                onLogout: {
                  defaultValue: null,
                  description: "",
                  name: "onLogout",
                  required: !0,
                  type: { name: "() => void" },
                },
                onCreateAccount: {
                  defaultValue: null,
                  description: "",
                  name: "onCreateAccount",
                  required: !0,
                  type: { name: "() => void" },
                },
              },
            }),
            "undefined" != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES["stories/Header.tsx#Header"] = {
                docgenInfo: Header.__docgenInfo,
                name: "Header",
                path: "stories/Header.tsx#Header",
              })
        } catch (__react_docgen_typescript_loader_error) {}
      },
      "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css":
        (module, __webpack_exports__, __webpack_require__) => {
          "use strict"
          __webpack_require__.d(__webpack_exports__, {
            Z: () => __WEBPACK_DEFAULT_EXPORT__,
          })
          var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(
                "./node_modules/css-loader/dist/runtime/sourceMaps.js"
              ),
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
              __webpack_require__.n(
                _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
              ),
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(
                "./node_modules/css-loader/dist/runtime/api.js"
              ),
            ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
            )()(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
            )
          ___CSS_LOADER_EXPORT___.push([
            module.id,
            '.storybook-button {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n',
            "",
            {
              version: 3,
              sources: ["webpack://./stories/button.css"],
              names: [],
              mappings:
                "AAAA;EACE,0EAA0E;EAC1E,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,qDAAqD;AACvD;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB",
              sourcesContent: [
                '.storybook-button {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n',
              ],
              sourceRoot: "",
            },
          ])
          const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
        },
      "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/header.css":
        (module, __webpack_exports__, __webpack_require__) => {
          "use strict"
          __webpack_require__.d(__webpack_exports__, {
            Z: () => __WEBPACK_DEFAULT_EXPORT__,
          })
          var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(
                "./node_modules/css-loader/dist/runtime/sourceMaps.js"
              ),
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
              __webpack_require__.n(
                _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
              ),
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(
                "./node_modules/css-loader/dist/runtime/api.js"
              ),
            ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
            )()(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
            )
          ___CSS_LOADER_EXPORT___.push([
            module.id,
            '.storybook-header {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n',
            "",
            {
              version: 3,
              sources: ["webpack://./stories/header.css"],
              names: [],
              mappings:
                "AAAA;EACE,0EAA0E;EAC1E,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB",
              sourcesContent: [
                '.storybook-header {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n',
              ],
              sourceRoot: "",
            },
          ])
          const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
        },
      "./node_modules/styled-jsx/style.js": (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        module.exports = __webpack_require__(
          "./node_modules/styled-jsx/dist/index/index.js"
        ).style
      },
    },
  ]
)
