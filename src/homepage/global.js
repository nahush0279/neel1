window.Modernizr = function(e, t, n) {
    function r(e) {
        b.cssText = e
    }
    function i(e, t) {
        return r(C.join(e + ";") + (t || ""))
    }
    function o(e, t) {
        return typeof e === t
    }
    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function s(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!a(i, "-") && b[i] !== n)
                return "pfx" == t ? i : !0
        }
        return !1
    }
    function u(e, t, r) {
        for (var i in e) {
            var a = t[e[i]];
            if (a !== n)
                return r === !1 ? e[i] : o(a, "function") ? a.bind(r || t) : a
        }
        return !1
    }
    function l(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1)
          , i = (e + " " + N.join(r + " ") + r).split(" ");
        return o(t, "string") || o(t, "undefined") ? s(i, t) : (i = (e + " " + k.join(r + " ") + r).split(" "),
        u(i, t, n))
    }
    function c() {
        h.input = function(n) {
            for (var r = 0, i = n.length; i > r; r++)
                L[n[r]] = n[r]in x;
            return L.list && (L.list = !!t.createElement("datalist") && !!e.HTMLDataListElement),
            L
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        h.inputtypes = function(e) {
            for (var r, i, o, a = 0, s = e.length; s > a; a++)
                x.setAttribute("type", i = e[a]),
                r = "text" !== x.type,
                r && (x.value = w,
                x.style.cssText = "position:absolute;visibility:hidden;",
                /^range$/.test(i) && x.style.WebkitAppearance !== n ? (g.appendChild(x),
                o = t.defaultView,
                r = o.getComputedStyle && "textfield" !== o.getComputedStyle(x, null).WebkitAppearance && 0 !== x.offsetHeight,
                g.removeChild(x)) : /^(search|tel)$/.test(i) || (r = /^(url|email)$/.test(i) ? x.checkValidity && x.checkValidity() === !1 : x.value != w)),
                A[e[a]] = !!r;
            return A
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d, f, p = "2.8.0", h = {}, m = !0, g = t.documentElement, v = "modernizr", y = t.createElement(v), b = y.style, x = t.createElement("input"), w = ":)", T = {}.toString, C = " -webkit- -moz- -o- -ms- ".split(" "), E = "Webkit Moz O ms", N = E.split(" "), k = E.toLowerCase().split(" "), S = {
        svg: "http://www.w3.org/2000/svg"
    }, j = {}, A = {}, L = {}, D = [], M = D.slice, H = function(e, n, r, i) {
        var o, a, s, u, l = t.createElement("div"), c = t.body, d = c || t.createElement("body");
        if (parseInt(r, 10))
            for (; r--; )
                s = t.createElement("div"),
                s.id = i ? i[r] : v + (r + 1),
                l.appendChild(s);
        return o = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""),
        l.id = v,
        (c ? l : d).innerHTML += o,
        d.appendChild(l),
        c || (d.style.background = "",
        d.style.overflow = "hidden",
        u = g.style.overflow,
        g.style.overflow = "hidden",
        g.appendChild(d)),
        a = n(l, e),
        c ? l.parentNode.removeChild(l) : (d.parentNode.removeChild(d),
        g.style.overflow = u),
        !!a
    }, F = function(t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n)
            return n(t) && n(t).matches || !1;
        var r;
        return H("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
            r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
        }),
        r
    }, _ = function() {
        function e(e, i) {
            i = i || t.createElement(r[e] || "div"),
            e = "on" + e;
            var a = e in i;
            return a || (i.setAttribute || (i = t.createElement("div")),
            i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""),
            a = o(i[e], "function"),
            o(i[e], "undefined") || (i[e] = n),
            i.removeAttribute(e))),
            i = null,
            a
        }
        var r = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e
    }(), O = {}.hasOwnProperty;
    f = o(O, "undefined") || o(O.call, "undefined") ? function(e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined")
    }
    : function(e, t) {
        return O.call(e, t)
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t)
            throw new TypeError;
        var n = M.call(arguments, 1)
          , r = function() {
            if (this instanceof r) {
                var i = function() {};
                i.prototype = t.prototype;
                var o = new i
                  , a = t.apply(o, n.concat(M.call(arguments)));
                return Object(a) === a ? a : o
            }
            return t.apply(e, n.concat(M.call(arguments)))
        };
        return r
    }
    ),
    j.flexbox = function() {
        return l("flexWrap")
    }
    ,
    j.flexboxlegacy = function() {
        return l("boxDirection")
    }
    ,
    j.canvas = function() {
        var e = t.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d")
    }
    ,
    j.canvastext = function() {
        return !!h.canvas && !!o(t.createElement("canvas").getContext("2d").fillText, "function")
    }
    ,
    j.webgl = function() {
        return !!e.WebGLRenderingContext
    }
    ,
    j.touch = function() {
        var n;
        return "ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : H(["@media (", C.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = 9 === e.offsetTop
        }),
        n
    }
    ,
    j.geolocation = function() {
        return "geolocation"in navigator
    }
    ,
    j.postmessage = function() {
        return !!e.postMessage
    }
    ,
    j.websqldatabase = function() {
        return !!e.openDatabase
    }
    ,
    j.indexedDB = function() {
        return !!l("indexedDB", e)
    }
    ,
    j.hashchange = function() {
        return _("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }
    ,
    j.history = function() {
        return !!e.history && !!history.pushState
    }
    ,
    j.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable"in e || "ondragstart"in e && "ondrop"in e
    }
    ,
    j.websockets = function() {
        return "WebSocket"in e || "MozWebSocket"in e
    }
    ,
    j.rgba = function() {
        return r("background-color:rgba(150,255,150,.5)"),
        a(b.backgroundColor, "rgba")
    }
    ,
    j.hsla = function() {
        return r("background-color:hsla(120,40%,100%,.5)"),
        a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
    }
    ,
    j.multiplebgs = function() {
        return r("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(b.background)
    }
    ,
    j.backgroundsize = function() {
        return l("backgroundSize")
    }
    ,
    j.borderimage = function() {
        return l("borderImage")
    }
    ,
    j.borderradius = function() {
        return l("borderRadius")
    }
    ,
    j.boxshadow = function() {
        return l("boxShadow")
    }
    ,
    j.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }
    ,
    j.opacity = function() {
        return i("opacity:.55"),
        /^0.55$/.test(b.opacity)
    }
    ,
    j.cssanimations = function() {
        return l("animationName")
    }
    ,
    j.csscolumns = function() {
        return l("columnCount")
    }
    ,
    j.cssgradients = function() {
        var e = "background-image:"
          , t = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
          , n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + C.join(n + e)).slice(0, -e.length)),
        a(b.backgroundImage, "gradient")
    }
    ,
    j.cssreflections = function() {
        return l("boxReflect")
    }
    ,
    j.csstransforms = function() {
        return !!l("transform")
    }
    ,
    j.csstransforms3d = function() {
        var e = !!l("perspective");
        return e && "webkitPerspective"in g.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }),
        e
    }
    ,
    j.csstransitions = function() {
        return l("transition")
    }
    ,
    j.fontface = function() {
        var e;
        return H('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
            var i = t.getElementById("smodernizr")
              , o = i.sheet || i.styleSheet
              , a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0])
        }),
        e
    }
    ,
    j.generatedcontent = function() {
        var e;
        return H(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = t.offsetHeight >= 3
        }),
        e
    }
    ,
    j.video = function() {
        var e = t.createElement("video")
          , n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n),
            n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {}
        return n
    }
    ,
    j.audio = function() {
        var e = t.createElement("audio")
          , n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n),
            n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) {}
        return n
    }
    ,
    j.localstorage = function() {
        try {
            return localStorage.setItem(v, v),
            localStorage.removeItem(v),
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    j.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v),
            sessionStorage.removeItem(v),
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    j.webworkers = function() {
        return !!e.Worker
    }
    ,
    j.applicationcache = function() {
        return !!e.applicationCache
    }
    ,
    j.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(S.svg, "svg").createSVGRect
    }
    ,
    j.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>",
        (e.firstChild && e.firstChild.namespaceURI) == S.svg
    }
    ,
    j.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(T.call(t.createElementNS(S.svg, "animate")))
    }
    ,
    j.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(T.call(t.createElementNS(S.svg, "clipPath")))
    }
    ;
    for (var q in j)
        f(j, q) && (d = q.toLowerCase(),
        h[d] = j[q](),
        D.push((h[d] ? "" : "no-") + d));
    return h.input || c(),
    h.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var r in e)
                f(e, r) && h.addTest(r, e[r]);
        else {
            if (e = e.toLowerCase(),
            h[e] !== n)
                return h;
            t = "function" == typeof t ? t() : t,
            "undefined" != typeof m && m && (g.className += " " + (t ? "" : "no-") + e),
            h[e] = t
        }
        return h
    }
    ,
    r(""),
    y = x = null,
    function(e, t) {
        function n(e, t) {
            var n = e.createElement("p")
              , r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            r.insertBefore(n.lastChild, r.firstChild)
        }
        function r() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function i(e) {
            var t = v[e[m]];
            return t || (t = {},
            g++,
            e[m] = g,
            v[g] = t),
            t
        }
        function o(e, n, r) {
            if (n || (n = t),
            c)
                return n.createElement(e);
            r || (r = i(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e),
            !o.canHaveChildren || p.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }
        function a(e, n) {
            if (e || (e = t),
            c)
                return e.createDocumentFragment();
            n = n || i(e);
            for (var o = n.frag.cloneNode(), a = 0, s = r(), u = s.length; u > a; a++)
                o.createElement(s[a]);
            return o
        }
        function s(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(n) {
                return y.shivMethods ? o(n, e, t) : t.createElem(n)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(y, t.frag)
        }
        function u(e) {
            e || (e = t);
            var r = i(e);
            return y.shivCSS && !l && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            c || s(e, r),
            e
        }
        var l, c, d = "3.7.0", f = e.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, m = "_html5shiv", g = 0, v = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                l = "hidden"in e,
                c = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                l = !0,
                c = !0
            }
        }();
        var y = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: d,
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: c,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: u,
            createElement: o,
            createDocumentFragment: a
        };
        e.html5 = y,
        u(t)
    }(this, t),
    h._version = p,
    h._prefixes = C,
    h._domPrefixes = k,
    h._cssomPrefixes = N,
    h.mq = F,
    h.hasEvent = _,
    h.testProp = function(e) {
        return s([e])
    }
    ,
    h.testAllProps = l,
    h.testStyles = H,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + D.join(" ") : ""),
    h
}(this, this.document),
function(e, t, n) {
    function r(e) {
        return "[object Function]" == g.call(e)
    }
    function i(e) {
        return "string" == typeof e
    }
    function o() {}
    function a(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }
    function s() {
        var e = v.shift();
        y = 1,
        e ? e.t ? h(function() {
            ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(),
        s()) : y = 0
    }
    function u(e, n, r, i, o, u, l) {
        function c(t) {
            if (!p && a(d.readyState) && (b.r = p = 1,
            !y && s(),
            d.onload = d.onreadystatechange = null,
            t)) {
                "img" != e && h(function() {
                    w.removeChild(d)
                }, 50);
                for (var r in k[n])
                    k[n].hasOwnProperty(r) && k[n][r].onload()
            }
        }
        var l = l || f.errorTimeout
          , d = t.createElement(e)
          , p = 0
          , g = 0
          , b = {
            t: r,
            s: n,
            e: o,
            a: u,
            x: l
        };
        1 === k[n] && (g = 1,
        k[n] = []),
        "object" == e ? d.data = n : (d.src = n,
        d.type = e),
        d.width = d.height = "0",
        d.onerror = d.onload = d.onreadystatechange = function() {
            c.call(this, g)
        }
        ,
        v.splice(i, 0, b),
        "img" != e && (g || 2 === k[n] ? (w.insertBefore(d, x ? null : m),
        h(c, l)) : k[n].push(d))
    }
    function l(e, t, n, r, o) {
        return y = 0,
        t = t || "j",
        i(e) ? u("c" == t ? C : T, e, t, this.i++, n, r, o) : (v.splice(this.i++, 0, e),
        1 == v.length && s()),
        this
    }
    function c() {
        var e = f;
        return e.loader = {
            load: l,
            i: 0
        },
        e
    }
    var d, f, p = t.documentElement, h = e.setTimeout, m = t.getElementsByTagName("script")[0], g = {}.toString, v = [], y = 0, b = "MozAppearance"in p.style, x = b && !!t.createRange().compareNode, w = x ? p : m.parentNode, p = e.opera && "[object Opera]" == g.call(e.opera), p = !!t.attachEvent && !p, T = b ? "object" : p ? "script" : "img", C = p ? "script" : T, E = Array.isArray || function(e) {
        return "[object Array]" == g.call(e)
    }
    , N = [], k = {}, S = {
        timeout: function(e, t) {
            return t.length && (e.timeout = t[0]),
            e
        }
    };
    f = function(e) {
        function t(e) {
            var t, n, r, e = e.split("!"), i = N.length, o = e.pop(), a = e.length, o = {
                url: o,
                origUrl: o,
                prefixes: e
            };
            for (n = 0; a > n; n++)
                r = e[n].split("="),
                (t = S[r.shift()]) && (o = t(o, r));
            for (n = 0; i > n; n++)
                o = N[n](o);
            return o
        }
        function a(e, i, o, a, s) {
            var u = t(e)
              , l = u.autoCallback;
            u.url.split(".").pop().split("?").shift(),
            u.bypass || (i && (i = r(i) ? i : i[e] || i[a] || i[e.split("/").pop().split("?")[0]]),
            u.instead ? u.instead(e, i, o, a, s) : (k[u.url] ? u.noexec = !0 : k[u.url] = 1,
            o.load(u.url, u.forceCSS || !u.forceJS && "css" == u.url.split(".").pop().split("?").shift() ? "c" : n, u.noexec, u.attrs, u.timeout),
            (r(i) || r(l)) && o.load(function() {
                c(),
                i && i(u.origUrl, s, a),
                l && l(u.origUrl, s, a),
                k[u.url] = 2
            })))
        }
        function s(e, t) {
            function n(e, n) {
                if (e) {
                    if (i(e))
                        n || (d = function() {
                            var e = [].slice.call(arguments);
                            f.apply(this, e),
                            p()
                        }
                        ),
                        a(e, d, t, 0, l);
                    else if (Object(e) === e)
                        for (u in s = function() {
                            var t, n = 0;
                            for (t in e)
                                e.hasOwnProperty(t) && n++;
                            return n
                        }(),
                        e)
                            e.hasOwnProperty(u) && (!n && !--s && (r(d) ? d = function() {
                                var e = [].slice.call(arguments);
                                f.apply(this, e),
                                p()
                            }
                            : d[u] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t),
                                    p()
                                }
                            }(f[u])),
                            a(e[u], d, t, u, l))
                } else
                    !n && p()
            }
            var s, u, l = !!e.test, c = e.load || e.both, d = e.callback || o, f = d, p = e.complete || o;
            n(l ? e.yep : e.nope, !!c),
            c && n(c)
        }
        var u, l, d = this.yepnope.loader;
        if (i(e))
            a(e, 0, d, 0);
        else if (E(e))
            for (u = 0; u < e.length; u++)
                l = e[u],
                i(l) ? a(l, 0, d, 0) : E(l) ? f(l) : Object(l) === l && s(l, d);
        else
            Object(e) === e && s(e, d)
    }
    ,
    f.addPrefix = function(e, t) {
        S[e] = t
    }
    ,
    f.addFilter = function(e) {
        N.push(e)
    }
    ,
    f.errorTimeout = 1e4,
    null == t.readyState && t.addEventListener && (t.readyState = "loading",
    t.addEventListener("DOMContentLoaded", d = function() {
        t.removeEventListener("DOMContentLoaded", d, 0),
        t.readyState = "complete"
    }
    , 0)),
    e.yepnope = c(),
    e.yepnope.executeStack = s,
    e.yepnope.injectJs = function(e, n, r, i, u, l) {
        var c, d, p = t.createElement("script"), i = i || f.errorTimeout;
        p.src = e;
        for (d in r)
            p.setAttribute(d, r[d]);
        n = l ? s : n || o,
        p.onreadystatechange = p.onload = function() {
            !c && a(p.readyState) && (c = 1,
            n(),
            p.onload = p.onreadystatechange = null)
        }
        ,
        h(function() {
            c || (c = 1,
            n(1))
        }, i),
        u ? p.onload() : m.parentNode.insertBefore(p, m)
    }
    ,
    e.yepnope.injectCss = function(e, n, r, i, a, u) {
        var l, i = t.createElement("link"), n = u ? s : n || o;
        i.href = e,
        i.rel = "stylesheet",
        i.type = "text/css";
        for (l in r)
            i.setAttribute(l, r[l]);
        a || (m.parentNode.insertBefore(i, m),
        h(n, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
,
Modernizr.addTest("bgpositionxy", function() {
    return Modernizr.testStyles("#modernizr {background-position: 3px 5px;}", function(e) {
        var t = window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle
          , n = "3px" == t.backgroundPositionX || "3px" == t["background-position-x"]
          , r = "5px" == t.backgroundPositionY || "5px" == t["background-position-y"];
        return n && r
    })
}),
Modernizr.addTest("csscalc", function() {
    var e = "width:"
      , t = "calc(10px);"
      , n = document.createElement("div");
    return n.style.cssText = e + Modernizr._prefixes.join(t + e),
    !!n.style.length
}),
Modernizr.testStyles("#modernizr{background-size:cover}", function(e) {
    var t = window.getComputedStyle ? window.getComputedStyle(e, null) : e.currentStyle;
    Modernizr.addTest("bgsizecover", "cover" == t.backgroundSize)
}),
Modernizr.addTest("boxsizing", function() {
    return Modernizr.testAllProps("boxSizing") && (void 0 === document.documentMode || document.documentMode > 7)
}),
function() {
    function e(e) {
        return window.getComputedStyle ? getComputedStyle(e, null).getPropertyValue("background") : e.currentStyle.background
    }
    Modernizr.testStyles(" #modernizr { background-repeat: round; } ", function(t, n) {
        Modernizr.addTest("bgrepeatround", "round" == e(t))
    }),
    Modernizr.testStyles(" #modernizr { background-repeat: space; } ", function(t, n) {
        Modernizr.addTest("bgrepeatspace", "space" == e(t))
    })
}(),
Modernizr.addTest("cubicbezierrange", function() {
    var e = document.createElement("div");
    return e.style.cssText = Modernizr._prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),
    !!e.style.length
}),
Modernizr.testStyles(" #modernizr { display: run-in; } ", function(e, t) {
    var n = window.getComputedStyle ? getComputedStyle(e, null).getPropertyValue("display") : e.currentStyle.display;
    Modernizr.addTest("display-runin", "run-in" == n)
}),
Modernizr.addTest("display-table", function() {
    var e, t = window.document, n = t.documentElement, r = t.createElement("div"), i = t.createElement("div"), o = t.createElement("div");
    return r.style.cssText = "display: table",
    i.style.cssText = o.style.cssText = "display: table-cell; padding: 10px",
    r.appendChild(i),
    r.appendChild(o),
    n.insertBefore(r, n.firstChild),
    e = i.offsetLeft < o.offsetLeft,
    n.removeChild(r),
    e
}),
Modernizr.addTest("cssresize", Modernizr.testAllProps("resize")),
Modernizr.addTest("scriptasync", "async"in document.createElement("script")),
Modernizr.addTest("scriptdefer", "defer"in document.createElement("script")),
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length
          , n = oe.type(e);
        return "function" === n || oe.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (oe.isFunction(t))
            return oe.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return oe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (pe.test(t))
                return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return oe.inArray(e, t) >= 0 !== n
        })
    }
    function i(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function o(e) {
        var t = we[e] = {};
        return oe.each(e.match(xe) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function a() {
        me.addEventListener ? (me.removeEventListener("DOMContentLoaded", s, !1),
        e.removeEventListener("load", s, !1)) : (me.detachEvent("onreadystatechange", s),
        e.detachEvent("onload", s))
    }
    function s() {
        (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (a(),
        oe.ready())
    }
    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(ke, "-$1").toLowerCase();
            if (n = e.getAttribute(r),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? oe.parseJSON(n) : n
                } catch (i) {}
                oe.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function c(e, t, n, r) {
        if (oe.acceptData(e)) {
            var i, o, a = oe.expando, s = e.nodeType, u = s ? oe.cache : e, l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t)
                return l || (l = s ? e[a] = V.pop() || oe.guid++ : a),
                u[l] || (u[l] = s ? {} : {
                    toJSON: oe.noop
                }),
                ("object" == typeof t || "function" == typeof t) && (r ? u[l] = oe.extend(u[l], t) : u[l].data = oe.extend(u[l].data, t)),
                o = u[l],
                r || (o.data || (o.data = {}),
                o = o.data),
                void 0 !== n && (o[oe.camelCase(t)] = n),
                "string" == typeof t ? (i = o[t],
                null == i && (i = o[oe.camelCase(t)])) : i = o,
                i
        }
    }
    function d(e, t, n) {
        if (oe.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? oe.cache : e, s = o ? e[oe.expando] : oe.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in r ? t = [t] : (t = oe.camelCase(t),
                    t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    for (; i--; )
                        delete r[t[i]];
                    if (n ? !l(r) : !oe.isEmptyObject(r))
                        return
                }
                (n || (delete a[s].data,
                l(a[s]))) && (o ? oe.cleanData([e], !0) : re.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    function f() {
        return !0
    }
    function p() {
        return !1
    }
    function h() {
        try {
            return me.activeElement
        } catch (e) {}
    }
    function m(e) {
        var t = qe.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function g(e, t) {
        var n, r, i = 0, o = typeof e.getElementsByTagName !== Ee ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ee ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [],
            n = e.childNodes || e; null != (r = n[i]); i++)
                !t || oe.nodeName(r, t) ? o.push(r) : oe.merge(o, g(r, t));
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], o) : o
    }
    function v(e) {
        De.test(e.type) && (e.defaultChecked = e.checked)
    }
    function y(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function b(e) {
        return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function x(e) {
        var t = Ve.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            oe._data(n, "globalEval", !t || oe._data(t[r], "globalEval"))
    }
    function T(e, t) {
        if (1 === t.nodeType && oe.hasData(e)) {
            var n, r, i, o = oe._data(e), a = oe._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (r = 0,
                    i = s[n].length; i > r; r++)
                        oe.event.add(t, n, s[n][r])
            }
            a.data && (a.data = oe.extend({}, a.data))
        }
    }
    function C(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !re.noCloneEvent && t[oe.expando]) {
                i = oe._data(t);
                for (r in i.events)
                    oe.removeEvent(t, r, i.handle);
                t.removeAttribute(oe.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text,
            x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            re.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && De.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function E(t, n) {
        var r = oe(n.createElement(t)).appendTo(n.body)
          , i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : oe.css(r[0], "display");
        return r.detach(),
        i
    }
    function N(e) {
        var t = me
          , n = et[e];
        return n || (n = E(e, t),
        "none" !== n && n || (Ze = (Ze || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = (Ze[0].contentWindow || Ze[0].contentDocument).document,
        t.write(),
        t.close(),
        n = E(e, t),
        Ze.detach()),
        et[e] = n),
        n
    }
    function k(e, t) {
        return {
            get: function() {
                var n = e();
                return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }
    function S(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = pt.length; i--; )
            if (t = pt[i] + n,
            t in e)
                return t;
        return r
    }
    function j(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
            r = e[a],
            r.style && (o[a] = oe._data(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && Ae(r) && (o[a] = oe._data(r, "olddisplay", N(r.nodeName)))) : o[a] || (i = Ae(r),
            (n && "none" !== n || !i) && oe._data(r, "olddisplay", i ? n : oe.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function A(e, t, n) {
        var r = lt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function L(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += oe.css(e, n + je[o], !0, i)),
            r ? ("content" === n && (a -= oe.css(e, "padding" + je[o], !0, i)),
            "margin" !== n && (a -= oe.css(e, "border" + je[o] + "Width", !0, i))) : (a += oe.css(e, "padding" + je[o], !0, i),
            "padding" !== n && (a += oe.css(e, "border" + je[o] + "Width", !0, i)));
        return a
    }
    function D(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = tt(e)
          , a = re.boxSizing() && "border-box" === oe.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = nt(e, t, o),
            (0 > i || null == i) && (i = e.style[t]),
            it.test(i))
                return i;
            r = a && (re.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + L(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function M(e, t, n, r, i) {
        return new M.prototype.init(e,t,n,r,i)
    }
    function H() {
        return setTimeout(function() {
            ht = void 0
        }),
        ht = oe.now()
    }
    function F(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = je[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function _(e, t, n) {
        for (var r, i = (xt[t] || []).concat(xt["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function O(e, t, n) {
        var r, i, o, a, s, u, l, c, d = this, f = {}, p = e.style, h = e.nodeType && Ae(e), m = oe._data(e, "fxshow");
        n.queue || (s = oe._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        u = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || u()
        }
        ),
        s.unqueued++,
        d.always(function() {
            d.always(function() {
                s.unqueued--,
                oe.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        l = oe.css(e, "display"),
        c = N(e.nodeName),
        "none" === l && (l = c),
        "inline" === l && "none" === oe.css(e, "float") && (re.inlineBlockNeedsLayout && "inline" !== c ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        re.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            gt.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r])
                        continue;
                    h = !0
                }
                f[r] = m && m[r] || oe.style(e, r)
            }
        if (!oe.isEmptyObject(f)) {
            m ? "hidden"in m && (h = m.hidden) : m = oe._data(e, "fxshow", {}),
            o && (m.hidden = !h),
            h ? oe(e).show() : d.done(function() {
                oe(e).hide()
            }),
            d.done(function() {
                var t;
                oe._removeData(e, "fxshow");
                for (t in f)
                    oe.style(e, t, f[t])
            });
            for (r in f)
                a = _(h ? m[r] : 0, r, d),
                r in m || (m[r] = a.start,
                h && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function q(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = oe.camelCase(n),
            i = t[r],
            o = e[n],
            oe.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            a = oe.cssHooks[r],
            a && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function z(e, t, n) {
        var r, i, o = 0, a = bt.length, s = oe.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = ht || H(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)
                l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
            1 > o && u ? n : (s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: oe.extend({}, t),
            opts: oe.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ht || H(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = oe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (q(c, l.opts.specialEasing); a > o; o++)
            if (r = bt[o].call(l, e, c, l.opts))
                return r;
        return oe.map(c, _, l),
        oe.isFunction(l.opts.start) && l.opts.start.call(e, l),
        oe.fx.timer(oe.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function P(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(xe) || [];
            if (oe.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function B(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0,
            oe.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                i(l),
                !1)
            }),
            u
        }
        var o = {}
          , a = e === It;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function $(e, t) {
        var n, r, i = oe.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && oe.extend(!0, e, n),
        e
    }
    function R(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o),
        n[o]) : void 0
    }
    function W(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o],
                    !a)
                        for (i in l)
                            if (s = i.split(" "),
                            s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function I(e, t, n, r) {
        var i;
        if (oe.isArray(t))
            oe.each(t, function(t, i) {
                n || Vt.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== oe.type(t))
            r(e, t);
        else
            for (i in t)
                I(e + "[" + i + "]", t[i], n, r)
    }
    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function Q() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function U(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var V = []
      , J = V.slice
      , G = V.concat
      , Y = V.push
      , K = V.indexOf
      , Z = {}
      , ee = Z.toString
      , te = Z.hasOwnProperty
      , ne = "".trim
      , re = {}
      , ie = "1.11.0"
      , oe = function(e, t) {
        return new oe.fn.init(e,t)
    }
      , ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , se = /^-ms-/
      , ue = /-([\da-z])/gi
      , le = function(e, t) {
        return t.toUpperCase()
    };
    oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return oe.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Y,
        sort: V.sort,
        splice: V.splice
    },
    oe.extend = oe.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || oe.isFunction(a) || (a = {}),
        s === u && (a = this,
        s--); u > s; s++)
            if (null != (i = arguments[s]))
                for (r in i)
                    e = a[r],
                    n = i[r],
                    a !== n && (l && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1,
                    o = e && oe.isArray(e) ? e : []) : o = e && oe.isPlainObject(e) ? e : {},
                    a[r] = oe.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }
    ,
    oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === oe.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e))
                return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (re.ownLast)
                for (t in e)
                    return te.call(e, t);
            for (t in e)
                ;
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && oe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(ue, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0, a = e.length, s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r),
                    i !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (i = t.apply(e[o], r),
                        i === !1)
                            break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]),
                i !== !1); o++)
                    ;
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]),
                    i === !1)
                        break;
            return e
        },
        trim: ne && !ne.call("\ufeff ") ? function(e) {
            return null == e ? "" : ne.call(e)
        }
        : function(e) {
            return null == e ? "" : (e + "").replace(ae, "")
        }
        ,
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : Y.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (K)
                    return K.call(t, e, n);
                for (r = t.length,
                n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; )
                e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r]; )
                    e[i++] = t[r++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
                r = !t(e[o], o),
                r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0, a = e.length, s = n(e), u = [];
            if (s)
                for (; a > o; o++)
                    i = t(e[o], o, r),
                    null != i && u.push(i);
            else
                for (o in e)
                    i = t(e[o], o, r),
                    null != i && u.push(i);
            return G.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t],
            t = e,
            e = i),
            oe.isFunction(e) ? (n = J.call(arguments, 2),
            r = function() {
                return e.apply(t || this, n.concat(J.call(arguments)))
            }
            ,
            r.guid = e.guid = e.guid || oe.guid++,
            r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: re
    }),
    oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, d, h, m, g;
            if ((t ? t.ownerDocument || t : B) !== M && D(t),
            t = t || M,
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (s = t.nodeType) && 9 !== s)
                return [];
            if (F && !r) {
                if (i = ye.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a),
                            !o || !o.parentNode)
                                return n;
                            if (o.id === a)
                                return n.push(o),
                                n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && z(t, o) && o.id === a)
                            return n.push(o),
                            n
                    } else {
                        if (i[2])
                            return Z.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((a = i[3]) && C.getElementsByClassName && t.getElementsByClassName)
                            return Z.apply(n, t.getElementsByClassName(a)),
                            n
                    }
                if (C.qsa && (!_ || !_.test(e))) {
                    if (h = d = P,
                    m = t,
                    g = 9 === s && e,
                    1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = f(e),
                        (d = t.getAttribute("id")) ? h = d.replace(xe, "\\$&") : t.setAttribute("id", h),
                        h = "[id='" + h + "'] ",
                        u = l.length; u--; )
                            l[u] = h + p(l[u]);
                        m = be.test(e) && c(t.parentNode) || t,
                        g = l.join(",")
                    }
                    if (g)
                        try {
                            return Z.apply(n, m.querySelectorAll(g)),
                            n
                        } catch (v) {} finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return w(e.replace(ue, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > E.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[P] = !0,
            e
        }
        function i(e) {
            var t = M.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--; )
                E.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }
        function d() {}
        function f(e, n) {
            var r, i, o, a, s, u, l, c = I[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e,
            u = [],
            l = E.preFilter; s; ) {
                (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                r = !1,
                (i = ce.exec(s)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }),
                s = s.slice(r.length));
                for (a in E.filter)
                    !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : I(e, u).slice(0)
        }
        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function h(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , o = R++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
            : function(t, n, a) {
                var s, u, l = [$, o];
                if (a) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if (u = t[P] || (t[P] = {}),
                            (s = u[r]) && s[0] === $ && s[1] === o)
                                return l[2] = s[2];
                            if (u[r] = l,
                            l[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function m(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                l && t.push(s));
            return a
        }
        function v(e, t, n, i, o, a) {
            return i && !i[P] && (i = v(i)),
            o && !o[P] && (o = v(o, a)),
            r(function(r, a, s, u) {
                var l, c, d, f = [], p = [], h = a.length, m = r || x(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? m : g(m, f, e, s, u), y = n ? o || (r ? e : h || i) ? [] : a : v;
                if (n && n(v, y, s, u),
                i)
                    for (l = g(y, p),
                    i(l, [], s, u),
                    c = l.length; c--; )
                        (d = l[c]) && (y[p[c]] = !(v[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [],
                            c = y.length; c--; )
                                (d = y[c]) && l.push(v[c] = d);
                            o(null, y = [], l, u)
                        }
                        for (c = y.length; c--; )
                            (d = y[c]) && (l = o ? te.call(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                    }
                } else
                    y = g(y === a ? y.splice(h, y.length) : y),
                    o ? o(null, a, y, u) : Z.apply(a, y)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = E.relative[e[0].type], a = o || E.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                return e === t
            }, a, !0), l = h(function(e) {
                return te.call(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
                return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }
            ]; i > s; s++)
                if (n = E.relative[e[s].type])
                    c = [h(m(c), n)];
                else {
                    if (n = E.filter[e[s].type].apply(null, e[s].matches),
                    n[P]) {
                        for (r = ++s; i > r && !E.relative[e[r].type]; r++)
                            ;
                        return v(s > 1 && m(c), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return m(c)
        }
        function b(e, n) {
            var i = n.length > 0
              , o = e.length > 0
              , a = function(r, a, s, u, l) {
                var c, d, f, p = 0, h = "0", m = r && [], v = [], y = j, b = r || o && E.find.TAG("*", l), x = $ += null == y ? 1 : Math.random() || .1, w = b.length;
                for (l && (j = a !== M && a); h !== w && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (d = 0; f = e[d++]; )
                            if (f(c, a, s)) {
                                u.push(c);
                                break
                            }
                        l && ($ = x)
                    }
                    i && ((c = !f && c) && p--,
                    r && m.push(c))
                }
                if (p += h,
                i && h !== p) {
                    for (d = 0; f = n[d++]; )
                        f(m, v, a, s);
                    if (r) {
                        if (p > 0)
                            for (; h--; )
                                m[h] || v[h] || (v[h] = Y.call(u));
                        v = g(v)
                    }
                    Z.apply(u, v),
                    l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                }
                return l && ($ = x,
                j = y),
                m
            };
            return i ? r(a) : a
        }
        function x(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function w(e, t, n, r) {
            var i, o, a, s, u, l = f(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0),
                o.length > 2 && "ID" === (a = o[0]).type && C.getById && 9 === t.nodeType && F && E.relative[o[1].type]) {
                    if (t = (E.find.ID(a.matches[0].replace(we, Te), t) || [])[0],
                    !t)
                        return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !E.relative[s = a.type]); )
                    if ((u = E.find[s]) && (r = u(a.matches[0].replace(we, Te), be.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        e = r.length && p(o),
                        !e)
                            return Z.apply(n, r),
                            n;
                        break
                    }
            }
            return S(e, l)(r, t, !F, n, be.test(e) && c(t.parentNode) || t),
            n
        }
        var T, C, E, N, k, S, j, A, L, D, M, H, F, _, O, q, z, P = "sizzle" + -new Date, B = e.document, $ = 0, R = 0, W = n(), I = n(), X = n(), Q = function(e, t) {
            return e === t && (L = !0),
            0
        }, U = "undefined", V = 1 << 31, J = {}.hasOwnProperty, G = [], Y = G.pop, K = G.push, Z = G.push, ee = G.slice, te = G.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", re = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"), ae = "\\[" + re + "*(" + ie + ")" + re + "*(?:([*^$|!~]?=)" + re + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + re + "*\\]", se = ":(" + ie + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)", ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$","g"), le = new RegExp("^" + re + "*," + re + "*"), ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"), de = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]","g"), fe = new RegExp(se), pe = new RegExp("^" + oe + "$"), he = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ae),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ne + ")$","i"),
            needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)","i")
        }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, xe = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)","ig"), Te = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
        try {
            Z.apply(G = ee.call(B.childNodes), B.childNodes),
            G[B.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: G.length ? function(e, t) {
                    K.apply(e, ee.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        C = t.support = {},
        k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        D = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : B, r = n.defaultView;
            return n !== M && 9 === n.nodeType && n.documentElement ? (M = n,
            H = n.documentElement,
            F = !k(n),
            r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                D()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                D()
            })),
            C.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            C.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            C.getElementsByClassName = ve.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            C.getById = i(function(e) {
                return H.appendChild(e).id = P,
                !n.getElementsByName || !n.getElementsByName(P).length
            }),
            C.getById ? (E.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && F) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            E.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete E.find.ID,
            E.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            E.find.TAG = C.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            E.find.CLASS = C.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== U && F ? t.getElementsByClassName(e) : void 0
            }
            ,
            O = [],
            _ = [],
            (C.qsa = ve.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>",
                e.querySelectorAll("[t^='']").length && _.push("[*^$]=" + re + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || _.push("\\[" + re + "*(?:value|" + ne + ")"),
                e.querySelectorAll(":checked").length || _.push(":checked")
            }),
            i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && _.push("name" + re + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                _.push(",.*:")
            })),
            (C.matchesSelector = ve.test(q = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                C.disconnectedMatch = q.call(e, "div"),
                q.call(e, "[s!='']:x"),
                O.push("!=", se)
            }),
            _ = _.length && new RegExp(_.join("|")),
            O = O.length && new RegExp(O.join("|")),
            t = ve.test(H.compareDocumentPosition),
            z = t || ve.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            Q = t ? function(e, t) {
                if (e === t)
                    return L = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & r || !C.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === B && z(B, e) ? -1 : t === n || t.ownerDocument === B && z(B, t) ? 1 : A ? te.call(A, e) - te.call(A, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return L = !0,
                    0;
                var r, i = 0, o = e.parentNode, s = t.parentNode, u = [e], l = [t];
                if (!o || !s)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : A ? te.call(A, e) - te.call(A, t) : 0;
                if (o === s)
                    return a(e, t);
                for (r = e; r = r.parentNode; )
                    u.unshift(r);
                for (r = t; r = r.parentNode; )
                    l.unshift(r);
                for (; u[i] === l[i]; )
                    i++;
                return i ? a(u[i], l[i]) : u[i] === B ? -1 : l[i] === B ? 1 : 0
            }
            ,
            n) : M
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== M && D(e),
            n = n.replace(de, "='$1']"),
            !(!C.matchesSelector || !F || O && O.test(n) || _ && _.test(n)))
                try {
                    var r = q.call(e, n);
                    if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {}
            return t(n, M, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== M && D(e),
            z(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== M && D(e);
            var n = E.attrHandle[t.toLowerCase()]
              , r = n && J.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
            return void 0 !== r ? r : C.attributes || !F ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (L = !C.detectDuplicates,
            A = !C.sortStable && e.slice(0),
            e.sort(Q),
            L) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return A = null,
            e
        }
        ,
        N = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += N(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += N(t);
            return n
        }
        ,
        E = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Te),
                    e[3] = (e[4] || e[5] || "").replace(we, Te),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && fe.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild],
                            a && y) {
                                for (c = g[P] || (g[P] = {}),
                                l = c[e] || [],
                                p = l[0] === $ && l[1],
                                f = l[0] === $ && l[2],
                                d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [$, p, f];
                                        break
                                    }
                            } else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === $)
                                f = l[1];
                            else
                                for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [$, f]),
                                d !== t)); )
                                    ;
                            return f -= i,
                            f === r || f % r === 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                    E.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                            r = te.call(e, i[a]),
                            e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = S(e.replace(ue, "$1"));
                    return i[P] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(we, Te).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !E.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        E.pseudos.nth = E.pseudos.eq;
        for (T in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            E.pseudos[T] = s(T);
        for (T in {
            submit: !0,
            reset: !0
        })
            E.pseudos[T] = u(T);
        return d.prototype = E.filters = E.pseudos,
        E.setFilters = new d,
        S = t.compile = function(e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = f(e)),
                n = t.length; n--; )
                    o = y(t[n]),
                    o[P] ? r.push(o) : i.push(o);
                o = X(e, b(i, r))
            }
            return o
        }
        ,
        C.sortStable = P.split("").sort(Q).join("") === P,
        C.detectDuplicates = !!L,
        D(),
        C.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(M.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        C.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    oe.find = ce,
    oe.expr = ce.selectors,
    oe.expr[":"] = oe.expr.pseudos,
    oe.unique = ce.uniqueSort,
    oe.text = ce.getText,
    oe.isXMLDoc = ce.isXML,
    oe.contains = ce.contains;
    var de = oe.expr.match.needsContext
      , fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , pe = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    oe.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(oe(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (oe.contains(r[t], this))
                            return !0
                }));
            for (t = 0; i > t; t++)
                oe.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? oe.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && de.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var he, me = e.document, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ve = oe.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e),
            !n || !n[1] && t)
                return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof oe ? t[0] : t,
                oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : me, !0)),
                fe.test(n[1]) && oe.isPlainObject(t))
                    for (n in t)
                        oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (r = me.getElementById(n[2]),
            r && r.parentNode) {
                if (r.id !== n[2])
                    return he.find(e);
                this.length = 1,
                this[0] = r
            }
            return this.context = me,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : oe.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        oe.makeArray(e, this))
    }
    ;
    ve.prototype = oe.fn,
    he = oe(me);
    var ye = /^(?:parents|prev(?:Until|All))/
      , be = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    oe.extend({
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !oe(i).is(n)); )
                1 === i.nodeType && r.push(i),
                i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    oe.fn.extend({
        has: function(e) {
            var t, n = oe(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (oe.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = de.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return oe.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return oe.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return oe.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return oe.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return oe.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return oe.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return oe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return oe.sibling(e.firstChild)
        },
        contents: function(e) {
            return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(n, r) {
            var i = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = oe.filter(r, i)),
            this.length > 1 && (be[e] || (i = oe.unique(i)),
            ye.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    });
    var xe = /\S+/g
      , we = {};
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? we[e] || o(e) : oe.extend({}, e);
        var t, n, r, i, a, s, u = [], l = !e.once && [], c = function(o) {
            for (n = e.memory && o,
            r = !0,
            a = s || 0,
            s = 0,
            i = u.length,
            t = !0; u && i > a; a++)
                if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            t = !1,
            u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
        }, d = {
            add: function() {
                if (u) {
                    var r = u.length;
                    !function o(t) {
                        oe.each(t, function(t, n) {
                            var r = oe.type(n);
                            "function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments),
                    t ? i = u.length : n && (s = r,
                    c(n))
                }
                return this
            },
            remove: function() {
                return u && oe.each(arguments, function(e, n) {
                    for (var r; (r = oe.inArray(n, u, r)) > -1; )
                        u.splice(r, 1),
                        t && (i >= r && i--,
                        a >= r && a--)
                }),
                this
            },
            has: function(e) {
                return e ? oe.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                i = 0,
                this
            },
            disable: function() {
                return u = l = n = void 0,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return l = void 0,
                n || d.disable(),
                this
            },
            locked: function() {
                return !l
            },
            fireWith: function(e, n) {
                return !u || r && !l || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                t ? l.push(n) : c(n)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return d
    }
    ,
    oe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return oe.Deferred(function(n) {
                        oe.each(t, function(t, o) {
                            var a = oe.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? oe.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            oe.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0, o = J.call(arguments), a = o.length, s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0, u = 1 === s ? e : oe.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? J.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1)
                for (t = new Array(a),
                n = new Array(a),
                r = new Array(a); a > i; i++)
                    o[i] && oe.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o),
            u.promise()
        }
    });
    var Te;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e),
        this
    }
    ,
    oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!me.body)
                    return setTimeout(oe.ready);
                oe.isReady = !0,
                e !== !0 && --oe.readyWait > 0 || (Te.resolveWith(me, [oe]),
                oe.fn.trigger && oe(me).trigger("ready").off("ready"))
            }
        }
    }),
    oe.ready.promise = function(t) {
        if (!Te)
            if (Te = oe.Deferred(),
            "complete" === me.readyState)
                setTimeout(oe.ready);
            else if (me.addEventListener)
                me.addEventListener("DOMContentLoaded", s, !1),
                e.addEventListener("load", s, !1);
            else {
                me.attachEvent("onreadystatechange", s),
                e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && me.documentElement
                } catch (r) {}
                n && n.doScroll && !function i() {
                    if (!oe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        a(),
                        oe.ready()
                    }
                }()
            }
        return Te.promise(t)
    }
    ;
    var Ce, Ee = "undefined";
    for (Ce in oe(re))
        break;
    re.ownLast = "0" !== Ce,
    re.inlineBlockNeedsLayout = !1,
    oe(function() {
        var e, t, n = me.getElementsByTagName("body")[0];
        n && (e = me.createElement("div"),
        e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
        t = me.createElement("div"),
        n.appendChild(e).appendChild(t),
        typeof t.style.zoom !== Ee && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",
        (re.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)),
        n.removeChild(e),
        e = t = null)
    }),
    function() {
        var e = me.createElement("div");
        if (null == re.deleteExpando) {
            re.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                re.deleteExpando = !1
            }
        }
        e = null
    }(),
    oe.acceptData = function(e) {
        var t = oe.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    }
    ;
    var Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ke = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando],
            !!e && !l(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }),
    oe.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = oe.data(o),
                1 === o.nodeType && !oe._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--; )
                        r = a[n].name,
                        0 === r.indexOf("data-") && (r = oe.camelCase(r.slice(5)),
                        u(o, r, i[r]));
                    oe._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                oe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                oe.data(this, e, t)
            }) : o ? u(o, e, oe.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                oe.removeData(this, e)
            })
        }
    }),
    oe.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue",
            r = oe._data(e, t),
            n && (!r || oe.isArray(n) ? r = oe._data(e, t, oe.makeArray(n)) : r.push(n)),
            r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = oe._queueHooks(e, t)
              , a = function() {
                oe.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return oe._data(e, n) || oe._data(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    oe._removeData(e, t + "queue"),
                    oe._removeData(e, n)
                })
            })
        }
    }),
    oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = oe.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                n = oe._data(o[a], e + "queueHooks"),
                n && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , je = ["Top", "Right", "Bottom", "Left"]
      , Ae = function(e, t) {
        return e = t || e,
        "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
    }
      , Le = oe.access = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === oe.type(n)) {
            i = !0;
            for (s in n)
                oe.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
        oe.isFunction(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(oe(e), n)
        }
        )),
        t))
            for (; u > s; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , De = /^(?:checkbox|radio)$/i;
    !function() {
        var e = me.createDocumentFragment()
          , t = me.createElement("div")
          , n = me.createElement("input");
        if (t.setAttribute("className", "t"),
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a>",
        re.leadingWhitespace = 3 === t.firstChild.nodeType,
        re.tbody = !t.getElementsByTagName("tbody").length,
        re.htmlSerialize = !!t.getElementsByTagName("link").length,
        re.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        e.appendChild(n),
        re.appendChecked = n.checked,
        t.innerHTML = "<textarea>x</textarea>",
        re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        e.appendChild(t),
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        re.noCloneEvent = !0,
        t.attachEvent && (t.attachEvent("onclick", function() {
            re.noCloneEvent = !1
        }),
        t.cloneNode(!0).click()),
        null == re.deleteExpando) {
            re.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                re.deleteExpando = !1
            }
        }
        e = t = n = null
    }(),
    function() {
        var t, n, r = me.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (re[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"),
            re[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Me = /^(?:input|select|textarea)$/i
      , He = /^key/
      , Fe = /^(?:mouse|contextmenu)|click/
      , _e = /^(?:focusinfocus|focusoutblur)$/
      , Oe = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = oe._data(e);
            if (g) {
                for (n.handler && (u = n,
                n = u.handler,
                i = u.selector),
                n.guid || (n.guid = oe.guid++),
                (a = g.events) || (a = g.events = {}),
                (c = g.handle) || (c = g.handle = function(e) {
                    return typeof oe === Ee || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
                }
                ,
                c.elem = e),
                t = (t || "").match(xe) || [""],
                s = t.length; s--; )
                    o = Oe.exec(t[s]) || [],
                    p = m = o[1],
                    h = (o[2] || "").split(".").sort(),
                    p && (l = oe.event.special[p] || {},
                    p = (i ? l.delegateType : l.bindType) || p,
                    l = oe.event.special[p] || {},
                    d = oe.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && oe.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, u),
                    (f = a[p]) || (f = a[p] = [],
                    f.delegateCount = 0,
                    l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))),
                    l.add && (l.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                    oe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = oe.hasData(e) && oe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(xe) || [""],
                l = t.length; l--; )
                    if (s = Oe.exec(t[l]) || [],
                    p = m = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = oe.event.special[p] || {},
                        p = (r ? d.delegateType : d.bindType) || p,
                        f = c[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        u = o = f.length; o--; )
                            a = f[o],
                            !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                            a.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, a));
                        u && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || oe.removeEvent(e, p, g.handle),
                        delete c[p])
                    } else
                        for (p in c)
                            oe.event.remove(e, p + t[l], n, r, !0);
                oe.isEmptyObject(c) && (delete g.handle,
                oe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, d, f = [r || me], p = te.call(t, "type") ? t.type : t, h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || me,
            3 !== r.nodeType && 8 !== r.nodeType && !_e.test(p + oe.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."),
            p = h.shift(),
            h.sort()),
            a = p.indexOf(":") < 0 && "on" + p,
            t = t[oe.expando] ? t : new oe.Event(p,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = h.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : oe.makeArray(n, [t]),
            l = oe.event.special[p] || {},
            i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !oe.isWindow(r)) {
                    for (u = l.delegateType || p,
                    _e.test(u + p) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                        c = s;
                    c === (r.ownerDocument || me) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
                    t.type = d > 1 ? u : l.bindType || p,
                    o = (oe._data(s, "events") || {})[t.type] && oe._data(s, "handle"),
                    o && o.apply(s, n),
                    o = a && s[a],
                    o && o.apply && oe.acceptData(s) && (t.result = o.apply(s, n),
                    t.result === !1 && t.preventDefault());
                if (t.type = p,
                !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && oe.acceptData(r) && a && r[p] && !oe.isWindow(r)) {
                    c = r[a],
                    c && (r[a] = null),
                    oe.event.triggered = p;
                    try {
                        r[p]()
                    } catch (m) {}
                    oe.event.triggered = void 0,
                    c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, r, i, o, a = [], s = J.call(arguments), u = (oe._data(this, "events") || {})[e.type] || [], l = oe.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = oe.event.handlers.call(this, e, u),
                t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    o = 0; (r = i.handlers[o++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r,
                        e.data = r.data,
                        n = ((oe.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s),
                        void 0 !== n && (e.result = n) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (i = [],
                        o = 0; s > o; o++)
                            r = t[o],
                            n = r.selector + " ",
                            void 0 === i[n] && (i[n] = r.needsContext ? oe(n, this).index(u) >= 0 : oe.find(n, this, null, [u]).length),
                            i[n] && i.push(r);
                        i.length && a.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        fix: function(e) {
            if (e[oe.expando])
                return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Fe.test(i) ? this.mouseHooks : He.test(i) ? this.keyHooks : {}),
            r = a.props ? this.props.concat(a.props) : this.props,
            e = new oe.Event(o),
            t = r.length; t--; )
                n = r[t],
                e[n] = o[n];
            return e.target || (e.target = o.srcElement || me),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || me,
                i = r.documentElement,
                n = r.body,
                e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? oe.event.trigger(i, null, t) : oe.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    oe.removeEvent = me.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ee && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? f : p) : this.type = e,
        t && oe.extend(this, t),
        this.timeStamp = e && e.timeStamp || oe.now(),
        void (this[oe.expando] = !0)) : new oe.Event(e,t)
    }
    ,
    oe.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = f,
            this.stopPropagation()
        }
    },
    oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !oe.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    re.submitBubbles || (oe.event.special.submit = {
        setup: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                oe._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
        }
    }),
    re.changeBubbles || (oe.event.special.change = {
        setup: function() {
            return Me.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            oe.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                oe.event.simulate("change", this, e, !0)
            })),
            !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Me.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                }),
                oe._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return oe.event.remove(this, "._change"),
            !Me.test(this.nodeName)
        }
    }),
    re.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e), !0)
        };
        oe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = oe._data(r, t);
                i || r.addEventListener(e, n, !0),
                oe._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = oe._data(r, t) - 1;
                i ? oe._data(r, t, i) : (r.removeEventListener(e, n, !0),
                oe._removeData(r, t))
            }
        }
    }),
    oe.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t,
                t = void 0);
                for (o in e)
                    this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t,
            n = t = void 0) : null == r && ("string" == typeof t ? (r = n,
            n = void 0) : (r = n,
            n = t,
            t = void 0)),
            r === !1)
                r = p;
            else if (!r)
                return this;
            return 1 === i && (a = r,
            r = function(e) {
                return oe().off(e),
                a.apply(this, arguments)
            }
            ,
            r.guid = a.guid || (a.guid = oe.guid++)),
            this.each(function() {
                oe.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t,
            t = void 0),
            n === !1 && (n = p),
            this.each(function() {
                oe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , ze = / jQuery\d+="(?:null|\d+)"/g
      , Pe = new RegExp("<(?:" + qe + ")[\\s/>]","i")
      , Be = /^\s+/
      , $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Re = /<([\w:]+)/
      , We = /<tbody/i
      , Ie = /<|&#?\w+;/
      , Xe = /<(?:script|style|link)/i
      , Qe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ue = /^$|\/(?:java|ecma)script/i
      , Ve = /^true\/(.*)/
      , Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: re.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , Ye = m(me)
      , Ke = Ye.appendChild(me.createElement("div"));
    Ge.optgroup = Ge.option,
    Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead,
    Ge.th = Ge.td,
    oe.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = oe.contains(e.ownerDocument, e);
            if (re.html5Clone || oe.isXMLDoc(e) || !Pe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ke.innerHTML = e.outerHTML,
            Ke.removeChild(o = Ke.firstChild)),
            !(re.noCloneEvent && re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (r = g(o),
                s = g(e),
                a = 0; null != (i = s[a]); ++a)
                    r[a] && C(i, r[a]);
            if (t)
                if (n)
                    for (s = s || g(e),
                    r = r || g(o),
                    a = 0; null != (i = s[a]); a++)
                        T(i, r[a]);
                else
                    T(e, o);
            return r = g(o, "script"),
            r.length > 0 && w(r, !u && g(e, "script")),
            r = s = i = null,
            o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                if (o = e[h],
                o || 0 === o)
                    if ("object" === oe.type(o))
                        oe.merge(p, o.nodeType ? [o] : o);
                    else if (Ie.test(o)) {
                        for (s = s || f.appendChild(t.createElement("div")),
                        u = (Re.exec(o) || ["", ""])[1].toLowerCase(),
                        c = Ge[u] || Ge._default,
                        s.innerHTML = c[1] + o.replace($e, "<$1></$2>") + c[2],
                        i = c[0]; i--; )
                            s = s.lastChild;
                        if (!re.leadingWhitespace && Be.test(o) && p.push(t.createTextNode(Be.exec(o)[0])),
                        !re.tbody)
                            for (o = "table" !== u || We.test(o) ? "<table>" !== c[1] || We.test(o) ? 0 : s : s.firstChild,
                            i = o && o.childNodes.length; i--; )
                                oe.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                        for (oe.merge(p, s.childNodes),
                        s.textContent = ""; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else
                        p.push(t.createTextNode(o));
            for (s && f.removeChild(s),
            re.appendChecked || oe.grep(g(p, "input"), v),
            h = 0; o = p[h++]; )
                if ((!r || -1 === oe.inArray(o, r)) && (a = oe.contains(o.ownerDocument, o),
                s = g(f.appendChild(o), "script"),
                a && w(s),
                n))
                    for (i = 0; o = s[i++]; )
                        Ue.test(o.type || "") && n.push(o);
            return s = null,
            f
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = oe.expando, u = oe.cache, l = re.deleteExpando, c = oe.event.special; null != (n = e[a]); a++)
                if ((t || oe.acceptData(n)) && (i = n[s],
                o = i && u[i])) {
                    if (o.events)
                        for (r in o.events)
                            c[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i],
                    l ? delete n[s] : typeof n.removeAttribute !== Ee ? n.removeAttribute(s) : n[s] = null,
                    V.push(i))
                }
        }
    }),
    oe.fn.extend({
        text: function(e) {
            return Le(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? oe.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || oe.cleanData(g(n)),
                n.parentNode && (t && oe.contains(n.ownerDocument, n) && w(g(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && oe.cleanData(g(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && oe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Le(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(ze, "") : void 0;
                if (!("string" != typeof e || Xe.test(e) || !re.htmlSerialize && Pe.test(e) || !re.leadingWhitespace && Be.test(e) || Ge[(Re.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace($e, "<$1></$2>");
                    try {
                        for (; r > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (oe.cleanData(g(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                oe.cleanData(g(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, r, i, o, a, s, u = 0, l = this.length, c = this, d = l - 1, f = e[0], p = oe.isFunction(f);
            if (p || l > 1 && "string" == typeof f && !re.checkClone && Qe.test(f))
                return this.each(function(n) {
                    var r = c.eq(n);
                    p && (e[0] = f.call(this, n, r.html())),
                    r.domManip(e, t)
                });
            if (l && (s = oe.buildFragment(e, this[0].ownerDocument, !1, this),
            n = s.firstChild,
            1 === s.childNodes.length && (s = n),
            n)) {
                for (o = oe.map(g(s, "script"), b),
                i = o.length; l > u; u++)
                    r = s,
                    u !== d && (r = oe.clone(r, !0, !0),
                    i && oe.merge(o, g(r, "script"))),
                    t.call(this[u], r, u);
                if (i)
                    for (a = o[o.length - 1].ownerDocument,
                    oe.map(o, x),
                    u = 0; i > u; u++)
                        r = o[u],
                        Ue.test(r.type || "") && !oe._data(r, "globalEval") && oe.contains(a, r) && (r.src ? oe._evalUrl && oe._evalUrl(r.src) : oe.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Je, "")));
                s = n = null
            }
            return this
        }
    }),
    oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = oe(e), a = o.length - 1; a >= r; r++)
                n = r === a ? this : this.clone(!0),
                oe(o[r])[t](n),
                Y.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ze, et = {};
    !function() {
        var e, t, n = me.createElement("div"), r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = n.getElementsByTagName("a")[0],
        e.style.cssText = "float:left;opacity:.5",
        re.opacity = /^0.5/.test(e.style.opacity),
        re.cssFloat = !!e.style.cssFloat,
        n.style.backgroundClip = "content-box",
        n.cloneNode(!0).style.backgroundClip = "",
        re.clearCloneStyle = "content-box" === n.style.backgroundClip,
        e = n = null,
        re.shrinkWrapBlocks = function() {
            var e, n, i, o;
            if (null == t) {
                if (e = me.getElementsByTagName("body")[0],
                !e)
                    return;
                o = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                n = me.createElement("div"),
                i = me.createElement("div"),
                e.appendChild(n).appendChild(i),
                t = !1,
                typeof i.style.zoom !== Ee && (i.style.cssText = r + ";width:1px;padding:1px;zoom:1",
                i.innerHTML = "<div></div>",
                i.firstChild.style.width = "5px",
                t = 3 !== i.offsetWidth),
                e.removeChild(n),
                e = n = i = null
            }
            return t
        }
    }();
    var tt, nt, rt = /^margin/, it = new RegExp("^(" + Se + ")(?!px)[a-z%]+$","i"), ot = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (tt = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }
    ,
    nt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || tt(e),
        a = n ? n.getPropertyValue(t) || n[t] : void 0,
        n && ("" !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)),
        it.test(a) && rt.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 === a ? a : a + ""
    }
    ) : me.documentElement.currentStyle && (tt = function(e) {
        return e.currentStyle
    }
    ,
    nt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || tt(e),
        a = n ? n[t] : void 0,
        null == a && s && s[t] && (a = s[t]),
        it.test(a) && !ot.test(t) && (r = s.left,
        i = e.runtimeStyle,
        o = i && i.left,
        o && (i.left = e.currentStyle.left),
        s.left = "fontSize" === t ? "1em" : a,
        a = s.pixelLeft + "px",
        s.left = r,
        o && (i.left = o)),
        void 0 === a ? a : a + "" || "auto"
    }
    ),
    !function() {
        function t() {
            var t, n, r = me.getElementsByTagName("body")[0];
            r && (t = me.createElement("div"),
            n = me.createElement("div"),
            t.style.cssText = l,
            r.appendChild(t).appendChild(n),
            n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",
            oe.swap(r, null != r.style.zoom ? {
                zoom: 1
            } : {}, function() {
                i = 4 === n.offsetWidth
            }),
            o = !0,
            a = !1,
            s = !0,
            e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(n, null) || {}).top,
            o = "4px" === (e.getComputedStyle(n, null) || {
                width: "4px"
            }).width),
            r.removeChild(t),
            n = r = null)
        }
        var n, r, i, o, a, s, u = me.createElement("div"), l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = u.getElementsByTagName("a")[0],
        n.style.cssText = "float:left;opacity:.5",
        re.opacity = /^0.5/.test(n.style.opacity),
        re.cssFloat = !!n.style.cssFloat,
        u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        re.clearCloneStyle = "content-box" === u.style.backgroundClip,
        n = u = null,
        oe.extend(re, {
            reliableHiddenOffsets: function() {
                if (null != r)
                    return r;
                var e, t, n, i = me.createElement("div"), o = me.getElementsByTagName("body")[0];
                return o ? (i.setAttribute("className", "t"),
                i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                e = me.createElement("div"),
                e.style.cssText = l,
                o.appendChild(e).appendChild(i),
                i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                t = i.getElementsByTagName("td"),
                t[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                n = 0 === t[0].offsetHeight,
                t[0].style.display = "",
                t[1].style.display = "none",
                r = n && 0 === t[0].offsetHeight,
                o.removeChild(e),
                i = o = null,
                r) : void 0
            },
            boxSizing: function() {
                return null == i && t(),
                i
            },
            boxSizingReliable: function() {
                return null == o && t(),
                o
            },
            pixelPosition: function() {
                return null == a && t(),
                a
            },
            reliableMarginRight: function() {
                var t, n, r, i;
                if (null == s && e.getComputedStyle) {
                    if (t = me.getElementsByTagName("body")[0],
                    !t)
                        return;
                    n = me.createElement("div"),
                    r = me.createElement("div"),
                    n.style.cssText = l,
                    t.appendChild(n).appendChild(r),
                    i = r.appendChild(me.createElement("div")),
                    i.style.cssText = r.style.cssText = c,
                    i.style.marginRight = i.style.width = "0",
                    r.style.width = "1px",
                    s = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight),
                    t.removeChild(n)
                }
                return s
            }
        })
    }(),
    oe.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    }
    ;
    var at = /alpha\([^)]*\)/i
      , st = /opacity\s*=\s*([^)]*)/
      , ut = /^(none|table(?!-c[ea]).+)/
      , lt = new RegExp("^(" + Se + ")(.*)$","i")
      , ct = new RegExp("^([+-])=(" + Se + ")","i")
      , dt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ft = {
        letterSpacing: 0,
        fontWeight: 400
    }
      , pt = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": re.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = oe.camelCase(t), u = e.style;
                if (t = oe.cssProps[s] || (oe.cssProps[s] = S(u, s)),
                a = oe.cssHooks[t] || oe.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (o = typeof n,
                "string" === o && (i = ct.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(oe.css(e, t)),
                o = "number"),
                null != n && n === n && ("number" !== o || oe.cssNumber[s] || (n += "px"),
                re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                !(a && "set"in a && void 0 === (n = a.set(e, n, r)))))
                    try {
                        u[t] = "",
                        u[t] = n
                    } catch (l) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = oe.camelCase(t);
            return t = oe.cssProps[s] || (oe.cssProps[s] = S(e.style, s)),
            a = oe.cssHooks[t] || oe.cssHooks[s],
            a && "get"in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = nt(e, t, r)),
            "normal" === o && t in ft && (o = ft[t]),
            "" === n || n ? (i = parseFloat(o),
            n === !0 || oe.isNumeric(i) ? i || 0 : o) : o
        }
    }),
    oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && ut.test(oe.css(e, "display")) ? oe.swap(e, dt, function() {
                    return D(e, t, r)
                }) : D(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && tt(e);
                return A(e, n, r ? L(e, t, r, re.boxSizing() && "border-box" === oe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    re.opacity || (oe.cssHooks.opacity = {
        get: function(e, t) {
            return st.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === oe.trim(o.replace(at, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = at.test(o) ? o.replace(at, i) : o + " " + i)
        }
    }),
    oe.cssHooks.marginRight = k(re.reliableMarginRight, function(e, t) {
        return t ? oe.swap(e, {
            display: "inline-block"
        }, nt, [e, "marginRight"]) : void 0
    }),
    oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[e + je[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        rt.test(e) || (oe.cssHooks[e + t].set = A)
    }),
    oe.fn.extend({
        css: function(e, t) {
            return Le(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (oe.isArray(t)) {
                    for (r = tt(e),
                    i = t.length; i > a; a++)
                        o[t[a]] = oe.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return j(this, !0)
        },
        hide: function() {
            return j(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ae(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }),
    oe.Tween = M,
    M.prototype = {
        constructor: M,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.pos = t = this.options.duration ? oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : M.propHooks._default.set(this),
            this
        }
    },
    M.prototype.init.prototype = M.prototype,
    M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    oe.fx = M.prototype.init,
    oe.fx.step = {};
    var ht, mt, gt = /^(?:toggle|show|hide)$/, vt = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$","i"), yt = /queueHooks$/, bt = [O], xt = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = vt.exec(t)
              , o = i && i[3] || (oe.cssNumber[e] ? "" : "px")
              , a = (oe.cssNumber[e] || "px" !== o && +r) && vt.exec(oe.css(n.elem, e))
              , s = 1
              , u = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                i = i || [],
                a = +r || 1;
                do
                    s = s || ".5",
                    a /= s,
                    oe.style(n.elem, e, a + o);
                while (s !== (s = n.cur() / r) && 1 !== s && --u)
            }
            return i && (a = n.start = +a || +r || 0,
            n.unit = o,
            n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    oe.Animation = oe.extend(z, {
        tweener: function(e, t) {
            oe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                xt[n] = xt[n] || [],
                xt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? bt.unshift(e) : bt.push(e)
        }
    }),
    oe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            oe.isFunction(r.old) && r.old.call(this),
            r.queue && oe.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    oe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = oe.isEmptyObject(e)
              , o = oe.speed(t, n, r)
              , a = function() {
                var t = z(this, oe.extend({}, e), o);
                (i || oe._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = oe.timers
                  , a = oe._data(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && yt.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                (t || !n) && oe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = oe._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = oe.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                oe.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; a > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    oe.each(["toggle", "show", "hide"], function(e, t) {
        var n = oe.fn[t];
        oe.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i)
        }
    }),
    oe.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        oe.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    oe.timers = [],
    oe.fx.tick = function() {
        var e, t = oe.timers, n = 0;
        for (ht = oe.now(); n < t.length; n++)
            e = t[n],
            e() || t[n] !== e || t.splice(n--, 1);
        t.length || oe.fx.stop(),
        ht = void 0
    }
    ,
    oe.fx.timer = function(e) {
        oe.timers.push(e),
        e() ? oe.fx.start() : oe.timers.pop()
    }
    ,
    oe.fx.interval = 13,
    oe.fx.start = function() {
        mt || (mt = setInterval(oe.fx.tick, oe.fx.interval))
    }
    ,
    oe.fx.stop = function() {
        clearInterval(mt),
        mt = null
    }
    ,
    oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    oe.fn.delay = function(e, t) {
        return e = oe.fx ? oe.fx.speeds[e] || e : e,
        t = t || "fx",
        this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var e, t, n, r, i = me.createElement("div");
        i.setAttribute("className", "t"),
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = i.getElementsByTagName("a")[0],
        n = me.createElement("select"),
        r = n.appendChild(me.createElement("option")),
        t = i.getElementsByTagName("input")[0],
        e.style.cssText = "top:1px",
        re.getSetAttribute = "t" !== i.className,
        re.style = /top/.test(e.getAttribute("style")),
        re.hrefNormalized = "/a" === e.getAttribute("href"),
        re.checkOn = !!t.value,
        re.optSelected = r.selected,
        re.enctype = !!me.createElement("form").enctype,
        n.disabled = !0,
        re.optDisabled = !r.disabled,
        t = me.createElement("input"),
        t.setAttribute("value", ""),
        re.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        re.radioValue = "t" === t.value,
        e = t = n = r = i = null
    }();
    var wt = /\r/g;
    oe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = oe.isFunction(e),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, oe(this).val()) : e,
                null == i ? i = "" : "number" == typeof i ? i += "" : oe.isArray(i) && (i = oe.map(i, function(e) {
                    return null == e ? "" : e + ""
                })),
                t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()],
                t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()],
            t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
            "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
        }
    }),
    oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u],
                        !(!n.selected && u !== i || (re.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = oe.makeArray(t), a = i.length; a--; )
                        if (r = i[a],
                        oe.inArray(oe.valHooks.option.get(r), o) >= 0)
                            try {
                                r.selected = n = !0
                            } catch (s) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
            }
        },
        re.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Tt, Ct, Et = oe.expr.attrHandle, Nt = /^(?:checked|selected)$/i, kt = re.getSetAttribute, St = re.input;
    oe.fn.extend({
        attr: function(e, t) {
            return Le(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }),
    oe.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Ee ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(),
            r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? Ct : Tt)),
            void 0 === n ? r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = oe.find.attr(e, t),
            null == i ? void 0 : i) : null !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
            n) : void oe.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(xe);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = oe.propFix[n] || n,
                    oe.expr.match.bool.test(n) ? St && kt || !Nt.test(n) ? e[r] = !1 : e[oe.camelCase("default-" + n)] = e[r] = !1 : oe.attr(e, n, ""),
                    e.removeAttribute(kt ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    Ct = {
        set: function(e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : St && kt || !Nt.test(n) ? e.setAttribute(!kt && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Et[t] || oe.find.attr;
        Et[t] = St && kt || !Nt.test(t) ? function(e, t, r) {
            var i, o;
            return r || (o = Et[t],
            Et[t] = i,
            i = null != n(e, t, r) ? t.toLowerCase() : null,
            Et[t] = o),
            i
        }
        : function(e, t, n) {
            return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    St && kt || (oe.attrHooks.value = {
        set: function(e, t, n) {
            return oe.nodeName(e, "input") ? void (e.defaultValue = t) : Tt && Tt.set(e, t, n)
        }
    }),
    kt || (Tt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
            r.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
    Et.id = Et.name = Et.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }
    ,
    oe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Tt.set
    },
    oe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Tt.set(e, "" === t ? !1 : t, n)
        }
    },
    oe.each(["width", "height"], function(e, t) {
        oe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"),
                n) : void 0
            }
        }
    })),
    re.style || (oe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var jt = /^(?:input|select|textarea|button|object)$/i
      , At = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Le(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = oe.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (t) {}
            })
        }
    }),
    oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !oe.isXMLDoc(e),
            o && (t = oe.propFix[t] || t,
            i = oe.propHooks[t]),
            void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : jt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    re.hrefNormalized || oe.each(["href", "src"], function(e, t) {
        oe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    re.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    }),
    re.enctype || (oe.propFix.enctype = "encoding");
    var Lt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = 0, u = this.length, l = "string" == typeof e && e;
            if (oe.isFunction(e))
                return this.each(function(t) {
                    oe(this).addClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(xe) || []; u > s; s++)
                    if (n = this[s],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Lt, " ") : " ")) {
                        for (o = 0; i = t[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = oe.trim(r),
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0, u = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (oe.isFunction(e))
                return this.each(function(t) {
                    oe(this).removeClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(xe) || []; u > s; s++)
                    if (n = this[s],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Lt, " ") : "")) {
                        for (o = 0; i = t[o++]; )
                            for (; r.indexOf(" " + i + " ") >= 0; )
                                r = r.replace(" " + i + " ", " ");
                        a = e ? oe.trim(r) : "",
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(oe.isFunction(e) ? function(n) {
                oe(this).toggleClass(e.call(this, n, this.className, t), t)
            }
            : function() {
                if ("string" === n)
                    for (var t, r = 0, i = oe(this), o = e.match(xe) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    (n === Ee || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Lt, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    }),
    oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Dt = oe.now()
      , Mt = /\?/
      , Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, r = null, i = oe.trim(t + "");
        return i && !oe.trim(i.replace(Ht, function(e, t, i, o) {
            return n && t && (r = 0),
            0 === r ? e : (n = i || t,
            r += !o - !i,
            "")
        })) ? Function("return " + i)() : oe.error("Invalid JSON: " + t)
    }
    ,
    oe.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t)
            return null;
        try {
            e.DOMParser ? (r = new DOMParser,
            n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t),
        n
    }
    ;
    var Ft, _t, Ot = /#.*$/, qt = /([?&])_=[^&]*/, zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bt = /^(?:GET|HEAD)$/, $t = /^\/\//, Rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Wt = {}, It = {}, Xt = "*/".concat("*");
    try {
        _t = location.href
    } catch (Qt) {
        _t = me.createElement("a"),
        _t.href = "",
        _t = _t.href
    }
    Ft = Rt.exec(_t.toLowerCase()) || [],
    oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _t,
            type: "GET",
            isLocal: Pt.test(Ft[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $($(e, oe.ajaxSettings), t) : $(oe.ajaxSettings, e)
        },
        ajaxPrefilter: P(Wt),
        ajaxTransport: P(It),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, x, T = t;
                2 !== b && (b = 2,
                s && clearTimeout(s),
                l = void 0,
                a = r || "",
                w.readyState = e > 0 ? 4 : 0,
                i = e >= 200 && 300 > e || 304 === e,
                n && (y = R(d, w, n)),
                y = W(d, y, w, i),
                i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"),
                x && (oe.lastModified[o] = x),
                x = w.getResponseHeader("etag"),
                x && (oe.etag[o] = x)),
                204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state,
                c = y.data,
                v = y.error,
                i = !v)) : (v = T,
                (e || !T) && (T = "error",
                0 > e && (e = 0))),
                w.status = e,
                w.statusText = (t || T) + "",
                i ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]),
                w.statusCode(g),
                g = void 0,
                u && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]),
                m.fireWith(f, [w, T]),
                u && (p.trigger("ajaxComplete", [w, d]),
                --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var r, i, o, a, s, u, l, c, d = oe.ajaxSetup({}, t), f = d.context || d, p = d.context && (f.nodeType || f.jquery) ? oe(f) : oe.event, h = oe.Deferred(), m = oe.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!c)
                            for (c = {}; t = zt.exec(a); )
                                c[t[1].toLowerCase()] = t[2];
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e,
                    v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > b)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || x;
                    return l && l.abort(t),
                    n(0, t),
                    this
                }
            };
            if (h.promise(w).complete = m.add,
            w.success = w.done,
            w.error = w.fail,
            d.url = ((e || d.url || _t) + "").replace(Ot, "").replace($t, Ft[1] + "//"),
            d.type = t.method || t.type || d.method || d.type,
            d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(xe) || [""],
            null == d.crossDomain && (r = Rt.exec(d.url.toLowerCase()),
            d.crossDomain = !(!r || r[1] === Ft[1] && r[2] === Ft[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Ft[3] || ("http:" === Ft[1] ? "80" : "443")))),
            d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)),
            B(Wt, d, t, w),
            2 === b)
                return w;
            u = d.global,
            u && 0 === oe.active++ && oe.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !Bt.test(d.type),
            o = d.url,
            d.hasContent || (d.data && (o = d.url += (Mt.test(o) ? "&" : "?") + d.data,
            delete d.data),
            d.cache === !1 && (d.url = qt.test(o) ? o.replace(qt, "$1_=" + Dt++) : o + (Mt.test(o) ? "&" : "?") + "_=" + Dt++)),
            d.ifModified && (oe.lastModified[o] && w.setRequestHeader("If-Modified-Since", oe.lastModified[o]),
            oe.etag[o] && w.setRequestHeader("If-None-Match", oe.etag[o])),
            (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType),
            w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers)
                w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b))
                return w.abort();
            x = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[i](d[i]);
            if (l = B(It, d, t, w)) {
                w.readyState = 1,
                u && p.trigger("ajaxSend", [w, d]),
                d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1,
                    l.send(v, n)
                } catch (T) {
                    if (!(2 > b))
                        throw T;
                    n(-1, T)
                }
            } else
                n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }),
    oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, n, r, i) {
            return oe.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            oe.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }),
    oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    oe.fn.extend({
        wrapAll: function(e) {
            if (oe.isFunction(e))
                return this.each(function(t) {
                    oe(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(oe.isFunction(e) ? function(t) {
                oe(this).wrapInner(e.call(this, t))
            }
            : function() {
                var t = oe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            )
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    oe.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !re.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
    }
    ,
    oe.expr.filters.visible = function(e) {
        return !oe.expr.filters.hidden(e)
    }
    ;
    var Ut = /%20/g
      , Vt = /\[\]$/
      , Jt = /\r?\n/g
      , Gt = /^(?:submit|button|image|reset|file)$/i
      , Yt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = oe.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional),
        oe.isArray(e) || e.jquery && !oe.isPlainObject(e))
            oe.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                I(n, e[n], t, i);
        return r.join("&").replace(Ut, "+")
    }
    ,
    oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Yt.test(this.nodeName) && !Gt.test(e) && (this.checked || !De.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Jt, "\r\n")
                }
            }).get()
        }
    }),
    oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || Q()
    }
    : X;
    var Kt = 0
      , Zt = {}
      , en = oe.ajaxSettings.xhr();
    e.ActiveXObject && oe(e).on("unload", function() {
        for (var e in Zt)
            Zt[e](void 0, !0)
    }),
    re.cors = !!en && "withCredentials"in en,
    en = re.ajax = !!en,
    en && oe.ajaxTransport(function(e) {
        if (!e.crossDomain || re.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, o = e.xhr(), a = ++Kt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (i in e.xhrFields)
                            o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n)
                        void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null),
                    t = function(n, i) {
                        var s, u, l;
                        if (t && (i || 4 === o.readyState))
                            if (delete Zt[a],
                            t = void 0,
                            o.onreadystatechange = oe.noop,
                            i)
                                4 !== o.readyState && o.abort();
                            else {
                                l = {},
                                s = o.status,
                                "string" == typeof o.responseText && (l.text = o.responseText);
                                try {
                                    u = o.statusText
                                } catch (c) {
                                    u = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                            }
                        l && r(s, u, l, o.getAllResponseHeaders())
                    }
                    ,
                    e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zt[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }),
    oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e),
                e
            }
        }
    }),
    oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = me.head || oe("head")[0] || me.documentElement;
            return {
                send: function(r, i) {
                    t = me.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        n || i(200, "success"))
                    }
                    ,
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var tn = []
      , nn = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tn.pop() || oe.expando + "_" + Dt++;
            return this[e] = !0,
            e
        }
    }),
    oe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (nn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        s ? t[s] = t[s].replace(nn, "$1" + i) : t.jsonp !== !1 && (t.url += (Mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
        t.converters["script json"] = function() {
            return a || oe.error(i + " was not called"),
            a[0]
        }
        ,
        t.dataTypes[0] = "json",
        o = e[i],
        e[i] = function() {
            a = arguments
        }
        ,
        r.always(function() {
            e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback,
            tn.push(i)),
            a && oe.isFunction(o) && o(a[0]),
            a = o = void 0
        }),
        "script") : void 0
    }),
    oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || me;
        var r = fe.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = oe.buildFragment([e], t, i),
        i && i.length && oe(i).remove(),
        oe.merge([], r.childNodes))
    }
    ;
    var rn = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && rn)
            return rn.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (r = e.slice(s, e.length),
        e = e.slice(0, s)),
        oe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        a.length > 0 && oe.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            a.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    }
    ;
    var on = e.document.documentElement;
    oe.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = oe.css(e, "position"), d = oe(e), f = {};
            "static" === c && (e.style.position = "relative"),
            s = d.offset(),
            o = oe.css(e, "top"),
            u = oe.css(e, "left"),
            l = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [o, u]) > -1,
            l ? (r = d.position(),
            a = r.top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            oe.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : d.css(f)
        }
    },
    oe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    oe.offset.setOffset(this, e, t)
                });
            var t, n, r = {
                top: 0,
                left: 0
            }, i = this[0], o = i && i.ownerDocument;
            return o ? (t = o.documentElement,
            oe.contains(t, i) ? (typeof i.getBoundingClientRect !== Ee && (r = i.getBoundingClientRect()),
            n = U(o),
            {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === oe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                oe.nodeName(e[0], "html") || (n = e.offset()),
                n.top += oe.css(e[0], "borderTopWidth", !0),
                n.left += oe.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - oe.css(r, "marginTop", !0),
                    left: t.left - n.left - oe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || on; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position"); )
                    e = e.offsetParent;
                return e || on
            })
        }
    }),
    oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        oe.fn[e] = function(r) {
            return Le(this, function(e, r, i) {
                var o = U(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void (o ? o.scrollTo(n ? oe(o).scrollLeft() : i, n ? i : oe(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }),
    oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = k(re.pixelPosition, function(e, n) {
            return n ? (n = nt(e, t),
            it.test(n) ? oe(e).position()[t] + "px" : n) : void 0
        })
    }),
    oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            oe.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Le(this, function(t, n, r) {
                    var i;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? oe.css(t, n, a) : oe.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }),
    oe.fn.size = function() {
        return this.length
    }
    ,
    oe.fn.andSelf = oe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var an = e.jQuery
      , sn = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = sn),
        t && e.jQuery === oe && (e.jQuery = an),
        oe
    }
    ,
    typeof t === Ee && (e.jQuery = e.$ = oe),
    oe
}),
void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
function(e, t, n) {
    function r(n) {
        var r = t.console;
        o[n] || (o[n] = !0,
        e.migrateWarnings.push(n),
        r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n),
        e.migrateTrace && r.trace && r.trace()))
    }
    function i(t, i, o, a) {
        if (Object.defineProperty)
            try {
                return Object.defineProperty(t, i, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return r(a),
                        o
                    },
                    set: function(e) {
                        r(a),
                        o = e
                    }
                }),
                n
            } catch (s) {}
        e._definePropertyBroken = !0,
        t[i] = o
    }
    var o = {};
    e.migrateWarnings = [],
    !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"),
    e.migrateTrace === n && (e.migrateTrace = !0),
    e.migrateReset = function() {
        o = {},
        e.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var a = e("<input/>", {
        size: 1
    }).attr("size") && e.attrFn
      , s = e.attr
      , u = e.attrHooks.value && e.attrHooks.value.get || function() {
        return null
    }
      , l = e.attrHooks.value && e.attrHooks.value.set || function() {
        return n
    }
      , c = /^(?:input|button)$/i
      , d = /^[238]$/
      , f = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
      , p = /^(?:checked|selected)$/i;
    i(e, "attrFn", a || {}, "jQuery.attrFn is deprecated"),
    e.attr = function(t, i, o, u) {
        var l = i.toLowerCase()
          , h = t && t.nodeType;
        return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"),
        t && !d.test(h) && (a ? i in a : e.isFunction(e.fn[i]))) ? e(t)[i](o) : ("type" === i && o !== n && c.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"),
        !e.attrHooks[l] && f.test(l) && (e.attrHooks[l] = {
            get: function(t, r) {
                var i, o = e.prop(t, r);
                return o === !0 || "boolean" != typeof o && (i = t.getAttributeNode(r)) && i.nodeValue !== !1 ? r.toLowerCase() : n
            },
            set: function(t, n, r) {
                var i;
                return n === !1 ? e.removeAttr(t, r) : (i = e.propFix[r] || r,
                i in t && (t[i] = !0),
                t.setAttribute(r, r.toLowerCase())),
                r
            }
        },
        p.test(l) && r("jQuery.fn.attr('" + l + "') may use property instead of attribute")),
        s.call(e, t, i, o))
    }
    ,
    e.attrHooks.value = {
        get: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"),
            t in e ? e.value : null)
        },
        set: function(e, t) {
            var i = (e.nodeName || "").toLowerCase();
            return "button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && r("jQuery.fn.attr('value', val) no longer sets properties"),
            e.value = t,
            n)
        }
    };
    var h, m, g = e.fn.init, v = e.parseJSON, y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, n, i) {
        var o;
        return t && "string" == typeof t && !e.isPlainObject(n) && (o = y.exec(e.trim(t))) && o[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"),
        o[3] && r("$(html) HTML text after last tag is ignored"),
        "#" === o[0].charAt(0) && (r("HTML string cannot start with a '#' character"),
        e.error("JQMIGRATE: Invalid selector string (XSS)")),
        n && n.context && (n = n.context),
        e.parseHTML) ? g.call(this, e.parseHTML(o[2], n, !0), n, i) : g.apply(this, arguments)
    }
    ,
    e.fn.init.prototype = e.fn,
    e.parseJSON = function(e) {
        return e || null === e ? v.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"),
        null)
    }
    ,
    e.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    }
    ,
    e.browser || (h = e.uaMatch(navigator.userAgent),
    m = {},
    h.browser && (m[h.browser] = !0,
    m.version = h.version),
    m.chrome ? m.webkit = !0 : m.webkit && (m.safari = !0),
    e.browser = m),
    i(e, "browser", e.browser, "jQuery.browser is deprecated"),
    e.sub = function() {
        function t(e, n) {
            return new t.fn.init(e,n)
        }
        e.extend(!0, t, this),
        t.superclass = this,
        t.fn = t.prototype = this(),
        t.fn.constructor = t,
        t.sub = this.sub,
        t.fn.init = function(r, i) {
            return i && i instanceof e && !(i instanceof t) && (i = t(i)),
            e.fn.init.call(this, r, i, n)
        }
        ,
        t.fn.init.prototype = t.fn;
        var n = t(document);
        return r("jQuery.sub() is deprecated"),
        t
    }
    ,
    e.ajaxSetup({
        converters: {
            "text json": e.parseJSON
        }
    });
    var b = e.fn.data;
    e.fn.data = function(t) {
        var i, o, a = this[0];
        return !a || "events" !== t || 1 !== arguments.length || (i = e.data(a, t),
        o = e._data(a, t),
        i !== n && i !== o || o === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"),
        o)
    }
    ;
    var x = /\/(java|ecma)script/i
      , w = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        w.apply(this, arguments)
    }
    ,
    e.clean || (e.clean = function(t, i, o, a) {
        i = i || document,
        i = !i.nodeType && i[0] || i,
        i = i.ownerDocument || i,
        r("jQuery.clean() is deprecated");
        var s, u, l, c, d = [];
        if (e.merge(d, e.buildFragment(t, i).childNodes),
        o)
            for (l = function(e) {
                return !e.type || x.test(e.type) ? a ? a.push(e.parentNode ? e.parentNode.removeChild(e) : e) : o.appendChild(e) : n
            }
            ,
            s = 0; null != (u = d[s]); s++)
                e.nodeName(u, "script") && l(u) || (o.appendChild(u),
                u.getElementsByTagName !== n && (c = e.grep(e.merge([], u.getElementsByTagName("script")), l),
                d.splice.apply(d, [s + 1, 0].concat(c)),
                s += c.length));
        return d
    }
    );
    var T = e.event.add
      , C = e.event.remove
      , E = e.event.trigger
      , N = e.fn.toggle
      , k = e.fn.live
      , S = e.fn.die
      , j = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess"
      , A = RegExp("\\b(?:" + j + ")\\b")
      , L = /(?:^|\s)hover(\.\S+|)\b/
      , D = function(t) {
        return "string" != typeof t || e.event.special.hover ? t : (L.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),
        t && t.replace(L, "mouseenter$1 mouseleave$1"))
    };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"),
    e.event.dispatch && i(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"),
    e.event.add = function(e, t, n, i, o) {
        e !== document && A.test(t) && r("AJAX events should be attached to document: " + t),
        T.call(this, e, D(t || ""), n, i, o)
    }
    ,
    e.event.remove = function(e, t, n, r, i) {
        C.call(this, e, D(t) || "", n, r, i)
    }
    ,
    e.fn.error = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return r("jQuery.fn.error() is deprecated"),
        e.splice(0, 0, "error"),
        arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e),
        this)
    }
    ,
    e.fn.toggle = function(t, n) {
        if (!e.isFunction(t) || !e.isFunction(n))
            return N.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var i = arguments
          , o = t.guid || e.guid++
          , a = 0
          , s = function(n) {
            var r = (e._data(this, "lastToggle" + t.guid) || 0) % a;
            return e._data(this, "lastToggle" + t.guid, r + 1),
            n.preventDefault(),
            i[r].apply(this, arguments) || !1
        };
        for (s.guid = o; i.length > a; )
            i[a++].guid = o;
        return this.click(s)
    }
    ,
    e.fn.live = function(t, n, i) {
        return r("jQuery.fn.live() is deprecated"),
        k ? k.apply(this, arguments) : (e(this.context).on(t, this.selector, n, i),
        this)
    }
    ,
    e.fn.die = function(t, n) {
        return r("jQuery.fn.die() is deprecated"),
        S ? S.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n),
        this)
    }
    ,
    e.event.trigger = function(e, t, n, i) {
        return n || A.test(e) || r("Global events are undocumented and deprecated"),
        E.call(this, e, t, n || document, i)
    }
    ,
    e.each(j.split("|"), function(t, n) {
        e.event.special[n] = {
            setup: function() {
                var t = this;
                return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                    e.event.trigger(n, null, t, !0)
                }),
                e._data(this, n, e.guid++)),
                !1
            },
            teardown: function() {
                return this !== document && e.event.remove(document, n + "." + e._data(this, n)),
                !1
            }
        }
    })
}(jQuery, window);
