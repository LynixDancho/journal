"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/orderedmap";
exports.ids = ["vendor-chunks/orderedmap"];
exports.modules = {

/***/ "(ssr)/./node_modules/orderedmap/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/orderedmap/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ::- Persistent data structure representing an ordered mapping from\n// strings to values, with some convenient update methods.\nfunction OrderedMap(content) {\n  this.content = content;\n}\n\nOrderedMap.prototype = {\n  constructor: OrderedMap,\n\n  find: function(key) {\n    for (var i = 0; i < this.content.length; i += 2)\n      if (this.content[i] === key) return i\n    return -1\n  },\n\n  // :: (string) → ?any\n  // Retrieve the value stored under `key`, or return undefined when\n  // no such key exists.\n  get: function(key) {\n    var found = this.find(key);\n    return found == -1 ? undefined : this.content[found + 1]\n  },\n\n  // :: (string, any, ?string) → OrderedMap\n  // Create a new map by replacing the value of `key` with a new\n  // value, or adding a binding to the end of the map. If `newKey` is\n  // given, the key of the binding will be replaced with that key.\n  update: function(key, value, newKey) {\n    var self = newKey && newKey != key ? this.remove(newKey) : this;\n    var found = self.find(key), content = self.content.slice();\n    if (found == -1) {\n      content.push(newKey || key, value);\n    } else {\n      content[found + 1] = value;\n      if (newKey) content[found] = newKey;\n    }\n    return new OrderedMap(content)\n  },\n\n  // :: (string) → OrderedMap\n  // Return a map with the given key removed, if it existed.\n  remove: function(key) {\n    var found = this.find(key);\n    if (found == -1) return this\n    var content = this.content.slice();\n    content.splice(found, 2);\n    return new OrderedMap(content)\n  },\n\n  // :: (string, any) → OrderedMap\n  // Add a new key to the start of the map.\n  addToStart: function(key, value) {\n    return new OrderedMap([key, value].concat(this.remove(key).content))\n  },\n\n  // :: (string, any) → OrderedMap\n  // Add a new key to the end of the map.\n  addToEnd: function(key, value) {\n    var content = this.remove(key).content.slice();\n    content.push(key, value);\n    return new OrderedMap(content)\n  },\n\n  // :: (string, string, any) → OrderedMap\n  // Add a key after the given key. If `place` is not found, the new\n  // key is added to the end.\n  addBefore: function(place, key, value) {\n    var without = this.remove(key), content = without.content.slice();\n    var found = without.find(place);\n    content.splice(found == -1 ? content.length : found, 0, key, value);\n    return new OrderedMap(content)\n  },\n\n  // :: ((key: string, value: any))\n  // Call the given function for each key/value pair in the map, in\n  // order.\n  forEach: function(f) {\n    for (var i = 0; i < this.content.length; i += 2)\n      f(this.content[i], this.content[i + 1]);\n  },\n\n  // :: (union<Object, OrderedMap>) → OrderedMap\n  // Create a new map by prepending the keys in this map that don't\n  // appear in `map` before the keys in `map`.\n  prepend: function(map) {\n    map = OrderedMap.from(map);\n    if (!map.size) return this\n    return new OrderedMap(map.content.concat(this.subtract(map).content))\n  },\n\n  // :: (union<Object, OrderedMap>) → OrderedMap\n  // Create a new map by appending the keys in this map that don't\n  // appear in `map` after the keys in `map`.\n  append: function(map) {\n    map = OrderedMap.from(map);\n    if (!map.size) return this\n    return new OrderedMap(this.subtract(map).content.concat(map.content))\n  },\n\n  // :: (union<Object, OrderedMap>) → OrderedMap\n  // Create a map containing all the keys in this map that don't\n  // appear in `map`.\n  subtract: function(map) {\n    var result = this;\n    map = OrderedMap.from(map);\n    for (var i = 0; i < map.content.length; i += 2)\n      result = result.remove(map.content[i]);\n    return result\n  },\n\n  // :: () → Object\n  // Turn ordered map into a plain object.\n  toObject: function() {\n    var result = {};\n    this.forEach(function(key, value) { result[key] = value; });\n    return result\n  },\n\n  // :: number\n  // The amount of keys in this map.\n  get size() {\n    return this.content.length >> 1\n  }\n};\n\n// :: (?union<Object, OrderedMap>) → OrderedMap\n// Return a map with the given content. If null, create an empty\n// map. If given an ordered map, return that map itself. If given an\n// object, create a map from the object's properties.\nOrderedMap.from = function(value) {\n  if (value instanceof OrderedMap) return value\n  var content = [];\n  if (value) for (var prop in value) content.push(prop, value[prop]);\n  return new OrderedMap(content)\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderedMap);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb3JkZXJlZG1hcC9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxzQkFBc0I7QUFDOUQ7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb3VybmFsLy4vbm9kZV9tb2R1bGVzL29yZGVyZWRtYXAvZGlzdC9pbmRleC5qcz8yOTYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIDo6LSBQZXJzaXN0ZW50IGRhdGEgc3RydWN0dXJlIHJlcHJlc2VudGluZyBhbiBvcmRlcmVkIG1hcHBpbmcgZnJvbVxuLy8gc3RyaW5ncyB0byB2YWx1ZXMsIHdpdGggc29tZSBjb252ZW5pZW50IHVwZGF0ZSBtZXRob2RzLlxuZnVuY3Rpb24gT3JkZXJlZE1hcChjb250ZW50KSB7XG4gIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG59XG5cbk9yZGVyZWRNYXAucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogT3JkZXJlZE1hcCxcblxuICBmaW5kOiBmdW5jdGlvbihrZXkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29udGVudC5sZW5ndGg7IGkgKz0gMilcbiAgICAgIGlmICh0aGlzLmNvbnRlbnRbaV0gPT09IGtleSkgcmV0dXJuIGlcbiAgICByZXR1cm4gLTFcbiAgfSxcblxuICAvLyA6OiAoc3RyaW5nKSDihpIgP2FueVxuICAvLyBSZXRyaWV2ZSB0aGUgdmFsdWUgc3RvcmVkIHVuZGVyIGBrZXlgLCBvciByZXR1cm4gdW5kZWZpbmVkIHdoZW5cbiAgLy8gbm8gc3VjaCBrZXkgZXhpc3RzLlxuICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgIHZhciBmb3VuZCA9IHRoaXMuZmluZChrZXkpO1xuICAgIHJldHVybiBmb3VuZCA9PSAtMSA/IHVuZGVmaW5lZCA6IHRoaXMuY29udGVudFtmb3VuZCArIDFdXG4gIH0sXG5cbiAgLy8gOjogKHN0cmluZywgYW55LCA/c3RyaW5nKSDihpIgT3JkZXJlZE1hcFxuICAvLyBDcmVhdGUgYSBuZXcgbWFwIGJ5IHJlcGxhY2luZyB0aGUgdmFsdWUgb2YgYGtleWAgd2l0aCBhIG5ld1xuICAvLyB2YWx1ZSwgb3IgYWRkaW5nIGEgYmluZGluZyB0byB0aGUgZW5kIG9mIHRoZSBtYXAuIElmIGBuZXdLZXlgIGlzXG4gIC8vIGdpdmVuLCB0aGUga2V5IG9mIHRoZSBiaW5kaW5nIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGF0IGtleS5cbiAgdXBkYXRlOiBmdW5jdGlvbihrZXksIHZhbHVlLCBuZXdLZXkpIHtcbiAgICB2YXIgc2VsZiA9IG5ld0tleSAmJiBuZXdLZXkgIT0ga2V5ID8gdGhpcy5yZW1vdmUobmV3S2V5KSA6IHRoaXM7XG4gICAgdmFyIGZvdW5kID0gc2VsZi5maW5kKGtleSksIGNvbnRlbnQgPSBzZWxmLmNvbnRlbnQuc2xpY2UoKTtcbiAgICBpZiAoZm91bmQgPT0gLTEpIHtcbiAgICAgIGNvbnRlbnQucHVzaChuZXdLZXkgfHwga2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnRbZm91bmQgKyAxXSA9IHZhbHVlO1xuICAgICAgaWYgKG5ld0tleSkgY29udGVudFtmb3VuZF0gPSBuZXdLZXk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT3JkZXJlZE1hcChjb250ZW50KVxuICB9LFxuXG4gIC8vIDo6IChzdHJpbmcpIOKGkiBPcmRlcmVkTWFwXG4gIC8vIFJldHVybiBhIG1hcCB3aXRoIHRoZSBnaXZlbiBrZXkgcmVtb3ZlZCwgaWYgaXQgZXhpc3RlZC5cbiAgcmVtb3ZlOiBmdW5jdGlvbihrZXkpIHtcbiAgICB2YXIgZm91bmQgPSB0aGlzLmZpbmQoa2V5KTtcbiAgICBpZiAoZm91bmQgPT0gLTEpIHJldHVybiB0aGlzXG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuc2xpY2UoKTtcbiAgICBjb250ZW50LnNwbGljZShmb3VuZCwgMik7XG4gICAgcmV0dXJuIG5ldyBPcmRlcmVkTWFwKGNvbnRlbnQpXG4gIH0sXG5cbiAgLy8gOjogKHN0cmluZywgYW55KSDihpIgT3JkZXJlZE1hcFxuICAvLyBBZGQgYSBuZXcga2V5IHRvIHRoZSBzdGFydCBvZiB0aGUgbWFwLlxuICBhZGRUb1N0YXJ0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBPcmRlcmVkTWFwKFtrZXksIHZhbHVlXS5jb25jYXQodGhpcy5yZW1vdmUoa2V5KS5jb250ZW50KSlcbiAgfSxcblxuICAvLyA6OiAoc3RyaW5nLCBhbnkpIOKGkiBPcmRlcmVkTWFwXG4gIC8vIEFkZCBhIG5ldyBrZXkgdG8gdGhlIGVuZCBvZiB0aGUgbWFwLlxuICBhZGRUb0VuZDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5yZW1vdmUoa2V5KS5jb250ZW50LnNsaWNlKCk7XG4gICAgY29udGVudC5wdXNoKGtleSwgdmFsdWUpO1xuICAgIHJldHVybiBuZXcgT3JkZXJlZE1hcChjb250ZW50KVxuICB9LFxuXG4gIC8vIDo6IChzdHJpbmcsIHN0cmluZywgYW55KSDihpIgT3JkZXJlZE1hcFxuICAvLyBBZGQgYSBrZXkgYWZ0ZXIgdGhlIGdpdmVuIGtleS4gSWYgYHBsYWNlYCBpcyBub3QgZm91bmQsIHRoZSBuZXdcbiAgLy8ga2V5IGlzIGFkZGVkIHRvIHRoZSBlbmQuXG4gIGFkZEJlZm9yZTogZnVuY3Rpb24ocGxhY2UsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgd2l0aG91dCA9IHRoaXMucmVtb3ZlKGtleSksIGNvbnRlbnQgPSB3aXRob3V0LmNvbnRlbnQuc2xpY2UoKTtcbiAgICB2YXIgZm91bmQgPSB3aXRob3V0LmZpbmQocGxhY2UpO1xuICAgIGNvbnRlbnQuc3BsaWNlKGZvdW5kID09IC0xID8gY29udGVudC5sZW5ndGggOiBmb3VuZCwgMCwga2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBPcmRlcmVkTWFwKGNvbnRlbnQpXG4gIH0sXG5cbiAgLy8gOjogKChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkpXG4gIC8vIENhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGZvciBlYWNoIGtleS92YWx1ZSBwYWlyIGluIHRoZSBtYXAsIGluXG4gIC8vIG9yZGVyLlxuICBmb3JFYWNoOiBmdW5jdGlvbihmKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnQubGVuZ3RoOyBpICs9IDIpXG4gICAgICBmKHRoaXMuY29udGVudFtpXSwgdGhpcy5jb250ZW50W2kgKyAxXSk7XG4gIH0sXG5cbiAgLy8gOjogKHVuaW9uPE9iamVjdCwgT3JkZXJlZE1hcD4pIOKGkiBPcmRlcmVkTWFwXG4gIC8vIENyZWF0ZSBhIG5ldyBtYXAgYnkgcHJlcGVuZGluZyB0aGUga2V5cyBpbiB0aGlzIG1hcCB0aGF0IGRvbid0XG4gIC8vIGFwcGVhciBpbiBgbWFwYCBiZWZvcmUgdGhlIGtleXMgaW4gYG1hcGAuXG4gIHByZXBlbmQ6IGZ1bmN0aW9uKG1hcCkge1xuICAgIG1hcCA9IE9yZGVyZWRNYXAuZnJvbShtYXApO1xuICAgIGlmICghbWFwLnNpemUpIHJldHVybiB0aGlzXG4gICAgcmV0dXJuIG5ldyBPcmRlcmVkTWFwKG1hcC5jb250ZW50LmNvbmNhdCh0aGlzLnN1YnRyYWN0KG1hcCkuY29udGVudCkpXG4gIH0sXG5cbiAgLy8gOjogKHVuaW9uPE9iamVjdCwgT3JkZXJlZE1hcD4pIOKGkiBPcmRlcmVkTWFwXG4gIC8vIENyZWF0ZSBhIG5ldyBtYXAgYnkgYXBwZW5kaW5nIHRoZSBrZXlzIGluIHRoaXMgbWFwIHRoYXQgZG9uJ3RcbiAgLy8gYXBwZWFyIGluIGBtYXBgIGFmdGVyIHRoZSBrZXlzIGluIGBtYXBgLlxuICBhcHBlbmQ6IGZ1bmN0aW9uKG1hcCkge1xuICAgIG1hcCA9IE9yZGVyZWRNYXAuZnJvbShtYXApO1xuICAgIGlmICghbWFwLnNpemUpIHJldHVybiB0aGlzXG4gICAgcmV0dXJuIG5ldyBPcmRlcmVkTWFwKHRoaXMuc3VidHJhY3QobWFwKS5jb250ZW50LmNvbmNhdChtYXAuY29udGVudCkpXG4gIH0sXG5cbiAgLy8gOjogKHVuaW9uPE9iamVjdCwgT3JkZXJlZE1hcD4pIOKGkiBPcmRlcmVkTWFwXG4gIC8vIENyZWF0ZSBhIG1hcCBjb250YWluaW5nIGFsbCB0aGUga2V5cyBpbiB0aGlzIG1hcCB0aGF0IGRvbid0XG4gIC8vIGFwcGVhciBpbiBgbWFwYC5cbiAgc3VidHJhY3Q6IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzO1xuICAgIG1hcCA9IE9yZGVyZWRNYXAuZnJvbShtYXApO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFwLmNvbnRlbnQubGVuZ3RoOyBpICs9IDIpXG4gICAgICByZXN1bHQgPSByZXN1bHQucmVtb3ZlKG1hcC5jb250ZW50W2ldKTtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG5cbiAgLy8gOjogKCkg4oaSIE9iamVjdFxuICAvLyBUdXJuIG9yZGVyZWQgbWFwIGludG8gYSBwbGFpbiBvYmplY3QuXG4gIHRvT2JqZWN0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHsgcmVzdWx0W2tleV0gPSB2YWx1ZTsgfSk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuXG4gIC8vIDo6IG51bWJlclxuICAvLyBUaGUgYW1vdW50IG9mIGtleXMgaW4gdGhpcyBtYXAuXG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoID4+IDFcbiAgfVxufTtcblxuLy8gOjogKD91bmlvbjxPYmplY3QsIE9yZGVyZWRNYXA+KSDihpIgT3JkZXJlZE1hcFxuLy8gUmV0dXJuIGEgbWFwIHdpdGggdGhlIGdpdmVuIGNvbnRlbnQuIElmIG51bGwsIGNyZWF0ZSBhbiBlbXB0eVxuLy8gbWFwLiBJZiBnaXZlbiBhbiBvcmRlcmVkIG1hcCwgcmV0dXJuIHRoYXQgbWFwIGl0c2VsZi4gSWYgZ2l2ZW4gYW5cbi8vIG9iamVjdCwgY3JlYXRlIGEgbWFwIGZyb20gdGhlIG9iamVjdCdzIHByb3BlcnRpZXMuXG5PcmRlcmVkTWFwLmZyb20gPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPcmRlcmVkTWFwKSByZXR1cm4gdmFsdWVcbiAgdmFyIGNvbnRlbnQgPSBbXTtcbiAgaWYgKHZhbHVlKSBmb3IgKHZhciBwcm9wIGluIHZhbHVlKSBjb250ZW50LnB1c2gocHJvcCwgdmFsdWVbcHJvcF0pO1xuICByZXR1cm4gbmV3IE9yZGVyZWRNYXAoY29udGVudClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyZWRNYXA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/orderedmap/dist/index.js\n");

/***/ })

};
;