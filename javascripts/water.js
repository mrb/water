function e(a) {
  throw a;
}
var h = void 0, k = !0, m = null, p = !1;
function aa() {
  return function(a) {
    return a
  }
}
function q(a) {
  return function() {
    return this[a]
  }
}
function s(a) {
  return function() {
    return a
  }
}
var t;
function u(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function ba(a) {
  return"string" == typeof a
}
var ca = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), da = 0;
function ea(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function fa(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, l, r, n, w) {
    if("%" == r) {
      return"%"
    }
    var v = c.shift();
    "undefined" == typeof v && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = v;
    return fa.ca[r].apply(m, arguments)
  })
}
fa.ca = {};
fa.ca.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
fa.ca.f = function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var g;
  g = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = g + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - g.length;
  return d = 0 <= b.indexOf("-", 0) ? g + d + Array(a + 1).join(" ") : g + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
};
fa.ca.d = function(a, b, c, d, f, g, i, j) {
  return fa.ca.f(parseInt(a, 10), b, c, d, 0, g, i, j)
};
fa.ca.i = fa.ca.d;
fa.ca.u = fa.ca.d;
function ha(a, b) {
  a != m && this.append.apply(this, arguments)
}
ha.prototype.oa = "";
ha.prototype.set = function(a) {
  this.oa = "" + a
};
ha.prototype.append = function(a, b, c) {
  this.oa += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.oa += arguments[d]
    }
  }
  return this
};
ha.prototype.toString = q("oa");
function ia(a) {
  return a
}
var ja = ["cljs", "core", "set_print_fn_BANG_"], ka = this;
!(ja[0] in ka) && ka.execScript && ka.execScript("var " + ja[0]);
for(var la;ja.length && (la = ja.shift());) {
  !ja.length && ia !== h ? ka[la] = ia : ka = ka[la] ? ka[la] : ka[la] = {}
}
function ma() {
  var a = ["\ufdd0:flush-on-newline", k, "\ufdd0:readably", k, "\ufdd0:meta", p, "\ufdd0:dup", p];
  return new na(m, a.length / 2, a, m)
}
function x(a) {
  return a != m && a !== p
}
function oa(a) {
  return x(a) ? p : k
}
function pa(a) {
  var b = ba(a);
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function y(a, b) {
  return a[u(b == m ? m : b)] ? k : a._ ? k : p
}
function C(a, b) {
  var c = b == m ? m : b.constructor, c = x(x(c) ? c.Xa : c) ? c.nb : u(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
var ra = {}, sa = {};
function ta(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  var c = ta[u(a == m ? m : a)];
  c ? b = c : (c = ta._) ? b = c : e(C("ICounted.-count", a));
  return b.call(m, a)
}
function ua(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var d = ua[u(a == m ? m : a)];
  d ? c = d : (d = ua._) ? c = d : e(C("ICollection.-conj", a));
  return c.call(m, a, b)
}
var va = {}, E, wa = m;
function xa(a, b) {
  if(a ? a.K : a) {
    return a.K(a, b)
  }
  var c;
  var d = E[u(a == m ? m : a)];
  d ? c = d : (d = E._) ? c = d : e(C("IIndexed.-nth", a));
  return c.call(m, a, b)
}
function ya(a, b, c) {
  if(a ? a.V : a) {
    return a.V(a, b, c)
  }
  var d;
  var f = E[u(a == m ? m : a)];
  f ? d = f : (f = E._) ? d = f : e(C("IIndexed.-nth", a));
  return d.call(m, a, b, c)
}
wa = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return xa.call(this, a, b);
    case 3:
      return ya.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
wa.b = xa;
wa.e = ya;
E = wa;
var za = {};
function F(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = F[u(a == m ? m : a)];
  c ? b = c : (c = F._) ? b = c : e(C("ISeq.-first", a));
  return b.call(m, a)
}
function H(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  var c = H[u(a == m ? m : a)];
  c ? b = c : (c = H._) ? b = c : e(C("ISeq.-rest", a));
  return b.call(m, a)
}
var Aa = {}, Ba, Ca = m;
function Da(a, b) {
  if(a ? a.W : a) {
    return a.W(a, b)
  }
  var c;
  var d = Ba[u(a == m ? m : a)];
  d ? c = d : (d = Ba._) ? c = d : e(C("ILookup.-lookup", a));
  return c.call(m, a, b)
}
function Ea(a, b, c) {
  if(a ? a.M : a) {
    return a.M(a, b, c)
  }
  var d;
  var f = Ba[u(a == m ? m : a)];
  f ? d = f : (f = Ba._) ? d = f : e(C("ILookup.-lookup", a));
  return d.call(m, a, b, c)
}
Ca = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Da.call(this, a, b);
    case 3:
      return Ea.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ca.b = Da;
Ca.e = Ea;
Ba = Ca;
function Fa(a, b, c) {
  if(a ? a.pa : a) {
    return a.pa(a, b, c)
  }
  var d;
  var f = Fa[u(a == m ? m : a)];
  f ? d = f : (f = Fa._) ? d = f : e(C("IAssociative.-assoc", a));
  return d.call(m, a, b, c)
}
var Ga = {}, Ha = {};
function Ia(a) {
  if(a ? a.cb : a) {
    return a.cb(a)
  }
  var b;
  var c = Ia[u(a == m ? m : a)];
  c ? b = c : (c = Ia._) ? b = c : e(C("IMapEntry.-key", a));
  return b.call(m, a)
}
function Ja(a) {
  if(a ? a.eb : a) {
    return a.eb(a)
  }
  var b;
  var c = Ja[u(a == m ? m : a)];
  c ? b = c : (c = Ja._) ? b = c : e(C("IMapEntry.-val", a));
  return b.call(m, a)
}
var Ka = {};
function La(a) {
  if(a ? a.Ga : a) {
    return a.Ga(a)
  }
  var b;
  var c = La[u(a == m ? m : a)];
  c ? b = c : (c = La._) ? b = c : e(C("IDeref.-deref", a));
  return b.call(m, a)
}
var Ma = {};
function Na(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  var c = Na[u(a == m ? m : a)];
  c ? b = c : (c = Na._) ? b = c : e(C("IMeta.-meta", a));
  return b.call(m, a)
}
function Oa(a, b) {
  if(a ? a.H : a) {
    return a.H(a, b)
  }
  var c;
  var d = Oa[u(a == m ? m : a)];
  d ? c = d : (d = Oa._) ? c = d : e(C("IWithMeta.-with-meta", a));
  return c.call(m, a, b)
}
var Pa = {}, Qa, Ra = m;
function Sa(a, b) {
  if(a ? a.ra : a) {
    return a.ra(a, b)
  }
  var c;
  var d = Qa[u(a == m ? m : a)];
  d ? c = d : (d = Qa._) ? c = d : e(C("IReduce.-reduce", a));
  return c.call(m, a, b)
}
function Ta(a, b, c) {
  if(a ? a.sa : a) {
    return a.sa(a, b, c)
  }
  var d;
  var f = Qa[u(a == m ? m : a)];
  f ? d = f : (f = Qa._) ? d = f : e(C("IReduce.-reduce", a));
  return d.call(m, a, b, c)
}
Ra = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Sa.call(this, a, b);
    case 3:
      return Ta.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ra.b = Sa;
Ra.e = Ta;
Qa = Ra;
function Ua(a, b) {
  if(a ? a.A : a) {
    return a.A(a, b)
  }
  var c;
  var d = Ua[u(a == m ? m : a)];
  d ? c = d : (d = Ua._) ? c = d : e(C("IEquiv.-equiv", a));
  return c.call(m, a, b)
}
function Va(a) {
  if(a ? a.F : a) {
    return a.F(a)
  }
  var b;
  var c = Va[u(a == m ? m : a)];
  c ? b = c : (c = Va._) ? b = c : e(C("IHash.-hash", a));
  return b.call(m, a)
}
function Wa(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  var c = Wa[u(a == m ? m : a)];
  c ? b = c : (c = Wa._) ? b = c : e(C("ISeqable.-seq", a));
  return b.call(m, a)
}
var Xa = {};
function I(a, b) {
  if(a ? a.gb : a) {
    return a.gb(0, b)
  }
  var c;
  var d = I[u(a == m ? m : a)];
  d ? c = d : (d = I._) ? c = d : e(C("IWriter.-write", a));
  return c.call(m, a, b)
}
function Ya(a) {
  if(a ? a.wb : a) {
    return m
  }
  var b;
  var c = Ya[u(a == m ? m : a)];
  c ? b = c : (c = Ya._) ? b = c : e(C("IWriter.-flush", a));
  return b.call(m, a)
}
var Za = {};
function $a(a, b, c) {
  if(a ? a.w : a) {
    return a.w(a, b, c)
  }
  var d;
  var f = $a[u(a == m ? m : a)];
  f ? d = f : (f = $a._) ? d = f : e(C("IPrintWithWriter.-pr-writer", a));
  return d.call(m, a, b, c)
}
function ab(a, b, c) {
  if(a ? a.fb : a) {
    return a.fb(a, b, c)
  }
  var d;
  var f = ab[u(a == m ? m : a)];
  f ? d = f : (f = ab._) ? d = f : e(C("IWatchable.-notify-watches", a));
  return d.call(m, a, b, c)
}
function bb(a) {
  if(a ? a.Da : a) {
    return a.Da(a)
  }
  var b;
  var c = bb[u(a == m ? m : a)];
  c ? b = c : (c = bb._) ? b = c : e(C("IEditableCollection.-as-transient", a));
  return b.call(m, a)
}
function cb(a, b) {
  if(a ? a.ya : a) {
    return a.ya(a, b)
  }
  var c;
  var d = cb[u(a == m ? m : a)];
  d ? c = d : (d = cb._) ? c = d : e(C("ITransientCollection.-conj!", a));
  return c.call(m, a, b)
}
function hb(a) {
  if(a ? a.Ea : a) {
    return a.Ea(a)
  }
  var b;
  var c = hb[u(a == m ? m : a)];
  c ? b = c : (c = hb._) ? b = c : e(C("ITransientCollection.-persistent!", a));
  return b.call(m, a)
}
function ib(a, b, c) {
  if(a ? a.ta : a) {
    return a.ta(a, b, c)
  }
  var d;
  var f = ib[u(a == m ? m : a)];
  f ? d = f : (f = ib._) ? d = f : e(C("ITransientAssociative.-assoc!", a));
  return d.call(m, a, b, c)
}
function jb(a) {
  if(a ? a.$a : a) {
    return a.$a()
  }
  var b;
  var c = jb[u(a == m ? m : a)];
  c ? b = c : (c = jb._) ? b = c : e(C("IChunk.-drop-first", a));
  return b.call(m, a)
}
function kb(a) {
  if(a ? a.Fa : a) {
    return a.Fa(a)
  }
  var b;
  var c = kb[u(a == m ? m : a)];
  c ? b = c : (c = kb._) ? b = c : e(C("IChunkedSeq.-chunked-first", a));
  return b.call(m, a)
}
function lb(a) {
  if(a ? a.Ca : a) {
    return a.Ca(a)
  }
  var b;
  var c = lb[u(a == m ? m : a)];
  c ? b = c : (c = lb._) ? b = c : e(C("IChunkedSeq.-chunked-rest", a));
  return b.call(m, a)
}
function mb(a) {
  this.Db = a;
  this.q = 0;
  this.h = 1073741824
}
mb.prototype.gb = function(a, b) {
  return this.Db.append(b)
};
mb.prototype.wb = s(m);
function nb(a) {
  var b = new ha, c = new mb(b);
  a.w(a, c, ma());
  Ya(c);
  return"" + J(b)
}
function K(a, b, c, d, f) {
  this.wa = a;
  this.name = b;
  this.na = c;
  this.Ba = d;
  this.xa = f;
  this.h = 2154168321;
  this.q = 4096
}
K.prototype.w = function(a, b) {
  return I(b, this.na)
};
K.prototype.F = function() {
  -1 === this.Ba && (this.Ba = ob.b ? ob.b(M.c ? M.c(this.wa) : M.call(m, this.wa), M.c ? M.c(this.name) : M.call(m, this.name)) : ob.call(m, M.c ? M.c(this.wa) : M.call(m, this.wa), M.c ? M.c(this.name) : M.call(m, this.name)));
  return this.Ba
};
K.prototype.H = function(a, b) {
  return new K(this.wa, this.name, this.na, this.Ba, b)
};
K.prototype.G = q("xa");
var pb = m, pb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ba.e(b, this, m);
    case 3:
      return Ba.e(b, this, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
K.prototype.call = pb;
K.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
K.prototype.A = function(a, b) {
  return b instanceof K ? this.na === b.na : p
};
K.prototype.toString = q("na");
function N(a) {
  if(a == m) {
    return m
  }
  var b;
  if(b = a) {
    b = (b = a.h & 8388608) ? b : a.Lb
  }
  if(b) {
    return a.C(a)
  }
  if(a instanceof Array || pa(a)) {
    return 0 === a.length ? m : new qb(a, 0)
  }
  if(y(Aa, a)) {
    return Wa(a)
  }
  e(Error([J(a), J("is not ISeqable")].join("")))
}
function O(a) {
  if(a == m) {
    return m
  }
  var b;
  if(b = a) {
    b = (b = a.h & 64) ? b : a.Va
  }
  if(b) {
    return a.O(a)
  }
  a = N(a);
  return a == m ? m : F(a)
}
function P(a) {
  if(a != m) {
    var b;
    if(b = a) {
      b = (b = a.h & 64) ? b : a.Va
    }
    if(b) {
      return a.P(a)
    }
    a = N(a);
    return a != m ? H(a) : rb
  }
  return rb
}
function R(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    if(b = a) {
      b = (b = a.h & 128) ? b : a.Kb
    }
    a = b ? a.ga(a) : N(P(a))
  }
  return a
}
var S, sb = m;
function tb(a, b) {
  var c = a === b;
  return c ? c : Ua(a, b)
}
function ub(a, b, c) {
  for(;;) {
    if(x(sb.b(a, b))) {
      if(R(c)) {
        a = b, b = O(c), c = R(c)
      }else {
        return sb.b(b, O(c))
      }
    }else {
      return p
    }
  }
}
function vb(a, b, c) {
  var d = m;
  2 < arguments.length && (d = T(Array.prototype.slice.call(arguments, 2), 0));
  return ub.call(this, a, b, d)
}
vb.r = 2;
vb.n = function(a) {
  var b = O(a), a = R(a), c = O(a), a = P(a);
  return ub(b, c, a)
};
vb.j = ub;
sb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return k;
    case 2:
      return tb.call(this, a, b);
    default:
      return vb.j(a, b, T(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
sb.r = 2;
sb.n = vb.n;
sb.c = s(k);
sb.b = tb;
sb.j = vb.j;
S = sb;
Va["null"] = s(0);
sa["null"] = k;
ta["null"] = s(0);
Ua["null"] = function(a, b) {
  return b == m
};
Oa["null"] = s(m);
Ma["null"] = k;
Na["null"] = s(m);
Ga["null"] = k;
Date.prototype.A = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
Va.number = function(a) {
  return Math.floor(a) % 2147483647
};
Ua.number = function(a, b) {
  return a === b
};
Va["boolean"] = function(a) {
  return a === k ? 1 : 0
};
Ma["function"] = k;
Na["function"] = s(m);
ra["function"] = k;
Va._ = function(a) {
  return a[ca] || (a[ca] = ++da)
};
var wb, xb = m;
function yb(a, b) {
  var c = ta(a);
  if(0 === c) {
    return b.v ? b.v() : b.call(m)
  }
  for(var d = E.b(a, 0), f = 1;;) {
    if(f < c) {
      d = b.b ? b.b(d, E.b(a, f)) : b.call(m, d, E.b(a, f)), f += 1
    }else {
      return d
    }
  }
}
function zb(a, b, c) {
  for(var d = ta(a), f = 0;;) {
    if(f < d) {
      c = b.b ? b.b(c, E.b(a, f)) : b.call(m, c, E.b(a, f)), f += 1
    }else {
      return c
    }
  }
}
function Ab(a, b, c, d) {
  for(var f = ta(a);;) {
    if(d < f) {
      c = b.b ? b.b(c, E.b(a, d)) : b.call(m, c, E.b(a, d)), d += 1
    }else {
      return c
    }
  }
}
xb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return yb.call(this, a, b);
    case 3:
      return zb.call(this, a, b, c);
    case 4:
      return Ab.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
xb.b = yb;
xb.e = zb;
xb.m = Ab;
wb = xb;
var Bb, Cb = m;
function Db(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.v ? b.v() : b.call(m)
  }
  for(var d = a[0], f = 1;;) {
    if(f < c) {
      d = b.b ? b.b(d, a[f]) : b.call(m, d, a[f]), f += 1
    }else {
      return d
    }
  }
}
function Eb(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.b ? b.b(c, a[f]) : b.call(m, c, a[f]), f += 1
    }else {
      return c
    }
  }
}
function Fb(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.b ? b.b(c, a[d]) : b.call(m, c, a[d]), d += 1
    }else {
      return c
    }
  }
}
Cb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Db.call(this, a, b);
    case 3:
      return Eb.call(this, a, b, c);
    case 4:
      return Fb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Cb.b = Db;
Cb.e = Eb;
Cb.m = Fb;
Bb = Cb;
function Gb(a) {
  if(a) {
    var b = a.h & 2, a = (b ? b : a.Hb) ? k : a.h ? p : y(sa, a)
  }else {
    a = y(sa, a)
  }
  return a
}
function Hb(a) {
  if(a) {
    var b = a.h & 16, a = (b ? b : a.bb) ? k : a.h ? p : y(va, a)
  }else {
    a = y(va, a)
  }
  return a
}
function qb(a, b) {
  this.a = a;
  this.k = b;
  this.q = 0;
  this.h = 166199550
}
t = qb.prototype;
t.F = function(a) {
  return Ib.c ? Ib.c(a) : Ib.call(m, a)
};
t.ga = function() {
  return this.k + 1 < this.a.length ? new qb(this.a, this.k + 1) : m
};
t.D = function(a, b) {
  return U.b ? U.b(b, a) : U.call(m, b, a)
};
t.toString = function() {
  return nb(this)
};
t.ra = function(a, b) {
  return Bb.m(this.a, b, this.a[this.k], this.k + 1)
};
t.sa = function(a, b, c) {
  return Bb.m(this.a, b, c, this.k)
};
t.C = aa();
t.L = function() {
  return this.a.length - this.k
};
t.O = function() {
  return this.a[this.k]
};
t.P = function() {
  return this.k + 1 < this.a.length ? new qb(this.a, this.k + 1) : Jb.v ? Jb.v() : Jb.call(m)
};
t.A = function(a, b) {
  return Kb.b ? Kb.b(a, b) : Kb.call(m, a, b)
};
t.K = function(a, b) {
  var c = b + this.k;
  return c < this.a.length ? this.a[c] : m
};
t.V = function(a, b, c) {
  a = b + this.k;
  return a < this.a.length ? this.a[a] : c
};
var Lb, Mb = m;
function Nb(a) {
  return Mb.b(a, 0)
}
function Ob(a, b) {
  return b < a.length ? new qb(a, b) : m
}
Mb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Nb.call(this, a);
    case 2:
      return Ob.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Mb.c = Nb;
Mb.b = Ob;
Lb = Mb;
var T, Pb = m;
function Qb(a) {
  return Lb.b(a, 0)
}
function Rb(a, b) {
  return Lb.b(a, b)
}
Pb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Qb.call(this, a);
    case 2:
      return Rb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pb.c = Qb;
Pb.b = Rb;
T = Pb;
Pa.array = k;
Qa.array = function(a, b) {
  return Bb.b(a, b)
};
Qa.array = function(a, b, c) {
  return Bb.e(a, b, c)
};
sa.array = k;
ta.array = function(a) {
  return a.length
};
Ua._ = function(a, b) {
  return a === b
};
var Sb, Tb = m;
function Ub(a, b) {
  return a != m ? ua(a, b) : Jb.c ? Jb.c(b) : Jb.call(m, b)
}
function Vb(a, b, c) {
  for(;;) {
    if(x(c)) {
      a = Tb.b(a, b), b = O(c), c = R(c)
    }else {
      return Tb.b(a, b)
    }
  }
}
function Wb(a, b, c) {
  var d = m;
  2 < arguments.length && (d = T(Array.prototype.slice.call(arguments, 2), 0));
  return Vb.call(this, a, b, d)
}
Wb.r = 2;
Wb.n = function(a) {
  var b = O(a), a = R(a), c = O(a), a = P(a);
  return Vb(b, c, a)
};
Wb.j = Vb;
Tb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ub.call(this, a, b);
    default:
      return Wb.j(a, b, T(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Tb.r = 2;
Tb.n = Wb.n;
Tb.b = Ub;
Tb.j = Wb.j;
Sb = Tb;
function Xb(a) {
  if(Gb(a)) {
    a = ta(a)
  }else {
    a: {
      for(var a = N(a), b = 0;;) {
        if(Gb(a)) {
          a = b + ta(a);
          break a
        }
        a = R(a);
        b += 1
      }
      a = h
    }
  }
  return a
}
var Yb, Zb = m;
function $b(a, b) {
  for(;;) {
    a == m && e(Error("Index out of bounds"));
    if(0 === b) {
      if(N(a)) {
        return O(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Hb(a)) {
      return E.b(a, b)
    }
    if(N(a)) {
      var c = R(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function ac(a, b, c) {
  for(;;) {
    if(a == m) {
      return c
    }
    if(0 === b) {
      return N(a) ? O(a) : c
    }
    if(Hb(a)) {
      return E.e(a, b, c)
    }
    if(N(a)) {
      a = R(a), b -= 1
    }else {
      return c
    }
  }
}
Zb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return $b.call(this, a, b);
    case 3:
      return ac.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zb.b = $b;
Zb.e = ac;
Yb = Zb;
var V, bc = m;
function cc(a, b) {
  var c;
  if(a == m) {
    c = m
  }else {
    if(c = a) {
      c = (c = a.h & 16) ? c : a.bb
    }
    c = c ? a.K(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : m : pa(a) ? b < a.length ? a[b] : m : Yb.b(a, Math.floor(b))
  }
  return c
}
function dc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 16) ? d : a.bb
    }
    a = d ? a.V(a, Math.floor(b), c) : a instanceof Array ? b < a.length ? a[b] : c : pa(a) ? b < a.length ? a[b] : c : Yb.e(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
bc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return cc.call(this, a, b);
    case 3:
      return dc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bc.b = cc;
bc.e = dc;
V = bc;
var ec, fc = m;
function gc(a, b) {
  var c;
  if(a == m) {
    c = m
  }else {
    if(c = a) {
      c = (c = a.h & 256) ? c : a.Ua
    }
    c = c ? a.W(a, b) : a instanceof Array ? b < a.length ? a[b] : m : pa(a) ? b < a.length ? a[b] : m : y(Aa, a) ? Ba.b(a, b) : m
  }
  return c
}
function hc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 256) ? d : a.Ua
    }
    a = d ? a.M(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : pa(a) ? b < a.length ? a[b] : c : y(Aa, a) ? Ba.e(a, b, c) : c
  }else {
    a = c
  }
  return a
}
fc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return gc.call(this, a, b);
    case 3:
      return hc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
fc.b = gc;
fc.e = hc;
ec = fc;
function ic(a) {
  var b;
  b = a ? ((b = a.h & 131072) ? b : a.tb) || (a.h ? 0 : y(Ma, a)) : y(Ma, a);
  return b ? Na(a) : m
}
var jc = {}, kc = 0, M, lc = m;
function mc(a) {
  return lc.b(a, k)
}
function nc(a, b) {
  var c = ba(a);
  (c ? b : c) ? (255 < kc && (jc = {}, kc = 0), c = jc[a], "number" !== typeof c && (c = ea(a), jc[a] = c, kc += 1)) : c = Va(a);
  return c
}
lc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return mc.call(this, a);
    case 2:
      return nc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
lc.c = mc;
lc.b = nc;
M = lc;
function oc(a) {
  if(a) {
    var b = a.h & 16384, a = (b ? b : a.Nb) ? k : a.h ? p : y(Ka, a)
  }else {
    a = y(Ka, a)
  }
  return a
}
function pc(a) {
  var b = a instanceof qc;
  return b ? b : a instanceof rc
}
function sc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
function tc(a) {
  var b = ba(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function uc(a, b) {
  if(a === b) {
    return 0
  }
  if(a == m) {
    return-1
  }
  if(b == m) {
    return 1
  }
  if((a == m ? m : a.constructor) === (b == m ? m : b.constructor)) {
    var c;
    if(c = a) {
      c = (c = a.q & 2048) ? c : a.qb
    }
    return c ? a.rb(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var vc, wc = m;
function xc(a, b) {
  var c = Xb(a), d = Xb(b);
  return c < d ? -1 : c > d ? 1 : wc.m(a, b, c, 0)
}
function yc(a, b, c, d) {
  for(;;) {
    var f = uc(V.b(a, d), V.b(b, d)), g = 0 === f;
    if(g ? d + 1 < c : g) {
      d += 1
    }else {
      return f
    }
  }
}
wc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return xc.call(this, a, b);
    case 4:
      return yc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
wc.b = xc;
wc.m = yc;
vc = wc;
var zc, Ac = m;
function Bc(a, b) {
  var c = N(b);
  return c ? Cc.e ? Cc.e(a, O(c), R(c)) : Cc.call(m, a, O(c), R(c)) : a.v ? a.v() : a.call(m)
}
function Dc(a, b, c) {
  for(c = N(c);;) {
    if(c) {
      b = a.b ? a.b(b, O(c)) : a.call(m, b, O(c)), c = R(c)
    }else {
      return b
    }
  }
}
Ac = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Bc.call(this, a, b);
    case 3:
      return Dc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ac.b = Bc;
Ac.e = Dc;
zc = Ac;
var Cc, Ec = m;
function Fc(a, b) {
  var c;
  if(c = b) {
    c = (c = b.h & 524288) ? c : b.vb
  }
  return c ? b.ra(b, a) : b instanceof Array ? Bb.b(b, a) : pa(b) ? Bb.b(b, a) : y(Pa, b) ? Qa.b(b, a) : zc.b(a, b)
}
function Gc(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.h & 524288) ? d : c.vb
  }
  return d ? c.sa(c, a, b) : c instanceof Array ? Bb.e(c, a, b) : pa(c) ? Bb.e(c, a, b) : y(Pa, c) ? Qa.e(c, a, b) : zc.e(a, b, c)
}
Ec = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Fc.call(this, a, b);
    case 3:
      return Gc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ec.b = Fc;
Ec.e = Gc;
Cc = Ec;
function Hc(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(m, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(m, a)
}
function Ic(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var Jc, Kc = m;
function Lc(a) {
  return a == m ? "" : a.toString()
}
function Mc(a, b) {
  return function(a, b) {
    for(;;) {
      if(x(b)) {
        var f = a.append(Kc.c(O(b))), g = R(b), a = f, b = g
      }else {
        return Kc.c(a)
      }
    }
  }.call(m, new ha(Kc.c(a)), b)
}
function Nc(a, b) {
  var c = m;
  1 < arguments.length && (c = T(Array.prototype.slice.call(arguments, 1), 0));
  return Mc.call(this, a, c)
}
Nc.r = 1;
Nc.n = function(a) {
  var b = O(a), a = P(a);
  return Mc(b, a)
};
Nc.j = Mc;
Kc = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Lc.call(this, a);
    default:
      return Nc.j(a, T(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Kc.r = 1;
Kc.n = Nc.n;
Kc.v = s("");
Kc.c = Lc;
Kc.j = Nc.j;
Jc = Kc;
var J, Oc = m;
function Pc(a) {
  return tc(a) ? Jc.j(":", T([a.substring(2, a.length)], 0)) : a == m ? "" : a.toString()
}
function Qc(a, b) {
  return function(a, b) {
    for(;;) {
      if(x(b)) {
        var f = a.append(Oc.c(O(b))), g = R(b), a = f, b = g
      }else {
        return Jc.c(a)
      }
    }
  }.call(m, new ha(Oc.c(a)), b)
}
function Rc(a, b) {
  var c = m;
  1 < arguments.length && (c = T(Array.prototype.slice.call(arguments, 1), 0));
  return Qc.call(this, a, c)
}
Rc.r = 1;
Rc.n = function(a) {
  var b = O(a), a = P(a);
  return Qc(b, a)
};
Rc.j = Qc;
Oc = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Pc.call(this, a);
    default:
      return Rc.j(a, T(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Oc.r = 1;
Oc.n = Rc.n;
Oc.v = s("");
Oc.c = Pc;
Oc.j = Rc.j;
J = Oc;
var Sc, Tc = m, Tc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Tc.b = function(a, b) {
  return a.substring(b)
};
Tc.e = function(a, b, c) {
  return a.substring(b, c)
};
Sc = Tc;
function Kb(a, b) {
  var c;
  c = b ? ((c = b.h & 16777216) ? c : b.Mb) || (b.h ? 0 : y(Xa, b)) : y(Xa, b);
  if(c) {
    a: {
      c = N(a);
      for(var d = N(b);;) {
        if(c == m) {
          c = d == m;
          break a
        }
        if(d != m && S.b(O(c), O(d))) {
          c = R(c), d = R(d)
        }else {
          c = p;
          break a
        }
      }
      c = h
    }
  }else {
    c = m
  }
  return x(c) ? k : p
}
function ob(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Ib(a) {
  return Cc.e(function(a, c) {
    return ob(a, M.b(c, p))
  }, M.b(O(a), p), R(a))
}
function Uc(a) {
  for(var b = 0, a = N(a);;) {
    if(a) {
      var c = O(a), b = (b + (M.c(W.c ? W.c(c) : W.call(m, c)) ^ M.c(Vc.c ? Vc.c(c) : Vc.call(m, c)))) % 4503599627370496, a = R(a)
    }else {
      return b
    }
  }
}
function Wc(a, b, c, d, f) {
  this.o = a;
  this.za = b;
  this.ea = c;
  this.count = d;
  this.l = f;
  this.q = 0;
  this.h = 65937646
}
t = Wc.prototype;
t.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Ib(a)
};
t.ga = function() {
  return 1 === this.count ? m : this.ea
};
t.D = function(a, b) {
  return new Wc(this.o, b, a, this.count + 1, m)
};
t.toString = function() {
  return nb(this)
};
t.ra = function(a, b) {
  return zc.b(b, a)
};
t.sa = function(a, b, c) {
  return zc.e(b, c, a)
};
t.C = aa();
t.L = q("count");
t.O = q("za");
t.P = function() {
  return 1 === this.count ? rb : this.ea
};
t.A = function(a, b) {
  return Kb(a, b)
};
t.H = function(a, b) {
  return new Wc(b, this.za, this.ea, this.count, this.l)
};
t.G = q("o");
function Xc(a) {
  this.o = a;
  this.q = 0;
  this.h = 65413326
}
t = Xc.prototype;
t.F = s(0);
t.ga = s(m);
t.D = function(a, b) {
  return new Wc(this.o, b, m, 1, m)
};
t.toString = function() {
  return nb(this)
};
t.C = s(m);
t.L = s(0);
t.O = s(m);
t.P = function() {
  return rb
};
t.A = function(a, b) {
  return Kb(a, b)
};
t.H = function(a, b) {
  return new Xc(b)
};
t.G = q("o");
var rb = new Xc(m), Jb;
function Yc(a) {
  var b;
  if(a instanceof qb) {
    b = a.a
  }else {
    a: {
      for(b = [];;) {
        if(a != m) {
          b.push(a.O(a)), a = a.ga(a)
        }else {
          break a
        }
      }
      b = h
    }
  }
  for(var a = b.length, c = rb;;) {
    if(0 < a) {
      var d = a - 1, c = c.D(c, b[a - 1]), a = d
    }else {
      return c
    }
  }
}
function Zc(a) {
  var b = m;
  0 < arguments.length && (b = T(Array.prototype.slice.call(arguments, 0), 0));
  return Yc.call(this, b)
}
Zc.r = 0;
Zc.n = function(a) {
  a = N(a);
  return Yc(a)
};
Zc.j = Yc;
Jb = Zc;
function $c(a, b, c, d) {
  this.o = a;
  this.za = b;
  this.ea = c;
  this.l = d;
  this.q = 0;
  this.h = 65405164
}
t = $c.prototype;
t.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Ib(a)
};
t.ga = function() {
  return this.ea == m ? m : Wa(this.ea)
};
t.D = function(a, b) {
  return new $c(m, b, a, this.l)
};
t.toString = function() {
  return nb(this)
};
t.C = aa();
t.O = q("za");
t.P = function() {
  return this.ea == m ? rb : this.ea
};
t.A = function(a, b) {
  return Kb(a, b)
};
t.H = function(a, b) {
  return new $c(b, this.za, this.ea, this.l)
};
t.G = q("o");
function U(a, b) {
  var c = b == m;
  if(!c && (c = b)) {
    c = (c = b.h & 64) ? c : b.Va
  }
  return c ? new $c(m, a, b, m) : new $c(m, a, N(b), m)
}
sa.string = k;
ta.string = function(a) {
  return a.length
};
Va.string = function(a) {
  return ea(a)
};
function ad(a) {
  this.ob = a;
  this.q = 0;
  this.h = 1
}
var bd = m, bd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var d = a, d = this;
      if(b == m) {
        d = m
      }else {
        var f;
        f = b ? ((f = b.h & 256) ? f : b.Ua) || (b.h ? 0 : y(Aa, b)) : y(Aa, b);
        d = f ? Ba.e(b, d.ob, m) : m
      }
      return d;
    case 3:
      return d = a, d = this, b == m ? d = c : (f = b ? ((f = b.h & 256) ? f : b.Ua) || (b.h ? 0 : y(Aa, b)) : y(Aa, b), d = f ? Ba.e(b, d.ob, c) : m), d
  }
  e(Error("Invalid arity: " + arguments.length))
};
ad.prototype.call = bd;
ad.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var cd = m, cd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ec.b(b, this.toString());
    case 3:
      return ec.e(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = cd;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? ec.b(b[0], a) : ec.e(b[0], a, b[1])
};
function dd(a) {
  var b = a.x;
  if(a.Za) {
    return b
  }
  a.x = b.v ? b.v() : b.call(m);
  a.Za = k;
  return a.x
}
function ed(a, b, c, d) {
  this.o = a;
  this.Za = b;
  this.x = c;
  this.l = d;
  this.q = 0;
  this.h = 31850700
}
t = ed.prototype;
t.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Ib(a)
};
t.ga = function(a) {
  return Wa(a.P(a))
};
t.D = function(a, b) {
  return U(b, a)
};
t.toString = function() {
  return nb(this)
};
t.C = function(a) {
  return N(dd(a))
};
t.O = function(a) {
  return O(dd(a))
};
t.P = function(a) {
  return P(dd(a))
};
t.A = function(a, b) {
  return Kb(a, b)
};
t.H = function(a, b) {
  return new ed(b, this.Za, this.x, this.l)
};
t.G = q("o");
function fd(a, b) {
  this.J = a;
  this.end = b;
  this.q = 0;
  this.h = 2
}
fd.prototype.L = q("end");
fd.prototype.add = function(a) {
  this.J[this.end] = a;
  return this.end += 1
};
fd.prototype.ka = function() {
  var a = new gd(this.J, 0, this.end);
  this.J = m;
  return a
};
function gd(a, b, c) {
  this.a = a;
  this.z = b;
  this.end = c;
  this.q = 0;
  this.h = 524306
}
t = gd.prototype;
t.ra = function(a, b) {
  return Bb.m(this.a, b, this.a[this.z], this.z + 1)
};
t.sa = function(a, b, c) {
  return Bb.m(this.a, b, c, this.z)
};
t.$a = function() {
  this.z === this.end && e(Error("-drop-first of empty chunk"));
  return new gd(this.a, this.z + 1, this.end)
};
t.K = function(a, b) {
  return this.a[this.z + b]
};
t.V = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.z : a) ? this.a[this.z + b] : c
};
t.L = function() {
  return this.end - this.z
};
var hd, id = m;
function jd(a) {
  return new gd(a, 0, a.length)
}
function kd(a, b) {
  return new gd(a, b, a.length)
}
function ld(a, b, c) {
  return new gd(a, b, c)
}
id = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return jd.call(this, a);
    case 2:
      return kd.call(this, a, b);
    case 3:
      return ld.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
id.c = jd;
id.b = kd;
id.e = ld;
hd = id;
function qc(a, b, c, d) {
  this.ka = a;
  this.ja = b;
  this.o = c;
  this.l = d;
  this.h = 31850604;
  this.q = 1536
}
t = qc.prototype;
t.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Ib(a)
};
t.D = function(a, b) {
  return U(b, a)
};
t.toString = function() {
  return nb(this)
};
t.C = aa();
t.O = function() {
  return E.b(this.ka, 0)
};
t.P = function() {
  return 1 < ta(this.ka) ? new qc(jb(this.ka), this.ja, this.o, m) : this.ja == m ? rb : this.ja
};
t.ab = function() {
  return this.ja == m ? m : this.ja
};
t.A = function(a, b) {
  return Kb(a, b)
};
t.H = function(a, b) {
  return new qc(this.ka, this.ja, b, this.l)
};
t.G = q("o");
t.Fa = q("ka");
t.Ca = function() {
  return this.ja == m ? rb : this.ja
};
function md(a) {
  for(var b = [];;) {
    if(N(a)) {
      b.push(O(a)), a = R(a)
    }else {
      return b
    }
  }
}
function nd(a, b) {
  if(Gb(a)) {
    return Xb(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var g;
    g = (g = 0 < d) ? N(c) : g;
    if(x(g)) {
      c = R(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var pd = function od(b) {
  return b == m ? m : R(b) == m ? N(O(b)) : U(O(b), od(R(b)))
}, qd, rd = m;
function sd(a, b, c) {
  return U(a, U(b, c))
}
function td(a, b, c, d) {
  return U(a, U(b, U(c, d)))
}
function ud(a, b, c, d, f) {
  return U(a, U(b, U(c, U(d, pd(f)))))
}
function vd(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = T(Array.prototype.slice.call(arguments, 4), 0));
  return ud.call(this, a, b, c, d, g)
}
vd.r = 4;
vd.n = function(a) {
  var b = O(a), a = R(a), c = O(a), a = R(a), d = O(a), a = R(a), f = O(a), a = P(a);
  return ud(b, c, d, f, a)
};
vd.j = ud;
rd = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return N(a);
    case 2:
      return U(a, b);
    case 3:
      return sd.call(this, a, b, c);
    case 4:
      return td.call(this, a, b, c, d);
    default:
      return vd.j(a, b, c, d, T(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
rd.r = 4;
rd.n = vd.n;
rd.c = function(a) {
  return N(a)
};
rd.b = function(a, b) {
  return U(a, b)
};
rd.e = sd;
rd.m = td;
rd.j = vd.j;
qd = rd;
function wd(a, b, c) {
  var d = N(c);
  if(0 === b) {
    return a.v ? a.v() : a.call(m)
  }
  var c = F(d), f = H(d);
  if(1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(m, c)
  }
  var d = F(f), g = H(f);
  if(2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(m, c, d)
  }
  var f = F(g), i = H(g);
  if(3 === b) {
    return a.e ? a.e(c, d, f) : a.e ? a.e(c, d, f) : a.call(m, c, d, f)
  }
  var g = F(i), j = H(i);
  if(4 === b) {
    return a.m ? a.m(c, d, f, g) : a.m ? a.m(c, d, f, g) : a.call(m, c, d, f, g)
  }
  i = F(j);
  j = H(j);
  if(5 === b) {
    return a.aa ? a.aa(c, d, f, g, i) : a.aa ? a.aa(c, d, f, g, i) : a.call(m, c, d, f, g, i)
  }
  var a = F(j), l = H(j);
  if(6 === b) {
    return a.ba ? a.ba(c, d, f, g, i, a) : a.ba ? a.ba(c, d, f, g, i, a) : a.call(m, c, d, f, g, i, a)
  }
  var j = F(l), r = H(l);
  if(7 === b) {
    return a.qa ? a.qa(c, d, f, g, i, a, j) : a.qa ? a.qa(c, d, f, g, i, a, j) : a.call(m, c, d, f, g, i, a, j)
  }
  var l = F(r), n = H(r);
  if(8 === b) {
    return a.Sa ? a.Sa(c, d, f, g, i, a, j, l) : a.Sa ? a.Sa(c, d, f, g, i, a, j, l) : a.call(m, c, d, f, g, i, a, j, l)
  }
  var r = F(n), w = H(n);
  if(9 === b) {
    return a.Ta ? a.Ta(c, d, f, g, i, a, j, l, r) : a.Ta ? a.Ta(c, d, f, g, i, a, j, l, r) : a.call(m, c, d, f, g, i, a, j, l, r)
  }
  var n = F(w), v = H(w);
  if(10 === b) {
    return a.Ha ? a.Ha(c, d, f, g, i, a, j, l, r, n) : a.Ha ? a.Ha(c, d, f, g, i, a, j, l, r, n) : a.call(m, c, d, f, g, i, a, j, l, r, n)
  }
  var w = F(v), A = H(v);
  if(11 === b) {
    return a.Ia ? a.Ia(c, d, f, g, i, a, j, l, r, n, w) : a.Ia ? a.Ia(c, d, f, g, i, a, j, l, r, n, w) : a.call(m, c, d, f, g, i, a, j, l, r, n, w)
  }
  var v = F(A), z = H(A);
  if(12 === b) {
    return a.Ja ? a.Ja(c, d, f, g, i, a, j, l, r, n, w, v) : a.Ja ? a.Ja(c, d, f, g, i, a, j, l, r, n, w, v) : a.call(m, c, d, f, g, i, a, j, l, r, n, w, v)
  }
  var A = F(z), B = H(z);
  if(13 === b) {
    return a.Ka ? a.Ka(c, d, f, g, i, a, j, l, r, n, w, v, A) : a.Ka ? a.Ka(c, d, f, g, i, a, j, l, r, n, w, v, A) : a.call(m, c, d, f, g, i, a, j, l, r, n, w, v, A)
  }
  var z = F(B), D = H(B);
  if(14 === b) {
    return a.La ? a.La(c, d, f, g, i, a, j, l, r, n, w, v, A, z) : a.La ? a.La(c, d, f, g, i, a, j, l, r, n, w, v, A, z) : a.call(m, c, d, f, g, i, a, j, l, r, n, w, v, A, z)
  }
  var B = F(D), G = H(D);
  if(15 === b) {
    return a.Ma ? a.Ma(c, d, f, g, i, a, j, l, r, n, w, v, A, z, B) : a.Ma ? a.Ma(c, d, f, g, i, a, j, l, r, n, w, v, A, z, B) : a.call(m, c, d, f, g, i, a, j, l, r, n, w, v, A, z, B)
  }
  var D = F(G), Q = H(G);
  if(16 === b) {
    return a.Na ? a.Na(c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D) : a.Na ? a.Na(c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D) : a.call(m, c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D)
  }
  var G = F(Q), L = H(Q);
  if(17 === b) {
    return a.Oa ? a.Oa(c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D, G) : a.Oa ? a.Oa(c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D, G) : a.call(m, c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D, G)
  }
  var Q = F(L), ga = H(L);
  if(18 === b) {
    return a.Pa ? a.Pa(c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D, G, Q) : a.Pa ? a.Pa(c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D, G, Q) : a.call(m, c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D, G, Q)
  }
  L = F(ga);
  ga = H(ga);
  if(19 === b) {
    return a.Qa ? a.Qa(c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D, G, Q, L) : a.Qa ? a.Qa(c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D, G, Q, L) : a.call(m, c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D, G, Q, L)
  }
  var qa = F(ga);
  H(ga);
  if(20 === b) {
    return a.Ra ? a.Ra(c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D, G, Q, L, qa) : a.Ra ? a.Ra(c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D, G, Q, L, qa) : a.call(m, c, d, f, g, i, a, j, l, r, n, w, v, A, z, B, D, G, Q, L, qa)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var xd, yd = m;
function zd(a, b) {
  var c = a.r;
  if(a.n) {
    var d = nd(b, c + 1);
    return d <= c ? wd(a, d, b) : a.n(b)
  }
  return a.apply(a, md(b))
}
function Ad(a, b, c) {
  b = qd.b(b, c);
  c = a.r;
  if(a.n) {
    var d = nd(b, c + 1);
    return d <= c ? wd(a, d, b) : a.n(b)
  }
  return a.apply(a, md(b))
}
function Bd(a, b, c, d) {
  b = qd.e(b, c, d);
  c = a.r;
  return a.n ? (d = nd(b, c + 1), d <= c ? wd(a, d, b) : a.n(b)) : a.apply(a, md(b))
}
function Cd(a, b, c, d, f) {
  b = qd.m(b, c, d, f);
  c = a.r;
  return a.n ? (d = nd(b, c + 1), d <= c ? wd(a, d, b) : a.n(b)) : a.apply(a, md(b))
}
function Dd(a, b, c, d, f, g) {
  b = U(b, U(c, U(d, U(f, pd(g)))));
  c = a.r;
  return a.n ? (d = nd(b, c + 1), d <= c ? wd(a, d, b) : a.n(b)) : a.apply(a, md(b))
}
function Ed(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = T(Array.prototype.slice.call(arguments, 5), 0));
  return Dd.call(this, a, b, c, d, f, i)
}
Ed.r = 5;
Ed.n = function(a) {
  var b = O(a), a = R(a), c = O(a), a = R(a), d = O(a), a = R(a), f = O(a), a = R(a), g = O(a), a = P(a);
  return Dd(b, c, d, f, g, a)
};
Ed.j = Dd;
yd = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return zd.call(this, a, b);
    case 3:
      return Ad.call(this, a, b, c);
    case 4:
      return Bd.call(this, a, b, c, d);
    case 5:
      return Cd.call(this, a, b, c, d, f);
    default:
      return Ed.j(a, b, c, d, f, T(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
yd.r = 5;
yd.n = Ed.n;
yd.b = zd;
yd.e = Ad;
yd.m = Bd;
yd.aa = Cd;
yd.j = Ed.j;
xd = yd;
function Fd(a, b) {
  for(;;) {
    if(N(b) == m) {
      return k
    }
    if(x(a.c ? a.c(O(b)) : a.call(m, O(b)))) {
      var c = a, d = R(b), a = c, b = d
    }else {
      return p
    }
  }
}
function Gd(a) {
  return a
}
var Hd, X = m;
function Id(a, b) {
  return new ed(m, p, function() {
    var c = N(b);
    if(c) {
      if(pc(c)) {
        for(var d = kb(c), f = Xb(d), g = new fd(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.c ? a.c(E.b(d, i)) : a.call(m, E.b(d, i));
            g.add(j);
            i += 1
          }else {
            break
          }
        }
        d = g.ka();
        c = X.b(a, lb(c));
        return 0 === ta(d) ? c : new qc(d, c, m, m)
      }
      return U(a.c ? a.c(O(c)) : a.call(m, O(c)), X.b(a, P(c)))
    }
    return m
  }, m)
}
function Jd(a, b, c) {
  return new ed(m, p, function() {
    var d = N(b), f = N(c);
    return(d ? f : d) ? U(a.b ? a.b(O(d), O(f)) : a.call(m, O(d), O(f)), X.e(a, P(d), P(f))) : m
  }, m)
}
function Kd(a, b, c, d) {
  return new ed(m, p, function() {
    var f = N(b), g = N(c), i = N(d);
    return(f ? g ? i : g : f) ? U(a.e ? a.e(O(f), O(g), O(i)) : a.call(m, O(f), O(g), O(i)), X.m(a, P(f), P(g), P(i))) : m
  }, m)
}
function Ld(a, b, c, d, f) {
  return X.b(function(b) {
    return xd.b(a, b)
  }, function i(a) {
    return new ed(m, p, function() {
      var b = X.b(N, a);
      return Fd(Gd, b) ? U(X.b(O, b), i(X.b(P, b))) : m
    }, m)
  }(Sb.j(f, d, T([c, b], 0))))
}
function Md(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = T(Array.prototype.slice.call(arguments, 4), 0));
  return Ld.call(this, a, b, c, d, g)
}
Md.r = 4;
Md.n = function(a) {
  var b = O(a), a = R(a), c = O(a), a = R(a), d = O(a), a = R(a), f = O(a), a = P(a);
  return Ld(b, c, d, f, a)
};
Md.j = Ld;
X = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Id.call(this, a, b);
    case 3:
      return Jd.call(this, a, b, c);
    case 4:
      return Kd.call(this, a, b, c, d);
    default:
      return Md.j(a, b, c, d, T(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
X.r = 4;
X.n = Md.n;
X.b = Id;
X.e = Jd;
X.m = Kd;
X.j = Md.j;
Hd = X;
function Nd(a, b) {
  this.p = a;
  this.a = b
}
function Od(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Pd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Nd(a, Array(32));
    d.a[0] = c;
    c = d;
    b -= 5
  }
}
var Rd = function Qd(b, c, d, f) {
  var g = new Nd(d.p, d.a.slice()), i = b.g - 1 >>> c & 31;
  5 === c ? g.a[i] = f : (d = d.a[i], b = d != m ? Qd(b, c - 5, d, f) : Pd(m, c - 5, f), g.a[i] = b);
  return g
};
function Sd(a, b) {
  var c = 0 <= b;
  if(c ? b < a.g : c) {
    if(b >= Od(a)) {
      return a.I
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.a[b >>> d & 31], d = f
      }else {
        return c.a
      }
    }
  }else {
    c = a.g, e(Error([J("No item "), J(b), J(" in vector of length "), J(c)].join("")))
  }
}
var Ud = function Td(b, c, d, f, g) {
  var i = new Nd(d.p, d.a.slice());
  if(0 === c) {
    i.a[f & 31] = g
  }else {
    var j = f >>> c & 31, b = Td(b, c - 5, d.a[j], f, g);
    i.a[j] = b
  }
  return i
};
function Vd(a, b, c, d, f, g) {
  this.o = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.I = f;
  this.l = g;
  this.q = 4;
  this.h = 167668511
}
t = Vd.prototype;
t.Da = function() {
  return new Wd(this.g, this.shift, Xd.c ? Xd.c(this.root) : Xd.call(m, this.root), Yd.c ? Yd.c(this.I) : Yd.call(m, this.I))
};
t.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Ib(a)
};
t.W = function(a, b) {
  return a.V(a, b, m)
};
t.M = function(a, b, c) {
  return a.V(a, b, c)
};
t.pa = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.g : d) {
    return Od(a) <= b ? (a = this.I.slice(), a[b & 31] = c, new Vd(this.o, this.g, this.shift, this.root, a, m)) : new Vd(this.o, this.g, this.shift, Ud(a, this.shift, this.root, b, c), this.I, m)
  }
  if(b === this.g) {
    return a.D(a, c)
  }
  e(Error([J("Index "), J(b), J(" out of bounds  [0,"), J(this.g), J("]")].join("")))
};
var Zd = m, Zd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.K(this, b);
    case 3:
      return this.V(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = Vd.prototype;
t.call = Zd;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.D = function(a, b) {
  if(32 > this.g - Od(a)) {
    var c = this.I.slice();
    c.push(b);
    return new Vd(this.o, this.g + 1, this.shift, this.root, c, m)
  }
  var d = this.g >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Nd(m, Array(32));
    d.a[0] = this.root;
    var f = Pd(m, this.shift, new Nd(m, this.I));
    d.a[1] = f
  }else {
    d = Rd(a, this.shift, this.root, new Nd(m, this.I))
  }
  return new Vd(this.o, this.g + 1, c, d, [b], m)
};
t.cb = function(a) {
  return a.K(a, 0)
};
t.eb = function(a) {
  return a.K(a, 1)
};
t.toString = function() {
  return nb(this)
};
t.ra = function(a, b) {
  return wb.b(a, b)
};
t.sa = function(a, b, c) {
  return wb.e(a, b, c)
};
t.C = function(a) {
  return 0 === this.g ? m : 32 > this.g ? T.c(this.I) : Y.e ? Y.e(a, 0, 0) : Y.call(m, a, 0, 0)
};
t.L = q("g");
t.A = function(a, b) {
  return Kb(a, b)
};
t.H = function(a, b) {
  return new Vd(b, this.g, this.shift, this.root, this.I, this.l)
};
t.G = q("o");
t.K = function(a, b) {
  return Sd(a, b)[b & 31]
};
t.V = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.K(a, b) : c
};
var $d = new Nd(m, Array(32));
function ae(a) {
  var b = a.length;
  if(32 > b) {
    return new Vd(m, b, 5, $d, a, m)
  }
  for(var c = a.slice(0, 32), d = 32, f = bb(new Vd(m, 32, 5, $d, c, m));;) {
    if(d < b) {
      c = d + 1, f = cb(f, a[d]), d = c
    }else {
      return hb(f)
    }
  }
}
function rc(a, b, c, d, f, g) {
  this.U = a;
  this.T = b;
  this.k = c;
  this.z = d;
  this.o = f;
  this.l = g;
  this.h = 31719660;
  this.q = 1536
}
t = rc.prototype;
t.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Ib(a)
};
t.ga = function(a) {
  return this.z + 1 < this.T.length ? (a = Y.m ? Y.m(this.U, this.T, this.k, this.z + 1) : Y.call(m, this.U, this.T, this.k, this.z + 1), a == m ? m : a) : a.ab(a)
};
t.D = function(a, b) {
  return U(b, a)
};
t.toString = function() {
  return nb(this)
};
t.C = aa();
t.O = function() {
  return this.T[this.z]
};
t.P = function(a) {
  return this.z + 1 < this.T.length ? (a = Y.m ? Y.m(this.U, this.T, this.k, this.z + 1) : Y.call(m, this.U, this.T, this.k, this.z + 1), a == m ? rb : a) : a.Ca(a)
};
t.ab = function() {
  var a = this.T.length, a = this.k + a < ta(this.U) ? Y.e ? Y.e(this.U, this.k + a, 0) : Y.call(m, this.U, this.k + a, 0) : m;
  return a == m ? m : a
};
t.A = function(a, b) {
  return Kb(a, b)
};
t.H = function(a, b) {
  return Y.aa ? Y.aa(this.U, this.T, this.k, this.z, b) : Y.call(m, this.U, this.T, this.k, this.z, b)
};
t.Fa = function() {
  return hd.b(this.T, this.z)
};
t.Ca = function() {
  var a = this.T.length, a = this.k + a < ta(this.U) ? Y.e ? Y.e(this.U, this.k + a, 0) : Y.call(m, this.U, this.k + a, 0) : m;
  return a == m ? rb : a
};
var Y, be = m;
function ce(a, b, c) {
  return new rc(a, Sd(a, b), b, c, m, m)
}
function de(a, b, c, d) {
  return new rc(a, b, c, d, m, m)
}
function ee(a, b, c, d, f) {
  return new rc(a, b, c, d, f, m)
}
be = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return ce.call(this, a, b, c);
    case 4:
      return de.call(this, a, b, c, d);
    case 5:
      return ee.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
be.e = ce;
be.m = de;
be.aa = ee;
Y = be;
function Xd(a) {
  return new Nd({}, a.a.slice())
}
function Yd(a) {
  var b = Array(32);
  sc(a, 0, b, 0, a.length);
  return b
}
var ge = function fe(b, c, d, f) {
  var d = b.root.p === d.p ? d : new Nd(b.root.p, d.a.slice()), g = b.g - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.a[g], b = i != m ? fe(b, c - 5, i, f) : Pd(b.root.p, c - 5, f)
  }
  d.a[g] = b;
  return d
};
function Wd(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.I = d;
  this.h = 275;
  this.q = 88
}
var he = m, he = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.W(this, b);
    case 3:
      return this.M(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = Wd.prototype;
t.call = he;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.W = function(a, b) {
  return a.V(a, b, m)
};
t.M = function(a, b, c) {
  return a.V(a, b, c)
};
t.K = function(a, b) {
  if(this.root.p) {
    return Sd(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
t.V = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.K(a, b) : c
};
t.L = function() {
  if(this.root.p) {
    return this.g
  }
  e(Error("count after persistent!"))
};
t.ta = function(a, b, c) {
  var d;
  a: {
    if(a.root.p) {
      var f = 0 <= b;
      if(f ? b < a.g : f) {
        Od(a) <= b ? a.I[b & 31] = c : (d = function i(d, f) {
          var r = a.root.p === f.p ? f : new Nd(a.root.p, f.a.slice());
          if(0 === d) {
            r.a[b & 31] = c
          }else {
            var n = b >>> d & 31, w = i(d - 5, r.a[n]);
            r.a[n] = w
          }
          return r
        }.call(m, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.g) {
        d = a.ya(a, c);
        break a
      }
      e(Error([J("Index "), J(b), J(" out of bounds for TransientVector of length"), J(a.g)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
t.ya = function(a, b) {
  if(this.root.p) {
    if(32 > this.g - Od(a)) {
      this.I[this.g & 31] = b
    }else {
      var c = new Nd(this.root.p, this.I), d = Array(32);
      d[0] = b;
      this.I = d;
      if(this.g >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Pd(this.root.p, this.shift, c);
        this.root = new Nd(this.root.p, d);
        this.shift = f
      }else {
        this.root = ge(a, this.shift, this.root, c)
      }
    }
    this.g += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
t.Ea = function(a) {
  if(this.root.p) {
    this.root.p = m;
    var a = this.g - Od(a), b = Array(a);
    sc(this.I, 0, b, 0, a);
    return new Vd(m, this.g, this.shift, this.root, b, m)
  }
  e(Error("persistent! called twice"))
};
function ie() {
  this.q = 0;
  this.h = 2097152
}
ie.prototype.A = s(p);
var je = new ie;
function ke(a, b) {
  var c;
  c = b == m ? 0 : b ? ((c = b.h & 1024) ? c : b.Jb) || (b.h ? 0 : y(Ga, b)) : y(Ga, b);
  c = c ? Xb(a) === Xb(b) ? Fd(Gd, Hd.b(function(a) {
    return S.b(ec.e(b, O(a), je), O(R(a)))
  }, a)) : m : m;
  return x(c) ? k : p
}
function le(a, b) {
  var c = a.a, d = ba(b);
  if(d ? d : "number" === typeof b) {
    a: {
      for(var d = c.length, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        if(b === c[f]) {
          c = f;
          break a
        }
        f += 2
      }
      c = h
    }
  }else {
    if(b instanceof K) {
      a: {
        for(var d = c.length, f = b.na, g = 0;;) {
          if(d <= g) {
            c = -1;
            break a
          }
          var i = c[g], j = i instanceof K;
          if(j ? f === i.na : j) {
            c = g;
            break a
          }
          g += 2
        }
        c = h
      }
    }else {
      if(b == m) {
        a: {
          d = c.length;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            if(c[f] == m) {
              c = f;
              break a
            }
            f += 2
          }
          c = h
        }
      }else {
        a: {
          d = c.length;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            if(S.b(b, c[f])) {
              c = f;
              break a
            }
            f += 2
          }
          c = h
        }
      }
    }
  }
  return c
}
function me(a, b, c) {
  this.a = a;
  this.k = b;
  this.xa = c;
  this.q = 0;
  this.h = 31850702
}
t = me.prototype;
t.F = function(a) {
  return Ib(a)
};
t.ga = function() {
  return this.k < this.a.length - 2 ? new me(this.a, this.k + 2, this.xa) : m
};
t.D = function(a, b) {
  return U(b, a)
};
t.toString = function() {
  return nb(this)
};
t.C = aa();
t.L = function() {
  return(this.a.length - this.k) / 2
};
t.O = function() {
  return ae([this.a[this.k], this.a[this.k + 1]])
};
t.P = function() {
  return this.k < this.a.length - 2 ? new me(this.a, this.k + 2, this.xa) : rb
};
t.A = function(a, b) {
  return Kb(a, b)
};
t.H = function(a, b) {
  return new me(this.a, this.k, b)
};
t.G = q("xa");
function na(a, b, c, d) {
  this.o = a;
  this.g = b;
  this.a = c;
  this.l = d;
  this.q = 4;
  this.h = 16123663
}
t = na.prototype;
t.Da = function() {
  return new ne({}, this.a.length, this.a.slice())
};
t.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Uc(a)
};
t.W = function(a, b) {
  return a.M(a, b, m)
};
t.M = function(a, b, c) {
  a = le(a, b);
  return-1 === a ? c : this.a[a + 1]
};
t.pa = function(a, b, c) {
  var d = le(a, b);
  if(-1 === d) {
    if(this.g < oe) {
      for(var d = a.a, f = d.length, a = Array(f + 2), g = 0;;) {
        if(g < f) {
          a[g] = d[g], g += 1
        }else {
          break
        }
      }
      a[f] = b;
      a[f + 1] = c;
      return new na(this.o, this.g + 1, a, m)
    }
    d = Oa;
    f = Fa;
    g = pe;
    if(g != m) {
      var i;
      if(i = g) {
        i = (i = g.q & 4) ? i : g.Ib
      }
      i ? (a = Cc.e(cb, bb(g), a), a = hb(a)) : a = Cc.e(ua, g, a)
    }else {
      a = Cc.e(Sb, rb, a)
    }
    return d(f(a, b, c), this.o)
  }
  if(c === this.a[d + 1]) {
    return a
  }
  b = this.a.slice();
  b[d + 1] = c;
  return new na(this.o, this.g, b, m)
};
var qe = m, qe = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.W(this, b);
    case 3:
      return this.M(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = na.prototype;
t.call = qe;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.D = function(a, b) {
  return oc(b) ? a.pa(a, E.b(b, 0), E.b(b, 1)) : Cc.e(ua, a, b)
};
t.toString = function() {
  return nb(this)
};
t.C = function() {
  return 0 <= this.a.length - 2 ? new me(this.a, 0, m) : m
};
t.L = q("g");
t.A = function(a, b) {
  return ke(a, b)
};
t.H = function(a, b) {
  return new na(b, this.g, this.a, this.l)
};
t.G = q("o");
var oe = 8;
function ne(a, b, c) {
  this.ua = a;
  this.da = b;
  this.a = c;
  this.q = 56;
  this.h = 258
}
t = ne.prototype;
t.ta = function(a, b, c) {
  if(x(this.ua)) {
    var d = le(a, b);
    if(-1 === d) {
      if(this.da + 2 <= 2 * oe) {
        return this.da += 2, this.a.push(b), this.a.push(c), a
      }
      a = re.b ? re.b(this.da, this.a) : re.call(m, this.da, this.a);
      return ib(a, b, c)
    }
    c !== this.a[d + 1] && (this.a[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
t.ya = function(a, b) {
  if(x(this.ua)) {
    var c;
    c = b ? ((c = b.h & 2048) ? c : b.sb) || (b.h ? 0 : y(Ha, b)) : y(Ha, b);
    if(c) {
      return a.ta(a, W.c ? W.c(b) : W.call(m, b), Vc.c ? Vc.c(b) : Vc.call(m, b))
    }
    c = N(b);
    for(var d = a;;) {
      var f = O(c);
      if(x(f)) {
        c = R(c), d = d.ta(d, W.c ? W.c(f) : W.call(m, f), Vc.c ? Vc.c(f) : Vc.call(m, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
t.Ea = function() {
  if(x(this.ua)) {
    return this.ua = p, new na(m, Hc((this.da - this.da % 2) / 2), this.a, m)
  }
  e(Error("persistent! called twice"))
};
t.W = function(a, b) {
  return a.M(a, b, m)
};
t.M = function(a, b, c) {
  if(x(this.ua)) {
    return a = le(a, b), -1 === a ? c : this.a[a + 1]
  }
  e(Error("lookup after persistent!"))
};
t.L = function() {
  if(x(this.ua)) {
    return Hc((this.da - this.da % 2) / 2)
  }
  e(Error("count after persistent!"))
};
function re(a, b) {
  for(var c = bb(pe), d = 0;;) {
    if(d < a) {
      c = ib(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function se() {
  this.B = p
}
function te(a, b) {
  return ba(a) ? a === b : S.b(a, b)
}
var ue, ve = m;
function we(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function xe(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
ve = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return we.call(this, a, b, c);
    case 5:
      return xe.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ve.e = we;
ve.aa = xe;
ue = ve;
var ye, ze = m;
function Ae(a, b, c, d) {
  a = a.va(b);
  a.a[c] = d;
  return a
}
function Be(a, b, c, d, f, g) {
  a = a.va(b);
  a.a[c] = d;
  a.a[f] = g;
  return a
}
ze = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 4:
      return Ae.call(this, a, b, c, d);
    case 6:
      return Be.call(this, a, b, c, d, f, g)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ze.m = Ae;
ze.ba = Be;
ye = ze;
function Ce(a, b, c) {
  this.p = a;
  this.t = b;
  this.a = c
}
t = Ce.prototype;
t.Y = function(a, b, c, d, f, g) {
  var i = 1 << (c >>> b & 31), j = Ic(this.t & i - 1);
  if(0 === (this.t & i)) {
    var l = Ic(this.t);
    if(2 * l < this.a.length) {
      a = this.va(a);
      b = a.a;
      g.B = k;
      a: {
        c = 2 * (l - j);
        g = 2 * j + (c - 1);
        for(l = 2 * (j + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[l] = b[g];
          l -= 1;
          c -= 1;
          g -= 1
        }
      }
      b[2 * j] = d;
      b[2 * j + 1] = f;
      a.t |= i;
      return a
    }
    if(16 <= l) {
      j = Array(32);
      j[c >>> b & 31] = De.Y(a, b + 5, c, d, f, g);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.t >>> d & 1) && (j[d] = this.a[f] != m ? De.Y(a, b + 5, M.c(this.a[f]), this.a[f], this.a[f + 1], g) : this.a[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Ee(a, l + 1, j)
    }
    b = Array(2 * (l + 4));
    sc(this.a, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    sc(this.a, 2 * j, b, 2 * (j + 1), 2 * (l - j));
    g.B = k;
    a = this.va(a);
    a.a = b;
    a.t |= i;
    return a
  }
  l = this.a[2 * j];
  i = this.a[2 * j + 1];
  if(l == m) {
    return l = i.Y(a, b + 5, c, d, f, g), l === i ? this : ye.m(this, a, 2 * j + 1, l)
  }
  if(te(d, l)) {
    return f === i ? this : ye.m(this, a, 2 * j + 1, f)
  }
  g.B = k;
  return ye.ba(this, a, 2 * j, m, 2 * j + 1, Fe.qa ? Fe.qa(a, b + 5, l, i, c, d, f) : Fe.call(m, a, b + 5, l, i, c, d, f))
};
t.Aa = function() {
  return Ge.c ? Ge.c(this.a) : Ge.call(m, this.a)
};
t.va = function(a) {
  if(a === this.p) {
    return this
  }
  var b = Ic(this.t), c = Array(0 > b ? 4 : 2 * (b + 1));
  sc(this.a, 0, c, 0, 2 * b);
  return new Ce(a, this.t, c)
};
t.X = function(a, b, c, d, f) {
  var g = 1 << (b >>> a & 31), i = Ic(this.t & g - 1);
  if(0 === (this.t & g)) {
    var j = Ic(this.t);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = De.X(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.t >>> c & 1) && (i[c] = this.a[d] != m ? De.X(a + 5, M.c(this.a[d]), this.a[d], this.a[d + 1], f) : this.a[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Ee(m, j + 1, i)
    }
    a = Array(2 * (j + 1));
    sc(this.a, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    sc(this.a, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.B = k;
    return new Ce(m, this.t | g, a)
  }
  j = this.a[2 * i];
  g = this.a[2 * i + 1];
  if(j == m) {
    return j = g.X(a + 5, b, c, d, f), j === g ? this : new Ce(m, this.t, ue.e(this.a, 2 * i + 1, j))
  }
  if(te(c, j)) {
    return d === g ? this : new Ce(m, this.t, ue.e(this.a, 2 * i + 1, d))
  }
  f.B = k;
  return new Ce(m, this.t, ue.aa(this.a, 2 * i, m, 2 * i + 1, Fe.ba ? Fe.ba(a + 5, j, g, b, c, d) : Fe.call(m, a + 5, j, g, b, c, d)))
};
t.la = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.t & f)) {
    return d
  }
  var g = Ic(this.t & f - 1), f = this.a[2 * g], g = this.a[2 * g + 1];
  return f == m ? g.la(a + 5, b, c, d) : te(c, f) ? g : d
};
var De = new Ce(m, 0, []);
function Ee(a, b, c) {
  this.p = a;
  this.g = b;
  this.a = c
}
t = Ee.prototype;
t.Y = function(a, b, c, d, f, g) {
  var i = c >>> b & 31, j = this.a[i];
  if(j == m) {
    return a = ye.m(this, a, i, De.Y(a, b + 5, c, d, f, g)), a.g += 1, a
  }
  b = j.Y(a, b + 5, c, d, f, g);
  return b === j ? this : ye.m(this, a, i, b)
};
t.Aa = function() {
  return He.c ? He.c(this.a) : He.call(m, this.a)
};
t.va = function(a) {
  return a === this.p ? this : new Ee(a, this.g, this.a.slice())
};
t.X = function(a, b, c, d, f) {
  var g = b >>> a & 31, i = this.a[g];
  if(i == m) {
    return new Ee(m, this.g + 1, ue.e(this.a, g, De.X(a + 5, b, c, d, f)))
  }
  a = i.X(a + 5, b, c, d, f);
  return a === i ? this : new Ee(m, this.g, ue.e(this.a, g, a))
};
t.la = function(a, b, c, d) {
  var f = this.a[b >>> a & 31];
  return f != m ? f.la(a + 5, b, c, d) : d
};
function Ie(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(te(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Je(a, b, c, d) {
  this.p = a;
  this.ha = b;
  this.g = c;
  this.a = d
}
t = Je.prototype;
t.Y = function(a, b, c, d, f, g) {
  if(c === this.ha) {
    b = Ie(this.a, this.g, d);
    if(-1 === b) {
      if(this.a.length > 2 * this.g) {
        return a = ye.ba(this, a, 2 * this.g, d, 2 * this.g + 1, f), g.B = k, a.g += 1, a
      }
      c = this.a.length;
      b = Array(c + 2);
      sc(this.a, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      g.B = k;
      g = this.g + 1;
      a === this.p ? (this.a = b, this.g = g, a = this) : a = new Je(this.p, this.ha, g, b);
      return a
    }
    return this.a[b + 1] === f ? this : ye.m(this, a, b + 1, f)
  }
  return(new Ce(a, 1 << (this.ha >>> b & 31), [m, this, m, m])).Y(a, b, c, d, f, g)
};
t.Aa = function() {
  return Ge.c ? Ge.c(this.a) : Ge.call(m, this.a)
};
t.va = function(a) {
  if(a === this.p) {
    return this
  }
  var b = Array(2 * (this.g + 1));
  sc(this.a, 0, b, 0, 2 * this.g);
  return new Je(a, this.ha, this.g, b)
};
t.X = function(a, b, c, d, f) {
  return b === this.ha ? (a = Ie(this.a, this.g, c), -1 === a ? (a = this.a.length, b = Array(a + 2), sc(this.a, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.B = k, new Je(m, this.ha, this.g + 1, b)) : S.b(this.a[a], d) ? this : new Je(m, this.ha, this.g, ue.e(this.a, a + 1, d))) : (new Ce(m, 1 << (this.ha >>> a & 31), [m, this])).X(a, b, c, d, f)
};
t.la = function(a, b, c, d) {
  a = Ie(this.a, this.g, c);
  return 0 > a ? d : te(c, this.a[a]) ? this.a[a + 1] : d
};
var Fe, Ke = m;
function Le(a, b, c, d, f, g) {
  var i = M.c(b);
  if(i === d) {
    return new Je(m, i, 2, [b, c, f, g])
  }
  var j = new se;
  return De.X(a, i, b, c, j).X(a, d, f, g, j)
}
function Me(a, b, c, d, f, g, i) {
  var j = M.c(c);
  if(j === f) {
    return new Je(m, j, 2, [c, d, g, i])
  }
  var l = new se;
  return De.Y(a, b, j, c, d, l).Y(a, b, f, g, i, l)
}
Ke = function(a, b, c, d, f, g, i) {
  switch(arguments.length) {
    case 6:
      return Le.call(this, a, b, c, d, f, g);
    case 7:
      return Me.call(this, a, b, c, d, f, g, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ke.ba = Le;
Ke.qa = Me;
Fe = Ke;
function Ne(a, b, c, d, f) {
  this.o = a;
  this.Z = b;
  this.k = c;
  this.$ = d;
  this.l = f;
  this.q = 0;
  this.h = 31850572
}
t = Ne.prototype;
t.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Ib(a)
};
t.D = function(a, b) {
  return U(b, a)
};
t.toString = function() {
  return nb(this)
};
t.C = aa();
t.O = function() {
  return this.$ == m ? ae([this.Z[this.k], this.Z[this.k + 1]]) : O(this.$)
};
t.P = function() {
  return this.$ == m ? Ge.e ? Ge.e(this.Z, this.k + 2, m) : Ge.call(m, this.Z, this.k + 2, m) : Ge.e ? Ge.e(this.Z, this.k, R(this.$)) : Ge.call(m, this.Z, this.k, R(this.$))
};
t.A = function(a, b) {
  return Kb(a, b)
};
t.H = function(a, b) {
  return new Ne(b, this.Z, this.k, this.$, this.l)
};
t.G = q("o");
var Ge, Oe = m;
function Pe(a) {
  return Oe.e(a, 0, m)
}
function Qe(a, b, c) {
  if(c == m) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != m) {
          return new Ne(m, a, b, m, m)
        }
        var d = a[b + 1];
        if(x(d) && (d = d.Aa(), x(d))) {
          return new Ne(m, a, b + 2, d, m)
        }
        b += 2
      }else {
        return m
      }
    }
  }else {
    return new Ne(m, a, b, c, m)
  }
}
Oe = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Pe.call(this, a);
    case 3:
      return Qe.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Oe.c = Pe;
Oe.e = Qe;
Ge = Oe;
function Re(a, b, c, d, f) {
  this.o = a;
  this.Z = b;
  this.k = c;
  this.$ = d;
  this.l = f;
  this.q = 0;
  this.h = 31850572
}
t = Re.prototype;
t.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Ib(a)
};
t.D = function(a, b) {
  return U(b, a)
};
t.toString = function() {
  return nb(this)
};
t.C = aa();
t.O = function() {
  return O(this.$)
};
t.P = function() {
  return He.m ? He.m(m, this.Z, this.k, R(this.$)) : He.call(m, m, this.Z, this.k, R(this.$))
};
t.A = function(a, b) {
  return Kb(a, b)
};
t.H = function(a, b) {
  return new Re(b, this.Z, this.k, this.$, this.l)
};
t.G = q("o");
var He, Se = m;
function Te(a) {
  return Se.m(m, a, 0, m)
}
function Ue(a, b, c, d) {
  if(d == m) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(x(f) && (f = f.Aa(), x(f))) {
          return new Re(a, b, c + 1, f, m)
        }
        c += 1
      }else {
        return m
      }
    }
  }else {
    return new Re(a, b, c, d, m)
  }
}
Se = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return Te.call(this, a);
    case 4:
      return Ue.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Se.c = Te;
Se.m = Ue;
He = Se;
function Ve(a, b, c, d, f, g) {
  this.o = a;
  this.g = b;
  this.root = c;
  this.Q = d;
  this.S = f;
  this.l = g;
  this.q = 4;
  this.h = 16123663
}
t = Ve.prototype;
t.Da = function() {
  return new We({}, this.root, this.g, this.Q, this.S)
};
t.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Uc(a)
};
t.W = function(a, b) {
  return a.M(a, b, m)
};
t.M = function(a, b, c) {
  return b == m ? this.Q ? this.S : c : this.root == m ? c : this.root.la(0, M.c(b), b, c)
};
t.pa = function(a, b, c) {
  if(b == m) {
    var d = this.Q;
    return(d ? c === this.S : d) ? a : new Ve(this.o, this.Q ? this.g : this.g + 1, this.root, k, c, m)
  }
  d = new se;
  c = (this.root == m ? De : this.root).X(0, M.c(b), b, c, d);
  return c === this.root ? a : new Ve(this.o, d.B ? this.g + 1 : this.g, c, this.Q, this.S, m)
};
var Xe = m, Xe = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.W(this, b);
    case 3:
      return this.M(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = Ve.prototype;
t.call = Xe;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.D = function(a, b) {
  return oc(b) ? a.pa(a, E.b(b, 0), E.b(b, 1)) : Cc.e(ua, a, b)
};
t.toString = function() {
  return nb(this)
};
t.C = function() {
  if(0 < this.g) {
    var a = this.root != m ? this.root.Aa() : m;
    return this.Q ? U(ae([m, this.S]), a) : a
  }
  return m
};
t.L = q("g");
t.A = function(a, b) {
  return ke(a, b)
};
t.H = function(a, b) {
  return new Ve(b, this.g, this.root, this.Q, this.S, this.l)
};
t.G = q("o");
var pe = new Ve(m, 0, m, p, m, 0);
function We(a, b, c, d, f) {
  this.p = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.S = f;
  this.q = 56;
  this.h = 258
}
t = We.prototype;
t.ta = function(a, b, c) {
  return Ye(a, b, c)
};
t.ya = function(a, b) {
  var c;
  a: {
    if(a.p) {
      c = b ? ((c = b.h & 2048) ? c : b.sb) || (b.h ? 0 : y(Ha, b)) : y(Ha, b);
      if(c) {
        c = Ye(a, W.c ? W.c(b) : W.call(m, b), Vc.c ? Vc.c(b) : Vc.call(m, b));
        break a
      }
      c = N(b);
      for(var d = a;;) {
        var f = O(c);
        if(x(f)) {
          c = R(c), d = Ye(d, W.c ? W.c(f) : W.call(m, f), Vc.c ? Vc.c(f) : Vc.call(m, f))
        }else {
          c = d;
          break a
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
    c = h
  }
  return c
};
t.Ea = function(a) {
  var b;
  a.p ? (a.p = m, b = new Ve(m, a.count, a.root, a.Q, a.S, m)) : e(Error("persistent! called twice"));
  return b
};
t.W = function(a, b) {
  return b == m ? this.Q ? this.S : m : this.root == m ? m : this.root.la(0, M.c(b), b)
};
t.M = function(a, b, c) {
  return b == m ? this.Q ? this.S : c : this.root == m ? c : this.root.la(0, M.c(b), b, c)
};
t.L = function() {
  if(this.p) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function Ye(a, b, c) {
  if(a.p) {
    if(b == m) {
      a.S !== c && (a.S = c), a.Q || (a.count += 1, a.Q = k)
    }else {
      var d = new se, b = (a.root == m ? De : a.root).Y(a.p, 0, M.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.B && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
function Ze(a) {
  for(var b = N(a), c = bb(pe);;) {
    if(b) {
      var a = R(R(b)), d = O(b), b = O(R(b)), c = ib(c, d, b), b = a
    }else {
      return hb(c)
    }
  }
}
function $e(a) {
  var b = m;
  0 < arguments.length && (b = T(Array.prototype.slice.call(arguments, 0), 0));
  return Ze.call(this, b)
}
$e.r = 0;
$e.n = function(a) {
  a = N(a);
  return Ze(a)
};
$e.j = Ze;
function W(a) {
  return Ia(a)
}
function Vc(a) {
  return Ja(a)
}
function af(a) {
  var b;
  if(b = a) {
    b = (b = a.q & 4096) ? b : a.ub
  }
  if(b) {
    return a.name
  }
  if(pa(a)) {
    return a
  }
  if(tc(a)) {
    return b = a.lastIndexOf("/", a.length - 2), 0 > b ? Sc.b(a, 2) : Sc.b(a, b + 1)
  }
  e(Error([J("Doesn't support name: "), J(a)].join("")))
}
function bf(a) {
  var b;
  if(b = a) {
    b = (b = a.q & 4096) ? b : a.ub
  }
  if(b) {
    return a.wa
  }
  if(tc(a)) {
    return b = a.lastIndexOf("/", a.length - 2), -1 < b ? Sc.e(a, 2, b) : m
  }
  e(Error([J("Doesn't support namespace: "), J(a)].join("")))
}
function Z(a, b, c, d, f, g, i) {
  I(a, c);
  N(i) && (b.e ? b.e(O(i), a, g) : b.call(m, O(i), a, g));
  for(var c = N(R(i)), i = m, j = 0, l = 0;;) {
    if(l < j) {
      var r = i.K(i, l);
      I(a, d);
      b.e ? b.e(r, a, g) : b.call(m, r, a, g);
      l += 1
    }else {
      if(c = N(c)) {
        i = c, pc(i) ? (c = kb(i), l = lb(i), i = c, j = Xb(c), c = l) : (c = O(i), I(a, d), b.e ? b.e(c, a, g) : b.call(m, c, a, g), c = R(i), i = m, j = 0), l = 0
      }else {
        break
      }
    }
  }
  return I(a, f)
}
function cf(a, b) {
  for(var c = N(b), d = m, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.K(d, g);
      I(a, i);
      g += 1
    }else {
      if(c = N(c)) {
        d = c, pc(d) ? (c = kb(d), f = lb(d), d = c, i = Xb(c), c = f, f = i) : (i = O(d), I(a, i), c = R(d), d = m, f = 0), g = 0
      }else {
        return m
      }
    }
  }
}
function df(a, b) {
  var c = m;
  1 < arguments.length && (c = T(Array.prototype.slice.call(arguments, 1), 0));
  return cf.call(this, a, c)
}
df.r = 1;
df.n = function(a) {
  var b = O(a), a = P(a);
  return cf(b, a)
};
df.j = cf;
var ef = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, $ = function ff(b, c, d) {
  if(b == m) {
    return I(c, "nil")
  }
  if(h === b) {
    return I(c, "#<undefined>")
  }
  var f;
  f = ec.b(d, "\ufdd0:meta");
  x(f) && (f = b ? ((f = b.h & 131072) ? f : b.tb) ? k : b.h ? p : y(Ma, b) : y(Ma, b), f = x(f) ? ic(b) : f);
  x(f) && (I(c, "^"), ff(ic(b), c, d), I(c, " "));
  if(b == m) {
    return I(c, "nil")
  }
  if(b.Xa) {
    return b.mb(b, c, d)
  }
  if(f = b) {
    f = (f = b.h & 2147483648) ? f : b.N
  }
  if(f) {
    return b.w(b, c, d)
  }
  if((f = (b == m ? m : b.constructor) === Boolean) ? f : "number" === typeof b) {
    return I(c, "" + J(b))
  }
  if(b instanceof Array) {
    return Z(c, ff, "#<Array [", ", ", "]>", d, b)
  }
  if(ba(b)) {
    return tc(b) ? (I(c, ":"), d = bf(b), x(d) && df.j(c, T(["" + J(d), "/"], 0)), I(c, af(b))) : b instanceof K ? (d = bf(b), x(d) && df.j(c, T(["" + J(d), "/"], 0)), I(c, af(b))) : x((new ad("\ufdd0:readably")).call(m, d)) ? I(c, [J('"'), J(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
      return ef[b]
    })), J('"')].join("")) : I(c, b)
  }
  if((f = "function" == u(b)) ? f : b ? x(x(m) ? m : b.Gb) || (b.Ob ? 0 : y(ra, b)) : y(ra, b)) {
    return df.j(c, T(["#<", "" + J(b), ">"], 0))
  }
  if(b instanceof Date) {
    return d = function(b, c) {
      for(var d = "" + J(b);;) {
        if(Xb(d) < c) {
          d = [J("0"), J(d)].join("")
        }else {
          return d
        }
      }
    }, df.j(c, T(['#inst "', "" + J(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
  }
  x(b instanceof RegExp) ? b = df.j(c, T(['#"', b.source, '"'], 0)) : (f = b ? ((f = b.h & 2147483648) ? f : b.N) || (b.h ? 0 : y(Za, b)) : y(Za, b), b = f ? $a(b, c, d) : df.j(c, T(["#<", "" + J(b), ">"], 0)));
  return b
};
function gf(a) {
  var b = ma(), c = a == m;
  if(c ? c : oa(N(a))) {
    b = ""
  }else {
    var c = J, d = new ha, f = new mb(d);
    a: {
      $(O(a), f, b);
      for(var a = N(R(a)), g = m, i = 0, j = 0;;) {
        if(j < i) {
          var l = g.K(g, j);
          I(f, " ");
          $(l, f, b);
          j += 1
        }else {
          if(a = N(a)) {
            g = a, pc(g) ? (a = kb(g), i = lb(g), g = a, l = Xb(a), a = i, i = l) : (l = O(g), I(f, " "), $(l, f, b), a = R(g), g = m, i = 0), j = 0
          }else {
            break a
          }
        }
      }
    }
    Ya(f);
    b = "" + c(d)
  }
  return b
}
function hf(a) {
  var b = m;
  0 < arguments.length && (b = T(Array.prototype.slice.call(arguments, 0), 0));
  return gf(b)
}
hf.r = 0;
hf.n = function(a) {
  a = N(a);
  return gf(a)
};
hf.j = function(a) {
  return gf(a)
};
qb.prototype.N = k;
qb.prototype.w = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
qc.prototype.N = k;
qc.prototype.w = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
na.prototype.N = k;
na.prototype.w = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
ed.prototype.N = k;
ed.prototype.w = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
Ne.prototype.N = k;
Ne.prototype.w = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
rc.prototype.N = k;
rc.prototype.w = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
Ve.prototype.N = k;
Ve.prototype.w = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Vd.prototype.N = k;
Vd.prototype.w = function(a, b, c) {
  return Z(b, $, "[", " ", "]", c, a)
};
Wc.prototype.N = k;
Wc.prototype.w = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
me.prototype.N = k;
me.prototype.w = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
Xc.prototype.N = k;
Xc.prototype.w = function(a, b) {
  return I(b, "()")
};
$c.prototype.N = k;
$c.prototype.w = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
Re.prototype.N = k;
Re.prototype.w = function(a, b, c) {
  return Z(b, $, "(", " ", ")", c, a)
};
Vd.prototype.qb = k;
Vd.prototype.rb = function(a, b) {
  return vc.b(a, b)
};
function jf(a, b, c, d) {
  this.state = a;
  this.o = b;
  this.Eb = c;
  this.Fb = d;
  this.h = 2153938944;
  this.q = 2
}
t = jf.prototype;
t.F = function(a) {
  return a[ca] || (a[ca] = ++da)
};
t.fb = function(a, b, c) {
  for(var d = N(this.Fb), f = m, g = 0, i = 0;;) {
    if(i < g) {
      var j = f.K(f, i), l = V.e(j, 0, m), j = V.e(j, 1, m);
      j.m ? j.m(l, a, b, c) : j.call(m, l, a, b, c);
      i += 1
    }else {
      if(d = N(d)) {
        pc(d) ? (f = kb(d), d = lb(d), l = f, g = Xb(f), f = l) : (f = O(d), l = V.e(f, 0, m), j = V.e(f, 1, m), j.m ? j.m(l, a, b, c) : j.call(m, l, a, b, c), d = R(d), f = m, g = 0), i = 0
      }else {
        return m
      }
    }
  }
};
t.w = function(a, b, c) {
  I(b, "#<Atom: ");
  $(this.state, b, c);
  return I(b, ">")
};
t.G = q("o");
t.Ga = q("state");
t.A = function(a, b) {
  return a === b
};
var kf, lf = m;
function mf(a) {
  return new jf(a, m, m, m)
}
function nf(a, b) {
  var c;
  c = b == m ? p : b ? ((c = b.h & 64) ? c : b.Va) ? k : b.h ? p : y(za, b) : y(za, b);
  var d = c ? xd.b($e, b) : b;
  c = ec.b(d, "\ufdd0:validator");
  d = ec.b(d, "\ufdd0:meta");
  return new jf(a, d, c, m)
}
function of(a, b) {
  var c = m;
  1 < arguments.length && (c = T(Array.prototype.slice.call(arguments, 1), 0));
  return nf.call(this, a, c)
}
of.r = 1;
of.n = function(a) {
  var b = O(a), a = P(a);
  return nf(b, a)
};
of.j = nf;
lf = function(a, b) {
  switch(arguments.length) {
    case 1:
      return mf.call(this, a);
    default:
      return of.j(a, T(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
lf.r = 1;
lf.n = of.n;
lf.c = mf;
lf.j = of.j;
kf = lf;
function pf(a, b) {
  if(a ? a.kb : a) {
    return a.kb(a, b)
  }
  var c;
  var d = pf[u(a == m ? m : a)];
  d ? c = d : (d = pf._) ? c = d : e(C("ReadPort.take!", a));
  return c.call(m, a, b)
}
function qf(a, b, c) {
  if(a ? a.lb : a) {
    return a.lb(a, b, c)
  }
  var d;
  var f = qf[u(a == m ? m : a)];
  f ? d = f : (f = qf._) ? d = f : e(C("WritePort.put!", a));
  return d.call(m, a, b, c)
}
function rf(a) {
  if(a ? a.jb : a) {
    return a.jb(a)
  }
  var b;
  var c = rf[u(a == m ? m : a)];
  c ? b = c : (c = rf._) ? b = c : e(C("Channel.close!", a));
  return b.call(m, a)
}
function sf(a) {
  if(a ? a.xb : a) {
    return k
  }
  var b;
  var c = sf[u(a == m ? m : a)];
  c ? b = c : (c = sf._) ? b = c : e(C("Handler.active?", a));
  return b.call(m, a)
}
function tf(a) {
  if(a ? a.yb : a) {
    return a.Ya
  }
  var b;
  var c = tf[u(a == m ? m : a)];
  c ? b = c : (c = tf._) ? b = c : e(C("Handler.commit", a));
  return b.call(m, a)
}
function uf(a) {
  if(a ? a.Wa : a) {
    return a.Wa()
  }
  var b;
  var c = uf[u(a == m ? m : a)];
  c ? b = c : (c = uf._) ? b = c : e(C("Buffer.full?", a));
  return b.call(m, a)
}
function vf(a) {
  if(a ? a.ib : a) {
    return a.ib()
  }
  var b;
  var c = vf[u(a == m ? m : a)];
  c ? b = c : (c = vf._) ? b = c : e(C("Buffer.remove!", a));
  return b.call(m, a)
}
function wf(a, b) {
  if(a ? a.hb : a) {
    return a.hb(a, b)
  }
  var c;
  var d = wf[u(a == m ? m : a)];
  d ? c = d : (d = wf._) ? c = d : e(C("Buffer.add!", a));
  return c.call(m, a, b)
}
;var xf, zf = function yf(b) {
  h === xf && (xf = {}, xf = function(b, d, f) {
    this.Ya = b;
    this.zb = d;
    this.Bb = f;
    this.q = 0;
    this.h = 393216
  }, xf.Xa = k, xf.nb = "cljs.core.async.impl.ioc-helpers/t5551", xf.mb = function(b, d) {
    return I(d, "cljs.core.async.impl.ioc-helpers/t5551")
  }, xf.prototype.xb = s(k), xf.prototype.yb = q("Ya"), xf.prototype.G = q("Bb"), xf.prototype.H = function(b, d) {
    return new xf(this.Ya, this.zb, d)
  });
  return new xf(b, yf, m)
};
function Af(a, b) {
  var c = pf(b, zf(function(b) {
    a[2] = b;
    a[1] = 4;
    return a[0].call(m, a)
  }));
  return x(c) ? (a[2] = La(c), a[1] = 4, "\ufdd0:recur") : m
}
function Bf(a, b) {
  var c = a[4];
  b != m && qf(c, b, zf(s(m)));
  rf(c);
  return c
}
;var Cf, Ef = function Df(b) {
  h === Cf && (Cf = {}, Cf = function(b, d, f) {
    this.B = b;
    this.pb = d;
    this.Ab = f;
    this.q = 0;
    this.h = 425984
  }, Cf.Xa = k, Cf.nb = "cljs.core.async.impl.channels/t5526", Cf.mb = function(b, d) {
    return I(d, "cljs.core.async.impl.channels/t5526")
  }, Cf.prototype.Ga = q("B"), Cf.prototype.G = q("Ab"), Cf.prototype.H = function(b, d) {
    return new Cf(this.B, this.pb, d)
  });
  return new Cf(b, Df, m)
};
function Ff(a, b, c, d) {
  this.fa = a;
  this.ma = b;
  this.J = c;
  this.closed = d
}
Ff.prototype.jb = function(a) {
  Gf(a);
  if(!x(La(this.closed))) {
    var a = this.closed, b = a.Eb;
    x(b) && !x(b.c ? b.c(k) : b.call(m, k)) && e(Error([J("Assert failed: "), J("Validator rejected reference state"), J("\n"), J(hf.j(T([Jb(new K(m, "validate", "validate", 1233162959, m), new K(m, "new-value", "new-value", 972165309, m))], 0)))].join("")));
    b = a.state;
    a.state = k;
    ab(a, b, k);
    a = this.fa.length;
    for(b = 0;;) {
      if(b < a) {
        var c = this.fa[b], d;
        d = sf(c);
        d = x(d) ? tf(c) : d;
        x(d) && setTimeout(function(a, b, c) {
          return function() {
            return c.c ? c.c(m) : c.call(m, m)
          }
        }(b, c, d), 0);
        b += 1
      }else {
        break
      }
    }
  }
  return m
};
Ff.prototype.kb = function(a, b) {
  Gf(a);
  var c;
  c = this.J;
  c = x(c) ? 0 < Xb(this.J) : c;
  if(x(c)) {
    return c = sf(b), c = x(c) ? tf(b) : c, x(c) ? Ef(vf(this.J)) : m
  }
  var d;
  a: {
    for(c = 0;;) {
      if(c < this.ma.length) {
        d = this.ma[c];
        var f = V.e(d, 0, m);
        d = V.e(d, 1, m);
        var g;
        g = sf(b);
        g = x(g) ? sf(f) : g;
        f = x(g) ? ae([tf(b), tf(f), d]) : m;
        if(x(f)) {
          this.ma.splice(c, 1);
          d = f;
          break a
        }
        c += 1
      }else {
        d = m;
        break a
      }
    }
    d = h
  }
  c = V.e(d, 0, m);
  f = V.e(d, 1, m);
  d = V.e(d, 2, m);
  if(x(x(f) ? c : f)) {
    return setTimeout(f, 0), Ef(d)
  }
  if(x(La(this.closed))) {
    return c = sf(b), c = x(c) ? tf(b) : c, x(c) ? Ef(m) : m
  }
  this.fa.unshift(b);
  return m
};
Ff.prototype.lb = function(a, b, c) {
  b == m && e(Error([J("Assert failed: "), J("Can't put nil in on a channel"), J("\n"), J(hf.j(T([Jb(new K(m, "not", "not", -1640422260, m), Jb(new K(m, "nil?", "nil?", -1637150201, m), new K(m, "val", "val", -1640415014, m)))], 0)))].join("")));
  Gf(a);
  if(x(La(this.closed))) {
    return Ef(m)
  }
  a: {
    for(a = 0;;) {
      if(a < this.fa.length) {
        var d = this.fa[a], f;
        f = sf(d);
        f = x(f) ? sf(c) : f;
        if(x(f)) {
          this.fa.splice(a, 1);
          a = ae([tf(c), tf(d)]);
          break a
        }
        a += 1
      }else {
        a = m;
        break a
      }
    }
    a = h
  }
  var d = V.e(a, 0, m), g = V.e(a, 1, m);
  if(x(x(d) ? g : d)) {
    return setTimeout(function() {
      return g.c ? g.c(b) : g.call(m, b)
    }, 0), Ef(m)
  }
  a = this.J;
  a = x(a) ? oa(uf(this.J)) : a;
  if(x(a)) {
    return a = sf(c), c = x(a) ? tf(c) : a, x(c) ? (wf(this.J, b), Ef(m)) : m
  }
  this.ma.unshift(ae([c, b]));
  return m
};
function Gf(a) {
  for(var b = 0;;) {
    if(b < a.ma.length) {
      var c = a.ma[b], d = V.e(c, 0, m);
      V.e(c, 1, m);
      x(sf(d)) ? b += 1 : a.ma.splice(b, 1)
    }else {
      break
    }
  }
  for(b = 0;;) {
    if(b < a.fa.length) {
      x(sf(a.fa[b])) ? b += 1 : a.fa.splice(b, 1)
    }else {
      break
    }
  }
}
;var Hf, If = m;
function Jf() {
  return If.c(0)
}
function Kf(a) {
  for(;;) {
    var b = 0.5 > Math.random();
    if(b ? 15 > a : b) {
      a += 1
    }else {
      return a
    }
  }
}
If = function(a) {
  switch(arguments.length) {
    case 0:
      return Jf.call(this);
    case 1:
      return Kf.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
If.v = Jf;
If.c = Kf;
Hf = If;
function Lf(a, b, c) {
  this.key = a;
  this.B = b;
  this.forward = c;
  this.q = 0;
  this.h = 2155872256
}
Lf.prototype.w = function(a, b, c) {
  return Z(b, $, "[", " ", "]", c, a)
};
Lf.prototype.C = function() {
  return Jb.j(T([this.key, this.B], 0))
};
var Mf, Nf = m;
function Of(a) {
  return Nf.e(m, m, a)
}
function Pf(a, b, c) {
  for(var c = Array(c + 1), d = 0;;) {
    if(d < c.length) {
      c[d] = m, d += 1
    }else {
      break
    }
  }
  return new Lf(a, b, c)
}
Nf = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Of.call(this, a);
    case 3:
      return Pf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Nf.c = Of;
Nf.e = Pf;
Mf = Nf;
var Qf, Rf = m;
function Sf(a, b, c) {
  return Rf.m(a, b, c, m)
}
function Tf(a, b, c, d) {
  for(;;) {
    if(0 > c) {
      return a
    }
    a: {
      for(;;) {
        var f = a.forward[c];
        if(x(f)) {
          if(f.key < b) {
            a = f
          }else {
            break a
          }
        }else {
          break a
        }
      }
      a = h
    }
    d != m && (d[c] = a);
    c -= 1
  }
}
Rf = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return Sf.call(this, a, b, c);
    case 4:
      return Tf.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rf.e = Sf;
Rf.m = Tf;
Qf = Rf;
function Uf(a, b) {
  this.ia = a;
  this.R = b;
  this.q = 0;
  this.h = 2155872256
}
Uf.prototype.w = function(a, b, c) {
  return Z(b, function(a) {
    return Z(b, $, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Uf.prototype.C = function() {
  var a = function c(a) {
    return new ed(m, p, function() {
      return a == m ? m : U(ae([a.key, a.B]), c(a.forward[0]))
    }, m)
  };
  return a.c ? a.c(this.ia.forward[0]) : a.call(m, this.ia.forward[0])
};
Uf.prototype.put = function(a, b) {
  var c = Array(15), d = Qf.m(this.ia, a, this.R, c).forward[0], f = d != m;
  if(f ? d.key === a : f) {
    return d.B = b
  }
  d = Hf.v();
  if(d > this.R) {
    for(f = this.R + 1;;) {
      if(f <= d + 1) {
        c[f] = this.ia, f += 1
      }else {
        break
      }
    }
    this.R = d
  }
  for(d = Mf.e(a, b, Array(d));;) {
    return 0 <= this.R ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : m
  }
};
Uf.prototype.remove = function(a) {
  var b = Array(15), c = Qf.m(this.ia, a, this.R, b).forward[0], d = c != m;
  if(d ? c.key === a : d) {
    for(a = 0;;) {
      if(a <= this.R) {
        d = b[a].forward, d[a] === c && (d[a] = c.forward[a]), a += 1
      }else {
        break
      }
    }
    for(;;) {
      if((b = 0 < this.R) ? this.ia.forward[this.R] == m : b) {
        this.R -= 1
      }else {
        return m
      }
    }
  }else {
    return m
  }
};
var Vf = new Uf(Mf.c(0), 0);
function Wf(a) {
  var b = (new Date).valueOf() + a, c;
  a: {
    c = Vf.ia;
    for(var d = Vf.R;;) {
      if(0 > d) {
        c = c === Vf.ia ? m : c;
        break a
      }
      var f;
      b: {
        for(f = c;;) {
          f = f.forward[d];
          if(f == m) {
            f = m;
            break b
          }
          if(f.key >= b) {
            break b
          }
        }
        f = h
      }
      f != m ? (d -= 1, c = f) : d -= 1
    }
    c = h
  }
  c = x(x(c) ? c.key < b + 10 : c) ? c.B : m;
  if(x(c)) {
    return c
  }
  var g = new Ff([], [], m, kf.c(m));
  Vf.put(b, g);
  setTimeout(function() {
    Vf.remove(b);
    return rf(g)
  }, a);
  return g
}
;function Xf(a, b) {
  this.J = a;
  this.Cb = b;
  this.q = 0;
  this.h = 2
}
Xf.prototype.L = function() {
  return this.J.length
};
Xf.prototype.Wa = function() {
  return S.b(this.J.length, this.Cb)
};
Xf.prototype.ib = function() {
  return this.J.pop()
};
Xf.prototype.hb = function(a, b) {
  oa(a.Wa()) || e(Error([J("Assert failed: "), J("Can't add to a full buffer"), J("\n"), J(hf.j(T([Jb(new K(m, "not", "not", -1640422260, m), Jb(new K("impl", "full?", "impl/full?", -1337857039, m), new K(m, "this", "this", -1636972457, m)))], 0)))].join("")));
  return this.J.unshift(b)
};
var Yf, Zf = m;
function $f() {
  return Zf.c(m)
}
function ag(a) {
  return new Ff([], [], "number" === typeof a ? new Xf([], a) : a, kf.c(m))
}
Zf = function(a) {
  switch(arguments.length) {
    case 0:
      return $f.call(this);
    case 1:
      return ag.call(this, a)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zf.v = $f;
Zf.c = ag;
Yf = Zf;
for(var bg = document.getElementById("w").getContext("2d"), cg = bg.createImageData(640, 480), dg = cg.data, eg = 0;;) {
  if(307200 > eg) {
    var fg = 4 * eg;
    dg[fg + 0] = 255 * Math.random() | 0;
    dg[fg + 1] = 255 * Math.random() | 0;
    dg[fg + 2] = 255 * Math.random() | 0;
    dg[fg + 3] = 255;
    eg += 1
  }else {
    break
  }
}
bg.putImageData(cg, 0, 0);
var gg = Yf.c(1);
setTimeout(function() {
  function a(a) {
    for(;;) {
      var b = function() {
        var b = a[1] | 0;
        if(S.b(1, b)) {
          return b = a, b[2] = m, b[1] = 2, "\ufdd0:recur"
        }
        if(S.b(2, b)) {
          var c = Wf(10), b = a;
          return Af(b, c)
        }
        if(S.b(3, b)) {
          return c = a[2], b = a, Bf(b, c)
        }
        if(S.b(4, b)) {
          var b = a[2], d = document.getElementById("w").getContext("2d"), c = document.getElementById("w").getContext("2d"), d = d.getImageData(0, 0, 640, 480), g = d.data, n = new ArrayBuffer(g.length), w = new Uint8ClampedArray(n), n = new Uint32Array(n);
          w.set(g);
          for(var v = 0;;) {
            if(478 > v) {
              for(var A = 0;;) {
                if(638 > A) {
                  var z = A + 1, B = v + 1, D = z + 1, G = z - 1, Q = B + 1, L = B - 1, ga = n[640 * L + G], qa = n[640 * L + z], L = n[640 * L + D], db = n[640 * B + G], eb = n[640 * B + z], fb = n[640 * B + D], G = n[640 * Q + G], gb = n[640 * Q + z], D = n[640 * Q + D];
                  n[z + 640 * B] = -16777216 | -1 * (ga >> 16 & 255) + -1 * (qa >> 16 & 255) + -1 * (L >> 16 & 255) + -1 * (db >> 16 & 255) + 8 * (eb >> 16 & 255) + -1 * (fb >> 16 & 255) + -1 * (G >> 16 & 255) + -1 * (gb >> 16 & 255) + -1 * (D >> 16 & 255) << 16 | -1 * (ga >> 8 & 255) + -1 * (qa >> 8 & 255) + -1 * (L >> 8 & 255) + -1 * (db >> 8 & 255) + 8 * (eb >> 8 & 255) + -1 * (fb >> 8 & 255) + -1 * (G >> 8 & 255) + -1 * (gb >> 8 & 255) + -1 * (D >> 8 & 255) << 8 | -1 * (ga & 255) + -1 * (qa & 
                  255) + -1 * (L & 255) + -1 * (db & 255) + 8 * (eb & 255) + -1 * (fb & 255) + -1 * (G & 255) + -1 * (gb & 255) + -1 * (D & 255);
                  A += 1
                }else {
                  break
                }
              }
              v += 1
            }else {
              break
            }
          }
          g.set(w);
          c = c.putImageData(d, 0, 0);
          a[5] = b;
          a[6] = c;
          b = a;
          b[2] = m;
          b[1] = 2;
          return"\ufdd0:recur"
        }
        e(Error([J("No matching clause: "), J(a[1] | 0)].join("")))
      }();
      if("\ufdd0:recur" !== b) {
        return b
      }
    }
  }
  function b() {
    var a = Array(7);
    a[0] = c;
    a[1] = 1;
    return a
  }
  var c = m, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  c.v = b;
  c.c = a;
  var d = c.v();
  d[4] = gg;
  return d[0].call(m, d)
}, 0);
var hg = Yf.c(1);
setTimeout(function() {
  function a(a) {
    for(;;) {
      var b = function() {
        var b = a[1] | 0;
        if(S.b(1, b)) {
          return b = a, b[2] = m, b[1] = 2, "\ufdd0:recur"
        }
        if(S.b(2, b)) {
          var c = Wf(20), b = a;
          return Af(b, c)
        }
        if(S.b(3, b)) {
          return c = a[2], b = a, Bf(b, c)
        }
        if(S.b(4, b)) {
          var b = a[2], d = document.getElementById("w").getContext("2d"), c = document.getElementById("w").getContext("2d"), d = d.getImageData(0, 0, 640, 480), g = d.data, n = new ArrayBuffer(g.length), w = new Uint8ClampedArray(n), n = new Uint32Array(n);
          w.set(g);
          for(var v = 0;;) {
            if(478 > v) {
              for(var A = 0;;) {
                if(638 > A) {
                  var z = A + 1, B = v + 1, D = z + 1, G = z - 1, Q = B + 1, L = B - 1, ga = n[640 * L + G], qa = n[640 * L + z], L = n[640 * L + D], db = n[640 * B + G], eb = n[640 * B + z], fb = n[640 * B + D], G = n[640 * Q + G], gb = n[640 * Q + z], D = n[640 * Q + D];
                  n[z + 640 * B] = -16777216 | ((ga >> 16 & 255) + (qa >> 16 & 255) + (L >> 16 & 255) + (db >> 16 & 255) + (eb >> 16 & 255) + (fb >> 16 & 255) + (G >> 16 & 255) + (gb >> 16 & 255) + (D >> 16 & 255)) / 9 << 16 | ((ga >> 8 & 255) + (qa >> 8 & 255) + (L >> 8 & 255) + (db >> 8 & 255) + (eb >> 8 & 255) + (fb >> 8 & 255) + (G >> 8 & 255) + (gb >> 8 & 255) + (D >> 8 & 255)) / 9 << 8 | ((ga & 255) + (qa & 255) + (L & 255) + (db & 255) + (eb & 255) + (fb & 255) + (G & 255) + (gb & 255) + (D & 
                  255)) / 9;
                  A += 1
                }else {
                  break
                }
              }
              v += 1
            }else {
              break
            }
          }
          g.set(w);
          c = c.putImageData(d, 0, 0);
          a[5] = b;
          a[6] = c;
          b = a;
          b[2] = m;
          b[1] = 2;
          return"\ufdd0:recur"
        }
        e(Error([J("No matching clause: "), J(a[1] | 0)].join("")))
      }();
      if("\ufdd0:recur" !== b) {
        return b
      }
    }
  }
  function b() {
    var a = Array(7);
    a[0] = c;
    a[1] = 1;
    return a
  }
  var c = m, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  c.v = b;
  c.c = a;
  var d = c.v();
  d[4] = hg;
  return d[0].call(m, d)
}, 0);
