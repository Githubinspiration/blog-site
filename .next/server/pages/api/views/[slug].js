"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/views/[slug]";
exports.ids = ["pages/api/views/[slug]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3Qyw0RUFBNEU7QUFDNUUsNkNBQTZDO0FBQzdDLEVBQUU7QUFDRixjQUFjO0FBQ2QsZ0RBQWdEO0FBRWhELElBQUlDLE1BQU07QUFFVixJQUFJQyxLQUFxQyxFQUFFLEVBRTFDLE1BQU07SUFDTCxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsTUFBTSxFQUFFO1FBQ2xCRSxNQUFNLENBQUNGLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0tBQ25DO0lBQ0RDLE1BQU0sR0FBR0UsTUFBTSxDQUFDRixNQUFNO0NBQ3ZCO0FBRUQsaUVBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXJ0aC1kZXNhaS1ibG9nLy4vbGliL3ByaXNtYS5qcz83NTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG4vLyBQcmlzbWFDbGllbnQgaXMgYXR0YWNoZWQgdG8gdGhlIGBnbG9iYWxgIG9iamVjdCBpbiBkZXZlbG9wbWVudCB0byBwcmV2ZW50XG4vLyBleGhhdXN0aW5nIHlvdXIgZGF0YWJhc2UgY29ubmVjdGlvbiBsaW1pdC5cbi8vXG4vLyBMZWFybiBtb3JlOlxuLy8gaHR0cHM6Ly9wcmlzLmx5L2QvaGVscC9uZXh0LWpzLWJlc3QtcHJhY3RpY2VzXG5cbmxldCBwcmlzbWFcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/views/[slug].js":
/*!***********************************!*\
  !*** ./pages/api/views/[slug].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    try {\n        const slug = req.query.slug.toString();\n        if (req.method === \"POST\") {\n            const newOrUpdatedViews = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].views.upsert({\n                where: {\n                    slug\n                },\n                create: {\n                    slug\n                },\n                update: {\n                    count: {\n                        increment: 1\n                    }\n                }\n            });\n            return res.status(200).json({\n                total: newOrUpdatedViews.count.toString()\n            });\n        }\n        if (req.method === \"GET\") {\n            var ref, ref1;\n            const views = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].views.findUnique({\n                where: {\n                    slug\n                }\n            });\n            return res.status(200).json({\n                total: (views === null || views === void 0 ? void 0 : (ref = views.count) === null || ref === void 0 ? void 0 : (ref1 = ref.toString) === null || ref1 === void 0 ? void 0 : ref1.call(ref)) || 0\n            });\n        }\n    } catch (e) {\n        return res.status(500).json({\n            message: e.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmlld3MvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCO0FBRWhCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSTtRQUNGLE1BQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNELElBQUksQ0FBQ0UsUUFBUSxFQUFFO1FBRXRDLElBQUlKLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUN6QixNQUFNQyxpQkFBaUIsR0FBRyxNQUFNUiwrREFBbUIsQ0FBQztnQkFDbERXLEtBQUssRUFBRTtvQkFBRVAsSUFBSTtpQkFBRTtnQkFDZlEsTUFBTSxFQUFFO29CQUNOUixJQUFJO2lCQUNMO2dCQUNEUyxNQUFNLEVBQUU7b0JBQ05DLEtBQUssRUFBRTt3QkFDTEMsU0FBUyxFQUFFLENBQUM7cUJBQ2I7aUJBQ0Y7YUFDRixDQUFDO1lBRUYsT0FBT1osR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDMUJDLEtBQUssRUFBRVYsaUJBQWlCLENBQUNNLEtBQUssQ0FBQ1IsUUFBUSxFQUFFO2FBQzFDLENBQUM7U0FDSDtRQUVELElBQUlKLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLEtBQUssRUFBRTtnQkFPYUUsR0FBWTtZQU5qRCxNQUFNQSxLQUFLLEdBQUcsTUFBTVQsbUVBQXVCLENBQUM7Z0JBQzFDVyxLQUFLLEVBQUU7b0JBQ0xQLElBQUk7aUJBQ0w7YUFDRixDQUFDO1lBRUYsT0FBT0QsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFVCxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBTyxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLENBQUFBLEdBQVksR0FBWkEsS0FBSyxDQUFFSyxLQUFLLGNBQVpMLEdBQVksY0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxRQUFBQSxHQUFZLENBQUVILFFBQVEsNkJBQUksR0FBMUJHLEtBQUFBLENBQTBCLEdBQTFCQSxLQUFBQSxJQUEwQixDQUExQkEsR0FBWSxDQUFjLEtBQUksQ0FBQzthQUFFLENBQUM7U0FDeEU7S0FDRixDQUFDLE9BQU9XLENBQUMsRUFBRTtRQUNWLE9BQU9qQixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVJLE9BQU8sRUFBRUQsQ0FBQyxDQUFDQyxPQUFPO1NBQUUsQ0FBQztLQUNwRDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFydGgtZGVzYWktYmxvZy8uL3BhZ2VzL2FwaS92aWV3cy9bc2x1Z10uanM/OGI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gJ2xpYi9wcmlzbWEnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzbHVnID0gcmVxLnF1ZXJ5LnNsdWcudG9TdHJpbmcoKVxuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgY29uc3QgbmV3T3JVcGRhdGVkVmlld3MgPSBhd2FpdCBwcmlzbWEudmlld3MudXBzZXJ0KHtcbiAgICAgICAgd2hlcmU6IHsgc2x1ZyB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICBzbHVnLFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICBjb3VudDoge1xuICAgICAgICAgICAgaW5jcmVtZW50OiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICB0b3RhbDogbmV3T3JVcGRhdGVkVmlld3MuY291bnQudG9TdHJpbmcoKSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICBjb25zdCB2aWV3cyA9IGF3YWl0IHByaXNtYS52aWV3cy5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBzbHVnLFxuICAgICAgICB9LFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdG90YWw6IHZpZXdzPy5jb3VudD8udG9TdHJpbmc/LigpIHx8IDAgfSlcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlLm1lc3NhZ2UgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzbHVnIiwicXVlcnkiLCJ0b1N0cmluZyIsIm1ldGhvZCIsIm5ld09yVXBkYXRlZFZpZXdzIiwidmlld3MiLCJ1cHNlcnQiLCJ3aGVyZSIsImNyZWF0ZSIsInVwZGF0ZSIsImNvdW50IiwiaW5jcmVtZW50Iiwic3RhdHVzIiwianNvbiIsInRvdGFsIiwiZmluZFVuaXF1ZSIsImUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/views/[slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/views/[slug].js"));
module.exports = __webpack_exports__;

})();