;(self.webpackChunkcubeseed_login = self.webpackChunkcubeseed_login || []).push(
  [
    [256],
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
      "./stories/Button.stories.ts": (
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
          title: "Example/Button",
          component: __webpack_require__("./stories/Button.tsx").z,
          parameters: { layout: "centered" },
          tags: ["autodocs"],
          argTypes: { backgroundColor: { control: "color" } },
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
