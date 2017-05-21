System.registerDynamic("github:zingchart/zingtouch@1.0.5/dist/zingtouch.min.js", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.registry.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {
    /*!
     * 
     * ZingTouch v1.0.5
     * Author: ZingChart http://zingchart.com
     * License: MIT
     */
    !function (e) {
      function t(r) {
        if (n[r]) return n[r].exports;var i = n[r] = { exports: {}, id: r, loaded: !1 };return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
      }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
    }([function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }var i = n(1),
          u = r(i);window.ZingTouch = u.default;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }Object.defineProperty(t, "__esModule", { value: !0 });var i = n(2),
          u = r(i),
          o = n(4),
          a = r(o),
          s = n(10),
          c = r(s),
          f = n(12),
          l = r(f),
          d = n(13),
          p = r(d),
          h = n(14),
          y = r(h),
          v = n(15),
          g = r(v),
          m = n(16),
          b = r(m),
          w = { _regions: [], Gesture: a.default, Expand: c.default, Pan: l.default, Pinch: p.default, Rotate: y.default, Swipe: g.default, Tap: b.default, Region: function (e, t, n) {
          var r = w._regions.length,
              i = new u.default(e, t, n, r);return w._regions.push(i), i;
        } };t.default = w;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var u = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }(),
          o = n(3),
          a = r(o),
          s = n(4),
          c = r(s),
          f = n(6),
          l = r(f),
          d = n(9),
          p = r(d),
          h = function () {
        function e(t, n, r, u) {
          var o = this;i(this, e), this.id = u, this.element = t, this.capture = "undefined" != typeof n && n, this.preventDefault = "undefined" == typeof r || r, this.state = new p.default(u);var a = [];a = window.PointerEvent && !window.TouchEvent ? ["pointerdown", "pointermove", "pointerup"] : ["mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchend"], a.map(function (e) {
            t.addEventListener(e, function (e) {
              (0, l.default)(e, o);
            }, o.capture);
          });
        }return u(e, [{ key: "bind", value: function (e, t, n, r, i) {
            if (!e || e && !e.tagName) throw "Bind must contain an element";return i = "undefined" != typeof i && i, t ? void this.state.addBinding(e, t, n, r, i) : new a.default(e, i, this.state);
          } }, { key: "bindOnce", value: function (e, t, n, r) {
            this.bind(e, t, n, r, !0);
          } }, { key: "unbind", value: function (e, t) {
            var n = this,
                r = this.state.retrieveBindingsByElement(e),
                i = [];return r.forEach(function (r) {
              if (t) {
                if ("string" == typeof t && n.state.registeredGestures[t]) {
                  var u = n.state.registeredGestures[t];u.id === r.gesture.id && (e.removeEventListener(r.gesture.getId(), r.handler, r.capture), i.push(r));
                }
              } else e.removeEventListener(r.gesture.getId(), r.handler, r.capture), i.push(r);
            }), i;
          } }, { key: "register", value: function (e, t) {
            if ("string" != typeof e) throw new Error("Parameter key is an invalid string");if (!t instanceof c.default) throw new Error("Parameter gesture is an invalid Gesture object");t.setType(e), this.state.registerGesture(t, e);
          } }, { key: "unregister", value: function (e) {
            this.state.bindings.forEach(function (t) {
              t.gesture.getType() === e && t.element.removeEventListener(t.gesture.getId(), t.handler, t.capture);
            });var t = this.state.registeredGestures[e];return delete this.state.registeredGestures[e], t;
          } }]), e;
      }();t.default = h;
    }, function (e, t) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var r = function e(t, r, i) {
        var u = this;n(this, e), this.element = t, Object.keys(i.registeredGestures).forEach(function (e) {
          u[e] = function (t, n) {
            return i.addBinding(u.element, e, t, n, r), u;
          };
        });
      };t.default = r;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var u = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }(),
          o = n(5),
          a = r(o),
          s = function () {
        function e() {
          i(this, e), this.type = null, this.id = null;
        }return u(e, [{ key: "setType", value: function (e) {
            this.type = e;
          } }, { key: "getType", value: function () {
            return this.type;
          } }, { key: "setId", value: function (e) {
            this.id = e;
          } }, { key: "getId", value: function () {
            return null !== this.id ? this.id : this.type;
          } }, { key: "update", value: function (e) {
            for (var t in e) this[t] && (this[t] = e[t]);
          } }, { key: "start", value: function (e, t, n) {
            return null;
          } }, { key: "move", value: function (e, t, n) {
            return null;
          } }, { key: "end", value: function (e) {
            return null;
          } }, { key: "isValid", value: function (e, t, n) {
            var r = !0;return e.length > 1 && e.forEach(function (e) {
              a.default.isInside(e.initial.x, e.initial.y, n) || (r = !1);
            }), r;
          } }]), e;
      }();t.default = s;
    }, function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });var n = 360,
          r = 180,
          i = { normalizeEvent: function (e) {
          switch (e) {case "mousedown":case "touchstart":case "pointerdown":
              return "start";case "mousemove":case "touchmove":case "pointermove":
              return "move";case "mouseup":case "touchend":case "pointerup":
              return "end";default:
              return null;}
        }, isWithin: function (e, t, n, r, i) {
          return Math.abs(t - r) <= i && Math.abs(e - n) <= i;
        }, distanceBetweenTwoPoints: function (e, t, n, r) {
          var i = Math.sqrt((t - e) * (t - e) + (r - n) * (r - n));return Math.round(100 * i) / 100;
        }, getMidpoint: function (e, t, n, r) {
          return { x: (e + t) / 2, y: (n + r) / 2 };
        }, getAngle: function (e, t, i, u) {
          var o = Math.atan2(u - t, i - e) * (r / Math.PI);return n - (o < 0 ? n + o : o);
        }, getAngularDistance: function (e, t) {
          var i = (t - e) % n,
              u = i < 0 ? 1 : -1;return i = Math.abs(i), i > r ? u * (n - i) : u * i;
        }, getVelocity: function (e, t, n, r, i, u) {
          var o = this.distanceBetweenTwoPoints(e, r, t, i);return o / (u - n);
        }, getRightMostInput: function (e) {
          var t = null,
              n = Number.MIN_VALUE;return e.forEach(function (e) {
            e.initial.x > n && (t = e);
          }), t;
        }, isInteger: function (e) {
          return "number" == typeof e && e % 1 === 0;
        }, isInside: function (e, t, n) {
          var r = n.getBoundingClientRect();return e > r.left && e < r.left + r.width && t > r.top && t < r.top + r.height;
        }, getPropagationPath: function (e) {
          if (e.path) return e.path;for (var t = [], n = e.target; n != document;) t.push(n), n = n.parentNode;return t;
        }, getPathIndex: function (e, t) {
          var n = e.length;return e.forEach(function (e, r) {
            e === t && (n = r);
          }), n;
        }, setMSPreventDefault: function (e) {
          e.style["-ms-content-zooming"] = "none", e.style["touch-action"] = "none";
        }, removeMSPreventDefault: function (e) {
          e.style["-ms-content-zooming"] = "", e.style["touch-action"] = "";
        } };t.default = i;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        var n = t.state;if (0 !== n.inputs.length || "start" === f.default.normalizeEvent(e.type)) {
          if ("undefined" != typeof e.buttons && "end" !== f.default.normalizeEvent(e.type) && 0 === e.buttons) return void n.resetInputs();if (n.updateInputs(e, t.element)) {
            var r = n.retrieveBindingsByInitialPos();r.length > 0 && !function () {
              t.preventDefault ? (f.default.setMSPreventDefault(t.element), e.preventDefault ? e.preventDefault() : e.returnValue = !1) : f.default.removeMSPreventDefault(t.element);var i = {},
                  u = (0, s.default)(r, e, n);u.forEach(function (t) {
                var n = t.binding.gesture.id;if (i[n]) {
                  var r = f.default.getPropagationPath(e);f.default.getPathIndex(r, t.binding.element) < f.default.getPathIndex(r, i[n].binding.element) && (i[n] = t);
                } else i[n] = t;
              }), Object.keys(i).forEach(function (e) {
                var t = i[e];(0, o.default)(t.binding, t.data, t.events);
              });
            }();var i = 0;n.inputs.forEach(function (e) {
              "end" === e.getCurrentEventType() && i++;
            }), i === n.inputs.length && n.resetInputs();
          }
        }
      }Object.defineProperty(t, "__esModule", { value: !0 });var u = n(7),
          o = r(u),
          a = n(8),
          s = r(a),
          c = n(5),
          f = r(c);t.default = i;
    }, function (e, t) {
      "use strict";
      function n(e, t, n) {
        t.events = n;var i = new CustomEvent(e.gesture.getId(), { detail: t, bubbles: !0, cancelable: !0 });r(e.element, i, e);
      }function r(e, t, n) {
        e.dispatchEvent(t), n.bindOnce && ZingTouch.unbind(n.element, n.gesture.getType());
      }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t, n) {
        var r = o.default.normalizeEvent(t.type),
            i = [];return e.forEach(function (e) {
          var t = e.gesture[r](n.inputs, n, e.element);t && !function () {
            var r = [];n.inputs.forEach(function (e) {
              r.push(e.current);
            }), i.push({ binding: e, data: t, events: r });
          }();
        }), i;
      }Object.defineProperty(t, "__esModule", { value: !0 });var u = n(5),
          o = r(u);t.default = i;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function u(e, t) {
        for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];return null;
      }Object.defineProperty(t, "__esModule", { value: !0 });var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }(),
          s = n(4),
          c = r(s),
          f = n(10),
          l = r(f),
          d = n(12),
          p = r(d),
          h = n(13),
          y = r(h),
          v = n(14),
          g = r(v),
          m = n(15),
          b = r(m),
          w = n(16),
          _ = r(w),
          P = n(17),
          E = r(P),
          O = n(18),
          x = r(O),
          j = n(5),
          I = r(j),
          k = 0,
          M = function () {
        function e(t) {
          i(this, e), this.regionId = t, this.inputs = [], this.bindings = [], this.numGestures = 0, this.registeredGestures = {}, this.registerGesture(new l.default(), "expand"), this.registerGesture(new p.default(), "pan"), this.registerGesture(new g.default(), "rotate"), this.registerGesture(new y.default(), "pinch"), this.registerGesture(new b.default(), "swipe"), this.registerGesture(new _.default(), "tap");
        }return a(e, [{ key: "addBinding", value: function (e, t, n, r, i) {
            var u = void 0;if (e && "undefined" == typeof e.tagName) throw new Error("Parameter element is an invalid object.");if ("function" != typeof n) throw new Error("Parameter handler is invalid.");if ("string" == typeof t && Object.keys(this.registeredGestures).indexOf(t) === -1) throw new Error("Parameter " + t + " is not a registered gesture");if ("object" === ("undefined" == typeof t ? "undefined" : o(t)) && !(t instanceof c.default)) throw new Error("Parameter for the gesture is not of a Gesture type");"string" == typeof t ? u = this.registeredGestures[t] : (u = t, "" === u.id && this.assignGestureId(u)), this.bindings.push(new E.default(e, u, n, r, i)), e.addEventListener(u.getId(), n, r);
          } }, { key: "retrieveBindingsByElement", value: function (e) {
            var t = [];return this.bindings.map(function (n) {
              n.element === e && t.push(n);
            }), t;
          } }, { key: "retrieveBindingsByInitialPos", value: function () {
            var e = this,
                t = [];return this.bindings.forEach(function (n) {
              var r = e.inputs.filter(function (e) {
                return I.default.isInside(e.initial.x, e.initial.y, n.element);
              });r.length > 0 && t.push(n);
            }), t;
          } }, { key: "updateInputs", value: function (e, t) {
            function n(e, t, n, r) {
              var i = I.default.normalizeEvent(e.type),
                  o = u(t.inputs, n);return "start" === i && o ? void t.resetInputs() : "start" !== i && o && !I.default.isInside(o.current.x, o.current.y, r) ? void t.resetInputs() : "start" === i || o ? void ("start" === i ? t.inputs.push(new x.default(e, n)) : o.update(e, n)) : void t.resetInputs();
            }var r = k,
                i = e.touches ? "TouchEvent" : e.pointerType ? "PointerEvent" : "MouseEvent";switch (i) {case "TouchEvent":
                for (var o in e.changedTouches) e.changedTouches.hasOwnProperty(o) && I.default.isInteger(parseInt(o)) && (r = e.changedTouches[o].identifier, n(e, this, r, t));break;case "PointerEvent":
                r = e.pointerId, n(e, this, r, t);break;case "MouseEvent":default:
                n(e, this, k, t);}return !0;
          } }, { key: "resetInputs", value: function () {
            this.inputs = [];
          } }, { key: "numActiveInputs", value: function () {
            var e = this.inputs.filter(function (e) {
              return "end" !== e.current.type;
            });return e.length;
          } }, { key: "registerGesture", value: function (e, t) {
            this.assignGestureId(e), this.registeredGestures[t] = e;
          } }, { key: "assignGestureId", value: function (e) {
            e.setId(this.regionId + "-" + this.numGestures++);
          } }]), e;
      }();t.default = M;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(11),
          s = r(a),
          c = function (e) {
        function t(e) {
          i(this, t);var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.type = "expand", n;
        }return o(t, e), t;
      }(s.default);t.default = c;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }(),
          s = n(4),
          c = r(s),
          f = n(5),
          l = r(f),
          d = 2,
          p = 1,
          h = function (e) {
        function t(e) {
          i(this, t);var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return n.type = "distance", n.threshold = e && e.threshold ? e.threshold : p, n;
        }return o(t, e), a(t, [{ key: "start", value: function (e, t, n) {
            if (!this.isValid(e, t, n)) return null;if (e.length === d) {
              var r = e[0].getGestureProgress(this.type);r.lastEmittedDistance = l.default.distanceBetweenTwoPoints(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y);
            }
          } }, { key: "move", value: function (e, t, n) {
            if (t.numActiveInputs() === d) {
              var r = l.default.distanceBetweenTwoPoints(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y),
                  i = l.default.distanceBetweenTwoPoints(e[0].previous.x, e[1].previous.x, e[0].previous.y, e[1].previous.y),
                  u = l.default.getMidpoint(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y),
                  o = e[0].getGestureProgress(this.type);if ("expand" === this.type) {
                if (r < i) o.lastEmittedDistance = r;else if (r - o.lastEmittedDistance >= this.threshold) return o.lastEmittedDistance = r, { distance: r, center: u };
              } else if (r > i) o.lastEmittedDistance = r;else if (r < i && o.lastEmittedDistance - r >= this.threshold) return o.lastEmittedDistance = r, { distance: r, center: u };return null;
            }
          } }]), t;
      }(c.default);t.default = h;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }(),
          s = n(4),
          c = r(s),
          f = n(5),
          l = r(f),
          d = 1,
          p = 1,
          h = function (e) {
        function t(e) {
          i(this, t);var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return n.type = "pan", n.numInputs = e && e.numInputs ? e.numInputs : d, n.threshold = e && e.threshold ? e.threshold : p, n;
        }return o(t, e), a(t, [{ key: "start", value: function (e) {
            var t = this;e.forEach(function (e) {
              var n = e.getGestureProgress(t.getId());n.active = !0, n.lastEmitted = { x: e.current.x, y: e.current.y };
            });
          } }, { key: "move", value: function (e, t, n) {
            if (this.numInputs === e.length) for (var r = { data: [] }, i = 0; i < e.length; i++) {
              var u = e[i].getGestureProgress(this.getId()),
                  o = !1,
                  a = Math.abs(e[i].current.y - u.lastEmitted.y) > this.threshold,
                  s = Math.abs(e[i].current.x - u.lastEmitted.x) > this.threshold;if (o = a || s, !u.active || !o) return null;r.data[i] = { distanceFromOrigin: l.default.distanceBetweenTwoPoints(e[i].initial.x, e[i].current.x, e[i].initial.y, e[i].current.y), directionFromOrigin: l.default.getAngle(e[i].initial.x, e[i].initial.y, e[i].current.x, e[i].current.y), currentDirection: l.default.getAngle(u.lastEmitted.x, u.lastEmitted.y, e[i].current.x, e[i].current.y) }, u.lastEmitted.x = e[i].current.x, u.lastEmitted.y = e[i].current.y;
            }return r;
          } }, { key: "end", value: function (e) {
            var t = this;return e.forEach(function (e) {
              var n = e.getGestureProgress(t.getId());n.active = !1;
            }), null;
          } }]), t;
      }(c.default);t.default = h;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(11),
          s = r(a),
          c = n(5),
          f = (r(c), function (e) {
        function t(e) {
          i(this, t);var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.type = "pinch", n;
        }return o(t, e), t;
      }(s.default));t.default = f;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }(),
          s = n(4),
          c = r(s),
          f = n(5),
          l = r(f),
          d = 2,
          p = function (e) {
        function t() {
          i(this, t);var e = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return e.type = "rotate", e;
        }return o(t, e), a(t, [{ key: "move", value: function (e, t, n) {
            if (t.numActiveInputs() <= d) {
              var r = void 0,
                  i = void 0,
                  u = void 0,
                  o = void 0;if (1 === t.numActiveInputs()) {
                var a = n.getBoundingClientRect();r = { x: a.left + a.width / 2, y: a.top + a.height / 2 }, o = e[0], i = u = 0;
              } else {
                r = l.default.getMidpoint(e[0].initial.x, e[1].initial.x, e[0].initial.y, e[1].initial.y);var s = l.default.getMidpoint(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y);i = r.x - s.x, u = r.y - s.y, o = l.default.getRightMostInput(e);
              }var c = l.default.getAngle(r.x, r.y, o.current.x + i, o.current.y + u),
                  f = o.getGestureProgress(this.getId());return f.initialAngle ? (f.change = l.default.getAngularDistance(f.previousAngle, c), f.distance = f.distance + f.change) : (f.initialAngle = f.previousAngle = c, f.distance = f.change = 0), f.previousAngle = c, { angle: c, distanceFromOrigin: f.distance, distanceFromLast: f.change };
            }return null;
          } }]), t;
      }(c.default);t.default = p;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }(),
          s = n(4),
          c = r(s),
          f = n(5),
          l = r(f),
          d = 1,
          p = 100,
          h = .2,
          y = 100,
          v = 10,
          g = function (e) {
        function t(e) {
          i(this, t);var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return n.type = "swipe", n.numInputs = e && e.numInputs ? e.numInputs : d, n.maxRestTime = e && e.maxRestTime ? e.maxRestTime : p, n.escapeVelocity = e && e.escapeVelocity ? e.escapeVelocity : h, n.timeDistortion = e && e.timeDistortion ? e.timeDistortion : y, n.maxProgressStack = e && e.maxProgressStack ? e.maxProgressStack : v, n;
        }return o(t, e), a(t, [{ key: "move", value: function (e, t, n) {
            if (this.numInputs === e.length) for (var r = 0; r < e.length; r++) {
              var i = e[r].getGestureProgress(this.getId());i.moves || (i.moves = []), i.moves.push({ time: new Date().getTime(), x: e[r].current.x, y: e[r].current.y }), i.length > this.maxProgressStack && i.moves.shift();
            }return null;
          } }, { key: "end", value: function (e) {
            if (this.numInputs === e.length) {
              for (var t = { data: [] }, n = 0; n < e.length; n++) {
                if ("end" !== e[n].current.type) return;var r = e[n].getGestureProgress(this.getId());if (r.moves && r.moves.length > 2) {
                  var i = r.moves.pop();if (new Date().getTime() - i.time > this.maxRestTime) return null;for (var u = void 0, o = r.moves.length - 1; o !== -1;) {
                    if (r.moves[o].time !== i.time) {
                      u = r.moves[o];break;
                    }o--;
                  }u || (u = r.moves.pop(), u.time += this.timeDistortion);var a = l.default.getVelocity(u.x, u.y, u.time, i.x, i.y, i.time);t.data[n] = { velocity: a, currentDirection: l.default.getAngle(u.x, u.y, i.x, i.y) };
                }
              }for (var n = 0; n < t.data.length; n++) if (a < this.escapeVelocity) return null;if (t.data.length > 0) return t;
            }return null;
          } }]), t;
      }(c.default);t.default = g;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      },
          s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }(),
          c = n(4),
          f = r(c),
          l = n(5),
          d = r(l),
          p = 0,
          h = 300,
          y = 1,
          v = 10,
          g = function (e) {
        function t(e) {
          i(this, t);var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return n.type = "tap", n.minDelay = e && e.minDelay ? e.minDelay : p, n.maxDelay = e && e.maxDelay ? e.maxDelay : h, n.numInputs = e && e.numInputs ? e.numInputs : y, n.tolerance = e && e.tolerance ? e.tolerance : v, n;
        }return o(t, e), s(t, [{ key: "start", value: function (e) {
            var t = this;return e.length === this.numInputs && e.forEach(function (e) {
              var n = e.getGestureProgress(t.type);n.start = new Date().getTime();
            }), null;
          } }, { key: "move", value: function (e, t, n) {
            for (var r = this, i = 0; i < e.length; i++) if ("move" === e[i].getCurrentEventType()) {
              var u = e[i].current,
                  o = e[i].previous;if (!d.default.isWithin(u.x, u.y, o.x, o.y, this.tolerance)) {
                var s = function () {
                  var t = r.type;return e.forEach(function (e) {
                    e.resetProgress(t);
                  }), { v: null };
                }();if ("object" === ("undefined" == typeof s ? "undefined" : a(s))) return s.v;
              }
            }return null;
          } }, { key: "end", value: function (e) {
            var t = this;if (e.length !== this.numInputs) return null;for (var n = Number.MAX_VALUE, r = 0; r < e.length; r++) {
              if ("end" !== e[r].getCurrentEventType()) return null;var i = e[r].getGestureProgress(this.type);if (!i.start) return null;i.start < n && (n = i.start);
            }var u = new Date().getTime() - n;if (this.minDelay <= u && this.maxDelay >= u) return { interval: u };var o = function () {
              var n = t.type;return e.forEach(function (e) {
                e.resetProgress(n);
              }), { v: null };
            }();return "object" === ("undefined" == typeof o ? "undefined" : a(o)) ? o.v : void 0;
          } }]), t;
      }(f.default);t.default = g;
    }, function (e, t) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var r = function e(t, r, i, u, o) {
        n(this, e), this.element = t, this.gesture = r, this.handler = i, this.capture = "undefined" != typeof u && u, this.bindOnce = "undefined" != typeof o && o;
      };t.default = r;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var u = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }(),
          o = n(19),
          a = r(o),
          s = function () {
        function e(t, n) {
          i(this, e);var r = new a.default(t, n);this.initial = r, this.current = r, this.previous = r, this.identifier = "undefined" != typeof n ? n : 0, this.progress = {};
        }return u(e, [{ key: "update", value: function (e, t) {
            this.previous = this.current, this.current = new a.default(e, t);
          } }, { key: "getGestureProgress", value: function (e) {
            return this.progress[e] || (this.progress[e] = {}), this.progress[e];
          } }, { key: "getCurrentEventType", value: function () {
            return this.current.type;
          } }, { key: "resetProgress", value: function (e) {
            this.progress[e] = {};
          } }]), e;
      }();t.default = s;
    }, function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var u = n(5),
          o = r(u),
          a = 0,
          s = function e(t, n) {
        i(this, e), this.originalEvent = t, this.type = o.default.normalizeEvent(t.type), this.x = a, this.y = a;var r = void 0;if (t.touches && t.changedTouches) {
          for (var u = 0; u < t.changedTouches.length; u++) if (t.changedTouches[u].identifier === n) {
            r = t.changedTouches[u];break;
          }
        } else r = t;this.x = this.clientX = r.clientX, this.y = this.clientY = r.clientY, this.pageX = r.pageX, this.pageY = r.pageY, this.screenX = r.screenX, this.screenY = r.screenY;
      };t.default = s;
    }]);
    
  })(this);

  return _retrieveGlobal();
});
System.registerDynamic("github:zingchart/zingtouch@1.0.5.json", [], true, function() {
  return {
    "main": "index.js"
  };
});

System.registerDynamic('github:zingchart/zingtouch@1.0.5/index.js', ['./dist/zingtouch.min.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  $__require('./dist/zingtouch.min.js');
  module.exports = ZingTouch;
});
System.register("npm:systemjs-plugin-babel@0.0.21/babel-helpers/createClass.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }());
    }
  };
});
System.registerDynamic("github:web-animations/web-animations-js@2.2.5.json", [], true, function() {
  return {
    "main": "web-animations.min.js"
  };
});

System.registerDynamic("github:web-animations/web-animations-js@2.2.5/web-animations-next.min.js", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.registry.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {
    // Copyright 2014 Google Inc. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    //     You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    //     See the License for the specific language governing permissions and
    // limitations under the License.

    !function (a, b) {
      var c = {},
          d = {},
          e = {},
          f = null;!function (a, b) {
        function c(a) {
          if ("number" == typeof a) return a;var b = {};for (var c in a) b[c] = a[c];return b;
        }function d() {
          this._delay = 0, this._endDelay = 0, this._fill = "none", this._iterationStart = 0, this._iterations = 1, this._duration = 0, this._playbackRate = 1, this._direction = "normal", this._easing = "linear", this._easingFunction = x;
        }function e() {
          return a.isDeprecated("Invalid timing inputs", "2016-03-02", "TypeError exceptions will be thrown instead.", !0);
        }function f(b, c, e) {
          var f = new d();return c && (f.fill = "both", f.duration = "auto"), "number" != typeof b || isNaN(b) ? void 0 !== b && Object.getOwnPropertyNames(b).forEach(function (c) {
            if ("auto" != b[c]) {
              if (("number" == typeof f[c] || "duration" == c) && ("number" != typeof b[c] || isNaN(b[c]))) return;if ("fill" == c && -1 == v.indexOf(b[c])) return;if ("direction" == c && -1 == w.indexOf(b[c])) return;if ("playbackRate" == c && 1 !== b[c] && a.isDeprecated("AnimationEffectTiming.playbackRate", "2014-11-28", "Use Animation.playbackRate instead.")) return;f[c] = b[c];
            }
          }) : f.duration = b, f;
        }function g(a) {
          return "number" == typeof a && (a = isNaN(a) ? { duration: 0 } : { duration: a }), a;
        }function h(b, c) {
          return b = a.numericTimingToObject(b), f(b, c);
        }function i(a, b, c, d) {
          return a < 0 || a > 1 || c < 0 || c > 1 ? x : function (e) {
            function f(a, b, c) {
              return 3 * a * (1 - c) * (1 - c) * c + 3 * b * (1 - c) * c * c + c * c * c;
            }if (e <= 0) {
              var g = 0;return a > 0 ? g = b / a : !b && c > 0 && (g = d / c), g * e;
            }if (e >= 1) {
              var h = 0;return c < 1 ? h = (d - 1) / (c - 1) : 1 == c && a < 1 && (h = (b - 1) / (a - 1)), 1 + h * (e - 1);
            }for (var i = 0, j = 1; i < j;) {
              var k = (i + j) / 2,
                  l = f(a, c, k);if (Math.abs(e - l) < 1e-5) return f(b, d, k);l < e ? i = k : j = k;
            }return f(b, d, k);
          };
        }function j(a, b) {
          return function (c) {
            if (c >= 1) return 1;var d = 1 / a;return (c += b * d) - c % d;
          };
        }function k(a) {
          C || (C = document.createElement("div").style), C.animationTimingFunction = "", C.animationTimingFunction = a;var b = C.animationTimingFunction;if ("" == b && e()) throw new TypeError(a + " is not a valid value for easing");return b;
        }function l(a) {
          if ("linear" == a) return x;var b = E.exec(a);if (b) return i.apply(this, b.slice(1).map(Number));var c = F.exec(a);return c ? j(Number(c[1]), { start: y, middle: z, end: A }[c[2]]) : B[a] || x;
        }function m(a) {
          return Math.abs(n(a) / a.playbackRate);
        }function n(a) {
          return 0 === a.duration || 0 === a.iterations ? 0 : a.duration * a.iterations;
        }function o(a, b, c) {
          if (null == b) return G;var d = c.delay + a + c.endDelay;return b < Math.min(c.delay, d) ? H : b >= Math.min(c.delay + a, d) ? I : J;
        }function p(a, b, c, d, e) {
          switch (d) {case H:
              return "backwards" == b || "both" == b ? 0 : null;case J:
              return c - e;case I:
              return "forwards" == b || "both" == b ? a : null;case G:
              return null;}
        }function q(a, b, c, d, e) {
          var f = e;return 0 === a ? b !== H && (f += c) : f += d / a, f;
        }function r(a, b, c, d, e, f) {
          var g = a === 1 / 0 ? b % 1 : a % 1;return 0 !== g || c !== I || 0 === d || 0 === e && 0 !== f || (g = 1), g;
        }function s(a, b, c, d) {
          return a === I && b === 1 / 0 ? 1 / 0 : 1 === c ? Math.floor(d) - 1 : Math.floor(d);
        }function t(a, b, c) {
          var d = a;if ("normal" !== a && "reverse" !== a) {
            var e = b;"alternate-reverse" === a && (e += 1), d = "normal", e !== 1 / 0 && e % 2 != 0 && (d = "reverse");
          }return "normal" === d ? c : 1 - c;
        }function u(a, b, c) {
          var d = o(a, b, c),
              e = p(a, c.fill, b, d, c.delay);if (null === e) return null;var f = q(c.duration, d, c.iterations, e, c.iterationStart),
              g = r(f, c.iterationStart, d, c.iterations, e, c.duration),
              h = s(d, c.iterations, g, f),
              i = t(c.direction, h, g);return c._easingFunction(i);
        }var v = "backwards|forwards|both|none".split("|"),
            w = "reverse|alternate|alternate-reverse".split("|"),
            x = function (a) {
          return a;
        };d.prototype = { _setMember: function (b, c) {
            this["_" + b] = c, this._effect && (this._effect._timingInput[b] = c, this._effect._timing = a.normalizeTimingInput(this._effect._timingInput), this._effect.activeDuration = a.calculateActiveDuration(this._effect._timing), this._effect._animation && this._effect._animation._rebuildUnderlyingAnimation());
          }, get playbackRate() {
            return this._playbackRate;
          }, set delay(a) {
            this._setMember("delay", a);
          }, get delay() {
            return this._delay;
          }, set endDelay(a) {
            this._setMember("endDelay", a);
          }, get endDelay() {
            return this._endDelay;
          }, set fill(a) {
            this._setMember("fill", a);
          }, get fill() {
            return this._fill;
          }, set iterationStart(a) {
            if ((isNaN(a) || a < 0) && e()) throw new TypeError("iterationStart must be a non-negative number, received: " + timing.iterationStart);this._setMember("iterationStart", a);
          }, get iterationStart() {
            return this._iterationStart;
          }, set duration(a) {
            if ("auto" != a && (isNaN(a) || a < 0) && e()) throw new TypeError("duration must be non-negative or auto, received: " + a);this._setMember("duration", a);
          }, get duration() {
            return this._duration;
          }, set direction(a) {
            this._setMember("direction", a);
          }, get direction() {
            return this._direction;
          }, set easing(a) {
            this._easingFunction = l(k(a)), this._setMember("easing", a);
          }, get easing() {
            return this._easing;
          }, set iterations(a) {
            if ((isNaN(a) || a < 0) && e()) throw new TypeError("iterations must be non-negative, received: " + a);this._setMember("iterations", a);
          }, get iterations() {
            return this._iterations;
          } };var y = 1,
            z = .5,
            A = 0,
            B = { ease: i(.25, .1, .25, 1), "ease-in": i(.42, 0, 1, 1), "ease-out": i(0, 0, .58, 1), "ease-in-out": i(.42, 0, .58, 1), "step-start": j(1, y), "step-middle": j(1, z), "step-end": j(1, A) },
            C = null,
            D = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
            E = new RegExp("cubic-bezier\\(" + D + "," + D + "," + D + "," + D + "\\)"),
            F = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
            G = 0,
            H = 1,
            I = 2,
            J = 3;a.cloneTimingInput = c, a.makeTiming = f, a.numericTimingToObject = g, a.normalizeTimingInput = h, a.calculateActiveDuration = m, a.calculateIterationProgress = u, a.calculatePhase = o, a.normalizeEasing = k, a.parseEasingFunction = l;
      }(c), function (a, b) {
        function c(a, b) {
          return a in k ? k[a][b] || b : b;
        }function d(a) {
          return "display" === a || 0 === a.lastIndexOf("animation", 0) || 0 === a.lastIndexOf("transition", 0);
        }function e(a, b, e) {
          if (!d(a)) {
            var f = h[a];if (f) {
              i.style[a] = b;for (var g in f) {
                var j = f[g],
                    k = i.style[j];e[j] = c(j, k);
              }
            } else e[a] = c(a, b);
          }
        }function f(a) {
          var b = [];for (var c in a) if (!(c in ["easing", "offset", "composite"])) {
            var d = a[c];Array.isArray(d) || (d = [d]);for (var e, f = d.length, g = 0; g < f; g++) e = {}, e.offset = "offset" in a ? a.offset : 1 == f ? 1 : g / (f - 1), "easing" in a && (e.easing = a.easing), "composite" in a && (e.composite = a.composite), e[c] = d[g], b.push(e);
          }return b.sort(function (a, b) {
            return a.offset - b.offset;
          }), b;
        }function g(b) {
          function c() {
            var a = d.length;null == d[a - 1].offset && (d[a - 1].offset = 1), a > 1 && null == d[0].offset && (d[0].offset = 0);for (var b = 0, c = d[0].offset, e = 1; e < a; e++) {
              var f = d[e].offset;if (null != f) {
                for (var g = 1; g < e - b; g++) d[b + g].offset = c + (f - c) * g / (e - b);b = e, c = f;
              }
            }
          }if (null == b) return [];window.Symbol && Symbol.iterator && Array.prototype.from && b[Symbol.iterator] && (b = Array.from(b)), Array.isArray(b) || (b = f(b));for (var d = b.map(function (b) {
            var c = {};for (var d in b) {
              var f = b[d];if ("offset" == d) {
                if (null != f) {
                  if (f = Number(f), !isFinite(f)) throw new TypeError("Keyframe offsets must be numbers.");if (f < 0 || f > 1) throw new TypeError("Keyframe offsets must be between 0 and 1.");
                }
              } else if ("composite" == d) {
                if ("add" == f || "accumulate" == f) throw { type: DOMException.NOT_SUPPORTED_ERR, name: "NotSupportedError", message: "add compositing is not supported" };if ("replace" != f) throw new TypeError("Invalid composite mode " + f + ".");
              } else f = "easing" == d ? a.normalizeEasing(f) : "" + f;e(d, f, c);
            }return void 0 == c.offset && (c.offset = null), void 0 == c.easing && (c.easing = "linear"), c;
          }), g = !0, h = -1 / 0, i = 0; i < d.length; i++) {
            var j = d[i].offset;if (null != j) {
              if (j < h) throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");h = j;
            } else g = !1;
          }return d = d.filter(function (a) {
            return a.offset >= 0 && a.offset <= 1;
          }), g || c(), d;
        }var h = { background: ["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"], border: ["borderTopColor", "borderTopStyle", "borderTopWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth"], borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"], borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"], borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"], borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"], borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"], borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"], flex: ["flexGrow", "flexShrink", "flexBasis"], font: ["fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "lineHeight"], margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"], outline: ["outlineColor", "outlineStyle", "outlineWidth"], padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"] },
            i = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
            j = { thin: "1px", medium: "3px", thick: "5px" },
            k = { borderBottomWidth: j, borderLeftWidth: j, borderRightWidth: j, borderTopWidth: j, fontSize: { "xx-small": "60%", "x-small": "75%", small: "89%", medium: "100%", large: "120%", "x-large": "150%", "xx-large": "200%" }, fontWeight: { normal: "400", bold: "700" }, outlineWidth: j, textShadow: { none: "0px 0px 0px transparent" }, boxShadow: { none: "0px 0px 0px 0px transparent" } };a.convertToArrayForm = f, a.normalizeKeyframes = g;
      }(c), function (a) {
        var b = {};a.isDeprecated = function (a, c, d, e) {
          var f = e ? "are" : "is",
              g = new Date(),
              h = new Date(c);return h.setMonth(h.getMonth() + 3), !(g < h && (a in b || console.warn("Web Animations: " + a + " " + f + " deprecated and will stop working on " + h.toDateString() + ". " + d), b[a] = !0, 1));
        }, a.deprecated = function (b, c, d, e) {
          var f = e ? "are" : "is";if (a.isDeprecated(b, c, d, e)) throw new Error(b + " " + f + " no longer supported. " + d);
        };
      }(c), function () {
        if (document.documentElement.animate) {
          var a = document.documentElement.animate([], 0),
              b = !0;if (a && (b = !1, "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function (c) {
            void 0 === a[c] && (b = !0);
          })), !b) return;
        }!function (a, b, c) {
          function d(a) {
            for (var b = {}, c = 0; c < a.length; c++) for (var d in a[c]) if ("offset" != d && "easing" != d && "composite" != d) {
              var e = { offset: a[c].offset, easing: a[c].easing, value: a[c][d] };b[d] = b[d] || [], b[d].push(e);
            }for (var f in b) {
              var g = b[f];if (0 != g[0].offset || 1 != g[g.length - 1].offset) throw { type: DOMException.NOT_SUPPORTED_ERR, name: "NotSupportedError", message: "Partial keyframes are not supported" };
            }return b;
          }function e(c) {
            var d = [];for (var e in c) for (var f = c[e], g = 0; g < f.length - 1; g++) {
              var h = g,
                  i = g + 1,
                  j = f[h].offset,
                  k = f[i].offset,
                  l = j,
                  m = k;0 == g && (l = -1 / 0, 0 == k && (i = h)), g == f.length - 2 && (m = 1 / 0, 1 == j && (h = i)), d.push({ applyFrom: l, applyTo: m, startOffset: f[h].offset, endOffset: f[i].offset, easingFunction: a.parseEasingFunction(f[h].easing), property: e, interpolation: b.propertyInterpolation(e, f[h].value, f[i].value) });
            }return d.sort(function (a, b) {
              return a.startOffset - b.startOffset;
            }), d;
          }b.convertEffectInput = function (c) {
            var f = a.normalizeKeyframes(c),
                g = d(f),
                h = e(g);return function (a, c) {
              if (null != c) h.filter(function (a) {
                return c >= a.applyFrom && c < a.applyTo;
              }).forEach(function (d) {
                var e = c - d.startOffset,
                    f = d.endOffset - d.startOffset,
                    g = 0 == f ? 0 : d.easingFunction(e / f);b.apply(a, d.property, d.interpolation(g));
              });else for (var d in g) "offset" != d && "easing" != d && "composite" != d && b.clear(a, d);
            };
          };
        }(c, d), function (a, b, c) {
          function d(a) {
            return a.replace(/-(.)/g, function (a, b) {
              return b.toUpperCase();
            });
          }function e(a, b, c) {
            h[c] = h[c] || [], h[c].push([a, b]);
          }function f(a, b, c) {
            for (var f = 0; f < c.length; f++) {
              e(a, b, d(c[f]));
            }
          }function g(c, e, f) {
            var g = c;/-/.test(c) && !a.isDeprecated("Hyphenated property names", "2016-03-22", "Use camelCase instead.", !0) && (g = d(c)), "initial" != e && "initial" != f || ("initial" == e && (e = i[g]), "initial" == f && (f = i[g]));for (var j = e == f ? [] : h[g], k = 0; j && k < j.length; k++) {
              var l = j[k][0](e),
                  m = j[k][0](f);if (void 0 !== l && void 0 !== m) {
                var n = j[k][1](l, m);if (n) {
                  var o = b.Interpolation.apply(null, n);return function (a) {
                    return 0 == a ? e : 1 == a ? f : o(a);
                  };
                }
              }
            }return b.Interpolation(!1, !0, function (a) {
              return a ? f : e;
            });
          }var h = {};b.addPropertiesHandler = f;var i = { backgroundColor: "transparent", backgroundPosition: "0% 0%", borderBottomColor: "currentColor", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderBottomWidth: "3px", borderLeftColor: "currentColor", borderLeftWidth: "3px", borderRightColor: "currentColor", borderRightWidth: "3px", borderSpacing: "2px", borderTopColor: "currentColor", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", borderTopWidth: "3px", bottom: "auto", clip: "rect(0px, 0px, 0px, 0px)", color: "black", fontSize: "100%", fontWeight: "400", height: "auto", left: "auto", letterSpacing: "normal", lineHeight: "120%", marginBottom: "0px", marginLeft: "0px", marginRight: "0px", marginTop: "0px", maxHeight: "none", maxWidth: "none", minHeight: "0px", minWidth: "0px", opacity: "1.0", outlineColor: "invert", outlineOffset: "0px", outlineWidth: "3px", paddingBottom: "0px", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", right: "auto", strokeDasharray: "none", strokeDashoffset: "0px", textIndent: "0px", textShadow: "0px 0px 0px transparent", top: "auto", transform: "", verticalAlign: "0px", visibility: "visible", width: "auto", wordSpacing: "normal", zIndex: "auto" };b.propertyInterpolation = g;
        }(c, d), function (a, b, c) {
          function d(b) {
            var c = a.calculateActiveDuration(b),
                d = function (d) {
              return a.calculateIterationProgress(c, d, b);
            };return d._totalDuration = b.delay + c + b.endDelay, d;
          }b.KeyframeEffect = function (c, e, f, g) {
            var h,
                i = d(a.normalizeTimingInput(f)),
                j = b.convertEffectInput(e),
                k = function () {
              j(c, h);
            };return k._update = function (a) {
              return null !== (h = i(a));
            }, k._clear = function () {
              j(c, null);
            }, k._hasSameTarget = function (a) {
              return c === a;
            }, k._target = c, k._totalDuration = i._totalDuration, k._id = g, k;
          };
        }(c, d), function (a, b) {
          function c(a, b, c) {
            c.enumerable = !0, c.configurable = !0, Object.defineProperty(a, b, c);
          }function d(a) {
            this._surrogateStyle = document.createElementNS("http://www.w3.org/1999/xhtml", "div").style, this._style = a.style, this._length = 0, this._isAnimatedProperty = {};for (var b = 0; b < this._style.length; b++) {
              var c = this._style[b];this._surrogateStyle[c] = this._style[c];
            }this._updateIndices();
          }function e(a) {
            if (!a._webAnimationsPatchedStyle) {
              var b = new d(a);try {
                c(a, "style", { get: function () {
                    return b;
                  } });
              } catch (b) {
                a.style._set = function (b, c) {
                  a.style[b] = c;
                }, a.style._clear = function (b) {
                  a.style[b] = "";
                };
              }a._webAnimationsPatchedStyle = a.style;
            }
          }var f = { cssText: 1, length: 1, parentRule: 1 },
              g = { getPropertyCSSValue: 1, getPropertyPriority: 1, getPropertyValue: 1, item: 1, removeProperty: 1, setProperty: 1 },
              h = { removeProperty: 1, setProperty: 1 };d.prototype = { get cssText() {
              return this._surrogateStyle.cssText;
            }, set cssText(a) {
              for (var b = {}, c = 0; c < this._surrogateStyle.length; c++) b[this._surrogateStyle[c]] = !0;this._surrogateStyle.cssText = a, this._updateIndices();for (var c = 0; c < this._surrogateStyle.length; c++) b[this._surrogateStyle[c]] = !0;for (var d in b) this._isAnimatedProperty[d] || this._style.setProperty(d, this._surrogateStyle.getPropertyValue(d));
            }, get length() {
              return this._surrogateStyle.length;
            }, get parentRule() {
              return this._style.parentRule;
            }, _updateIndices: function () {
              for (; this._length < this._surrogateStyle.length;) Object.defineProperty(this, this._length, { configurable: !0, enumerable: !1, get: function (a) {
                  return function () {
                    return this._surrogateStyle[a];
                  };
                }(this._length) }), this._length++;for (; this._length > this._surrogateStyle.length;) this._length--, Object.defineProperty(this, this._length, { configurable: !0, enumerable: !1, value: void 0 });
            }, _set: function (a, b) {
              this._style[a] = b, this._isAnimatedProperty[a] = !0;
            }, _clear: function (a) {
              this._style[a] = this._surrogateStyle[a], delete this._isAnimatedProperty[a];
            } };for (var i in g) d.prototype[i] = function (a, b) {
            return function () {
              var c = this._surrogateStyle[a].apply(this._surrogateStyle, arguments);return b && (this._isAnimatedProperty[arguments[0]] || this._style[a].apply(this._style, arguments), this._updateIndices()), c;
            };
          }(i, i in h);for (var j in document.documentElement.style) j in f || j in g || function (a) {
            c(d.prototype, a, { get: function () {
                return this._surrogateStyle[a];
              }, set: function (b) {
                this._surrogateStyle[a] = b, this._updateIndices(), this._isAnimatedProperty[a] || (this._style[a] = b);
              } });
          }(j);a.apply = function (b, c, d) {
            e(b), b.style._set(a.propertyName(c), d);
          }, a.clear = function (b, c) {
            b._webAnimationsPatchedStyle && b.style._clear(a.propertyName(c));
          };
        }(d), function (a) {
          window.Element.prototype.animate = function (b, c) {
            var d = "";return c && c.id && (d = c.id), a.timeline._play(a.KeyframeEffect(this, b, c, d));
          };
        }(d), function (a, b) {
          function c(a, b, d) {
            if ("number" == typeof a && "number" == typeof b) return a * (1 - d) + b * d;if ("boolean" == typeof a && "boolean" == typeof b) return d < .5 ? a : b;if (a.length == b.length) {
              for (var e = [], f = 0; f < a.length; f++) e.push(c(a[f], b[f], d));return e;
            }throw "Mismatched interpolation arguments " + a + ":" + b;
          }a.Interpolation = function (a, b, d) {
            return function (e) {
              return d(c(a, b, e));
            };
          };
        }(d), function (a, b) {
          function c(a, b, c) {
            return Math.max(Math.min(a, c), b);
          }function d(b, d, e) {
            var f = a.dot(b, d);f = c(f, -1, 1);var g = [];if (1 === f) g = b;else for (var h = Math.acos(f), i = 1 * Math.sin(e * h) / Math.sqrt(1 - f * f), j = 0; j < 4; j++) g.push(b[j] * (Math.cos(e * h) - f * i) + d[j] * i);return g;
          }var e = function () {
            function a(a, b) {
              for (var c = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], d = 0; d < 4; d++) for (var e = 0; e < 4; e++) for (var f = 0; f < 4; f++) c[d][e] += b[d][f] * a[f][e];return c;
            }function b(a) {
              return 0 == a[0][2] && 0 == a[0][3] && 0 == a[1][2] && 0 == a[1][3] && 0 == a[2][0] && 0 == a[2][1] && 1 == a[2][2] && 0 == a[2][3] && 0 == a[3][2] && 1 == a[3][3];
            }function c(c, d, e, f, g) {
              for (var h = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], i = 0; i < 4; i++) h[i][3] = g[i];for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) h[3][i] += c[j] * h[j][i];var k = f[0],
                  l = f[1],
                  m = f[2],
                  n = f[3],
                  o = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];o[0][0] = 1 - 2 * (l * l + m * m), o[0][1] = 2 * (k * l - m * n), o[0][2] = 2 * (k * m + l * n), o[1][0] = 2 * (k * l + m * n), o[1][1] = 1 - 2 * (k * k + m * m), o[1][2] = 2 * (l * m - k * n), o[2][0] = 2 * (k * m - l * n), o[2][1] = 2 * (l * m + k * n), o[2][2] = 1 - 2 * (k * k + l * l), h = a(h, o);var p = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];e[2] && (p[2][1] = e[2], h = a(h, p)), e[1] && (p[2][1] = 0, p[2][0] = e[0], h = a(h, p)), e[0] && (p[2][0] = 0, p[1][0] = e[0], h = a(h, p));for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) h[i][j] *= d[i];return b(h) ? [h[0][0], h[0][1], h[1][0], h[1][1], h[3][0], h[3][1]] : h[0].concat(h[1], h[2], h[3]);
            }return c;
          }();a.composeMatrix = e, a.quat = d;
        }(d), function (a, b, c) {
          a.sequenceNumber = 0;var d = function (a, b, c) {
            this.target = a, this.currentTime = b, this.timelineTime = c, this.type = "finish", this.bubbles = !1, this.cancelable = !1, this.currentTarget = a, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now();
          };b.Animation = function (b) {
            this.id = "", b && b._id && (this.id = b._id), this._sequenceNumber = a.sequenceNumber++, this._currentTime = 0, this._startTime = null, this._paused = !1, this._playbackRate = 1, this._inTimeline = !0, this._finishedFlag = !0, this.onfinish = null, this._finishHandlers = [], this._effect = b, this._inEffect = this._effect._update(0), this._idle = !0, this._currentTimePending = !1;
          }, b.Animation.prototype = { _ensureAlive: function () {
              this.playbackRate < 0 && 0 === this.currentTime ? this._inEffect = this._effect._update(-1) : this._inEffect = this._effect._update(this.currentTime), this._inTimeline || !this._inEffect && this._finishedFlag || (this._inTimeline = !0, b.timeline._animations.push(this));
            }, _tickCurrentTime: function (a, b) {
              a != this._currentTime && (this._currentTime = a, this._isFinished && !b && (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0), this._ensureAlive());
            }, get currentTime() {
              return this._idle || this._currentTimePending ? null : this._currentTime;
            }, set currentTime(a) {
              a = +a, isNaN(a) || (b.restart(), this._paused || null == this._startTime || (this._startTime = this._timeline.currentTime - a / this._playbackRate), this._currentTimePending = !1, this._currentTime != a && (this._idle && (this._idle = !1, this._paused = !0), this._tickCurrentTime(a, !0), b.applyDirtiedAnimation(this)));
            }, get startTime() {
              return this._startTime;
            }, set startTime(a) {
              a = +a, isNaN(a) || this._paused || this._idle || (this._startTime = a, this._tickCurrentTime((this._timeline.currentTime - this._startTime) * this.playbackRate), b.applyDirtiedAnimation(this));
            }, get playbackRate() {
              return this._playbackRate;
            }, set playbackRate(a) {
              if (a != this._playbackRate) {
                var c = this.currentTime;this._playbackRate = a, this._startTime = null, "paused" != this.playState && "idle" != this.playState && (this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), b.applyDirtiedAnimation(this)), null != c && (this.currentTime = c);
              }
            }, get _isFinished() {
              return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0);
            }, get _totalDuration() {
              return this._effect._totalDuration;
            }, get playState() {
              return this._idle ? "idle" : null == this._startTime && !this._paused && 0 != this.playbackRate || this._currentTimePending ? "pending" : this._paused ? "paused" : this._isFinished ? "finished" : "running";
            }, _rewind: function () {
              if (this._playbackRate >= 0) this._currentTime = 0;else {
                if (!(this._totalDuration < 1 / 0)) throw new DOMException("Unable to rewind negative playback rate animation with infinite duration", "InvalidStateError");this._currentTime = this._totalDuration;
              }
            }, play: function () {
              this._paused = !1, (this._isFinished || this._idle) && (this._rewind(), this._startTime = null), this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), b.applyDirtiedAnimation(this);
            }, pause: function () {
              this._isFinished || this._paused || this._idle ? this._idle && (this._rewind(), this._idle = !1) : this._currentTimePending = !0, this._startTime = null, this._paused = !0;
            }, finish: function () {
              this._idle || (this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0, this._startTime = this._totalDuration - this.currentTime, this._currentTimePending = !1, b.applyDirtiedAnimation(this));
            }, cancel: function () {
              this._inEffect && (this._inEffect = !1, this._idle = !0, this._paused = !1, this._isFinished = !0, this._finishedFlag = !0, this._currentTime = 0, this._startTime = null, this._effect._update(null), b.applyDirtiedAnimation(this));
            }, reverse: function () {
              this.playbackRate *= -1, this.play();
            }, addEventListener: function (a, b) {
              "function" == typeof b && "finish" == a && this._finishHandlers.push(b);
            }, removeEventListener: function (a, b) {
              if ("finish" == a) {
                var c = this._finishHandlers.indexOf(b);c >= 0 && this._finishHandlers.splice(c, 1);
              }
            }, _fireEvents: function (a) {
              if (this._isFinished) {
                if (!this._finishedFlag) {
                  var b = new d(this, this._currentTime, a),
                      c = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);setTimeout(function () {
                    c.forEach(function (a) {
                      a.call(b.target, b);
                    });
                  }, 0), this._finishedFlag = !0;
                }
              } else this._finishedFlag = !1;
            }, _tick: function (a, b) {
              this._idle || this._paused || (null == this._startTime ? b && (this.startTime = a - this._currentTime / this.playbackRate) : this._isFinished || this._tickCurrentTime((a - this._startTime) * this.playbackRate)), b && (this._currentTimePending = !1, this._fireEvents(a));
            }, get _needsTick() {
              return this.playState in { pending: 1, running: 1 } || !this._finishedFlag;
            }, _targetAnimations: function () {
              var a = this._effect._target;return a._activeAnimations || (a._activeAnimations = []), a._activeAnimations;
            }, _markTarget: function () {
              var a = this._targetAnimations();-1 === a.indexOf(this) && a.push(this);
            }, _unmarkTarget: function () {
              var a = this._targetAnimations(),
                  b = a.indexOf(this);-1 !== b && a.splice(b, 1);
            } };
        }(c, d), function (a, b, c) {
          function d(a) {
            var b = j;j = [], a < q.currentTime && (a = q.currentTime), q._animations.sort(e), q._animations = h(a, !0, q._animations)[0], b.forEach(function (b) {
              b[1](a);
            }), g(), l = void 0;
          }function e(a, b) {
            return a._sequenceNumber - b._sequenceNumber;
          }function f() {
            this._animations = [], this.currentTime = window.performance && performance.now ? performance.now() : 0;
          }function g() {
            o.forEach(function (a) {
              a();
            }), o.length = 0;
          }function h(a, c, d) {
            p = !0, n = !1, b.timeline.currentTime = a, m = !1;var e = [],
                f = [],
                g = [],
                h = [];return d.forEach(function (b) {
              b._tick(a, c), b._inEffect ? (f.push(b._effect), b._markTarget()) : (e.push(b._effect), b._unmarkTarget()), b._needsTick && (m = !0);var d = b._inEffect || b._needsTick;b._inTimeline = d, d ? g.push(b) : h.push(b);
            }), o.push.apply(o, e), o.push.apply(o, f), m && requestAnimationFrame(function () {}), p = !1, [g, h];
          }var i = window.requestAnimationFrame,
              j = [],
              k = 0;window.requestAnimationFrame = function (a) {
            var b = k++;return 0 == j.length && i(d), j.push([b, a]), b;
          }, window.cancelAnimationFrame = function (a) {
            j.forEach(function (b) {
              b[0] == a && (b[1] = function () {});
            });
          }, f.prototype = { _play: function (c) {
              c._timing = a.normalizeTimingInput(c.timing);var d = new b.Animation(c);return d._idle = !1, d._timeline = this, this._animations.push(d), b.restart(), b.applyDirtiedAnimation(d), d;
            } };var l = void 0,
              m = !1,
              n = !1;b.restart = function () {
            return m || (m = !0, requestAnimationFrame(function () {}), n = !0), n;
          }, b.applyDirtiedAnimation = function (a) {
            if (!p) {
              a._markTarget();var c = a._targetAnimations();c.sort(e), h(b.timeline.currentTime, !1, c.slice())[1].forEach(function (a) {
                var b = q._animations.indexOf(a);-1 !== b && q._animations.splice(b, 1);
              }), g();
            }
          };var o = [],
              p = !1,
              q = new f();b.timeline = q;
        }(c, d), function (a, b) {
          function c(a, b) {
            for (var c = 0, d = 0; d < a.length; d++) c += a[d] * b[d];return c;
          }function d(a, b) {
            return [a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3], a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3], a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3], a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3], a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7], a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7], a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7], a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7], a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11], a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11], a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11], a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11], a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15], a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15], a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15], a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]];
          }function e(a) {
            var b = a.rad || 0;return ((a.deg || 0) / 360 + (a.grad || 0) / 400 + (a.turn || 0)) * (2 * Math.PI) + b;
          }function f(a) {
            switch (a.t) {case "rotatex":
                var b = e(a.d[0]);return [1, 0, 0, 0, 0, Math.cos(b), Math.sin(b), 0, 0, -Math.sin(b), Math.cos(b), 0, 0, 0, 0, 1];case "rotatey":
                var b = e(a.d[0]);return [Math.cos(b), 0, -Math.sin(b), 0, 0, 1, 0, 0, Math.sin(b), 0, Math.cos(b), 0, 0, 0, 0, 1];case "rotate":case "rotatez":
                var b = e(a.d[0]);return [Math.cos(b), Math.sin(b), 0, 0, -Math.sin(b), Math.cos(b), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];case "rotate3d":
                var c = a.d[0],
                    d = a.d[1],
                    f = a.d[2],
                    b = e(a.d[3]),
                    g = c * c + d * d + f * f;if (0 === g) c = 1, d = 0, f = 0;else if (1 !== g) {
                  var h = Math.sqrt(g);c /= h, d /= h, f /= h;
                }var i = Math.sin(b / 2),
                    j = i * Math.cos(b / 2),
                    k = i * i;return [1 - 2 * (d * d + f * f) * k, 2 * (c * d * k + f * j), 2 * (c * f * k - d * j), 0, 2 * (c * d * k - f * j), 1 - 2 * (c * c + f * f) * k, 2 * (d * f * k + c * j), 0, 2 * (c * f * k + d * j), 2 * (d * f * k - c * j), 1 - 2 * (c * c + d * d) * k, 0, 0, 0, 0, 1];case "scale":
                return [a.d[0], 0, 0, 0, 0, a.d[1], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];case "scalex":
                return [a.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];case "scaley":
                return [1, 0, 0, 0, 0, a.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];case "scalez":
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, a.d[0], 0, 0, 0, 0, 1];case "scale3d":
                return [a.d[0], 0, 0, 0, 0, a.d[1], 0, 0, 0, 0, a.d[2], 0, 0, 0, 0, 1];case "skew":
                var l = e(a.d[0]),
                    m = e(a.d[1]);return [1, Math.tan(m), 0, 0, Math.tan(l), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];case "skewx":
                var b = e(a.d[0]);return [1, 0, 0, 0, Math.tan(b), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];case "skewy":
                var b = e(a.d[0]);return [1, Math.tan(b), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];case "translate":
                var c = a.d[0].px || 0,
                    d = a.d[1].px || 0;return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c, d, 0, 1];case "translatex":
                var c = a.d[0].px || 0;return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c, 0, 0, 1];case "translatey":
                var d = a.d[0].px || 0;return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, d, 0, 1];case "translatez":
                var f = a.d[0].px || 0;return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, f, 1];case "translate3d":
                var c = a.d[0].px || 0,
                    d = a.d[1].px || 0,
                    f = a.d[2].px || 0;return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c, d, f, 1];case "perspective":
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, a.d[0].px ? -1 / a.d[0].px : 0, 0, 0, 0, 1];case "matrix":
                return [a.d[0], a.d[1], 0, 0, a.d[2], a.d[3], 0, 0, 0, 0, 1, 0, a.d[4], a.d[5], 0, 1];case "matrix3d":
                return a.d;}
          }function g(a) {
            return 0 === a.length ? [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] : a.map(f).reduce(d);
          }function h(a) {
            return [i(g(a))];
          }var i = function () {
            function a(a) {
              return a[0][0] * a[1][1] * a[2][2] + a[1][0] * a[2][1] * a[0][2] + a[2][0] * a[0][1] * a[1][2] - a[0][2] * a[1][1] * a[2][0] - a[1][2] * a[2][1] * a[0][0] - a[2][2] * a[0][1] * a[1][0];
            }function b(b) {
              for (var c = 1 / a(b), d = b[0][0], e = b[0][1], f = b[0][2], g = b[1][0], h = b[1][1], i = b[1][2], j = b[2][0], k = b[2][1], l = b[2][2], m = [[(h * l - i * k) * c, (f * k - e * l) * c, (e * i - f * h) * c, 0], [(i * j - g * l) * c, (d * l - f * j) * c, (f * g - d * i) * c, 0], [(g * k - h * j) * c, (j * e - d * k) * c, (d * h - e * g) * c, 0]], n = [], o = 0; o < 3; o++) {
                for (var p = 0, q = 0; q < 3; q++) p += b[3][q] * m[q][o];n.push(p);
              }return n.push(1), m.push(n), m;
            }function d(a) {
              return [[a[0][0], a[1][0], a[2][0], a[3][0]], [a[0][1], a[1][1], a[2][1], a[3][1]], [a[0][2], a[1][2], a[2][2], a[3][2]], [a[0][3], a[1][3], a[2][3], a[3][3]]];
            }function e(a, b) {
              for (var c = [], d = 0; d < 4; d++) {
                for (var e = 0, f = 0; f < 4; f++) e += a[f] * b[f][d];c.push(e);
              }return c;
            }function f(a) {
              var b = g(a);return [a[0] / b, a[1] / b, a[2] / b];
            }function g(a) {
              return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
            }function h(a, b, c, d) {
              return [c * a[0] + d * b[0], c * a[1] + d * b[1], c * a[2] + d * b[2]];
            }function i(a, b) {
              return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
            }function j(j) {
              var k = [j.slice(0, 4), j.slice(4, 8), j.slice(8, 12), j.slice(12, 16)];if (1 !== k[3][3]) return null;for (var l = [], m = 0; m < 4; m++) l.push(k[m].slice());for (var m = 0; m < 3; m++) l[m][3] = 0;if (0 === a(l)) return null;var n,
                  o = [];k[0][3] || k[1][3] || k[2][3] ? (o.push(k[0][3]), o.push(k[1][3]), o.push(k[2][3]), o.push(k[3][3]), n = e(o, d(b(l)))) : n = [0, 0, 0, 1];var p = k[3].slice(0, 3),
                  q = [];q.push(k[0].slice(0, 3));var r = [];r.push(g(q[0])), q[0] = f(q[0]);var s = [];q.push(k[1].slice(0, 3)), s.push(c(q[0], q[1])), q[1] = h(q[1], q[0], 1, -s[0]), r.push(g(q[1])), q[1] = f(q[1]), s[0] /= r[1], q.push(k[2].slice(0, 3)), s.push(c(q[0], q[2])), q[2] = h(q[2], q[0], 1, -s[1]), s.push(c(q[1], q[2])), q[2] = h(q[2], q[1], 1, -s[2]), r.push(g(q[2])), q[2] = f(q[2]), s[1] /= r[2], s[2] /= r[2];var t = i(q[1], q[2]);if (c(q[0], t) < 0) for (var m = 0; m < 3; m++) r[m] *= -1, q[m][0] *= -1, q[m][1] *= -1, q[m][2] *= -1;var u,
                  v,
                  w = q[0][0] + q[1][1] + q[2][2] + 1;return w > 1e-4 ? (u = .5 / Math.sqrt(w), v = [(q[2][1] - q[1][2]) * u, (q[0][2] - q[2][0]) * u, (q[1][0] - q[0][1]) * u, .25 / u]) : q[0][0] > q[1][1] && q[0][0] > q[2][2] ? (u = 2 * Math.sqrt(1 + q[0][0] - q[1][1] - q[2][2]), v = [.25 * u, (q[0][1] + q[1][0]) / u, (q[0][2] + q[2][0]) / u, (q[2][1] - q[1][2]) / u]) : q[1][1] > q[2][2] ? (u = 2 * Math.sqrt(1 + q[1][1] - q[0][0] - q[2][2]), v = [(q[0][1] + q[1][0]) / u, .25 * u, (q[1][2] + q[2][1]) / u, (q[0][2] - q[2][0]) / u]) : (u = 2 * Math.sqrt(1 + q[2][2] - q[0][0] - q[1][1]), v = [(q[0][2] + q[2][0]) / u, (q[1][2] + q[2][1]) / u, .25 * u, (q[1][0] - q[0][1]) / u]), [p, r, s, v, n];
            }return j;
          }();a.dot = c, a.makeMatrixDecomposition = h;
        }(d), function (a) {
          function b(a, b) {
            var c = a.exec(b);if (c) return c = a.ignoreCase ? c[0].toLowerCase() : c[0], [c, b.substr(c.length)];
          }function c(a, b) {
            b = b.replace(/^\s*/, "");var c = a(b);if (c) return [c[0], c[1].replace(/^\s*/, "")];
          }function d(a, d, e) {
            a = c.bind(null, a);for (var f = [];;) {
              var g = a(e);if (!g) return [f, e];if (f.push(g[0]), e = g[1], !(g = b(d, e)) || "" == g[1]) return [f, e];e = g[1];
            }
          }function e(a, b) {
            for (var c = 0, d = 0; d < b.length && (!/\s|,/.test(b[d]) || 0 != c); d++) if ("(" == b[d]) c++;else if (")" == b[d] && (c--, 0 == c && d++, c <= 0)) break;var e = a(b.substr(0, d));return void 0 == e ? void 0 : [e, b.substr(d)];
          }function f(a, b) {
            for (var c = a, d = b; c && d;) c > d ? c %= d : d %= c;return c = a * b / (c + d);
          }function g(a) {
            return function (b) {
              var c = a(b);return c && (c[0] = void 0), c;
            };
          }function h(a, b) {
            return function (c) {
              return a(c) || [b, c];
            };
          }function i(b, c) {
            for (var d = [], e = 0; e < b.length; e++) {
              var f = a.consumeTrimmed(b[e], c);if (!f || "" == f[0]) return;void 0 !== f[0] && d.push(f[0]), c = f[1];
            }if ("" == c) return d;
          }function j(a, b, c, d, e) {
            for (var g = [], h = [], i = [], j = f(d.length, e.length), k = 0; k < j; k++) {
              var l = b(d[k % d.length], e[k % e.length]);if (!l) return;g.push(l[0]), h.push(l[1]), i.push(l[2]);
            }return [g, h, function (b) {
              var d = b.map(function (a, b) {
                return i[b](a);
              }).join(c);return a ? a(d) : d;
            }];
          }function k(a, b, c) {
            for (var d = [], e = [], f = [], g = 0, h = 0; h < c.length; h++) if ("function" == typeof c[h]) {
              var i = c[h](a[g], b[g++]);d.push(i[0]), e.push(i[1]), f.push(i[2]);
            } else !function (a) {
              d.push(!1), e.push(!1), f.push(function () {
                return c[a];
              });
            }(h);return [d, e, function (a) {
              for (var b = "", c = 0; c < a.length; c++) b += f[c](a[c]);return b;
            }];
          }a.consumeToken = b, a.consumeTrimmed = c, a.consumeRepeated = d, a.consumeParenthesised = e, a.ignore = g, a.optional = h, a.consumeList = i, a.mergeNestedRepeated = j.bind(null, null), a.mergeWrappedNestedRepeated = j, a.mergeList = k;
        }(d), function (a) {
          function b(b) {
            function c(b) {
              var c = a.consumeToken(/^inset/i, b);if (c) return d.inset = !0, c;var c = a.consumeLengthOrPercent(b);if (c) return d.lengths.push(c[0]), c;var c = a.consumeColor(b);return c ? (d.color = c[0], c) : void 0;
            }var d = { inset: !1, lengths: [], color: null },
                e = a.consumeRepeated(c, /^/, b);if (e && e[0].length) return [d, e[1]];
          }function c(c) {
            var d = a.consumeRepeated(b, /^,/, c);if (d && "" == d[1]) return d[0];
          }function d(b, c) {
            for (; b.lengths.length < Math.max(b.lengths.length, c.lengths.length);) b.lengths.push({ px: 0 });for (; c.lengths.length < Math.max(b.lengths.length, c.lengths.length);) c.lengths.push({ px: 0 });if (b.inset == c.inset && !!b.color == !!c.color) {
              for (var d, e = [], f = [[], 0], g = [[], 0], h = 0; h < b.lengths.length; h++) {
                var i = a.mergeDimensions(b.lengths[h], c.lengths[h], 2 == h);f[0].push(i[0]), g[0].push(i[1]), e.push(i[2]);
              }if (b.color && c.color) {
                var j = a.mergeColors(b.color, c.color);f[1] = j[0], g[1] = j[1], d = j[2];
              }return [f, g, function (a) {
                for (var c = b.inset ? "inset " : " ", f = 0; f < e.length; f++) c += e[f](a[0][f]) + " ";return d && (c += d(a[1])), c;
              }];
            }
          }function e(b, c, d, e) {
            function f(a) {
              return { inset: a, color: [0, 0, 0, 0], lengths: [{ px: 0 }, { px: 0 }, { px: 0 }, { px: 0 }] };
            }for (var g = [], h = [], i = 0; i < d.length || i < e.length; i++) {
              var j = d[i] || f(e[i].inset),
                  k = e[i] || f(d[i].inset);g.push(j), h.push(k);
            }return a.mergeNestedRepeated(b, c, g, h);
          }var f = e.bind(null, d, ", ");a.addPropertiesHandler(c, f, ["box-shadow", "text-shadow"]);
        }(d), function (a, b) {
          function c(a) {
            return a.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
          }function d(a, b, c) {
            return Math.min(b, Math.max(a, c));
          }function e(a) {
            if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(a)) return Number(a);
          }function f(a, b) {
            return [a, b, c];
          }function g(a, b) {
            if (0 != a) return i(0, 1 / 0)(a, b);
          }function h(a, b) {
            return [a, b, function (a) {
              return Math.round(d(1, 1 / 0, a));
            }];
          }function i(a, b) {
            return function (e, f) {
              return [e, f, function (e) {
                return c(d(a, b, e));
              }];
            };
          }function j(a) {
            var b = a.trim().split(/\s*[\s,]\s*/);if (0 !== b.length) {
              for (var c = [], d = 0; d < b.length; d++) {
                var f = e(b[d]);if (void 0 === f) return;c.push(f);
              }return c;
            }
          }function k(a, b) {
            if (a.length == b.length) return [a, b, function (a) {
              return a.map(c).join(" ");
            }];
          }function l(a, b) {
            return [a, b, Math.round];
          }a.clamp = d, a.addPropertiesHandler(j, k, ["stroke-dasharray"]), a.addPropertiesHandler(e, i(0, 1 / 0), ["border-image-width", "line-height"]), a.addPropertiesHandler(e, i(0, 1), ["opacity", "shape-image-threshold"]), a.addPropertiesHandler(e, g, ["flex-grow", "flex-shrink"]), a.addPropertiesHandler(e, h, ["orphans", "widows"]), a.addPropertiesHandler(e, l, ["z-index"]), a.parseNumber = e, a.parseNumberList = j, a.mergeNumbers = f, a.numberToString = c;
        }(d), function (a, b) {
          function c(a, b) {
            if ("visible" == a || "visible" == b) return [0, 1, function (c) {
              return c <= 0 ? a : c >= 1 ? b : "visible";
            }];
          }a.addPropertiesHandler(String, c, ["visibility"]);
        }(d), function (a, b) {
          function c(a) {
            a = a.trim(), f.fillStyle = "#000", f.fillStyle = a;var b = f.fillStyle;if (f.fillStyle = "#fff", f.fillStyle = a, b == f.fillStyle) {
              f.fillRect(0, 0, 1, 1);var c = f.getImageData(0, 0, 1, 1).data;f.clearRect(0, 0, 1, 1);var d = c[3] / 255;return [c[0] * d, c[1] * d, c[2] * d, d];
            }
          }function d(b, c) {
            return [b, c, function (b) {
              function c(a) {
                return Math.max(0, Math.min(255, a));
              }if (b[3]) for (var d = 0; d < 3; d++) b[d] = Math.round(c(b[d] / b[3]));return b[3] = a.numberToString(a.clamp(0, 1, b[3])), "rgba(" + b.join(",") + ")";
            }];
          }var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");e.width = e.height = 1;var f = e.getContext("2d");a.addPropertiesHandler(c, d, ["background-color", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "color", "fill", "flood-color", "lighting-color", "outline-color", "stop-color", "stroke", "text-decoration-color"]), a.consumeColor = a.consumeParenthesised.bind(null, c), a.mergeColors = d;
        }(d), function (a, b) {
          function c(a, b) {
            if ("0" == (b = b.trim().toLowerCase()) && "px".search(a) >= 0) return { px: 0 };if (/^[^(]*$|^calc/.test(b)) {
              b = b.replace(/calc\(/g, "(");var c = {};b = b.replace(a, function (a) {
                return c[a] = null, "U" + a;
              });for (var d = "U(" + a.source + ")", e = b.replace(/[-+]?(\d*\.)?\d+/g, "N").replace(new RegExp("N" + d, "g"), "D").replace(/\s[+-]\s/g, "O").replace(/\s/g, ""), f = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], g = 0; g < f.length;) f[g].test(e) ? (e = e.replace(f[g], "$1"), g = 0) : g++;if ("D" == e) {
                for (var h in c) {
                  var i = eval(b.replace(new RegExp("U" + h, "g"), "").replace(new RegExp(d, "g"), "*0"));if (!isFinite(i)) return;c[h] = i;
                }return c;
              }
            }
          }function d(a, b) {
            return e(a, b, !0);
          }function e(b, c, d) {
            var e,
                f = [];for (e in b) f.push(e);for (e in c) f.indexOf(e) < 0 && f.push(e);return b = f.map(function (a) {
              return b[a] || 0;
            }), c = f.map(function (a) {
              return c[a] || 0;
            }), [b, c, function (b) {
              var c = b.map(function (c, e) {
                return 1 == b.length && d && (c = Math.max(c, 0)), a.numberToString(c) + f[e];
              }).join(" + ");return b.length > 1 ? "calc(" + c + ")" : c;
            }];
          }var f = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
              g = c.bind(null, new RegExp(f, "g")),
              h = c.bind(null, new RegExp(f + "|%", "g")),
              i = c.bind(null, /deg|rad|grad|turn/g);a.parseLength = g, a.parseLengthOrPercent = h, a.consumeLengthOrPercent = a.consumeParenthesised.bind(null, h), a.parseAngle = i, a.mergeDimensions = e;var j = a.consumeParenthesised.bind(null, g),
              k = a.consumeRepeated.bind(void 0, j, /^/),
              l = a.consumeRepeated.bind(void 0, k, /^,/);a.consumeSizePairList = l;var m = function (a) {
            var b = l(a);if (b && "" == b[1]) return b[0];
          },
              n = a.mergeNestedRepeated.bind(void 0, d, " "),
              o = a.mergeNestedRepeated.bind(void 0, n, ",");a.mergeNonNegativeSizePair = n, a.addPropertiesHandler(m, o, ["background-size"]), a.addPropertiesHandler(h, d, ["border-bottom-width", "border-image-width", "border-left-width", "border-right-width", "border-top-width", "flex-basis", "font-size", "height", "line-height", "max-height", "max-width", "outline-width", "width"]), a.addPropertiesHandler(h, e, ["border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "bottom", "left", "letter-spacing", "margin-bottom", "margin-left", "margin-right", "margin-top", "min-height", "min-width", "outline-offset", "padding-bottom", "padding-left", "padding-right", "padding-top", "perspective", "right", "shape-margin", "stroke-dashoffset", "text-indent", "top", "vertical-align", "word-spacing"]);
        }(d, f), function (a, b) {
          function c(b) {
            return a.consumeLengthOrPercent(b) || a.consumeToken(/^auto/, b);
          }function d(b) {
            var d = a.consumeList([a.ignore(a.consumeToken.bind(null, /^rect/)), a.ignore(a.consumeToken.bind(null, /^\(/)), a.consumeRepeated.bind(null, c, /^,/), a.ignore(a.consumeToken.bind(null, /^\)/))], b);if (d && 4 == d[0].length) return d[0];
          }function e(b, c) {
            return "auto" == b || "auto" == c ? [!0, !1, function (d) {
              var e = d ? b : c;if ("auto" == e) return "auto";var f = a.mergeDimensions(e, e);return f[2](f[0]);
            }] : a.mergeDimensions(b, c);
          }function f(a) {
            return "rect(" + a + ")";
          }var g = a.mergeWrappedNestedRepeated.bind(null, f, e, ", ");a.parseBox = d, a.mergeBoxes = g, a.addPropertiesHandler(d, g, ["clip"]);
        }(d), function (a, b) {
          function c(a) {
            return function (b) {
              var c = 0;return a.map(function (a) {
                return a === k ? b[c++] : a;
              });
            };
          }function d(a) {
            return a;
          }function e(b) {
            if ("none" == (b = b.toLowerCase().trim())) return [];for (var c, d = /\s*(\w+)\(([^)]*)\)/g, e = [], f = 0; c = d.exec(b);) {
              if (c.index != f) return;f = c.index + c[0].length;var g = c[1],
                  h = n[g];if (!h) return;var i = c[2].split(","),
                  j = h[0];if (j.length < i.length) return;for (var k = [], o = 0; o < j.length; o++) {
                var p,
                    q = i[o],
                    r = j[o];if (void 0 === (p = q ? { A: function (b) {
                    return "0" == b.trim() ? m : a.parseAngle(b);
                  }, N: a.parseNumber, T: a.parseLengthOrPercent, L: a.parseLength }[r.toUpperCase()](q) : { a: m, n: k[0], t: l }[r])) return;k.push(p);
              }if (e.push({ t: g, d: k }), d.lastIndex == b.length) return e;
            }
          }function f(a) {
            return a.toFixed(6).replace(".000000", "");
          }function g(b, c) {
            if (b.decompositionPair !== c) {
              b.decompositionPair = c;var d = a.makeMatrixDecomposition(b);
            }if (c.decompositionPair !== b) {
              c.decompositionPair = b;var e = a.makeMatrixDecomposition(c);
            }return null == d[0] || null == e[0] ? [[!1], [!0], function (a) {
              return a ? c[0].d : b[0].d;
            }] : (d[0].push(0), e[0].push(1), [d, e, function (b) {
              var c = a.quat(d[0][3], e[0][3], b[5]);return a.composeMatrix(b[0], b[1], b[2], c, b[4]).map(f).join(",");
            }]);
          }function h(a) {
            return a.replace(/[xy]/, "");
          }function i(a) {
            return a.replace(/(x|y|z|3d)?$/, "3d");
          }function j(b, c) {
            var d = a.makeMatrixDecomposition && !0,
                e = !1;if (!b.length || !c.length) {
              b.length || (e = !0, b = c, c = []);for (var f = 0; f < b.length; f++) {
                var j = b[f].t,
                    k = b[f].d,
                    l = "scale" == j.substr(0, 5) ? 1 : 0;c.push({ t: j, d: k.map(function (a) {
                    if ("number" == typeof a) return l;var b = {};for (var c in a) b[c] = l;return b;
                  }) });
              }
            }var m = function (a, b) {
              return "perspective" == a && "perspective" == b || ("matrix" == a || "matrix3d" == a) && ("matrix" == b || "matrix3d" == b);
            },
                o = [],
                p = [],
                q = [];if (b.length != c.length) {
              if (!d) return;var r = g(b, c);o = [r[0]], p = [r[1]], q = [["matrix", [r[2]]]];
            } else for (var f = 0; f < b.length; f++) {
              var j,
                  s = b[f].t,
                  t = c[f].t,
                  u = b[f].d,
                  v = c[f].d,
                  w = n[s],
                  x = n[t];if (m(s, t)) {
                if (!d) return;var r = g([b[f]], [c[f]]);o.push(r[0]), p.push(r[1]), q.push(["matrix", [r[2]]]);
              } else {
                if (s == t) j = s;else if (w[2] && x[2] && h(s) == h(t)) j = h(s), u = w[2](u), v = x[2](v);else {
                  if (!w[1] || !x[1] || i(s) != i(t)) {
                    if (!d) return;var r = g(b, c);o = [r[0]], p = [r[1]], q = [["matrix", [r[2]]]];break;
                  }j = i(s), u = w[1](u), v = x[1](v);
                }for (var y = [], z = [], A = [], B = 0; B < u.length; B++) {
                  var C = "number" == typeof u[B] ? a.mergeNumbers : a.mergeDimensions,
                      r = C(u[B], v[B]);y[B] = r[0], z[B] = r[1], A.push(r[2]);
                }o.push(y), p.push(z), q.push([j, A]);
              }
            }if (e) {
              var D = o;o = p, p = D;
            }return [o, p, function (a) {
              return a.map(function (a, b) {
                var c = a.map(function (a, c) {
                  return q[b][1][c](a);
                }).join(",");return "matrix" == q[b][0] && 16 == c.split(",").length && (q[b][0] = "matrix3d"), q[b][0] + "(" + c + ")";
              }).join(" ");
            }];
          }var k = null,
              l = { px: 0 },
              m = { deg: 0 },
              n = { matrix: ["NNNNNN", [k, k, 0, 0, k, k, 0, 0, 0, 0, 1, 0, k, k, 0, 1], d], matrix3d: ["NNNNNNNNNNNNNNNN", d], rotate: ["A"], rotatex: ["A"], rotatey: ["A"], rotatez: ["A"], rotate3d: ["NNNA"], perspective: ["L"], scale: ["Nn", c([k, k, 1]), d], scalex: ["N", c([k, 1, 1]), c([k, 1])], scaley: ["N", c([1, k, 1]), c([1, k])], scalez: ["N", c([1, 1, k])], scale3d: ["NNN", d], skew: ["Aa", null, d], skewx: ["A", null, c([k, m])], skewy: ["A", null, c([m, k])], translate: ["Tt", c([k, k, l]), d], translatex: ["T", c([k, l, l]), c([k, l])], translatey: ["T", c([l, k, l]), c([l, k])], translatez: ["L", c([l, l, k])], translate3d: ["TTL", d] };a.addPropertiesHandler(e, j, ["transform"]);
        }(d), function (a) {
          function b(a) {
            var b = Number(a);if (!(isNaN(b) || b < 100 || b > 900 || b % 100 != 0)) return b;
          }function c(b) {
            return b = 100 * Math.round(b / 100), b = a.clamp(100, 900, b), 400 === b ? "normal" : 700 === b ? "bold" : String(b);
          }function d(a, b) {
            return [a, b, c];
          }a.addPropertiesHandler(b, d, ["font-weight"]);
        }(d), function (a) {
          function b(a) {
            var b = {};for (var c in a) b[c] = -a[c];return b;
          }function c(b) {
            return a.consumeToken(/^(left|center|right|top|bottom)\b/i, b) || a.consumeLengthOrPercent(b);
          }function d(b, d) {
            var e = a.consumeRepeated(c, /^/, d);if (e && "" == e[1]) {
              var f = e[0];if (f[0] = f[0] || "center", f[1] = f[1] || "center", 3 == b && (f[2] = f[2] || { px: 0 }), f.length == b) {
                if (/top|bottom/.test(f[0]) || /left|right/.test(f[1])) {
                  var h = f[0];f[0] = f[1], f[1] = h;
                }if (/left|right|center|Object/.test(f[0]) && /top|bottom|center|Object/.test(f[1])) return f.map(function (a) {
                  return "object" == typeof a ? a : g[a];
                });
              }
            }
          }function e(d) {
            var e = a.consumeRepeated(c, /^/, d);if (e) {
              for (var f = e[0], h = [{ "%": 50 }, { "%": 50 }], i = 0, j = !1, k = 0; k < f.length; k++) {
                var l = f[k];"string" == typeof l ? (j = /bottom|right/.test(l), i = { left: 0, right: 0, center: i, top: 1, bottom: 1 }[l], h[i] = g[l], "center" == l && i++) : (j && (l = b(l), l["%"] = (l["%"] || 0) + 100), h[i] = l, i++, j = !1);
              }return [h, e[1]];
            }
          }function f(b) {
            var c = a.consumeRepeated(e, /^,/, b);if (c && "" == c[1]) return c[0];
          }var g = { left: { "%": 0 }, center: { "%": 50 }, right: { "%": 100 }, top: { "%": 0 }, bottom: { "%": 100 } },
              h = a.mergeNestedRepeated.bind(null, a.mergeDimensions, " ");a.addPropertiesHandler(d.bind(null, 3), h, ["transform-origin"]), a.addPropertiesHandler(d.bind(null, 2), h, ["perspective-origin"]), a.consumePosition = e, a.mergeOffsetList = h;var i = a.mergeNestedRepeated.bind(null, h, ", ");a.addPropertiesHandler(f, i, ["background-position", "object-position"]);
        }(d), function (a) {
          function b(b) {
            var c = a.consumeToken(/^circle/, b);if (c && c[0]) return ["circle"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0, /^\(/)), d, a.ignore(a.consumeToken.bind(void 0, /^at/)), a.consumePosition, a.ignore(a.consumeToken.bind(void 0, /^\)/))], c[1]));var f = a.consumeToken(/^ellipse/, b);if (f && f[0]) return ["ellipse"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0, /^\(/)), e, a.ignore(a.consumeToken.bind(void 0, /^at/)), a.consumePosition, a.ignore(a.consumeToken.bind(void 0, /^\)/))], f[1]));var g = a.consumeToken(/^polygon/, b);return g && g[0] ? ["polygon"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0, /^\(/)), a.optional(a.consumeToken.bind(void 0, /^nonzero\s*,|^evenodd\s*,/), "nonzero,"), a.consumeSizePairList, a.ignore(a.consumeToken.bind(void 0, /^\)/))], g[1])) : void 0;
          }function c(b, c) {
            if (b[0] === c[0]) return "circle" == b[0] ? a.mergeList(b.slice(1), c.slice(1), ["circle(", a.mergeDimensions, " at ", a.mergeOffsetList, ")"]) : "ellipse" == b[0] ? a.mergeList(b.slice(1), c.slice(1), ["ellipse(", a.mergeNonNegativeSizePair, " at ", a.mergeOffsetList, ")"]) : "polygon" == b[0] && b[1] == c[1] ? a.mergeList(b.slice(2), c.slice(2), ["polygon(", b[1], g, ")"]) : void 0;
          }var d = a.consumeParenthesised.bind(null, a.parseLengthOrPercent),
              e = a.consumeRepeated.bind(void 0, d, /^/),
              f = a.mergeNestedRepeated.bind(void 0, a.mergeDimensions, " "),
              g = a.mergeNestedRepeated.bind(void 0, f, ",");a.addPropertiesHandler(b, c, ["shape-outside"]);
        }(d), function (a, b) {
          function c(a, b) {
            b.concat([a]).forEach(function (b) {
              b in document.documentElement.style && (d[a] = b);
            });
          }var d = {};c("transform", ["webkitTransform", "msTransform"]), c("transformOrigin", ["webkitTransformOrigin"]), c("perspective", ["webkitPerspective"]), c("perspectiveOrigin", ["webkitPerspectiveOrigin"]), a.propertyName = function (a) {
            return d[a] || a;
          };
        }(d);
      }(), function () {
        if (void 0 === document.createElement("div").animate([]).oncancel) {
          var a;if (window.performance && performance.now) var a = function () {
            return performance.now();
          };else var a = function () {
            return Date.now();
          };var b = function (a, b, c) {
            this.target = a, this.currentTime = b, this.timelineTime = c, this.type = "cancel", this.bubbles = !1, this.cancelable = !1, this.currentTarget = a, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now();
          },
              c = window.Element.prototype.animate;window.Element.prototype.animate = function (d, e) {
            var f = c.call(this, d, e);f._cancelHandlers = [], f.oncancel = null;var g = f.cancel;f.cancel = function () {
              g.call(this);var c = new b(this, null, a()),
                  d = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);setTimeout(function () {
                d.forEach(function (a) {
                  a.call(c.target, c);
                });
              }, 0);
            };var h = f.addEventListener;f.addEventListener = function (a, b) {
              "function" == typeof b && "cancel" == a ? this._cancelHandlers.push(b) : h.call(this, a, b);
            };var i = f.removeEventListener;return f.removeEventListener = function (a, b) {
              if ("cancel" == a) {
                var c = this._cancelHandlers.indexOf(b);c >= 0 && this._cancelHandlers.splice(c, 1);
              } else i.call(this, a, b);
            }, f;
          };
        }
      }(), function (a) {
        var b = document.documentElement,
            c = null,
            d = !1;try {
          var e = getComputedStyle(b).getPropertyValue("opacity"),
              f = "0" == e ? "1" : "0";c = b.animate({ opacity: [f, f] }, { duration: 1 }), c.currentTime = 0, d = getComputedStyle(b).getPropertyValue("opacity") == f;
        } catch (a) {} finally {
          c && c.cancel();
        }if (!d) {
          var g = window.Element.prototype.animate;window.Element.prototype.animate = function (b, c) {
            return window.Symbol && Symbol.iterator && Array.prototype.from && b[Symbol.iterator] && (b = Array.from(b)), Array.isArray(b) || null === b || (b = a.convertToArrayForm(b)), g.call(this, b, c);
          };
        }
      }(c), function (a, b, c) {
        function d(a) {
          var c = b.timeline;c.currentTime = a, c._discardAnimations(), 0 == c._animations.length ? f = !1 : requestAnimationFrame(d);
        }var e = window.requestAnimationFrame;window.requestAnimationFrame = function (a) {
          return e(function (c) {
            b.timeline._updateAnimationsPromises(), a(c), b.timeline._updateAnimationsPromises();
          });
        }, b.AnimationTimeline = function () {
          this._animations = [], this.currentTime = void 0;
        }, b.AnimationTimeline.prototype = { getAnimations: function () {
            return this._discardAnimations(), this._animations.slice();
          }, _updateAnimationsPromises: function () {
            b.animationsWithPromises = b.animationsWithPromises.filter(function (a) {
              return a._updatePromises();
            });
          }, _discardAnimations: function () {
            this._updateAnimationsPromises(), this._animations = this._animations.filter(function (a) {
              return "finished" != a.playState && "idle" != a.playState;
            });
          }, _play: function (a) {
            var c = new b.Animation(a, this);return this._animations.push(c), b.restartWebAnimationsNextTick(), c._updatePromises(), c._animation.play(), c._updatePromises(), c;
          }, play: function (a) {
            return a && a.remove(), this._play(a);
          } };var f = !1;b.restartWebAnimationsNextTick = function () {
          f || (f = !0, requestAnimationFrame(d));
        };var g = new b.AnimationTimeline();b.timeline = g;try {
          Object.defineProperty(window.document, "timeline", { configurable: !0, get: function () {
              return g;
            } });
        } catch (a) {}try {
          window.document.timeline = g;
        } catch (a) {}
      }(0, e), function (a, b, c) {
        b.animationsWithPromises = [], b.Animation = function (b, c) {
          if (this.id = "", b && b._id && (this.id = b._id), this.effect = b, b && (b._animation = this), !c) throw new Error("Animation with null timeline is not supported");this._timeline = c, this._sequenceNumber = a.sequenceNumber++, this._holdTime = 0, this._paused = !1, this._isGroup = !1, this._animation = null, this._childAnimations = [], this._callback = null, this._oldPlayState = "idle", this._rebuildUnderlyingAnimation(), this._animation.cancel(), this._updatePromises();
        }, b.Animation.prototype = { _updatePromises: function () {
            var a = this._oldPlayState,
                b = this.playState;return this._readyPromise && b !== a && ("idle" == b ? (this._rejectReadyPromise(), this._readyPromise = void 0) : "pending" == a ? this._resolveReadyPromise() : "pending" == b && (this._readyPromise = void 0)), this._finishedPromise && b !== a && ("idle" == b ? (this._rejectFinishedPromise(), this._finishedPromise = void 0) : "finished" == b ? this._resolveFinishedPromise() : "finished" == a && (this._finishedPromise = void 0)), this._oldPlayState = this.playState, this._readyPromise || this._finishedPromise;
          }, _rebuildUnderlyingAnimation: function () {
            this._updatePromises();var a,
                c,
                d,
                e,
                f = !!this._animation;f && (a = this.playbackRate, c = this._paused, d = this.startTime, e = this.currentTime, this._animation.cancel(), this._animation._wrapper = null, this._animation = null), (!this.effect || this.effect instanceof window.KeyframeEffect) && (this._animation = b.newUnderlyingAnimationForKeyframeEffect(this.effect), b.bindAnimationForKeyframeEffect(this)), (this.effect instanceof window.SequenceEffect || this.effect instanceof window.GroupEffect) && (this._animation = b.newUnderlyingAnimationForGroup(this.effect), b.bindAnimationForGroup(this)), this.effect && this.effect._onsample && b.bindAnimationForCustomEffect(this), f && (1 != a && (this.playbackRate = a), null !== d ? this.startTime = d : null !== e ? this.currentTime = e : null !== this._holdTime && (this.currentTime = this._holdTime), c && this.pause()), this._updatePromises();
          }, _updateChildren: function () {
            if (this.effect && "idle" != this.playState) {
              var a = this.effect._timing.delay;this._childAnimations.forEach(function (c) {
                this._arrangeChildren(c, a), this.effect instanceof window.SequenceEffect && (a += b.groupChildDuration(c.effect));
              }.bind(this));
            }
          }, _setExternalAnimation: function (a) {
            if (this.effect && this._isGroup) for (var b = 0; b < this.effect.children.length; b++) this.effect.children[b]._animation = a, this._childAnimations[b]._setExternalAnimation(a);
          }, _constructChildAnimations: function () {
            if (this.effect && this._isGroup) {
              var a = this.effect._timing.delay;this._removeChildAnimations(), this.effect.children.forEach(function (c) {
                var d = b.timeline._play(c);this._childAnimations.push(d), d.playbackRate = this.playbackRate, this._paused && d.pause(), c._animation = this.effect._animation, this._arrangeChildren(d, a), this.effect instanceof window.SequenceEffect && (a += b.groupChildDuration(c));
              }.bind(this));
            }
          }, _arrangeChildren: function (a, b) {
            null === this.startTime ? a.currentTime = this.currentTime - b / this.playbackRate : a.startTime !== this.startTime + b / this.playbackRate && (a.startTime = this.startTime + b / this.playbackRate);
          }, get timeline() {
            return this._timeline;
          }, get playState() {
            return this._animation ? this._animation.playState : "idle";
          }, get finished() {
            return window.Promise ? (this._finishedPromise || (-1 == b.animationsWithPromises.indexOf(this) && b.animationsWithPromises.push(this), this._finishedPromise = new Promise(function (a, b) {
              this._resolveFinishedPromise = function () {
                a(this);
              }, this._rejectFinishedPromise = function () {
                b({ type: DOMException.ABORT_ERR, name: "AbortError" });
              };
            }.bind(this)), "finished" == this.playState && this._resolveFinishedPromise()), this._finishedPromise) : (console.warn("Animation Promises require JavaScript Promise constructor"), null);
          }, get ready() {
            return window.Promise ? (this._readyPromise || (-1 == b.animationsWithPromises.indexOf(this) && b.animationsWithPromises.push(this), this._readyPromise = new Promise(function (a, b) {
              this._resolveReadyPromise = function () {
                a(this);
              }, this._rejectReadyPromise = function () {
                b({ type: DOMException.ABORT_ERR, name: "AbortError" });
              };
            }.bind(this)), "pending" !== this.playState && this._resolveReadyPromise()), this._readyPromise) : (console.warn("Animation Promises require JavaScript Promise constructor"), null);
          }, get onfinish() {
            return this._animation.onfinish;
          }, set onfinish(a) {
            this._animation.onfinish = "function" == typeof a ? function (b) {
              b.target = this, a.call(this, b);
            }.bind(this) : a;
          }, get oncancel() {
            return this._animation.oncancel;
          }, set oncancel(a) {
            this._animation.oncancel = "function" == typeof a ? function (b) {
              b.target = this, a.call(this, b);
            }.bind(this) : a;
          }, get currentTime() {
            this._updatePromises();var a = this._animation.currentTime;return this._updatePromises(), a;
          }, set currentTime(a) {
            this._updatePromises(), this._animation.currentTime = isFinite(a) ? a : Math.sign(a) * Number.MAX_VALUE, this._register(), this._forEachChild(function (b, c) {
              b.currentTime = a - c;
            }), this._updatePromises();
          }, get startTime() {
            return this._animation.startTime;
          }, set startTime(a) {
            this._updatePromises(), this._animation.startTime = isFinite(a) ? a : Math.sign(a) * Number.MAX_VALUE, this._register(), this._forEachChild(function (b, c) {
              b.startTime = a + c;
            }), this._updatePromises();
          }, get playbackRate() {
            return this._animation.playbackRate;
          }, set playbackRate(a) {
            this._updatePromises();var b = this.currentTime;this._animation.playbackRate = a, this._forEachChild(function (b) {
              b.playbackRate = a;
            }), null !== b && (this.currentTime = b), this._updatePromises();
          }, play: function () {
            this._updatePromises(), this._paused = !1, this._animation.play(), -1 == this._timeline._animations.indexOf(this) && this._timeline._animations.push(this), this._register(), b.awaitStartTime(this), this._forEachChild(function (a) {
              var b = a.currentTime;a.play(), a.currentTime = b;
            }), this._updatePromises();
          }, pause: function () {
            this._updatePromises(), this.currentTime && (this._holdTime = this.currentTime), this._animation.pause(), this._register(), this._forEachChild(function (a) {
              a.pause();
            }), this._paused = !0, this._updatePromises();
          }, finish: function () {
            this._updatePromises(), this._animation.finish(), this._register(), this._updatePromises();
          }, cancel: function () {
            this._updatePromises(), this._animation.cancel(), this._register(), this._removeChildAnimations(), this._updatePromises();
          }, reverse: function () {
            this._updatePromises();var a = this.currentTime;this._animation.reverse(), this._forEachChild(function (a) {
              a.reverse();
            }), null !== a && (this.currentTime = a), this._updatePromises();
          }, addEventListener: function (a, b) {
            var c = b;"function" == typeof b && (c = function (a) {
              a.target = this, b.call(this, a);
            }.bind(this), b._wrapper = c), this._animation.addEventListener(a, c);
          }, removeEventListener: function (a, b) {
            this._animation.removeEventListener(a, b && b._wrapper || b);
          }, _removeChildAnimations: function () {
            for (; this._childAnimations.length;) this._childAnimations.pop().cancel();
          }, _forEachChild: function (b) {
            var c = 0;if (this.effect.children && this._childAnimations.length < this.effect.children.length && this._constructChildAnimations(), this._childAnimations.forEach(function (a) {
              b.call(this, a, c), this.effect instanceof window.SequenceEffect && (c += a.effect.activeDuration);
            }.bind(this)), "pending" != this.playState) {
              var d = this.effect._timing,
                  e = this.currentTime;null !== e && (e = a.calculateIterationProgress(a.calculateActiveDuration(d), e, d)), (null == e || isNaN(e)) && this._removeChildAnimations();
            }
          } }, window.Animation = b.Animation;
      }(c, e), function (a, b, c) {
        function d(b) {
          this._frames = a.normalizeKeyframes(b);
        }function e() {
          for (var a = !1; i.length;) i.shift()._updateChildren(), a = !0;return a;
        }var f = function (a) {
          if (a._animation = void 0, a instanceof window.SequenceEffect || a instanceof window.GroupEffect) for (var b = 0; b < a.children.length; b++) f(a.children[b]);
        };b.removeMulti = function (a) {
          for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c];d._parent ? (-1 == b.indexOf(d._parent) && b.push(d._parent), d._parent.children.splice(d._parent.children.indexOf(d), 1), d._parent = null, f(d)) : d._animation && d._animation.effect == d && (d._animation.cancel(), d._animation.effect = new KeyframeEffect(null, []), d._animation._callback && (d._animation._callback._animation = null), d._animation._rebuildUnderlyingAnimation(), f(d));
          }for (c = 0; c < b.length; c++) b[c]._rebuild();
        }, b.KeyframeEffect = function (b, c, e, f) {
          return this.target = b, this._parent = null, e = a.numericTimingToObject(e), this._timingInput = a.cloneTimingInput(e), this._timing = a.normalizeTimingInput(e), this.timing = a.makeTiming(e, !1, this), this.timing._effect = this, "function" == typeof c ? (a.deprecated("Custom KeyframeEffect", "2015-06-22", "Use KeyframeEffect.onsample instead."), this._normalizedKeyframes = c) : this._normalizedKeyframes = new d(c), this._keyframes = c, this.activeDuration = a.calculateActiveDuration(this._timing), this._id = f, this;
        }, b.KeyframeEffect.prototype = { getFrames: function () {
            return "function" == typeof this._normalizedKeyframes ? this._normalizedKeyframes : this._normalizedKeyframes._frames;
          }, set onsample(a) {
            if ("function" == typeof this.getFrames()) throw new Error("Setting onsample on custom effect KeyframeEffect is not supported.");this._onsample = a, this._animation && this._animation._rebuildUnderlyingAnimation();
          }, get parent() {
            return this._parent;
          }, clone: function () {
            if ("function" == typeof this.getFrames()) throw new Error("Cloning custom effects is not supported.");var b = new KeyframeEffect(this.target, [], a.cloneTimingInput(this._timingInput), this._id);return b._normalizedKeyframes = this._normalizedKeyframes, b._keyframes = this._keyframes, b;
          }, remove: function () {
            b.removeMulti([this]);
          } };var g = Element.prototype.animate;Element.prototype.animate = function (a, c) {
          var d = "";return c && c.id && (d = c.id), b.timeline._play(new b.KeyframeEffect(this, a, c, d));
        };var h = document.createElementNS("http://www.w3.org/1999/xhtml", "div");b.newUnderlyingAnimationForKeyframeEffect = function (a) {
          if (a) {
            var b = a.target || h,
                c = a._keyframes;"function" == typeof c && (c = []);var d = a._timingInput;d.id = a._id;
          } else var b = h,
              c = [],
              d = 0;return g.apply(b, [c, d]);
        }, b.bindAnimationForKeyframeEffect = function (a) {
          a.effect && "function" == typeof a.effect._normalizedKeyframes && b.bindAnimationForCustomEffect(a);
        };var i = [];b.awaitStartTime = function (a) {
          null === a.startTime && a._isGroup && (0 == i.length && requestAnimationFrame(e), i.push(a));
        };var j = window.getComputedStyle;Object.defineProperty(window, "getComputedStyle", { configurable: !0, enumerable: !0, value: function () {
            b.timeline._updateAnimationsPromises();var a = j.apply(this, arguments);return e() && (a = j.apply(this, arguments)), b.timeline._updateAnimationsPromises(), a;
          } }), window.KeyframeEffect = b.KeyframeEffect, window.Element.prototype.getAnimations = function () {
          return document.timeline.getAnimations().filter(function (a) {
            return null !== a.effect && a.effect.target == this;
          }.bind(this));
        };
      }(c, e), function (a, b, c) {
        function d(a) {
          a._registered || (a._registered = !0, g.push(a), h || (h = !0, requestAnimationFrame(e)));
        }function e(a) {
          var b = g;g = [], b.sort(function (a, b) {
            return a._sequenceNumber - b._sequenceNumber;
          }), b = b.filter(function (a) {
            a();var b = a._animation ? a._animation.playState : "idle";return "running" != b && "pending" != b && (a._registered = !1), a._registered;
          }), g.push.apply(g, b), g.length ? (h = !0, requestAnimationFrame(e)) : h = !1;
        }var f = (document.createElementNS("http://www.w3.org/1999/xhtml", "div"), 0);b.bindAnimationForCustomEffect = function (b) {
          var c,
              e = b.effect.target,
              g = "function" == typeof b.effect.getFrames();c = g ? b.effect.getFrames() : b.effect._onsample;var h = b.effect.timing,
              i = null;h = a.normalizeTimingInput(h);var j = function () {
            var d = j._animation ? j._animation.currentTime : null;null !== d && (d = a.calculateIterationProgress(a.calculateActiveDuration(h), d, h), isNaN(d) && (d = null)), d !== i && (g ? c(d, e, b.effect) : c(d, b.effect, b.effect._animation)), i = d;
          };j._animation = b, j._registered = !1, j._sequenceNumber = f++, b._callback = j, d(j);
        };var g = [],
            h = !1;b.Animation.prototype._register = function () {
          this._callback && d(this._callback);
        };
      }(c, e), function (a, b, c) {
        function d(a) {
          return a._timing.delay + a.activeDuration + a._timing.endDelay;
        }function e(b, c, d) {
          this._id = d, this._parent = null, this.children = b || [], this._reparent(this.children), c = a.numericTimingToObject(c), this._timingInput = a.cloneTimingInput(c), this._timing = a.normalizeTimingInput(c, !0), this.timing = a.makeTiming(c, !0, this), this.timing._effect = this, "auto" === this._timing.duration && (this._timing.duration = this.activeDuration);
        }window.SequenceEffect = function () {
          e.apply(this, arguments);
        }, window.GroupEffect = function () {
          e.apply(this, arguments);
        }, e.prototype = { _isAncestor: function (a) {
            for (var b = this; null !== b;) {
              if (b == a) return !0;b = b._parent;
            }return !1;
          }, _rebuild: function () {
            for (var a = this; a;) "auto" === a.timing.duration && (a._timing.duration = a.activeDuration), a = a._parent;this._animation && this._animation._rebuildUnderlyingAnimation();
          }, _reparent: function (a) {
            b.removeMulti(a);for (var c = 0; c < a.length; c++) a[c]._parent = this;
          }, _putChild: function (a, b) {
            for (var c = b ? "Cannot append an ancestor or self" : "Cannot prepend an ancestor or self", d = 0; d < a.length; d++) if (this._isAncestor(a[d])) throw { type: DOMException.HIERARCHY_REQUEST_ERR, name: "HierarchyRequestError", message: c };for (var d = 0; d < a.length; d++) b ? this.children.push(a[d]) : this.children.unshift(a[d]);this._reparent(a), this._rebuild();
          }, append: function () {
            this._putChild(arguments, !0);
          }, prepend: function () {
            this._putChild(arguments, !1);
          }, get parent() {
            return this._parent;
          }, get firstChild() {
            return this.children.length ? this.children[0] : null;
          }, get lastChild() {
            return this.children.length ? this.children[this.children.length - 1] : null;
          }, clone: function () {
            for (var b = a.cloneTimingInput(this._timingInput), c = [], d = 0; d < this.children.length; d++) c.push(this.children[d].clone());return this instanceof GroupEffect ? new GroupEffect(c, b) : new SequenceEffect(c, b);
          }, remove: function () {
            b.removeMulti([this]);
          } }, window.SequenceEffect.prototype = Object.create(e.prototype), Object.defineProperty(window.SequenceEffect.prototype, "activeDuration", { get: function () {
            var a = 0;return this.children.forEach(function (b) {
              a += d(b);
            }), Math.max(a, 0);
          } }), window.GroupEffect.prototype = Object.create(e.prototype), Object.defineProperty(window.GroupEffect.prototype, "activeDuration", { get: function () {
            var a = 0;return this.children.forEach(function (b) {
              a = Math.max(a, d(b));
            }), a;
          } }), b.newUnderlyingAnimationForGroup = function (c) {
          var d,
              e = null,
              f = function (b) {
            var c = d._wrapper;if (c && "pending" != c.playState && c.effect) return null == b ? void c._removeChildAnimations() : 0 == b && c.playbackRate < 0 && (e || (e = a.normalizeTimingInput(c.effect.timing)), b = a.calculateIterationProgress(a.calculateActiveDuration(e), -1, e), isNaN(b) || null == b) ? (c._forEachChild(function (a) {
              a.currentTime = -1;
            }), void c._removeChildAnimations()) : void 0;
          },
              g = new KeyframeEffect(null, [], c._timing, c._id);return g.onsample = f, d = b.timeline._play(g);
        }, b.bindAnimationForGroup = function (a) {
          a._animation._wrapper = a, a._isGroup = !0, b.awaitStartTime(a), a._constructChildAnimations(), a._setExternalAnimation(a);
        }, b.groupChildDuration = d;
      }(c, e), b.true = a;
    }({}, function () {
      return this;
    }());
    
  })(this);

  return _retrieveGlobal();
});
System.register('js/SprinkhaanAnimation.js', ['npm:systemjs-plugin-babel@0.0.21/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.21/babel-helpers/createClass.js', 'npm:systemjs-plugin-babel@0.0.21/babel-helpers/possibleConstructorReturn.js', 'npm:systemjs-plugin-babel@0.0.21/babel-helpers/inherits.js', 'events', 'web-animations/web-animations-next.min'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, _possibleConstructorReturn, _inherits, EventEmitter, SprinkhaanAnimation;

    return {
        setters: [function (_npmSystemjsPluginBabel0021BabelHelpersClassCallCheckJs) {
            _classCallCheck = _npmSystemjsPluginBabel0021BabelHelpersClassCallCheckJs.default;
        }, function (_npmSystemjsPluginBabel0021BabelHelpersCreateClassJs) {
            _createClass = _npmSystemjsPluginBabel0021BabelHelpersCreateClassJs.default;
        }, function (_npmSystemjsPluginBabel0021BabelHelpersPossibleConstructorReturnJs) {
            _possibleConstructorReturn = _npmSystemjsPluginBabel0021BabelHelpersPossibleConstructorReturnJs.default;
        }, function (_npmSystemjsPluginBabel0021BabelHelpersInheritsJs) {
            _inherits = _npmSystemjsPluginBabel0021BabelHelpersInheritsJs.default;
        }, function (_events) {
            EventEmitter = _events.default;
        }, function (_webAnimationsWebAnimationsNextMin) {}],
        execute: function () {
            SprinkhaanAnimation = function (_EventEmitter) {
                _inherits(SprinkhaanAnimation, _EventEmitter);

                function SprinkhaanAnimation(animationOptions) {
                    _classCallCheck(this, SprinkhaanAnimation);

                    var _this = _possibleConstructorReturn(this, (SprinkhaanAnimation.__proto__ || Object.getPrototypeOf(SprinkhaanAnimation)).call(this));

                    _this.currentFinished = 0;
                    _this.animations = [];
                    _this.animationOptions = {};

                    _this.animationOptions = animationOptions;
                    return _this;
                }

                _createClass(SprinkhaanAnimation, [{
                    key: 'addKeyframeEffect',
                    value: function addKeyframeEffect(element, frames) {
                        var _this2 = this;

                        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                        var currentOptions = Object.assign(this.animationOptions, options);
                        var keyframeEffect = new KeyframeEffect(element, frames, currentOptions);
                        var animation = new Animation(keyframeEffect, document.timeline);

                        animation.onfinish = function () {
                            _this2.currentFinished++;

                            if (_this2.currentFinished === _this2.animations.length) {
                                _this2.currentFinished = 0;
                                _this2.emit('finished');
                            }
                        };

                        this.animations.push(animation);
                    }
                }, {
                    key: 'play',
                    value: function play() {
                        this.animations.forEach(function (animation) {
                            animation.play();
                        });

                        return this;
                    }
                }, {
                    key: 'reverse',
                    value: function reverse() {
                        this.animations.forEach(function (animation) {
                            animation.reverse();
                        });

                        return this;
                    }
                }, {
                    key: 'pause',
                    value: function pause() {
                        this.animations.forEach(function (animation) {
                            animation.pause();
                        });

                        return this;
                    }
                }, {
                    key: 'currentTime',
                    set: function set(currentTime) {
                        this.animations.forEach(function (animation) {
                            animation._animation.currentTime = currentTime;
                        });
                    },
                    get: function get() {
                        return this.animations[0]._animation.currentTime;
                    }
                }, {
                    key: 'activeDuration',
                    get: function get() {
                        return this.animations[0].effect.activeDuration;
                    }
                }]);

                return SprinkhaanAnimation;
            }(EventEmitter);

            _export('default', SprinkhaanAnimation);
        }
    };
});
System.register("npm:systemjs-plugin-babel@0.0.21/babel-helpers/classCallCheck.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      });
    }
  };
});
System.register("npm:systemjs-plugin-babel@0.0.21/babel-helpers/possibleConstructorReturn.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      });
    }
  };
});
System.registerDynamic("npm:systemjs-plugin-babel@0.0.21.json", [], true, function() {
  return {
    "main": "plugin-babel.js",
    "map": {
      "systemjs-babel-build": {
        "browser": "./systemjs-babel-browser.js",
        "default": "./systemjs-babel-browser.js"
      }
    },
    "meta": {
      "./plugin-babel.js": {
        "format": "cjs"
      }
    }
  };
});

System.register("npm:systemjs-plugin-babel@0.0.21/babel-helpers/inherits.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      });
    }
  };
});
System.registerDynamic("npm:jspm-nodelibs-events@0.2.0.json", [], true, function() {
  return {
    "main": "./events.js"
  };
});

System.registerDynamic('npm:jspm-nodelibs-events@0.2.0/events.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;

  // Backwards-compat with node 0.10.x
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  EventEmitter.defaultMaxListeners = 10;

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function (n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };

  EventEmitter.prototype.emit = function (type) {
    var er, handler, len, args, i, listeners;

    if (!this._events) this._events = {};

    // If there is no 'error' event listener then throw.
    if (type === 'error') {
      if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        }
        throw TypeError('Uncaught, unspecified "error" event.');
      }
    }

    handler = this._events[type];

    if (isUndefined(handler)) return false;

    if (isFunction(handler)) {
      switch (arguments.length) {
        // fast cases
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        // slower
        default:
          args = Array.prototype.slice.call(arguments, 1);
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      args = Array.prototype.slice.call(arguments, 1);
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++) listeners[i].apply(this, args);
    }

    return true;
  };

  EventEmitter.prototype.addListener = function (type, listener) {
    var m;

    if (!isFunction(listener)) throw TypeError('listener must be a function');

    if (!this._events) this._events = {};

    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

    if (!this._events[type])
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;else if (isObject(this._events[type]))
      // If we've already got an array, just append.
      this._events[type].push(listener);else
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];

    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
        if (typeof console.trace === 'function') {
          // not supported in IE 10
          console.trace();
        }
      }
    }

    return this;
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.once = function (type, listener) {
    if (!isFunction(listener)) throw TypeError('listener must be a function');

    var fired = false;

    function g() {
      this.removeListener(type, g);

      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }

    g.listener = listener;
    this.on(type, g);

    return this;
  };

  // emits a 'removeListener' event iff the listener was removed
  EventEmitter.prototype.removeListener = function (type, listener) {
    var list, position, length, i;

    if (!isFunction(listener)) throw TypeError('listener must be a function');

    if (!this._events || !this._events[type]) return this;

    list = this._events[type];
    length = list.length;
    position = -1;

    if (list === listener || isFunction(list.listener) && list.listener === listener) {
      delete this._events[type];
      if (this._events.removeListener) this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
      for (i = length; i-- > 0;) {
        if (list[i] === listener || list[i].listener && list[i].listener === listener) {
          position = i;
          break;
        }
      }

      if (position < 0) return this;

      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }

      if (this._events.removeListener) this.emit('removeListener', type, listener);
    }

    return this;
  };

  EventEmitter.prototype.removeAllListeners = function (type) {
    var key, listeners;

    if (!this._events) return this;

    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
      if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
      return this;
    }

    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener') continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }

    listeners = this._events[type];

    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (listeners) {
      // LIFO order
      while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];

    return this;
  };

  EventEmitter.prototype.listeners = function (type) {
    var ret;
    if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
    return ret;
  };

  EventEmitter.prototype.listenerCount = function (type) {
    if (this._events) {
      var evlistener = this._events[type];

      if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
    }
    return 0;
  };

  EventEmitter.listenerCount = function (emitter, type) {
    return emitter.listenerCount(type);
  };

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function isNumber(arg) {
    return typeof arg === 'number';
  }

  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  function isUndefined(arg) {
    return arg === void 0;
  }
});
System.registerDynamic('js/CallPlayer.js', [], false, function ($__require, $__exports, $__module) {
    var _retrieveGlobal = System.registry.get("@@global-helpers").prepareGlobal($__module.id, null, null);

    (function ($__global) {
        $__global['callPlayer'] = callPlayer;
        /**
         * @author       Rob W <gwnRob@gmail.com>
         * @website      http://stackoverflow.com/a/7513356/938089
         * @version      20131010
         * @description  Executes function on a framed YouTube video (see website link)
         *               For a full list of possible functions, see:
         *               https://developers.google.com/youtube/js_api_reference
         * @param String frame_id The id of (the div containing) the frame
         * @param String func     Desired function to call, eg. "playVideo"
         *        (Function)      Function to call when the player is ready.
         * @param Array  args     (optional) List of arguments to pass to function func*/
        function callPlayer(frame_id, func, args) {
            if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
            var iframe = document.getElementById(frame_id);
            if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
                iframe = iframe.getElementsByTagName('iframe')[0];
            }

            // When the player is not ready yet, add the event to a queue
            // Each frame_id is associated with an own queue.
            // Each queue has three possible states:
            //  undefined = uninitialised / array = queue / 0 = ready
            if (!callPlayer.queue) callPlayer.queue = {};
            var queue = callPlayer.queue[frame_id],
                domReady = document.readyState == 'complete';

            if (domReady && !iframe) {
                // DOM is ready and iframe does not exist. Log a message
                window.console && console.log('callPlayer: Frame not found; id=' + frame_id);
                if (queue) clearInterval(queue.poller);
            } else if (func === 'listening') {
                // Sending the "listener" message to the frame, to request status updates
                if (iframe && iframe.contentWindow) {
                    func = '{"event":"listening","id":' + JSON.stringify('' + frame_id) + '}';
                    iframe.contentWindow.postMessage(func, '*');
                }
            } else if (!domReady || iframe && (!iframe.contentWindow || queue && !queue.ready) || (!queue || !queue.ready) && typeof func === 'function') {
                if (!queue) queue = callPlayer.queue[frame_id] = [];
                queue.push([func, args]);
                if (!('poller' in queue)) {
                    // keep polling until the document and frame is ready
                    queue.poller = setInterval(function () {
                        callPlayer(frame_id, 'listening');
                    }, 250);
                    // Add a global "message" event listener, to catch status updates:
                    messageEvent(1, function runOnceReady(e) {
                        if (!iframe) {
                            iframe = document.getElementById(frame_id);
                            if (!iframe) return;
                            if (iframe.tagName.toUpperCase() != 'IFRAME') {
                                iframe = iframe.getElementsByTagName('iframe')[0];
                                if (!iframe) return;
                            }
                        }
                        if (e.source === iframe.contentWindow) {
                            // Assume that the player is ready if we receive a
                            // message from the iframe
                            clearInterval(queue.poller);
                            queue.ready = true;
                            messageEvent(0, runOnceReady);
                            // .. and release the queue:
                            while (tmp = queue.shift()) {
                                callPlayer(frame_id, tmp[0], tmp[1]);
                            }
                        }
                    }, false);
                }
            } else if (iframe && iframe.contentWindow) {
                // When a function is supplied, just call it (like "onYouTubePlayerReady")
                if (func.call) return func();
                // Frame exists, send message
                iframe.contentWindow.postMessage(JSON.stringify({
                    "event": "command",
                    "func": func,
                    "args": args || [],
                    "id": frame_id
                }), "*");
            }
            /* IE8 does not support addEventListener... */
            function messageEvent(add, listener) {
                var w3 = add ? window.addEventListener : window.removeEventListener;
                w3 ? w3('message', listener, !1) : (add ? window.attachEvent : window.detachEvent)('onmessage', listener);
            }
        }
    })(this);

    return _retrieveGlobal();
});
System.register('js/SprinkhaanYoutube.js', ['npm:systemjs-plugin-babel@0.0.21/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.21/babel-helpers/possibleConstructorReturn.js', 'npm:systemjs-plugin-babel@0.0.21/babel-helpers/inherits.js', 'events', './CallPlayer.js'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _possibleConstructorReturn, _inherits, EventEmitter, SprinkhaanYoutube;

    return {
        setters: [function (_npmSystemjsPluginBabel0021BabelHelpersClassCallCheckJs) {
            _classCallCheck = _npmSystemjsPluginBabel0021BabelHelpersClassCallCheckJs.default;
        }, function (_npmSystemjsPluginBabel0021BabelHelpersPossibleConstructorReturnJs) {
            _possibleConstructorReturn = _npmSystemjsPluginBabel0021BabelHelpersPossibleConstructorReturnJs.default;
        }, function (_npmSystemjsPluginBabel0021BabelHelpersInheritsJs) {
            _inherits = _npmSystemjsPluginBabel0021BabelHelpersInheritsJs.default;
        }, function (_events) {
            EventEmitter = _events.default;
        }, function (_CallPlayerJs) {}],
        execute: function () {
            SprinkhaanYoutube = function (_EventEmitter) {
                _inherits(SprinkhaanYoutube, _EventEmitter);

                function SprinkhaanYoutube(options) {
                    _classCallCheck(this, SprinkhaanYoutube);

                    var _this = _possibleConstructorReturn(this, (SprinkhaanYoutube.__proto__ || Object.getPrototypeOf(SprinkhaanYoutube)).call(this));

                    _this.youtubeId = false;
                    _this.element = null;
                    _this.thumbnail = null;
                    _this.iOsLink = null;
                    _this.sprinkhaan = false;
                    _this.iframe = null;
                    _this.isPlaying = false;

                    Object.assign(_this, options);

                    _this.thumbnail = document.createElement('img');
                    _this.thumbnail.src = '//img.youtube.com/vi/' + _this.youtubeId + '/maxresdefault.jpg';

                    if (_this.sprinkhaan.iOs) {
                        _this.iOsLink = document.createElement('a');
                        _this.iOsLink.href = '//youtube.com/v/' + _this.youtubeId;
                        _this.iOsLink.appendChild(_this.thumbnail);
                        _this.element.appendChild(_this.iOsLink);
                    } else {
                        _this.element.appendChild(_this.thumbnail);

                        _this.element.removeChild(_this.thumbnail);
                        _this.iframe = document.createElement('iframe');
                        _this.iframe.src = '//www.youtube.com/embed/' + _this.youtubeId + '?enablejsapi=1&wmode=opaque&controls=0';
                        _this.iframe.setAttribute('frameborder', 0);
                        _this.iframe.setAttribute('allowfullscreen', 'allowfullscreen');
                        _this.iframe.setAttribute('scrolling', 'no');
                        _this.iframe.setAttribute('autoplay', 'yes');
                        _this.iframe.id = 'sprinkhaan-' + _this.youtubeId;

                        _this.element.appendChild(_this.iframe);

                        _this.sprinkhaan.touchRegion.bind(_this.element, 'tap', function (event) {
                            if (event.detail.events[0].originalEvent instanceof TouchEvent) {
                                return;
                            }

                            if (_this.isPlaying) {
                                callPlayer(_this.iframe.id, 'pauseVideo');
                                _this.isPlaying = false;
                            } else {
                                _this.isPlaying = true;
                                callPlayer(_this.iframe.id, 'playVideo');
                            }
                        });
                    }
                    return _this;
                }

                return SprinkhaanYoutube;
            }(EventEmitter);

            _export('default', SprinkhaanYoutube);
        }
    };
});
System.register('js/Sprinkhaan.js', ['npm:systemjs-plugin-babel@0.0.21/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.21/babel-helpers/createClass.js', 'npm:systemjs-plugin-babel@0.0.21/babel-helpers/possibleConstructorReturn.js', 'npm:systemjs-plugin-babel@0.0.21/babel-helpers/inherits.js', 'events', 'web-animations/web-animations-next.min', 'zingtouch', './SprinkhaanAnimation.js', './SprinkhaanYoutube.js'], function (_export, _context) {
    "use strict";

    var _classCallCheck, _createClass, _possibleConstructorReturn, _inherits, EventEmitter, ZingTouch, SprinkhaanAnimation, SprinkhaanYoutube, Sprinkhaan;

    return {
        setters: [function (_npmSystemjsPluginBabel0021BabelHelpersClassCallCheckJs) {
            _classCallCheck = _npmSystemjsPluginBabel0021BabelHelpersClassCallCheckJs.default;
        }, function (_npmSystemjsPluginBabel0021BabelHelpersCreateClassJs) {
            _createClass = _npmSystemjsPluginBabel0021BabelHelpersCreateClassJs.default;
        }, function (_npmSystemjsPluginBabel0021BabelHelpersPossibleConstructorReturnJs) {
            _possibleConstructorReturn = _npmSystemjsPluginBabel0021BabelHelpersPossibleConstructorReturnJs.default;
        }, function (_npmSystemjsPluginBabel0021BabelHelpersInheritsJs) {
            _inherits = _npmSystemjsPluginBabel0021BabelHelpersInheritsJs.default;
        }, function (_events) {
            EventEmitter = _events.default;
        }, function (_webAnimationsWebAnimationsNextMin) {}, function (_zingtouch) {
            ZingTouch = _zingtouch.default;
        }, function (_SprinkhaanAnimationJs) {
            SprinkhaanAnimation = _SprinkhaanAnimationJs.default;
        }, function (_SprinkhaanYoutubeJs) {
            SprinkhaanYoutube = _SprinkhaanYoutubeJs.default;
        }],
        execute: function () {
            Sprinkhaan = function (_EventEmitter) {
                _inherits(Sprinkhaan, _EventEmitter);

                function Sprinkhaan(options) {
                    _classCallCheck(this, Sprinkhaan);

                    var _this = _possibleConstructorReturn(this, (Sprinkhaan.__proto__ || Object.getPrototypeOf(Sprinkhaan)).call(this));

                    _this.prefix = '.sprinkhaan-';
                    _this.easing = 'cubic-bezier(.61,.14,.5,.93)';
                    _this.selector = '#sprinkhaan';
                    _this.speed = 300;
                    _this.threshold = 30;
                    _this.iOs = false;
                    _this.element = false;
                    _this.elements = {
                        'content-wrapper': false,
                        'header.is-sticky': false,
                        'header.is-not-sticky': false,
                        'content': false,
                        'media': false,
                        'inner': false,
                        'close-button': false
                    };
                    _this.panDirection = 'down';
                    _this.animations = {
                        teaser: {},
                        popup: {}
                    };
                    _this.boundEvents = {};
                    _this.touchRegion = undefined;
                    _this.panningStartTarget = false;
                    _this.panningStartY = false;
                    _this.properties = {
                        state: 'hidden',
                        isAnimating: false,
                        isPanning: false
                    };

                    Object.assign(_this, options);

                    _this.element = document.querySelector(_this.selector);
                    if (!_this.element) {
                        throw 'Sprinkhaan needs a valid element to function';
                    }
                    _this.iOs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

                    Object.keys(_this.elements).forEach(function (subElement) {
                        _this.elements[subElement] = _this.element.querySelector(_this.prefix + subElement);
                    });

                    _this.elements['content'].style.marginTop = _this.elements['header.is-not-sticky'].clientHeight + 'px';
                    if (_this.elements['media']) {
                        _this.elements['media'].style.width = _this.element.clientWidth + 'px';
                    }
                    _this.elements['content-wrapper'].style.width = _this.element.clientWidth + 'px';
                    _this.elements['header.is-not-sticky'].style.width = _this.element.clientWidth + 'px';
                    _this.elements['header.is-sticky'].style.width = _this.element.clientWidth + 'px';

                    _this.element.style.height = Math.min(_this.element.clientHeight, _this.elements['content-wrapper'].clientHeight + (_this.elements['media'] ? _this.elements['media'].clientHeight : 0)) + 'px';
                    _this.createAnimations();
                    _this.attachEventListeners();
                    _this.updateDataAttributes();

                    if (_this.elements['media'] && _this.elements['media'].dataset.youtube) {
                        _this.youtube = new SprinkhaanYoutube({
                            youtubeId: _this.elements['media'].dataset.youtube,
                            element: _this.elements['media'],
                            sprinkhaan: _this
                        });
                    }

                    return _this;
                }

                // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API


                _createClass(Sprinkhaan, [{
                    key: 'createAnimations',
                    value: function createAnimations() {
                        var _this2 = this;

                        var finished = function finished() {
                            _this2.isAnimating = false;

                            // Somehow we need to recreate the animations on each end.
                            // It could be I don't understand correctly how it works.
                            // TODO find out why.
                            _this2.createAnimations();
                        };

                        var animationOptions = {
                            duration: this.speed,
                            fill: 'both',
                            easing: this.easing
                        };

                        this.animations.teaser = new SprinkhaanAnimation(animationOptions);
                        this.animations.popup = new SprinkhaanAnimation(animationOptions);

                        this.animations.teaser.on('finished', finished);
                        this.animations.popup.on('finished', finished);

                        // This one simply hides the media object from appearing when using the hide method.
                        this.animations.teaser.addKeyframeEffect(this.elements['media'], [{ transform: 'translateY(' + this.element.clientHeight + 'px)' }, { transform: 'translateY(' + this.element.clientHeight + 'px)' }]);

                        this.animations.teaser.addKeyframeEffect(this.elements['content-wrapper'], [{ transform: 'translateY(' + this.element.clientHeight + 'px) translateY(0)' }, { transform: 'translateY(' + this.element.clientHeight + 'px) translateY(-' + this.elements['header.is-not-sticky'].clientHeight + 'px)' }]);

                        if (window.outerWidth <= this.element.clientWidth) {
                            this.animations.popup.addKeyframeEffect(this.elements['inner'], [{ backgroundColor: 'rgba(0, 0, 0, 0)' }, { backgroundColor: 'rgba(0, 0, 0, .8)' }]);
                        }

                        this.animations.popup.addKeyframeEffect(this.elements['media'], [{ opacity: '.5' }, { opacity: '1' }]);

                        this.animations.popup.addKeyframeEffect(this.elements['media'], [{ transform: 'translateY(' + this.element.clientHeight + 'px)' }, { transform: 'translateY(' + (this.element.clientHeight - this.elements['header.is-not-sticky'].clientHeight) + 'px)', offset: 0.01 }, { transform: 'translateY(0)' }]);

                        this.animations.popup.addKeyframeEffect(this.elements['content-wrapper'], [{ transform: 'translateY(' + this.element.clientHeight + 'px) translateY(-' + this.elements['header.is-not-sticky'].clientHeight + 'px)' }, { transform: 'translateY(' + (this.elements['media'] ? this.elements['media'].clientHeight : 0) + 'px) translateY(0)' }]);
                    }
                }, {
                    key: 'attachEventListeners',
                    value: function attachEventListeners() {
                        var _this3 = this;

                        this.touchRegion = new ZingTouch.Region(document.body, false, false);

                        // In some cases zingTouch gives a tap via a mouse click and a touchdown event.
                        // For example when you debug via chrome with mobile simulator.
                        // Hence the debounce.
                        this.touchRegion.bind(this.elements['close-button'], 'tap', this.debounce(function () {
                            return _this3.collapse();
                        }), 40);
                        this.touchRegion.bind(this.elements['header.is-not-sticky'], 'tap', this.debounce(function () {
                            return _this3.expand();
                        }), 40);
                        this.touchRegion.bind(this.element, 'pan', function (event) {
                            return _this3.pan(event);
                        });

                        // These handlers need unbind, see destroy().
                        this.boundEvents = {
                            resize: function resize(event) {
                                return _this3.resizeWindow(event);
                            },
                            orientationchange: function orientationchange(event) {
                                return _this3.resizeWindow(event);
                            },
                            touchend: function touchend(event) {
                                return _this3.panEnd(event);
                            },
                            mouseup: function mouseup(event) {
                                return _this3.panEnd(event);
                            },
                            scroll: function scroll(event) {
                                return _this3.elementScroll(event);
                            },
                            wheel: function wheel(event) {
                                return _this3.wheelScroll(event);
                            }
                        };

                        window.addEventListener('resize', this.boundEvents.resize);
                        window.addEventListener('orientationchange', this.boundEvents.orientationchange);
                        document.body.addEventListener('touchend', this.boundEvents.touchend);
                        document.body.addEventListener('mouseup', this.boundEvents.mouseup);
                        this.elements['inner'].addEventListener('scroll', this.boundEvents.scroll);
                        window.addEventListener('wheel', this.boundEvents.wheel, { passive: true });
                    }
                }, {
                    key: 'resizeWindow',
                    value: function resizeWindow() {
                        this.animations.popup.pause();

                        // TODO add state hidden.
                        if (this.state === 'collapsed') {
                            this.animations.popup.currentTime = 0;
                        }

                        if (this.state === 'expanded') {
                            this.animations.popup.currentTime = this.speed;
                        }

                        this.createAnimations();
                    }
                }, {
                    key: 'panStart',
                    value: function panStart(event) {
                        this.panningStartTarget = this.getSprinkhaanParentOfElement(event.detail.events[0].originalEvent.target);

                        if (!this.panningStartTarget) {
                            return;
                        }

                        this.isPanning = true;
                        this.animations.popup.pause();
                        this.panningStartY = event.detail.events[0].clientY;
                    }
                }, {
                    key: 'pan',
                    value: function pan(event) {
                        // Shorter references so the code below is readable.
                        var popupAnimation = this.animations.popup;
                        this.panDirection = event.detail.data[0].currentDirection >= 0 && event.detail.data[0].currentDirection <= 180 ? 'up' : 'down';
                        var els = this.elements;

                        if (this.iOs) {
                            if (this.isPanning && this.state === 'expanded' && els['inner'].scrollTop === 0 && this.panDirection === 'down' || this.state === 'collapsed') {
                                event.detail.events.forEach(function (_e) {
                                    return _e.originalEvent.preventDefault();
                                });
                            }
                        }

                        if (this.resetPanningStartY) {
                            this.resetPanningStartY = false;
                            this.panningStartY = event.detail.events[0].clientY;
                        }

                        if (this.isAnimating) {
                            return;
                        }
                        if (!this.isPanning) {
                            this.panStart(event);
                        }
                        if (!this.panningStartTarget) {
                            return;
                        }

                        var offset = event.detail.events[0].clientY - this.panningStartY;
                        var msPerPx = popupAnimation.activeDuration / (this.element.clientHeight - (els['media'] ? els['media'].offsetHeight : 0) - els['header.is-not-sticky'].offsetHeight);
                        var animationPosition = offset * msPerPx;

                        if (this.state === 'collapsed' && this.panningStartTarget === els['header.is-not-sticky']) {
                            var _animationPosition = Math.max(0 - offset, 0) * msPerPx;

                            // If you pan the popup up and you let it stop at 100% the web animation starts to play again.
                            // So we want it to stop at 99.9% or the current position.
                            popupAnimation.currentTime = Math.min(popupAnimation.activeDuration - .1, _animationPosition);
                        }

                        if (this.state === 'expanded' && [els['content'], els['header.is-not-sticky'], els['media']].includes(this.panningStartTarget) && els['inner'].scrollTop === 0) {

                            // Animating where the user drag the media element
                            if (this.panningStartTarget === els['media']) {
                                // We need to recalculate these items for the media animation.
                                msPerPx = popupAnimation.activeDuration / (this.element.clientHeight - els['header.is-not-sticky'].offsetHeight);
                                animationPosition = offset * msPerPx;

                                // We want the animation to start at 0 not before it.
                                popupAnimation.currentTime = Math.min(Math.max(0, popupAnimation.activeDuration - animationPosition), this.speed);
                            }

                            // Animating where the user drag the header or the content element
                            if ([els['content'], els['header.is-not-sticky']].includes(this.panningStartTarget)) {
                                // We want the animation to start at 0 not before it.
                                popupAnimation.currentTime = Math.min(Math.max(0, popupAnimation.activeDuration - animationPosition), this.speed);
                            }
                        }

                        this.updateDataAttributes();
                    }
                }, {
                    key: 'panEnd',
                    value: function panEnd(event) {
                        if (!this.isPanning) {
                            return;
                        }
                        if (!this.panningStartTarget) {
                            return;
                        }

                        this.panningStartY = false;
                        var percentageDone = Math.round(100 / this.animations.popup.activeDuration * this.animations.popup.currentTime);

                        // No need to react.
                        if (percentageDone === 100 && this.state === 'expanded' && this.panDirection === 'up' || percentageDone === 100 && this.state === 'expanded' && this.panDirection === 'down') {
                            this.isPanning = false;
                            return;
                        }

                        // The following logic allows the popup to close or open depending on the percentage dragged.
                        if (this.state === 'collapsed') {
                            if (percentageDone > this.threshold) {
                                this.expand();
                            } else if (percentageDone !== 0) {
                                this.collapse();
                            }
                        } else if (this.state === 'expanded') {
                            percentageDone = 100 - percentageDone;

                            if (percentageDone > this.threshold) {
                                this.collapse();
                            } else {
                                this.expand();
                            }
                        }

                        this.isPanning = false;
                    }
                }, {
                    key: 'wheelScroll',
                    value: function wheelScroll(event) {
                        if (this.isAnimating) {
                            return;
                        }
                        var direction = event.deltaY < 0 ? 'down' : 'up';

                        // The user has a mouse and scrolls on the header.
                        if (event.target === this.elements['header.is-not-sticky'] && this.state === 'collapsed' && direction === 'up' && this.elements['inner'].scrollTop === 0) {
                            this.expand();
                        }

                        // If the user has a mouse en scrolls in the popup down.
                        if (this.state === 'expanded' && this.elements['inner'].scrollTop === 0 && direction === 'down') {
                            this.collapse();
                        }
                    }
                }, {
                    key: 'elementScroll',
                    value: function elementScroll(event) {
                        if (this.isAnimating && !this.isScrollingToTop) {
                            this.elements['inner'].scrollTop = 0;
                        }

                        if (this.elements['inner'].scrollTop === 0 && this.previousScrollTop !== 0) {
                            this.resetPanningStartY = true;
                        }

                        this.previousScrollTop = this.elements['inner'].scrollTop;
                        this.updateDataAttributes();
                    }
                }, {
                    key: 'updateDataAttributes',
                    value: function updateDataAttributes() {
                        this.element.dataset.preStickyHeader = this.elements['inner'].scrollTop > (this.elements['media'] ? this.elements['media'].clientHeight : 0) - 50;
                        this.element.dataset.stickyHeader = this.elements['inner'].scrollTop > (this.elements['media'] ? this.elements['media'].clientHeight : 0);
                        this.element.dataset.mediaEnabled = this.elements['inner'].scrollTop === 0 && this.state === 'expanded' && !this.isAnimating;
                        this.element.dataset.isPanning = this.isPanning;
                    }
                }, {
                    key: 'expand',
                    value: function expand(callback) {
                        var _this4 = this;

                        if (this.isAnimating || this.state === 'expanded' && !this.isPanning) {
                            if (typeof callback === 'function') {
                                callback();
                            }
                            return this;
                        }

                        this.state = 'expanded';
                        this.isAnimating = true;
                        this.animations.popup.once('finished', function () {
                            _this4.emit('expanded');
                            if (typeof callback === 'function') {
                                callback();
                            }

                            _this4.updateDataAttributes();
                        });

                        this.animations.popup.play();

                        return this;
                    }
                }, {
                    key: 'collapse',
                    value: function collapse(callback) {
                        var _this5 = this;

                        if (this.isAnimating || this.state !== 'expanded' && !this.isPanning) {
                            if (typeof callback === 'function') {
                                callback();
                            }
                            return this;
                        }

                        this.scrollToTop(this.elements['inner'], function () {
                            _this5.state = 'collapsed';

                            _this5.animations.popup.once('finished', function () {
                                _this5.emit('collapsed');
                                if (typeof callback === 'function') {
                                    callback();
                                }

                                _this5.updateDataAttributes();
                            });

                            _this5.isAnimating = true;
                            _this5.animations.popup.reverse();
                        });

                        return this;
                    }
                }, {
                    key: 'show',
                    value: function show(callback) {
                        var _this6 = this;

                        var finished = function finished() {
                            _this6.state = 'collapsed';
                            _this6.emit('collapsed');
                            if (typeof callback === 'function') {
                                callback();
                            }
                            _this6.updateDataAttributes();
                        };

                        if (this.state !== 'hidden') {
                            finished();
                        } else {
                            this.animations.teaser.once('finished', function () {
                                finished();
                            });

                            this.animations.teaser.play();
                        }

                        return this;
                    }
                }, {
                    key: 'hide',
                    value: function hide(callback) {
                        var _this7 = this;

                        var finished = function finished() {
                            _this7.emit('hidden');
                            _this7.state = 'hidden';
                            if (typeof callback === 'function') {
                                callback();
                            }
                            _this7.updateDataAttributes();
                        };

                        if (this.state !== 'collapsed') {
                            finished();
                        } else {
                            this.animations.teaser.once('finished', function () {
                                finished();
                            });

                            this.animations.teaser.reverse();
                        }

                        return this;
                    }
                }, {
                    key: 'detachEventListeners',
                    value: function detachEventListeners() {
                        this.touchRegion.unbind(this.elements['close-button']);
                        this.touchRegion.unbind(this.elements['header.is-not-sticky']);
                        this.touchRegion.unbind(this.element);

                        window.removeEventListener('resize', this.boundEvents.resize);
                        window.removeEventListener('orientationchange', this.boundEvents.orientationchange);
                        document.body.removeEventListener('touchend', this.boundEvents.touchend);
                        document.body.removeEventListener('mouseup', this.boundEvents.mouseup);
                        this.elements['inner'].removeEventListener('scroll', this.boundEvents.scroll);
                        window.removeEventListener('wheel', this.boundEvents.wheel);

                        this.emit('destroyed');
                    }
                }, {
                    key: 'destroy',
                    value: function destroy(callback) {
                        var _this8 = this;

                        this.detachEventListeners();

                        this.collapse(function () {
                            _this8.hide(function () {
                                if (typeof callback === 'function') {
                                    callback();
                                }
                            });
                        });
                    }
                }, {
                    key: 'scrollToTop',
                    value: function scrollToTop(element, callback) {
                        var _this9 = this;

                        this.isScrollingToTop = true;
                        if (element.scrollTop !== 0) {
                            setTimeout(function () {
                                element.scrollTop = Math.max(element.scrollTop - 50, 0);
                                _this9.scrollToTop(element, callback);
                            }, 1000 / 60);
                        } else {
                            this.isScrollingToTop = false;
                            if (typeof callback === 'function') {
                                callback();
                            }
                        }
                    }
                }, {
                    key: 'getSprinkhaanParentOfElement',
                    value: function getSprinkhaanParentOfElement(element) {
                        var _this10 = this;

                        var sprinkhaanElement = false;

                        var sprinkhaanElements = [];
                        Object.keys(this.elements).forEach(function (className) {
                            sprinkhaanElements.push(_this10.elements[className]);
                        });

                        while (element) {
                            if (!sprinkhaanElement && sprinkhaanElements.includes(element)) {
                                sprinkhaanElement = element;
                            }

                            element = element.parentNode;
                        }

                        return sprinkhaanElement;
                    }
                }, {
                    key: 'debounce',
                    value: function debounce(func, wait, immediate) {
                        var timeout = void 0;
                        return function () {
                            var context = this,
                                args = arguments;
                            var later = function later() {
                                timeout = null;
                                if (!immediate) func.apply(context, args);
                            };
                            var callNow = immediate && !timeout;
                            clearTimeout(timeout);
                            timeout = setTimeout(later, wait);
                            if (callNow) func.apply(context, args);
                        };
                    }
                }, {
                    key: 'state',
                    get: function get() {
                        return this.properties.state;
                    },
                    set: function set(state) {
                        this.element.dataset.state = state;
                        this.properties.state = state;
                    }
                }, {
                    key: 'isAnimating',
                    get: function get() {
                        return this.properties.isAnimating;
                    },
                    set: function set(state) {
                        this.element.dataset.animating = state;
                        this.properties.isAnimating = state;
                    }
                }, {
                    key: 'isPanning',
                    get: function get() {
                        return this.properties.isPanning;
                    },
                    set: function set(state) {
                        this.properties.isPanning = state;
                    }
                }]);

                return Sprinkhaan;
            }(EventEmitter);

            _export('default', Sprinkhaan);
        }
    };
});
//# sourceMappingURL=sprinkhaan.js.map