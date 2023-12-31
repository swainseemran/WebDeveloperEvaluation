! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, n) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function r() {
        return (r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }).apply(this, arguments)
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
    var o, a, l, h, c, u, f, d, _, g, p, m, v, E, T, y, C, I, A, b, D, S, w, N, O, k, P = function(t) {
            var e = !1;

            function n(e) {
                var n = this,
                    s = !1;
                return t(this).one(i.TRANSITION_END, function() {
                    s = !0
                }), setTimeout(function() {
                    s || i.triggerTransitionEnd(n)
                }, e), this
            }
            var i = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) {
                    do {
                        t += ~~(1e6 * Math.random())
                    } while (document.getElementById(t));
                    return t
                },
                getSelectorFromElement: function(e) {
                    var n, i = e.getAttribute("data-target");
                    i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                    try {
                        return t(document).find(i).length > 0 ? i : null
                    } catch (t) {
                        return null
                    }
                },
                reflow: function(t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function(n) {
                    t(n).trigger(e.end)
                },
                supportsTransitionEnd: function() {
                    return Boolean(e)
                },
                isElement: function(t) {
                    return (t[0] || t).nodeType
                },
                typeCheckConfig: function(t, e, n) {
                    for (var s in n)
                        if (Object.prototype.hasOwnProperty.call(n, s)) {
                            var r = n[s],
                                o = e[s],
                                a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                            if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".')
                        }
                    var l
                }
            };
            return e = ("undefined" == typeof window || !window.QUnit) && {
                end: "transitionend"
            }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
                bindType: e.end,
                delegateType: e.end,
                handle: function(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }), i
        }(e),
        L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = {
            CLOSE: "close" + h,
            CLOSED: "closed" + h,
            CLICK_DATA_API: "click" + h + ".data-api"
        }, f = "alert", d = "fade", _ = "show", g = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.close = function(t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, e.dispose = function() {
                o.removeData(this._element, l), this._element = null
            }, e._getRootElement = function(t) {
                var e = P.getSelectorFromElement(t),
                    n = !1;
                return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n
            }, e._triggerCloseEvent = function(t) {
                var e = o.Event(u.CLOSE);
                return o(t).trigger(e), e
            }, e._removeElement = function(t) {
                var e = this;
                o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function(n) {
                    return e._destroyElement(t, n)
                }).emulateTransitionEnd(150) : this._destroyElement(t)
            }, e._destroyElement = function(t) {
                o(t).detach().trigger(u.CLOSED).remove()
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = o(this),
                        i = n.data(l);
                    i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this)
                })
            }, t._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }]), t
        }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function() {
            return o.fn[a] = c, g._jQueryInterface
        }, g),
        R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
            CLICK_DATA_API: "click" + E + T,
            FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T
        }, k = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.toggle = function() {
                var t = !0,
                    e = !0,
                    n = p(this._element).closest(D)[0];
                if (n) {
                    var i = p(this._element).find(S)[0];
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && p(this._element).hasClass(C)) t = !1;
                            else {
                                var s = p(n).find(w)[0];
                                s && p(s).removeClass(C)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !p(this._element).hasClass(C), p(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C)
            }, e.dispose = function() {
                p.removeData(this._element, v), this._element = null
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = p(this).data(v);
                    n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]()
                })
            }, s(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }]), t
        }(), p(document).on(O.CLICK_DATA_API, b, function(t) {
            t.preventDefault();
            var e = t.target;
            p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, b, function(t) {
            var e = p(t.target).closest(N)[0];
            p(e).toggleClass(A, /^focus(in)?$/.test(t.type))
        }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function() {
            return p.fn[m] = y, k._jQueryInterface
        }, k),
        j = function(t) {
            var e = "carousel",
                n = "bs.carousel",
                i = "." + n,
                o = t.fn[e],
                a = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                l = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                h = "next",
                c = "prev",
                u = "left",
                f = "right",
                d = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    TOUCHEND: "touchend" + i,
                    LOAD_DATA_API: "load" + i + ".data-api",
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                _ = "carousel",
                g = "active",
                p = "slide",
                m = "carousel-item-right",
                v = "carousel-item-left",
                E = "carousel-item-next",
                T = "carousel-item-prev",
                y = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                C = function() {
                    function o(e, n) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners()
                    }
                    var C = o.prototype;
                    return C.next = function() {
                        this._isSliding || this._slide(h)
                    }, C.nextWhenVisible = function() {
                        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                    }, C.prev = function() {
                        this._isSliding || this._slide(c)
                    }, C.pause = function(e) {
                        e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, C.cycle = function(t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, C.to = function(e) {
                        var n = this;
                        this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];
                        var i = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0))
                            if (this._isSliding) t(this._element).one(d.SLID, function() {
                                return n.to(e)
                            });
                            else {
                                if (i === e) return this.pause(), void this.cycle();
                                var s = e > i ? h : c;
                                this._slide(s, this._items[e])
                            }
                    }, C.dispose = function() {
                        t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, C._getConfig = function(t) {
                        return t = r({}, a, t), P.typeCheckConfig(e, t, l), t
                    }, C._addEventListeners = function() {
                        var e = this;
                        this._config.keyboard && t(this._element).on(d.KEYDOWN, function(t) {
                            return e._keydown(t)
                        }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function(t) {
                            return e.pause(t)
                        }).on(d.MOUSELEAVE, function(t) {
                            return e.cycle(t)
                        }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function() {
                            e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval)
                        }))
                    }, C._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next()
                        }
                    }, C._getItemIndex = function(e) {
                        return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e)
                    }, C._getItemByDirection = function(t, e) {
                        var n = t === h,
                            i = t === c,
                            s = this._getItemIndex(e),
                            r = this._items.length - 1;
                        if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
                        var o = (s + (t === c ? -1 : 1)) % this._items.length;
                        return -1 === o ? this._items[this._items.length - 1] : this._items[o]
                    }, C._triggerSlideEvent = function(e, n) {
                        var i = this._getItemIndex(e),
                            s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
                            r = t.Event(d.SLIDE, {
                                relatedTarget: e,
                                direction: n,
                                from: s,
                                to: i
                            });
                        return t(this._element).trigger(r), r
                    }, C._setActiveIndicatorElement = function(e) {
                        if (this._indicatorsElement) {
                            t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);
                            var n = this._indicatorsElement.children[this._getItemIndex(e)];
                            n && t(n).addClass(g)
                        }
                    }, C._slide = function(e, n) {
                        var i, s, r, o = this,
                            a = t(this._element).find(y.ACTIVE_ITEM)[0],
                            l = this._getItemIndex(a),
                            c = n || a && this._getItemByDirection(e, a),
                            _ = this._getItemIndex(c),
                            C = Boolean(this._interval);
                        if (e === h ? (i = v, s = E, r = u) : (i = m, s = T, r = f), c && t(c).hasClass(g)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
                            this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(c);
                            var I = t.Event(d.SLID, {
                                relatedTarget: c,
                                direction: r,
                                from: l,
                                to: _
                            });
                            P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s), P.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(P.TRANSITION_END, function() {
                                t(c).removeClass(i + " " + s).addClass(g), t(a).removeClass(g + " " + s + " " + i), o._isSliding = !1, setTimeout(function() {
                                    return t(o._element).trigger(I)
                                }, 0)
                            }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(c).addClass(g), this._isSliding = !1, t(this._element).trigger(I)), C && this.cycle()
                        }
                    }, o._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(n),
                                s = r({}, a, t(this).data());
                            "object" == typeof e && (s = r({}, s, e));
                            var l = "string" == typeof e ? e : s.slide;
                            if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);
                            else if ("string" == typeof l) {
                                if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"');
                                i[l]()
                            } else s.interval && (i.pause(), i.cycle())
                        })
                    }, o._dataApiClickHandler = function(e) {
                        var i = P.getSelectorFromElement(this);
                        if (i) {
                            var s = t(i)[0];
                            if (s && t(s).hasClass(_)) {
                                var a = r({}, t(s).data(), t(this).data()),
                                    l = this.getAttribute("data-slide-to");
                                l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault()
                            }
                        }
                    }, s(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a
                        }
                    }]), o
                }();
            return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function() {
                t(y.DATA_RIDE).each(function() {
                    var e = t(this);
                    C._jQueryInterface.call(e, e.data())
                })
            }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function() {
                return t.fn[e] = o, C._jQueryInterface
            }, C
        }(e),
        H = function(t) {
            var e = "collapse",
                n = "bs.collapse",
                i = "." + n,
                o = t.fn[e],
                a = {
                    toggle: !0,
                    parent: ""
                },
                l = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                h = {
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                c = "show",
                u = "collapse",
                f = "collapsing",
                d = "collapsed",
                _ = "width",
                g = "height",
                p = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                m = function() {
                    function i(e, n) {
                        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                        for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
                            var r = i[s],
                                o = P.getSelectorFromElement(r);
                            null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var o = i.prototype;
                    return o.toggle = function() {
                        t(this._element).hasClass(c) ? this.hide() : this.show()
                    }, o.show = function() {
                        var e, s, r = this;
                        if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
                            var o = t.Event(h.SHOW);
                            if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));
                                var a = this._getDimension();
                                t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var l = function() {
                                    t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN)
                                };
                                if (P.supportsTransitionEnd()) {
                                    var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                    t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[_] + "px"
                                } else l()
                            }
                        }
                    }, o.hide = function() {
                        var e = this;
                        if (!this._isTransitioning && t(this._element).hasClass(c)) {
                            var n = t.Event(h.HIDE);
                            if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0)
                                    for (var s = 0; s < this._triggerArray.length; s++) {
                                        var r = this._triggerArray[s],
                                            o = P.getSelectorFromElement(r);
                                        if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1)
                                    }
                                this.setTransitioning(!0);
                                var a = function() {
                                    e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)
                                };
                                this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                            }
                        }
                    }, o.setTransitioning = function(t) {
                        this._isTransitioning = t
                    }, o.dispose = function() {
                        t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, o._getConfig = function(t) {
                        return (t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t
                    }, o._getDimension = function() {
                        return t(this._element).hasClass(_) ? _ : g
                    }, o._getParent = function() {
                        var e = this,
                            n = null;
                        P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                        var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return t(n).find(s).each(function(t, n) {
                            e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                        }), n
                    }, o._addAriaAndCollapsedClass = function(e, n) {
                        if (e) {
                            var i = t(e).hasClass(c);
                            n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i)
                        }
                    }, i._getTargetFromElement = function(e) {
                        var n = P.getSelectorFromElement(e);
                        return n ? t(n)[0] : null
                    }, i._jQueryInterface = function(e) {
                        return this.each(function() {
                            var s = t(this),
                                o = s.data(n),
                                l = r({}, a, s.data(), "object" == typeof e && e);
                            if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) {
                                if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                                o[e]()
                            }
                        })
                    }, s(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a
                        }
                    }]), i
                }();
            return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function(e) {
                "A" === e.currentTarget.tagName && e.preventDefault();
                var i = t(this),
                    s = P.getSelectorFromElement(this);
                t(s).each(function() {
                    var e = t(this),
                        s = e.data(n) ? "toggle" : i.data();
                    m._jQueryInterface.call(e, s)
                })
            }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
                return t.fn[e] = o, m._jQueryInterface
            }, m
        }(e),
        W = function(t) {
            var e = "dropdown",
                i = "bs.dropdown",
                o = "." + i,
                a = ".data-api",
                l = t.fn[e],
                h = new RegExp("38|40|27"),
                c = {
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    CLICK: "click" + o,
                    CLICK_DATA_API: "click" + o + a,
                    KEYDOWN_DATA_API: "keydown" + o + a,
                    KEYUP_DATA_API: "keyup" + o + a
                },
                u = "disabled",
                f = "show",
                d = "dropup",
                _ = "dropright",
                g = "dropleft",
                p = "dropdown-menu-right",
                m = "dropdown-menu-left",
                v = "position-static",
                E = '[data-toggle="dropdown"]',
                T = ".dropdown form",
                y = ".dropdown-menu",
                C = ".navbar-nav",
                I = ".dropdown-menu .dropdown-item:not(.disabled)",
                A = "top-start",
                b = "top-end",
                D = "bottom-start",
                S = "bottom-end",
                w = "right-start",
                N = "left-start",
                O = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent"
                },
                k = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)"
                },
                L = function() {
                    function a(t, e) {
                        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var l = a.prototype;
                    return l.toggle = function() {
                        if (!this._element.disabled && !t(this._element).hasClass(u)) {
                            var e = a._getParentFromElement(this._element),
                                i = t(this._menu).hasClass(f);
                            if (a._clearMenus(), !i) {
                                var s = {
                                        relatedTarget: this._element
                                    },
                                    r = t.Event(c.SHOW, s);
                                if (t(e).trigger(r), !r.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var o = this._element;
                                        t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s))
                                }
                            }
                        }
                    }, l.dispose = function() {
                        t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                    }, l.update = function() {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, l._addEventListeners = function() {
                        var e = this;
                        t(this._element).on(c.CLICK, function(t) {
                            t.preventDefault(), t.stopPropagation(), e.toggle()
                        })
                    }, l._getConfig = function(n) {
                        return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
                    }, l._getMenuElement = function() {
                        if (!this._menu) {
                            var e = a._getParentFromElement(this._element);
                            this._menu = t(e).find(y)[0]
                        }
                        return this._menu
                    }, l._getPlacement = function() {
                        var e = t(this._element).parent(),
                            n = D;
                        return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n
                    }, l._detectNavbar = function() {
                        return t(this._element).closest(".navbar").length > 0
                    }, l._getPopperConfig = function() {
                        var t = this,
                            e = {};
                        return "function" == typeof this._config.offset ? e.fn = function(e) {
                            return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e
                        } : e.offset = this._config.offset, {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: e,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        }
                    }, a._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data(i);
                            if (n || (n = new a(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) {
                                if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, a._clearMenus = function(e) {
                        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                            for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
                                var r = a._getParentFromElement(n[s]),
                                    o = t(n[s]).data(i),
                                    l = {
                                        relatedTarget: n[s]
                                    };
                                if (o) {
                                    var h = o._menu;
                                    if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                                        var u = t.Event(c.HIDE, l);
                                        t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)))
                                    }
                                }
                            }
                    }, a._getParentFromElement = function(e) {
                        var n, i = P.getSelectorFromElement(e);
                        return i && (n = t(i)[0]), n || e.parentNode
                    }, a._dataApiKeydownHandler = function(e) {
                        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
                            var n = a._getParentFromElement(this),
                                i = t(n).hasClass(f);
                            if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                                var s = t(n).find(I).get();
                                if (0 !== s.length) {
                                    var r = s.indexOf(e.target);
                                    38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                                }
                            } else {
                                if (27 === e.which) {
                                    var o = t(n).find(E)[0];
                                    t(o).trigger("focus")
                                }
                                t(this).trigger("click")
                            }
                        }
                    }, s(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return O
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return k
                        }
                    }]), a
                }();
            return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function(e) {
                e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle")
            }).on(c.CLICK_DATA_API, T, function(t) {
                t.stopPropagation()
            }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function() {
                return t.fn[e] = l, L._jQueryInterface
            }, L
        }(e),
        M = function(t) {
            var e = "modal",
                n = "bs.modal",
                i = "." + n,
                o = t.fn.modal,
                a = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                l = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                h = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    FOCUSIN: "focusin" + i,
                    RESIZE: "resize" + i,
                    CLICK_DISMISS: "click.dismiss" + i,
                    KEYDOWN_DISMISS: "keydown.dismiss" + i,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + i,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                c = "modal-scrollbar-measure",
                u = "modal-backdrop",
                f = "modal-open",
                d = "fade",
                _ = "show",
                g = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                },
                p = function() {
                    function o(e, n) {
                        this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    var p = o.prototype;
                    return p.toggle = function(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, p.show = function(e) {
                        var n = this;
                        if (!this._isTransitioning && !this._isShown) {
                            P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);
                            var i = t.Event(h.SHOW, {
                                relatedTarget: e
                            });
                            t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function(t) {
                                return n.hide(t)
                            }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function() {
                                t(n._element).one(h.MOUSEUP_DISMISS, function(e) {
                                    t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function() {
                                return n._showElement(e)
                            }))
                        }
                    }, p.hide = function(e) {
                        var n = this;
                        if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                            var i = t.Event(h.HIDE);
                            if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                                s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), s ? t(this._element).one(P.TRANSITION_END, function(t) {
                                    return n._hideModal(t)
                                }).emulateTransitionEnd(300) : this._hideModal()
                            }
                        }
                    }, p.dispose = function() {
                        t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, p.handleUpdate = function() {
                        this._adjustDialog()
                    }, p._getConfig = function(t) {
                        return t = r({}, a, t), P.typeCheckConfig(e, t, l), t
                    }, p._showElement = function(e) {
                        var n = this,
                            i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && P.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus();
                        var s = t.Event(h.SHOWN, {
                                relatedTarget: e
                            }),
                            r = function() {
                                n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s)
                            };
                        i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r()
                    }, p._enforceFocus = function() {
                        var e = this;
                        t(document).off(h.FOCUSIN).on(h.FOCUSIN, function(n) {
                            document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                        })
                    }, p._setEscapeEvent = function() {
                        var e = this;
                        this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function(t) {
                            27 === t.which && (t.preventDefault(), e.hide())
                        }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS)
                    }, p._setResizeEvent = function() {
                        var e = this;
                        this._isShown ? t(window).on(h.RESIZE, function(t) {
                            return e.handleUpdate(t)
                        }) : t(window).off(h.RESIZE)
                    }, p._hideModal = function() {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                            t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN)
                        })
                    }, p._removeBackdrop = function() {
                        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                    }, p._showBackdrop = function(e) {
                        var n = this,
                            i = t(this._element).hasClass(d) ? d : "";
                        if (this._isShown && this._config.backdrop) {
                            var s = P.supportsTransitionEnd() && i;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function(t) {
                                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                }), s && P.reflow(this._backdrop), t(this._backdrop).addClass(_), !e) return;
                            if (!s) return void e();
                            t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            t(this._backdrop).removeClass(_);
                            var r = function() {
                                n._removeBackdrop(), e && e()
                            };
                            P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r()
                        } else e && e()
                    }, p._adjustDialog = function() {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, p._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, p._checkScrollbar = function() {
                        var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, p._setScrollbar = function() {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            t(g.FIXED_CONTENT).each(function(n, i) {
                                var s = t(i)[0].style.paddingRight,
                                    r = t(i).css("padding-right");
                                t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                            }), t(g.STICKY_CONTENT).each(function(n, i) {
                                var s = t(i)[0].style.marginRight,
                                    r = t(i).css("margin-right");
                                t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                            }), t(g.NAVBAR_TOGGLER).each(function(n, i) {
                                var s = t(i)[0].style.marginRight,
                                    r = t(i).css("margin-right");
                                t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                            });
                            var n = document.body.style.paddingRight,
                                i = t("body").css("padding-right");
                            t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                        }
                    }, p._resetScrollbar = function() {
                        t(g.FIXED_CONTENT).each(function(e, n) {
                            var i = t(n).data("padding-right");
                            "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
                        }), t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function(e, n) {
                            var i = t(n).data("margin-right");
                            "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
                        });
                        var e = t("body").data("padding-right");
                        "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
                    }, p._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        t.className = c, document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, o._jQueryInterface = function(e, i) {
                        return this.each(function() {
                            var s = t(this).data(n),
                                a = r({}, o.Default, t(this).data(), "object" == typeof e && e);
                            if (s || (s = new o(this, a), t(this).data(n, s)), "string" == typeof e) {
                                if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"');
                                s[e](i)
                            } else a.show && s.show(i)
                        })
                    }, s(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a
                        }
                    }]), o
                }();
            return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function(e) {
                var i, s = this,
                    o = P.getSelectorFromElement(this);
                o && (i = t(o)[0]);
                var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var l = t(i).one(h.SHOW, function(e) {
                    e.isDefaultPrevented() || l.one(h.HIDDEN, function() {
                        t(s).is(":visible") && s.focus()
                    })
                });
                p._jQueryInterface.call(t(i), a, this)
            }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function() {
                return t.fn.modal = o, p._jQueryInterface
            }, p
        }(e),
        U = function(t) {
            var e = "tooltip",
                i = "bs.tooltip",
                o = "." + i,
                a = t.fn[e],
                l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                h = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                },
                c = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                u = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent"
                },
                f = "show",
                d = "out",
                _ = {
                    HIDE: "hide" + o,
                    HIDDEN: "hidden" + o,
                    SHOW: "show" + o,
                    SHOWN: "shown" + o,
                    INSERTED: "inserted" + o,
                    CLICK: "click" + o,
                    FOCUSIN: "focusin" + o,
                    FOCUSOUT: "focusout" + o,
                    MOUSEENTER: "mouseenter" + o,
                    MOUSELEAVE: "mouseleave" + o
                },
                g = "fade",
                p = "show",
                m = ".tooltip-inner",
                v = ".arrow",
                E = "hover",
                T = "focus",
                y = "click",
                C = "manual",
                I = function() {
                    function a(t, e) {
                        if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    var I = a.prototype;
                    return I.enable = function() {
                        this._isEnabled = !0
                    }, I.disable = function() {
                        this._isEnabled = !1
                    }, I.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, I.toggle = function(e) {
                        if (this._isEnabled)
                            if (e) {
                                var n = this.constructor.DATA_KEY,
                                    i = t(e.currentTarget).data(n);
                                i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, I.dispose = function() {
                        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, I.show = function() {
                        var e = this;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var i = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            t(this.element).trigger(i);
                            var s = t.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !s) return;
                            var r = this.getTipElement(),
                                o = P.getUID(this.constructor.NAME);
                            r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                h = this._getAttachment(l);
                            this.addAttachmentClass(h);
                            var c = !1 === this.config.container ? document.body : t(this.config.container);
                            t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
                                placement: h,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: v
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function(t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                },
                                onUpdate: function(t) {
                                    e._handlePopperPlacementChange(t)
                                }
                            }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                            var u = function() {
                                e.config.animation && e._fixTransition();
                                var n = e._hoverState;
                                e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e)
                            };
                            P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
                        }
                    }, I.hide = function(e) {
                        var n = this,
                            i = this.getTipElement(),
                            s = t.Event(this.constructor.Event.HIDE),
                            r = function() {
                                n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                            };
                        t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
                    }, I.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, I.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, I.addAttachmentClass = function(e) {
                        t(this.getTipElement()).addClass("bs-tooltip-" + e)
                    }, I.getTipElement = function() {
                        return this.tip = this.tip || t(this.config.template)[0], this.tip
                    }, I.setContent = function() {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p)
                    }, I.setElementContent = function(e, n) {
                        var i = this.config.html;
                        "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
                    }, I.getTitle = function() {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, I._getAttachment = function(t) {
                        return c[t.toUpperCase()]
                    }, I._setListeners = function() {
                        var e = this;
                        this.config.trigger.split(" ").forEach(function(n) {
                            if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                                return e.toggle(t)
                            });
                            else if (n !== C) {
                                var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                t(e.element).on(i, e.config.selector, function(t) {
                                    return e._enter(t)
                                }).on(s, e.config.selector, function(t) {
                                    return e._leave(t)
                                })
                            }
                            t(e.element).closest(".modal").on("hide.bs.modal", function() {
                                return e.hide()
                            })
                        }), this.config.selector ? this.config = r({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, I._fixTitle = function() {
                        var t = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, I._enter = function(e, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                            n._hoverState === f && n.show()
                        }, n.config.delay.show) : n.show())
                    }, I._leave = function(e, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                            n._hoverState === d && n.hide()
                        }, n.config.delay.hide) : n.hide())
                    }, I._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, I._getConfig = function(n) {
                        return "number" == typeof(n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
                    }, I._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, I._cleanTipClass = function() {
                        var e = t(this.getTipElement()),
                            n = e.attr("class").match(l);
                        null !== n && n.length > 0 && e.removeClass(n.join(""))
                    }, I._handlePopperPlacementChange = function(t) {
                        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                    }, I._fixTransition = function() {
                        var e = this.getTipElement(),
                            n = this.config.animation;
                        null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, a._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data(i),
                                s = "object" == typeof e && e;
                            if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
                                if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, s(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return u
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return e
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return _
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return o
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return h
                        }
                    }]), a
                }();
            return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function() {
                return t.fn[e] = a, I._jQueryInterface
            }, I
        }(e),
        x = function(t) {
            var e = "popover",
                n = "bs.popover",
                i = "." + n,
                o = t.fn[e],
                a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                l = r({}, U.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                h = r({}, U.DefaultType, {
                    content: "(string|element|function)"
                }),
                c = "fade",
                u = "show",
                f = ".popover-header",
                d = ".popover-body",
                _ = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                },
                g = function(r) {
                    var o, g;

                    function p() {
                        return r.apply(this, arguments) || this
                    }
                    g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g;
                    var m = p.prototype;
                    return m.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, m.addAttachmentClass = function(e) {
                        t(this.getTipElement()).addClass("bs-popover-" + e)
                    }, m.getTipElement = function() {
                        return this.tip = this.tip || t(this.config.template)[0], this.tip
                    }, m.setContent = function() {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(f), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u)
                    }, m._getContent = function() {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, m._cleanTipClass = function() {
                        var e = t(this.getTipElement()),
                            n = e.attr("class").match(a);
                        null !== n && n.length > 0 && e.removeClass(n.join(""))
                    }, p._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(n),
                                s = "object" == typeof e ? e : null;
                            if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) {
                                if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, s(p, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return e
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return _
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return h
                        }
                    }]), p
                }(U);
            return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
                return t.fn[e] = o, g._jQueryInterface
            }, g
        }(e),
        K = function(t) {
            var e = "scrollspy",
                n = "bs.scrollspy",
                i = "." + n,
                o = t.fn[e],
                a = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                l = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                h = {
                    ACTIVATE: "activate" + i,
                    SCROLL: "scroll" + i,
                    LOAD_DATA_API: "load" + i + ".data-api"
                },
                c = "dropdown-item",
                u = "active",
                f = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                d = "offset",
                _ = "position",
                g = function() {
                    function o(e, n) {
                        var i = this;
                        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function(t) {
                            return i._process(t)
                        }), this.refresh(), this._process()
                    }
                    var g = o.prototype;
                    return g.refresh = function() {
                        var e = this,
                            n = this._scrollElement === this._scrollElement.window ? d : _,
                            i = "auto" === this._config.method ? n : this._config.method,
                            s = i === _ ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function(e) {
                            var n, r = P.getSelectorFromElement(e);
                            if (r && (n = t(r)[0]), n) {
                                var o = n.getBoundingClientRect();
                                if (o.width || o.height) return [t(n)[i]().top + s, r]
                            }
                            return null
                        }).filter(function(t) {
                            return t
                        }).sort(function(t, e) {
                            return t[0] - e[0]
                        }).forEach(function(t) {
                            e._offsets.push(t[0]), e._targets.push(t[1])
                        })
                    }, g.dispose = function() {
                        t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, g._getConfig = function(n) {
                        if ("string" != typeof(n = r({}, a, n)).target) {
                            var i = t(n.target).attr("id");
                            i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                        }
                        return P.typeCheckConfig(e, n, l), n
                    }, g._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, g._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, g._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, g._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var s = this._offsets.length; s--;) {
                                this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                            }
                        }
                    }, g._activate = function(e) {
                        this._activeTarget = e, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function(t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        });
                        var i = t(n.join(","));
                        i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, {
                            relatedTarget: e
                        })
                    }, g._clear = function() {
                        t(this._selector).filter(f.ACTIVE).removeClass(u)
                    }, o._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(n);
                            if (i || (i = new o(this, "object" == typeof e && e), t(this).data(n, i)), "string" == typeof e) {
                                if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, s(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a
                        }
                    }]), o
                }();
            return t(window).on(h.LOAD_DATA_API, function() {
                for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
                    var i = t(e[n]);
                    g._jQueryInterface.call(i, i.data())
                }
            }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
                return t.fn[e] = o, g._jQueryInterface
            }, g
        }(e),
        V = function(t) {
            var e = "bs.tab",
                n = "." + e,
                i = t.fn.tab,
                r = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                o = "dropdown-menu",
                a = "active",
                l = "disabled",
                h = "fade",
                c = "show",
                u = ".dropdown",
                f = ".nav, .list-group",
                d = ".active",
                _ = "> li > .active",
                g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                p = ".dropdown-toggle",
                m = "> .dropdown-menu .active",
                v = function() {
                    function n(t) {
                        this._element = t
                    }
                    var i = n.prototype;
                    return i.show = function() {
                        var e = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
                            var n, i, s = t(this._element).closest(f)[0],
                                o = P.getSelectorFromElement(this._element);
                            if (s) {
                                var h = "UL" === s.nodeName ? _ : d;
                                i = (i = t.makeArray(t(s).find(h)))[i.length - 1]
                            }
                            var c = t.Event(r.HIDE, {
                                    relatedTarget: this._element
                                }),
                                u = t.Event(r.SHOW, {
                                    relatedTarget: i
                                });
                            if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
                                o && (n = t(o)[0]), this._activate(this._element, s);
                                var g = function() {
                                    var n = t.Event(r.HIDDEN, {
                                            relatedTarget: e._element
                                        }),
                                        s = t.Event(r.SHOWN, {
                                            relatedTarget: i
                                        });
                                    t(i).trigger(n), t(e._element).trigger(s)
                                };
                                n ? this._activate(n, n.parentNode, g) : g()
                            }
                        }
                    }, i.dispose = function() {
                        t.removeData(this._element, e), this._element = null
                    }, i._activate = function(e, n, i) {
                        var s = this,
                            r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
                            o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
                            a = function() {
                                return s._transitionComplete(e, r, i)
                            };
                        r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                    }, i._transitionComplete = function(e, n, i) {
                        if (n) {
                            t(n).removeClass(c + " " + a);
                            var s = t(n.parentNode).find(m)[0];
                            s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
                            var r = t(e).closest(u)[0];
                            r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0)
                        }
                        i && i()
                    }, n._jQueryInterface = function(i) {
                        return this.each(function() {
                            var s = t(this),
                                r = s.data(e);
                            if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
                                if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
                                r[i]()
                            }
                        })
                    }, s(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0"
                        }
                    }]), n
                }();
            return t(document).on(r.CLICK_DATA_API, g, function(e) {
                e.preventDefault(), v._jQueryInterface.call(t(this), "show")
            }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function() {
                return t.fn.tab = i, v._jQueryInterface
            }, v
        }(e);
    ! function(t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});








/* Opensource org */

//  (function(e, t) {
//     'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
// })(this, function() {
//     'use strict';

//     function e(e) {
//         return e && '[object Function]' === {}.toString.call(e)
//     }

//     function t(e, t) {
//         if (1 !== e.nodeType) return [];
//         var o = getComputedStyle(e, null);
//         return t ? o[t] : o
//     }

//     function o(e) {
//         return 'HTML' === e.nodeName ? e : e.parentNode || e.host
//     }

//     function n(e) {
//         if (!e) return document.body;
//         switch (e.nodeName) {
//             case 'HTML':
//             case 'BODY':
//                 return e.ownerDocument.body;
//             case '#document':
//                 return e.body;
//         }
//         var i = t(e),
//             r = i.overflow,
//             p = i.overflowX,
//             s = i.overflowY;
//         return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
//     }

//     function r(e) {
//         var o = e && e.offsetParent,
//             i = o && o.nodeName;
//         return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : e ? e.ownerDocument.documentElement : document.documentElement
//     }

//     function p(e) {
//         var t = e.nodeName;
//         return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
//     }

//     function s(e) {
//         return null === e.parentNode ? e : s(e.parentNode)
//     }

//     function d(e, t) {
//         if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
//         var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
//             i = o ? e : t,
//             n = o ? t : e,
//             a = document.createRange();
//         a.setStart(i, 0), a.setEnd(n, 0);
//         var l = a.commonAncestorContainer;
//         if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l);
//         var f = s(e);
//         return f.host ? d(f.host, t) : d(e, s(t).host)
//     }

//     function a(e) {
//         var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
//             o = 'top' === t ? 'scrollTop' : 'scrollLeft',
//             i = e.nodeName;
//         if ('BODY' === i || 'HTML' === i) {
//             var n = e.ownerDocument.documentElement,
//                 r = e.ownerDocument.scrollingElement || n;
//             return r[o]
//         }
//         return e[o]
//     }

//     function l(e, t) {
//         var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
//             i = a(t, 'top'),
//             n = a(t, 'left'),
//             r = o ? -1 : 1;
//         return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e
//     }

//     function f(e, t) {
//         var o = 'x' === t ? 'Left' : 'Top',
//             i = 'Left' == o ? 'Right' : 'Bottom';
//         return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10)
//     }

//     function m(e, t, o, i) {
//         return J(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
//     }

//     function h() {
//         var e = document.body,
//             t = document.documentElement,
//             o = ie() && getComputedStyle(t);
//         return {
//             height: m('Height', e, t, o),
//             width: m('Width', e, t, o)
//         }
//     }

//     function c(e) {
//         return se({}, e, {
//             right: e.left + e.width,
//             bottom: e.top + e.height
//         })
//     }

//     function g(e) {
//         var o = {};
//         if (ie()) try {
//             o = e.getBoundingClientRect();
//             var i = a(e, 'top'),
//                 n = a(e, 'left');
//             o.top += i, o.left += n, o.bottom += i, o.right += n
//         } catch (e) {} else o = e.getBoundingClientRect();
//         var r = {
//                 left: o.left,
//                 top: o.top,
//                 width: o.right - o.left,
//                 height: o.bottom - o.top
//             },
//             p = 'HTML' === e.nodeName ? h() : {},
//             s = p.width || e.clientWidth || r.right - r.left,
//             d = p.height || e.clientHeight || r.bottom - r.top,
//             l = e.offsetWidth - s,
//             m = e.offsetHeight - d;
//         if (l || m) {
//             var g = t(e);
//             l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m
//         }
//         return c(r)
//     }

//     function u(e, o) {
//         var i = ie(),
//             r = 'HTML' === o.nodeName,
//             p = g(e),
//             s = g(o),
//             d = n(e),
//             a = t(o),
//             f = parseFloat(a.borderTopWidth, 10),
//             m = parseFloat(a.borderLeftWidth, 10),
//             h = c({
//                 top: p.top - s.top - f,
//                 left: p.left - s.left - m,
//                 width: p.width,
//                 height: p.height
//             });
//         if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
//             var u = parseFloat(a.marginTop, 10),
//                 b = parseFloat(a.marginLeft, 10);
//             h.top -= f - u, h.bottom -= f - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b
//         }
//         return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = l(h, o)), h
//     }

//     function b(e) {
//         var t = e.ownerDocument.documentElement,
//             o = u(e, t),
//             i = J(t.clientWidth, window.innerWidth || 0),
//             n = J(t.clientHeight, window.innerHeight || 0),
//             r = a(t),
//             p = a(t, 'left'),
//             s = {
//                 top: r - o.top + o.marginTop,
//                 left: p - o.left + o.marginLeft,
//                 width: i,
//                 height: n
//             };
//         return c(s)
//     }

//     function w(e) {
//         var i = e.nodeName;
//         return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || w(o(e))
//     }

//     function y(e, t, i, r) {
//         var p = {
//                 top: 0,
//                 left: 0
//             },
//             s = d(e, t);
//         if ('viewport' === r) p = b(s);
//         else {
//             var a;
//             'scrollParent' === r ? (a = n(o(t)), 'BODY' === a.nodeName && (a = e.ownerDocument.documentElement)) : 'window' === r ? a = e.ownerDocument.documentElement : a = r;
//             var l = u(a, s);
//             if ('HTML' === a.nodeName && !w(s)) {
//                 var f = h(),
//                     m = f.height,
//                     c = f.width;
//                 p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = c + l.left
//             } else p = l
//         }
//         return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p
//     }

//     function E(e) {
//         var t = e.width,
//             o = e.height;
//         return t * o
//     }

//     function v(e, t, o, i, n) {
//         var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
//         if (-1 === e.indexOf('auto')) return e;
//         var p = y(o, i, r, n),
//             s = {
//                 top: {
//                     width: p.width,
//                     height: t.top - p.top
//                 },
//                 right: {
//                     width: p.right - t.right,
//                     height: p.height
//                 },
//                 bottom: {
//                     width: p.width,
//                     height: p.bottom - t.bottom
//                 },
//                 left: {
//                     width: t.left - p.left,
//                     height: p.height
//                 }
//             },
//             d = Object.keys(s).map(function(e) {
//                 return se({
//                     key: e
//                 }, s[e], {
//                     area: E(s[e])
//                 })
//             }).sort(function(e, t) {
//                 return t.area - e.area
//             }),
//             a = d.filter(function(e) {
//                 var t = e.width,
//                     i = e.height;
//                 return t >= o.clientWidth && i >= o.clientHeight
//             }),
//             l = 0 < a.length ? a[0].key : d[0].key,
//             f = e.split('-')[1];
//         return l + (f ? '-' + f : '')
//     }

//     function O(e, t, o) {
//         var i = d(t, o);
//         return u(o, i)
//     }

//     function L(e) {
//         var t = getComputedStyle(e),
//             o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
//             i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
//             n = {
//                 width: e.offsetWidth + i,
//                 height: e.offsetHeight + o
//             };
//         return n
//     }

//     function x(e) {
//         var t = {
//             left: 'right',
//             right: 'left',
//             bottom: 'top',
//             top: 'bottom'
//         };
//         return e.replace(/left|right|bottom|top/g, function(e) {
//             return t[e]
//         })
//     }

//     function S(e, t, o) {
//         o = o.split('-')[0];
//         var i = L(e),
//             n = {
//                 width: i.width,
//                 height: i.height
//             },
//             r = -1 !== ['right', 'left'].indexOf(o),
//             p = r ? 'top' : 'left',
//             s = r ? 'left' : 'top',
//             d = r ? 'height' : 'width',
//             a = r ? 'width' : 'height';
//         return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[x(s)], n
//     }

//     function T(e, t) {
//         return Array.prototype.find ? e.find(t) : e.filter(t)[0]
//     }

//     function D(e, t, o) {
//         if (Array.prototype.findIndex) return e.findIndex(function(e) {
//             return e[t] === o
//         });
//         var i = T(e, function(e) {
//             return e[t] === o
//         });
//         return e.indexOf(i)
//     }

//     function C(t, o, i) {
//         var n = void 0 === i ? t : t.slice(0, D(t, 'name', i));
//         return n.forEach(function(t) {
//             t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
//             var i = t['function'] || t.fn;
//             t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t))
//         }), o
//     }

//     function N() {
//         if (!this.state.isDestroyed) {
//             var e = {
//                 instance: this,
//                 styles: {},
//                 arrowStyles: {},
//                 attributes: {},
//                 flipped: !1,
//                 offsets: {}
//             };
//             e.offsets.reference = O(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = C(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
//         }
//     }

//     function k(e, t) {
//         return e.some(function(e) {
//             var o = e.name,
//                 i = e.enabled;
//             return i && o === t
//         })
//     }

//     function W(e) {
//         for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
//             var i = t[n],
//                 r = i ? '' + i + o : e;
//             if ('undefined' != typeof document.body.style[r]) return r
//         }
//         return null
//     }

//     function P() {
//         return this.state.isDestroyed = !0, k(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
//     }

//     function B(e) {
//         var t = e.ownerDocument;
//         return t ? t.defaultView : window
//     }

//     function H(e, t, o, i) {
//         var r = 'BODY' === e.nodeName,
//             p = r ? e.ownerDocument.defaultView : e;
//         p.addEventListener(t, o, {
//             passive: !0
//         }), r || H(n(p.parentNode), t, o, i), i.push(p)
//     }

//     function A(e, t, o, i) {
//         o.updateBound = i, B(e).addEventListener('resize', o.updateBound, {
//             passive: !0
//         });
//         var r = n(e);
//         return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
//     }

//     function I() {
//         this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate))
//     }

//     function M(e, t) {
//         return B(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
//             e.removeEventListener('scroll', t.updateBound)
//         }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
//     }

//     function R() {
//         this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
//     }

//     function U(e) {
//         return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
//     }

//     function Y(e, t) {
//         Object.keys(t).forEach(function(o) {
//             var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (i = 'px'), e.style[o] = t[o] + i
//         })
//     }

//     function j(e, t) {
//         Object.keys(t).forEach(function(o) {
//             var i = t[o];
//             !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
//         })
//     }

//     function F(e, t, o) {
//         var i = T(e, function(e) {
//                 var o = e.name;
//                 return o === t
//             }),
//             n = !!i && e.some(function(e) {
//                 return e.name === o && e.enabled && e.order < i.order
//             });
//         if (!n) {
//             var r = '`' + t + '`';
//             console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
//         }
//         return n
//     }

//     function K(e) {
//         return 'end' === e ? 'start' : 'start' === e ? 'end' : e
//     }

//     function q(e) {
//         var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
//             o = ae.indexOf(e),
//             i = ae.slice(o + 1).concat(ae.slice(0, o));
//         return t ? i.reverse() : i
//     }

//     function V(e, t, o, i) {
//         var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
//             r = +n[1],
//             p = n[2];
//         if (!r) return e;
//         if (0 === p.indexOf('%')) {
//             var s;
//             switch (p) {
//                 case '%p':
//                     s = o;
//                     break;
//                 case '%':
//                 case '%r':
//                 default:
//                     s = i;
//             }
//             var d = c(s);
//             return d[t] / 100 * r
//         }
//         if ('vh' === p || 'vw' === p) {
//             var a;
//             return a = 'vh' === p ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
//         }
//         return r
//     }

//     function z(e, t, o, i) {
//         var n = [0, 0],
//             r = -1 !== ['right', 'left'].indexOf(i),
//             p = e.split(/(\+|\-)/).map(function(e) {
//                 return e.trim()
//             }),
//             s = p.indexOf(T(p, function(e) {
//                 return -1 !== e.search(/,|\s/)
//             }));
//         p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
//         var d = /\s*,\s*|\s+/,
//             a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
//         return a = a.map(function(e, i) {
//             var n = (1 === i ? !r : r) ? 'height' : 'width',
//                 p = !1;
//             return e.reduce(function(e, t) {
//                 return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
//             }, []).map(function(e) {
//                 return V(e, n, t, o)
//             })
//         }), a.forEach(function(e, t) {
//             e.forEach(function(o, i) {
//                 U(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
//             })
//         }), n
//     }

//     function G(e, t) {
//         var o, i = t.offset,
//             n = e.placement,
//             r = e.offsets,
//             p = r.popper,
//             s = r.reference,
//             d = n.split('-')[0];
//         return o = U(+i) ? [+i, 0] : z(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
//     }
//     for (var _ = Math.min, X = Math.floor, J = Math.max, Q = 'undefined' != typeof window && 'undefined' != typeof document, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
//         if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
//             $ = 1;
//             break
//         }
//     var i, te = Q && window.Promise,
//         oe = te ? function(e) {
//             var t = !1;
//             return function() {
//                 t || (t = !0, window.Promise.resolve().then(function() {
//                     t = !1, e()
//                 }))
//             }
//         } : function(e) {
//             var t = !1;
//             return function() {
//                 t || (t = !0, setTimeout(function() {
//                     t = !1, e()
//                 }, $))
//             }
//         },
//         ie = function() {
//             return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i
//         },
//         ne = function(e, t) {
//             if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
//         },
//         re = function() {
//             function e(e, t) {
//                 for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
//             }
//             return function(t, o, i) {
//                 return o && e(t.prototype, o), i && e(t, i), t
//             }
//         }(),
//         pe = function(e, t, o) {
//             return t in e ? Object.defineProperty(e, t, {
//                 value: o,
//                 enumerable: !0,
//                 configurable: !0,
//                 writable: !0
//             }) : e[t] = o, e
//         },
//         se = Object.assign || function(e) {
//             for (var t, o = 1; o < arguments.length; o++)
//                 for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
//             return e
//         },
//         de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
//         ae = de.slice(3),
//         le = {
//             FLIP: 'flip',
//             CLOCKWISE: 'clockwise',
//             COUNTERCLOCKWISE: 'counterclockwise'
//         },
//         fe = function() {
//             function t(o, i) {
//                 var n = this,
//                     r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
//                 ne(this, t), this.scheduleUpdate = function() {
//                     return requestAnimationFrame(n.update)
//                 }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
//                     isDestroyed: !1,
//                     isCreated: !1,
//                     scrollParents: []
//                 }, this.reference = o && o.jquery ? o[0] : o, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
//                     n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
//                 }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
//                     return se({
//                         name: e
//                     }, n.options.modifiers[e])
//                 }).sort(function(e, t) {
//                     return e.order - t.order
//                 }), this.modifiers.forEach(function(t) {
//                     t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
//                 }), this.update();
//                 var p = this.options.eventsEnabled;
//                 p && this.enableEventListeners(), this.state.eventsEnabled = p
//             }
//             return re(t, [{
//                 key: 'update',
//                 value: function() {
//                     return N.call(this)
//                 }
//             }, {
//                 key: 'destroy',
//                 value: function() {
//                     return P.call(this)
//                 }
//             }, {
//                 key: 'enableEventListeners',
//                 value: function() {
//                     return I.call(this)
//                 }
//             }, {
//                 key: 'disableEventListeners',
//                 value: function() {
//                     return R.call(this)
//                 }
//             }]), t
//         }();
//     return fe.Utils = ('undefined' == typeof window ? global : window).PopperUtils, fe.placements = de, fe.Defaults = {
//         placement: 'bottom',
//         eventsEnabled: !0,
//         removeOnDestroy: !1,
//         onCreate: function() {},
//         onUpdate: function() {},
//         modifiers: {
//             shift: {
//                 order: 100,
//                 enabled: !0,
//                 fn: function(e) {
//                     var t = e.placement,
//                         o = t.split('-')[0],
//                         i = t.split('-')[1];
//                     if (i) {
//                         var n = e.offsets,
//                             r = n.reference,
//                             p = n.popper,
//                             s = -1 !== ['bottom', 'top'].indexOf(o),
//                             d = s ? 'left' : 'top',
//                             a = s ? 'width' : 'height',
//                             l = {
//                                 start: pe({}, d, r[d]),
//                                 end: pe({}, d, r[d] + r[a] - p[a])
//                             };
//                         e.offsets.popper = se({}, p, l[i])
//                     }
//                     return e
//                 }
//             },
//             offset: {
//                 order: 200,
//                 enabled: !0,
//                 fn: G,
//                 offset: 0
//             },
//             preventOverflow: {
//                 order: 300,
//                 enabled: !0,
//                 fn: function(e, t) {
//                     var o = t.boundariesElement || r(e.instance.popper);
//                     e.instance.reference === o && (o = r(o));
//                     var i = y(e.instance.popper, e.instance.reference, t.padding, o);
//                     t.boundaries = i;
//                     var n = t.priority,
//                         p = e.offsets.popper,
//                         s = {
//                             primary: function(e) {
//                                 var o = p[e];
//                                 return p[e] < i[e] && !t.escapeWithReference && (o = J(p[e], i[e])), pe({}, e, o)
//                             },
//                             secondary: function(e) {
//                                 var o = 'right' === e ? 'left' : 'top',
//                                     n = p[o];
//                                 return p[e] > i[e] && !t.escapeWithReference && (n = _(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n)
//                             }
//                         };
//                     return n.forEach(function(e) {
//                         var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
//                         p = se({}, p, s[t](e))
//                     }), e.offsets.popper = p, e
//                 },
//                 priority: ['left', 'right', 'top', 'bottom'],
//                 padding: 5,
//                 boundariesElement: 'scrollParent'
//             },
//             keepTogether: {
//                 order: 400,
//                 enabled: !0,
//                 fn: function(e) {
//                     var t = e.offsets,
//                         o = t.popper,
//                         i = t.reference,
//                         n = e.placement.split('-')[0],
//                         r = X,
//                         p = -1 !== ['top', 'bottom'].indexOf(n),
//                         s = p ? 'right' : 'bottom',
//                         d = p ? 'left' : 'top',
//                         a = p ? 'width' : 'height';
//                     return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e
//                 }
//             },
//             arrow: {
//                 order: 500,
//                 enabled: !0,
//                 fn: function(e, o) {
//                     var i;
//                     if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
//                     var n = o.element;
//                     if ('string' == typeof n) {
//                         if (n = e.instance.popper.querySelector(n), !n) return e;
//                     } else if (!e.instance.popper.contains(n)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
//                     var r = e.placement.split('-')[0],
//                         p = e.offsets,
//                         s = p.popper,
//                         d = p.reference,
//                         a = -1 !== ['left', 'right'].indexOf(r),
//                         l = a ? 'height' : 'width',
//                         f = a ? 'Top' : 'Left',
//                         m = f.toLowerCase(),
//                         h = a ? 'left' : 'top',
//                         g = a ? 'bottom' : 'right',
//                         u = L(n)[l];
//                     d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), e.offsets.popper = c(e.offsets.popper);
//                     var b = d[m] + d[l] / 2 - u / 2,
//                         w = t(e.instance.popper),
//                         y = parseFloat(w['margin' + f], 10),
//                         E = parseFloat(w['border' + f + 'Width'], 10),
//                         v = b - e.offsets.popper[m] - y - E;
//                     return v = J(_(s[l] - u, v), 0), e.arrowElement = n, e.offsets.arrow = (i = {}, pe(i, m, Math.round(v)), pe(i, h, ''), i), e
//                 },
//                 element: '[x-arrow]'
//             },
//             flip: {
//                 order: 600,
//                 enabled: !0,
//                 fn: function(e, t) {
//                     if (k(e.instance.modifiers, 'inner')) return e;
//                     if (e.flipped && e.placement === e.originalPlacement) return e;
//                     var o = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
//                         i = e.placement.split('-')[0],
//                         n = x(i),
//                         r = e.placement.split('-')[1] || '',
//                         p = [];
//                     switch (t.behavior) {
//                         case le.FLIP:
//                             p = [i, n];
//                             break;
//                         case le.CLOCKWISE:
//                             p = q(i);
//                             break;
//                         case le.COUNTERCLOCKWISE:
//                             p = q(i, !0);
//                             break;
//                         default:
//                             p = t.behavior;
//                     }
//                     return p.forEach(function(s, d) {
//                         if (i !== s || p.length === d + 1) return e;
//                         i = e.placement.split('-')[0], n = x(i);
//                         var a = e.offsets.popper,
//                             l = e.offsets.reference,
//                             f = X,
//                             m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
//                             h = f(a.left) < f(o.left),
//                             c = f(a.right) > f(o.right),
//                             g = f(a.top) < f(o.top),
//                             u = f(a.bottom) > f(o.bottom),
//                             b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
//                             w = -1 !== ['top', 'bottom'].indexOf(i),
//                             y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);
//                         (m || b || y) && (e.flipped = !0, (m || b) && (i = p[d + 1]), y && (r = K(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = C(e.instance.modifiers, e, 'flip'))
//                     }), e
//                 },
//                 behavior: 'flip',
//                 padding: 5,
//                 boundariesElement: 'viewport'
//             },
//             inner: {
//                 order: 700,
//                 enabled: !1,
//                 fn: function(e) {
//                     var t = e.placement,
//                         o = t.split('-')[0],
//                         i = e.offsets,
//                         n = i.popper,
//                         r = i.reference,
//                         p = -1 !== ['left', 'right'].indexOf(o),
//                         s = -1 === ['top', 'left'].indexOf(o);
//                     return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = x(t), e.offsets.popper = c(n), e
//                 }
//             },
//             hide: {
//                 order: 800,
//                 enabled: !0,
//                 fn: function(e) {
//                     if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
//                     var t = e.offsets.reference,
//                         o = T(e.instance.modifiers, function(e) {
//                             return 'preventOverflow' === e.name
//                         }).boundaries;
//                     if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
//                         if (!0 === e.hide) return e;
//                         e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
//                     } else {
//                         if (!1 === e.hide) return e;
//                         e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
//                     }
//                     return e
//                 }
//             },
//             computeStyle: {
//                 order: 850,
//                 enabled: !0,
//                 fn: function(e, t) {
//                     var o = t.x,
//                         i = t.y,
//                         n = e.offsets.popper,
//                         p = T(e.instance.modifiers, function(e) {
//                             return 'applyStyle' === e.name
//                         }).gpuAcceleration;
//                     void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
//                     var s, d, a = void 0 === p ? t.gpuAcceleration : p,
//                         l = r(e.instance.popper),
//                         f = g(l),
//                         m = {
//                             position: n.position
//                         },
//                         h = {
//                             left: X(n.left),
//                             top: X(n.top),
//                             bottom: X(n.bottom),
//                             right: X(n.right)
//                         },
//                         c = 'bottom' === o ? 'top' : 'bottom',
//                         u = 'right' === i ? 'left' : 'right',
//                         b = W('transform');
//                     if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == u ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';
//                     else {
//                         var w = 'bottom' == c ? -1 : 1,
//                             y = 'right' == u ? -1 : 1;
//                         m[c] = d * w, m[u] = s * y, m.willChange = c + ', ' + u
//                     }
//                     var E = {
//                         "x-placement": e.placement
//                     };
//                     return e.attributes = se({}, E, e.attributes), e.styles = se({}, m, e.styles), e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles), e
//                 },
//                 gpuAcceleration: !0,
//                 x: 'bottom',
//                 y: 'right'
//             },
//             applyStyle: {
//                 order: 900,
//                 enabled: !0,
//                 fn: function(e) {
//                     return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
//                 },
//                 onLoad: function(e, t, o, i, n) {
//                     var r = O(n, t, e),
//                         p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
//                     return t.setAttribute('x-placement', p), Y(t, {
//                         position: 'absolute'
//                     }), o
//                 },
//                 gpuAcceleration: void 0
//             }
//         }
//     }, fe
// });


/* client side image placeholders */

! function(e) {
    if (e.document) {
        var t = e.document;
        t.querySelectorAll || (t.querySelectorAll = function(n) {
                var r, i = t.createElement("style"),
                    o = [];
                for (t.documentElement.firstChild.appendChild(i), t._qsa = [], i.styleSheet.cssText = n + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", e.scrollBy(0, 0), i.parentNode.removeChild(i); t._qsa.length;) r = t._qsa.shift(), r.style.removeAttribute("x-qsa"), o.push(r);
                return t._qsa = null, o
            }), t.querySelector || (t.querySelector = function(e) {
                var n = t.querySelectorAll(e);
                return n.length ? n[0] : null
            }), t.getElementsByClassName || (t.getElementsByClassName = function(e) {
                return e = String(e).replace(/^|\s+/g, "."), t.querySelectorAll(e)
            }), Object.keys || (Object.keys = function(e) {
                if (e !== Object(e)) throw TypeError("Object.keys called on non-object");
                var t, n = [];
                for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                return n
            }), Array.prototype.forEach || (Array.prototype.forEach = function(e) {
                if (void 0 === this || null === this) throw TypeError();
                var t = Object(this),
                    n = t.length >>> 0;
                if ("function" != typeof e) throw TypeError();
                var r, i = arguments[1];
                for (r = 0; r < n; r++) r in t && e.call(i, t[r], r, t)
            }),
            function(e) {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                e.atob = e.atob || function(e) {
                    e = String(e);
                    var n, r = 0,
                        i = [],
                        o = 0,
                        a = 0;
                    if (e = e.replace(/\s/g, ""), e.length % 4 === 0 && (e = e.replace(/=+$/, "")), e.length % 4 === 1) throw Error("InvalidCharacterError");
                    if (/[^+\/0-9A-Za-z]/.test(e)) throw Error("InvalidCharacterError");
                    for (; r < e.length;) n = t.indexOf(e.charAt(r)), o = o << 6 | n, a += 6, 24 === a && (i.push(String.fromCharCode(o >> 16 & 255)), i.push(String.fromCharCode(o >> 8 & 255)), i.push(String.fromCharCode(255 & o)), a = 0, o = 0), r += 1;
                    return 12 === a ? (o >>= 4, i.push(String.fromCharCode(255 & o))) : 18 === a && (o >>= 2, i.push(String.fromCharCode(o >> 8 & 255)), i.push(String.fromCharCode(255 & o))), i.join("")
                }, e.btoa = e.btoa || function(e) {
                    e = String(e);
                    var n, r, i, o, a, s, l, h = 0,
                        u = [];
                    if (/[^\x00-\xFF]/.test(e)) throw Error("InvalidCharacterError");
                    for (; h < e.length;) n = e.charCodeAt(h++), r = e.charCodeAt(h++), i = e.charCodeAt(h++), o = n >> 2, a = (3 & n) << 4 | r >> 4, s = (15 & r) << 2 | i >> 6, l = 63 & i, h === e.length + 2 ? (s = 64, l = 64) : h === e.length + 1 && (l = 64), u.push(t.charAt(o), t.charAt(a), t.charAt(s), t.charAt(l));
                    return u.join("")
                }
            }(e), Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function(e) {
                var t = this.__proto__ || this.constructor.prototype;
                return e in this && (!(e in t) || t[e] !== this[e])
            }),
            function() {
                if ("performance" in e == !1 && (e.performance = {}), Date.now = Date.now || function() {
                        return (new Date).getTime()
                    }, "now" in e.performance == !1) {
                    var t = Date.now();
                    performance.timing && performance.timing.navigationStart && (t = performance.timing.navigationStart), e.performance.now = function() {
                        return Date.now() - t
                    }
                }
            }(), e.requestAnimationFrame || (e.webkitRequestAnimationFrame && e.webkitCancelAnimationFrame ? ! function(e) {
                e.requestAnimationFrame = function(t) {
                    return webkitRequestAnimationFrame(function() {
                        t(e.performance.now())
                    })
                }, e.cancelAnimationFrame = e.webkitCancelAnimationFrame
            }(e) : e.mozRequestAnimationFrame && e.mozCancelAnimationFrame ? ! function(e) {
                e.requestAnimationFrame = function(t) {
                    return mozRequestAnimationFrame(function() {
                        t(e.performance.now())
                    })
                }, e.cancelAnimationFrame = e.mozCancelAnimationFrame
            }(e) : ! function(e) {
                e.requestAnimationFrame = function(t) {
                    return e.setTimeout(t, 1e3 / 60)
                }, e.cancelAnimationFrame = e.clearTimeout
            }(e))
    }
}(this),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Holder = t() : e.Holder = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        e.exports = n(1)
    }, function(e, t, n) {
        (function(t) {
            function r(e, t, n, r) {
                var a = i(n.substr(n.lastIndexOf(e.domain)), e);
                a && o({
                    mode: null,
                    el: r,
                    flags: a,
                    engineSettings: t
                })
            }

            function i(e, t) {
                var n = {
                        theme: k(O.settings.themes.gray, null),
                        stylesheets: t.stylesheets,
                        instanceOptions: t
                    },
                    r = e.indexOf("?"),
                    i = [e];
                r !== -1 && (i = [e.slice(0, r), e.slice(r + 1)]);
                var o = i[0].split("/");
                n.holderURL = e;
                var a = o[1],
                    s = a.match(/([\d]+p?)x([\d]+p?)/);
                if (!s) return !1;
                if (n.fluid = a.indexOf("p") !== -1, n.dimensions = {
                        width: s[1].replace("p", "%"),
                        height: s[2].replace("p", "%")
                    }, 2 === i.length) {
                    var l = v.parse(i[1]);
                    if (w.truthy(l.ratio)) {
                        n.fluid = !0;
                        var h = parseFloat(n.dimensions.width.replace("%", "")),
                            u = parseFloat(n.dimensions.height.replace("%", ""));
                        u = Math.floor(100 * (u / h)), h = 100, n.dimensions.width = h + "%", n.dimensions.height = u + "%"
                    }
                    if (n.auto = w.truthy(l.auto), l.bg && (n.theme.bg = w.parseColor(l.bg)), l.fg && (n.theme.fg = w.parseColor(l.fg)), l.bg && !l.fg && (n.autoFg = !0), l.theme && n.instanceOptions.themes.hasOwnProperty(l.theme) && (n.theme = k(n.instanceOptions.themes[l.theme], null)), l.text && (n.text = l.text), l.textmode && (n.textmode = l.textmode), l.size && (n.size = l.size), l.font && (n.font = l.font), l.align && (n.align = l.align), l.lineWrap && (n.lineWrap = l.lineWrap), n.nowrap = w.truthy(l.nowrap), n.outline = w.truthy(l.outline), w.truthy(l.random)) {
                        O.vars.cache.themeKeys = O.vars.cache.themeKeys || Object.keys(n.instanceOptions.themes);
                        var c = O.vars.cache.themeKeys[0 | Math.random() * O.vars.cache.themeKeys.length];
                        n.theme = k(n.instanceOptions.themes[c], null)
                    }
                }
                return n
            }

            function o(e) {
                var t = e.mode,
                    n = e.el,
                    r = e.flags,
                    i = e.engineSettings,
                    o = r.dimensions,
                    s = r.theme,
                    l = o.width + "x" + o.height;
                t = null == t ? r.fluid ? "fluid" : "image" : t;
                var c = /holder_([a-z]+)/g,
                    d = !1;
                if (null != r.text && (s.text = r.text, "object" === n.nodeName.toLowerCase())) {
                    for (var f = s.text.split("\\n"), p = 0; p < f.length; p++) f[p] = w.encodeHtmlEntity(f[p]);
                    s.text = f.join("\\n")
                }
                if (s.text) {
                    var g = s.text.match(c);
                    null !== g && g.forEach(function(e) {
                        "holder_dimensions" === e && (s.text = s.text.replace(e, l))
                    })
                }
                var m = r.holderURL,
                    v = k(i, null);
                if (r.font && (s.font = r.font, !v.noFontFallback && "img" === n.nodeName.toLowerCase() && O.setup.supportsCanvas && "svg" === v.renderer && (v = k(v, {
                        renderer: "canvas"
                    }))), r.font && "canvas" == v.renderer && (v.reRender = !0), "background" == t) null == n.getAttribute("data-background-src") && x.setAttr(n, {
                    "data-background-src": m
                });
                else {
                    var y = {};
                    y[O.vars.dataAttr] = m, x.setAttr(n, y)
                }
                r.theme = s, n.holderData = {
                    flags: r,
                    engineSettings: v
                }, "image" != t && "fluid" != t || x.setAttr(n, {
                    alt: s.text ? d ? s.text : s.text + " [" + l + "]" : l
                });
                var b = {
                    mode: t,
                    el: n,
                    holderSettings: {
                        dimensions: o,
                        theme: s,
                        flags: r
                    },
                    engineSettings: v
                };
                "image" == t ? (r.auto || (n.style.width = o.width + "px", n.style.height = o.height + "px"), "html" == v.renderer ? n.style.backgroundColor = s.bg : (a(b), "exact" == r.textmode && (n.holderData.resizeUpdate = !0, O.vars.resizableImages.push(n), h(n)))) : "background" == t && "html" != v.renderer ? a(b) : "fluid" == t && (n.holderData.resizeUpdate = !0, "%" == o.height.slice(-1) ? n.style.height = o.height : null != r.auto && r.auto || (n.style.height = o.height + "px"), "%" == o.width.slice(-1) ? n.style.width = o.width : null != r.auto && r.auto || (n.style.width = o.width + "px"), "inline" != n.style.display && "" !== n.style.display && "none" != n.style.display || (n.style.display = "block"), u(n), "html" == v.renderer ? n.style.backgroundColor = s.bg : (O.vars.resizableImages.push(n), h(n)))
            }

            function a(e) {
                function n() {
                    var t = null;
                    switch (l.renderer) {
                        case "canvas":
                            t = E(u, e);
                            break;
                        case "svg":
                            t = C(u, e);
                            break;
                        default:
                            throw "Holder: invalid renderer: " + l.renderer
                    }
                    return t
                }
                var r = null,
                    i = e.mode,
                    o = e.el,
                    a = e.holderSettings,
                    l = e.engineSettings;
                switch (l.renderer) {
                    case "svg":
                        if (!O.setup.supportsSVG) return;
                        break;
                    case "canvas":
                        if (!O.setup.supportsCanvas) return;
                        break;
                    default:
                        return
                }
                var h = {
                        width: a.dimensions.width,
                        height: a.dimensions.height,
                        theme: a.theme,
                        flags: a.flags
                    },
                    u = s(h);
                if (r = n(), null == r) throw "Holder: couldn't render placeholder";
                "background" == i ? (o.style.backgroundImage = "url(" + r + ")", l.noBackgroundSize || (o.style.backgroundSize = h.width + "px " + h.height + "px")) : ("img" === o.nodeName.toLowerCase() ? x.setAttr(o, {
                    src: r
                }) : "object" === o.nodeName.toLowerCase() && x.setAttr(o, {
                    data: r,
                    type: "image/svg+xml"
                }), l.reRender && t.setTimeout(function() {
                    var e = n();
                    if (null == e) throw "Holder: couldn't render placeholder";
                    "img" === o.nodeName.toLowerCase() ? x.setAttr(o, {
                        src: e
                    }) : "object" === o.nodeName.toLowerCase() && x.setAttr(o, {
                        data: e,
                        type: "image/svg+xml"
                    })
                }, 150)), x.setAttr(o, {
                    "data-holder-rendered": !0
                })
            }

            function s(e) {
                function t(e, t, n, r) {
                    t.width = n, t.height = r, e.width = Math.max(e.width, t.width), e.height += t.height
                }
                var n = O.defaults.size;
                switch (parseFloat(e.theme.size) ? n = e.theme.size : parseFloat(e.flags.size) && (n = e.flags.size), e.font = {
                    family: e.theme.font ? e.theme.font : "Arial, Helvetica, Open Sans, sans-serif",
                    size: l(e.width, e.height, n, O.defaults.scale),
                    units: e.theme.units ? e.theme.units : O.defaults.units,
                    weight: e.theme.fontweight ? e.theme.fontweight : "bold"
                }, e.text = e.theme.text || Math.floor(e.width) + "x" + Math.floor(e.height), e.noWrap = e.theme.nowrap || e.flags.nowrap, e.align = e.theme.align || e.flags.align || "center", e.flags.textmode) {
                    case "literal":
                        e.text = e.flags.dimensions.width + "x" + e.flags.dimensions.height;
                        break;
                    case "exact":
                        if (!e.flags.exactDimensions) break;
                        e.text = Math.floor(e.flags.exactDimensions.width) + "x" + Math.floor(e.flags.exactDimensions.height)
                }
                var r = e.flags.lineWrap || O.setup.lineWrapRatio,
                    i = e.width * r,
                    o = i,
                    a = new y({
                        width: e.width,
                        height: e.height
                    }),
                    s = a.Shape,
                    h = new s.Rect("holderBg", {
                        fill: e.theme.bg
                    });
                if (h.resize(e.width, e.height), a.root.add(h), e.flags.outline) {
                    var u = new S(h.properties.fill);
                    u = u.lighten(u.lighterThan("7f7f7f") ? -.1 : .1), h.properties.outline = {
                        fill: u.toHex(!0),
                        width: 2
                    }
                }
                var c = e.theme.fg;
                if (e.flags.autoFg) {
                    var d = new S(h.properties.fill),
                        f = new S("fff"),
                        p = new S("000", {
                            alpha: .285714
                        });
                    c = d.blendAlpha(d.lighterThan("7f7f7f") ? p : f).toHex(!0)
                }
                var g = new s.Group("holderTextGroup", {
                    text: e.text,
                    align: e.align,
                    font: e.font,
                    fill: c
                });
                g.moveTo(null, null, 1), a.root.add(g);
                var m = g.textPositionData = z(a);
                if (!m) throw "Holder: staging fallback not supported yet.";
                g.properties.leading = m.boundingBox.height;
                var v = null,
                    w = null;
                if (m.lineCount > 1) {
                    var b, x = 0,
                        A = 0,
                        C = 0;
                    w = new s.Group("line" + C), "left" !== e.align && "right" !== e.align || (o = e.width * (1 - 2 * (1 - r)));
                    for (var E = 0; E < m.words.length; E++) {
                        var k = m.words[E];
                        v = new s.Text(k.text);
                        var T = "\\n" == k.text;
                        !e.noWrap && (x + k.width >= o || T === !0) && (t(g, w, x, g.properties.leading), g.add(w), x = 0, A += g.properties.leading, C += 1, w = new s.Group("line" + C), w.y = A), T !== !0 && (v.moveTo(x, 0), x += m.spaceWidth + k.width, w.add(v))
                    }
                    if (t(g, w, x, g.properties.leading), g.add(w), "left" === e.align) g.moveTo(e.width - i, null, null);
                    else if ("right" === e.align) {
                        for (b in g.children) w = g.children[b], w.moveTo(e.width - w.width, null, null);
                        g.moveTo(0 - (e.width - i), null, null)
                    } else {
                        for (b in g.children) w = g.children[b], w.moveTo((g.width - w.width) / 2, null, null);
                        g.moveTo((e.width - g.width) / 2, null, null)
                    }
                    g.moveTo(null, (e.height - g.height) / 2, null), (e.height - g.height) / 2 < 0 && g.moveTo(null, 0, null)
                } else v = new s.Text(e.text), w = new s.Group("line0"), w.add(v), g.add(w), "left" === e.align ? g.moveTo(e.width - i, null, null) : "right" === e.align ? g.moveTo(0 - (e.width - i), null, null) : g.moveTo((e.width - m.boundingBox.width) / 2, null, null), g.moveTo(null, (e.height - m.boundingBox.height) / 2, null);
                return a
            }

            function l(e, t, n, r) {
                var i = parseInt(e, 10),
                    o = parseInt(t, 10),
                    a = Math.max(i, o),
                    s = Math.min(i, o),
                    l = .8 * Math.min(s, a * r);
                return Math.round(Math.max(n, l))
            }

            function h(e) {
                var t;
                t = null == e || null == e.nodeType ? O.vars.resizableImages : [e];
                for (var n = 0, r = t.length; n < r; n++) {
                    var i = t[n];
                    if (i.holderData) {
                        var o = i.holderData.flags,
                            s = T(i);
                        if (s) {
                            if (!i.holderData.resizeUpdate) continue;
                            if (o.fluid && o.auto) {
                                var l = i.holderData.fluidConfig;
                                switch (l.mode) {
                                    case "width":
                                        s.height = s.width / l.ratio;
                                        break;
                                    case "height":
                                        s.width = s.height * l.ratio
                                }
                            }
                            var h = {
                                mode: "image",
                                holderSettings: {
                                    dimensions: s,
                                    theme: o.theme,
                                    flags: o
                                },
                                el: i,
                                engineSettings: i.holderData.engineSettings
                            };
                            "exact" == o.textmode && (o.exactDimensions = s, h.holderSettings.dimensions = o.dimensions), a(h)
                        } else f(i)
                    }
                }
            }

            function u(e) {
                if (e.holderData) {
                    var t = T(e);
                    if (t) {
                        var n = e.holderData.flags,
                            r = {
                                fluidHeight: "%" == n.dimensions.height.slice(-1),
                                fluidWidth: "%" == n.dimensions.width.slice(-1),
                                mode: null,
                                initialDimensions: t
                            };
                        r.fluidWidth && !r.fluidHeight ? (r.mode = "width", r.ratio = r.initialDimensions.width / parseFloat(n.dimensions.height)) : !r.fluidWidth && r.fluidHeight && (r.mode = "height", r.ratio = parseFloat(n.dimensions.width) / r.initialDimensions.height), e.holderData.fluidConfig = r
                    } else f(e)
                }
            }

            function c() {
                var e, n = [],
                    r = Object.keys(O.vars.invisibleImages);
                r.forEach(function(t) {
                    e = O.vars.invisibleImages[t], T(e) && "img" == e.nodeName.toLowerCase() && (n.push(e), delete O.vars.invisibleImages[t])
                }), n.length && F.run({
                    images: n
                }), setTimeout(function() {
                    t.requestAnimationFrame(c)
                }, 10)
            }

            function d() {
                O.vars.visibilityCheckStarted || (t.requestAnimationFrame(c), O.vars.visibilityCheckStarted = !0)
            }

            function f(e) {
                e.holderData.invisibleId || (O.vars.invisibleId += 1, O.vars.invisibleImages["i" + O.vars.invisibleId] = e, e.holderData.invisibleId = O.vars.invisibleId)
            }

            function p(e) {
                O.vars.debounceTimer || e.call(this), O.vars.debounceTimer && t.clearTimeout(O.vars.debounceTimer), O.vars.debounceTimer = t.setTimeout(function() {
                    O.vars.debounceTimer = null, e.call(this)
                }, O.setup.debounce)
            }

            function g() {
                p(function() {
                    h(null)
                })
            }
            var m = n(2),
                v = n(3),
                y = n(6),
                w = n(7),
                b = n(8),
                x = n(9),
                S = n(10),
                A = n(11),
                C = n(12),
                E = n(15),
                k = w.extend,
                T = w.dimensionCheck,
                j = A.svg_ns,
                F = {
                    version: A.version,
                    addTheme: function(e, t) {
                        return null != e && null != t && (O.settings.themes[e] = t), delete O.vars.cache.themeKeys, this
                    },
                    addImage: function(e, t) {
                        var n = x.getNodeArray(t);
                        return n.forEach(function(t) {
                            var n = x.newEl("img"),
                                r = {};
                            r[O.setup.dataAttr] = e, x.setAttr(n, r), t.appendChild(n)
                        }), this
                    },
                    setResizeUpdate: function(e, t) {
                        e.holderData && (e.holderData.resizeUpdate = !!t, e.holderData.resizeUpdate && h(e))
                    },
                    run: function(e) {
                        e = e || {};
                        var n = {},
                            a = k(O.settings, e);
                        O.vars.preempted = !0, O.vars.dataAttr = a.dataAttr || O.setup.dataAttr, n.renderer = a.renderer ? a.renderer : O.setup.renderer, O.setup.renderers.join(",").indexOf(n.renderer) === -1 && (n.renderer = O.setup.supportsSVG ? "svg" : O.setup.supportsCanvas ? "canvas" : "html");
                        var s = x.getNodeArray(a.images),
                            l = x.getNodeArray(a.bgnodes),
                            h = x.getNodeArray(a.stylenodes),
                            u = x.getNodeArray(a.objects);
                        return n.stylesheets = [], n.svgXMLStylesheet = !0, n.noFontFallback = !!a.noFontFallback, n.noBackgroundSize = !!a.noBackgroundSize, h.forEach(function(e) {
                            if (e.attributes.rel && e.attributes.href && "stylesheet" == e.attributes.rel.value) {
                                var t = e.attributes.href.value,
                                    r = x.newEl("a");
                                r.href = t;
                                var i = r.protocol + "//" + r.host + r.pathname + r.search;
                                n.stylesheets.push(i)
                            }
                        }), l.forEach(function(e) {
                            if (t.getComputedStyle) {
                                var r = t.getComputedStyle(e, null).getPropertyValue("background-image"),
                                    s = e.getAttribute("data-background-src"),
                                    l = s || r,
                                    h = null,
                                    u = a.domain + "/",
                                    c = l.indexOf(u);
                                if (0 === c) h = l;
                                else if (1 === c && "?" === l[0]) h = l.slice(1);
                                else {
                                    var d = l.substr(c).match(/([^\"]*)"?\)/);
                                    if (null !== d) h = d[1];
                                    else if (0 === l.indexOf("url(")) throw "Holder: unable to parse background URL: " + l
                                }
                                if (h) {
                                    var f = i(h, a);
                                    f && o({
                                        mode: "background",
                                        el: e,
                                        flags: f,
                                        engineSettings: n
                                    })
                                }
                            }
                        }), u.forEach(function(e) {
                            var t = {};
                            try {
                                t.data = e.getAttribute("data"), t.dataSrc = e.getAttribute(O.vars.dataAttr)
                            } catch (i) {}
                            var o = null != t.data && 0 === t.data.indexOf(a.domain),
                                s = null != t.dataSrc && 0 === t.dataSrc.indexOf(a.domain);
                            o ? r(a, n, t.data, e) : s && r(a, n, t.dataSrc, e)
                        }), s.forEach(function(e) {
                            var t = {};
                            try {
                                t.src = e.getAttribute("src"), t.dataSrc = e.getAttribute(O.vars.dataAttr), t.rendered = e.getAttribute("data-holder-rendered")
                            } catch (i) {}
                            var o = null != t.src,
                                s = null != t.dataSrc && 0 === t.dataSrc.indexOf(a.domain),
                                l = null != t.rendered && "true" == t.rendered;
                            o ? 0 === t.src.indexOf(a.domain) ? r(a, n, t.src, e) : s && (l ? r(a, n, t.dataSrc, e) : ! function(e, t, n, i, o) {
                                w.imageExists(e, function(e) {
                                    e || r(t, n, i, o)
                                })
                            }(t.src, a, n, t.dataSrc, e)) : s && r(a, n, t.dataSrc, e)
                        }), this
                    }
                },
                O = {
                    settings: {
                        domain: "holder.js",
                        images: "img",
                        objects: "object",
                        bgnodes: "body .holderjs",
                        stylenodes: "head link.holderjs",
                        themes: {
                            gray: {
                                bg: "#EEEEEE",
                                fg: "#AAAAAA"
                            },
                            social: {
                                bg: "#3a5a97",
                                fg: "#FFFFFF"
                            },
                            industrial: {
                                bg: "#434A52",
                                fg: "#C2F200"
                            },
                            sky: {
                                bg: "#0D8FDB",
                                fg: "#FFFFFF"
                            },
                            vine: {
                                bg: "#39DBAC",
                                fg: "#1E292C"
                            },
                            lava: {
                                bg: "#F8591A",
                                fg: "#1C2846"
                            }
                        }
                    },
                    defaults: {
                        size: 10,
                        units: "pt",
                        scale: 1 / 16
                    }
                },
                z = function() {
                    var e = null,
                        t = null,
                        n = null;
                    return function(r) {
                        var i = r.root;
                        if (O.setup.supportsSVG) {
                            var o = !1,
                                a = function(e) {
                                    return document.createTextNode(e)
                                };
                            null != e && e.parentNode === document.body || (o = !0), e = b.initSVG(e, i.properties.width, i.properties.height), e.style.display = "block", o && (t = x.newEl("text", j), n = a(null), x.setAttr(t, {
                                x: 0
                            }), t.appendChild(n), e.appendChild(t), document.body.appendChild(e), e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-100%", e.style.left = "-100%");
                            var s = i.children.holderTextGroup,
                                l = s.properties;
                            x.setAttr(t, {
                                y: l.font.size,
                                style: w.cssProps({
                                    "font-weight": l.font.weight,
                                    "font-size": l.font.size + l.font.units,
                                    "font-family": l.font.family
                                })
                            }), n.nodeValue = l.text;
                            var h = t.getBBox(),
                                u = Math.ceil(h.width / i.properties.width),
                                c = l.text.split(" "),
                                d = l.text.match(/\\n/g);
                            u += null == d ? 0 : d.length, n.nodeValue = l.text.replace(/[ ]+/g, "");
                            var f = t.getComputedTextLength(),
                                p = h.width - f,
                                g = Math.round(p / Math.max(1, c.length - 1)),
                                m = [];
                            if (u > 1) {
                                n.nodeValue = "";
                                for (var v = 0; v < c.length; v++)
                                    if (0 !== c[v].length) {
                                        n.nodeValue = w.decodeHtmlEntity(c[v]);
                                        var y = t.getBBox();
                                        m.push({
                                            text: c[v],
                                            width: y.width
                                        })
                                    }
                            }
                            return e.style.display = "none", {
                                spaceWidth: g,
                                lineCount: u,
                                boundingBox: h,
                                words: m
                            }
                        }
                        return !1
                    }
                }();
            for (var D in O.flags) O.flags.hasOwnProperty(D) && (O.flags[D].match = function(e) {
                return e.match(this.regex)
            });
            O.setup = {
                    renderer: "html",
                    debounce: 100,
                    ratio: 1,
                    supportsCanvas: !1,
                    supportsSVG: !1,
                    lineWrapRatio: .9,
                    dataAttr: "data-src",
                    renderers: ["html", "canvas", "svg"]
                }, O.vars = {
                    preempted: !1,
                    resizableImages: [],
                    invisibleImages: {},
                    invisibleId: 0,
                    visibilityCheckStarted: !1,
                    debounceTimer: null,
                    cache: {}
                },
                function() {
                    var e = x.newEl("canvas");
                    e.getContext && e.toDataURL("image/png").indexOf("data:image/png") != -1 && (O.setup.renderer = "canvas", O.setup.supportsCanvas = !0), document.createElementNS && document.createElementNS(j, "svg").createSVGRect && (O.setup.renderer = "svg", O.setup.supportsSVG = !0)
                }(), d(), m && m(function() {
                    O.vars.preempted || F.run(), t.addEventListener ? (t.addEventListener("resize", g, !1), t.addEventListener("orientationchange", g, !1)) : t.attachEvent("onresize", g), "object" == typeof t.Turbolinks && t.document.addEventListener("page:change", function() {
                        F.run()
                    })
                }), e.exports = F
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        function n(e) {
            function t(e) {
                if (!x) {
                    if (!a.body) return i(t);
                    for (x = !0; e = S.shift();) i(e)
                }
            }

            function n(e) {
                (w || e.type === l || a[d] === c) && (r(), t())
            }

            function r() {
                w ? (a[y](m, n, h), e[y](l, n, h)) : (a[p](v, n), e[p](u, n))
            }

            function i(e, t) {
                setTimeout(e, +t >= 0 ? t : 1)
            }

            function o(e) {
                x ? i(e) : S.push(e)
            }
            null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded", function C() {
                document.removeEventListener("DOMContentLoaded", C, !1), document.readyState = "complete"
            }, !1), document.readyState = "loading");
            var a = e.document,
                s = a.documentElement,
                l = "load",
                h = !1,
                u = "on" + l,
                c = "complete",
                d = "readyState",
                f = "attachEvent",
                p = "detachEvent",
                g = "addEventListener",
                m = "DOMContentLoaded",
                v = "onreadystatechange",
                y = "removeEventListener",
                w = g in a,
                b = h,
                x = h,
                S = [];
            if (a[d] === c) i(t);
            else if (w) a[g](m, n, h), e[g](l, n, h);
            else {
                a[f](v, n), e[f](u, n);
                try {
                    b = null == e.frameElement && s
                } catch (A) {}
                b && b.doScroll && ! function E() {
                    if (!x) {
                        try {
                            b.doScroll("left")
                        } catch (e) {
                            return i(E, 50)
                        }
                        r(), t()
                    }
                }()
            }
            return o.version = "1.4.0", o.isReady = function() {
                return x
            }, o
        }
        e.exports = "undefined" != typeof window && n(window)
    }, function(e, t, n) {
        var r = encodeURIComponent,
            i = decodeURIComponent,
            o = n(4),
            a = n(5),
            s = /(\w+)\[(\d+)\]/,
            l = /\w+\.\w+/;
        t.parse = function(e) {
            if ("string" != typeof e) return {};
            if (e = o(e), "" === e) return {};
            "?" === e.charAt(0) && (e = e.slice(1));
            for (var t = {}, n = e.split("&"), r = 0; r < n.length; r++) {
                var a, h, u, c = n[r].split("="),
                    d = i(c[0]);
                if (a = s.exec(d)) t[a[1]] = t[a[1]] || [], t[a[1]][a[2]] = i(c[1]);
                else if (a = l.test(d)) {
                    for (a = d.split("."), h = t; a.length;)
                        if (u = a.shift(), u.length) {
                            if (h[u]) {
                                if (h[u] && "object" != typeof h[u]) break
                            } else h[u] = {};
                            a.length || (h[u] = i(c[1])), h = h[u]
                        }
                } else t[c[0]] = null == c[1] ? "" : i(c[1])
            }
            return t
        }, t.stringify = function(e) {
            if (!e) return "";
            var t = [];
            for (var n in e) {
                var i = e[n];
                if ("array" != a(i)) t.push(r(n) + "=" + r(e[n]));
                else
                    for (var o = 0; o < i.length; ++o) t.push(r(n + "[" + o + "]") + "=" + r(i[o]))
            }
            return t.join("&")
        }
    }, function(e, t) {
        function n(e) {
            return e.replace(/^\s*|\s*$/g, "")
        }
        t = e.exports = n, t.left = function(e) {
            return e.replace(/^\s*/, "")
        }, t.right = function(e) {
            return e.replace(/\s*$/, "")
        }
    }, function(e, t) {
        function n(e) {
            return !(null == e || !(e._isBuffer || e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)))
        }
        var r = Object.prototype.toString;
        e.exports = function(e) {
            switch (r.call(e)) {
                case "[object Date]":
                    return "date";
                case "[object RegExp]":
                    return "regexp";
                case "[object Arguments]":
                    return "arguments";
                case "[object Array]":
                    return "array";
                case "[object Error]":
                    return "error"
            }
            return null === e ? "null" : void 0 === e ? "undefined" : e !== e ? "nan" : e && 1 === e.nodeType ? "element" : n(e) ? "buffer" : (e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e), typeof e)
        }
    }, function(e, t) {
        var n = function(e) {
            function t(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }
            var n = 1,
                r = function(e) {
                    n++, this.parent = null, this.children = {}, this.id = n, this.name = "n" + n, "undefined" != typeof e && (this.name = e), this.x = this.y = this.z = 0, this.width = this.height = 0
                };
            r.prototype.resize = function(e, t) {
                null != e && (this.width = e), null != t && (this.height = t)
            }, r.prototype.moveTo = function(e, t, n) {
                this.x = null != e ? e : this.x, this.y = null != t ? t : this.y, this.z = null != n ? n : this.z
            }, r.prototype.add = function(e) {
                var t = e.name;
                if ("undefined" != typeof this.children[t]) throw "SceneGraph: child already exists: " + t;
                this.children[t] = e, e.parent = this
            };
            var i = function() {
                r.call(this, "root"), this.properties = e
            };
            i.prototype = new r;
            var o = function(e, n) {
                if (r.call(this, e), this.properties = {
                        fill: "#000000"
                    }, "undefined" != typeof n) t(this.properties, n);
                else if ("undefined" != typeof e && "string" != typeof e) throw "SceneGraph: invalid node name"
            };
            o.prototype = new r;
            var a = function() {
                o.apply(this, arguments), this.type = "group"
            };
            a.prototype = new o;
            var s = function() {
                o.apply(this, arguments), this.type = "rect"
            };
            s.prototype = new o;
            var l = function(e) {
                o.call(this), this.type = "text", this.properties.text = e
            };
            l.prototype = new o;
            var h = new i;
            return this.Shape = {
                Rect: s,
                Text: l,
                Group: a
            }, this.root = h, this
        };
        e.exports = n
    }, function(e, t) {
        (function(e) {
            t.extend = function(e, t) {
                var n = {};
                for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
                if (null != t)
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                return n
            }, t.cssProps = function(e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(n + ":" + e[n]);
                return t.join(";")
            }, t.encodeHtmlEntity = function(e) {
                for (var t = [], n = 0, r = e.length - 1; r >= 0; r--) n = e.charCodeAt(r), n > 128 ? t.unshift(["&#", n, ";"].join("")) : t.unshift(e[r]);
                return t.join("")
            }, t.imageExists = function(e, t) {
                var n = new Image;
                n.onerror = function() {
                    t.call(this, !1)
                }, n.onload = function() {
                    t.call(this, !0)
                }, n.src = e
            }, t.decodeHtmlEntity = function(e) {
                return e.replace(/&#(\d+);/g, function(e, t) {
                    return String.fromCharCode(t)
                })
            }, t.dimensionCheck = function(e) {
                var t = {
                    height: e.clientHeight,
                    width: e.clientWidth
                };
                return !(!t.height || !t.width) && t
            }, t.truthy = function(e) {
                return "string" == typeof e ? "true" === e || "yes" === e || "1" === e || "on" === e || "✓" === e : !!e
            }, t.parseColor = function(e) {
                var t, n = /(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i,
                    r = /^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
                    i = /^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/,
                    o = e.match(n);
                return null !== o ? (t = o[1] || o[2], "#" !== t[0] ? "#" + t : t) : (o = e.match(r), null !== o ? t = "rgb(" + o.slice(1).join(",") + ")" : (o = e.match(i), null !== o ? t = "rgba(" + o.slice(1).join(",") + ")" : null))
            }, t.canvasRatio = function() {
                var t = 1,
                    n = 1;
                if (e.document) {
                    var r = e.document.createElement("canvas");
                    if (r.getContext) {
                        var i = r.getContext("2d");
                        t = e.devicePixelRatio || 1, n = i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1
                    }
                }
                return t / n
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t, n) {
        (function(e) {
            var r = n(9),
                i = "http://www.w3.org/2000/svg",
                o = 8;
            t.initSVG = function(e, t, n) {
                var a, s, l = !1;
                e && e.querySelector ? (s = e.querySelector("style"), null === s && (l = !0)) : (e = r.newEl("svg", i), l = !0), l && (a = r.newEl("defs", i), s = r.newEl("style", i), r.setAttr(s, {
                    type: "text/css"
                }), a.appendChild(s), e.appendChild(a)), e.webkitMatchesSelector && e.setAttribute("xmlns", i);
                for (var h = 0; h < e.childNodes.length; h++) e.childNodes[h].nodeType === o && e.removeChild(e.childNodes[h]);
                for (; s.childNodes.length;) s.removeChild(s.childNodes[0]);
                return r.setAttr(e, {
                    width: t,
                    height: n,
                    viewBox: "0 0 " + t + " " + n,
                    preserveAspectRatio: "none"
                }), e
            }, t.svgStringToDataURI = function() {
                var t = "data:image/svg+xml;charset=UTF-8,",
                    n = "data:image/svg+xml;charset=UTF-8;base64,";
                return function(r, i) {
                    return i ? n + btoa(e.unescape(encodeURIComponent(r))) : t + encodeURIComponent(r)
                }
            }(), t.serializeSVG = function(t, n) {
                if (e.XMLSerializer) {
                    var i = new XMLSerializer,
                        o = "",
                        a = n.stylesheets;
                    if (n.svgXMLStylesheet) {
                        for (var s = r.createXML(), l = a.length - 1; l >= 0; l--) {
                            var h = s.createProcessingInstruction("xml-stylesheet", 'href="' + a[l] + '" rel="stylesheet"');
                            s.insertBefore(h, s.firstChild)
                        }
                        s.removeChild(s.documentElement), o = i.serializeToString(s)
                    }
                    var u = i.serializeToString(t);
                    return u = u.replace(/\&amp;(\#[0-9]{2,}\;)/g, "&$1"), o + u
                }
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        (function(e) {
            t.newEl = function(t, n) {
                if (e.document) return null == n ? e.document.createElement(t) : e.document.createElementNS(n, t)
            }, t.setAttr = function(e, t) {
                for (var n in t) e.setAttribute(n, t[n])
            }, t.createXML = function() {
                if (e.DOMParser) return (new DOMParser).parseFromString("<xml />", "application/xml")
            }, t.getNodeArray = function(t) {
                var n = null;
                return "string" == typeof t ? n = document.querySelectorAll(t) : e.NodeList && t instanceof e.NodeList ? n = t : e.Node && t instanceof e.Node ? n = [t] : e.HTMLCollection && t instanceof e.HTMLCollection ? n = t : t instanceof Array ? n = t : null === t && (n = []), n = Array.prototype.slice.call(n)
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        var n = function(e, t) {
            "string" == typeof e && (this.original = e, "#" === e.charAt(0) && (e = e.slice(1)), /[^a-f0-9]+/i.test(e) || (3 === e.length && (e = e.replace(/./g, "$&$&")), 6 === e.length && (this.alpha = 1, t && t.alpha && (this.alpha = t.alpha), this.set(parseInt(e, 16)))))
        };
        n.rgb2hex = function(e, t, n) {
            function r(e) {
                var t = (0 | e).toString(16);
                return e < 16 && (t = "0" + t), t
            }
            return [e, t, n].map(r).join("")
        }, n.hsl2rgb = function(e, t, n) {
            var r = e / 60,
                i = (1 - Math.abs(2 * n - 1)) * t,
                o = i * (1 - Math.abs(parseInt(r) % 2 - 1)),
                a = n - i / 2,
                s = 0,
                l = 0,
                h = 0;
            return r >= 0 && r < 1 ? (s = i, l = o) : r >= 1 && r < 2 ? (s = o, l = i) : r >= 2 && r < 3 ? (l = i, h = o) : r >= 3 && r < 4 ? (l = o, h = i) : r >= 4 && r < 5 ? (s = o, h = i) : r >= 5 && r < 6 && (s = i, h = o), s += a, l += a, h += a, s = parseInt(255 * s), l = parseInt(255 * l), h = parseInt(255 * h), [s, l, h]
        }, n.prototype.set = function(e) {
            this.raw = e;
            var t = (16711680 & this.raw) >> 16,
                n = (65280 & this.raw) >> 8,
                r = 255 & this.raw,
                i = .2126 * t + .7152 * n + .0722 * r,
                o = -.09991 * t - .33609 * n + .436 * r,
                a = .615 * t - .55861 * n - .05639 * r;
            return this.rgb = {
                r: t,
                g: n,
                b: r
            }, this.yuv = {
                y: i,
                u: o,
                v: a
            }, this
        }, n.prototype.lighten = function(e) {
            var t = Math.min(1, Math.max(0, Math.abs(e))) * (e < 0 ? -1 : 1),
                r = 255 * t | 0,
                i = Math.min(255, Math.max(0, this.rgb.r + r)),
                o = Math.min(255, Math.max(0, this.rgb.g + r)),
                a = Math.min(255, Math.max(0, this.rgb.b + r)),
                s = n.rgb2hex(i, o, a);
            return new n(s)
        }, n.prototype.toHex = function(e) {
            return (e ? "#" : "") + this.raw.toString(16)
        }, n.prototype.lighterThan = function(e) {
            return e instanceof n || (e = new n(e)), this.yuv.y > e.yuv.y
        }, n.prototype.blendAlpha = function(e) {
            e instanceof n || (e = new n(e));
            var t = e,
                r = this,
                i = t.alpha * t.rgb.r + (1 - t.alpha) * r.rgb.r,
                o = t.alpha * t.rgb.g + (1 - t.alpha) * r.rgb.g,
                a = t.alpha * t.rgb.b + (1 - t.alpha) * r.rgb.b;
            return new n(n.rgb2hex(i, o, a))
        }, e.exports = n
    }, function(e, t) {
        e.exports = {
            version: "2.9.4",
            svg_ns: "http://www.w3.org/2000/svg"
        }
    }, function(e, t, n) {
        function r(e, t) {
            return c.element({
                tag: t,
                width: e.width,
                height: e.height,
                fill: e.properties.fill
            })
        }

        function i(e) {
            return h.cssProps({
                fill: e.fill,
                "font-weight": e.font.weight,
                "font-family": e.font.family + ", monospace",
                "font-size": e.font.size + e.font.units
            })
        }

        function o(e, t, n) {
            var r = n / 2;
            return ["M", r, r, "H", e - r, "V", t - r, "H", r, "V", 0, "M", 0, r, "L", e, t - r, "M", 0, t - r, "L", e, r].join(" ")
        }
        var a = n(13),
            s = n(8),
            l = n(11),
            h = n(7),
            u = l.svg_ns,
            c = {
                element: function(e) {
                    var t = e.tag,
                        n = e.content || "";
                    return delete e.tag, delete e.content, [t, n, e]
                }
            };
        e.exports = function(e, t) {
            var n = t.engineSettings,
                l = n.stylesheets,
                h = l.map(function(e) {
                    return '<?xml-stylesheet rel="stylesheet" href="' + e + '"?>'
                }).join("\n"),
                d = "holder_" + Number(new Date).toString(16),
                f = e.root,
                p = f.children.holderTextGroup,
                g = "#" + d + " text { " + i(p.properties) + " } ";
            p.y += .8 * p.textPositionData.boundingBox.height;
            var m = [];
            Object.keys(p.children).forEach(function(e) {
                var t = p.children[e];
                Object.keys(t.children).forEach(function(e) {
                    var n = t.children[e],
                        r = p.x + t.x + n.x,
                        i = p.y + t.y + n.y,
                        o = c.element({
                            tag: "text",
                            content: n.properties.text,
                            x: r,
                            y: i
                        });
                    m.push(o)
                })
            });
            var v = c.element({
                    tag: "g",
                    content: m
                }),
                y = null;
            if (f.children.holderBg.properties.outline) {
                var w = f.children.holderBg.properties.outline;
                y = c.element({
                    tag: "path",
                    d: o(f.children.holderBg.width, f.children.holderBg.height, w.width),
                    "stroke-width": w.width,
                    stroke: w.fill,
                    fill: "none"
                })
            }
            var b = r(f.children.holderBg, "rect"),
                x = [];
            x.push(b), w && x.push(y), x.push(v);
            var S = c.element({
                    tag: "g",
                    id: d,
                    content: x
                }),
                A = c.element({
                    tag: "style",
                    content: g,
                    type: "text/css"
                }),
                C = c.element({
                    tag: "defs",
                    content: A
                }),
                E = c.element({
                    tag: "svg",
                    content: [C, S],
                    width: f.properties.width,
                    height: f.properties.height,
                    xmlns: u,
                    viewBox: [0, 0, f.properties.width, f.properties.height].join(" "),
                    preserveAspectRatio: "none"
                }),
                k = a(E);
            k = h + k[0];
            var T = s.svgStringToDataURI(k, "background" === t.mode);
            return T
        }
    }, function(e, t, n) {
        n(14);
        e.exports = function r(e, t, n) {
            "use strict";

            function i(e) {
                var t = e.match(/^[\w-]+/),
                    r = {
                        tag: t ? t[0] : "div",
                        attr: {},
                        children: []
                    },
                    i = e.match(/#([\w-]+)/),
                    o = e.match(/\$([\w-]+)/),
                    a = e.match(/\.[\w-]+/g);
                return i && (r.attr.id = i[1], n[i[1]] = r), o && (n[o[1]] = r), a && (r.attr["class"] = a.join(" ").replace(/\./g, "")), e.match(/&$/g) && (f = !1), r
            }

            function o(e, t) {
                if (null !== t && t !== !1 && void 0 !== t) return "string" != typeof t && "object" != typeof t ? String(t) : t
            }

            function a(e) {
                return e || 0 === e ? String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;") : ""
            }

            function s(e) {
                return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            var l, h, u, c, d = 1,
                f = !0;
            if (n = n || {}, "string" == typeof e[0]) e[0] = i(e[0]);
            else {
                if (!Array.isArray(e[0])) throw new Error("First element of array must be a string, or an array and not " + JSON.stringify(e[0]));
                d = 0
            }
            for (; d < e.length; d++) {
                if (e[d] === !1 || null === e[d]) {
                    e[0] = !1;
                    break
                }
                if (void 0 !== e[d] && e[d] !== !0)
                    if ("string" == typeof e[d]) f && (e[d] = s(e[d])), e[0].children.push(e[d]);
                    else if ("number" == typeof e[d]) e[0].children.push(e[d]);
                else if (Array.isArray(e[d])) {
                    if (Array.isArray(e[d][0])) {
                        if (e[d].reverse().forEach(function(t) {
                                e.splice(d + 1, 0, t)
                            }), 0 !== d) continue;
                        d++
                    }
                    r(e[d], t, n), e[d][0] && e[0].children.push(e[d][0])
                } else if ("function" == typeof e[d]) u = e[d];
                else {
                    if ("object" != typeof e[d]) throw new TypeError('"' + e[d] + '" is not allowed as a value.');
                    for (h in e[d]) e[d].hasOwnProperty(h) && null !== e[d][h] && e[d][h] !== !1 && ("style" === h && "object" == typeof e[d][h] ? e[0].attr[h] = JSON.stringify(e[d][h], o).slice(2, -2).replace(/","/g, ";").replace(/":"/g, ":").replace(/\\"/g, "'") : e[0].attr[h] = e[d][h])
                }
            }
            if (e[0] !== !1) {
                l = "<" + e[0].tag;
                for (c in e[0].attr) e[0].attr.hasOwnProperty(c) && (l += " " + c + '="' + a(e[0].attr[c]) + '"');
                l += ">", e[0].children.forEach(function(e) {
                    l += e
                }), l += "</" + e[0].tag + ">", e[0] = l
            }
            return n[0] = e[0], u && u(e[0]), n
        }
    }, function(e, t) {
        "use strict";

        function n(e) {
            var t = "" + e,
                n = r.exec(t);
            if (!n) return t;
            var i, o = "",
                a = 0,
                s = 0;
            for (a = n.index; a < t.length; a++) {
                switch (t.charCodeAt(a)) {
                    case 34:
                        i = "&quot;";
                        break;
                    case 38:
                        i = "&amp;";
                        break;
                    case 39:
                        i = "&#39;";
                        break;
                    case 60:
                        i = "&lt;";
                        break;
                    case 62:
                        i = "&gt;";
                        break;
                    default:
                        continue
                }
                s !== a && (o += t.substring(s, a)), s = a + 1, o += i
            }
            return s !== a ? o + t.substring(s, a) : o
        }
        var r = /["'&<>]/;
        e.exports = n
    }, function(e, t, n) {
        var r = n(9),
            i = n(7);
        e.exports = function() {
            var e = r.newEl("canvas"),
                t = null;
            return function(n) {
                null == t && (t = e.getContext("2d"));
                var r = i.canvasRatio(),
                    o = n.root;
                e.width = r * o.properties.width, e.height = r * o.properties.height, t.textBaseline = "middle";
                var a = o.children.holderBg,
                    s = r * a.width,
                    l = r * a.height,
                    h = 2,
                    u = h / 2;
                t.fillStyle = a.properties.fill, t.fillRect(0, 0, s, l), a.properties.outline && (t.strokeStyle = a.properties.outline.fill, t.lineWidth = a.properties.outline.width, t.moveTo(u, u), t.lineTo(s - u, u), t.lineTo(s - u, l - u), t.lineTo(u, l - u), t.lineTo(u, u), t.moveTo(0, u), t.lineTo(s, l - u), t.moveTo(0, l - u), t.lineTo(s, u), t.stroke());
                var c = o.children.holderTextGroup;
                t.font = c.properties.font.weight + " " + r * c.properties.font.size + c.properties.font.units + " " + c.properties.font.family + ", monospace", t.fillStyle = c.properties.fill;
                for (var d in c.children) {
                    var f = c.children[d];
                    for (var p in f.children) {
                        var g = f.children[p],
                            m = r * (c.x + f.x + g.x),
                            v = r * (c.y + f.y + g.y + c.properties.leading / 2);
                        t.fillText(g.properties.text, m, v)
                    }
                }
                return e.toDataURL("image/png")
            }
        }()
    }])
}),
function(e, t) {
    t && (Holder = e.Holder);
}(this, "undefined" != typeof Meteor && "undefined" != typeof Package);