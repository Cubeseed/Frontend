/*! For license information please see 993.28230932.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunkcubeseed_login = self.webpackChunkcubeseed_login || []).push(
  [
    [993],
    {
      "./node_modules/@mdx-js/react/lib/index.js": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict"
        __webpack_require__.d(__webpack_exports__, {
          NF: () => withMDXComponents,
          Zo: () => MDXProvider,
          ah: () => useMDXComponents,
          pC: () => MDXContext,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        )
        const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})
        function withMDXComponents(Component) {
          return function boundMDXComponent(props) {
            const allComponents = useMDXComponents(props.components)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {
              ...props,
              allComponents,
            })
          }
        }
        function useMDXComponents(components) {
          const contextComponents =
            react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)
          return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
            () =>
              "function" == typeof components
                ? components(contextComponents)
                : { ...contextComponents, ...components },
            [contextComponents, components]
          )
        }
        const emptyObject = {}
        function MDXProvider({ components, children, disableParentContext }) {
          let allComponents
          return (
            (allComponents = disableParentContext
              ? "function" == typeof components
                ? components({})
                : components || emptyObject
              : useMDXComponents(components)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              MDXContext.Provider,
              { value: allComponents },
              children
            )
          )
        }
      },
      "./node_modules/@storybook/nextjs/dist/images/next-image.mjs": (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict"
        __webpack_require__.d(__webpack_exports__, {
          Z: () => next_image_default,
        })
        var defaultLoader = ({ src, width, quality = 75 }) => {
            let missingValues = []
            if (
              (src || missingValues.push("src"),
              width || missingValues.push("width"),
              missingValues.length > 0)
            )
              throw new Error(
                `Next Image Optimization requires ${missingValues.join(
                  ", "
                )} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify(
                  { src, width, quality }
                )}`
              )
            let url = new URL(src, window.location.href)
            return (
              !url.searchParams.has("w") &&
                !url.searchParams.has("q") &&
                (url.searchParams.set("w", width.toString()),
                url.searchParams.set("q", quality.toString())),
              src.startsWith("http://") || src.startsWith("https://")
                ? url.toString()
                : url.toString().slice(url.origin.length)
            )
          },
          next_image =
            (__webpack_require__(
              "./node_modules/@storybook/nextjs/dist/chunk-FFRTCGB4.mjs"
            ),
            __webpack_require__("./node_modules/next/image.js")),
          image_default = __webpack_require__.n(next_image),
          react = __webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js"
          ),
          ImageContext = __webpack_require__(
            "./node_modules/@storybook/nextjs/dist/image-context.mjs"
          ).ImageContext,
          next_image_default = ({ loader, ...props }) => {
            let imageParameters = react.useContext(ImageContext)
            return react.createElement(image_default(), {
              ...imageParameters,
              ...props,
              loader: loader ?? defaultLoader,
            })
          }
      },
      "./node_modules/@swc/helpers/lib/_extends.js": (
        __unused_webpack_module,
        exports
      ) => {
        "use strict"
        function extends_() {
          return (
            (extends_ =
              Object.assign ||
              function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i]
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key])
                }
                return target
              }),
            extends_.apply(this, arguments)
          )
        }
        function _extends() {
          return extends_.apply(this, arguments)
        }
        Object.defineProperty(exports, "Z", {
          enumerable: !0,
          get: function () {
            return _extends
          },
        })
      },
      "./node_modules/@swc/helpers/lib/_interop_require_wildcard.js": (
        __unused_webpack_module,
        exports
      ) => {
        "use strict"
        function _getRequireWildcardCache(nodeInterop) {
          if ("function" != typeof WeakMap) return null
          var cacheBabelInterop = new WeakMap(),
            cacheNodeInterop = new WeakMap()
          return (_getRequireWildcardCache = function _getRequireWildcardCache(
            nodeInterop
          ) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop
          })(nodeInterop)
        }
        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) return obj
          if (
            null === obj ||
            ("object" != typeof obj && "function" != typeof obj)
          )
            return { default: obj }
          var cache = _getRequireWildcardCache(nodeInterop)
          if (cache && cache.has(obj)) return cache.get(obj)
          var newObj = {},
            hasPropertyDescriptor =
              Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var key in obj)
            if (
              "default" !== key &&
              Object.prototype.hasOwnProperty.call(obj, key)
            ) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null
              desc && (desc.get || desc.set)
                ? Object.defineProperty(newObj, key, desc)
                : (newObj[key] = obj[key])
            }
          return (newObj.default = obj), cache && cache.set(obj, newObj), newObj
        }
        Object.defineProperty(exports, "Z", {
          enumerable: !0,
          get: function () {
            return _interopRequireWildcard
          },
        })
      },
      "./node_modules/@swc/helpers/lib/_object_without_properties_loose.js": (
        __unused_webpack_module,
        exports
      ) => {
        "use strict"
        function _objectWithoutPropertiesLoose(source, excluded) {
          if (null == source) return {}
          var key,
            i,
            target = {},
            sourceKeys = Object.keys(source)
          for (i = 0; i < sourceKeys.length; i++)
            (key = sourceKeys[i]),
              excluded.indexOf(key) >= 0 || (target[key] = source[key])
          return target
        }
        Object.defineProperty(exports, "Z", {
          enumerable: !0,
          get: function () {
            return _objectWithoutPropertiesLoose
          },
        })
      },
      "./node_modules/next/dist/client/image.js": (
        module,
        exports,
        __webpack_require__
      ) => {
        var process = __webpack_require__("./node_modules/process/browser.js")
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0)
        var _extends = __webpack_require__(
            "./node_modules/@swc/helpers/lib/_extends.js"
          ).Z,
          _interop_require_default = __webpack_require__(
            "./node_modules/@swc/helpers/lib/_interop_require_default.js"
          ).Z,
          _interop_require_wildcard = __webpack_require__(
            "./node_modules/@swc/helpers/lib/_interop_require_wildcard.js"
          ).Z,
          _object_without_properties_loose = __webpack_require__(
            "./node_modules/@swc/helpers/lib/_object_without_properties_loose.js"
          ).Z,
          _react = _interop_require_wildcard(
            __webpack_require__(
              "./node_modules/next/dist/compiled/react/index.js"
            )
          ),
          _head = _interop_require_default(
            __webpack_require__("./node_modules/next/dist/shared/lib/head.js")
          ),
          _imageBlurSvg = __webpack_require__(
            "./node_modules/next/dist/shared/lib/image-blur-svg.js"
          ),
          _imageConfig = __webpack_require__(
            "./node_modules/next/dist/shared/lib/image-config.js"
          ),
          _imageConfigContext = __webpack_require__(
            "./node_modules/next/dist/shared/lib/image-config-context.js"
          ),
          _imageLoader =
            (__webpack_require__(
              "./node_modules/next/dist/shared/lib/utils/warn-once.js"
            ),
            _interop_require_default(
              __webpack_require__(
                "./node_modules/next/dist/shared/lib/image-loader.js"
              )
            ))
        const configEnv = process.env.__NEXT_IMAGE_OPTS
        new Map()
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0)
        function isStaticRequire(src) {
          return void 0 !== src.default
        }
        function generateImgAttrs({
          config,
          src,
          unoptimized,
          width,
          quality,
          sizes,
          loader,
        }) {
          if (unoptimized) return { src, srcSet: void 0, sizes: void 0 }
          const { widths, kind } = (function getWidths(
              { deviceSizes, allSizes },
              width,
              sizes
            ) {
              if (sizes) {
                const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g,
                  percentSizes = []
                for (let match; (match = viewportWidthRe.exec(sizes)); match)
                  percentSizes.push(parseInt(match[2]))
                if (percentSizes.length) {
                  const smallestRatio = 0.01 * Math.min(...percentSizes)
                  return {
                    widths: allSizes.filter(
                      (s) => s >= deviceSizes[0] * smallestRatio
                    ),
                    kind: "w",
                  }
                }
                return { widths: allSizes, kind: "w" }
              }
              return "number" != typeof width
                ? { widths: deviceSizes, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [width, 2 * width].map(
                          (w) =>
                            allSizes.find((p) => p >= w) ||
                            allSizes[allSizes.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  }
            })(config, width, sizes),
            last = widths.length - 1
          return {
            sizes: sizes || "w" !== kind ? sizes : "100vw",
            srcSet: widths
              .map(
                (w, i) =>
                  `${loader({ config, src, quality, width: w })} ${
                    "w" === kind ? w : i + 1
                  }${kind}`
              )
              .join(", "),
            src: loader({ config, src, quality, width: widths[last] }),
          }
        }
        function getInt(x) {
          return "number" == typeof x || void 0 === x
            ? x
            : "string" == typeof x && /^[0-9]+$/.test(x)
            ? parseInt(x, 10)
            : NaN
        }
        function handleLoading(
          img,
          src,
          placeholder,
          onLoadRef,
          onLoadingCompleteRef,
          setBlurComplete,
          unoptimized
        ) {
          if (!img || img["data-loaded-src"] === src) return
          img["data-loaded-src"] = src
          ;("decode" in img ? img.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (img.parentElement && img.isConnected) {
                if (
                  ("blur" === placeholder && setBlurComplete(!0),
                  null == onLoadRef ? void 0 : onLoadRef.current)
                ) {
                  const event = new Event("load")
                  Object.defineProperty(event, "target", {
                    writable: !1,
                    value: img,
                  })
                  let prevented = !1,
                    stopped = !1
                  onLoadRef.current(
                    _extends({}, event, {
                      nativeEvent: event,
                      currentTarget: img,
                      target: img,
                      isDefaultPrevented: () => prevented,
                      isPropagationStopped: () => stopped,
                      persist: () => {},
                      preventDefault: () => {
                        ;(prevented = !0), event.preventDefault()
                      },
                      stopPropagation: () => {
                        ;(stopped = !0), event.stopPropagation()
                      },
                    })
                  )
                }
                ;(null == onLoadingCompleteRef
                  ? void 0
                  : onLoadingCompleteRef.current) &&
                  onLoadingCompleteRef.current(img)
              }
            })
        }
        function getDynamicProps(fetchPriority) {
          const [majorStr, minorStr] = _react.version.split("."),
            major = parseInt(majorStr, 10),
            minor = parseInt(minorStr, 10)
          return major > 18 || (18 === major && minor >= 3)
            ? { fetchPriority }
            : { fetchpriority: fetchPriority }
        }
        const ImageElement = _react.forwardRef((_param, forwardedRef) => {
          var {
              imgAttributes,
              heightInt,
              widthInt,
              qualityInt,
              className,
              imgStyle,
              blurStyle,
              isLazy,
              fetchPriority,
              fill,
              placeholder,
              loading,
              srcString,
              config,
              unoptimized,
              loader,
              onLoadRef,
              onLoadingCompleteRef,
              setBlurComplete,
              setShowAltText,
              onLoad,
              onError,
            } = _param,
            rest = _object_without_properties_loose(_param, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "fetchPriority",
              "fill",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadRef",
              "onLoadingCompleteRef",
              "setBlurComplete",
              "setShowAltText",
              "onLoad",
              "onError",
            ])
          return (
            (loading = isLazy ? "lazy" : loading),
            _react.default.createElement(
              _react.default.Fragment,
              null,
              _react.default.createElement(
                "img",
                Object.assign(
                  {},
                  rest,
                  getDynamicProps(fetchPriority),
                  {
                    loading,
                    width: widthInt,
                    height: heightInt,
                    decoding: "async",
                    "data-nimg": fill ? "fill" : "1",
                    className,
                    style: _extends({}, imgStyle, blurStyle),
                  },
                  imgAttributes,
                  {
                    ref: _react.useCallback(
                      (img) => {
                        forwardedRef &&
                          ("function" == typeof forwardedRef
                            ? forwardedRef(img)
                            : "object" == typeof forwardedRef &&
                              (forwardedRef.current = img)),
                          img &&
                            (onError && (img.src = img.src),
                            img.complete &&
                              handleLoading(
                                img,
                                srcString,
                                placeholder,
                                onLoadRef,
                                onLoadingCompleteRef,
                                setBlurComplete
                              ))
                      },
                      [
                        srcString,
                        placeholder,
                        onLoadRef,
                        onLoadingCompleteRef,
                        setBlurComplete,
                        onError,
                        unoptimized,
                        forwardedRef,
                      ]
                    ),
                    onLoad: (event) => {
                      handleLoading(
                        event.currentTarget,
                        srcString,
                        placeholder,
                        onLoadRef,
                        onLoadingCompleteRef,
                        setBlurComplete
                      )
                    },
                    onError: (event) => {
                      setShowAltText(!0),
                        "blur" === placeholder && setBlurComplete(!0),
                        onError && onError(event)
                    },
                  }
                )
              )
            )
          )
        })
        var _default = _react.forwardRef((_param, forwardedRef) => {
          var {
              src,
              sizes,
              unoptimized = !1,
              priority = !1,
              loading,
              className,
              quality,
              width,
              height,
              fill,
              style,
              onLoad,
              onLoadingComplete,
              placeholder = "empty",
              blurDataURL,
              fetchPriority,
              layout,
              objectFit,
              objectPosition,
              lazyBoundary,
              lazyRoot,
            } = _param,
            all = _object_without_properties_loose(_param, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "fill",
              "style",
              "onLoad",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
              "fetchPriority",
              "layout",
              "objectFit",
              "objectPosition",
              "lazyBoundary",
              "lazyRoot",
            ])
          const configContext = _react.useContext(
              _imageConfigContext.ImageConfigContext
            ),
            config = _react.useMemo(() => {
              const c =
                  configEnv || configContext || _imageConfig.imageConfigDefault,
                allSizes = [...c.deviceSizes, ...c.imageSizes].sort(
                  (a, b) => a - b
                ),
                deviceSizes = c.deviceSizes.sort((a, b) => a - b)
              return _extends({}, c, { allSizes, deviceSizes })
            }, [configContext])
          let rest = all,
            loader = rest.loader || _imageLoader.default
          delete rest.loader
          const isDefaultLoader = "__next_img_default" in loader
          if (isDefaultLoader) {
            if ("custom" === config.loader)
              throw new Error(
                `Image with src "${src}" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`
              )
          } else {
            const customImageLoader = loader
            loader = (obj) => {
              const { config: _ } = obj,
                opts = _object_without_properties_loose(obj, ["config"])
              return customImageLoader(opts)
            }
          }
          if (layout) {
            "fill" === layout && (fill = !0)
            const layoutToSizes = { responsive: "100vw", fill: "100vw" },
              layoutStyle = {
                intrinsic: { maxWidth: "100%", height: "auto" },
                responsive: { width: "100%", height: "auto" },
              }[layout]
            layoutStyle && (style = _extends({}, style, layoutStyle))
            const layoutSizes = layoutToSizes[layout]
            layoutSizes && !sizes && (sizes = layoutSizes)
          }
          let blurWidth,
            blurHeight,
            staticSrc = "",
            widthInt = getInt(width),
            heightInt = getInt(height)
          if (
            (function isStaticImport(src) {
              return (
                "object" == typeof src &&
                (isStaticRequire(src) ||
                  (function isStaticImageData(src) {
                    return void 0 !== src.src
                  })(src))
              )
            })(src)
          ) {
            const staticImageData = isStaticRequire(src) ? src.default : src
            if (!staticImageData.src)
              throw new Error(
                `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                  staticImageData
                )}`
              )
            if (!staticImageData.height || !staticImageData.width)
              throw new Error(
                `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                  staticImageData
                )}`
              )
            if (
              ((blurWidth = staticImageData.blurWidth),
              (blurHeight = staticImageData.blurHeight),
              (blurDataURL = blurDataURL || staticImageData.blurDataURL),
              (staticSrc = staticImageData.src),
              !fill)
            )
              if (widthInt || heightInt) {
                if (widthInt && !heightInt) {
                  const ratio = widthInt / staticImageData.width
                  heightInt = Math.round(staticImageData.height * ratio)
                } else if (!widthInt && heightInt) {
                  const ratio = heightInt / staticImageData.height
                  widthInt = Math.round(staticImageData.width * ratio)
                }
              } else
                (widthInt = staticImageData.width),
                  (heightInt = staticImageData.height)
          }
          let isLazy = !priority && ("lazy" === loading || void 0 === loading)
          ;(!(src = "string" == typeof src ? src : staticSrc) ||
            src.startsWith("data:") ||
            src.startsWith("blob:")) &&
            ((unoptimized = !0), (isLazy = !1)),
            config.unoptimized && (unoptimized = !0),
            isDefaultLoader &&
              src.endsWith(".svg") &&
              !config.dangerouslyAllowSVG &&
              (unoptimized = !0),
            priority && (fetchPriority = "high")
          const [blurComplete, setBlurComplete] = _react.useState(!1),
            [showAltText, setShowAltText] = _react.useState(!1),
            qualityInt = getInt(quality)
          const imgStyle = Object.assign(
              fill
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit,
                    objectPosition,
                  }
                : {},
              showAltText ? {} : { color: "transparent" },
              style
            ),
            blurStyle =
              "blur" === placeholder && blurDataURL && !blurComplete
                ? {
                    backgroundSize: imgStyle.objectFit || "cover",
                    backgroundPosition: imgStyle.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url("data:image/svg+xml;charset=utf-8,${_imageBlurSvg.getImageBlurSvg(
                      {
                        widthInt,
                        heightInt,
                        blurWidth,
                        blurHeight,
                        blurDataURL,
                        objectFit: imgStyle.objectFit,
                      }
                    )}")`,
                  }
                : {}
          const imgAttributes = generateImgAttrs({
            config,
            src,
            unoptimized,
            width: widthInt,
            quality: qualityInt,
            sizes,
            loader,
          })
          let srcString = src
          const onLoadRef = _react.useRef(onLoad)
          _react.useEffect(() => {
            onLoadRef.current = onLoad
          }, [onLoad])
          const onLoadingCompleteRef = _react.useRef(onLoadingComplete)
          _react.useEffect(() => {
            onLoadingCompleteRef.current = onLoadingComplete
          }, [onLoadingComplete])
          const imgElementArgs = _extends(
            {
              isLazy,
              imgAttributes,
              heightInt,
              widthInt,
              qualityInt,
              className,
              imgStyle,
              blurStyle,
              loading,
              config,
              fetchPriority,
              fill,
              unoptimized,
              placeholder,
              loader,
              srcString,
              onLoadRef,
              onLoadingCompleteRef,
              setBlurComplete,
              setShowAltText,
            },
            rest
          )
          return _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement(
              ImageElement,
              Object.assign({}, imgElementArgs, { ref: forwardedRef })
            ),
            priority
              ? _react.default.createElement(
                  _head.default,
                  null,
                  _react.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key:
                          "__nimg-" +
                          imgAttributes.src +
                          imgAttributes.srcSet +
                          imgAttributes.sizes,
                        rel: "preload",
                        as: "image",
                        href: imgAttributes.srcSet ? void 0 : imgAttributes.src,
                        imageSrcSet: imgAttributes.srcSet,
                        imageSizes: imgAttributes.sizes,
                        crossOrigin: rest.crossOrigin,
                      },
                      getDynamicProps(fetchPriority)
                    )
                  )
                )
              : null
          )
        })
        ;(exports.default = _default),
          ("function" == typeof exports.default ||
            ("object" == typeof exports.default && null !== exports.default)) &&
            void 0 === exports.default.__esModule &&
            (Object.defineProperty(exports.default, "__esModule", {
              value: !0,
            }),
            Object.assign(exports.default, exports),
            (module.exports = exports.default))
      },
      "./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":
        (__unused_webpack_module, exports, __webpack_require__) => {
          "use strict"
          var f = __webpack_require__(
              "./node_modules/next/dist/compiled/react/index.js"
            ),
            k = Symbol.for("react.element"),
            l = Symbol.for("react.fragment"),
            m = Object.prototype.hasOwnProperty,
            n =
              f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
            p = { key: !0, ref: !0, __self: !0, __source: !0 }
          function q(c, a, g) {
            var b,
              d = {},
              e = null,
              h = null
            for (b in (void 0 !== g && (e = "" + g),
            void 0 !== a.key && (e = "" + a.key),
            void 0 !== a.ref && (h = a.ref),
            a))
              m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b])
            if (c && c.defaultProps)
              for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b])
            return {
              $$typeof: k,
              type: c,
              key: e,
              ref: h,
              props: d,
              _owner: n.current,
            }
          }
          ;(exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q)
        },
      "./node_modules/next/dist/compiled/react/jsx-runtime.js": (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        "use strict"
        module.exports = __webpack_require__(
          "./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js"
        )
      },
      "./node_modules/next/dist/shared/lib/amp-context.js": (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.AmpStateContext = void 0)
        const AmpStateContext = (0,
        __webpack_require__(
          "./node_modules/@swc/helpers/lib/_interop_require_default.js"
        ).Z)(
          __webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js"
          )
        ).default.createContext({})
        exports.AmpStateContext = AmpStateContext
      },
      "./node_modules/next/dist/shared/lib/amp-mode.js": (
        __unused_webpack_module,
        exports
      ) => {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isInAmpMode = function isInAmpMode({
            ampFirst = !1,
            hybrid = !1,
            hasQuery = !1,
          } = {}) {
            return ampFirst || (hybrid && hasQuery)
          })
      },
      "./node_modules/next/dist/shared/lib/head.js": (
        module,
        exports,
        __webpack_require__
      ) => {
        var process = __webpack_require__("./node_modules/process/browser.js")
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.defaultHead = defaultHead),
          (exports.default = void 0)
        var _extends = __webpack_require__(
            "./node_modules/@swc/helpers/lib/_extends.js"
          ).Z,
          _interop_require_default = __webpack_require__(
            "./node_modules/@swc/helpers/lib/_interop_require_default.js"
          ).Z,
          _react = (0,
          __webpack_require__(
            "./node_modules/@swc/helpers/lib/_interop_require_wildcard.js"
          ).Z)(
            __webpack_require__(
              "./node_modules/next/dist/compiled/react/index.js"
            )
          ),
          _sideEffect = _interop_require_default(
            __webpack_require__(
              "./node_modules/next/dist/shared/lib/side-effect.js"
            )
          ),
          _ampContext = __webpack_require__(
            "./node_modules/next/dist/shared/lib/amp-context.js"
          ),
          _headManagerContext = __webpack_require__(
            "./node_modules/next/dist/shared/lib/head-manager-context.js"
          ),
          _ampMode = __webpack_require__(
            "./node_modules/next/dist/shared/lib/amp-mode.js"
          )
        __webpack_require__(
          "./node_modules/next/dist/shared/lib/utils/warn-once.js"
        )
        function defaultHead(inAmpMode = !1) {
          const head = [
            _react.default.createElement("meta", { charSet: "utf-8" }),
          ]
          return (
            inAmpMode ||
              head.push(
                _react.default.createElement("meta", {
                  name: "viewport",
                  content: "width=device-width",
                })
              ),
            head
          )
        }
        function onlyReactElement(list, child) {
          return "string" == typeof child || "number" == typeof child
            ? list
            : child.type === _react.default.Fragment
            ? list.concat(
                _react.default.Children.toArray(child.props.children).reduce(
                  (fragmentList, fragmentChild) =>
                    "string" == typeof fragmentChild ||
                    "number" == typeof fragmentChild
                      ? fragmentList
                      : fragmentList.concat(fragmentChild),
                  []
                )
              )
            : list.concat(child)
        }
        const METATYPES = ["name", "httpEquiv", "charSet", "itemProp"]
        function reduceComponents(headChildrenElements, props) {
          const { inAmpMode } = props
          return headChildrenElements
            .reduce(onlyReactElement, [])
            .reverse()
            .concat(defaultHead(inAmpMode).reverse())
            .filter(
              (function unique() {
                const keys = new Set(),
                  tags = new Set(),
                  metaTypes = new Set(),
                  metaCategories = {}
                return (h) => {
                  let isUnique = !0,
                    hasKey = !1
                  if (
                    h.key &&
                    "number" != typeof h.key &&
                    h.key.indexOf("$") > 0
                  ) {
                    hasKey = !0
                    const key = h.key.slice(h.key.indexOf("$") + 1)
                    keys.has(key) ? (isUnique = !1) : keys.add(key)
                  }
                  switch (h.type) {
                    case "title":
                    case "base":
                      tags.has(h.type) ? (isUnique = !1) : tags.add(h.type)
                      break
                    case "meta":
                      for (let i = 0, len = METATYPES.length; i < len; i++) {
                        const metatype = METATYPES[i]
                        if (h.props.hasOwnProperty(metatype))
                          if ("charSet" === metatype)
                            metaTypes.has(metatype)
                              ? (isUnique = !1)
                              : metaTypes.add(metatype)
                          else {
                            const category = h.props[metatype],
                              categories = metaCategories[metatype] || new Set()
                            ;("name" === metatype && hasKey) ||
                            !categories.has(category)
                              ? (categories.add(category),
                                (metaCategories[metatype] = categories))
                              : (isUnique = !1)
                          }
                      }
                  }
                  return isUnique
                }
              })()
            )
            .reverse()
            .map((c, i) => {
              const key = c.key || i
              if (
                process.env.__NEXT_OPTIMIZE_FONTS &&
                !inAmpMode &&
                "link" === c.type &&
                c.props.href &&
                [
                  "https://fonts.googleapis.com/css",
                  "https://use.typekit.net/",
                ].some((url) => c.props.href.startsWith(url))
              ) {
                const newProps = _extends({}, c.props || {})
                return (
                  (newProps["data-href"] = newProps.href),
                  (newProps.href = void 0),
                  (newProps["data-optimized-fonts"] = !0),
                  _react.default.cloneElement(c, newProps)
                )
              }
              return _react.default.cloneElement(c, { key })
            })
        }
        var _default = function Head({ children }) {
          const ampState = _react.useContext(_ampContext.AmpStateContext),
            headManager = _react.useContext(
              _headManagerContext.HeadManagerContext
            )
          return _react.default.createElement(
            _sideEffect.default,
            {
              reduceComponentsToState: reduceComponents,
              headManager,
              inAmpMode: _ampMode.isInAmpMode(ampState),
            },
            children
          )
        }
        ;(exports.default = _default),
          ("function" == typeof exports.default ||
            ("object" == typeof exports.default && null !== exports.default)) &&
            void 0 === exports.default.__esModule &&
            (Object.defineProperty(exports.default, "__esModule", {
              value: !0,
            }),
            Object.assign(exports.default, exports),
            (module.exports = exports.default))
      },
      "./node_modules/next/dist/shared/lib/image-blur-svg.js": (
        __unused_webpack_module,
        exports
      ) => {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.getImageBlurSvg = function getImageBlurSvg({
            widthInt,
            heightInt,
            blurWidth,
            blurHeight,
            blurDataURL,
            objectFit,
          }) {
            const std = blurWidth && blurHeight ? "1" : "20",
              svgWidth = blurWidth || widthInt,
              svgHeight = blurHeight || heightInt,
              feComponentTransfer = blurDataURL.startsWith("data:image/jpeg")
                ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
                : ""
            if (svgWidth && svgHeight)
              return `%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ${svgWidth} ${svgHeight}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E${feComponentTransfer}%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='${blurDataURL}'/%3E%3C/svg%3E`
            return `%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='${
              "contain" === objectFit
                ? "xMidYMid"
                : "cover" === objectFit
                ? "xMidYMid slice"
                : "none"
            }' x='0' y='0' height='100%25' width='100%25' href='${blurDataURL}'/%3E%3C/svg%3E`
          })
      },
      "./node_modules/next/dist/shared/lib/image-config-context.js": (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.ImageConfigContext = void 0)
        var _react = (0,
          __webpack_require__(
            "./node_modules/@swc/helpers/lib/_interop_require_default.js"
          ).Z)(
            __webpack_require__(
              "./node_modules/next/dist/compiled/react/index.js"
            )
          ),
          _imageConfig = __webpack_require__(
            "./node_modules/next/dist/shared/lib/image-config.js"
          )
        const ImageConfigContext = _react.default.createContext(
          _imageConfig.imageConfigDefault
        )
        exports.ImageConfigContext = ImageConfigContext
      },
      "./node_modules/next/dist/shared/lib/image-config.js": (
        __unused_webpack_module,
        exports
      ) => {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.imageConfigDefault = exports.VALID_LOADERS = void 0)
        exports.VALID_LOADERS = [
          "default",
          "imgix",
          "cloudinary",
          "akamai",
          "custom",
        ]
        const imageConfigDefault = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        }
        exports.imageConfigDefault = imageConfigDefault
      },
      "./node_modules/next/dist/shared/lib/image-loader.js": (
        __unused_webpack_module,
        exports
      ) => {
        "use strict"
        function defaultLoader({ config, src, width, quality }) {
          return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${
            quality || 75
          }`
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0),
          (defaultLoader.__next_img_default = !0)
        var _default = defaultLoader
        exports.default = _default
      },
      "./node_modules/next/dist/shared/lib/side-effect.js": (
        __unused_webpack_module,
        exports,
        __webpack_require__
      ) => {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = function SideEffect(props) {
            const { headManager, reduceComponentsToState } = props
            function emitChange() {
              if (headManager && headManager.mountedInstances) {
                const headElements = _react.Children.toArray(
                  Array.from(headManager.mountedInstances).filter(Boolean)
                )
                headManager.updateHead(
                  reduceComponentsToState(headElements, props)
                )
              }
            }
            if (isServer) {
              var ref
              null == headManager ||
                null == (ref = headManager.mountedInstances) ||
                ref.add(props.children),
                emitChange()
            }
            return (
              useClientOnlyLayoutEffect(() => {
                var ref1
                return (
                  null == headManager ||
                    null == (ref1 = headManager.mountedInstances) ||
                    ref1.add(props.children),
                  () => {
                    var ref
                    null == headManager ||
                      null == (ref = headManager.mountedInstances) ||
                      ref.delete(props.children)
                  }
                )
              }),
              useClientOnlyLayoutEffect(
                () => (
                  headManager && (headManager._pendingUpdate = emitChange),
                  () => {
                    headManager && (headManager._pendingUpdate = emitChange)
                  }
                )
              ),
              useClientOnlyEffect(
                () => (
                  headManager &&
                    headManager._pendingUpdate &&
                    (headManager._pendingUpdate(),
                    (headManager._pendingUpdate = null)),
                  () => {
                    headManager &&
                      headManager._pendingUpdate &&
                      (headManager._pendingUpdate(),
                      (headManager._pendingUpdate = null))
                  }
                )
              ),
              null
            )
          })
        var _react = (0,
        __webpack_require__(
          "./node_modules/@swc/helpers/lib/_interop_require_wildcard.js"
        ).Z)(
          __webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js"
          )
        )
        const isServer = "undefined" == typeof window,
          useClientOnlyLayoutEffect = isServer
            ? () => {}
            : _react.useLayoutEffect,
          useClientOnlyEffect = isServer ? () => {} : _react.useEffect
      },
      "./node_modules/next/dist/shared/lib/utils/warn-once.js": (
        __unused_webpack_module,
        exports
      ) => {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.warnOnce = void 0)
        exports.warnOnce = (_) => {}
      },
      "./node_modules/next/image.js": (
        module,
        __unused_webpack_exports,
        __webpack_require__
      ) => {
        module.exports = __webpack_require__(
          "./node_modules/next/dist/client/image.js"
        )
      },
    },
  ]
)
