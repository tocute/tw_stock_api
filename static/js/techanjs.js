/*
 TechanJS v0.8.0-0
 (c) 2014 - 2016 Andre Dumas | https://github.com/andredumas/techan.js
*/
!function(a) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = a();
    else if ("function" == typeof define && define.amd)
        define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        b.techan = a()
    }
}(function() {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i)
                        return i(g, !0);
                    if (f)
                        return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND",
                    j
                }
                var k = c[g] = {
                    exports: {}
                };
                b[g][0].call(k.exports, function(a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, k, k.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
            e(d[g]);
        return e
    }({
        1: [function(a, b, c) {
            "use strict";
            b.exports = "0.8.0-0"
        }
        , {}],
        2: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.r(b)
                }
                function b() {
                    return a.d = c,
                    a.adx = d,
                    a.plusDi = e,
                    a.minusDi = f,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.adx
                }
                  , e = function(a) {
                    return a.plusDi
                }
                  , f = function(a) {
                    return a.minusDi
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.adx = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.plusDi = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                a.minusDi = function(a) {
                    return arguments.length ? (f = a,
                    b()) : f
                }
                ,
                b()
            }
        }
        , {}],
        3: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.r(b)
                }
                function b() {
                    return a.d = c,
                    a.up = d,
                    a.down = e,
                    a.oscillator = f,
                    a.ob = g,
                    a.os = h,
                    a.m = i,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.up
                }
                  , e = function(a) {
                    return a.down
                }
                  , f = function(a) {
                    return a.oscillator
                }
                  , g = function(a) {
                    return a.overbought
                }
                  , h = function(a) {
                    return a.oversold
                }
                  , i = function(a) {
                    return a.middle
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.up = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.down = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                a.oscillator = function(a) {
                    return arguments.length ? (f = a,
                    b()) : f
                }
                ,
                a.overbought = function(a) {
                    return arguments.length ? (g = a,
                    b()) : g
                }
                ,
                a.oversold = function(a) {
                    return arguments.length ? (h = a,
                    b()) : h
                }
                ,
                a.middle = function(a) {
                    return arguments.length ? (i = a,
                    b()) : i
                }
                ,
                b()
            }
        }
        , {}],
        4: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.up(b)
                }
                function b() {
                    return a.d = c,
                    a.up = d,
                    a.dn = e,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.up
                }
                  , e = function(a) {
                    return a.down
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.up = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.down = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                b()
            }
        }
        , {}],
        5: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.r(b)
                }
                function b() {
                    return a.d = c,
                    a.middle = d,
                    a.upper = e,
                    a.lower = f,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.middleBand
                }
                  , e = function(a) {
                    return a.upperBand
                }
                  , f = function(a) {
                    return a.lowerBand
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.middle = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.upper = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                a.lower = function(a) {
                    return arguments.length ? (f = a,
                    b()) : f
                }
                ,
                b()
            }
        }
        , {}],
        6: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.xv(b)
                }
                function b() {
                    return a.xv = c,
                    a.yv = d,
                    a
                }
                var c = function(b, c) {
                    return arguments.length < 2 ? b.x : (b.x = c,
                    a)
                }
                  , d = function(b, c) {
                    return arguments.length < 2 ? b.y : (b.y = c,
                    a)
                };
                return a.x = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.y = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                b()
            }
        }
        , {}],
        7: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.ts(b)
                }
                function b() {
                    return a.d = c,
                    a.ts = d,
                    a.ks = e,
                    a.sa = f,
                    a.sb = g,
                    a.c = h,
                    a.pts = i,
                    a.pks = j,
                    a.pssb = k,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.tenkanSen
                }
                  , e = function(a) {
                    return a.kijunSen
                }
                  , f = function(a) {
                    return a.senkouSpanA
                }
                  , g = function(a) {
                    return a.senkouSpanB
                }
                  , h = function(a) {
                    return a.chikouSpan
                }
                  , i = function(a) {
                    return a.parameters.tenkanSen
                }
                  , j = function(a) {
                    return a.parameters.kijunSen
                }
                  , k = function(a) {
                    return a.parameters.senkouSpanB
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.tenkanSen = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.kijunSen = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                a.senkouSpanA = function(a) {
                    return arguments.length ? (f = a,
                    b()) : f
                }
                ,
                a.senkouSpanB = function(a) {
                    return arguments.length ? (g = a,
                    b()) : g
                }
                ,
                a.chikouSpan = function(a) {
                    return arguments.length ? (h = a,
                    b()) : h
                }
                ,
                a.ptenanSen = function(a) {
                    return arguments.length ? (i = a,
                    b()) : i
                }
                ,
                a.pkijunSen = function(a) {
                    return arguments.length ? (j = a,
                    b()) : j
                }
                ,
                a.psenkouSpanB = function(a) {
                    return arguments.length ? (k = a,
                    b()) : k
                }
                ,
                b()
            }
        }
        , {}],
        8: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                return {
                    atrtrailingstop: a("./atrtrailingstop"),
                    crosshair: a("./crosshair"),
                    ichimoku: a("./ichimoku"),
                    macd: a("./macd"),
                    ohlc: a("./ohlc"),
                    rsi: a("./rsi"),
                    trendline: a("./trendline"),
                    value: a("./value"),
                    volume: a("./volume"),
                    tick: a("./tick"),
                    trade: a("./trade"),
                    adx: a("./adx"),
                    aroon: a("./aroon"),
                    stochastic: a("./stochastic"),
                    supstance: a("./supstance"),
                    williams: a("./williams"),
                    bollinger: a("./bollinger")
                }
            }
        }
        , {
            "./adx": 2,
            "./aroon": 3,
            "./atrtrailingstop": 4,
            "./bollinger": 5,
            "./crosshair": 6,
            "./ichimoku": 7,
            "./macd": 9,
            "./ohlc": 10,
            "./rsi": 11,
            "./stochastic": 12,
            "./supstance": 13,
            "./tick": 14,
            "./trade": 15,
            "./trendline": 16,
            "./value": 17,
            "./volume": 18,
            "./williams": 19
        }],
        9: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.m(b)
                }
                function b() {
                    return a.d = c,
                    a.m = d,
                    a.s = f,
                    a.dif = g,
                    a.z = e,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.macd
                }
                  , e = function(a) {
                    return a.zero
                }
                  , f = function(a) {
                    return a.signal
                }
                  , g = function(a) {
                    return a.difference
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.macd = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.signal = function(a) {
                    return arguments.length ? (f = a,
                    b()) : f
                }
                ,
                a.difference = function(a) {
                    return arguments.length ? (g = a,
                    b()) : g
                }
                ,
                b()
            }
        }
        , {}],
        10: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.c(b)
                }
                function b() {
                    return a.d = c,
                    a.o = d,
                    a.h = e,
                    a.l = f,
                    a.c = g,
                    a.v = h,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.open
                }
                  , e = function(a) {
                    return a.high
                }
                  , f = function(a) {
                    return a.low
                }
                  , g = function(a) {
                    return a.close
                }
                  , h = function(a) {
                    return a.volume
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.open = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.high = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                a.low = function(a) {
                    return arguments.length ? (f = a,
                    b()) : f
                }
                ,
                a.close = function(a) {
                    return arguments.length ? (g = a,
                    b()) : g
                }
                ,
                a.volume = function(a) {
                    return arguments.length ? (h = a,
                    b()) : h
                }
                ,
                b()
            }
        }
        , {}],
        11: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.r(b)
                }
                function b() {
                    return a.d = c,
                    a.r = d,
                    a.ob = e,
                    a.os = f,
                    a.m = g,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.rsi
                }
                  , e = function(a) {
                    return a.overbought
                }
                  , f = function(a) {
                    return a.oversold
                }
                  , g = function(a) {
                    return a.middle
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.rsi = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.overbought = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                a.oversold = function(a) {
                    return arguments.length ? (f = a,
                    b()) : f
                }
                ,
                a.middle = function(a) {
                    return arguments.length ? (g = a,
                    b()) : g
                }
                ,
                b()
            }
        }
        , {}],
        12: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.r(b)
                }
                function b() {
                    return a.d = c,
                    a.k = d,
                    a.sd = e,
                    a.ob = f,
                    a.os = g,
                    a.m = h,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.stochasticK
                }
                  , e = function(a) {
                    return a.stochasticD
                }
                  , f = function(a) {
                    return a.overbought
                }
                  , g = function(a) {
                    return a.oversold
                }
                  , h = function(a) {
                    return a.middle
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.stochasticK = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.stochasticD = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                a.overbought = function(a) {
                    return arguments.length ? (f = a,
                    b()) : f
                }
                ,
                a.oversold = function(a) {
                    return arguments.length ? (g = a,
                    b()) : g
                }
                ,
                a.middle = function(a) {
                    return arguments.length ? (h = a,
                    b()) : h
                }
                ,
                b()
            }
        }
        , {}],
        13: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.v(b)
                }
                function b() {
                    return a.s = c,
                    a.e = d,
                    a.v = e,
                    a
                }
                var c = function(a) {
                    return a.start
                }
                  , d = function(a) {
                    return a.end
                }
                  , e = function(b, c) {
                    return arguments.length < 2 ? b.value : (b.value = c,
                    a)
                };
                return a.start = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.end = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.value = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                b()
            }
        }
        , {}],
        14: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(a) {
                    b()
                }
                function b() {
                    return a.d = c,
                    a.h = d,
                    a.l = e,
                    a.s = f,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.high
                }
                  , e = function(a) {
                    return a.low
                }
                  , f = function(a) {
                    return a.spread
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.high = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.low = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                a.spread = function(a) {
                    return arguments.length ? (f = a,
                    b()) : f
                }
                ,
                b()
            }
        }
        , {}],
        15: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.p(b)
                }
                function b() {
                    return a.d = c,
                    a.t = d,
                    a.p = e,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.type
                }
                  , e = function(a) {
                    return a.price
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.type = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.price = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                b()
            }
        }
        , {}],
        16: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.sv(b)
                }
                function b() {
                    return a.sd = c,
                    a.sv = d,
                    a.ed = e,
                    a.ev = f,
                    a
                }
                var c = function(a, b) {
                    return arguments.length < 2 ? a.start.date : void (a.start.date = b)
                }
                  , d = function(a, b) {
                    return arguments.length < 2 ? a.start.value : void (a.start.value = b)
                }
                  , e = function(a, b) {
                    return arguments.length < 2 ? a.end.date : void (a.end.date = b)
                }
                  , f = function(a, b) {
                    return arguments.length < 2 ? a.end.value : void (a.end.value = b)
                };
                return a.startDate = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.startValue = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.endDate = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                a.endValue = function(a) {
                    return arguments.length ? (f = a,
                    b()) : f
                }
                ,
                b()
            }
        }
        , {}],
        17: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.v(b)
                }
                function b() {
                    return a.d = c,
                    a.v = d,
                    a.z = e,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(b, c) {
                    return arguments.length < 2 ? b.value : (b.value = c,
                    a)
                }
                  , e = function(a) {
                    return a.zero
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.value = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                a.zero = function(a) {
                    return arguments.length ? (e = a,
                    b()) : e
                }
                ,
                b()
            }
        }
        , {}],
        18: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.v(b)
                }
                function b() {
                    return a.d = c,
                    a.v = d,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.volume
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.volume = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                b()
            }
        }
        , {}],
        19: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b) {
                    return a.r(b)
                }
                function b() {
                    return a.d = c,
                    a.w = d,
                    a
                }
                var c = function(a) {
                    return a.date
                }
                  , d = function(a) {
                    return a.williams
                };
                return a.date = function(a) {
                    return arguments.length ? (c = a,
                    b()) : c
                }
                ,
                a.williams = function(a) {
                    return arguments.length ? (d = a,
                    b()) : d
                }
                ,
                b()
            }
        }
        , {}],
        20: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d) {
                return c ? {
                    date: a,
                    adx: b,
                    plusDi: c,
                    minusDi: d
                } : {
                    date: a,
                    adx: null,
                    plusDi: null,
                    minusDi: null
                }
            }
            b.exports = function(a, b, c, e) {
                return function() {
                    function f(b) {
                        var c = e().accessor(f.accessor()).period(h).init()
                          , i = e().accessor(f.accessor()).period(h).init()
                          , j = e().accessor(f.accessor()).period(h).init()
                          , k = e().accessor(f.accessor()).period(h).init();
                        return h = parseInt(h),
                        b.map(function(e, f) {
                            if (f < 1)
                                return d(g.accessor.d(e));
                            var l = g.accessor.h(b[f]) - g.accessor.h(b[f - 1])
                              , m = g.accessor.l(b[f - 1]) - g.accessor.l(b[f])
                              , n = 0;
                            l > m && l > 0 && (n = l);
                            var o = 0;
                            m > l && m > 0 && (o = m);
                            var p = a([g.accessor.h(e) - g.accessor.l(e), Math.abs(g.accessor.h(e) - g.accessor.c(b[f - 1])), Math.abs(g.accessor.l(e) - g.accessor.c(b[f - 1]))])
                              , q = c.average(n)
                              , r = i.average(o)
                              , s = j.average(p);
                            if (f > h) {
                                var t = 100 * q / s
                                  , u = 100 * r / s
                                  , v = 0;
                                t - u !== 0 && (v = Math.abs((t - u) / (t + u)));
                                var w = 100 * k.average(v);
                                return f >= 2 * h ? d(g.accessor.d(e), w, t, u) : d(g.accessor.d(e))
                            }
                            return d(g.accessor.d(e))
                        }).filter(function(a) {
                            return a.adx
                        })
                    }
                    var g = {}
                      , h = 14;
                    return f.period = function(a) {
                        return arguments.length ? (h = a,
                        f) : h
                    }
                    ,
                    b(f, g).accessor(c()),
                    f
                }
            }
        }
        , {}],
        21: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f, g) {
                return b ? {
                    date: a,
                    up: b,
                    down: c,
                    oscillator: d,
                    middle: e,
                    overbought: f,
                    oversold: g
                } : {
                    date: a,
                    up: null,
                    down: null,
                    oscillator: null,
                    middle: null,
                    overbought: null,
                    oversold: null
                }
            }
            b.exports = function(a, b) {
                return function() {
                    function c(a) {
                        return a.map(function(b, c) {
                            if (c >= f - 1) {
                                for (var j = 0, k = 0, l = 1e4, m = 0, n = 0; n < f; n++)
                                    e.accessor.h(a[c - n]) > j && (j = e.accessor.h(a[c - n]),
                                    k = n),
                                    e.accessor.l(a[c - n]) < l && (l = e.accessor.l(a[c - n]),
                                    m = n);
                                var o = (f - k) / f * 100
                                  , p = (f - m) / f * 100
                                  , q = o - p;
                                return d(e.accessor.d(b), o, p, q, h, g, i)
                            }
                            return d(e.accessor.d(b))
                        }).filter(function(a) {
                            return a.up
                        })
                    }
                    var e = {}
                      , f = 20
                      , g = 70
                      , h = 0
                      , i = 30;
                    return c.period = function(a) {
                        return arguments.length ? (f = a,
                        c) : f
                    }
                    ,
                    c.overbought = function(a) {
                        return arguments.length ? (g = a,
                        c) : g
                    }
                    ,
                    c.middle = function(a) {
                        return arguments.length ? (h = a,
                        c) : h
                    }
                    ,
                    c.oversold = function(a) {
                        return arguments.length ? (i = a,
                        c) : i
                    }
                    ,
                    a(c, e).accessor(b()),
                    c
                }
            }
        }
        , {}],
        22: [function(a, b, c) {
            "use strict";
            function d(a, b) {
                return b ? {
                    date: a,
                    value: b
                } : {
                    date: a,
                    value: null
                }
            }
            b.exports = function(a, b, c) {
                return function() {
                    function e(a) {
                        return e.init(),
                        a.map(function(a, b) {
                            var c = e.atr(a);
                            return b >= f.period ? d(f.accessor.d(a), c) : d(f.accessor.d(a))
                        }).filter(function(a) {
                            return null !== a.value
                        })
                    }
                    var f = {}
                      , g = c()
                      , h = null
                      , i = 0
                      , j = 0;
                    return e.init = function() {
                        return g.accessor(e.accessor()).period(f.period).init(),
                        h = null,
                        i = 0,
                        j = 0,
                        e
                    }
                    ,
                    e.atr = function(a) {
                        var b = null === h ? f.accessor.h(a) - f.accessor.l(a) : Math.max(f.accessor.h(a) - f.accessor.l(a), Math.abs(f.accessor.h(a) - f.accessor.c(h)), Math.abs(f.accessor.l(a) - f.accessor.c(h)));
                        return h = a,
                        i = j++ <= f.period ? g.average(b) : (i * (f.period - 1) + b) / f.period
                    }
                    ,
                    a(e, f).accessor(b()).period(14),
                    e
                }
            }
        }
        , {}],
        23: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b, c) {
                return function() {
                    function d(a) {
                        return g.accessor(e.accessor).period(e.period).init(),
                        a.map(function(a, b) {
                            var c = e.accessor.c(a)
                              , d = g.atr(a) * f;
                            return b >= e.period ? {
                                date: e.accessor.d(a),
                                close: c,
                                up: c - d,
                                down: c + d
                            } : {
                                date: e.accessor.d(a),
                                up: null,
                                down: null
                            }
                        }).filter(function(a) {
                            return null !== a.up && null !== a.down
                        }).reduce(function(a, b, c) {
                            var d = a[c - 1]
                              , e = 0 === c ? b.up : null
                              , f = null;
                            return d && null !== d.up && (b.close > d.up ? e = Math.max(b.up, d.up) : f = b.down),
                            d && null !== d.down && (b.close < d.down ? f = Math.min(b.down, d.down) : e = b.up),
                            a.push({
                                date: b.date,
                                up: e,
                                down: f
                            }),
                            a
                        }, [])
                    }
                    var e = {}
                      , f = 3
                      , g = c();
                    return d.multiplier = function(a) {
                        return arguments.length ? (f = a,
                        d) : f
                    }
                    ,
                    a(d, e).accessor(b()).period(14),
                    d
                }
            }
        }
        , {}],
        24: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d) {
                return b ? {
                    date: a,
                    middleBand: b,
                    upperBand: c,
                    lowerBand: d
                } : {
                    date: a,
                    middleBand: null,
                    upperBand: null,
                    lowerBand: null
                }
            }
            b.exports = function(a, b, c) {
                return function() {
                    function e(a) {
                        var b, j = c().accessor(e.accessor()).period(h).init();
                        return a.map(function(c, e) {
                            var k = j.average(g.accessor(c));
                            if (e >= h) {
                                var l = 0;
                                for (b = 0; b < h; b++)
                                    l += Math.pow(g.accessor.c(a[e - b]) - k, 2);
                                f = Math.sqrt(l / h);
                                var m = k + i * f
                                  , n = k - i * f;
                                return d(g.accessor.d(c), k, m, n)
                            }
                            return d(g.accessor.d(c))
                        }).filter(function(a) {
                            return a.middleBand
                        })
                    }
                    var f, g = {}, h = 20, i = 2;
                    return e.period = function(a) {
                        return arguments.length ? (h = a,
                        e) : h
                    }
                    ,
                    e.sdMultiplication = function(a) {
                        return arguments.length ? (i = a,
                        e) : i
                    }
                    ,
                    a(e, g).accessor(b()),
                    e
                }
            }
        }
        , {}],
        25: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b, c) {
                return function() {
                    function d(a) {
                        return d.init(),
                        a.map(e).filter(function(a) {
                            return null !== a.value
                        })
                    }
                    function e(a, b) {
                        var c = d.average(j.accessor(a));
                        return b + 1 < j.period && (c = null),
                        {
                            date: j.accessor.d(a),
                            value: c
                        }
                    }
                    var f, g, h, i, j = {};
                    return d.init = function() {
                        return f = null,
                        g = c(j.period),
                        h = 0,
                        i = 0,
                        d
                    }
                    ,
                    d.average = function(a) {
                        return i < j.period ? f = (h += a) / ++i : f += g * (a - f)
                    }
                    ,
                    a(d, j).accessor(b()).period(10),
                    d
                }
            }
        }
        , {}],
        26: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b, c, d) {
                return function() {
                    function e(a) {
                        var b;
                        return a.map(function(a) {
                            var e = {
                                date: f.accessor.d(a),
                                open: (void 0 === b ? f.accessor.o(a) + f.accessor.c(a) : b.open + b.close) / 2,
                                close: (f.accessor.o(a) + f.accessor.h(a) + f.accessor.l(a) + f.accessor.c(a)) / 4
                            };
                            return e.high = d([e.open, e.close, f.accessor.h(a)]),
                            e.low = c([e.open, e.close, f.accessor.l(a)]),
                            void 0 !== f.accessor.v && void 0 !== f.accessor.v(a) && (e.volume = f.accessor.v(a)),
                            b = e
                        })
                    }
                    var f = {};
                    return a(e, f).accessor(b()),
                    e
                }
            }
        }
        , {}],
        27: [function(a, b, c) {
            "use strict";
            function d(a, b, c) {
                return {
                    parameters: a,
                    date: b,
                    chikouSpan: c,
                    tenkanSen: null,
                    kijunSen: null,
                    senkouSpanA: null,
                    senkouSpanB: null
                }
            }
            function e(a, b) {
                return null !== a && null !== b ? f(a, b) : null
            }
            function f(a, b) {
                return (a + b) / 2
            }
            b.exports = function(a, b) {
                return function() {
                    function c(a) {
                        for (var b = {
                            tenkanSen: i,
                            kijunSen: j,
                            senkouSpanB: k
                        }, c = new Array(a.length), d = c.length - 1; d >= 0; d--)
                            c[d] = g(b, a, d);
                        return c
                    }
                    function g(a, b, c) {
                        for (var g = b[c], i = h.accessor.l(g), j = h.accessor.h(g), k = d(a, h.accessor.d(g), h.accessor.c(g)), l = 0, m = l + 1; l < a.senkouSpanB && c - l >= 0; l++,
                        m = l + 1)
                            g = b[c - l],
                            i = Math.min(i, h.accessor.l(g)),
                            j = Math.max(j, h.accessor.h(g)),
                            k.tenkanSen = m === a.tenkanSen ? f(i, j) : k.tenkanSen,
                            k.kijunSen = m === a.kijunSen ? f(i, j) : k.kijunSen,
                            k.senkouSpanB = m === a.senkouSpanB ? f(i, j) : k.senkouSpanB;
                        return k.senkouSpanA = e(k.tenkanSen, k.kijunSen),
                        k
                    }
                    var h = {}
                      , i = 9
                      , j = 26
                      , k = 52;
                    return c.tenkanSen = function(a) {
                        return arguments.length ? (i = a,
                        c) : i
                    }
                    ,
                    c.kijunSen = function(a) {
                        return arguments.length ? (j = a,
                        c) : j
                    }
                    ,
                    c.senkouSpanB = function(a) {
                        return arguments.length ? (k = a,
                        c) : k
                    }
                    ,
                    a(c, h).accessor(b()),
                    c
                }
            }
        }
        , {}],
        28: [function(a, b, c) {
            "use strict";
            function d(a) {
                return 2 / (a + 1)
            }
            function e(a) {
                return 1 / a
            }
            b.exports = function(b) {
                var c = a("./indicatormixin")()
                  , f = a("../accessor")()
                  , g = a("./ema")
                  , h = g(c, f.ohlc, d)
                  , i = a("./sma")(c, f.ohlc)
                  , j = a("./atr")(c, f.ohlc, i)
                  , k = a("./vwap")(c, f.ohlc);
                return {
                    atr: j,
                    atrtrailingstop: a("./atrtrailingstop")(c, f.ohlc, j),
                    ema: h,
                    heikinashi: a("./heikinashi")(c, f.ohlc, b.min, b.max),
                    ichimoku: a("./ichimoku")(c, f.ohlc),
                    macd: a("./macd")(c, f.ohlc, h),
                    rsi: a("./rsi")(c, f.ohlc, h),
                    sma: i,
                    wilderma: g(c, f.ohlc, e),
                    aroon: a("./aroon")(c, f.ohlc),
                    stochastic: a("./stochastic")(c, f.ohlc, h),
                    williams: a("./williams")(c, f.ohlc, h),
                    adx: a("./adx")(b.max, c, f.ohlc, h),
                    bollinger: a("./bollinger")(c, f.ohlc, i),
                    vwap: k
                }
            }
        }
        , {
            "../accessor": 8,
            "./adx": 20,
            "./aroon": 21,
            "./atr": 22,
            "./atrtrailingstop": 23,
            "./bollinger": 24,
            "./ema": 25,
            "./heikinashi": 26,
            "./ichimoku": 27,
            "./indicatormixin": 29,
            "./macd": 30,
            "./rsi": 31,
            "./sma": 32,
            "./stochastic": 33,
            "./vwap": 34,
            "./williams": 35
        }],
        29: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                return function(a, b) {
                    var c = {};
                    return c.period = function(d) {
                        return b.period = d,
                        a.period = function(c) {
                            return arguments.length ? (b.period = +c,
                            a) : b.period
                        }
                        ,
                        c
                    }
                    ,
                    c.accessor = function(d) {
                        return b.accessor = d,
                        a.accessor = function(c) {
                            return arguments.length ? (b.accessor = c,
                            a) : b.accessor
                        }
                        ,
                        c
                    }
                    ,
                    c
                }
            }
        }
        , {}],
        30: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d, e) {
                return b ? {
                    date: a,
                    macd: b,
                    signal: c,
                    difference: d,
                    zero: e
                } : {
                    date: a,
                    macd: null,
                    signal: null,
                    difference: null,
                    zero: null
                }
            }
            b.exports = function(a, b, c) {
                return function() {
                    function e(a) {
                        var b = Math.max(g, h) - 1
                          , c = b + i - 1;
                        return j.accessor(e.accessor()).period(i).init(),
                        k.accessor(e.accessor()).period(g).init(),
                        l.accessor(e.accessor()).period(h).init(),
                        a.map(function(a, e) {
                            var g = k.average(f.accessor(a)) - l.average(f.accessor(a))
                              , h = e >= b ? j.average(g) : null;
                            return e >= c ? d(f.accessor.d(a), g, h, g - h, 0) : d(f.accessor.d(a))
                        }).filter(function(a) {
                            return null !== a.macd
                        })
                    }
                    var f = {}
                      , g = 12
                      , h = 26
                      , i = 9
                      , j = c()
                      , k = c()
                      , l = c();
                    return e.fast = function(a) {
                        return arguments.length ? (g = a,
                        e) : g
                    }
                    ,
                    e.slow = function(a) {
                        return arguments.length ? (h = a,
                        e) : h
                    }
                    ,
                    e.signal = function(a) {
                        return arguments.length ? (i = a,
                        e) : i
                    }
                    ,
                    a(e, f).accessor(b()),
                    e
                }
            }
        }
        , {}],
        31: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d, e) {
                return b ? {
                    date: a,
                    rsi: b,
                    middle: c,
                    overbought: d,
                    oversold: e
                } : {
                    date: a,
                    rsi: null,
                    middle: null,
                    overbought: null,
                    oversold: null
                }
            }
            b.exports = function(a, b, c) {
                return function() {
                    function e(a) {
                        return j.accessor(e.accessor()).period(f.period).init(),
                        k.accessor(e.accessor()).period(f.period).init(),
                        a.map(function(b, c) {
                            if (c < 1)
                                return d(f.accessor.d(b));
                            var e = f.accessor(b) - f.accessor(a[c - 1])
                              , l = k.average(Math.max(e, 0))
                              , m = Math.abs(j.average(Math.min(e, 0)));
                            if (c >= f.period) {
                                var n = 100 - 100 / (1 + l / m);
                                return d(f.accessor.d(b), n, h, g, i)
                            }
                            return d(f.accessor.d(b))
                        }).filter(function(a) {
                            return null !== a.rsi
                        })
                    }
                    var f = {}
                      , g = 70
                      , h = 50
                      , i = 30
                      , j = c()
                      , k = c();
                    return e.overbought = function(a) {
                        return arguments.length ? (g = a,
                        e) : g
                    }
                    ,
                    e.middle = function(a) {
                        return arguments.length ? (h = a,
                        e) : h
                    }
                    ,
                    e.oversold = function(a) {
                        return arguments.length ? (i = a,
                        e) : i
                    }
                    ,
                    a(e, f).accessor(b()).period(14),
                    e
                }
            }
        }
        , {}],
        32: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b) {
                return function() {
                    function c(a) {
                        return c.init(),
                        a.map(d).filter(function(a) {
                            return null !== a.value
                        })
                    }
                    function d(a, b) {
                        var d = c.average(h.accessor(a));
                        return b + 1 < h.period && (d = null),
                        {
                            date: h.accessor.d(a),
                            value: d
                        }
                    }
                    var e, f, g, h = {};
                    return c.init = function() {
                        return g = 0,
                        e = [],
                        f = 0,
                        c
                    }
                    ,
                    c.average = function(a) {
                        return g += a,
                        e.length + 1 < h.period ? (e.push(a),
                        g / ++f) : (e.length < h.period && (e.push(a),
                        g += a),
                        g -= e[f],
                        e[f] = a,
                        ++f === h.period && (f = 0),
                        g / h.period)
                    }
                    ,
                    a(c, h).accessor(b()).period(10),
                    c
                }
            }
        }
        , {}],
        33: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f) {
                return b ? {
                    date: a,
                    stochasticK: b,
                    stochasticD: c,
                    middle: d,
                    overbought: e,
                    oversold: f
                } : {
                    date: a,
                    stochasticK: null,
                    stochasticD: null,
                    middle: d,
                    overbought: e,
                    oversold: f
                }
            }
            b.exports = function(a, b) {
                return function() {
                    function c(a) {
                        var b = parseInt(f) + parseInt(g);
                        return a.map(function(c, k) {
                            if (k >= b) {
                                for (var l = [], m = [], n = [], o = 0; o < g; o++)
                                    l.push(0),
                                    m.push(1e4),
                                    n.push(0);
                                for (var p = 0, q = 0; q < g; q++) {
                                    for (var r = 0; r < f; r++)
                                        e.accessor.h(a[k - r - q]) > l[q] && (l[q] = e.accessor.h(a[k - r - q])),
                                        e.accessor.l(a[k - r - q]) < m[q] && (m[q] = e.accessor.l(a[k - r - q]));
                                    var s = l[q] - m[q];
                                    s > 0 ? n[q] = (e.accessor.c(a[k - q]) - m[q]) / (l[q] - m[q]) * 100 : n[q] = 50,
                                    p += n[q]
                                }
                                var t = n[0];
                                return p /= g,
                                d(e.accessor.d(c), t, p, i, h, j)
                            }
                            return d(e.accessor.d(c), null, null, i, h, j)
                        }).filter(function(a) {
                            return a.stochasticK
                        })
                    }
                    var e = {}
                      , f = 20
                      , g = 3
                      , h = 80
                      , i = 50
                      , j = 20;
                    return c.period = function(a) {
                        return arguments.length ? (f = a,
                        c) : f
                    }
                    ,
                    c.periodD = function(a) {
                        return arguments.length ? (g = a,
                        c) : g
                    }
                    ,
                    c.overbought = function(a) {
                        return arguments.length ? (h = a,
                        c) : h
                    }
                    ,
                    c.middle = function(a) {
                        return arguments.length ? (i = a,
                        c) : i
                    }
                    ,
                    c.oversold = function(a) {
                        return arguments.length ? (j = a,
                        c) : j
                    }
                    ,
                    a(c, e).accessor(b()),
                    c
                }
            }
        }
        , {}],
        34: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b) {
                return function() {
                    function c(a) {
                        return c.init(),
                        a.map(d).filter(function(a) {
                            return null !== a.value
                        })
                    }
                    function d(a, b) {
                        b > 0 && g.getDate() != h.accessor.d(a).getDate() && (e = 0,
                        f = 0);
                        var c = (h.accessor.h(a) + h.accessor.l(a) + h.accessor.c(a)) / 3;
                        return e += c * h.accessor.v(a),
                        f += h.accessor.v(a),
                        g = h.accessor.d(a),
                        {
                            date: h.accessor.d(a),
                            value: e / f
                        }
                    }
                    var e, f, g, h = {};
                    return c.init = function() {
                        return e = 0,
                        f = 0,
                        c
                    }
                    ,
                    a(c, h).accessor(b()).period(1),
                    c
                }
            }
        }
        , {}],
        35: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d, e) {
                return b ? {
                    date: a,
                    williams: b,
                    middle: c,
                    overbought: d,
                    oversold: e
                } : {
                    date: a,
                    williams: null,
                    middle: null,
                    overbought: null,
                    oversold: null
                }
            }
            b.exports = function(a, b) {
                return function() {
                    function c(a) {
                        return a.map(function(b, c) {
                            if (c >= f) {
                                for (var j = 0, k = 0, l = 1e4, m = 0, n = 0; n < f; n++)
                                    e.accessor.h(a[c - n]) > j && (j = e.accessor.h(a[c - n]),
                                    k = n),
                                    e.accessor.l(a[c - n]) < l && (l = e.accessor.l(a[c - n]),
                                    m = n);
                                var o = (e.accessor.c(a[c]) - l) / (j - l) * 100;
                                return d(e.accessor.d(b), o, h, g, i)
                            }
                            return d(e.accessor.d(b))
                        }).filter(function(a) {
                            return a.williams
                        })
                    }
                    var e = {}
                      , f = 20
                      , g = 80
                      , h = 50
                      , i = 20;
                    return c.period = function(a) {
                        return arguments.length ? (f = a,
                        c) : f
                    }
                    ,
                    c.overbought = function(a) {
                        return arguments.length ? (g = a,
                        c) : g
                    }
                    ,
                    c.middle = function(a) {
                        return arguments.length ? (h = a,
                        c) : h
                    }
                    ,
                    c.oversold = function(a) {
                        return arguments.length ? (i = a,
                        c) : i
                    }
                    ,
                    a(c, e).accessor(b()),
                    c
                }
            }
        }
        , {}],
        36: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d) {
                a.select("path.adx").attr("d", b),
                a.select("path.plusDi").attr("d", c),
                a.select("path.minusDi").attr("d", d)
            }
            b.exports = function(a, b, c) {
                return function() {
                    function e(a) {
                        var b = g.dataSelector(a);
                        b.entry.append("path").attr("class", "adx"),
                        b.entry.append("path").attr("class", "plusDi"),
                        b.entry.append("path").attr("class", "minusDi"),
                        e.refresh(a)
                    }
                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.adx, g.yScale),
                        i.init(g.accessor.d, g.xScale, g.accessor.plusDi, g.yScale),
                        j.init(g.accessor.d, g.xScale, g.accessor.minusDi, g.yScale)
                    }
                    var g = {}
                      , h = b.pathLine()
                      , i = b.pathLine()
                      , j = b.pathLine();
                    return e.refresh = function(a) {
                        d(g.dataSelector.select(a), h, i, j)
                    }
                    ,
                    c(e, g).plot(a(), f).dataSelector(c.dataMapper.array),
                    f(),
                    e
                }
            }
        }
        , {}],
        37: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f, g, h, i, j) {
                a.select("path.overbought").attr("d", e.horizontalPathLine(b.d, c, b.ob, d)),
                a.select("path.oversold").attr("d", e.horizontalPathLine(b.d, c, b.os, d)),
                a.select("path.aroon.oscillator").attr("d", f),
                a.select("path.aroon.oscillatorArea").attr("d", g),
                a.select("path.aroon.middle").attr("d", h),
                a.select("path.aroon.up").attr("d", i),
                a.select("path.aroon.down").attr("d", j)
            }
            b.exports = function(a, b, c) {
                return function() {
                    function e(a) {
                        var b = g.dataSelector(a);
                        b.entry.append("path").attr("class", "overbought"),
                        b.entry.append("path").attr("class", "oversold"),
                        b.entry.append("path").attr("class", "aroon oscillator"),
                        b.entry.append("path").attr("class", "aroon oscillatorArea"),
                        b.entry.append("path").attr("class", "aroon middle"),
                        b.entry.append("path").attr("class", "aroon up"),
                        b.entry.append("path").attr("class", "aroon down"),
                        e.refresh(a)
                    }
                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.oscillator, g.yScale),
                        i.init(g.accessor.d, g.xScale, g.accessor.oscillator, g.yScale, 0),
                        j.init(g.accessor.d, g.xScale, g.accessor.m, g.yScale),
                        k.init(g.accessor.d, g.xScale, g.accessor.up, g.yScale),
                        l.init(g.accessor.d, g.xScale, g.accessor.down, g.yScale)
                    }
                    var g = {}
                      , h = b.pathLine()
                      , i = b.pathArea()
                      , j = b.pathLine()
                      , k = b.pathLine()
                      , l = b.pathLine();
                    return e.refresh = function(a) {
                        d(g.dataSelector.select(a), g.accessor, g.xScale, g.yScale, b, h, i, j, k, l)
                    }
                    ,
                    c(e, g).plot(a(), f).dataSelector(c.dataMapper.array),
                    f(),
                    e
                }
            }
        }
        , {}],
        38: [function(a, b, c) {
            "use strict";
            function d(a, b, c) {
                a.select("path.up").attr("d", b),
                a.select("path.down").attr("d", c)
            }
            b.exports = function(a, b, c) {
                return function() {
                    function e(a) {
                        var b = g.dataSelector(a);
                        b.entry.append("path").attr("class", "up"),
                        b.entry.append("path").attr("class", "down"),
                        e.refresh(a)
                    }
                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.up, g.yScale),
                        i.init(g.accessor.d, g.xScale, g.accessor.dn, g.yScale)
                    }
                    var g = {}
                      , h = b.pathLine()
                      , i = b.pathLine();
                    return e.refresh = function(a) {
                        d(g.dataSelector.select(a), h, i)
                    }
                    ,
                    c(e, g).plot(a(), f).dataSelector(c.dataMapper.array),
                    f(),
                    e
                }
            }
        }
        , {}],
        39: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d, e, g, j, k, l) {
                var m = "left" === d || "top" === d ? -1 : 1;
                a.attr("transform", "translate(" + l[0] + "," + l[1] + ")"),
                a.select("path").attr("d", i(b, c, d, g, j, k, m)),
                a.select("text").text(h(b, e)).call(f, b, c, d, m)
            }
            function e(a, b) {
                return function(c) {
                    var d = b.range()
                      , e = d[0]
                      , f = d[d.length - 1];
                    return d = e < f ? [e, f] : [f, e],
                    c.filter(function(c) {
                        if (null === a(c) || void 0 === a(c))
                            return !1;
                        var e = b(a(c));
                        return null !== e && !isNaN(e) && d[0] <= e && e <= d[1]
                    })
                }
            }
            function f(a, b, c, d, e) {
                var f = c.scale();
                switch (d) {
                case "left":
                case "right":
                    a.attr("x", e * (Math.max(c.tickSizeInner(), 0) + c.tickPadding())).attr("y", g(b, f)).attr("dy", ".32em").style("text-anchor", e < 0 ? "end" : "start");
                    break;
                case "top":
                case "bottom":
                    a.attr("x", g(b, f)).attr("y", e * (Math.max(c.tickSizeInner(), 0) + c.tickPadding())).attr("dy", e < 0 ? "0em" : ".72em").style("text-anchor", "middle")
                }
            }
            function g(a, b) {
                return function(c) {
                    return b(a(c))
                }
            }
            function h(a, b) {
                return function(c) {
                    return b(a(c))
                }
            }
            function i(a, b, c, d, e, f, g) {
                return function(h) {
                    var i = b.scale()
                      , j = i(a(h))
                      , k = f;
                    switch (c) {
                    case "left":
                    case "right":
                        var l = 0;
                        return d / 2 < f ? k = d / 2 : l = d / 2 - f,
                        "M 0 " + j + " l " + g * Math.max(b.tickSizeInner(), 1) + " " + -k + " l 0 " + -l + " l " + g * e + " 0 l 0 " + d + " l " + g * -e + " 0 l 0 " + -l;
                    case "top":
                    case "bottom":
                        var m = 0;
                        return e / 2 < f ? k = e / 2 : m = e / 2 - f,
                        "M " + j + " 0 l " + -k + " " + g * Math.max(b.tickSizeInner(), 1) + " l " + -m + " 0 l 0 " + g * d + " l " + e + " 0 l 0 " + g * -d + " l " + -m + " 0";
                    default:
                        throw "Unsupported orient value: axisannotation.orient(" + c + "). Set to one of: 'top', 'bottom', 'left', 'right'"
                    }
                }
            }
            b.exports = function(a, b, c, f, g) {
                return function() {
                    function f(a) {
                        var b = i.dataSelector.mapper(e(i.accessor, j.scale()))(a);
                        b.entry.append("path"),
                        b.entry.append("text"),
                        f.refresh(a)
                    }
                    var h, i = {}, j = a(b()), k = 4, l = 14, m = 50, n = [0, 0], o = "bottom";
                    return f.refresh = function(a) {
                        var b = h ? h : j.tickFormat() ? j.tickFormat() : j.scale().tickFormat();
                        d(i.dataSelector.select(a), i.accessor, j, o, b, l, m, k, n)
                    }
                    ,
                    f.axis = function(a) {
                        return arguments.length ? (j = a,
                        f) : j
                    }
                    ,
                    f.orient = function(a) {
                        return arguments.length ? (o = a,
                        f) : o
                    }
                    ,
                    f.format = function(a) {
                        return arguments.length ? (h = a,
                        f) : h
                    }
                    ,
                    f.height = function(a) {
                        return arguments.length ? (l = a,
                        f) : l
                    }
                    ,
                    f.width = function(a) {
                        return arguments.length ? (m = a,
                        f) : m
                    }
                    ,
                    f.translate = function(a) {
                        return arguments.length ? (n = a,
                        f) : n
                    }
                    ,
                    g(f, i).accessor(c()).dataSelector(),
                    f
                }
            }
        }
        , {}],
        40: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d) {
                a.select("path.upper").attr("d", b),
                a.select("path.middle").attr("d", c),
                a.select("path.lower").attr("d", d)
            }
            b.exports = function(a, b, c) {
                return function() {
                    function e(a) {
                        var b = g.dataSelector(a);
                        b.entry.append("path").attr("class", "upper"),
                        b.entry.append("path").attr("class", "middle"),
                        b.entry.append("path").attr("class", "lower"),
                        e.refresh(a)
                    }
                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.upper, g.yScale),
                        i.init(g.accessor.d, g.xScale, g.accessor.middle, g.yScale),
                        j.init(g.accessor.d, g.xScale, g.accessor.lower, g.yScale)
                    }
                    var g = {}
                      , h = b.pathLine()
                      , i = b.pathLine()
                      , j = b.pathLine();
                    return e.refresh = function(a) {
                        d(g.dataSelector.select(a), h, i, j)
                    }
                    ,
                    c(e, g).plot(a(), f).dataSelector(c.dataMapper.array),
                    f(),
                    e
                }
            }
        }
        , {}],
        41: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b, c, d, e) {
                return function() {
                    function a(b) {
                        var c = k.dataSelector(b);
                        d.appendPathsUpDownEqual(c.selection, k.accessor, ["candle", "body"]),
                        d.appendPathsUpDownEqual(c.selection, k.accessor, ["candle", "wick"]),
                        a.refresh(b)
                    }
                    function b() {
                        h = d.joinPath(f),
                        i = d.joinPath(g),
                        j = d.scaledStrokeWidth(k.xScale, 1, 4)
                    }
                    function f() {
                        var a = k.accessor
                          , b = k.xScale
                          , c = k.yScale
                          , d = k.width(b);
                        return function(e) {
                            var f = c(a.o(e))
                              , g = c(a.c(e))
                              , h = b(a.d(e)) - d / 2
                              , i = "M " + h + " " + f + " l " + d + " 0";
                            return f != g && (i += " L " + (h + d) + " " + g + " l " + -d + " 0 L " + h + " " + f),
                            i
                        }
                    }
                    function g() {
                        var a = k.accessor
                          , b = k.xScale
                          , c = k.yScale
                          , d = k.width(b);
                        return function(e) {
                            var f = c(a.o(e))
                              , g = c(a.c(e))
                              , h = b(a.d(e))
                              , i = h - d / 2
                              , j = "M " + h + " " + c(a.h(e)) + " L " + h + " " + Math.min(f, g);
                            return f == g && (j += " M " + i + " " + f + " l " + d + " 0"),
                            j + " M " + h + " " + Math.max(f, g) + " L " + h + " " + c(a.l(e))
                        }
                    }
                    var h, i, j, k = {};
                    return a.refresh = function(a) {
                        a.selectAll("path.candle.body").attr("d", h),
                        a.selectAll("path.candle.wick").attr("d", i).style("stroke-width", j)
                    }
                    ,
                    e(a, k).plot(c(), b).width(b).dataSelector(e.dataMapper.array),
                    b(),
                    a
                }
            }
        }
        , {}],
        42: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b, c, d, e, f, g) {
                return function() {
                    function a(b) {
                        var c = s.dataSelector(b);
                        c.entry.append("path").attr("class", "horizontal wire"),
                        c.entry.append("path").attr("class", "vertical wire"),
                        c.entry.append("g").attr("class", "axisannotation x").call(u),
                        c.entry.append("g").attr("class", "axisannotation y").call(v),
                        b.selectAll("rect").data([void 0]).enter().append("rect").style("fill", "none").style("pointer-events", "all"),
                        a.refresh(b)
                    }
                    function b(a, b, d, e, f) {
                        return function() {
                            a.node().__coord__ = c(this),
                            h(a, b, d, e, f)
                        }
                    }
                    function h(a, b, c, d, e) {
                        var f = a.node().__coord__;
                        if (void 0 !== f) {
                            var g = a.datum()
                              , h = s.xScale.invert(f[0])
                              , i = s.yScale.invert(f[1])
                              , j = null !== h && null !== i && (s.accessor.xv(g) !== h || s.accessor.yv(g) !== i);
                            s.accessor.xv(g, h),
                            s.accessor.yv(g, i),
                            j && t.call("move", a.node(), g)
                        }
                        b.attr("d", o),
                        c.attr("d", p),
                        d.call(u.refresh),
                        e.call(v.refresh),
                        a.attr("display", n)
                    }
                    function i() {
                        return o = k(),
                        p = j(),
                        u.accessor(s.accessor.xv).scale(s.xScale),
                        v.accessor(s.accessor.yv).scale(s.yScale),
                        a
                    }
                    function j() {
                        var a = r || s.xScale.range();
                        return function(b) {
                            if (null === s.accessor.yv(b))
                                return null;
                            var c = s.yScale(s.accessor.yv(b));
                            return isNaN(c) ? null : "M " + a[0] + " " + c + " L " + a[a.length - 1] + " " + c
                        }
                    }
                    function k() {
                        var a = q || s.yScale.range();
                        return function(b) {
                            if (null === s.accessor.xv(b))
                                return null;
                            var c = s.xScale(s.accessor.xv(b))
                              , d = s.xScale.range();
                            return c < Math.min(d[0], d[d.length - 1]) || c > Math.max(d[0], d[d.length - 1]) ? null : "M " + c + " " + a[0] + " L " + c + " " + a[a.length - 1]
                        }
                    }
                    function l(a) {
                        return a = a || {},
                        s.accessor.xv(a, null),
                        s.accessor.yv(a, null),
                        a
                    }
                    function m(a) {
                        return void 0 === a || null === s.accessor.xv(a) || null === s.accessor.yv(a)
                    }
                    function n(a) {
                        return m(a) ? "none" : null
                    }
                    var o, p, q, r, s = {}, t = d("enter", "out", "move"), u = f.plotComposer().scope("composed-annotation").plotScale(function(a) {
                        return a.axis().scale()
                    }), v = f.plotComposer().scope("composed-annotation").plotScale(function(a) {
                        return a.axis().scale()
                    });
                    return a.refresh = function(a) {
                        var c = s.xScale.range()
                          , d = s.yScale.range()
                          , e = s.dataSelector.select(a)
                          , f = e.select("path.vertical")
                          , g = e.select("path.horizontal")
                          , i = e.select("g.axisannotation.x")
                          , j = e.select("g.axisannotation.y");
                        a.selectAll("rect").attr("x", Math.min.apply(null, c)).attr("y", Math.min.apply(null, d)).attr("height", Math.abs(d[d.length - 1] - d[0])).attr("width", Math.abs(c[c.length - 1] - c[0])).on("mouseenter", function() {
                            t.call("enter", this)
                        }).on("mouseout", function() {
                            t.call("out", this),
                            delete e.node().__coord__,
                            l(e.datum()),
                            h(e, f, g, i, j)
                        }).on("mousemove", b(e, f, g, i, j)),
                        h(e, f, g, i, j)
                    }
                    ,
                    a.xAnnotation = function(a) {
                        return arguments.length ? (u.plots(a instanceof Array ? a : [a]),
                        i()) : u.plots()
                    }
                    ,
                    a.yAnnotation = function(a) {
                        return arguments.length ? (v.plots(a instanceof Array ? a : [a]),
                        i()) : v.plots()
                    }
                    ,
                    a.verticalWireRange = function(a) {
                        return arguments.length ? (q = a,
                        i()) : q
                    }
                    ,
                    a.horizontalWireRange = function(a) {
                        return arguments.length ? (r = a,
                        i()) : r
                    }
                    ,
                    g(a, s).plot(e(), i).dataSelector(function(a) {
                        return m(a) ? [l()] : [a]
                    }).on(t),
                    s.dataSelector.scope("crosshair"),
                    i()
                }
            }
        }
        , {}],
        43: [function(a, b, c) {
            "use strict";
            function d(a) {
                return function(b) {
                    return -a(b)
                }
            }
            function e() {
                return Math.random().toString(36).substr(2, 9)
            }
            b.exports = function(a, b, c, f, g) {
                return function() {
                    function h(a) {
                        var b = m.dataSelector(a)
                          , c = "kumoclipup-" + e()
                          , d = "kumoclipdown-" + e();
                        b.entry.append("clipPath").attr("id", d).attr("class", "kumoclipdown").append("path"),
                        b.entry.append("clipPath").attr("id", c).attr("class", "kumoclipup").append("path"),
                        b.entry.append("path").attr("class", "kumo down").attr("clip-path", "url(#" + d + ")"),
                        b.entry.append("path").attr("class", "kumo up").attr("clip-path", "url(#" + c + ")"),
                        b.entry.append("path").attr("class", "senkouspanb"),
                        b.entry.append("path").attr("class", "senkouspana"),
                        b.entry.append("path").attr("class", "chikouspan"),
                        b.entry.append("path").attr("class", "kijunsen"),
                        b.entry.append("path").attr("class", "tenkansen"),
                        h.refresh(a)
                    }
                    function i(a, b) {
                        a.select(".kumoclipdown path").attr("d", n.y1(b.range()[0])),
                        a.select(".kumoclipup path").attr("d", n.y1(b.range()[1])),
                        a.select("path.kumo.down").attr("d", o),
                        a.select("path.kumo.up").attr("d", o),
                        a.select("path.senkouspanb").attr("d", q),
                        a.select("path.senkouspana").attr("d", p),
                        a.select("path.chikouspan").attr("d", r),
                        a.select("path.kijunsen").attr("d", t),
                        a.select("path.tenkansen").attr("d", s)
                    }
                    function j() {
                        p.init(m.accessor.d, m.xScale, m.accessor.sa, m.yScale, m.accessor.pks),
                        q.init(m.accessor.d, m.xScale, m.accessor.sb, m.yScale, m.accessor.pks),
                        r.init(m.accessor.d, m.xScale, m.accessor.c, m.yScale, d(m.accessor.pks)),
                        s.init(m.accessor.d, m.xScale, m.accessor.ts, m.yScale),
                        t.init(m.accessor.d, m.xScale, m.accessor.ks, m.yScale)
                    }
                    function k() {
                        return a().curve(b).defined(function(a) {
                            return null !== m.accessor.sb(a)
                        }).x(function(a) {
                            return m.xScale(m.accessor.d(a), m.accessor.pks(a))
                        }).y0(function(a) {
                            return m.yScale(m.accessor.sb(a))
                        })
                    }
                    function l() {
                        return a().curve(b).defined(function(a) {
                            return null !== m.accessor.sa(a) && null !== m.accessor.sb(a)
                        }).x(function(a) {
                            return m.xScale(m.accessor.d(a), m.accessor.pks(a))
                        }).y0(function(a) {
                            return m.yScale(m.accessor.sa(a))
                        }).y1(function(a) {
                            return m.yScale(m.accessor.sb(a))
                        })
                    }
                    var m = {}
                      , n = k()
                      , o = l()
                      , p = f.pathLine()
                      , q = f.pathLine()
                      , r = f.pathLine()
                      , s = f.pathLine()
                      , t = f.pathLine();
                    return h.refresh = function(a) {
                        i(m.dataSelector.select(a), m.yScale)
                    }
                    ,
                    g(h, m).plot(c(), j).dataSelector(g.dataMapper.array),
                    j(),
                    h
                }
            }
        }
        , {}],
        44: [function(a, b, c) {
            "use strict";
            function d() {
                return d3.event
            }
            b.exports = function(b) {
                var c = a("../scale")(b)
                  , e = a("../accessor")()
                  , f = a("./plot")(b.line, b.area, b.curveMonotoneX, b.select)
                  , g = a("../util")().functor
                  , h = a("./plotmixin")(b.scaleLinear, g, c.financetime, f.dataSelector, f.barWidth)
                  , i = a("./candlestick")(b.scaleLinear, b.extent, e.ohlc, f, h)
                  , j = a("./line")
                  , k = a("./axisannotation")(b.axisTop, b.scaleLinear, e.value, f, h)
                  , l = a("../svg")(b);
                return {
                    tradearrow: a("./tradearrow")(b.select, g, b.mouse, b.dispatch, e.trade, f, h, l.arrow),
                    atr: j(e.value, f, h),
                    atrtrailingstop: a("./atrtrailingstop")(e.atrtrailingstop, f, h),
                    axisannotation: k,
                    candlestick: i,
                    crosshair: a("./crosshair")(b.select, d, b.mouse, b.dispatch, e.crosshair, f, h),
                    ema: j(e.value, f, h),
                    heikinashi: i,
                    ichimoku: a("./ichimoku")(b.area, b.curveMonotoneX, e.ichimoku, f, h),
                    ohlc: a("./ohlc")(b.scaleLinear, b.extent, e.ohlc, f, h),
                    tick: a("./tick")(b.scaleLinear, b.extent, e.tick, f, h),
                    close: j(e.ohlc, f, h),
                    volume: a("./volume")(e.volume, f, h),
                    rsi: a("./rsi")(e.rsi, f, h),
                    macd: a("./macd")(e.macd, f, h),
                    momentum: j(e.value, f, h, !0),
                    moneyflow: j(e.value, f, h, !0),
                    sma: j(e.value, f, h),
                    supstance: a("./supstance")(b.drag, d, b.select, b.dispatch, e.supstance, f, h),
                    trendline: a("./trendline")(b.drag, d, b.select, b.dispatch, e.trendline, f, h),
                    wilderma: j(e.value, f, h),
                    adx: a("./adx")(e.adx, f, h),
                    aroon: a("./aroon")(e.aroon, f, h),
                    stochastic: a("./stochastic")(e.stochastic, f, h),
                    williams: a("./williams")(e.williams, f, h),
                    bollinger: a("./bollinger")(e.bollinger, f, h),
                    vwap: j(e.value, f, h)
                }
            }
        }
        , {
            "../accessor": 8,
            "../scale": 59,
            "../svg": 62,
            "../util": 64,
            "./adx": 36,
            "./aroon": 37,
            "./atrtrailingstop": 38,
            "./axisannotation": 39,
            "./bollinger": 40,
            "./candlestick": 41,
            "./crosshair": 42,
            "./ichimoku": 43,
            "./line": 45,
            "./macd": 46,
            "./ohlc": 47,
            "./plot": 48,
            "./plotmixin": 49,
            "./rsi": 50,
            "./stochastic": 51,
            "./supstance": 52,
            "./tick": 53,
            "./tradearrow": 54,
            "./trendline": 55,
            "./volume": 56,
            "./williams": 57
        }],
        45: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f, g) {
                a.select("path.line").attr("d", f),
                g && a.select("path.zero").attr("d", e.horizontalPathLine(c, b.z, d))
            }
            b.exports = function(a, b, c, e) {
                return e = e || !1,
                function() {
                    function f(a) {
                        var b = h.dataSelector(a);
                        b.entry.append("path").attr("class", "line"),
                        e && b.selection.append("path").attr("class", "zero"),
                        f.refresh(a)
                    }
                    function g() {
                        i.init(h.accessor.d, h.xScale, h.accessor, h.yScale)
                    }
                    var h = {}
                      , i = b.pathLine();
                    return f.refresh = function(a) {
                        d(h.dataSelector.select(a), h.accessor, h.xScale, h.yScale, b, i, e)
                    }
                    ,
                    c(f, h).plot(a(), g).dataSelector(c.dataMapper.array),
                    g(),
                    f
                }
            }
        }
        , {}],
        46: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f, g, h) {
                a.select("path.difference").attr("d", f),
                a.select("path.zero").attr("d", e.horizontalPathLine(b.d, c, b.z, d)),
                a.select("path.macd").attr("d", g),
                a.select("path.signal").attr("d", h)
            }
            b.exports = function(a, b, c) {
                return function() {
                    function e(a) {
                        var b = i.dataSelector(a);
                        b.selection.append("path").attr("class", "difference"),
                        b.selection.append("path").attr("class", "zero"),
                        b.selection.append("path").attr("class", "macd"),
                        b.selection.append("path").attr("class", "signal"),
                        e.refresh(a)
                    }
                    function f() {
                        h = b.joinPath(g),
                        j.init(i.accessor.d, i.xScale, i.accessor.m, i.yScale),
                        k.init(i.accessor.d, i.xScale, i.accessor.s, i.yScale)
                    }
                    function g() {
                        var a = i.accessor
                          , b = i.xScale
                          , c = i.yScale
                          , d = i.width(b);
                        return function(e) {
                            var f = c(0)
                              , g = c(a.dif(e)) - f
                              , h = b(a.d(e)) - d / 2;
                            return "M " + h + " " + f + " l 0 " + g + " l " + d + " 0 l 0 " + -g
                        }
                    }
                    var h, i = {}, j = b.pathLine(), k = b.pathLine();
                    return e.refresh = function(a) {
                        d(i.dataSelector.select(a), i.accessor, i.xScale, i.yScale, b, h, j, k)
                    }
                    ,
                    c(e, i).plot(a(), f).width(f).dataSelector(c.dataMapper.array),
                    f(),
                    e
                }
            }
        }
        , {}],
        47: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b, c, d, e) {
                return function() {
                    function a(b) {
                        d.appendPathsUpDownEqual(i.dataSelector(b).selection, i.accessor, "ohlc"),
                        a.refresh(b)
                    }
                    function b() {
                        g = d.joinPath(f),
                        h = d.scaledStrokeWidth(i.xScale, 1, 2)
                    }
                    function f() {
                        var a = i.accessor
                          , b = i.xScale
                          , c = i.yScale
                          , d = i.width(b);
                        return function(e) {
                            var f = c(a.o(e))
                              , g = c(a.c(e))
                              , h = b(a.d(e))
                              , i = h - d / 2;
                            return "M " + i + " " + f + " l " + d / 2 + " 0 M " + h + " " + c(a.h(e)) + " L " + h + " " + c(a.l(e)) + " M " + h + " " + g + " l " + d / 2 + " 0"
                        }
                    }
                    var g, h, i = {};
                    return a.refresh = function(a) {
                        a.selectAll("path.ohlc").attr("d", g).style("stroke-width", h)
                    }
                    ,
                    e(a, i).plot(c(), b).width(b).dataSelector(e.dataMapper.array),
                    b(),
                    a
                }
            }
        }
        , {}],
        48: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b, c, d) {
                function e() {
                    function b(a) {
                        return d(a)
                    }
                    var d = a().curve(c);
                    return b.init = function(a, b, c, e, f) {
                        return d.defined(function(a) {
                            return null !== c(a)
                        }).x(function(c) {
                            return b(a(c), void 0 === f ? f : f(c))
                        }).y(function(a) {
                            return e(c(a))
                        })
                    }
                    ,
                    b.d3 = function() {
                        return d
                    }
                    ,
                    b
                }
                function f() {
                    function a(a) {
                        return d(a)
                    }
                    var d = b().curve(c);
                    return a.init = function(a, b, c, e, f) {
                        return d.defined(function(a) {
                            return null !== c(a)
                        }).x(function(c) {
                            return b(a(c))
                        }).y0(function(a) {
                            return e(f)
                        }).y1(function(a) {
                            return e(c(a))
                        })
                    }
                    ,
                    a.d3 = function() {
                        return d
                    }
                    ,
                    a
                }
                function g(a) {
                    return {
                        up: function(b) {
                            return a.o(b) < a.c(b)
                        },
                        down: function(b) {
                            return a.o(b) > a.c(b)
                        },
                        equal: function(b) {
                            return a.o(b) === a.c(b)
                        }
                    }
                }
                function h(a, b, c, d) {
                    var e = c instanceof Array ? c : [c];
                    d = d || g(b),
                    Object.keys(d).forEach(function(b) {
                        j(a, d[b], e, b)
                    })
                }
                function i(a, b, c) {
                    h(a, b, c, g(b))
                }
                function j(a, b, c, d) {
                    a.selectAll("path." + l(c, ".") + "." + d).data(function(a) {
                        return [a.filter(b)]
                    }).enter().append("path").attr("class", l(c, " ") + " " + d)
                }
                function k(a) {
                    return void 0 !== a.band ? Math.max(a.band(), 1) : 3
                }
                function l(a, b) {
                    if (a.length) {
                        for (var c = a[0], d = 1; d < a.length; d++)
                            c += b + a[d];
                        return c
                    }
                }
                function m() {
                    function a(b) {
                        var c = e.mapper(function() {
                            return f.map(function() {
                                return []
                            })
                        })(b);
                        c.selection.each(function(a, b) {
                            f[b](d(this))
                        }),
                        a.refresh(b)
                    }
                    var b, c, e = n(), f = [], g = function(a) {
                        return a.scale()
                    };
                    return a.refresh = function(a) {
                        e.select(a).data(function(a) {
                            var d = c(a);
                            if (null === d || void 0 === d)
                                return f.map(function() {
                                    return []
                                });
                            var e = b(d);
                            return f.map(function(a) {
                                var c = g(a) === b ? d : g(a).invert(e);
                                return [{
                                    value: c
                                }]
                            })
                        }).each(function(a, b) {
                            f[b](d(this))
                        })
                    }
                    ,
                    a.plots = function(b) {
                        return arguments.length ? (f = b,
                        a) : f
                    }
                    ,
                    a.scale = function(c) {
                        return arguments.length ? (b = c,
                        a) : b
                    }
                    ,
                    a.accessor = function(b) {
                        return arguments.length ? (c = b,
                        a) : c
                    }
                    ,
                    a.scope = function(b) {
                        return arguments.length ? (e.scope(b),
                        a) : e.scope()
                    }
                    ,
                    a.plotScale = function(b) {
                        return arguments.length ? (g = b,
                        a) : g
                    }
                    ,
                    a
                }
                var n = function(a) {
                    function b(d) {
                        var f = b.select(d).data(a, c)
                          , g = f.enter().append("g").attr("class", l(e, " "));
                        return f.exit().remove(),
                        {
                            entry: g,
                            selection: g.merge(f)
                        }
                    }
                    var c, d, e = ["data"];
                    return b.select = function(a) {
                        return a.selectAll("g." + l(e, "."))
                    }
                    ,
                    b.mapper = function(c) {
                        return arguments.length ? (a = c,
                        b) : a
                    }
                    ,
                    b.scope = function(a) {
                        return arguments.length ? (d = a,
                        e = ["data", "scope-" + d],
                        b) : d
                    }
                    ,
                    b.key = function(a) {
                        return arguments.length ? (c = a,
                        b) : c
                    }
                    ,
                    b
                };
                return n.mapper = {
                    unity: function(a) {
                        return a
                    },
                    array: function(a) {
                        return [a]
                    }
                },
                {
                    dataSelector: n,
                    appendPathsGroupBy: h,
                    appendPathsUpDownEqual: i,
                    horizontalPathLine: function(a, b, c, d) {
                        return function(e) {
                            if (!e.length)
                                return null;
                            var f = e[0]
                              , g = e[e.length - 1];
                            return "M " + b(a(f)) + " " + d(c(f)) + " L " + b(a(g)) + " " + d(c(g))
                        }
                    },
                    pathLine: e,
                    pathArea: f,
                    barWidth: k,
                    scaledStrokeWidth: function(a, b, c) {
                        return b = b || 1,
                        c = c || 1,
                        function() {
                            return Math.min(b, k(a) / c) + "px"
                        }
                    },
                    joinPath: function(a) {
                        return function(b) {
                            return l(b.map(a()), " ")
                        }
                    },
                    interaction: {
                        mousedispatch: function(a) {
                            return function(b) {
                                return b.on("mouseenter", function(b) {
                                    d(this.parentNode).classed("mouseover", !0),
                                    a.call("mouseenter", this, b)
                                }).on("mouseleave", function(b) {
                                    var c = d(this.parentNode);
                                    c.classed("dragging") || (c.classed("mouseover", !1),
                                    a.call("mouseout", this, b))
                                }).on("mousemove", function(b) {
                                    a.call("mousemove", this, b)
                                })
                            }
                        },
                        dragStartEndDispatch: function(a, b) {
                            return a.on("start", function(a) {
                                d(this.parentNode.parentNode).classed("dragging", !0),
                                b.call("dragstart", this, a)
                            }).on("end", function(a) {
                                d(this.parentNode.parentNode).classed("dragging", !1),
                                b.call("dragend", this, a)
                            })
                        }
                    },
                    plotComposer: m
                }
            }
        }
        , {}],
        49: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b, c, d, e) {
                var f = function(f, g) {
                    var h = {};
                    return h.dataSelector = function(a, b) {
                        return g.dataSelector = d(a).key(b),
                        h
                    }
                    ,
                    h.xScale = function(a) {
                        return g.xScale = c(),
                        f.xScale = function(b) {
                            return arguments.length ? (g.xScale = b,
                            a && a(),
                            f) : g.xScale
                        }
                        ,
                        h
                    }
                    ,
                    h.yScale = function(b) {
                        return g.yScale = a(),
                        f.yScale = function(a) {
                            return arguments.length ? (g.yScale = a,
                            b && b(),
                            f) : g.yScale
                        }
                        ,
                        h
                    }
                    ,
                    h.accessor = function(a, b) {
                        return g.accessor = a,
                        f.accessor = function(a) {
                            return arguments.length ? (g.accessor = a,
                            b && b(),
                            f) : g.accessor
                        }
                        ,
                        h
                    }
                    ,
                    h.width = function(a) {
                        return g.width = e,
                        f.width = function(c) {
                            return arguments.length ? (g.width = b(c),
                            a && a(),
                            f) : g.width
                        }
                        ,
                        h
                    }
                    ,
                    h.on = function(a, b) {
                        return f.on = function(c, d) {
                            return a.on(c, d),
                            b && b(),
                            f
                        }
                        ,
                        h
                    }
                    ,
                    h.plot = function(a, b) {
                        return h.xScale(b).yScale(b).accessor(a, b)
                    }
                    ,
                    h
                };
                return f.dataMapper = d.mapper,
                f
            }
        }
        , {}],
        50: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f) {
                a.select("path.overbought").attr("d", e.horizontalPathLine(b.d, c, b.ob, d)),
                a.select("path.middle").attr("d", e.horizontalPathLine(b.d, c, b.m, d)),
                a.select("path.oversold").attr("d", e.horizontalPathLine(b.d, c, b.os, d)),
                a.select("path.rsi").attr("d", f)
            }
            b.exports = function(a, b, c) {
                return function() {
                    function e(a) {
                        var b = g.dataSelector(a);
                        b.entry.append("path").attr("class", "overbought"),
                        b.entry.append("path").attr("class", "middle"),
                        b.entry.append("path").attr("class", "oversold"),
                        b.entry.append("path").attr("class", "rsi"),
                        e.refresh(a)
                    }
                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.r, g.yScale)
                    }
                    var g = {}
                      , h = b.pathLine();
                    return e.refresh = function(a) {
                        d(g.dataSelector.select(a), g.accessor, g.xScale, g.yScale, b, h)
                    }
                    ,
                    c(e, g).plot(a(), f).dataSelector(c.dataMapper.array),
                    f(),
                    e
                }
            }
        }
        , {}],
        51: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f, g) {
                a.select("path.overbought").attr("d", e.horizontalPathLine(b.d, c, b.ob, d)),
                a.select("path.oversold").attr("d", e.horizontalPathLine(b.d, c, b.os, d)),
                a.select("path.stochastic.up").attr("d", f),
                a.select("path.stochastic.down").attr("d", g)
            }
            b.exports = function(a, b, c) {
                return function() {
                    function e(a) {
                        var b = g.dataSelector(a);
                        b.entry.append("path").attr("class", "overbought"),
                        b.entry.append("path").attr("class", "oversold"),
                        b.entry.append("path").attr("class", "stochastic up"),
                        b.entry.append("path").attr("class", "stochastic down"),
                        e.refresh(a)
                    }
                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.k, g.yScale),
                        i.init(g.accessor.d, g.xScale, g.accessor.sd, g.yScale)
                    }
                    var g = {}
                      , h = b.pathLine()
                      , i = b.pathLine();
                    return e.refresh = function(a) {
                        d(g.dataSelector.select(a), g.accessor, g.xScale, g.yScale, b, h, i)
                    }
                    ,
                    c(e, g).plot(a(), f).dataSelector(c.dataMapper.array),
                    f(),
                    e
                }
            }
        }
        , {}],
        52: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d, f) {
                a.select(".supstance path").attr("d", e(b, c, d)),
                a.select(".interaction path").attr("d", e(b, c, d)),
                a.select(".axisannotation.y").call(f.refresh)
            }
            function e(a, b, c) {
                return function(d) {
                    var e;
                    return f(a) ? (e = [a.s(d), a.e(d)],
                    e[0] = void 0 !== e[0] ? b(e[0]) : b.range()[0],
                    e[1] = void 0 !== e[1] ? b(e[1]) : b.range()[1]) : e = b.range(),
                    "M " + e[0] + " " + c(a(d)) + " L " + e[e.length - 1] + " " + c(a(d))
                }
            }
            function f(a) {
                return void 0 !== a.s && void 0 !== a.e
            }
            b.exports = function(a, b, c, e, f, g, h) {
                function i() {
                    function a(b) {
                        var d = c.dataSelector(b);
                        d.entry.append("g").attr("class", "supstance").append("path"),
                        d.entry.append("g").attr("class", "axisannotation y").call(k);
                        var e = d.entry.append("g").attr("class", "interaction").style("opacity", 0).style("fill", "none").call(g.interaction.mousedispatch(i));
                        e.append("path").style("stroke-width", "16px"),
                        a.refresh(b)
                    }
                    function b() {
                        return k.accessor(c.accessor.v).scale(c.yScale),
                        a
                    }
                    var c = {}
                      , i = e("mouseenter", "mouseout", "mousemove", "drag", "dragstart", "dragend")
                      , k = g.plotComposer().scope("composed-annotation").plotScale(function(a) {
                        return a.axis().scale()
                    });
                    return a.refresh = function(a) {
                        d(c.dataSelector.select(a), c.accessor, c.xScale, c.yScale, k)
                    }
                    ,
                    a.drag = function(a) {
                        a.selectAll(".interaction path").call(j(i, c.accessor, c.xScale, c.yScale, k))
                    }
                    ,
                    a.annotation = function(b) {
                        return arguments.length ? (k.plots(b instanceof Array ? b : [b]),
                        a) : k.plots()
                    }
                    ,
                    h(a, c).dataSelector(h.dataMapper.unity).plot(f(), b).on(i),
                    c.dataSelector.scope("supstance"),
                    b()
                }
                function j(e, f, h, i, j) {
                    var k = a().subject(function(a) {
                        return {
                            x: 0,
                            y: i(f(a))
                        }
                    }).on("drag", function(a) {
                        var g = i.invert(b().y)
                          , k = c(this.parentNode.parentNode);
                        f.v(a, g),
                        d(k, f, h, i, j),
                        e.call("drag", this, a)
                    });
                    return g.interaction.dragStartEndDispatch(k, e)
                }
                return i
            }
        }
        , {}],
        53: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b, c, d, e) {
                return function() {
                    function a(b) {
                        i.dataSelector(b).entry.append("path").attr("class", "tick"),
                        a.refresh(b)
                    }
                    function b() {
                        g = d.joinPath(f),
                        h = d.scaledStrokeWidth(i.xScale, 1, 2)
                    }
                    function f() {
                        var a = i.accessor
                          , b = i.xScale
                          , c = i.yScale
                          , d = i.width(b);
                        return function(e) {
                            var f = c(a.h(e))
                              , g = c(a.l(e))
                              , h = b(a.d(e))
                              , i = h - d / 2;
                            return "M " + i + " " + f + " l " + d + " 0 M " + h + " " + f + " L " + h + " " + g + " M " + i + " " + g + " l " + d + " 0"
                        }
                    }
                    var g, h, i = {};
                    return a.refresh = function(a) {
                        i.dataSelector.select(a).select("path.tick").attr("d", g).style("stroke-width", h)
                    }
                    ,
                    e(a, i).plot(c(), b).width(b).dataSelector(e.dataMapper.array),
                    b(),
                    a
                }
            }
        }
        , {}],
        54: [function(a, b, c) {
            "use strict";
            function d(a, b) {
                Object.keys(b).forEach(function(c) {
                    a.classed(c, b[c])
                })
            }
            b.exports = function(a, b, c, e, f, g, h, i) {
                return function() {
                    function j(b) {
                        var e = o.dataSelector(b)
                          , f = m(b.datum());
                        g.appendPathsGroupBy(e.selection, o.accessor, "tradearrow", f),
                        e.entry.append("path").attr("class", "highlight").style("pointer-events", "none"),
                        e.selection.selectAll("path.tradearrow").on("mouseenter", function(b) {
                            var e = l(b, c(this)[0]);
                            a(this.parentNode).select("path.highlight").datum(e.d).attr("d", r).call(d, f),
                            p.call("mouseenter", this, e.d, e.i)
                        }).on("mouseout", function(b) {
                            a(this.parentNode).selectAll("path.highlight").datum([]).attr("d", null).attr("class", "highlight");
                            var d = l(b, c(this)[0]);
                            p.call("mouseout", this, d.d, d.i)
                        }),
                        j.refresh(b)
                    }
                    function k() {
                        return r.x(function(a) {
                            return o.xScale(o.accessor.d(a))
                        }).y(q),
                        n = g.joinPath(function() {
                            return r
                        }),
                        j
                    }
                    function l(a, b) {
                        return a.map(function(a, b) {
                            return {
                                d: a,
                                i: b,
                                x: o.xScale(o.accessor.d(a))
                            }
                        }).reduce(function(a, c) {
                            return Math.abs(a.x - b) < Math.abs(c.x - b) ? a : c
                        })
                    }
                    function m(a) {
                        return a.map(function(a) {
                            return o.accessor.t(a)
                        }).reduce(function(a, b) {
                            return void 0 === a[b] && (a[b] = function(a) {
                                return b === o.accessor.t(a)
                            }
                            ),
                            a
                        }, {})
                    }
                    var n, o = {}, p = e("mouseenter", "mouseout"), q = function(a) {
                        return o.yScale(o.accessor.p(a))
                    }, r = i().orient(function(a) {
                        return "buy" === o.accessor.t(a) ? "up" : "down"
                    });
                    return j.refresh = function(a) {
                        a.selectAll("path.tradearrow").attr("d", n)
                    }
                    ,
                    j.orient = function(a) {
                        return arguments.length ? (r.orient(a),
                        k()) : r.orient()
                    }
                    ,
                    j.y = function(a) {
                        return arguments.length ? (q = b(a),
                        k()) : q
                    }
                    ,
                    j.arrow = function() {
                        return r
                    }
                    ,
                    h(j, o).plot(f(), k).on(p).dataSelector(h.dataMapper.array),
                    k(),
                    j
                }
            }
        }
        , {}],
        55: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d) {
                a.selectAll("path.body").attr("d", e(b, c, d)),
                a.selectAll("circle.start").attr("cx", f(b.sd, c)).attr("cy", g(b.sv, d)),
                a.selectAll("circle.end").attr("cx", f(b.ed, c)).attr("cy", g(b.ev, d))
            }
            function e(a, b, c) {
                return function(d) {
                    return "M " + b(a.sd(d)) + " " + c(a.sv(d)) + " L " + b(a.ed(d)) + " " + c(a.ev(d))
                }
            }
            function f(a, b) {
                return function(c) {
                    return b(a(c))
                }
            }
            function g(a, b) {
                return function(c) {
                    return b(a(c))
                }
            }
            b.exports = function(a, b, c, e, f, g, h) {
                function i() {
                    function a(d) {
                        var e = b.dataSelector(d)
                          , f = e.entry.append("g").attr("class", "trendline");
                        f.append("path").attr("class", "body"),
                        f.append("circle").attr("class", "start").attr("r", 1),
                        f.append("circle").attr("class", "end").attr("r", 1);
                        var h = e.entry.append("g").attr("class", "interaction").style("opacity", 0).style("fill", "none").call(g.interaction.mousedispatch(c));
                        h.append("path").attr("class", "body").style("stroke-width", "16px"),
                        h.append("circle").attr("class", "start").attr("r", 8),
                        h.append("circle").attr("class", "end").attr("r", 8),
                        a.refresh(d)
                    }
                    var b = {}
                      , c = e("mouseenter", "mouseout", "mousemove", "drag", "dragstart", "dragend");
                    return a.refresh = function(a) {
                        d(b.dataSelector.select(a), b.accessor, b.xScale, b.yScale)
                    }
                    ,
                    a.drag = function(a) {
                        a.selectAll(".interaction circle.start").call(j(c, b.accessor, b.accessor.sd, b.xScale, b.accessor.sv, b.yScale)),
                        a.selectAll(".interaction circle.end").call(j(c, b.accessor, b.accessor.ed, b.xScale, b.accessor.ev, b.yScale)),
                        a.selectAll(".interaction path.body").call(k(c, b.accessor, b.xScale, b.yScale))
                    }
                    ,
                    h(a, b).dataSelector(h.dataMapper.unity).plot(f()).on(c),
                    a
                }
                function j(e, f, h, i, j, k) {
                    var m = a();
                    return m.subject(function(a) {
                        return {
                            x: i(h(a)),
                            y: k(j(a))
                        }
                    }).on("drag", function(a) {
                        l(h, i, b().x, j, k, b().y, a),
                        d(c(this.parentNode.parentNode.parentNode), f, i, k),
                        e.call("drag", this, a)
                    }),
                    g.interaction.dragStartEndDispatch(m, e)
                }
                function k(e, f, h, i) {
                    var j = {}
                      , k = a();
                    return k.subject(function(a) {
                        return j.start = {
                            date: h(f.sd(a)),
                            value: i(f.sv(a))
                        },
                        j.end = {
                            date: h(f.ed(a)),
                            value: i(f.ev(a))
                        },
                        {
                            x: 0,
                            y: 0
                        }
                    }).on("drag", function(a) {
                        l(f.sd, h, b().x + j.start.date, f.sv, i, b().y + j.start.value, a),
                        l(f.ed, h, b().x + j.end.date, f.ev, i, b().y + j.end.value, a),
                        d(c(this.parentNode.parentNode.parentNode), f, h, i),
                        e.call("drag", this, a)
                    }),
                    g.interaction.dragStartEndDispatch(k, e)
                }
                function l(a, b, c, d, e, f, g) {
                    var h = b.invert(c);
                    null !== h && void 0 !== h && a(g, h),
                    d(g, e.invert(f))
                }
                return i
            }
        }
        , {}],
        56: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b, c) {
                return function() {
                    function d(a) {
                        var c = i.dataSelector(a);
                        f() ? b.appendPathsUpDownEqual(c.selection, i.accessor, "volume") : c.entry.append("path").attr("class", "volume"),
                        d.refresh(a)
                    }
                    function e() {
                        h = b.joinPath(g)
                    }
                    function f() {
                        return i.accessor.o && i.accessor.c
                    }
                    function g() {
                        var a = i.accessor
                          , b = i.xScale
                          , c = i.yScale
                          , d = i.width(b);
                        return function(e) {
                            var f = a.v(e);
                            if (isNaN(f))
                                return null;
                            var g = c(0)
                              , h = c(f) - g
                              , i = b(a.d(e)) - d / 2;
                            return "M " + i + " " + g + " l 0 " + h + " l " + d + " 0 l 0 " + -h
                        }
                    }
                    var h, i = {};
                    return d.refresh = function(a) {
                        f() ? a.selectAll("path.volume").attr("d", h) : i.dataSelector.select(a).select("path.volume").attr("d", h)
                    }
                    ,
                    c(d, i).plot(a(), e).width(e).dataSelector(c.dataMapper.array),
                    e(),
                    d
                }
            }
        }
        , {}],
        57: [function(a, b, c) {
            "use strict";
            b.exports = function(a, b, c) {
                return function() {
                    function d(a) {
                        f.dataSelector(a).entry.append("path").attr("class", "williams up"),
                        d.refresh(a)
                    }
                    function e() {
                        g.init(f.accessor.d, f.xScale, f.accessor.w, f.yScale)
                    }
                    var f = {}
                      , g = b.pathLine();
                    return d.refresh = function(a) {
                        f.dataSelector.select(a).select("path.williams.up").attr("d", g)
                    }
                    ,
                    c(d, f).plot(a(), e).dataSelector(c.dataMapper.array),
                    e(),
                    d
                }
            }
        }
        , {}],
        58: [function(a, b, c) {
            "use strict";
            function d(a) {
                return function(b) {
                    for (var c = 0; c < a.length; c++)
                        if (a[c][1](b))
                            return a[c][0](b)
                }
            }
            b.exports = function(a, b, c, e, f, g) {
                function h(b, d, n, r, s, t, u, v, w) {
                    function x(a, b) {
                        var d = C[a instanceof Date ? a.getTime() : +a];
                        return b = b || 0,
                        void 0 === d && (d = r[0] > a ? -1 : c(r, a)),
                        n(d + b)
                    }
                    function y() {
                        return E = i(n, r, s),
                        x
                    }
                    function z() {
                        C = k(r)
                    }
                    function A() {
                        return z(),
                        n.domain([0, r.length - 1]),
                        y(),
                        n.domain(n.range().map(f(t, E)).map(n.invert)),
                        u.domain = n.domain(),
                        y()
                    }
                    function B(a, e, f) {
                        if (1 == a.length)
                            return d;
                        var g = a[a.length - 1] - a[0]
                          , h = g / o < 1
                          , i = h ? b.intraday : b.daily
                          , k = h ? q : p
                          , l = Math.min(Math.round(j(a, e) * f), f)
                          , m = g / l
                          , n = c(k, m);
                        return n == i.length ? i[n - 1] : n ? i[m / k[n - 1] < k[n] / m ? n - 1 : n] : i[n]
                    }
                    var C, D = {
                        tickFormat: b.daily[b.daily.length - 1][2]
                    }, E = 3;
                    return n = n || a(),
                    r = r || [new Date(0), new Date(1)],
                    s = void 0 === s ? .2 : s,
                    t = void 0 === t ? .65 : t,
                    u = u || {
                        domain: n.domain()
                    },
                    v = v || !1,
                    w = w || g(n, y, u),
                    x.invert = function(a) {
                        var b = r[x.invertToIndex(a)];
                        return b ? b : null
                    }
                    ,
                    x.invertToIndex = function(a) {
                        return Math.round(n.invert(a))
                    }
                    ,
                    x.domain = function(a) {
                        if (!arguments.length) {
                            var b = n.domain();
                            return b[0] < 0 && b[b.length - 1] < 0 ? [] : (b = [Math.max(Math.ceil(b[0]), 0), Math.min(Math.floor(b[b.length - 1]), r.length - 1)],
                            r.slice(b[0], b[b.length - 1] + 1))
                        }
                        return r = a,
                        A()
                    }
                    ,
                    x.copy = function() {
                        return h(b, d, n.copy(), r, s, t, u, v, w)
                    }
                    ,
                    x.band = function() {
                        return E
                    }
                    ,
                    x.outerPadding = function(a) {
                        return arguments.length ? (t = a,
                        A()) : t
                    }
                    ,
                    x.padding = function(a) {
                        return arguments.length ? (s = a,
                        A()) : s
                    }
                    ,
                    x.zoomable = function() {
                        return w
                    }
                    ,
                    x.ticks = function(a, b) {
                        var c = x.domain()
                          , d = n.domain();
                        if (!c.length)
                            return [];
                        var e = void 0 === a ? B(c, d, 10) : "number" == typeof a ? B(c, d, a) : null;
                        D.tickFormat = e ? e[2] : B(c, d, 10)[2],
                        e && (a = e[0],
                        b = e[1]);
                        var f = a.every(b).range(c[0], +c[c.length - 1] + 1);
                        return f.map(l(c, v)).reduce(m, [])
                    }
                    ,
                    x.closestTicks = function(a) {
                        return arguments.length ? (v = a,
                        x) : v
                    }
                    ,
                    x.tickFormat = function() {
                        return function(a) {
                            return D.tickFormat(a)
                        }
                    }
                    ,
                    e(x, n, y, "range"),
                    z(),
                    y()
                }
                function i(a, b, c) {
                    return Math.abs(a(b.length - 1) - a(0)) / Math.max(1, b.length - 1) * (1 - c)
                }
                function j(a, b) {
                    return a.length / (b[b.length - 1] - b[0])
                }
                function k(a) {
                    var b = {};
                    return a.forEach(function(a, c) {
                        b[+a] = c
                    }),
                    b
                }
                function l(a, b) {
                    var d = k(a);
                    return function(e) {
                        var f = d[+e];
                        if (void 0 !== f)
                            return a[f];
                        var g = c(a, e);
                        return b && g > 0 && +e - +a[g - 1] < +a[g] - +e && g--,
                        a[g]
                    }
                }
                function m(a, b) {
                    return 0 !== a.length && a[a.length - 1] === b || a.push(b),
                    a
                }
                function n() {
                    return h({
                        daily: z,
                        intraday: A
                    }, u)
                }
                var o = 864e5
                  , p = [o, 6048e5, 2592e6, 7776e6, 31536e6]
                  , q = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5]
                  , r = b.timeFormat("%b %e")
                  , s = d([[b.timeFormat("%b %Y"), function(a) {
                    return a.getMonth()
                }
                ], [b.timeFormat("%Y"), function() {
                    return !0
                }
                ]])
                  , t = d([[b.timeFormat(":%S"), function(a) {
                    return a.getSeconds()
                }
                ], [b.timeFormat("%I:%M"), function(a) {
                    return a.getMinutes()
                }
                ], [b.timeFormat("%I %p"), function() {
                    return !0
                }
                ]])
                  , u = [b.timeSecond, 1, d([[b.timeFormat(":%S"), function(a) {
                    return a.getSeconds()
                }
                ], [b.timeFormat("%I:%M"), function(a) {
                    return a.getMinutes()
                }
                ], [b.timeFormat("%I %p"), function(a) {
                    return a.getHours()
                }
                ], [b.timeFormat("%b %e"), function() {
                    return !0
                }
                ]])]
                  , v = b.utcFormat("%b %e")
                  , w = d([[b.utcFormat("%b %Y"), function(a) {
                    return a.getUTCMonth()
                }
                ], [b.utcFormat("%Y"), function() {
                    return !0
                }
                ]])
                  , x = d([[b.utcFormat(":%S"), function(a) {
                    return a.getUTCSeconds()
                }
                ], [b.utcFormat("%I:%M"), function(a) {
                    return a.getUTCMinutes()
                }
                ], [b.utcFormat("%I %p"), function() {
                    return !0
                }
                ]])
                  , y = [b.timeSecond, 1, d([[b.utcFormat(":%S"), function(a) {
                    return a.getUTCSeconds()
                }
                ], [b.utcFormat("%I:%M"), function(a) {
                    return a.getUTCMinutes()
                }
                ], [b.utcFormat("%I %p"), function(a) {
                    return a.getUTCHours()
                }
                ], [b.utcFormat("%b %e"), function() {
                    return !0
                }
                ]])]
                  , z = [[b.timeDay, 1, r], [b.timeMonday, 1, r], [b.timeMonth, 1, s], [b.timeMonth, 3, s], [b.timeYear, 1, s]]
                  , A = [[b.timeSecond, 1, t], [b.timeSecond, 5, t], [b.timeSecond, 15, t], [b.timeSecond, 30, t], [b.timeMinute, 1, t], [b.timeMinute, 5, t], [b.timeMinute, 15, t], [b.timeMinute, 30, t], [b.timeHour, 1, t], [b.timeHour, 3, t], [b.timeHour, 6, t], [b.timeHour, 12, t], [b.timeDay, 1, r]]
                  , B = [[b.utcDay, 1, v], [b.utcMonday, 1, v], [b.utcMonth, 1, w], [b.utcMonth, 3, w], [b.utcYear, 1, w]]
                  , C = [[b.utcSecond, 1, x], [b.utcSecond, 5, x], [b.utcSecond, 15, x], [b.utcSecond, 30, x], [b.utcMinute, 1, x], [b.utcMinute, 5, x], [b.utcMinute, 15, x], [b.utcMinute, 30, x], [b.utcHour, 1, x], [b.utcHour, 3, x], [b.utcHour, 6, x], [b.utcHour, 12, x], [b.utcDay, 1, v]];
                return n.utc = function() {
                    return h({
                        daily: B,
                        intraday: C
                    }, y)
                }
                ,
                n
            }
        }
        , {}],
        59: [function(a, b, c) {
            "use strict";
            function d(a, b, c, d) {
                return b.length > 0 ? a.extent(b, c).map(f(d)) : []
            }
            function e(a, b, c, e) {
                return a.scaleLinear().domain(d(a, b, c, e)).range([1, 0])
            }
            function f(a, b) {
                return a = a || 0,
                function(c, d, e) {
                    if (e.length > 2)
                        throw "array.length > 2 unsupported. array.length = " + e.length;
                    return b = b || e[e.length - 1] - e[0],
                    c + (2 * d - 1) * b * a
                }
            }
            function g(a, b) {
                return a.map(b).reduce(function(a, b) {
                    return a.concat(b)
                }).filter(function(a) {
                    return null !== a
                })
            }
            b.exports = function(b) {
                var c = a("./zoomable")()
                  , d = a("../util")()
                  , h = a("../accessor")()
                  , i = a("./financetime")(b.scaleLinear, b, b.bisect, d.rebindCallback, f, c);
                return {
                    financetime: i,
                    analysis: {
                        supstance: function(a, c) {
                            return b.scaleLinear()
                        },
                        trendline: function(a, c) {
                            return b.scaleLinear()
                        }
                    },
                    plot: {
                        time: function(a, b) {
                            return b = b || h.value(),
                            i().domain(a.map(b.d))
                        },
                        atr: function(a, c) {
                            return c = c || h.value(),
                            e(b, a, c, .04)
                        },
                        ichimoku: function(a, c) {
                            c = c || h.ichimoku();
                            var d = g(a, function(b, d) {
                                var e = a[d + c.pks(b)]
                                  , f = a[d - c.pks(b)];
                                return [c.ts(b), c.ks(b), f ? c.sa(f) : null, f ? c.sb(f) : null, e ? c.c(e) : null]
                            });
                            return b.scaleLinear().domain(b.extent(d).map(f(.02))).range([1, 0])
                        },
                        percent: function(a, b) {
                            var c = a.domain();
                            return b = b || c[0],
                            a.copy().domain([c[0], c[c.length - 1]].map(function(a) {
                                return (a - b) / b
                            }))
                        },
                        ohlc: function(a, c) {
                            return c = c || h.ohlc(),
                            b.scaleLinear().domain([b.min(a.map(c.low())), b.max(a.map(c.high()))].map(f(.02))).range([1, 0])
                        },
                        volume: function(a, c) {
                            return c = c || h.ohlc().v,
                            b.scaleLinear().domain([0, 1.15 * b.max(a.map(c))]).range([1, 0])
                        },
                        atrtrailingstop: function(a, c) {
                            c = c || h.atrtrailingstop();
                            var d = g(a, function(a) {
                                return [c.up(a), c.dn(a)]
                            });
                            return b.scaleLinear().domain(b.extent(d).map(f(.04))).range([1, 0])
                        },
                        rsi: function() {
                            return b.scaleLinear().domain([0, 100]).range([1, 0])
                        },
                        momentum: function(a, c) {
                            return c = c || h.value(),
                            e(b, a, c, .04)
                        },
                        moneyflow: function(a, c) {
                            return c = c || h.value(),
                            e(b, a, c, .04)
                        },
                        macd: function(a, c) {
                            return c = c || h.macd(),
                            e(b, a, c, .04)
                        },
                        movingaverage: function(a, c) {
                            return c = c || h.value(),
                            e(b, a, c)
                        },
                        adx: function() {
                            return b.scaleLinear().domain([0, 100]).range([1, 0])
                        },
                        aroon: function() {
                            return b.scaleLinear().domain([-100, 100]).range([1, 0])
                        },
                        stochastic: function() {
                            return b.scaleLinear().domain([0, 100]).range([1, 0])
                        },
                        williams: function() {
                            return b.scaleLinear().domain([0, 100]).range([1, 0])
                        },
                        bollinger: function(a, c) {
                            return c = c || h.bollinger(),
                            b.scaleLinear().domain([b.min(a.map(function(a) {
                                return c.lower(a)
                            })), b.max(a.map(function(a) {
                                return c.upper(a)
                            }))].map(f(.02))).range([1, 0])
                        }
                    },
                    position: {}
                }
            }
        }
        , {
            "../accessor": 8,
            "../util": 64,
            "./financetime": 58,
            "./zoomable": 60
        }],
        60: [function(a, b, c) {
            "use strict";
            b.exports = function() {
                function a(b, c, d, e) {
                    function f(a) {
                        return b.apply(b, arguments)
                    }
                    return e = void 0 === e || e,
                    f.invert = b.invert,
                    f.domain = function(a) {
                        return arguments.length ? (e ? b.domain([Math.max(d.domain[0], a[0]), Math.min(d.domain[1], a[1])]) : b.domain(a),
                        c && c(),
                        f) : b.domain()
                    }
                    ,
                    f.range = function(a) {
                        if (!arguments.length)
                            return b.range();
                        throw "zoomable is a read only range. Use this scale for zooming only"
                    }
                    ,
                    f.copy = function() {
                        return a(b.copy(), c, d, e)
                    }
                    ,
                    f.clamp = function(a) {
                        return arguments.length ? (e = a,
                        f) : e
                    }
                    ,
                    f
                }
                return a
            }
        }
        , {}],
        61: [function(a, b, c) {
            "use strict";
            b.exports = function(a) {
                return function() {
                    function b(a, b) {
                        var i, j = c(a, b), k = d(a, b), l = e(a, b), m = f(a, b), n = g(a, b), o = h(a, b), p = "left" === n || "up" === n ? 1 : -1, q = l / 3, r = l / 2, s = o ? m / 2 : m;
                        switch (i = "M " + j + " " + k,
                        n) {
                        case "up":
                        case "down":
                            i += " l " + -r + " " + p * s + " l " + q + " 0",
                            o && (i += " l 0 " + p * s),
                            i += " l " + q + " 0",
                            o && (i += " l 0 " + -p * s),
                            i += " l " + q + " 0";
                            break;
                        case "left":
                        case "right":
                            i += " l " + p * s + " " + -r + " l 0 " + q,
                            o && (i += " l " + p * s + " 0"),
                            i += " l 0 " + q,
                            o && (i += " l " + -p * s + " 0"),
                            i += " l 0 " + q;
                            break;
                        default:
                            throw "Unsupported arrow.orient() = " + g
                        }
                        return i + " z"
                    }
                    var c = a(0)
                      , d = a(0)
                      , e = a(12)
                      , f = a(15)
                      , g = a("up")
                      , h = a(!0);
                    return b.x = function(d) {
                        return arguments.length ? (c = a(d),
                        b) : c
                    }
                    ,
                    b.y = function(c) {
                        return arguments.length ? (d = a(c),
                        b) : d
                    }
                    ,
                    b.height = function(c) {
                        return arguments.length ? (f = a(c),
                        b) : f
                    }
                    ,
                    b.width = function(c) {
                        return arguments.length ? (e = a(c),
                        b) : e
                    }
                    ,
                    b.orient = function(c) {
                        return arguments.length ? (g = a(c),
                        b) : g
                    }
                    ,
                    b.tail = function(c) {
                        return arguments.length ? (h = a(c),
                        b) : h
                    }
                    ,
                    b
                }
            }
        }
        , {}],
        62: [function(a, b, c) {
            "use strict";
            b.exports = function(b) {
                return {
                    arrow: a("./arrow")(a("../util")().functor)
                }
            }
        }
        , {
            "../util": 64,
            "./arrow": 61
        }],
        63: [function(a, b, c) {
            "use strict";
            var d;
            if ("undefined" != typeof window)
                d = window.d3;
            else {
                if ("object" != typeof b)
                    throw "Unsupported runtime environment: Could not find d3. Ensure defined globally on window, or available as dependency.";
                d = a("d3")
            }
            b.exports = function(b) {
                return {
                    version: a("../build/version"),
                    accessor: a("./accessor")(),
                    indicator: a("./indicator")(b),
                    plot: a("./plot")(b),
                    scale: a("./scale")(b),
                    svg: a("./svg")(b)
                }
            }(d)
        }
        , {
            "../build/version": 1,
            "./accessor": 8,
            "./indicator": 28,
            "./plot": 44,
            "./scale": 59,
            "./svg": 62,
            d3: "d3"
        }],
        64: [function(a, b, c) {
            "use strict";
            function d(a, b, c) {
                for (var d, f = 2, g = arguments.length; ++f < g; )
                    a[d = arguments[f]] = e(a, b, b[d], c);
                return a
            }
            function e(a, b, c, d) {
                return function() {
                    var e = c.apply(b, arguments);
                    return d && e === b && d(),
                    e === b ? a : e
                }
            }
            b.exports = function() {
                return {
                    rebindCallback: d,
                    rebind: function(a, b) {
                        var c = Array.prototype.slice.call(arguments, 0);
                        return c.splice(2, 0, void 0),
                        d.apply(this, c)
                    },
                    functor: function(a) {
                        return "function" == typeof a ? a : function() {
                            return a
                        }
                    }
                }
            }
        }
        , {}]
    }, {}, [63])(63)
});
//# sourceMappingURL=techan.min.js.map
