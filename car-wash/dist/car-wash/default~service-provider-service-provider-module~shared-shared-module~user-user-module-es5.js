function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~service-provider-service-provider-module~shared-shared-module~user-user-module"], {
  /***/
  "./node_modules/@angular/common/fesm2015/http.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/common/fesm2015/http.js ***!
    \*******************************************************/

  /*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */

  /***/
  function node_modulesAngularCommonFesm2015HttpJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function () {
      return NoopInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function () {
      return JsonpCallbackContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function () {
      return jsonpCallbackContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function () {
      return BrowserXhr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function () {
      return HttpXsrfCookieExtractor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function () {
      return HttpXsrfInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function () {
      return XSRF_COOKIE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function () {
      return XSRF_HEADER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpBackend", function () {
      return HttpBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHandler", function () {
      return HttpHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClient", function () {
      return HttpClient;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeaders", function () {
      return HttpHeaders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function () {
      return HTTP_INTERCEPTORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function () {
      return JsonpClientBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function () {
      return JsonpInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function () {
      return HttpClientJsonpModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientModule", function () {
      return HttpClientModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function () {
      return HttpClientXsrfModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function () {
      return HttpInterceptingHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpParams", function () {
      return HttpParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function () {
      return HttpUrlEncodingCodec;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpRequest", function () {
      return HttpRequest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function () {
      return HttpErrorResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpEventType", function () {
      return HttpEventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function () {
      return HttpHeaderResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponse", function () {
      return HttpResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function () {
      return HttpResponseBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function () {
      return HttpXhrBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XhrFactory", function () {
      return XhrFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function () {
      return HttpXsrfTokenExtractor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license Angular v8.2.9
     * (c) 2010-2019 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
     * `HttpResponse`.
     *
     * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
     * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
     * `HttpBackend`.
     *
     * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
     *
     * \@publicApi
     * @abstract
     */


    var HttpHandler = function HttpHandler() {};

    if (false) {}
    /**
     * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
     *
     * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
     *
     * When injected, `HttpBackend` dispatches requests directly to the backend, without going
     * through the interceptor chain.
     *
     * \@publicApi
     * @abstract
     */


    var HttpBackend = function HttpBackend() {};

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @record
     */


    function Update() {}

    if (false) {}
    /**
     * Represents the header configuration options for an HTTP request.
     *
     * Instances should be assumed immutable with lazy parsing.
     *
     * \@publicApi
     */


    var HttpHeaders =
    /*#__PURE__*/
    function () {
      /**
       * Constructs a new HTTP header object with the given values.
       * @param {?=} headers
       */
      function HttpHeaders(headers) {
        var _this = this;

        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */

        this.lazyUpdate = null;

        if (!headers) {
          this.headers = new Map();
        } else if (typeof headers === 'string') {
          this.lazyInit =
          /**
          * @return {?}
          */
          function () {
            _this.headers = new Map();
            headers.split('\n').forEach(
            /**
            * @param {?} line
            * @return {?}
            */
            function (line) {
              /** @type {?} */
              var index = line.indexOf(':');

              if (index > 0) {
                /** @type {?} */
                var name = line.slice(0, index);
                /** @type {?} */

                var key = name.toLowerCase();
                /** @type {?} */

                var value = line.slice(index + 1).trim();

                _this.maybeSetNormalizedName(name, key);

                if (_this.headers.has(key)) {
                  /** @type {?} */
                  _this.headers.get(key).push(value);
                } else {
                  _this.headers.set(key, [value]);
                }
              }
            });
          };
        } else {
          this.lazyInit =
          /**
          * @return {?}
          */
          function () {
            _this.headers = new Map();
            Object.keys(headers).forEach(
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              /** @type {?} */
              var values = headers[name];
              /** @type {?} */

              var key = name.toLowerCase();

              if (typeof values === 'string') {
                values = [values];
              }

              if (values.length > 0) {
                _this.headers.set(key, values);

                _this.maybeSetNormalizedName(name, key);
              }
            });
          };
        }
      }
      /**
       * Checks for existence of a header by a given name.
       *
       * @param {?} name The header name to check for existence.
       *
       * @return {?} Whether the header exits.
       */


      var _proto = HttpHeaders.prototype;

      _proto.has = function has(name) {
        this.init();
        return this.headers.has(name.toLowerCase());
      }
      /**
       * Retrieves the first header value that matches a given name.
       *
       * @param {?} name The header name to retrieve.
       *
       * @return {?} A string if the header exists, null otherwise
       */
      ;

      _proto.get = function get(name) {
        this.init();
        /** @type {?} */

        var values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
      }
      /**
       * Retrieves the names of the headers.
       *
       * @return {?} A list of header names.
       */
      ;

      _proto.keys = function keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
      }
      /**
       * Retrieves a list of header values for a given header name.
       *
       * @param {?} name The header name from which to retrieve the values.
       *
       * @return {?} A string of values if the header exists, null otherwise.
       */
      ;

      _proto.getAll = function getAll(name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
      }
      /**
       * Appends a new header value to the existing set of
       * header values.
       *
       * @param {?} name The header name for which to append the values.
       *
       * @param {?} value
       * @return {?} A clone of the HTTP header object with the value appended.
       */
      ;

      _proto.append = function append(name, value) {
        return this.clone({
          name: name,
          value: value,
          op: 'a'
        });
      }
      /**
       * Sets a header value for a given name. If the header name already exists,
       * its value is replaced with the given value.
       *
       * @param {?} name The header name.
       * @param {?} value The value to set or overide for a given name.
       *
       * @return {?} A clone of the HTTP header object with the newly set header value.
       */
      ;

      _proto.set = function set(name, value) {
        return this.clone({
          name: name,
          value: value,
          op: 's'
        });
      }
      /**
       * Deletes all header values for a given name.
       *
       * @param {?} name The header name.
       * @param {?=} value The header values to delete for a given name.
       *
       * @return {?} A clone of the HTTP header object.
       */
      ;

      _proto.delete = function _delete(name, value) {
        return this.clone({
          name: name,
          value: value,
          op: 'd'
        });
      }
      /**
       * @private
       * @param {?} name
       * @param {?} lcName
       * @return {?}
       */
      ;

      _proto.maybeSetNormalizedName = function maybeSetNormalizedName(name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
          this.normalizedNames.set(lcName, name);
        }
      }
      /**
       * @private
       * @return {?}
       */
      ;

      _proto.init = function init() {
        var _this2 = this;

        if (!!this.lazyInit) {
          if (this.lazyInit instanceof HttpHeaders) {
            this.copyFrom(this.lazyInit);
          } else {
            this.lazyInit();
          }

          this.lazyInit = null;

          if (!!this.lazyUpdate) {
            this.lazyUpdate.forEach(
            /**
            * @param {?} update
            * @return {?}
            */
            function (update) {
              return _this2.applyUpdate(update);
            });
            this.lazyUpdate = null;
          }
        }
      }
      /**
       * @private
       * @param {?} other
       * @return {?}
       */
      ;

      _proto.copyFrom = function copyFrom(other) {
        var _this3 = this;

        other.init();
        Array.from(other.headers.keys()).forEach(
        /**
        * @param {?} key
        * @return {?}
        */
        function (key) {
          _this3.headers.set(key,
          /** @type {?} */
          other.headers.get(key));

          _this3.normalizedNames.set(key,
          /** @type {?} */
          other.normalizedNames.get(key));
        });
      }
      /**
       * @private
       * @param {?} update
       * @return {?}
       */
      ;

      _proto.clone = function clone(update) {
        /** @type {?} */
        var clone = new HttpHeaders();
        clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
      }
      /**
       * @private
       * @param {?} update
       * @return {?}
       */
      ;

      _proto.applyUpdate = function applyUpdate(update) {
        /** @type {?} */
        var key = update.name.toLowerCase();

        switch (update.op) {
          case 'a':
          case 's':
            /** @type {?} */
            var value =
            /** @type {?} */
            update.value;

            if (typeof value === 'string') {
              value = [value];
            }

            if (value.length === 0) {
              return;
            }

            this.maybeSetNormalizedName(update.name, key);
            /** @type {?} */

            var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
            base.push.apply(base, value);
            this.headers.set(key, base);
            break;

          case 'd':
            /** @type {?} */
            var toDelete =
            /** @type {?} */
            update.value;

            if (!toDelete) {
              this.headers.delete(key);
              this.normalizedNames.delete(key);
            } else {
              /** @type {?} */
              var existing = this.headers.get(key);

              if (!existing) {
                return;
              }

              existing = existing.filter(
              /**
              * @param {?} value
              * @return {?}
              */
              function (value) {
                return toDelete.indexOf(value) === -1;
              });

              if (existing.length === 0) {
                this.headers.delete(key);
                this.normalizedNames.delete(key);
              } else {
                this.headers.set(key, existing);
              }
            }

            break;
        }
      }
      /**
       * \@internal
       * @param {?} fn
       * @return {?}
       */
      ;

      _proto.forEach = function forEach(fn) {
        var _this4 = this;

        this.init();
        Array.from(this.normalizedNames.keys()).forEach(
        /**
        * @param {?} key
        * @return {?}
        */
        function (key) {
          return fn(
          /** @type {?} */
          _this4.normalizedNames.get(key),
          /** @type {?} */
          _this4.headers.get(key));
        });
      };

      return HttpHeaders;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A codec for encoding and decoding parameters in URLs.
     *
     * Used by `HttpParams`.
     *
     * \@publicApi
     *
     * @record
     */


    function HttpParameterCodec() {}

    if (false) {}
    /**
     * Provides encoding and decoding of URL parameter and query-string values.
     *
     * Serializes and parses URL parameter keys and values to encode and decode them.
     * If you pass URL query parameters without encoding,
     * the query parameters can be misinterpreted at the receiving end.
     *
     *
     * \@publicApi
     */


    var HttpUrlEncodingCodec =
    /*#__PURE__*/
    function () {
      function HttpUrlEncodingCodec() {}

      var _proto2 = HttpUrlEncodingCodec.prototype;

      /**
       * Encodes a key name for a URL parameter or query-string.
       * @param {?} key The key name.
       * @return {?} The encoded key name.
       */
      _proto2.encodeKey = function encodeKey(key) {
        return standardEncoding(key);
      }
      /**
       * Encodes the value of a URL parameter or query-string.
       * @param {?} value The value.
       * @return {?} The encoded value.
       */
      ;

      _proto2.encodeValue = function encodeValue(value) {
        return standardEncoding(value);
      }
      /**
       * Decodes an encoded URL parameter or query-string key.
       * @param {?} key The encoded key name.
       * @return {?} The decoded key name.
       */
      ;

      _proto2.decodeKey = function decodeKey(key) {
        return decodeURIComponent(key);
      }
      /**
       * Decodes an encoded URL parameter or query-string value.
       * @param {?} value The encoded value.
       * @return {?} The decoded value.
       */
      ;

      _proto2.decodeValue = function decodeValue(value) {
        return decodeURIComponent(value);
      };

      return HttpUrlEncodingCodec;
    }();
    /**
     * @param {?} rawParams
     * @param {?} codec
     * @return {?}
     */


    function paramParser(rawParams, codec) {
      /** @type {?} */
      var map = new Map();

      if (rawParams.length > 0) {
        /** @type {?} */
        var params = rawParams.split('&');
        params.forEach(
        /**
        * @param {?} param
        * @return {?}
        */
        function (param) {
          /** @type {?} */
          var eqIdx = param.indexOf('=');

          var _ref = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))],
              key = _ref[0],
              val = _ref[1];
          /** @type {?} */


          var list = map.get(key) || [];
          list.push(val);
          map.set(key, list);
        });
      }

      return map;
    }
    /**
     * @param {?} v
     * @return {?}
     */


    function standardEncoding(v) {
      return encodeURIComponent(v).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%2B/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
    }
    /**
     * @record
     */


    function Update$1() {}

    if (false) {}
    /**
     * Options used to construct an `HttpParams` instance.
     *
     * \@publicApi
     * @record
     */


    function HttpParamsOptions() {}

    if (false) {}
    /**
     * An HTTP request/response body that represents serialized parameters,
     * per the MIME type `application/x-www-form-urlencoded`.
     *
     * This class is immutable; all mutation operations return a new instance.
     *
     * \@publicApi
     */


    var HttpParams =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} options
       */
      function HttpParams(options) {
        var _this5 = this;

        if (options === void 0) {
          options =
          /** @type {?} */
          {};
        }

        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();

        if (!!options.fromString) {
          if (!!options.fromObject) {
            throw new Error("Cannot specify both fromString and fromObject.");
          }

          this.map = paramParser(options.fromString, this.encoder);
        } else if (!!options.fromObject) {
          this.map = new Map();
          Object.keys(options.fromObject).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var value =
            /** @type {?} */
            options.fromObject[key];

            /** @type {?} */
            _this5.map.set(key, Array.isArray(value) ? value : [value]);
          });
        } else {
          this.map = null;
        }
      }
      /**
       * Reports whether the body includes one or more values for a given parameter.
       * @param {?} param The parameter name.
       * @return {?} True if the parameter has one or more values,
       * false if it has no value or is not present.
       */


      var _proto3 = HttpParams.prototype;

      _proto3.has = function has(param) {
        this.init();
        return (
          /** @type {?} */
          this.map.has(param)
        );
      }
      /**
       * Retrieves the first value for a parameter.
       * @param {?} param The parameter name.
       * @return {?} The first value of the given parameter,
       * or `null` if the parameter is not present.
       */
      ;

      _proto3.get = function get(param) {
        this.init();
        /** @type {?} */

        var res =
        /** @type {?} */
        this.map.get(param);
        return !!res ? res[0] : null;
      }
      /**
       * Retrieves all values for a  parameter.
       * @param {?} param The parameter name.
       * @return {?} All values in a string array,
       * or `null` if the parameter not present.
       */
      ;

      _proto3.getAll = function getAll(param) {
        this.init();
        return (
          /** @type {?} */
          this.map.get(param) || null
        );
      }
      /**
       * Retrieves all the parameters for this body.
       * @return {?} The parameter names in a string array.
       */
      ;

      _proto3.keys = function keys() {
        this.init();
        return Array.from(
        /** @type {?} */
        this.map.keys());
      }
      /**
       * Appends a new value to existing values for a parameter.
       * @param {?} param The parameter name.
       * @param {?} value The new value to add.
       * @return {?} A new body with the appended value.
       */
      ;

      _proto3.append = function append(param, value) {
        return this.clone({
          param: param,
          value: value,
          op: 'a'
        });
      }
      /**
       * Replaces the value for a parameter.
       * @param {?} param The parameter name.
       * @param {?} value The new value.
       * @return {?} A new body with the new value.
       */
      ;

      _proto3.set = function set(param, value) {
        return this.clone({
          param: param,
          value: value,
          op: 's'
        });
      }
      /**
       * Removes a given value or all values from a parameter.
       * @param {?} param The parameter name.
       * @param {?=} value The value to remove, if provided.
       * @return {?} A new body with the given value removed, or with all values
       * removed if no value is specified.
       */
      ;

      _proto3.delete = function _delete(param, value) {
        return this.clone({
          param: param,
          value: value,
          op: 'd'
        });
      }
      /**
       * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
       * separated by `&`s.
       * @return {?}
       */
      ;

      _proto3.toString = function toString() {
        var _this6 = this;

        this.init();
        return this.keys().map(
        /**
        * @param {?} key
        * @return {?}
        */
        function (key) {
          /** @type {?} */
          var eKey = _this6.encoder.encodeKey(key);

          return (
            /** @type {?} */

            /** @type {?} */
            _this6.map.get(key).map(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return eKey + '=' + _this6.encoder.encodeValue(value);
            }).join('&')
          );
        }).join('&');
      }
      /**
       * @private
       * @param {?} update
       * @return {?}
       */
      ;

      _proto3.clone = function clone(update) {
        /** @type {?} */
        var clone = new HttpParams(
        /** @type {?} */
        {
          encoder: this.encoder
        });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
      }
      /**
       * @private
       * @return {?}
       */
      ;

      _proto3.init = function init() {
        var _this7 = this;

        if (this.map === null) {
          this.map = new Map();
        }

        if (this.cloneFrom !== null) {
          this.cloneFrom.init();
          this.cloneFrom.keys().forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return (
              /** @type {?} */
              _this7.map.set(key,
              /** @type {?} */

              /** @type {?} */

              /** @type {?} */
              _this7.cloneFrom.map.get(key))
            );
          });

          /** @type {?} */
          this.updates.forEach(
          /**
          * @param {?} update
          * @return {?}
          */
          function (update) {
            switch (update.op) {
              case 'a':
              case 's':
                /** @type {?} */
                var base = (update.op === 'a' ?
                /** @type {?} */
                _this7.map.get(update.param) : undefined) || [];
                base.push(
                /** @type {?} */
                update.value);

                /** @type {?} */
                _this7.map.set(update.param, base);

                break;

              case 'd':
                if (update.value !== undefined) {
                  /** @type {?} */
                  var _base =
                  /** @type {?} */
                  _this7.map.get(update.param) || [];
                  /** @type {?} */


                  var idx = _base.indexOf(update.value);

                  if (idx !== -1) {
                    _base.splice(idx, 1);
                  }

                  if (_base.length > 0) {
                    /** @type {?} */
                    _this7.map.set(update.param, _base);
                  } else {
                    /** @type {?} */
                    _this7.map.delete(update.param);
                  }
                } else {
                  /** @type {?} */
                  _this7.map.delete(update.param);

                  break;
                }

            }
          });
          this.cloneFrom = this.updates = null;
        }
      };

      return HttpParams;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Construction interface for `HttpRequest`s.
     *
     * All values are optional and will override default values if provided.
     * @record
     */


    function HttpRequestInit() {}

    if (false) {}
    /**
     * Determine whether the given HTTP method may include a body.
     * @param {?} method
     * @return {?}
     */


    function mightHaveBody(method) {
      switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
          return false;

        default:
          return true;
      }
    }
    /**
     * Safely assert whether the given value is an ArrayBuffer.
     *
     * In some execution environments ArrayBuffer is not defined.
     * @param {?} value
     * @return {?}
     */


    function isArrayBuffer(value) {
      return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
    }
    /**
     * Safely assert whether the given value is a Blob.
     *
     * In some execution environments Blob is not defined.
     * @param {?} value
     * @return {?}
     */


    function isBlob(value) {
      return typeof Blob !== 'undefined' && value instanceof Blob;
    }
    /**
     * Safely assert whether the given value is a FormData instance.
     *
     * In some execution environments FormData is not defined.
     * @param {?} value
     * @return {?}
     */


    function isFormData(value) {
      return typeof FormData !== 'undefined' && value instanceof FormData;
    }
    /**
     * An outgoing HTTP request with an optional typed body.
     *
     * `HttpRequest` represents an outgoing request, including URL, method,
     * headers, body, and other request configuration options. Instances should be
     * assumed to be immutable. To modify a `HttpRequest`, the `clone`
     * method should be used.
     *
     * \@publicApi
     * @template T
     */


    var HttpRequest =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} method
       * @param {?} url
       * @param {?=} third
       * @param {?=} fourth
       */
      function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */

        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */

        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */

        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */

        this.responseType = 'json';
        this.method = method.toUpperCase(); // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.

        /** @type {?} */

        var options; // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.

        if (mightHaveBody(this.method) || !!fourth) {
          // Body is the third argument, options are the fourth.
          this.body = third !== undefined ?
          /** @type {?} */
          third : null;
          options = fourth;
        } else {
          // No body required, options are the third argument. The body stays null.
          options =
          /** @type {?} */
          third;
        } // If options have been passed, interpret them.


        if (options) {
          // Normalize reportProgress and withCredentials.
          this.reportProgress = !!options.reportProgress;
          this.withCredentials = !!options.withCredentials; // Override default response type of 'json' if one is provided.

          if (!!options.responseType) {
            this.responseType = options.responseType;
          } // Override headers if they're provided.


          if (!!options.headers) {
            this.headers = options.headers;
          }

          if (!!options.params) {
            this.params = options.params;
          }
        } // If no headers have been passed in, construct a new HttpHeaders instance.


        if (!this.headers) {
          this.headers = new HttpHeaders();
        } // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.


        if (!this.params) {
          this.params = new HttpParams();
          this.urlWithParams = url;
        } else {
          // Encode the parameters to a string in preparation for inclusion in the URL.

          /** @type {?} */
          var params = this.params.toString();

          if (params.length === 0) {
            // No parameters, the visible URL is just the URL given at creation time.
            this.urlWithParams = url;
          } else {
            // Does the URL already have query parameters? Look for '?'.

            /** @type {?} */
            var qIdx = url.indexOf('?'); // There are 3 cases to handle:
            // 1) No existing parameters -> append '?' followed by params.
            // 2) '?' exists and is followed by existing query string ->
            //    append '&' followed by params.
            // 3) '?' exists at the end of the url -> append params directly.
            // This basically amounts to determining the character, if any, with
            // which to join the URL and parameters.

            /** @type {?} */

            var sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
            this.urlWithParams = url + sep + params;
          }
        }
      }
      /**
       * Transform the free-form body into a serialized format suitable for
       * transmission to the server.
       * @return {?}
       */


      var _proto4 = HttpRequest.prototype;

      _proto4.serializeBody = function serializeBody() {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
          return null;
        } // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.


        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || typeof this.body === 'string') {
          return this.body;
        } // Check whether the body is an instance of HttpUrlEncodedParams.


        if (this.body instanceof HttpParams) {
          return this.body.toString();
        } // Check whether the body is an object or array, and serialize with JSON if so.


        if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
          return JSON.stringify(this.body);
        } // Fall back on toString() for everything else.


        return (
          /** @type {?} */
          this.body.toString()
        );
      }
      /**
       * Examine the body and attempt to infer an appropriate MIME type
       * for it.
       *
       * If no such type can be inferred, this method will return `null`.
       * @return {?}
       */
      ;

      _proto4.detectContentTypeHeader = function detectContentTypeHeader() {
        // An empty body has no content type.
        if (this.body === null) {
          return null;
        } // FormData bodies rely on the browser's content type assignment.


        if (isFormData(this.body)) {
          return null;
        } // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.


        if (isBlob(this.body)) {
          return this.body.type || null;
        } // Array buffers have unknown contents and thus no type can be inferred.


        if (isArrayBuffer(this.body)) {
          return null;
        } // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.


        if (typeof this.body === 'string') {
          return 'text/plain';
        } // `HttpUrlEncodedParams` has its own content-type.


        if (this.body instanceof HttpParams) {
          return 'application/x-www-form-urlencoded;charset=UTF-8';
        } // Arrays, objects, and numbers will be encoded as JSON.


        if (typeof this.body === 'object' || typeof this.body === 'number' || Array.isArray(this.body)) {
          return 'application/json';
        } // No type could be inferred.


        return null;
      }
      /**
       * @param {?=} update
       * @return {?}
       */
      ;

      _proto4.clone = function clone(update) {
        if (update === void 0) {
          update = {};
        }

        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.

        /** @type {?} */
        var method = update.method || this.method;
        /** @type {?} */

        var url = update.url || this.url;
        /** @type {?} */

        var responseType = update.responseType || this.responseType; // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.

        /** @type {?} */

        var body = update.body !== undefined ? update.body : this.body; // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.

        /** @type {?} */

        var withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
        /** @type {?} */

        var reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress; // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.

        /** @type {?} */

        var headers = update.headers || this.headers;
        /** @type {?} */

        var params = update.params || this.params; // Check whether the caller has asked to add headers.

        if (update.setHeaders !== undefined) {
          // Set every requested header.
          headers = Object.keys(update.setHeaders).reduce(
          /**
          * @param {?} headers
          * @param {?} name
          * @return {?}
          */
          function (headers, name) {
            return headers.set(name,
            /** @type {?} */
            update.setHeaders[name]);
          }, headers);
        } // Check whether the caller has asked to set params.


        if (update.setParams) {
          // Set every requested param.
          params = Object.keys(update.setParams).reduce(
          /**
          * @param {?} params
          * @param {?} param
          * @return {?}
          */
          function (params, param) {
            return params.set(param,
            /** @type {?} */
            update.setParams[param]);
          }, params);
        } // Finally, construct the new HttpRequest using the pieces from above.


        return new HttpRequest(method, url, body, {
          params: params,
          headers: headers,
          reportProgress: reportProgress,
          responseType: responseType,
          withCredentials: withCredentials
        });
      };

      return HttpRequest;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var HttpEventType = {
      /**
       * The request was sent out over the wire.
       */
      Sent: 0,

      /**
       * An upload progress event was received.
       */
      UploadProgress: 1,

      /**
       * The response status code and headers were received.
       */
      ResponseHeader: 2,

      /**
       * A download progress event was received.
       */
      DownloadProgress: 3,

      /**
       * The full response including the body was received.
       */
      Response: 4,

      /**
       * A custom event from an interceptor or a backend.
       */
      User: 5
    };
    HttpEventType[HttpEventType.Sent] = 'Sent';
    HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
    HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
    HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
    HttpEventType[HttpEventType.Response] = 'Response';
    HttpEventType[HttpEventType.User] = 'User';
    /**
     * Base interface for progress events.
     *
     * \@publicApi
     * @record
     */

    function HttpProgressEvent() {}

    if (false) {}
    /**
     * A download progress event.
     *
     * \@publicApi
     * @record
     */


    function HttpDownloadProgressEvent() {}

    if (false) {}
    /**
     * An upload progress event.
     *
     * \@publicApi
     * @record
     */


    function HttpUploadProgressEvent() {}

    if (false) {}
    /**
     * An event indicating that the request was sent to the server. Useful
     * when a request may be retried multiple times, to distinguish between
     * retries on the final event stream.
     *
     * \@publicApi
     * @record
     */


    function HttpSentEvent() {}

    if (false) {}
    /**
     * A user-defined event.
     *
     * Grouping all custom events under this type ensures they will be handled
     * and forwarded by all implementations of interceptors.
     *
     * \@publicApi
     * @record
     * @template T
     */


    function HttpUserEvent() {}

    if (false) {}
    /**
     * An error that represents a failed attempt to JSON.parse text coming back
     * from the server.
     *
     * It bundles the Error object with the actual response body that failed to parse.
     *
     *
     * @record
     */


    function HttpJsonParseError() {}

    if (false) {}
    /**
     * Base class for both `HttpResponse` and `HttpHeaderResponse`.
     *
     * \@publicApi
     * @abstract
     */


    var HttpResponseBase =
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
      if (defaultStatus === void 0) {
        defaultStatus = 200;
      }

      if (defaultStatusText === void 0) {
        defaultStatusText = 'OK';
      }

      // If the hash has values passed, use them to initialize the response.
      // Otherwise use the default values.
      this.headers = init.headers || new HttpHeaders();
      this.status = init.status !== undefined ? init.status : defaultStatus;
      this.statusText = init.statusText || defaultStatusText;
      this.url = init.url || null; // Cache the ok value to avoid defining a getter.

      this.ok = this.status >= 200 && this.status < 300;
    };

    if (false) {}
    /**
     * A partial HTTP response which only includes the status and header data,
     * but no response body.
     *
     * `HttpHeaderResponse` is a `HttpEvent` available on the response
     * event stream, only when progress events are requested.
     *
     * \@publicApi
     */


    var HttpHeaderResponse =
    /*#__PURE__*/
    function (_HttpResponseBase) {
      _inheritsLoose(HttpHeaderResponse, _HttpResponseBase);

      /**
       * Create a new `HttpHeaderResponse` with the given parameters.
       * @param {?=} init
       */
      function HttpHeaderResponse(init) {
        var _this8;

        if (init === void 0) {
          init = {};
        }

        _this8 = _HttpResponseBase.call(this, init) || this;
        _this8.type = HttpEventType.ResponseHeader;
        return _this8;
      }
      /**
       * Copy this `HttpHeaderResponse`, overriding its contents with the
       * given parameter hash.
       * @param {?=} update
       * @return {?}
       */


      var _proto5 = HttpHeaderResponse.prototype;

      _proto5.clone = function clone(update) {
        if (update === void 0) {
          update = {};
        }

        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
          headers: update.headers || this.headers,
          status: update.status !== undefined ? update.status : this.status,
          statusText: update.statusText || this.statusText,
          url: update.url || this.url || undefined
        });
      };

      return HttpHeaderResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * A full HTTP response, including a typed response body (which may be `null`
     * if one was not returned).
     *
     * `HttpResponse` is a `HttpEvent` available on the response event
     * stream.
     *
     * \@publicApi
     * @template T
     */


    var HttpResponse =
    /*#__PURE__*/
    function (_HttpResponseBase2) {
      _inheritsLoose(HttpResponse, _HttpResponseBase2);

      /**
       * Construct a new `HttpResponse`.
       * @param {?=} init
       */
      function HttpResponse(init) {
        var _this9;

        if (init === void 0) {
          init = {};
        }

        _this9 = _HttpResponseBase2.call(this, init) || this;
        _this9.type = HttpEventType.Response;
        _this9.body = init.body !== undefined ? init.body : null;
        return _this9;
      }
      /**
       * @param {?=} update
       * @return {?}
       */


      var _proto6 = HttpResponse.prototype;

      _proto6.clone = function clone(update) {
        if (update === void 0) {
          update = {};
        }

        return new HttpResponse({
          body: update.body !== undefined ? update.body : this.body,
          headers: update.headers || this.headers,
          status: update.status !== undefined ? update.status : this.status,
          statusText: update.statusText || this.statusText,
          url: update.url || this.url || undefined
        });
      };

      return HttpResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * A response that represents an error or failure, either from a
     * non-successful HTTP status, an error while executing the request,
     * or some other failure which occurred during the parsing of the response.
     *
     * Any error returned on the `Observable` response stream will be
     * wrapped in an `HttpErrorResponse` to provide additional context about
     * the state of the HTTP layer when the error occurred. The error property
     * will contain either a wrapped Error object or the error response returned
     * from the server.
     *
     * \@publicApi
     */


    var HttpErrorResponse =
    /*#__PURE__*/
    function (_HttpResponseBase3) {
      _inheritsLoose(HttpErrorResponse, _HttpResponseBase3);

      /**
       * @param {?} init
       */
      function HttpErrorResponse(init) {
        var _this10;

        // Initialize with a default status of 0 / Unknown Error.
        _this10 = _HttpResponseBase3.call(this, init, 0, 'Unknown Error') || this;
        _this10.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */

        _this10.ok = false; // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.

        if (_this10.status >= 200 && _this10.status < 300) {
          _this10.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        } else {
          _this10.message = "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }

        _this10.error = init.error || null;
        return _this10;
      }

      return HttpErrorResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
     * the given `body`. This function clones the object and adds the body.
     *
     * Note that the `responseType` *options* value is a String that identifies the
     * single data type of the response.
     * A single overload version of the method handles each response type.
     * The value of `responseType` cannot be a union, as the combined signature could imply.
     *
     * @template T
     * @param {?} options
     * @param {?} body
     * @return {?}
     */


    function addBody(options, body) {
      return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials
      };
    }
    /**
     * Performs HTTP requests.
     * This service is available as an injectable class, with methods to perform HTTP requests.
     * Each request method has multiple signatures, and the return type varies based on
     * the signature that is called (mainly the values of `observe` and `responseType`).
     *
     * Note that the `responseType` *options* value is a String that identifies the
     * single data type of the response.
     * A single overload version of the method handles each response type.
     * The value of `responseType` cannot be a union, as the combined signature could imply.
     *
     * \@usageNotes
     * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
     *
     * ### HTTP Request Example
     *
     * ```
     *  // GET heroes whose name contains search term
     * searchHeroes(term: string): observable<Hero[]>{
     *
     *  const params = new HttpParams({fromString: 'name=term'});
     *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
     * }
     * ```
     * ### JSONP Example
     * ```
     * requestJsonp(url, callback = 'callback') {
     *  return this.httpClient.jsonp(this.heroesURL, callback);
     * }
     * ```
     *
     * ### PATCH Example
     * ```
     * // PATCH one of the heroes' name
     * patchHero (id: number, heroName: string): Observable<{}> {
     * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
     *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
     *    .pipe(catchError(this.handleError('patchHero')));
     * }
     * ```
     *
     * @see [HTTP Guide](guide/http)
     *
     * \@publicApi
     */


    var HttpClient =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} handler
       */
      function HttpClient(handler) {
        this.handler = handler;
      }
      /**
       * Constructs an observable for a generic HTTP request that, when subscribed,
       * fires the request through the chain of registered interceptors and on to the
       * server.
       *
       * You can pass an `HttpRequest` directly as the only parameter. In this case,
       * the call returns an observable of the raw `HttpEvent` stream.
       *
       * Alternatively you can pass an HTTP method as the first parameter,
       * a URL string as the second, and an options hash containing the request body as the third.
       * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
       * type of returned observable.
       *   * The `responseType` value determines how a successful response body is parsed.
       *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
       * object as a type parameter to the call.
       *
       * The `observe` value determines the return type, according to what you are interested in
       * observing.
       *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
       * progress events by default.
       *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
       * where the `T` parameter depends on the `responseType` and any optionally provided type
       * parameter.
       *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
       *
       * @param {?} first
       * @param {?=} url
       * @param {?=} options
       * @return {?}
       */


      var _proto7 = HttpClient.prototype;

      _proto7.request = function request(first, url, options) {
        var _this11 = this;

        if (options === void 0) {
          options = {};
        }

        /** @type {?} */
        var req; // First, check whether the primary argument is an instance of `HttpRequest`.

        if (first instanceof HttpRequest) {
          // It is. The other arguments must be undefined (per the signatures) and can be
          // ignored.
          req =
          /** @type {?} */
          first;
        } else {
          // It's a string, so it represents a URL. Construct a request based on it,
          // and incorporate the remaining arguments (assuming `GET` unless a method is
          // provided.
          // Figure out the headers.

          /** @type {?} */
          var headers = undefined;

          if (options.headers instanceof HttpHeaders) {
            headers = options.headers;
          } else {
            headers = new HttpHeaders(options.headers);
          } // Sort out parameters.

          /** @type {?} */


          var params = undefined;

          if (!!options.params) {
            if (options.params instanceof HttpParams) {
              params = options.params;
            } else {
              params = new HttpParams(
              /** @type {?} */
              {
                fromObject: options.params
              });
            }
          } // Construct the request.


          req = new HttpRequest(first,
          /** @type {?} */
          url, options.body !== undefined ? options.body : null, {
            headers: headers,
            params: params,
            reportProgress: options.reportProgress,
            // By default, JSON is assumed to be returned for all calls.
            responseType: options.responseType || 'json',
            withCredentials: options.withCredentials
          });
        } // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).

        /** @type {?} */


        var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(
        /**
        * @param {?} req
        * @return {?}
        */
        function (req) {
          return _this11.handler.handle(req);
        })); // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.

        if (first instanceof HttpRequest || options.observe === 'events') {
          return events$;
        } // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).

        /** @type {?} */


        var res$ =
        /** @type {?} */
        events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event instanceof HttpResponse;
        })); // Decide which stream to return.

        switch (options.observe || 'body') {
          case 'body':
            // The requested stream is the body. Map the response stream to the response
            // body. This could be done more simply, but a misbehaving interceptor might
            // transform the response body into a different format and ignore the requested
            // responseType. Guard against this by validating that the response is of the
            // requested type.
            switch (req.responseType) {
              case 'arraybuffer':
                return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                /**
                * @param {?} res
                * @return {?}
                */
                function (res) {
                  // Validate that the body is an ArrayBuffer.
                  if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                    throw new Error('Response is not an ArrayBuffer.');
                  }

                  return res.body;
                }));

              case 'blob':
                return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                /**
                * @param {?} res
                * @return {?}
                */
                function (res) {
                  // Validate that the body is a Blob.
                  if (res.body !== null && !(res.body instanceof Blob)) {
                    throw new Error('Response is not a Blob.');
                  }

                  return res.body;
                }));

              case 'text':
                return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                /**
                * @param {?} res
                * @return {?}
                */
                function (res) {
                  // Validate that the body is a string.
                  if (res.body !== null && typeof res.body !== 'string') {
                    throw new Error('Response is not a string.');
                  }

                  return res.body;
                }));

              case 'json':
              default:
                // No validation needed for JSON responses, as they can be of any type.
                return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                /**
                * @param {?} res
                * @return {?}
                */
                function (res) {
                  return res.body;
                }));
            }

          case 'response':
            // The response stream was requested directly, so return it.
            return res$;

          default:
            // Guard against new future observe types being added.
            throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `DELETE` request to execute on the server. See the individual overloads for
       * details on the return type.
       *
       * @param {?} url     The endpoint URL.
       * @param {?=} options The HTTP options to send with the request.
       *
       * @return {?}
       */
      ;

      _proto7.delete = function _delete(url, options) {
        if (options === void 0) {
          options = {};
        }

        return this.request('DELETE', url,
        /** @type {?} */
        options);
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `GET` request to execute on the server. See the individual overloads for
       * details on the return type.
       * @param {?} url
       * @param {?=} options
       * @return {?}
       */
      ;

      _proto7.get = function get(url, options) {
        if (options === void 0) {
          options = {};
        }

        return this.request('GET', url,
        /** @type {?} */
        options);
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `HEAD` request to execute on the server. The `HEAD` method returns
       * meta information about the resource without transferring the
       * resource itself. See the individual overloads for
       * details on the return type.
       * @param {?} url
       * @param {?=} options
       * @return {?}
       */
      ;

      _proto7.head = function head(url, options) {
        if (options === void 0) {
          options = {};
        }

        return this.request('HEAD', url,
        /** @type {?} */
        options);
      }
      /**
       * Constructs an `Observable` that, when subscribed, causes a request with the special method
       * `JSONP` to be dispatched via the interceptor pipeline.
       * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
       * API endpoints that don't support newer,
       * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
       * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
       * requests even if the API endpoint is not located on the same domain (origin) as the client-side
       * application making the request.
       * The endpoint API must support JSONP callback for JSONP requests to work.
       * The resource API returns the JSON response wrapped in a callback function.
       * You can pass the callback function name as one of the query parameters.
       * Note that JSONP requests can only be used with `GET` requests.
       *
       * @template T
       * @param {?} url The resource URL.
       * @param {?} callbackParam The callback function name.
       *
       * @return {?}
       */
      ;

      _proto7.jsonp = function jsonp(url, callbackParam) {
        return this.request('JSONP', url, {
          params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
          observe: 'body',
          responseType: 'json'
        });
      }
      /**
       * Constructs an `Observable` that, when subscribed, causes the configured
       * `OPTIONS` request to execute on the server. This method allows the client
       * to determine the supported HTTP methods and other capabilites of an endpoint,
       * without implying a resource action. See the individual overloads for
       * details on the return type.
       * @param {?} url
       * @param {?=} options
       * @return {?}
       */
      ;

      _proto7.options = function options(url, _options) {
        if (_options === void 0) {
          _options = {};
        }

        return this.request('OPTIONS', url,
        /** @type {?} */
        _options);
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `PATCH` request to execute on the server. See the individual overloads for
       * details on the return type.
       * @param {?} url
       * @param {?} body
       * @param {?=} options
       * @return {?}
       */
      ;

      _proto7.patch = function patch(url, body, options) {
        if (options === void 0) {
          options = {};
        }

        return this.request('PATCH', url, addBody(options, body));
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `POST` request to execute on the server. The server responds with the location of
       * the replaced resource. See the individual overloads for
       * details on the return type.
       * @param {?} url
       * @param {?} body
       * @param {?=} options
       * @return {?}
       */
      ;

      _proto7.post = function post(url, body, options) {
        if (options === void 0) {
          options = {};
        }

        return this.request('POST', url, addBody(options, body));
      }
      /**
       * Constructs an observable that, when subscribed, causes the configured
       * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
       * with a new set of values.
       * See the individual overloads for details on the return type.
       * @param {?} url
       * @param {?} body
       * @param {?=} options
       * @return {?}
       */
      ;

      _proto7.put = function put(url, body, options) {
        if (options === void 0) {
          options = {};
        }

        return this.request('PUT', url, addBody(options, body));
      };

      return HttpClient;
    }();

    HttpClient.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpClient.ctorParameters = function () {
      return [{
        type: HttpHandler
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Intercepts and handles an `HttpRequest` or `HttpResponse`.
     *
     * Most interceptors transform the outgoing request before passing it to the
     * next interceptor in the chain, by calling `next.handle(transformedReq)`.
     * An interceptor may transform the
     * response event stream as well, by applying additional RxJS operators on the stream
     * returned by `next.handle()`.
     *
     * More rarely, an interceptor may handle the request entirely,
     * and compose a new event stream instead of invoking `next.handle()`. This is an
     * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
     *
     * It is also rare but valid for an interceptor to return multiple responses on the
     * event stream for a single request.
     *
     * \@publicApi
     *
     * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
     *
     * \@usageNotes
     *
     * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
     * only in your `AppModule`, and add the interceptors to the root application injector .
     * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
     * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the interceptors
     * provided in the root module.
     *
     * @record
     */


    function HttpInterceptor() {}

    if (false) {}
    /**
     * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
     *
     *
     */


    var HttpInterceptorHandler =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} next
       * @param {?} interceptor
       */
      function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
      }
      /**
       * @param {?} req
       * @return {?}
       */


      var _proto8 = HttpInterceptorHandler.prototype;

      _proto8.handle = function handle(req) {
        return this.interceptor.intercept(req, this.next);
      };

      return HttpInterceptorHandler;
    }();

    if (false) {}
    /**
     * A multi-provider token that represents the array of registered
     * `HttpInterceptor` objects.
     *
     * \@publicApi
     * @type {?}
     */


    var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');

    var NoopInterceptor =
    /*#__PURE__*/
    function () {
      function NoopInterceptor() {}

      var _proto9 = NoopInterceptor.prototype;

      /**
       * @param {?} req
       * @param {?} next
       * @return {?}
       */
      _proto9.intercept = function intercept(req, next) {
        return next.handle(req);
      };

      return NoopInterceptor;
    }();

    NoopInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Every request made through JSONP needs a callback name that's unique across the
    // whole page. Each request is assigned an id and the callback name is constructed
    // from that. The next id to be assigned is tracked in a global variable here that
    // is shared among all applications on the page.

    /** @type {?} */

    var nextRequestId = 0; // Error text given when a JSONP script is injected, but doesn't invoke the callback
    // passed in its URL.

    /** @type {?} */

    var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'; // Error text given when a request is passed to the JsonpClientBackend that doesn't
    // have a request method JSONP.

    /** @type {?} */

    var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
    /** @type {?} */

    var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
    /**
     * DI token/abstract type representing a map of JSONP callbacks.
     *
     * In the browser, this should always be the `window` object.
     *
     *
     * @abstract
     */

    var JsonpCallbackContext = function JsonpCallbackContext() {};
    /**
     * Processes an `HttpRequest` with the JSONP method,
     * by performing JSONP style requests.
     * @see `HttpHandler`
     * @see `HttpXhrBackend`
     *
     * \@publicApi
     */


    var JsonpClientBackend =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} callbackMap
       * @param {?} document
       */
      function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
      }
      /**
       * Get the name of the next callback method, by incrementing the global `nextRequestId`.
       * @private
       * @return {?}
       */


      var _proto10 = JsonpClientBackend.prototype;

      _proto10.nextCallback = function nextCallback() {
        return "ng_jsonp_callback_" + nextRequestId++;
      }
      /**
       * Processes a JSONP request and returns an event stream of the results.
       * @param {?} req The request object.
       * @return {?} An observable of the response events.
       *
       */
      ;

      _proto10.handle = function handle(req) {
        var _this12 = this;

        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
          throw new Error(JSONP_ERR_WRONG_METHOD);
        } else if (req.responseType !== 'json') {
          throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        } // Everything else happens inside the Observable boundary.


        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          // The first step to make a request is to generate the callback name, and replace the
          // callback placeholder in the URL with the name. Care has to be taken here to ensure
          // a trailing &, if matched, gets inserted back into the URL in the correct place.

          /** @type {?} */
          var callback = _this12.nextCallback();
          /** @type {?} */


          var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1"); // Construct the <script> tag and point it at the URL.

          /** @type {?} */

          var node = _this12.document.createElement('script');

          node.src = url; // A JSONP request requires waiting for multiple callbacks. These variables
          // are closed over and track state across those callbacks.
          // The response object, if one has been received, or null otherwise.

          /** @type {?} */

          var body = null; // Whether the response callback has been called.

          /** @type {?} */

          var finished = false; // Whether the request has been cancelled (and thus any other callbacks)
          // should be ignored.

          /** @type {?} */

          var cancelled = false; // Set the response callback in this.callbackMap (which will be the window
          // object in the browser. The script being loaded via the <script> tag will
          // eventually call this callback.

          _this12.callbackMap[callback] =
          /**
          * @param {?=} data
          * @return {?}
          */
          function (data) {
            // Data has been received from the JSONP script. Firstly, delete this callback.
            delete _this12.callbackMap[callback]; // Next, make sure the request wasn't cancelled in the meantime.

            if (cancelled) {
              return;
            } // Set state to indicate data was received.


            body = data;
            finished = true;
          }; // cleanup() is a utility closure that removes the <script> from the page and
          // the response callback from the window. This logic is used in both the
          // success, error, and cancellation paths, so it's extracted out for convenience.

          /** @type {?} */


          var cleanup =
          /**
          * @return {?}
          */
          function cleanup() {
            // Remove the <script> tag if it's still on the page.
            if (node.parentNode) {
              node.parentNode.removeChild(node);
            } // Remove the response callback from the callbackMap (window object in the
            // browser).


            delete _this12.callbackMap[callback];
          }; // onLoad() is the success callback which runs after the response callback
          // if the JSONP script loads successfully. The event itself is unimportant.
          // If something went wrong, onLoad() may run without the response callback
          // having been invoked.

          /** @type {?} */


          var onLoad =
          /**
          * @param {?} event
          * @return {?}
          */
          function onLoad(event) {
            // Do nothing if the request has been cancelled.
            if (cancelled) {
              return;
            } // Cleanup the page.


            cleanup(); // Check whether the response callback has run.

            if (!finished) {
              // It hasn't, something went wrong with the request. Return an error via
              // the Observable error path. All JSONP errors have status 0.
              observer.error(new HttpErrorResponse({
                url: url,
                status: 0,
                statusText: 'JSONP Error',
                error: new Error(JSONP_ERR_NO_CALLBACK)
              }));
              return;
            } // Success. body either contains the response body or null if none was
            // returned.


            observer.next(new HttpResponse({
              body: body,
              status: 200,
              statusText: 'OK',
              url: url
            })); // Complete the stream, the response is over.

            observer.complete();
          }; // onError() is the error callback, which runs if the script returned generates
          // a Javascript error. It emits the error via the Observable error channel as
          // a HttpErrorResponse.

          /** @type {?} */


          var onError =
          /**
          * @param {?} error
          * @return {?}
          */
          function onError(error) {
            // If the request was already cancelled, no need to emit anything.
            if (cancelled) {
              return;
            }

            cleanup(); // Wrap the error in a HttpErrorResponse.

            observer.error(new HttpErrorResponse({
              error: error,
              status: 0,
              statusText: 'JSONP Error',
              url: url
            }));
          }; // Subscribe to both the success (load) and error events on the <script> tag,
          // and add it to the page.


          node.addEventListener('load', onLoad);
          node.addEventListener('error', onError);

          _this12.document.body.appendChild(node); // The request has now been successfully sent.


          observer.next({
            type: HttpEventType.Sent
          }); // Cancellation handler.

          return (
            /**
            * @return {?}
            */
            function () {
              // Track the cancellation so event listeners won't do anything even if already scheduled.
              cancelled = true; // Remove the event listeners so they won't run if the events later fire.

              node.removeEventListener('load', onLoad);
              node.removeEventListener('error', onError); // And finally, clean up the page.

              cleanup();
            }
          );
        });
      };

      return JsonpClientBackend;
    }();

    JsonpClientBackend.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonpClientBackend.ctorParameters = function () {
      return [{
        type: JsonpCallbackContext
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    if (false) {}
    /**
     * Identifies requests with the method JSONP and
     * shifts them to the `JsonpClientBackend`.
     *
     * @see `HttpInterceptor`
     *
     * \@publicApi
     */


    var JsonpInterceptor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} jsonp
       */
      function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
      }
      /**
       * Identifies and handles a given JSONP request.
       * @param {?} req The outgoing request object to handle.
       * @param {?} next The next interceptor in the chain, or the backend
       * if no interceptors remain in the chain.
       * @return {?} An observable of the event stream.
       */


      var _proto11 = JsonpInterceptor.prototype;

      _proto11.intercept = function intercept(req, next) {
        if (req.method === 'JSONP') {
          return this.jsonp.handle(
          /** @type {?} */
          req);
        } // Fall through for normal HTTP requests.


        return next.handle(req);
      };

      return JsonpInterceptor;
    }();

    JsonpInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonpInterceptor.ctorParameters = function () {
      return [{
        type: JsonpClientBackend
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var XSSI_PREFIX = /^\)\]\}',?\n/;
    /**
     * Determine an appropriate URL for the response, by checking either
     * XMLHttpRequest.responseURL or the X-Request-URL header.
     * @param {?} xhr
     * @return {?}
     */

    function getResponseUrl(xhr) {
      if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
      }

      if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
      }

      return null;
    }
    /**
     * A wrapper around the `XMLHttpRequest` constructor.
     *
     * \@publicApi
     * @abstract
     */


    var XhrFactory = function XhrFactory() {};

    if (false) {}
    /**
     * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
     *
     */


    var BrowserXhr =
    /*#__PURE__*/
    function () {
      function BrowserXhr() {}
      /**
       * @return {?}
       */


      var _proto12 = BrowserXhr.prototype;

      _proto12.build = function build() {
        return (
          /** @type {?} */
          new XMLHttpRequest()
        );
      };

      return BrowserXhr;
    }();

    BrowserXhr.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    BrowserXhr.ctorParameters = function () {
      return [];
    };
    /**
     * Tracks a response from the server that does not yet have a body.
     * @record
     */


    function PartialResponse() {}

    if (false) {}
    /**
     * Uses `XMLHttpRequest` to send requests to a backend server.
     * @see `HttpHandler`
     * @see `JsonpClientBackend`
     *
     * \@publicApi
     */


    var HttpXhrBackend =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} xhrFactory
       */
      function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
      }
      /**
       * Processes a request and returns a stream of response events.
       * @param {?} req The request object.
       * @return {?} An observable of the response events.
       */


      var _proto13 = HttpXhrBackend.prototype;

      _proto13.handle = function handle(req) {
        var _this13 = this;

        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
          throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        } // Everything happens on Observable subscription.


        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          // Start by setting up the XHR object with request method, URL, and withCredentials flag.

          /** @type {?} */
          var xhr = _this13.xhrFactory.build();

          xhr.open(req.method, req.urlWithParams);

          if (!!req.withCredentials) {
            xhr.withCredentials = true;
          } // Add all the requested headers.


          req.headers.forEach(
          /**
          * @param {?} name
          * @param {?} values
          * @return {?}
          */
          function (name, values) {
            return xhr.setRequestHeader(name, values.join(','));
          }); // Add an Accept header if one isn't present already.

          if (!req.headers.has('Accept')) {
            xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
          } // Auto-detect the Content-Type header if one isn't present already.


          if (!req.headers.has('Content-Type')) {
            /** @type {?} */
            var detectedType = req.detectContentTypeHeader(); // Sometimes Content-Type detection fails.

            if (detectedType !== null) {
              xhr.setRequestHeader('Content-Type', detectedType);
            }
          } // Set the responseType if one was requested.


          if (req.responseType) {
            /** @type {?} */
            var responseType = req.responseType.toLowerCase(); // JSON responses need to be processed as text. This is because if the server
            // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
            // xhr.response will be null, and xhr.responseText cannot be accessed to
            // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
            // is parsed by first requesting text and then applying JSON.parse.

            xhr.responseType =
            /** @type {?} */
            responseType !== 'json' ? responseType : 'text';
          } // Serialize the request body if one is present. If not, this will be set to null.

          /** @type {?} */


          var reqBody = req.serializeBody(); // If progress events are enabled, response headers will be delivered
          // in two events - the HttpHeaderResponse event and the full HttpResponse
          // event. However, since response headers don't change in between these
          // two events, it doesn't make sense to parse them twice. So headerResponse
          // caches the data extracted from the response whenever it's first parsed,
          // to ensure parsing isn't duplicated.

          /** @type {?} */

          var headerResponse = null; // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
          // state, and memoizes it into headerResponse.

          /** @type {?} */

          var partialFromXhr =
          /**
          * @return {?}
          */
          function partialFromXhr() {
            if (headerResponse !== null) {
              return headerResponse;
            } // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).

            /** @type {?} */


            var status = xhr.status === 1223 ? 204 : xhr.status;
            /** @type {?} */

            var statusText = xhr.statusText || 'OK'; // Parse headers from XMLHttpRequest - this step is lazy.

            /** @type {?} */

            var headers = new HttpHeaders(xhr.getAllResponseHeaders()); // Read the response URL from the XMLHttpResponse instance and fall back on the
            // request URL.

            /** @type {?} */

            var url = getResponseUrl(xhr) || req.url; // Construct the HttpHeaderResponse and memoize it.

            headerResponse = new HttpHeaderResponse({
              headers: headers,
              status: status,
              statusText: statusText,
              url: url
            });
            return headerResponse;
          }; // Next, a few closures are defined for the various events which XMLHttpRequest can
          // emit. This allows them to be unregistered as event listeners later.
          // First up is the load event, which represents a response being fully available.

          /** @type {?} */


          var onLoad =
          /**
          * @return {?}
          */
          function onLoad() {
            // Read response state from the memoized partial data.
            var _partialFromXhr = partialFromXhr(),
                headers = _partialFromXhr.headers,
                status = _partialFromXhr.status,
                statusText = _partialFromXhr.statusText,
                url = _partialFromXhr.url; // The body will be read out if present.

            /** @type {?} */


            var body = null;

            if (status !== 204) {
              // Use XMLHttpRequest.response if set, responseText otherwise.
              body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
            } // Normalize another potential bug (this one comes from CORS).


            if (status === 0) {
              status = !!body ? 200 : 0;
            } // ok determines whether the response will be transmitted on the event or
            // error channel. Unsuccessful status codes (not 2xx) will always be errors,
            // but a successful status code can still result in an error if the user
            // asked for JSON data and the body cannot be parsed as such.

            /** @type {?} */


            var ok = status >= 200 && status < 300; // Check whether the body needs to be parsed as JSON (in many cases the browser
            // will have done that already).

            if (req.responseType === 'json' && typeof body === 'string') {
              // Save the original body, before attempting XSSI prefix stripping.

              /** @type {?} */
              var originalBody = body;
              body = body.replace(XSSI_PREFIX, '');

              try {
                // Attempt the parse. If it fails, a parse error should be delivered to the user.
                body = body !== '' ? JSON.parse(body) : null;
              } catch (error) {
                // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                // JSON response. Restore the original body (including any XSSI prefix) to deliver
                // a better error response.
                body = originalBody; // If this was an error request to begin with, leave it as a string, it probably
                // just isn't JSON. Otherwise, deliver the parsing error to the user.

                if (ok) {
                  // Even though the response status was 2xx, this is still an error.
                  ok = false; // The parse error contains the text of the body that failed to parse.

                  body =
                  /** @type {?} */
                  {
                    error: error,
                    text: body
                  };
                }
              }
            }

            if (ok) {
              // A successful response is delivered on the event stream.
              observer.next(new HttpResponse({
                body: body,
                headers: headers,
                status: status,
                statusText: statusText,
                url: url || undefined
              })); // The full body has been received and delivered, no further events
              // are possible. This request is complete.

              observer.complete();
            } else {
              // An unsuccessful request is delivered on the error channel.
              observer.error(new HttpErrorResponse({
                // The error in this case is the response body (error from the server).
                error: body,
                headers: headers,
                status: status,
                statusText: statusText,
                url: url || undefined
              }));
            }
          }; // The onError callback is called when something goes wrong at the network level.
          // Connection timeout, DNS error, offline, etc. These are actual errors, and are
          // transmitted on the error channel.

          /** @type {?} */


          var onError =
          /**
          * @param {?} error
          * @return {?}
          */
          function onError(error) {
            var _partialFromXhr2 = partialFromXhr(),
                url = _partialFromXhr2.url;
            /** @type {?} */


            var res = new HttpErrorResponse({
              error: error,
              status: xhr.status || 0,
              statusText: xhr.statusText || 'Unknown Error',
              url: url || undefined
            });
            observer.error(res);
          }; // The sentHeaders flag tracks whether the HttpResponseHeaders event
          // has been sent on the stream. This is necessary to track if progress
          // is enabled since the event will be sent on only the first download
          // progerss event.

          /** @type {?} */


          var sentHeaders = false; // The download progress event handler, which is only registered if
          // progress events are enabled.

          /** @type {?} */

          var onDownProgress =
          /**
          * @param {?} event
          * @return {?}
          */
          function onDownProgress(event) {
            // Send the HttpResponseHeaders event if it hasn't been sent already.
            if (!sentHeaders) {
              observer.next(partialFromXhr());
              sentHeaders = true;
            } // Start building the download progress event to deliver on the response
            // event stream.

            /** @type {?} */


            var progressEvent = {
              type: HttpEventType.DownloadProgress,
              loaded: event.loaded
            }; // Set the total number of bytes in the event if it's available.

            if (event.lengthComputable) {
              progressEvent.total = event.total;
            } // If the request was for text content and a partial response is
            // available on XMLHttpRequest, include it in the progress event
            // to allow for streaming reads.


            if (req.responseType === 'text' && !!xhr.responseText) {
              progressEvent.partialText = xhr.responseText;
            } // Finally, fire the event.


            observer.next(progressEvent);
          }; // The upload progress event handler, which is only registered if
          // progress events are enabled.

          /** @type {?} */


          var onUpProgress =
          /**
          * @param {?} event
          * @return {?}
          */
          function onUpProgress(event) {
            // Upload progress events are simpler. Begin building the progress
            // event.

            /** @type {?} */
            var progress = {
              type: HttpEventType.UploadProgress,
              loaded: event.loaded
            }; // If the total number of bytes being uploaded is available, include
            // it.

            if (event.lengthComputable) {
              progress.total = event.total;
            } // Send the event.


            observer.next(progress);
          }; // By default, register for load and error events.


          xhr.addEventListener('load', onLoad);
          xhr.addEventListener('error', onError); // Progress events are only enabled if requested.

          if (req.reportProgress) {
            // Download progress is always enabled if requested.
            xhr.addEventListener('progress', onDownProgress); // Upload progress depends on whether there is a body to upload.

            if (reqBody !== null && xhr.upload) {
              xhr.upload.addEventListener('progress', onUpProgress);
            }
          } // Fire the request, and notify the event stream that it was fired.


          xhr.send(
          /** @type {?} */
          reqBody);
          observer.next({
            type: HttpEventType.Sent
          }); // This is the return from the Observable function, which is the
          // request cancellation handler.

          return (
            /**
            * @return {?}
            */
            function () {
              // On a cancellation, remove all registered event listeners.
              xhr.removeEventListener('error', onError);
              xhr.removeEventListener('load', onLoad);

              if (req.reportProgress) {
                xhr.removeEventListener('progress', onDownProgress);

                if (reqBody !== null && xhr.upload) {
                  xhr.upload.removeEventListener('progress', onUpProgress);
                }
              } // Finally, abort the in-flight request.


              xhr.abort();
            }
          );
        });
      };

      return HttpXhrBackend;
    }();

    HttpXhrBackend.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXhrBackend.ctorParameters = function () {
      return [{
        type: XhrFactory
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
    /** @type {?} */

    var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
    /**
     * Retrieves the current XSRF token to use with the next outgoing request.
     *
     * \@publicApi
     * @abstract
     */

    var HttpXsrfTokenExtractor = function HttpXsrfTokenExtractor() {};

    if (false) {}
    /**
     * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
     */


    var HttpXsrfCookieExtractor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} doc
       * @param {?} platform
       * @param {?} cookieName
       */
      function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */

        this.parseCount = 0;
      }
      /**
       * @return {?}
       */


      var _proto14 = HttpXsrfCookieExtractor.prototype;

      _proto14.getToken = function getToken() {
        if (this.platform === 'server') {
          return null;
        }
        /** @type {?} */


        var cookieString = this.doc.cookie || '';

        if (cookieString !== this.lastCookieString) {
          this.parseCount++;
          this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
          this.lastCookieString = cookieString;
        }

        return this.lastToken;
      };

      return HttpXsrfCookieExtractor;
    }();

    HttpXsrfCookieExtractor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXsrfCookieExtractor.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [XSRF_COOKIE_NAME]
        }]
      }];
    };

    if (false) {}
    /**
     * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
     */


    var HttpXsrfInterceptor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} tokenService
       * @param {?} headerName
       */
      function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
      }
      /**
       * @param {?} req
       * @param {?} next
       * @return {?}
       */


      var _proto15 = HttpXsrfInterceptor.prototype;

      _proto15.intercept = function intercept(req, next) {
        /** @type {?} */
        var lcUrl = req.url.toLowerCase(); // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.

        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
          return next.handle(req);
        }
        /** @type {?} */


        var token = this.tokenService.getToken(); // Be careful not to overwrite an existing header of the same name.

        if (token !== null && !req.headers.has(this.headerName)) {
          req = req.clone({
            headers: req.headers.set(this.headerName, token)
          });
        }

        return next.handle(req);
      };

      return HttpXsrfInterceptor;
    }();

    HttpXsrfInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXsrfInterceptor.ctorParameters = function () {
      return [{
        type: HttpXsrfTokenExtractor
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [XSRF_HEADER_NAME]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An injectable `HttpHandler` that applies multiple interceptors
     * to a request before passing it to the given `HttpBackend`.
     *
     * The interceptors are loaded lazily from the injector, to allow
     * interceptors to themselves inject classes depending indirectly
     * on `HttpInterceptingHandler` itself.
     * @see `HttpInterceptor`
     */


    var HttpInterceptingHandler =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} backend
       * @param {?} injector
       */
      function HttpInterceptingHandler(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
      }
      /**
       * @param {?} req
       * @return {?}
       */


      var _proto16 = HttpInterceptingHandler.prototype;

      _proto16.handle = function handle(req) {
        if (this.chain === null) {
          /** @type {?} */
          var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
          this.chain = interceptors.reduceRight(
          /**
          * @param {?} next
          * @param {?} interceptor
          * @return {?}
          */
          function (next, interceptor) {
            return new HttpInterceptorHandler(next, interceptor);
          }, this.backend);
        }

        return this.chain.handle(req);
      };

      return HttpInterceptingHandler;
    }();

    HttpInterceptingHandler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpInterceptingHandler.ctorParameters = function () {
      return [{
        type: HttpBackend
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    if (false) {}
    /**
     * Constructs an `HttpHandler` that applies interceptors
     * to a request before passing it to the given `HttpBackend`.
     *
     * Use as a factory function within `HttpClientModule`.
     *
     *
     * @param {?} backend
     * @param {?=} interceptors
     * @return {?}
     */


    function interceptingHandler(backend, interceptors) {
      if (interceptors === void 0) {
        interceptors = [];
      }

      if (!interceptors) {
        return backend;
      }

      return interceptors.reduceRight(
      /**
      * @param {?} next
      * @param {?} interceptor
      * @return {?}
      */
      function (next, interceptor) {
        return new HttpInterceptorHandler(next, interceptor);
      }, backend);
    }
    /**
     * Factory function that determines where to store JSONP callbacks.
     *
     * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
     * in test environments. In that case, callbacks are stored on an anonymous object instead.
     *
     *
     * @return {?}
     */


    function jsonpCallbackContext() {
      if (typeof window === 'object') {
        return window;
      }

      return {};
    }
    /**
     * Configures XSRF protection support for outgoing requests.
     *
     * For a server that supports a cookie-based XSRF protection system,
     * use directly to configure XSRF protection with the correct
     * cookie and header names.
     *
     * If no names are supplied, the default cookie name is `XSRF-TOKEN`
     * and the default header name is `X-XSRF-TOKEN`.
     *
     * \@publicApi
     */


    var HttpClientXsrfModule =
    /*#__PURE__*/
    function () {
      function HttpClientXsrfModule() {}

      /**
       * Disable the default XSRF protection.
       * @return {?}
       */
      HttpClientXsrfModule.disable = function disable() {
        return {
          ngModule: HttpClientXsrfModule,
          providers: [{
            provide: HttpXsrfInterceptor,
            useClass: NoopInterceptor
          }]
        };
      }
      /**
       * Configure XSRF protection.
       * @param {?=} options An object that can specify either or both
       * cookie name or header name.
       * - Cookie name default is `XSRF-TOKEN`.
       * - Header name default is `X-XSRF-TOKEN`.
       *
       * @return {?}
       */
      ;

      HttpClientXsrfModule.withOptions = function withOptions(options) {
        if (options === void 0) {
          options = {};
        }

        return {
          ngModule: HttpClientXsrfModule,
          providers: [options.cookieName ? {
            provide: XSRF_COOKIE_NAME,
            useValue: options.cookieName
          } : [], options.headerName ? {
            provide: XSRF_HEADER_NAME,
            useValue: options.headerName
          } : []]
        };
      };

      return HttpClientXsrfModule;
    }();

    HttpClientXsrfModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [HttpXsrfInterceptor, {
          provide: HTTP_INTERCEPTORS,
          useExisting: HttpXsrfInterceptor,
          multi: true
        }, {
          provide: HttpXsrfTokenExtractor,
          useClass: HttpXsrfCookieExtractor
        }, {
          provide: XSRF_COOKIE_NAME,
          useValue: 'XSRF-TOKEN'
        }, {
          provide: XSRF_HEADER_NAME,
          useValue: 'X-XSRF-TOKEN'
        }]
      }]
    }];
    /**
     * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
     * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
     *
     * You can add interceptors to the chain behind `HttpClient` by binding them to the
     * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
     *
     * \@publicApi
     */

    var HttpClientModule = function HttpClientModule() {};

    HttpClientModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        /**
         * Optional configuration for XSRF protection.
         */
        imports: [HttpClientXsrfModule.withOptions({
          cookieName: 'XSRF-TOKEN',
          headerName: 'X-XSRF-TOKEN'
        })],

        /**
         * Configures the [dependency injector](guide/glossary#injector) where it is imported
         * with supporting services for HTTP communications.
         */
        providers: [HttpClient, {
          provide: HttpHandler,
          useClass: HttpInterceptingHandler
        }, HttpXhrBackend, {
          provide: HttpBackend,
          useExisting: HttpXhrBackend
        }, BrowserXhr, {
          provide: XhrFactory,
          useExisting: BrowserXhr
        }]
      }]
    }];
    /**
     * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
     * with supporting services for JSONP.
     * Without this module, Jsonp requests reach the backend
     * with method JSONP, where they are rejected.
     *
     * You can add interceptors to the chain behind `HttpClient` by binding them to the
     * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
     *
     * \@publicApi
     */

    var HttpClientJsonpModule = function HttpClientJsonpModule() {};

    HttpClientJsonpModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [JsonpClientBackend, {
          provide: JsonpCallbackContext,
          useFactory: jsonpCallbackContext
        }, {
          provide: HTTP_INTERCEPTORS,
          useClass: JsonpInterceptor,
          multi: true
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=http.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/forgetpassword/forgetpassword.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/forgetpassword/forgetpassword.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedForgetpasswordForgetpasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"https://irp-cdn.multiscreensite.com/4787128b/dms3rep/multi/mobile/Car-Care-new-logo.png\" style=\"width:100px\">\n    </a>\n    <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item hover\">\n            <a class=\"nav-link\" (click)=\"nagivate('user')\">Customer</a>\n        </li>&nbsp;&nbsp;&nbsp;&nbsp;\n        <li class=\"nav-item hover\">\n            <a class=\"nav-link\" (click)=\"nagivate('serviceProvider')\">Service Provider</a>\n        </li>\n    </ul>\n</nav>\n\n<div class=\"login-div margin-top-1vw col-md-3\">\n    <h3 class=\"text-center\">\n        <span class=\"badge badge-secondary \">Change Password</span>\n    </h3>\n    <div [formGroup]=\"forgetPassword\">\n        <div class=\"form-group\">\n            <label for=\"currentPassword\">Current Password</label>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n                <input type=\"password\" placeholder=\"Enter the password\" class=\"form-control\" id=\"currentPassword\" formControlName=\"currentPassword\"\n                    [ngClass]=\"{error:forgetPassword.get('currentPassword').invalid &&forgetPassword.get('currentPassword').touched}\">\n            </div>\n            <span class=\"error-text\" *ngIf=\"forgetPassword.get('currentPassword').invalid &&forgetPassword.get('currentPassword').touched\">*Required Field</span>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"newPassword\">New Password</label>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n                <input type=\"password\" placeholder=\"Enter the password\" class=\"form-control\" id=\"newPassword\" formControlName=\"newPassword\"\n                    [ngClass]=\"{error:forgetPassword.get('newPassword').invalid &&forgetPassword.get('newPassword').touched}\">\n            </div>\n            <span class=\"error-text\" *ngIf=\"forgetPassword.get('newPassword').invalid &&forgetPassword.get('newPassword').touched\">*Required Field</span>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"confirmPassword\">New Password</label>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n                <input type=\"password\" placeholder=\"Enter the password\" class=\"form-control\" id=\"confirmPassword\" formControlName=\"confirmPassword\"\n                    [ngClass]=\"{error:forgetPassword.get('confirmPassword').invalid &&forgetPassword.get('confirmPassword').touched}\">\n            </div>\n            <span class=\"error-text\" *ngIf=\"forgetPassword.get('confirmPassword').invalid &&forgetPassword.get('confirmPassword').touched\">*Required Field</span>\n        </div>\n    </div>\n    <div class=\"btn-toolbar\">\n        <button type=\"submit\" title=\"Please fill the required field to enable SignIn button\" class=\"btn btn-primary btn-space\" (click)=\"changePassword()\">Save Password</button>\n    </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/home/home.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/home/home.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"src/app/shared/image/car-logo.png\" style=\"width:100px\">\n    </a>\n    <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"user\">Customer</a>\n        </li>&nbsp;&nbsp;&nbsp;&nbsp;\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"serviceprovider\">Service Provider</a>\n        </li>\n    </ul>\n</nav>\n<div>\n    <div class=\"modal-body row col-md-6\">\n            \n                <!-- <img src=\"https://i.pinimg.com/originals/18/0b/6c/180b6cd57c9b446f0f669eaa88b8bee3.jpg\" class=\"rounded float-left \"> -->\n                <!-- <img src=\"https://media.istockphoto.com/photos/the-car-wash-picture-id576577842?k=6&m=576577842&s=612x612&w=0&h=nNyju7aFcanqJqRpt8bylNVS9yF_NGHV_IiFe0pV_tE=\" class=\"col-md-6\">\n                <img src=\"http://dpluscarcare.com/images/gallery/repair1.jpg\" class=\"col-md-6\">\n                <img src=\"https://img.wallpaper.sc/android/images/2160x1920/android-2160x1920-wallpaper_01084.jpg\" class=\"col-md-6\"> -->\n            \n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/shared/database-http-call.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/database-http-call.service.ts ***!
    \******************************************************/

  /*! exports provided: DatabaseHttpCallService */

  /***/
  function srcAppSharedDatabaseHttpCallServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatabaseHttpCallService", function () {
      return DatabaseHttpCallService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DatabaseHttpCallService =
    /*#__PURE__*/
    function () {
      // ${this.domain}
      function DatabaseHttpCallService(http) {
        this.http = http;
        this.domain = "http://localhost:3000/";
      }

      var _proto17 = DatabaseHttpCallService.prototype;

      _proto17.postData = function postData(apiPath, bodyData) {
        return this.http.post("" + apiPath, bodyData);
      };

      _proto17.getData = function getData(apiPath, searchParam) {
        if (searchParam) {
          return this.http.get("" + apiPath, {
            params: searchParam
          });
        } else return this.http.get("" + apiPath);
      };

      _proto17.deleteById = function deleteById(apiPath, searchParam) {
        if (searchParam) return this.http.delete("" + apiPath, {
          params: searchParam
        });else console.log("There is any error with search parameter");
      };

      _proto17.updateDocument = function updateDocument(apiPath) {
        return this.http.put("" + apiPath, {});
      };

      return DatabaseHttpCallService;
    }();

    DatabaseHttpCallService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DatabaseHttpCallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DatabaseHttpCallService);
    /***/
  },

  /***/
  "./src/app/shared/forgetpassword/forgetpassword.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/shared/forgetpassword/forgetpassword.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedForgetpasswordForgetpasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb3JnZXRwYXNzd29yZC9mb3JnZXRwYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/forgetpassword/forgetpassword.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/forgetpassword/forgetpassword.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ForgetpasswordComponent */

  /***/
  function srcAppSharedForgetpasswordForgetpasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetpasswordComponent", function () {
      return ForgetpasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ForgetpasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgetpasswordComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.forgetPassword = this.formBuilder.group({
          currentPassword: [],
          newPassword: [],
          confirmPassword: []
        });
      }

      var _proto18 = ForgetpasswordComponent.prototype;

      _proto18.ngOnInit = function ngOnInit() {};

      _proto18.changePassword = function changePassword() {
        console.log(this.forgetPassword);
      };

      _proto18.nagivate = function nagivate(val) {
        var calledBy = val == "user" ? '/user' : '/serviceprovider';
        this.router.navigate(["" + calledBy]);
      };

      return ForgetpasswordComponent;
    }();

    ForgetpasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ForgetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgetpassword',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgetpassword.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/forgetpassword/forgetpassword.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgetpassword.component.css */
      "./src/app/shared/forgetpassword/forgetpassword.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../shared.css */
      "./src/app/shared/shared.css")).default]
    })], ForgetpasswordComponent);
    /***/
  },

  /***/
  "./src/app/shared/home/home.component.css":
  /*!************************************************!*\
    !*** ./src/app/shared/home/home.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/home/home.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/home/home.component.ts ***!
    \***********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppSharedHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {}

      var _proto19 = HomeComponent.prototype;

      _proto19.ngOnInit = function ngOnInit() {};

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/shared/home/home.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../shared.css */
      "./src/app/shared/shared.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/shared/matchControlField.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/matchControlField.directive.ts ***!
    \*******************************************************/

  /*! exports provided: matchField */

  /***/
  function srcAppSharedMatchControlFieldDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matchField", function () {
      return matchField;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var matchField_1;

    var matchField = matchField_1 =
    /*#__PURE__*/
    function () {
      function matchField() {}

      var _proto20 = matchField.prototype;

      _proto20.validate = function validate(control) {
        var controlToCompare = control.parent.get(this.compareField);

        if (controlToCompare && controlToCompare.value !== control.value) {
          return {
            'notEqual': true
          };
        }

        return null;
      };

      return matchField;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], matchField.prototype, "compareField", void 0);
    matchField = matchField_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
      'selector': '[compareField]',
      'providers': [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
        useExisting: matchField_1,
        multi: true
      }]
    })], matchField);
    /***/
  },

  /***/
  "./src/app/shared/middleware/auth-interceptor.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/middleware/auth-interceptor.ts ***!
    \*******************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppSharedMiddlewareAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor() {}

      var _proto21 = AuthInterceptor.prototype;

      _proto21.intercept = function intercept(req, next) {
        if (localStorage.getItem("token") && localStorage.getItem("user_id")) {
          var authReq = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem("token")).set("object_id", localStorage.getItem("user_id"))
          });
          return next.handle(authReq);
        } else return next.handle(req);
      };

      return AuthInterceptor;
    }();

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/shared/shared-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/shared-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SharedRoutingModule */

  /***/
  function srcAppSharedSharedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function () {
      return SharedRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/home/home.component */
    "./src/app/shared/home/home.component.ts");

    var routes = [{
      path: '',
      component: src_app_shared_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var SharedRoutingModule = function SharedRoutingModule() {};

    SharedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SharedRoutingModule);
    /***/
  },

  /***/
  "./src/app/shared/shared.css":
  /*!***********************************!*\
    !*** ./src/app/shared/shared.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSharedCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".margin-top-1vw {\r\n    margin-top:2vw;\r\n}\r\n\r\n.blackish{\r\n    color:black\r\n}\r\n\r\n.error{\r\n    border: 2px solid red;\r\n}\r\n\r\n.error-text{\r\n    color:red\r\n}\r\n\r\n.input-box-medium{\r\n    width:70%\r\n}\r\n\r\n.login-div{\r\n    margin-left: 25%;\r\n    border: 2px solid black;\r\n    width: 50%;\r\n    border-radius:10px;\r\n    box-shadow: 7px 10px #888;\r\n    height:50%\r\n}\r\n\r\n.font-size-medium{\r\n    font-size: 2rem\r\n}\r\n\r\n.font-size-small{\r\n    font-size:1rem\r\n}\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n\r\n.hover{\r\n    cursor: pointer\r\n}\r\n\r\n.icon-medium{\r\n    font-size:2vw;\r\n}\r\n\r\n.user-icon-color{\r\n    color: #379f9f;\r\n}\r\n\r\n.user-icon-color:hover {\r\n    border-color: #fff;\r\n    color: #117a8b;\r\n  }\r\n\r\n.dashboard-div{\r\n    margin-left: 5%;\r\n    border: 1px solid;\r\n    width: 45%;\r\n    border-radius:10px;\r\n    box-shadow: 5px 5px #888;\r\n    height:45%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.form-checkbox{\r\n    margin-left: 1rem;\r\n}\r\n\r\n.error-message{\r\n    font-size: 10px;\r\n    text-align: center;\r\n    color:red;\r\n}\r\n\r\n.success-message{\r\n    font-size: 10px;\r\n    text-align: center;\r\n    color:green;\r\n}\r\n\r\n.profile-menu{\r\n    background:#c8e9e9;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    right: 1rem;\r\n    display: none;  \r\n    min-width: 10rem;\r\n    padding: .5rem 0;\r\n    margin: .125rem 0 0;\r\n    font-size: 1rem;\r\n    color: #212529;\r\n    text-align: left;\r\n    list-style: none;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-radius: .25rem;\r\n}\r\n\r\n/* .profile-menu::after{\r\n    display: block;\r\n} */\r\n\r\n.toggleShowHideDiv{\r\n    display: block;    \r\n}\r\n\r\n.highlightIcon{\r\n    color:#1f4f57\r\n}\r\n\r\n.text-fontFamily{\r\n    font-family: Roboto;\r\n}\r\n\r\n.header-color{\r\n    color: #379f9f;\r\n}\r\n\r\n.position-relative{\r\n    position: relative;\r\n}\r\n\r\n.position-absolute{\r\n    position: absolute;\r\n}\r\n\r\n.check-box{\r\n    color:#117a8b;\r\n    border-radius:25%\r\n}\r\n\r\n.spinner-style{\r\n    font-size: 5vw;    \r\n    margin-top: 10%;    \r\n    color: #379f9f;\r\n}\r\n\r\n.spinner-div{\r\n    width:100%;\r\n    height:100%;\r\n    text-align: center\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QjtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBR0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7QUFFRjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMscUJBQXFCO0FBQ3pCOztBQUNBOztHQUVHOztBQUNIO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NoYXJlZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLXRvcC0xdncge1xyXG4gICAgbWFyZ2luLXRvcDoydnc7XHJcbn1cclxuXHJcbi5ibGFja2lzaHtcclxuICAgIGNvbG9yOmJsYWNrXHJcbn1cclxuXHJcbi5lcnJvcntcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufVxyXG4uZXJyb3ItdGV4dHtcclxuICAgIGNvbG9yOnJlZFxyXG59XHJcbi5pbnB1dC1ib3gtbWVkaXVte1xyXG4gICAgd2lkdGg6NzAlXHJcbn1cclxuLmxvZ2luLWRpdntcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA3cHggMTBweCAjODg4O1xyXG4gICAgaGVpZ2h0OjUwJVxyXG59XHJcbi5mb250LXNpemUtbWVkaXVte1xyXG4gICAgZm9udC1zaXplOiAycmVtXHJcbn1cclxuLmZvbnQtc2l6ZS1zbWFsbHtcclxuICAgIGZvbnQtc2l6ZToxcmVtXHJcbn1cclxuXHJcblxyXG4uYnRuLXNwYWNlIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uaG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmljb24tbWVkaXVte1xyXG4gICAgZm9udC1zaXplOjJ2dztcclxufVxyXG5cclxuLnVzZXItaWNvbi1jb2xvcntcclxuICAgIGNvbG9yOiAjMzc5ZjlmO1xyXG59XHJcblxyXG4udXNlci1pY29uLWNvbG9yOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjMTE3YThiO1xyXG4gIH1cclxuXHJcbi5kYXNoYm9hcmQtZGl2e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAjODg4O1xyXG4gICAgaGVpZ2h0OjQ1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uZm9ybS1jaGVja2JveHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG5cclxuLnN1Y2Nlc3MtbWVzc2FnZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG59XHJcblxyXG4ucHJvZmlsZS1tZW51e1xyXG4gICAgYmFja2dyb3VuZDojYzhlOWU5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgZGlzcGxheTogbm9uZTsgIFxyXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcclxuICAgIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgICBtYXJnaW46IC4xMjVyZW0gMCAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG4vKiAucHJvZmlsZS1tZW51OjphZnRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcbi50b2dnbGVTaG93SGlkZURpdntcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAgICBcclxufVxyXG4uaGlnaGxpZ2h0SWNvbntcclxuICAgIGNvbG9yOiMxZjRmNTdcclxufVxyXG5cclxuLnRleHQtZm9udEZhbWlseXtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuXHJcbi5oZWFkZXItY29sb3J7XHJcbiAgICBjb2xvcjogIzM3OWY5ZjtcclxufVxyXG5cclxuLnBvc2l0aW9uLXJlbGF0aXZle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wb3NpdGlvbi1hYnNvbHV0ZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNoZWNrLWJveHtcclxuICAgIGNvbG9yOiMxMTdhOGI7XHJcbiAgICBib3JkZXItcmFkaXVzOjI1JVxyXG59XHJcblxyXG4uc3Bpbm5lci1zdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNXZ3OyAgICBcclxuICAgIG1hcmdpbi10b3A6IDEwJTsgICAgXHJcbiAgICBjb2xvcjogIzM3OWY5ZjtcclxufVxyXG5cclxuLnNwaW5uZXItZGl2e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared-routing.module */
    "./src/app/shared/shared-routing.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/shared/home/home.component.ts");
    /* harmony import */


    var _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgetpassword/forgetpassword.component */
    "./src/app/shared/forgetpassword/forgetpassword.component.ts");
    /* harmony import */


    var src_app_shared_matchControlField_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/matchControlField.directive */
    "./src/app/shared/matchControlField.directive.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/database-http-call.service */
    "./src/app/shared/database-http-call.service.ts");
    /* harmony import */


    var src_app_shared_middleware_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/middleware/auth-interceptor */
    "./src/app/shared/middleware/auth-interceptor.ts");

    var SharedModule = function SharedModule() {};

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_5__["ForgetpasswordComponent"], src_app_shared_matchControlField_directive__WEBPACK_IMPORTED_MODULE_6__["matchField"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharedRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
      providers: [src_app_shared_database_http_call_service__WEBPACK_IMPORTED_MODULE_9__["DatabaseHttpCallService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: src_app_shared_middleware_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
        multi: true
      }],
      exports: [src_app_shared_matchControlField_directive__WEBPACK_IMPORTED_MODULE_6__["matchField"], _forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_5__["ForgetpasswordComponent"]]
    })], SharedModule);
    /***/
  }
}]); //# sourceMappingURL=default~service-provider-service-provider-module~shared-shared-module~user-user-module-es2015.js.map
//# sourceMappingURL=default~service-provider-service-provider-module~shared-shared-module~user-user-module-es5.js.map