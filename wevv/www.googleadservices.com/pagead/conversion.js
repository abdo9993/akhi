(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        };

    function ea(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var fa = ea(this),
        ha = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        l = {},
        ia = {};

    function p(a, b) {
        var c = ia[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function r(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in l ? f = l : f = fa;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ha && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(l, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (ia[d] = ha ? fa.Symbol(d) : "$jscp$" + d), ca(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var ja;
    if (ha && "function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                    a: !0
                },
                ma = {};
            try {
                ma.__proto__ = la;
                ka = ma.a;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ja;
    r("Symbol", function(a) {
        function b(e) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c("jscomp_symbol_" + (e || "") + "_" + d++, e)
        }

        function c(e, f) {
            this.g = e;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: f
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = 0;
        return b
    }, "es6");
    r("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, l.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return oa(aa(this))
                }
            })
        }
        return a
    }, "es6");

    function oa(a) {
        a = {
            next: a
        };
        a[p(l.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function pa(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[p(l.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    r("Array.prototype.values", function(a) {
        return a ? a : function() {
            return pa(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    r("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return pa(this, function(b) {
                return b
            })
        }
    }, "es6");
    var u = this || self,
        qa = /^[\w+/_-]+[=]{0,2}$/,
        ra = null;

    function sa(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && qa.test(a) ? a : ""
    }

    function ta() {}

    function ua(a) {
        a.u = void 0;
        a.o = function() {
            return a.u ? a.u : a.u = new a
        }
    }

    function va(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.G = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.T = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function wa(a) {
        return a
    };

    function Aa(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    };

    function y(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, y);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    va(y, Error);
    y.prototype.name = "CustomError";

    function Ba(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        y.call(this, c + a[d])
    }
    va(Ba, y);
    Ba.prototype.name = "AssertionError";

    function z(a, b) {
        this.h = a === Ca && b || "";
        this.i = Da
    }
    z.prototype.l = !0;
    z.prototype.g = function() {
        return this.h
    };

    function Ea(a) {
        return a instanceof z && a.constructor === z && a.i === Da ? a.h : "type_error:Const"
    }
    var Da = {},
        Ca = {};

    function Fa(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Ga = Array.prototype.forEach ? function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        Ha = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Ia = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } :
        function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function Ja(a) {
        if (!Ka.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(La, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ma, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Na, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Oa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Pa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Qa, "&#0;"));
        return a
    }
    var La = /&/g,
        Ma = /</g,
        Na = />/g,
        Oa = /"/g,
        Pa = /'/g,
        Qa = /\x00/g,
        Ka = /[\x00&<>"']/;
    var Ra;
    a: {
        var Sa = u.navigator;
        if (Sa) {
            var Ta = Sa.userAgent;
            if (Ta) {
                Ra = Ta;
                break a
            }
        }
        Ra = ""
    };
    var Ua = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Va;

    function Wa() {
        if (void 0 === Va) {
            var a = null,
                b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: wa,
                        createScript: wa,
                        createScriptURL: wa
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                Va = a
            } else Va = a
        }
        return Va
    };

    function C(a, b) {
        this.i = b === Xa ? a : ""
    }
    C.prototype.l = !0;
    C.prototype.g = function() {
        return this.i.toString()
    };
    C.prototype.s = !0;
    C.prototype.h = function() {
        return 1
    };
    C.prototype.toString = function() {
        return this.i + ""
    };

    function Ya(a) {
        return a instanceof C && a.constructor === C ? a.i : "type_error:TrustedResourceUrl"
    }
    var Xa = {};

    function Za(a) {
        var b = Wa();
        a = b ? b.createScriptURL(a) : a;
        return new C(a, Xa)
    };

    function D(a, b) {
        this.i = b === $a ? a : ""
    }
    D.prototype.l = !0;
    D.prototype.g = function() {
        return this.i.toString()
    };
    D.prototype.s = !0;
    D.prototype.h = function() {
        return 1
    };
    D.prototype.toString = function() {
        return this.i.toString()
    };

    function ab(a) {
        return a instanceof D && a.constructor === D ? a.i : "type_error:SafeUrl"
    }
    var bb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
        cb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        db = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function eb(a) {
        if (a instanceof D) return a;
        a = "object" == typeof a && a.l ? a.g() : String(a);
        if (db.test(a)) a = new D(a, $a);
        else {
            a = String(a);
            a = a.replace(/(%0A|%0D)/g, "");
            var b = a.match(cb);
            a = b && bb.test(b[1]) ? new D(a, $a) : null
        }
        return a
    }
    var $a = {},
        fb = new D("about:invalid#zClosurez", $a);

    function E(a, b) {
        this.h = b === gb ? a : ""
    }
    E.prototype.l = !0;
    E.prototype.g = function() {
        return this.h
    };
    E.prototype.toString = function() {
        return this.h.toString()
    };
    var gb = {},
        hb = new E("", gb);

    function ib(a) {
        if (a instanceof D) return 'url("' + ab(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof z) a = Ea(a);
        else {
            a = String(a);
            var b = a.replace(jb, "$1").replace(jb, "$1").replace(kb, "url");
            if (lb.test(b)) {
                if (b = !mb.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && nb(a)
                }
                a = b ? ob(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Ba("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function nb(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var lb = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        kb = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        jb = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        mb = /\/\*/;

    function ob(a) {
        return a.replace(kb, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = (eb(d) || fb).g();
            return c + f + b + f + e
        })
    };

    function F(a, b, c) {
        this.i = c === pb ? a : "";
        this.F = b
    }
    F.prototype.s = !0;
    F.prototype.h = function() {
        return this.F
    };
    F.prototype.l = !0;
    F.prototype.g = function() {
        return this.i.toString()
    };
    F.prototype.toString = function() {
        return this.i.toString()
    };

    function H(a) {
        return a instanceof F && a.constructor === F ? a.i : "type_error:SafeHtml"
    }

    function qb(a) {
        if (a instanceof F) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.s && (c = a.h());
        return rb(Ja(b && a.l ? a.g() : String(a)), c)
    }
    var sb = /^[a-zA-Z0-9-]+$/,
        tb = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        ub = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };

    function vb(a) {
        function b(f) {
            Array.isArray(f) ? Ga(f, b) : (f = qb(f), e.push(H(f).toString()), f = f.h(), 0 == d ? d = f : 0 != f && d != f && (d = null))
        }
        var c = qb(wb),
            d = c.h(),
            e = [];
        Ga(a, b);
        return rb(e.join(H(c).toString()), d)
    }

    function xb(a) {
        return vb(Array.prototype.slice.call(arguments))
    }
    var pb = {};

    function rb(a, b) {
        var c = Wa();
        a = c ? c.createHTML(a) : a;
        return new F(a, b, pb)
    }
    var wb = new F(u.trustedTypes && u.trustedTypes.emptyHTML || "", 0, pb);
    var yb = Fa(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = H(wb);
        return !b.parentElement
    });

    function zb(a, b) {
        a.write(H(b))
    }

    function Ab(a, b) {
        a.src = Ya(b);
        (b = a.ownerDocument && a.ownerDocument.defaultView) && b != u ? b = sa(b.document) : (null === ra && (ra = sa(u.document)), b = ra);
        b && a.setAttribute("nonce", b)
    };

    function Bb(a) {
        Bb[" "](a);
        return a
    }
    Bb[" "] = ta;

    function Cb() {
        var a = document;
        var b = "SCRIPT";
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    var Db = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Eb(a) {
        var b = a.match(Db);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function Fb(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var Gb = /#|$/;

    function Hb(a, b) {
        var c = a.search(Gb),
            d = Fb(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    }
    var Ib = /[?&]($|#)/;

    function J(a, b, c) {
        for (var d = a.search(Gb), e = 0, f, g = []; 0 <= (f = Fb(a, e, b, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.substr(e));
        a = g.join("").replace(Ib, "$1");
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ? (c = a.indexOf("#"), 0 > c && (c = a.length), d = a.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = a.substring(d + 1, c), c = [a.substr(0, d), e, a.substr(c)], a = c[1], c[1] = b ? a ? a + "&" + b : b : a, b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : b = a;
        return b
    };

    function Jb() {
        if (!u.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            u.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Kb(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
    var Mb = Fa(function() {
            return Ia(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Lb) || 1E-4 > Math.random()
        }),
        Nb = Fa(function() {
            return -1 != Ra.indexOf("MSIE")
        });

    function Lb(a) {
        return -1 != Ra.indexOf(a)
    }

    function K(a) {
        return /^true$/.test(a)
    };
    var Ob = Aa("0.20"),
        Pb = Aa("0.002"),
        Qb = Aa("0.00"),
        Rb = Aa("0.00"),
        Sb = K("false"),
        Tb = K("true"),
        Ub = K("true"),
        Vb = K("true"),
        Wb = K("false");
    var Xb = null;

    function Yb() {
        if (null === Xb) {
            Xb = "";
            try {
                var a = "";
                try {
                    a = u.top.location.hash
                } catch (c) {
                    a = u.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Xb = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Xb
    }

    function L(a, b, c) {
        var d = M;
        if (c ? d.g.hasOwnProperty(c) && "" == d.g[c] : 1) {
            var e;
            e = (e = Yb()) ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? e[0] : null : null;
            if (e) a = e;
            else a: {
                if (!Nb() && !Mb() && (e = Math.random(), e < b)) {
                    e = Jb();
                    a = a[Math.floor(e * a.length)];
                    break a
                }
                a = null
            }
            a && "" != a && (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : d.h[a] = !0)
        }
    }

    function O(a) {
        var b = M;
        return b.g.hasOwnProperty(a) ? b.g[a] : ""
    }

    function Zb() {
        var a = M,
            b = [];
        Kb(a.h, function(c, d) {
            b.push(d)
        });
        Kb(a.g, function(c) {
            "" != c && b.push(c)
        });
        return b
    };
    var $b = {
            K: 2,
            S: 13,
            R: 14,
            N: 16,
            M: 17,
            L: 18
        },
        M = null;

    function ac() {
        return !!M && "592230571" == O(16)
    }

    function bc() {
        return !!M && ("2505059651" == O(18) || "2505059650" == O(18))
    };
    var cc = {};

    function P(a) {
        cc.TAGGING = cc.TAGGING || [];
        cc.TAGGING[a] = !0
    };

    function dc(a) {
        var b = "[object Array]" == Object.prototype.toString.call(Object(a));
        Array.isArray ? Array.isArray(a) !== b && P(4) : P(5);
        return b
    }

    function ec(a, b) {
        if (a && dc(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function fc(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    };

    function gc(a) {
        hc();
        return rb(a, null)
    }
    var hc = ta;
    var Q = window,
        R = document;
    Object.freeze({
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    });

    function ic() {
        var a = {};
        this.g = function(b) {
            return null != a[1933] ? a[1933] : b
        }
    }
    ua(ic);

    function jc() {
        var a = void 0 === a ? !1 : a;
        return ic.o().g(a)
    };
    var kc = [];

    function S() {
        var a = {};
        var b = Q.google_tag_data;
        Q.google_tag_data = void 0 === b ? a : b;
        a = Q.google_tag_data;
        a.ics || (a.ics = {
            entries: {},
            set: lc,
            update: nc,
            addListener: oc,
            notifyListeners: pc,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function lc(a, b, c, d, e, f) {
        var g = S();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries;
            g = h[a] || {};
            var k = g.region;
            c = c && "string" == typeof c ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || c === e || (c === d ? k !== e : !c && !k)) {
                e = !!(f && 0 < f && void 0 === g.update);
                var m = {
                    region: c,
                    initial: "granted" === b,
                    update: g.update,
                    quiet: e
                };
                if ("" !== d || !1 !== g.initial) h[a] = m;
                e && Q.setTimeout(function() {
                    h[a] === m && m.quiet && (m.quiet = !1, qc(a), pc(), P(2))
                }, f)
            }
        }
    }

    function nc(a, b) {
        var c = S();
        c.active = !0;
        if (void 0 != b) {
            var d = T(a);
            c = c.entries;
            c = c[a] = c[a] || {};
            c.update = "granted" === b;
            b = T(a);
            c.quiet ? (c.quiet = !1, qc(a)) : b !== d && qc(a)
        }
    }

    function oc(a, b) {
        kc.push({
            B: a,
            D: b
        })
    }

    function qc(a) {
        for (var b = 0; b < kc.length; ++b) {
            var c = kc[b];
            dc(c.B) && -1 !== c.B.indexOf(a) && (c.C = !0)
        }
    }

    function pc(a) {
        for (var b = 0; b < kc.length; ++b) {
            var c = kc[b];
            if (c.C) {
                c.C = !1;
                try {
                    c.D({
                        U: a
                    })
                } catch (d) {}
            }
        }
    }

    function T(a) {
        a = S().entries[a] || {};
        return void 0 !== a.update ? a.update : void 0 !== a.initial ? a.initial : void 0
    }

    function rc(a) {
        return !(S().entries[a] || {}).quiet
    }

    function sc(a, b) {
        S().addListener(a, b)
    }

    function tc(a) {
        function b() {
            for (var e = 0; e < c.length; e++)
                if (!rc(c[e])) return !0;
            return !1
        }
        var c = ["ad_storage"];
        if (b()) {
            var d = !1;
            sc(c, function(e) {
                d || b() || (d = !0, a(e))
            })
        } else a({})
    }

    function uc(a) {
        if (!1 === T("ad_storage")) {
            var b = !1;
            sc(["ad_storage"], function(c) {
                !b && T("ad_storage") && (a(c), b = !0)
            })
        }
    };
    var vc = /:[0-9]+$/;

    function wc(a, b) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            if (decodeURIComponent(d[0]).replace(/\+/g, " ") === b) return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g, " ")
        }
    }

    function xc(a, b) {
        var c = "query";
        if ("protocol" === c || "port" === c) a.protocol = yc(a.protocol) || yc(Q.location.protocol);
        "port" === c ? a.port = String(Number(a.hostname ? a.port : Q.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === c && (a.hostname = (a.hostname || Q.location.hostname).replace(vc, "").toLowerCase());
        var d = yc(a.protocol);
        c && (c = String(c).toLowerCase());
        switch (c) {
            case "url_no_fragment":
                b = "";
                a && a.href && (b = a.href.indexOf("#"), b = 0 > b ? a.href : a.href.substr(0, b));
                a = b;
                break;
            case "protocol":
                a =
                    d;
                break;
            case "host":
                a = a.hostname.replace(vc, "").toLowerCase();
                break;
            case "port":
                a = String(Number(a.port) || ("http" == d ? 80 : "https" == d ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || P(1);
                a = "/" == a.pathname.charAt(0) ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                a: if (b = a[a.length - 1], c = [], Array.prototype.indexOf) b = c.indexOf(b), b = "number" == typeof b ? b : -1;
                    else {
                        for (d = 0; d < c.length; d++)
                            if (c[d] === b) {
                                b = d;
                                break a
                            }
                        b = -1
                    }
                0 <= b && (a[a.length - 1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                b && (a = wc(a, b));
                break;
            case "extension":
                a = a.pathname.split(".");
                a = 1 < a.length ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href
        }
        return a
    }

    function yc(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    };

    function zc(a, b, c, d) {
        if (Ac(d)) {
            d = [];
            b = String(b || document.cookie).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("="),
                    g = f[0].replace(/^\s*|\s*$/g, "");
                g && g == a && ((f = f.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && c && (f = decodeURIComponent(f)), d.push(f))
            }
            a = d
        } else a = [];
        return a
    }

    function Bc(a, b, c, d) {
        var e = document.cookie;
        document.cookie = a;
        a = document.cookie;
        return e != a || void 0 != c && 0 <= zc(b, a, !1, d).indexOf(c)
    }

    function Cc(a, b, c) {
        function d(v, q, A) {
            if (null == A) return delete g[q], v;
            g[q] = A;
            return v + "; " + q + "=" + A
        }

        function e(v, q) {
            if (null == q) return delete g[q], v;
            g[q] = !0;
            return v + "; " + q
        }
        if (Ac(c.v)) {
            if (void 0 == b) var f = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else c.encode && (b = encodeURIComponent(b)), b = Dc(b), f = a + "=" + b;
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date) var h = c.expires.toUTCString();
            else null != c.expires && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.W);
            f = d(f, "samesite", c.X);
            c.Y &&
                (f = e(f, "secure"));
            h = c.domain;
            if ("auto" === h) {
                h = Ec();
                for (var k = 0; k < h.length; ++k) {
                    var m = "none" !== h[k] ? h[k] : void 0,
                        n = d(f, "domain", m);
                    n = e(n, c.flags);
                    if (!Fc(m, c.path) && Bc(n, a, b, c.v)) break
                }
            } else h && "none" !== h && (f = d(f, "domain", h)), f = e(f, c.flags), Fc(h, c.path) || Bc(f, a, b, c.v)
        }
    }

    function Dc(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
    var Gc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Hc = /(^|\.)doubleclick\.net$/i;

    function Fc(a, b) {
        return Hc.test(document.location.hostname) || "/" === b && Gc.test(a)
    }

    function Ec() {
        var a = [],
            b = document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
        b = document.location.hostname;
        Hc.test(b) || Gc.test(b) || a.push("none");
        return a
    }

    function Ac(a) {
        if (!(jc() && a && jc() && S().active)) return !0;
        if (!rc(a)) return !1;
        a = T(a);
        return null == a ? !0 : !!a
    };

    function Ic(a, b) {
        var c, d = a.V;
        null == d && (d = 7776E3);
        0 !== d && (c = new Date((b || (new Date).getTime()) + 1E3 * d));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !0,
            expires: c
        }
    };
    var Jc = {};
    var Kc = /^\w+$/,
        Lc = /^[\w-]+$/,
        Mc = /^~?[\w-]+$/,
        Nc = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function Oc() {
        if (!jc() || !jc() || !S().active) return !0;
        var a = T("ad_storage");
        return null == a ? !0 : !!a
    }

    function Pc(a, b) {
        rc("ad_storage") ? Oc() ? a() : uc(a) : b ? P(3) : tc(function() {
            Pc(a, !0)
        })
    }

    function Qc(a) {
        return Rc(a).map(function(b) {
            return b.j
        })
    }

    function Rc(a) {
        var b = [];
        if (!R.cookie) return b;
        a = zc(a, R.cookie, void 0, "ad_storage");
        if (!a || 0 == a.length) return b;
        for (var c = {}, d = 0; d < a.length; c = {
                m: c.m
            }, d++) {
            c.m = Sc(a[d]);
            var e = Tc(a[d]);
            if (c.m && e) {
                var f = ec(b, function(g) {
                    return function(h) {
                        return h.j === g.m
                    }
                }(c));
                f && f.timestamp < e ? f.timestamp = e : f || b.push({
                    j: c.m,
                    timestamp: e
                })
            }
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return Uc(b)
    }

    function Vc(a) {
        return a && "string" == typeof a && a.match(Kc) ? a : "_gcl"
    }

    function Wc() {
        var a = Q.location.href,
            b = R.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || P(1), c = "/" + c);
        a = b.hostname.replace(vc, "");
        var d = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: a,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        };
        b = xc(d, "gclid");
        c = xc(d, "gclsrc");
        a = xc(d, "gbraid");
        var e = xc(d, "dclid");
        b && c && a || (d = d.hash.replace("#", ""), b = b || wc(d, "gclid"), c = c || wc(d, "gclsrc"), a = a || wc(d, "gbraid"));
        return Xc(b, c, e, a)
    }

    function Xc(a, b, c, d) {
        function e(g, h) {
            f[h] || (f[h] = []);
            f[h].push(g)
        }
        var f = {};
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        void 0 !== d && Lc.test(d) && (f.gbraid = d, e(d, "gb"));
        if (void 0 !== a && a.match(Lc)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return f
    }

    function Yc() {
        var a = {},
            b = Wc();
        Pc(function() {
            Zc(b, a)
        })
    }

    function Zc(a, b, c, d) {
        function e(n) {
            n = ["GCL", m, n];
            0 < d.length && n.push(d.join("."));
            return n.join(".")
        }

        function f(n, v) {
            n = Nc[n];
            n = void 0 !== n ? g + n : void 0;
            n && (null == h.path && (h.path = "/"), h.domain || (h.domain = "auto"), Cc(n, v, h), k = !0)
        }
        b = b || {};
        d = d || [];
        var g = Vc(b.prefix);
        c = c || (new Date).getTime();
        var h = Ic(b, c);
        h.v = "ad_storage";
        var k = !1,
            m = Math.round(c / 1E3);
        a.aw && (!0 === b.Z ? f("aw", e("~" + a.aw[0])) : f("aw", e(a.aw[0])));
        a.dc && f("dc", e(a.dc[0]));
        a.gf && f("gf", e(a.gf[0]));
        a.ha && f("ha", e(a.ha[0]));
        a.gp && f("gp", e(a.gp[0]));
        (void 0 == Jc.enable_gbraid_cookie_write ? 0 : Jc.enable_gbraid_cookie_write) && !k && a.gb && f("gb", e(a.gb[0]))
    }

    function Tc(a) {
        return $c(a) ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    }

    function Sc(a) {
        if ($c(a)) return a.split(".")[2]
    }

    function $c(a) {
        a = a.split(".");
        return 3 > a.length || "GCL" !== a[0] || !/^\d+$/.test(a[1]) || !Mc.test(a[2]) ? !1 : !0
    }

    function Uc(a) {
        return a.filter(function(b) {
            return Mc.test(b.j)
        })
    }

    function ad() {
        for (var a = ["aw"], b = {}, c = Vc(b.prefix), d = {}, e = 0; e < a.length; e++) Nc[a[e]] && (d[a[e]] = Nc[a[e]]);
        Pc(function() {
            fc(d, function(f, g) {
                g = zc(c + g, R.cookie, void 0, "ad_storage");
                if (g.length) {
                    g = g[0];
                    var h = Tc(g),
                        k = $c(g) ? g.split(".").slice(3) : [],
                        m = {};
                    m[f] = [Sc(g)];
                    Zc(m, b, h, k)
                }
            })
        })
    };
    var bd = /^UA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*(?:%3BUA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*)*$/,
        cd = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        dd = /^\d+\.fls\.doubleclick\.net$/,
        ed = /;gac=([^;?]+)/,
        fd = /;gclaw=([^;?]+)/,
        gd = /;gclgb=([^;?]+)/;

    function hd(a, b, c, d) {
        if (dd.test(a.location.host)) {
            if ((a = a.location.href.match(d)) && 2 == a.length && a[1].match(cd)) return [{
                j: a[1]
            }]
        } else return Rc((b || "_gcl") + c);
        return []
    }

    function id(a, b) {
        return hd(a, b, "_aw", fd).map(function(c) {
            return c.j
        }).join(".")
    }

    function jd(a, b) {
        return bc() ? hd(a, b, "_gb", gd).map(function(c) {
            return c.j
        }).join(".") : ""
    }

    function kd(a) {
        a = Rc(a);
        for (var b = 0, c = 0; c < a.length; c++) b = Math.max(b, a[c].timestamp);
        return b
    }

    function ld(a) {
        0 !== Qc("_gcl_aw").length || a && 0 !== Qc(a + "_aw").length || (Yc(), ad())
    };

    function md(a) {
        var b = u.performance;
        return b && b.timing && b.timing[a] || 0
    };
    var nd = {
        O: 0,
        H: 1,
        P: 2,
        J: 3,
        I: 4
    };

    function od() {
        this.g = {}
    }

    function pd(a, b, c) {
        "number" === typeof c && 0 < c && (a.g[b] = Math.round(c))
    }

    function qd(a) {
        var b = od.o();
        var c = void 0 === c ? u : c;
        c = c.performance;
        pd(b, a, c && c.now ? c.now() : null)
    }

    function rd() {
        function a() {
            return pd(b, 0, md("loadEventStart") - md("navigationStart"))
        }
        var b = od.o();
        0 != md("loadEventStart") ? a() : window.addEventListener("load", a)
    }

    function sd() {
        var a = od.o();
        return p(Object, "values").call(Object, nd).map(function(b) {
            return [b, a.g[b] || 0]
        })
    }
    ua(od);

    function td(a, b, c) {
        a = ud(a, !0);
        if (a[b]) return !1;
        a[b] = [];
        a[b][0] = c;
        return !0
    }

    function ud(a, b) {
        var c = a.GooglebQhCsO;
        c || (c = {}, b && (a.GooglebQhCsO = c));
        return c
    };
    var vd = {},
        wd = null;

    function xd(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 4;
        void 0 === a && (a = 0);
        if (!wd)
            for (wd = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                vd[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === wd[h] && (wd[h] = g)
                }
            }
        a = vd[a];
        c = [];
        for (d = 0; d < b.length; d += 3) {
            var k = b[d],
                m = (e = d + 1 < b.length) ? b[d + 1] : 0;
            h = (f = d + 2 < b.length) ? b[d + 2] : 0;
            g = k >> 2;
            k = (k & 3) << 4 | m >>
                4;
            m = (m & 15) << 2 | h >> 6;
            h &= 63;
            f || (h = 64, e || (m = 64));
            c.push(a[g], a[k], a[m] || "", a[h] || "")
        }
        return c.join("")
    };

    function yd(a, b, c, d) {
        var e = Hb(c, "fmt");
        if (d) {
            var f = Hb(c, "random"),
                g = Hb(c, "label") || "";
            if (!f) return !1;
            f = xd(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!td(a, f, d)) return !1
        }
        e && 4 != e && (c = J(c, "rfmt", e));
        e = J(c, "fmt", 4);
        c = Cb();
        hc();
        e = Za(e);
        Ab(c, e);
        c.onload = function() {
            a.google_noFurtherRedirects && d && d.call && (a.google_noFurtherRedirects = null, d())
        };
        b.getElementsByTagName("script")[0].parentElement.appendChild(c);
        return !0
    };
    var zd = K("false");

    function Ad() {
        if ("function" == typeof Q.__uspapi) {
            var a = "";
            try {
                Q.__uspapi("getUSPData", 1, function(b, c) {
                    c && b && (b = b.uspString) && /^[\da-zA-Z-]{1,20}$/.test(b) && (a = b)
                })
            } catch (b) {}
            return a
        }
    };
    var Bd = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" "),
        Cd = ["google_conversion_first_time", "google_conversion_snippets"];

    function U(a) {
        return null != a ? encodeURIComponent(String(a)) : ""
    }

    function Dd(a) {
        if (null != a) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }
        return ""
    }

    function V(a, b) {
        b = U(b);
        return "" != b && (a = U(a), "" != a) ? "&".concat(a, "=", b) : ""
    }

    function Ed(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function Fd(a) {
        if (!a || "object" != typeof a || "function" == typeof a.join) return "";
        var b = [],
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && "function" == typeof d.join) {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = Ed(d[f]);
                        null != g && e.push(g)
                    }
                    d = 0 == e.length ? null : e.join(",")
                } else d = Ed(d);
                (e = Ed(c)) && null != d && b.push(e + "=" + d)
            }
        return b.join(";")
    }

    function Gd(a) {
        return "number" != typeof a && "string" != typeof a ? "" : U(a.toString())
    }

    function Hd(a, b) {
        if (b.google_read_gcl_cookie_opt_out || b.google_remarketing_only || b.google_conversion_domain && (!b.google_gcl_cookie_prefix || !/^_ycl/.test(b.google_gcl_cookie_prefix))) return "";
        var c = "",
            d = "";
        b.google_gcl_cookie_prefix && /^[a-zA-Z0-9_]+$/.test(b.google_gcl_cookie_prefix) && "_gcl" != b.google_gcl_cookie_prefix && (d = b.google_gcl_cookie_prefix);
        b = d;
        if (bc())
            if (dd.test(a.location.host)) b = !(fd.test(a.location.href) || ed.test(a.location.href));
            else {
                var e = kd((b || "_gcl") + "_aw");
                b = kd((b || "_gcl") + "_gb") >
                    e
            }
        else b = !1;
        if (b) {
            if (d) return c = jd(a, d), V("gclgb", c);
            var f = jd(a);
            f && (c = V("gclgb", f));
            return c
        }
        if (d) return c = id(a, d), V("gclaw", c);
        (d = id(a)) && (c = V("gclaw", d));
        if (dd.test(a.location.host)) f = (f = a.location.href.match(ed)) && 2 == f.length && f[1].match(bd) ? decodeURIComponent(f[1]) : "";
        else {
            if (Oc()) {
                a = [];
                d = R.cookie.split(";");
                b = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/;
                for (e = 0; e < d.length; e++) {
                    var g = d[e].match(b);
                    g && a.push({
                        A: g[1],
                        value: g[2]
                    })
                }
                d = {};
                if (a && a.length)
                    for (b = 0; b < a.length; b++) e = a[b].value.split("."), "1" ==
                        e[0] && 3 === e.length && e[1] && (d[a[b].A] || (d[a[b].A] = []), d[a[b].A].push({
                            timestamp: e[1],
                            j: e[2]
                        }));
                a = d
            } else a = {};
            d = [];
            for (f in a) {
                b = [];
                e = a[f];
                for (g = 0; g < e.length; g++) b.push(e[g].j);
                d.push(f + ":" + b.join(","))
            }
            f = 0 < d.length ? d.join(";") : ""
        }
        return c + (f ? V("gac", f) : "")
    }

    function Id(a) {
        function b(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        }
        a = a ? a.title : "";
        if (void 0 == a || "" == a) return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c)
    }

    function Jd(a, b, c, d, e) {
        var f = void 0 === f ? null : f;
        var g = "https://",
            h = "landing" === d.google_conversion_type ? "/extclk" : "/";
        switch (e) {
            default: return "";
            case 2:
                    case 3:
                    var k = "googleads.g.doubleclick.net/";
                var m = "pagead/viewthroughconversion/";
                break;
            case 1:
                    k = "www.google.com/";m = "pagead/1p-conversion/";
                break;
            case 0:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "pagead/conversion/";
                break;
            case 4:
                    k = "www.google.com/",
                m = "pagead/privacysandbox/conversion/"
        }
        Sb && d.google_transport_url && (k = d.google_transport_url);
        "/" !== k[k.length - 1] && (k += "/");
        if (0 === k.indexOf("http://") || 0 === k.indexOf("https://")) g = "";
        g = [g, k, m, U(d.google_conversion_id), h, "?random=", U(d.google_conversion_time)].join("");
        var n = f;
        n = void 0 === n ? null : n;
        f = V("cv", d.google_conversion_js_version);
        k = V("fst", d.google_conversion_first_time);
        m = V("num", d.google_conversion_snippets);
        h = V("fmt", d.google_conversion_format);
        var v = d.google_remarketing_only ? V("userId", d.google_user_id) : "";
        var q = d.google_tag_for_child_directed_treatment;
        q = null == q || 0 != q && 1 != q ? "" :
            V("tfcd", q);
        var A = d.google_tag_for_under_age_of_consent;
        A = null == A || 0 != A && 1 != A ? "" : V("tfua", A);
        var xa = d.google_allow_ad_personalization_signals;
        xa = !1 === xa ? V("npa", 1) : !0 === xa ? V("npa", 0) : "";
        var ya = d.google_restricted_data_processing;
        ya = Ub ? !0 === ya ? V("rdp", 1) : !1 === ya ? V("rdp", 0) : "" : "";
        var Yd = V("value", d.google_conversion_value),
            Zd = V("currency_code", d.google_conversion_currency),
            $d = V("label", d.google_conversion_label),
            ae = V("oid", d.google_conversion_order_id),
            be = V("bg", d.google_conversion_color);
        a: {
            var w =
                d.google_conversion_language;
            if (null != w) {
                w = w.toString();
                if (2 == w.length) {
                    w = V("hl", w);
                    break a
                }
                if (5 == w.length) {
                    w = V("hl", w.substring(0, 2)) + V("gl", w.substring(3, 5));
                    break a
                }
            }
            w = ""
        }
        var ce = V("guid", "ON"),
            de = !d.google_conversion_domain && "GooglemKTybQhCsO" in u && "function" == typeof u.GooglemKTybQhCsO ? V("resp", "GooglemKTybQhCsO") : "",
            ee = V("disvt", d.google_disable_viewthrough),
            fe = V("eid", Zb().join());
        var da = d.google_conversion_date;
        var t = [];
        if (a) {
            var I = a.screen;
            I && (t.push(V("u_h", I.height)), t.push(V("u_w", I.width)),
                t.push(V("u_ah", I.availHeight)), t.push(V("u_aw", I.availWidth)), t.push(V("u_cd", I.colorDepth)));
            a.history && t.push(V("u_his", a.history.length))
        }
        da && "function" == typeof da.getTimezoneOffset && t.push(V("u_tz", -da.getTimezoneOffset()));
        b && ("function" == typeof b.javaEnabled && t.push(V("u_java", b.javaEnabled())), b.plugins && t.push(V("u_nplug", b.plugins.length)), b.mimeTypes && t.push(V("u_nmime", b.mimeTypes.length)));
        da = t.join("");
        t = V("gtm", d.google_gtm);
        b = b && b.sendBeacon ? V("sendb", "1") : "";
        I = Kd();
        var he = V("ig",
                /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0),
            G = n;
        G = void 0 === G ? null : G;
        n = Fd(d.google_custom_params);
        G = Fd(G);
        n = n.concat(0 < n.length && 0 < G.length ? ";" : "", G);
        n = "" == n ? "" : "&".concat("data=", encodeURIComponent(n));
        G = Hd(c, d);
        var mc = d.google_conversion_page_url,
            ie = d.google_conversion_referrer_url,
            za = "";
        if (c) {
            if (a.top == a) var x = 0;
            else {
                var N = a.location.ancestorOrigins;
                if (N) x = N[N.length - 1] == a.location.origin ? 1 : 2;
                else {
                    N = a.top;
                    try {
                        var B;
                        if (B = !!N && null != N.location.href) c: {
                            try {
                                Bb(N.foo);
                                B = !0;
                                break c
                            } catch (je) {}
                            B = !1
                        }
                        x = B
                    } catch (je) {
                        x = !1
                    }
                    x = x ? 1 : 2
                }
            }
            B = mc ? mc : 1 == x ? a.top.location.href : a.location.href;
            za += V("frm", x);
            za += V("url", Dd(B));
            za += V("ref", Dd(ie || c.referrer))
        }
        a = [f, k, m, h, v, q, A, xa, ya, Yd, Zd, $d, ae, be, w, ce, de, ee, fe, da, t, b, I, he, n, G, za, Id(c), Ld(d.google_additional_params), Ld(d.google_remarketing_only ? {} : d.google_additional_conversion_params), "&hn=" + U("www.googleadservices.com"), Md(a)].join("");
        c = Yb();
        a += 0 < c.length ? "&debug_experiment_id=" + c : "";
        if (d.google_remarketing_only || d.google_conversion_domain) d = a;
        else {
            c = [V("mid", d.google_conversion_merchant_id),
                V("fcntr", d.google_basket_feed_country), V("flng", d.google_basket_feed_language), V("dscnt", d.google_basket_discount), V("bttype", d.google_basket_transaction_type)
            ].join("");
            if (d)
                if (d = d.google_conversion_items) {
                    x = [];
                    B = 0;
                    for (f = d.length; B < f; B++) k = d[B], m = [], k && (m.push(Gd(k.value)), m.push(Gd(k.quantity)), m.push(Gd(k.item_id)), m.push(Gd(k.start_date)), m.push(Gd(k.end_date)), x.push("(" + m.join("*") + ")"));
                    d = 0 < x.length ? "&item=" + x.join("") : ""
                } else d = "";
            else d = "";
            d = [a, c, d].join("");
            d = 4E3 < d.length ? [a, V("item", "elngth")].join("") :
                d
        }
        g += d;
        1 === e ? g += [V("gcp", 1), V("sscte", 1), V("ct_cookie_present", 1)].join("") : 3 == e && (g += V("gcp", 1), g += V("ct_cookie_present", 1));
        Tb && (e = Ad(), void 0 !== e && (g += V("us_privacy", e || "error")));
        return g
    }

    function Nd(a, b, c, d, e, f, g) {
        return '<iframe name="' + a + '"' + (g ? ' id="' + g + '"' : "") + ' title="' + b + '" width="' + d + '" height="' + e + '"' + (c ? ' src="' + c + '"' : "") + ' frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true"' + (f ? ' style="display:none"' : "") + ' scrolling="no"></iframe>'
    }

    function Od(a) {
        return {
            ar: 1,
            bg: 1,
            cs: 1,
            da: 1,
            de: 1,
            el: 1,
            en_AU: 1,
            en_US: 1,
            en_GB: 1,
            es: 1,
            et: 1,
            fi: 1,
            fr: 1,
            hi: 1,
            hr: 1,
            hu: 1,
            id: 1,
            is: 1,
            it: 1,
            iw: 1,
            ja: 1,
            ko: 1,
            lt: 1,
            nl: 1,
            no: 1,
            pl: 1,
            pt_BR: 1,
            pt_PT: 1,
            ro: 1,
            ru: 1,
            sk: 1,
            sl: 1,
            sr: 1,
            sv: 1,
            th: 1,
            tl: 1,
            tr: 1,
            vi: 1,
            zh_CN: 1,
            zh_TW: 1
        }[a] ? a + ".html": "en_US.html"
    }

    function Pd(a, b, c, d) {
        function e(h, k, m, n) {
            return '<img height="' + m + '" width="' + k + '" border="0" alt="" src="' + h + '"' + (n ? ' style="display:none"' : "") + " />"
        }
        ac() && qd(2);
        var f = "";
        d.google_remarketing_only && d.google_enable_display_cookie_match && !zd && (M && L(["376635470", "376635471"], Ob, 2), f = d.google_remarketing_only && d.google_enable_display_cookie_match && !zd && M && "376635471" == O(2) ? Nd("google_cookie_match_frame", "Google cookie match frame", "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE", 1, 1, !0, null) : "");
        d.google_remarketing_only &&
            !d.google_conversion_domain && M && L(["759238990", "759238991"], Rb, 13);
        !d.google_remarketing_only || d.google_conversion_domain || M && ("759248991" == O(14) || "759248990" == O(14)) || M && L(["759248990", "759248991"], Qb, 14);
        !1 !== d.google_conversion_linker && (M && L(["2505059650", "2505059651"], Wb ? 1 : 0, 18), ld(d.google_gcl_cookie_prefix));
        b = Jd(a, b, c, d, d.google_remarketing_only ? 2 : 0);
        if (0 == d.google_conversion_format && null == d.google_conversion_domain) return '<a href="https://services.google.com/sitestats/' + (Od(d.google_conversion_language) +
            "?cid=" + U(d.google_conversion_id)) + '" target="_blank">' + e(b, 135, 27, !1) + "</a>" + f;
        if (1 < d.google_conversion_snippets || 3 == d.google_conversion_format) {
            var g = b;
            null == d.google_conversion_domain && (g = 3 == d.google_conversion_format ? b : J(b, "fmt", 3));
            return Qd(a, c, d, g) ? f : e(g, 1, 1, !0) + f
        }
        g = null;
        !d.google_conversion_domain && Qd(a, c, d, b) && (g = "goog_conv_iframe", b = "");
        return Nd("google_conversion_frame", "Google conversion frame", b, 2 == d.google_conversion_format ? 200 : 300, 2 == d.google_conversion_format ? 26 : 13, !1, g) + f
    }

    function Qd(a, b, c, d) {
        if (c.google_conversion_domain) return !1;
        try {
            return yd(a, b, d, null)
        } catch (e) {
            return !1
        }
    }

    function Rd(a) {
        if ("landing" == a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough) return !1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets = "number" == typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets + 1 : 1;
        "number" != typeof a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version =
            "9";
        0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 3);
        !1 !== a.google_enable_display_cookie_match && (a.google_enable_display_cookie_match = !0);
        return !0
    }

    function Sd(a) {
        for (var b = 0; b < Bd.length; b++) a[Bd[b]] = null
    }

    function Td(a) {
        for (var b = {}, c = 0; c < Bd.length; c++) b[Bd[c]] = a[Bd[c]];
        for (c = 0; c < Cd.length; c++) b[Cd[c]] = a[Cd[c]];
        return b
    }

    function Kd() {
        var a = "";
        ac() && (a = sd().map(function(b) {
            return b.join("-")
        }).join("_"));
        return V("li", a)
    }

    function Md(a) {
        if (!Vb || !a.__gsaExp || !a.__gsaExp.id) return "";
        a = a.__gsaExp.id;
        if ("function" != typeof a) return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : V("gsaexp", b)
        } catch (c) {
            return ""
        }
    }

    function Ld(a) {
        if (!a) return "";
        var b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += V(c, a[c]));
        return b
    };
    var Ud = {};

    function Vd() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var Wd;

    function Xd() {
        var a, b;
        void 0 === Wd && (Wd = null !== (b = null === (a = Vd()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
            createHTML: function(c) {
                return c
            },
            createScript: function(c) {
                return c
            },
            createScriptURL: function(c) {
                return c
            }
        })) && void 0 !== b ? b : null);
        return Wd
    };

    function W() {}

    function X(a, b) {
        if (b !== Ud) throw Error("Bad secret");
        this.g = a
    }
    X.prototype = ba(W.prototype);
    X.prototype.constructor = X;
    if (na) na(X, W);
    else
        for (var ge in W)
            if ("prototype" != ge)
                if (Object.defineProperties) {
                    var ke = Object.getOwnPropertyDescriptor(W, ge);
                    ke && Object.defineProperty(X, ge, ke)
                } else X[ge] = W[ge];
    X.G = W.prototype;
    X.prototype.toString = function() {
        return this.g.toString()
    };

    function le(a) {
        if (a instanceof W) {
            var b;
            if (null === (b = Vd()) || void 0 === b || !b.isHTML(a))
                if (a instanceof X) a = a.g;
                else throw Error("wrong type");
        } else a = H(a);
        return a
    };

    function me(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        d = a.write;
        var e = d.apply;
        c = c.map(le);
        if (!(c instanceof Array)) {
            var f = "undefined" != typeof l.Symbol && p(l.Symbol, "iterator") && c[p(l.Symbol, "iterator")];
            c = f ? f.call(c) : {
                next: aa(c)
            };
            for (var g = []; !(f = c.next()).done;) g.push(f.value);
            c = g
        }
        e.call(d, a, c)
    };

    function ne(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function oe(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function pe(a, b) {
        if (3 == ne(b)) return !1;
        a();
        return !0
    }

    function qe(a, b) {
        if (!pe(a, b)) {
            var c = !1,
                d = oe(b),
                e = function() {
                    !c && pe(a, b) && (c = !0, b.removeEventListener && b.removeEventListener(d, e, !1))
                };
            d && b.addEventListener && b.addEventListener(d, e, !1)
        }
    };

    function re(a) {
        var b = a.id,
            c = ["id"],
            d = {},
            e;
        for (e in a) Object.prototype.hasOwnProperty.call(a, e) && 0 > c.indexOf(e) && (d[e] = a[e]);
        if (null != a && "function" === typeof Object.getOwnPropertySymbols) {
            var f = 0;
            for (e = Object.getOwnPropertySymbols(a); f < e.length; f++) 0 > c.indexOf(e[f]) && (d[e[f]] = a[e[f]])
        }
        if (p(Object, "keys").call(Object, d).length) throw Error("Invalid attribute(s): " + p(Object, "keys").call(Object, d));
        a = {
            id: b
        };
        if (!sb.test("span")) throw Error("");
        if ("SPAN" in ub) throw Error("");
        b = null;
        c = "";
        if (a)
            for (k in a)
                if (Object.prototype.hasOwnProperty.call(a,
                        k)) {
                    if (!sb.test(k)) throw Error("");
                    e = a[k];
                    if (null != e) {
                        d = k;
                        f = e;
                        if (f instanceof z) f = Ea(f);
                        else if ("style" == d.toLowerCase()) {
                            e = void 0;
                            var g = typeof f;
                            if (("object" != g || null == f) && "function" != g) throw Error("");
                            if (!(f instanceof E)) {
                                g = "";
                                for (e in f)
                                    if (Object.prototype.hasOwnProperty.call(f, e)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(e)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + e);
                                        var h = f[e];
                                        null != h && (h = Array.isArray(h) ? Ha(h, ib).join(" ") : ib(h), g += e + ":" + h + ";")
                                    }
                                f = g ? new E(g, gb) : hb
                            }
                            f = f instanceof E && f.constructor ===
                                E ? f.h : "type_error:SafeStyle"
                        } else {
                            if (/^on/i.test(d)) throw Error("");
                            if (d.toLowerCase() in tb)
                                if (f instanceof C) f = Ya(f).toString();
                                else if (f instanceof D) f = ab(f);
                            else if ("string" === typeof f) f = (eb(f) || fb).g();
                            else throw Error("");
                        }
                        f.l && (f = f.g());
                        d = d + '="' + Ja(String(f)) + '"';
                        c += " " + d
                    }
                }
        var k = "<span" + c;
        c = void 0;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Ua.span ? k += ">" : (b = xb(c), k += ">" + H(b).toString() + "</span>", b = b.h());
        (a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? b = 0 : b = null);
        k = rb(k, b);
        k = le(k).toString();
        var m;
        a = null === (m = Xd()) || void 0 === m ? void 0 : m.createHTML(k);
        return new X(null !== a && void 0 !== a ? a : k, Ud)
    };
    M = new function() {
        var a = [],
            b = 0,
            c;
        for (c in $b) a[b++] = $b[c];
        this.h = {};
        this.g = {};
        a = a || [];
        b = 0;
        for (c = a.length; b < c; ++b) this.g[a[b]] = ""
    };
    L(["592230570", "592230571"], Pb, 16);
    ac() && (qd(1), rd());

    function se(a, b, c) {
        function d(m, n) {
            var v = new Image;
            v.onload = m;
            v.src = n
        }

        function e() {
            --f;
            if (0 >= f) {
                var m = ud(a, !1),
                    n = m[b];
                n && (delete m[b], (m = n[0]) && m.call && m())
            }
        }
        var f = c.length + 1;
        if (2 == c.length) {
            var g = c[0],
                h = c[1];
            0 <= Fb(g, 0, "rmt_tld", g.search(Gb)) && 0 <= Fb(g, 0, "ipr", g.search(Gb)) && !h.match(Db)[6] && (h += Eb(g), c[1] = J(h, "rmt_tld", "1"))
        }
        for (g = 0; g < c.length; g++) {
            h = c[g];
            var k = Hb(h, "fmt");
            switch (parseInt(k, 10)) {
                case 1:
                case 2:
                    (k = a.document.getElementById("goog_conv_iframe")) && !k.src ? (k.onload = e, k.src = h) : d(e, h);
                    break;
                case 4:
                    yd(a, a.document, h, e);
                    break;
                case 5:
                    if (a.navigator && a.navigator.sendBeacon)
                        if (a.navigator.sendBeacon(h, "")) {
                            e();
                            break
                        } else h = J(h, "sendb", 2);
                    h = J(h, "fmt", 3);
                default:
                    d(e, h)
            }
        }
        e()
    }
    var te = ["GooglemKTybQhCsO"],
        Y = u;
    te[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + te[0]);
    for (var Z; te.length && (Z = te.shift());) te.length || void 0 === se ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = se;
    (function(a, b, c) {
        if (a) {
            try {
                if (Rd(a))
                    if (3 == ne(c)) {
                        var d = Td(a),
                            e = "google_conversion_" + Math.floor(1E9 * Math.random());
                        me(c, re({
                            id: e
                        }));
                        qe(function() {
                            try {
                                var f = c.getElementById(e);
                                if (f) {
                                    var g = gc(Pd(a, b, c, d));
                                    if (yb())
                                        for (; f.lastChild;) f.removeChild(f.lastChild);
                                    f.innerHTML = H(g)
                                }
                            } catch (h) {}
                        }, c)
                    } else zb(c, gc(Pd(a, b, c, a)))
            } catch (f) {}
            Sd(a)
        }
    })(window, navigator, document);
}).call(this);