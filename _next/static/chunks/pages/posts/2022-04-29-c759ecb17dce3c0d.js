(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{7184:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/2022-04-29",function(){return n(4114)}])},4114:function(s,e,n){"use strict";n.r(e);var l=n(5893);e.default=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=function(){var e=Object.assign({p:"p",a:"a",pre:"pre",code:"code",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:[(0,l.jsx)("h2",{className:"heading02",children:"2022/04/29 Parser \u3092\u4f5c\u3063\u3066\u307f\u305f"}),"\n",(0,l.jsx)("h3",{children:"Python \u306b\u3088\u308b JSON Parser \u306e\u5b9f\u88c5"}),"\n\u203b\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u5168\u4f53\u306f",(0,l.jsx)(e.a,{href:"https://github.com/kyonES/parser-test",children:"github"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["Pytnon\u3067JSON\u3092\u30d1\u30fc\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002space\u3001string\u3001array\u3001null\u3001boolean\u3001object\u306e\u30d1\u30fc\u30b9\u3092\u5b9f\u88c5\u3057\u305f\u306e\u3067\u3001\u4ee5\u4e0b\u306b\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u4e00\u90e8\u3068\u3068\u3082\u306b\u5b9f\u88c5\u306e\u969b\u8003\u3048\u305f\u3053\u3068\u306a\u3069\u3092\u66f8\u3044\u3066\u3044\u304d\u307e\u3059\u3002\n",(0,l.jsx)("u",{children:(0,l.jsx)("h4",{children:"\u6e96\u5099"})})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsxs)(e.code,{className:"hljs language-py",children:[(0,l.jsxs)(e.span,{className:"hljs-function",children:[(0,l.jsx)(e.span,{className:"hljs-keyword",children:"def"})," ",(0,l.jsx)(e.span,{className:"hljs-title",children:"is_digit"}),"(",(0,l.jsx)(e.span,{className:"hljs-params",children:"c"}),"):"]}),"\n    ",(0,l.jsx)(e.span,{className:"hljs-comment",children:"# \u6587\u5b57\u5217\u306e\u5927\u5c0f\u6bd4\u8f03"}),"\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"0"'})," <= c ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"and"})," c <= ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"9"'}),"\n"]})}),"\n",(0,l.jsx)(e.p,{children:"\u5927\u5c0f\u6bd4\u8f03\u306e\u8868\u73fe\u3092\u7528\u3044\u3066JSON\u304c\u6570\u5b57\u3067\u3042\u308b\u304b\u3092\u8abf\u3079\u307e\u3059\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsxs)(e.code,{className:"hljs language-py",children:[(0,l.jsxs)(e.span,{className:"hljs-class",children:[(0,l.jsx)(e.span,{className:"hljs-keyword",children:"class"})," ",(0,l.jsx)(e.span,{className:"hljs-title",children:"Parser"}),":"]}),"\n    ",(0,l.jsxs)(e.span,{className:"hljs-function",children:[(0,l.jsx)(e.span,{className:"hljs-keyword",children:"def"})," ",(0,l.jsx)(e.span,{className:"hljs-title",children:"__init__"}),"(",(0,l.jsx)(e.span,{className:"hljs-params",children:"self, s"}),") -> ",(0,l.jsx)(e.span,{className:"hljs-literal",children:"None"}),":"]}),"\n        self.s = s\n        self.pos = ",(0,l.jsx)(e.span,{className:"hljs-number",children:"0"}),"\n"]})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"self.s"})," \u306f\u8aad\u307f\u8fbc\u3080\u6587\u5b57\u5217\u3001",(0,l.jsx)(e.code,{children:"self.pos"})," \u306f\u73fe\u5728\u306e\u4f4d\u7f6e\u3092\u793a\u3057\u307e\u3059\u3002\u3053\u308c\u3092\u7528\u3044\u3066\u5f8c\u306b\u884c\u3046\u30d1\u30fc\u30b9\u3067\u6587\u5b57\u3092\u4e00\u3064\u9032\u3081\u308b\u51e6\u7406\u3092\u884c\u3044\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsxs)(e.code,{className:"hljs language-py",children:[(0,l.jsxs)(e.span,{className:"hljs-function",children:[(0,l.jsx)(e.span,{className:"hljs-keyword",children:"def"})," ",(0,l.jsx)(e.span,{className:"hljs-title",children:"peek"}),"(",(0,l.jsx)(e.span,{className:"hljs-params",children:"self"}),"):"]}),"\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," self.pos < ",(0,l.jsx)(e.span,{className:"hljs-built_in",children:"len"}),"(self.s):\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," self.s[self.pos]\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"else"}),":\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"raise"})," ParseError()\n"]})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"self.pos"})," \u304c\u8aad\u307f\u8fbc\u3080\u6587\u5b57\u5217\u306e\u9577\u3055\u3088\u308a\u5c0f\u3055\u3044\u3068\u304d\u3001\u8aad\u307f\u8fbc\u3080\u6587\u5b57\u5217\u306e",(0,l.jsx)(e.code,{children:"self.pos"})," \u756a\u76ee(=\u73fe\u5728\u306e\u4f4d\u7f6e)\u3092\u8fd4\u3059\u95a2\u6570\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsx)("u",{children:(0,l.jsx)("h4",{children:"1. space\u306e\u30d1\u30fc\u30b9"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsxs)(e.code,{className:"hljs language-py",children:[(0,l.jsxs)(e.span,{className:"hljs-function",children:[(0,l.jsx)(e.span,{className:"hljs-keyword",children:"def"})," ",(0,l.jsx)(e.span,{className:"hljs-title",children:"spaces"}),"(",(0,l.jsx)(e.span,{className:"hljs-params",children:"self"}),"):"]}),"\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"while"})," ",(0,l.jsx)(e.span,{className:"hljs-literal",children:"True"}),":\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"try"}),":\n        c = self.peek()\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"except"})," ParseError:\n        ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"break"}),"\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'" "'})," ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"or"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\n"'})," ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"or"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\t"'})," ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"or"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\r"'}),":\n        self.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"else"}),":\n        ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"break"}),"\n"]})}),"\n",(0,l.jsx)(e.p,{children:"space\u3092\u7121\u8996\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)("u",{children:(0,l.jsx)("h4",{children:"2. string\u306e\u30d1\u30fc\u30b9"})}),"\n",(0,l.jsx)(e.code,{children:"string"}),"\u3092\u30d1\u30fc\u30b9\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u6587\u5b57\u3067\u3042\u308b",(0,l.jsx)(e.code,{children:"char"}),"\u306e\u30d1\u30fc\u30b9\u3092\u884c\u3044\u3001",(0,l.jsx)(e.code,{children:"string"})," \u95a2\u6570\u306e\u4e2d\u3067",(0,l.jsx)(e.code,{children:"char"})," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsxs)(e.code,{className:"hljs language-py",children:[(0,l.jsxs)(e.span,{className:"hljs-function",children:[(0,l.jsx)(e.span,{className:"hljs-keyword",children:"def"})," ",(0,l.jsx)(e.span,{className:"hljs-title",children:"char"}),"(",(0,l.jsx)(e.span,{className:"hljs-params",children:"self"}),"):"]}),"\nc = self.peek()\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\""'}),":\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"raise"})," ParseError()\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\\\"'}),":\n    self.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n    c = self.peek()\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"n"'}),":\n        self.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n        ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\n"'}),"\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"r"'}),":\n        self.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n        ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\r"'}),"\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"t"'}),":\n        self.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n        ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\t"'}),"\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\\\"'}),":\n        self.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n        ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\\\"'}),"\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\""'}),":\n        self.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n        ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\""'}),"\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"raise"})," ParseError()\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"else"}),":\n    self.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," c\n"]})}),"\n",(0,l.jsxs)(e.p,{children:["\u3053\u3053\u3067\u306f\u6587\u5b57\u5217\u304c",(0,l.jsx)(e.code,{children:'"'})," \u306e\u3068\u304d\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u3001",(0,l.jsx)(e.code,{children:"\\n\u3001\\r\u3001\\t\u3001\\\\\\\u3001\\"})," \u304c\u51fa\u3066\u304d\u305f\u5834\u5408\u306f\u305d\u308c\u305e\u308c\u4e2d\u8eab\u3092\u5909\u3048\u305a\u306b\u8fd4\u3057\u3001\u305d\u306e\u4ed6\u306e\u30a8\u30b9\u30b1\u30fc\u30d7\u30b7\u30fc\u30b1\u30f3\u30b9\n\u304c\u51fa\u3066\u304d\u305f\u5834\u5408\u306b\u3082\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsxs)(e.code,{className:"hljs language-py",children:[(0,l.jsxs)(e.span,{className:"hljs-function",children:[(0,l.jsx)(e.span,{className:"hljs-keyword",children:"def"})," ",(0,l.jsx)(e.span,{className:"hljs-title",children:"string"}),"(",(0,l.jsx)(e.span,{className:"hljs-params",children:"self"}),"):"]}),"\nres = ",(0,l.jsx)(e.span,{className:"hljs-string",children:'""'}),"\nc = self.peek()\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"not"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\""'}),":\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"raise"})," ParseError()\nself.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"while"})," ",(0,l.jsx)(e.span,{className:"hljs-literal",children:"True"}),":\n    c = self.peek()\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\""'}),":\n        self.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n        ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," res\n    x = self.char()\n    res += x \n"]})}),"\n",(0,l.jsxs)(e.p,{children:["\u307e\u305a ",(0,l.jsx)(e.code,{children:"self.peek"})," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3066\u6587\u5b57\u5217\u306e\u5148\u982d\u306e\u6587\u5b57\u3092\u53d6\u5f97\u3057\u3001",(0,l.jsx)(e.code,{children:'"'})," \u304b\u3089\u59cb\u307e\u3063\u3066\u3044\u306a\u3051\u308c\u3070\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002",(0,l.jsx)(e.code,{children:'"'})," \u304b\u3089\u59cb\u307e\u3063\u3066\u3044\u308c\u3070JSON\u306e\u6587\u5b57\u5217\u3067\u3042\u308b\u3053\u3068\u304b\u3089\u3001",(0,l.jsx)(e.code,{children:"self.pos"})," \u30921\u9032\u3081\u3066\u30d1\u30fc\u30b9\u3092\u7d9a\u3051\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001",(0,l.jsx)(e.code,{children:"char"}),' \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3001\u6587\u5b57\u5217\u306e\u672b\u5c3e\u304c"\u306b\u306a\u308b\u307e\u3067\u30d1\u30fc\u30b9\u3057\u307e\u3059\u3002\u6587\u5b57\u5217\u306e\u4e2d\u3067\u30d1\u30fc\u30b9\u3092\u7d42\u3048\u305f\u90e8\u5206\u306e\u6587\u5b57\u3092',(0,l.jsx)(e.code,{children:"res"})," \u306b\u8ffd\u52a0\u3057\u3066\u3044\u304d\u3001\u6700\u5f8c\u306b",(0,l.jsx)(e.code,{children:"res"})," \u3092\u8fd4\u3057\u307e\u3059\u3002\u3053\u308c\u3067\u6587\u5b57\u5217\u306e\u30d1\u30fc\u30b9\u304c\u5b8c\u4e86\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)("u",{children:(0,l.jsx)("h4",{children:"3. array\u306e\u30d1\u30fc\u30b9"})}),"\n",(0,l.jsx)(e.code,{children:"array"})," \u3092\u30d1\u30fc\u30b9\u3059\u308b\u305f\u3081\u306b\u306f\u3001",(0,l.jsx)(e.code,{children:","})," \u3067\u533a\u5207\u3089\u308c\u305f\u914d\u5217\u306e\u8981\u7d20\u3092\u5148\u982d\u304b\u3089\u9806\u306b\u8abf\u3079\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsxs)(e.code,{className:"hljs language-py",children:[(0,l.jsxs)(e.span,{className:"hljs-function",children:[(0,l.jsx)(e.span,{className:"hljs-keyword",children:"def"})," ",(0,l.jsx)(e.span,{className:"hljs-title",children:"array"}),"(",(0,l.jsx)(e.span,{className:"hljs-params",children:"self"}),"):"]}),"\nres = []\nc = self.peek()\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c != ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"["'}),":\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"raise"})," ParseError()\nself.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\nself.spaces()\nc = self.peek()\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"]"'}),":\n    self.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," res\nx = self.json()\nres.append(x)\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"while"})," ",(0,l.jsx)(e.span,{className:"hljs-literal",children:"True"}),":\n    self.spaces()\n    c = self.peek()\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"]"'}),":\n        self.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n        ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," res\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c != ",(0,l.jsx)(e.span,{className:"hljs-string",children:'","'}),":\n        ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"raise"})," ParseError()\n    self.pos += ",(0,l.jsx)(e.span,{className:"hljs-number",children:"1"}),"\n    self.spaces()\n    x = self.json()\n    res.append(x)\n"]})}),"\n",(0,l.jsxs)(e.p,{children:["\u307e\u305a ",(0,l.jsx)(e.code,{children:"self.peek"})," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3066\u6587\u5b57\u5217\u306e\u5148\u982d\u306e\u6587\u5b57\u3092\u53d6\u5f97\u3057\u3001",(0,l.jsx)(e.code,{children:"["})," \u304b\u3089\u59cb\u307e\u3063\u3066\u3044\u306a\u3051\u308c\u3070\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002",(0,l.jsx)(e.code,{children:"self.pos"})," \u3092\u4e00\u3064\u9032\u3081\u3001",(0,l.jsx)(e.code,{children:"spaces"})," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3001\u914d\u5217\u306e\u4e2d\u306b\u542b\u307e\u308c\u308b\u30b9\u30da\u30fc\u30b9\u3092\u7121\u8996\u3057\u307e\u3059\u3002\u6b21\u306b\u3001\u3082\u3046\u4e00\u5ea6",(0,l.jsx)(e.code,{children:"self.peek"})," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3001\u914d\u5217\u306e\u672b\u5c3e\u304c",(0,l.jsx)(e.code,{children:"]"})," \u306b\u306a\u3063\u3066\u3044\u308c\u3070",(0,l.jsx)(e.code,{children:"res"})," \u3092\u8fd4\u3057\u3066\u7d42\u4e86\u3057\u307e\u3059\u3002\u672b\u5c3e\u304c",(0,l.jsx)(e.code,{children:"]"})," \u3067\u306a\u3051\u308c\u3070",(0,l.jsx)(e.code,{children:"json"})," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3001",(0,l.jsx)(e.code,{children:"res"})," \u306b",(0,l.jsx)(e.code,{children:"x"})," \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u6b21\u306b\u3001\u518d\u3073\u30b9\u30da\u30fc\u30b9\u3092\u7121\u8996\u3057\u3001\u914d\u5217\u306e\u5148\u982d\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002",(0,l.jsx)(e.code,{children:"while"})," \u306e\u4e2d\u3067\u306f\u3001\u914d\u5217\u306e\u672b\u5c3e\u304c",(0,l.jsx)(e.code,{children:"]"})," \u306b\u306a\u308b\u307e\u3067\u30d1\u30fc\u30b9\u3092\u7d9a\u3051\u307e\u3059\u3002\u914d\u5217\u306e\u5148\u982d",(0,l.jsx)(e.code,{children:"["})," \u3092\u9664\u3044\u305f\u5148\u982d\u306e\u6587\u5b57\u306e\u6b21\u306e\u6587\u5b57\u304c",(0,l.jsx)(e.code,{children:","})," \u3067\u306a\u3051\u308c\u3070 \u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u3001",(0,l.jsx)(e.code,{children:"]"})," \u304c\u518d\u3073\u73fe\u308c\u308b\u307e\u3067\u30d1\u30fc\u30b9\u3092\u7d9a\u3051\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsxs)(e.code,{className:"hljs language-py",children:[(0,l.jsxs)(e.span,{className:"hljs-function",children:[(0,l.jsx)(e.span,{className:"hljs-keyword",children:"def"})," ",(0,l.jsx)(e.span,{className:"hljs-title",children:"json"}),"(",(0,l.jsx)(e.span,{className:"hljs-params",children:"self"}),"):"]}),"\nc = self.peek()\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"["'}),":\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," self.array()\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"t"'})," ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"or"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"f"'}),":\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," self.boolean()\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"n"'}),":\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," self.null()\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"\\""'}),":\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," self.string()\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"if"})," c == ",(0,l.jsx)(e.span,{className:"hljs-string",children:'"{"'}),":\n    ",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," self.",(0,l.jsx)(e.span,{className:"hljs-built_in",children:"object"}),"()\n",(0,l.jsx)(e.span,{className:"hljs-keyword",children:"return"})," self.parse_natural()\n"]})}),"\n",(0,l.jsxs)(e.p,{children:["\u2191",(0,l.jsx)(e.code,{children:"json"}),"\u95a2\u6570"]})]})},n=s.components||{},a=n.wrapper;return a?(0,l.jsx)(a,Object.assign({},s,{children:(0,l.jsx)(e,{})})):e()}}},function(s){s.O(0,[774,888,179],(function(){return e=7184,s(s.s=e);var e}));var e=s.O();_N_E=e}]);