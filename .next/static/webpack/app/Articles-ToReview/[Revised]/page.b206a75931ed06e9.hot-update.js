"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Articles-ToReview/[Revised]/page",{

/***/ "(app-pages-browser)/./app/Articles-ToReview/[Revised]/_components/Comment.jsx":
/*!*****************************************************************!*\
  !*** ./app/Articles-ToReview/[Revised]/_components/Comment.jsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _clerk_clerk_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/clerk-react */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Comment = (param)=>{\n    let { article, User } = param;\n    _s();\n    const [commentText, setCommentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [FetchedComment, setFetchedComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { isSignedIn, user, isLoaded } = (0,_clerk_clerk_react__WEBPACK_IMPORTED_MODULE_2__.useUser)();\n    const [userr, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    console.log(user);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchArticleData = async ()=>{\n            const response = await fetch(\"http://localhost:1337/api/comments?populate=*&filters[ArticleId][$eq]=\".concat(article.id));\n            const commeent = await response.json();\n            setFetchedComments(commeent.data);\n        };\n        fetchArticleData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const whatsapp = async ()=>{\n            const response = await fetch(\"http://localhost:1337/api/users?populate=*&filters[email][$eq]=\".concat(user.primaryEmailAddress.emailAddress));\n            const commeent = await response.json();\n            console.log(commeent);\n            setUser(commeent);\n        };\n        whatsapp();\n    }, []);\n    const handleCommentChange = (event)=>{\n        setCommentText(event.target.value);\n    };\n    const handleSubmitComment = async (event)=>{\n        event.preventDefault();\n        if (commentText.trim()) {\n            const newComment = {\n                data: {\n                    RecieverEmail: article.attributes.Email,\n                    Senderusername: userr[0].username,\n                    RecieverUsername: article.attributes.UserName,\n                    State: isChecked,\n                    Comment: commentText,\n                    ArticleId: article.id\n                }\n            };\n            try {\n                const response = await fetch(\"http://localhost:1337/api/comments\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newComment)\n                });\n                if (!response.ok) {\n                    throw new Error(\"Failed to create comment\");\n                }\n                const responseData = await response.json();\n                setComments([\n                    ...comments,\n                    {\n                        text: commentText,\n                        checked: isChecked,\n                        id: responseData.data.id\n                    }\n                ]);\n                setCommentText(\"\");\n                setIsChecked(false); // Reset the checkbox status after submission\n                alert(\"Comment sent successfully!\");\n            } catch (error) {\n                console.error(\"Error creating comment:\", error);\n            }\n        } else {\n            alert(\"Please enter a comment.\");\n        }\n    };\n    const handleDeleteComment = async (commentId, index)=>{\n        try {\n            const response = await fetch(\"http://localhost:1337/api/comments/\".concat(commentId), {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to delete comment\");\n            }\n            const updatedComments = [\n                ...comments\n            ];\n            updatedComments.splice(index, 1);\n            setComments(updatedComments);\n        } catch (error) {\n            console.error(\"Error deleting comment:\", error);\n        }\n    };\n    const renderComment = (text, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                overflow: \"hidden\",\n                maxHeight: \"90px\"\n            },\n            children: text\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\Click\\\\Documents\\\\GitHub\\\\journal\\\\app\\\\Articles-ToReview\\\\[Revised]\\\\_components\\\\Comment.jsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmitComment,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: commentText,\n                        onChange: handleCommentChange,\n                        className: \"w-full p-1 border rounded focus:outline-none\",\n                        rows: \"3\",\n                        placeholder: \"Write a comment...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Click\\\\Documents\\\\GitHub\\\\journal\\\\app\\\\Articles-ToReview\\\\[Revised]\\\\_components\\\\Comment.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"ml-2 mb-3 text-blue-500\",\n                        children: \"Comment\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Click\\\\Documents\\\\GitHub\\\\journal\\\\app\\\\Articles-ToReview\\\\[Revised]\\\\_components\\\\Comment.jsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Click\\\\Documents\\\\GitHub\\\\journal\\\\app\\\\Articles-ToReview\\\\[Revised]\\\\_components\\\\Comment.jsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: comments.map((comment, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-2 p-2 border rounded\",\n                        children: [\n                            !comment.attributes.isEditor ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Reviewer: \",\n                                    comment.attributes.Senderusername\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Click\\\\Documents\\\\GitHub\\\\journal\\\\app\\\\Articles-ToReview\\\\[Revised]\\\\_components\\\\Comment.jsx\",\n                                lineNumber: 136,\n                                columnNumber: 13\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Editor: \",\n                                    comment.attributes.Senderusername\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Click\\\\Documents\\\\GitHub\\\\journal\\\\app\\\\Articles-ToReview\\\\[Revised]\\\\_components\\\\Comment.jsx\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: renderComment(comment.attributes.Comment, index)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Click\\\\Documents\\\\GitHub\\\\journal\\\\app\\\\Articles-ToReview\\\\[Revised]\\\\_components\\\\Comment.jsx\",\n                                lineNumber: 140,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Status: \",\n                                    comment.attributes.State ? \"User has Fixed it\" : \"User Hasn't Fixed it\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Click\\\\Documents\\\\GitHub\\\\journal\\\\app\\\\Articles-ToReview\\\\[Revised]\\\\_components\\\\Comment.jsx\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleDeleteComment(comment.id, index),\n                                className: \"ml-2 text-red-500\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Click\\\\Documents\\\\GitHub\\\\journal\\\\app\\\\Articles-ToReview\\\\[Revised]\\\\_components\\\\Comment.jsx\",\n                                lineNumber: 142,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, comment.id, true, {\n                        fileName: \"C:\\\\Users\\\\Click\\\\Documents\\\\GitHub\\\\journal\\\\app\\\\Articles-ToReview\\\\[Revised]\\\\_components\\\\Comment.jsx\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Click\\\\Documents\\\\GitHub\\\\journal\\\\app\\\\Articles-ToReview\\\\[Revised]\\\\_components\\\\Comment.jsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Click\\\\Documents\\\\GitHub\\\\journal\\\\app\\\\Articles-ToReview\\\\[Revised]\\\\_components\\\\Comment.jsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Comment, \"9pBDxyAwJY3XguR+VRSktUs2GDA=\", false, function() {\n    return [\n        _clerk_clerk_react__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar _c;\n$RefreshReg$(_c, \"Comment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BcnRpY2xlcy1Ub1Jldmlldy9bUmV2aXNlZF0vX2NvbXBvbmVudHMvQ29tbWVudC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtRDtBQUNOO0FBRTdDLE1BQU1JLFVBQVU7UUFBQyxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRTs7SUFDaEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNXLGdCQUFnQkMsbUJBQW1CLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDeEQsTUFBTSxFQUFFYSxVQUFVLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFLEdBQUdkLDJEQUFPQTtJQUNoRCxNQUFLLENBQUNlLE9BQVFDLFFBQVEsR0FBR2pCLCtDQUFRQTtJQUNqQ2tCLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDVmYsZ0RBQVNBLENBQUM7UUFDUixNQUFNcUIsbUJBQW1CO1lBRXZCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSx5RUFBb0YsT0FBWG5CLFFBQVFvQixFQUFFO1lBQ2hILE1BQU1DLFdBQVcsTUFBTUgsU0FBU0ksSUFBSTtZQUVwQ2IsbUJBQW1CWSxTQUFTRSxJQUFJO1FBQ2xDO1FBRUFOO0lBQ0YsR0FBRSxFQUFFO0lBRUpyQixnREFBU0EsQ0FBQztRQUNSLE1BQU00QixXQUFXO1lBRWYsTUFBTU4sV0FBVyxNQUFNQyxNQUFNLGtFQUF3RyxPQUF0Q1IsS0FBS2MsbUJBQW1CLENBQUNDLFlBQVk7WUFDcEksTUFBTUwsV0FBVyxNQUFNSCxTQUFTSSxJQUFJO1lBQ3BDUCxRQUFRQyxHQUFHLENBQUNLO1lBQ1pQLFFBQVFPO1FBQ1Y7UUFFQUc7SUFDRixHQUFFLEVBQUU7SUFFSCxNQUFNRyxzQkFBc0Is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QUFDTSxLQUFLLEdBQUcsc0JBQXNCOzs7Ozs7OzBDQUM3RCw4REFBQytCO2dDQUNDTSxTQUFTLElBQU12QixvQkFBb0JvQixRQUFReEQsRUFBRSxFQUFFc0M7Z0NBQy9DWSxXQUFVOzBDQUNYOzs7Ozs7O3VCQVhPTSxRQUFReEQsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQW1CNUI7R0FySk1yQjs7UUFLbUNELHVEQUFPQTs7O0tBTDFDQztBQXVKTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQXJ0aWNsZXMtVG9SZXZpZXcvW1JldmlzZWRdL19jb21wb25lbnRzL0NvbW1lbnQuanN4PzkzNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tIFwiQGNsZXJrL2NsZXJrLXJlYWN0XCI7XHJcblxyXG5jb25zdCBDb21tZW50ID0gKHsgYXJ0aWNsZSwgVXNlciB9KSA9PiB7XHJcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzQ2hlY2tlZCwgc2V0SXNDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbRmV0Y2hlZENvbW1lbnQsIHNldEZldGNoZWRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgeyBpc1NpZ25lZEluLCB1c2VyLCBpc0xvYWRlZCB9ID0gdXNlVXNlcigpO1xyXG5jb25zdFt1c2VyciAsIHNldFVzZXJdID0gdXNlU3RhdGUoKVxyXG5jb25zb2xlLmxvZyh1c2VyKVxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgZmV0Y2hBcnRpY2xlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvY29tbWVudHM/cG9wdWxhdGU9KiZmaWx0ZXJzW0FydGljbGVJZF1bJGVxXT0ke2FydGljbGUuaWR9YCk7XHJcbiAgICAgIGNvbnN0IGNvbW1lZW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gXHJcbiAgICAgIHNldEZldGNoZWRDb21tZW50cyhjb21tZWVudC5kYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoQXJ0aWNsZURhdGEoKVxyXG4gIH0sW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3Qgd2hhdHNhcHAgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL3VzZXJzP3BvcHVsYXRlPSomZmlsdGVyc1tlbWFpbF1bJGVxXT0ke3VzZXIucHJpbWFyeUVtYWlsQWRkcmVzcy5lbWFpbEFkZHJlc3N9YCk7XHJcbiAgICAgIGNvbnN0IGNvbW1lZW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb21tZWVudClcclxuICAgICAgc2V0VXNlcihjb21tZWVudClcclxuICAgIH1cclxuXHJcbiAgICB3aGF0c2FwcCgpXHJcbiAgfSxbXSlcclxuIFxyXG4gICBjb25zdCBoYW5kbGVDb21tZW50Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRDb21tZW50VGV4dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gICBcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0Q29tbWVudCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChjb21tZW50VGV4dC50cmltKCkpIHtcclxuICAgICAgY29uc3QgbmV3Q29tbWVudCA9IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBSZWNpZXZlckVtYWlsOiBhcnRpY2xlLmF0dHJpYnV0ZXMuRW1haWwsXHJcbiAgICAgICAgICBTZW5kZXJ1c2VybmFtZTogdXNlcnJbMF0udXNlcm5hbWUsXHJcbiAgICAgICAgICBSZWNpZXZlclVzZXJuYW1lOiBhcnRpY2xlLmF0dHJpYnV0ZXMuVXNlck5hbWUsXHJcbiAgICAgICAgICBTdGF0ZTogaXNDaGVja2VkLFxyXG4gICAgICAgICAgQ29tbWVudDogY29tbWVudFRleHQsXHJcbiAgICAgICAgICBBcnRpY2xlSWQ6IGFydGljbGUuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9jb21tZW50cycsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdDb21tZW50KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGNvbW1lbnQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgc2V0Q29tbWVudHMoW1xyXG4gICAgICAgICAgLi4uY29tbWVudHMsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IGNvbW1lbnRUZXh0LFxyXG4gICAgICAgICAgICBjaGVja2VkOiBpc0NoZWNrZWQsXHJcbiAgICAgICAgICAgIGlkOiByZXNwb25zZURhdGEuZGF0YS5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHNldENvbW1lbnRUZXh0KCcnKTtcclxuICAgICAgICBzZXRJc0NoZWNrZWQoZmFsc2UpOyAvLyBSZXNldCB0aGUgY2hlY2tib3ggc3RhdHVzIGFmdGVyIHN1Ym1pc3Npb25cclxuXHJcbiAgICAgICAgYWxlcnQoJ0NvbW1lbnQgc2VudCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY29tbWVudDonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSBjb21tZW50LicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNvbW1lbnQgPSBhc3luYyAoY29tbWVudElkLCBpbmRleCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9jb21tZW50cy8ke2NvbW1lbnRJZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGNvbW1lbnQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZENvbW1lbnRzID0gWy4uLmNvbW1lbnRzXTtcclxuICAgICAgdXBkYXRlZENvbW1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHNldENvbW1lbnRzKHVwZGF0ZWRDb21tZW50cyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjb21tZW50OicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJDb21tZW50ID0gKHRleHQsIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgbWF4SGVpZ2h0OiAnOTBweCcgfX0+XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiA+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRDb21tZW50fSAgPlxyXG4gICAgICAgXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ29tbWVudENoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTEgYm9yZGVyIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIHJvd3M9XCIzXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgYSBjb21tZW50Li4uXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIm1sLTIgbWItMyB0ZXh0LWJsdWUtNTAwXCI+XHJcbiAgICAgICAgICBDb21tZW50XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGRpdj5cclxuICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17Y29tbWVudC5pZH0gY2xhc3NOYW1lPVwibWItMiBwLTIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIHshY29tbWVudC5hdHRyaWJ1dGVzLmlzRWRpdG9yID8gKFxyXG4gICAgICAgICAgICA8cD5SZXZpZXdlcjoge2NvbW1lbnQuYXR0cmlidXRlcy5TZW5kZXJ1c2VybmFtZX08L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8cD5FZGl0b3I6IHtjb21tZW50LmF0dHJpYnV0ZXMuU2VuZGVydXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxwPntyZW5kZXJDb21tZW50KGNvbW1lbnQuYXR0cmlidXRlcy5Db21tZW50LCBpbmRleCl9PC9wPlxyXG4gICAgICAgICAgPHA+U3RhdHVzOiB7Y29tbWVudC5hdHRyaWJ1dGVzLlN0YXRlID8gXCJVc2VyIGhhcyBGaXhlZCBpdFwiIDogXCJVc2VyIEhhc24ndCBGaXhlZCBpdFwifTwvcD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQ29tbWVudChjb21tZW50LmlkLCBpbmRleCl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVXNlciIsIkNvbW1lbnQiLCJhcnRpY2xlIiwiVXNlciIsImNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiRmV0Y2hlZENvbW1lbnQiLCJzZXRGZXRjaGVkQ29tbWVudHMiLCJpc1NpZ25lZEluIiwidXNlciIsImlzTG9hZGVkIiwidXNlcnIiLCJzZXRVc2VyIiwiY29uc29sZSIsImxvZyIsImZldGNoQXJ0aWNsZURhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiaWQiLCJjb21tZWVudCIsImpzb24iLCJkYXRhIiwid2hhdHNhcHAiLCJwcmltYXJ5RW1haWxBZGRyZXNzIiwiZW1haWxBZGRyZXNzIiwiaGFuZGxlQ29tbWVudENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXRDb21tZW50IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwibmV3Q29tbWVudCIsIlJlY2lldmVyRW1haWwiLCJhdHRyaWJ1dGVzIiwiRW1haWwiLCJTZW5kZXJ1c2VybmFtZSIsInVzZXJuYW1lIiwiUmVjaWV2ZXJVc2VybmFtZSIsIlVzZXJOYW1lIiwiU3RhdGUiLCJBcnRpY2xlSWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwicmVzcG9uc2VEYXRhIiwidGV4dCIsImNoZWNrZWQiLCJhbGVydCIsImVycm9yIiwiaGFuZGxlRGVsZXRlQ29tbWVudCIsImNvbW1lbnRJZCIsImluZGV4IiwidXBkYXRlZENvbW1lbnRzIiwic3BsaWNlIiwicmVuZGVyQ29tbWVudCIsImRpdiIsInN0eWxlIiwib3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJmb3JtIiwib25TdWJtaXQiLCJ0ZXh0YXJlYSIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwicm93cyIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidHlwZSIsIm1hcCIsImNvbW1lbnQiLCJpc0VkaXRvciIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Articles-ToReview/[Revised]/_components/Comment.jsx\n"));

/***/ })

});