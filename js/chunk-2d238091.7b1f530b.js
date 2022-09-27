(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238091"],{fe51:function(n,e,t){"use strict";t.r(e);var $=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._m(0),t("p",[t("vue-mathjax",{attrs:{formula:n.p1}})],1),n._m(1),t("p",[t("vue-mathjax",{attrs:{formula:n.p2}})],1),t("p",[t("vue-mathjax",{attrs:{formula:n.p3}})],1),n._m(2),t("p",[t("vue-mathjax",{attrs:{formula:n.p4}})],1)])},_=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[t("strong",[n._v("Construcción (u, u +v)")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[t("strong",[n._v("Prueba")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[t("strong")])}],a={name:"UvConstruction",data:function(){return{p1:"\n      Sea $C_i$ un código lineal q-ario $[n,k_i,d_i]$. Entonces el código $C$ dado por\n\n      $$\n      C = \\{ (\\textbf{u}, \\textbf{u+v}) | \\textbf{u} \\in C_1, \\textbf{v} \\in C_2 \\}\n      $$\n\n      es un código lineal q-ario $[2n, k_1 + k_2, min(2d_1, d_2)].$\n      ",p2:"\n\n      Tenemos que $C$ es un código lineal q-ario $[2n, k, d]$ para algún $k$\n      y $d$. Sea el mapeo $C_1 \\times C_2 \\to C$ dado por $(c_1, c_2) \\to\n      (c_1, c_1 + c_2)$. Esta definición es una biyección, entonces el tamaño\n      de $C$ es igual al tamaño de $C_1 \times C_2$ el cual es igual a\n       $q^{k_1}q^{k_2}=q^{k_1 + k_2}$. Por consiguiente, la dimensión de $C$\n        es $k_1 + k_2$. Considerar una palabra código distinta de cero\n        $(c_1, c_1 + c_2)$ de $C$. Si $c_2=0$ entonces $c_1 \\neq 0$ y\n      $$\n      wt((c_1, c_1 + c_2)) = wt((c_1, c_2)) = 2 wt(c_1) \\geq 2d_1\n      \\geq min(2d_1, d_2)\n      $$\n      En otro caso, si $c_2 \\neq 0$, entonces\n      $$\n      wt((c_1, c_1 + c_2)) = wt(c_1) + wt(c_1 + c_2) \\geq wr(c_1) + (wt(c_2) -\n       wt(c_1)) \\geq wt(c_2) \\geq min(2d_1, d_2)\n      $$\n      Por tanto, $d \\geq min(2d_1, d_2)$.\n      ",p3:"\n      Si $x \\in C_1$ tiene $wt d_1$ y $y \\in C_2$ tiene $wt d_2$, entonces $(x,x)\n       \\in C$ tiene $2d_1$ y $(0, y) \\in C$ tiene  $wt d_2$ así que $d \\leq\n       min(2d_1, d_2)$. Por tanto, $d = min(2d_1, d_2)$.\n      ",p4:"\n\n      ",p5:"\n\n      "}}},c=a,i=t("2877"),o=Object(i["a"])(c,$,_,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d238091.7b1f530b.js.map