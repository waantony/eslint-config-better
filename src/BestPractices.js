module.exports = {
  rules: {
    'accessor-pairs': [2, { // 强制 getter/setter 成对出现在 object 和 class 中
      setWithoutGet: true, // 是否在只定义 setter 而未定义 getter 时报错，默认 true
      getWithoutSet: false, // 是否在只定义 getter 而未定义 setter 时报错，默认 false
    }],
    'array-callback-return': [2, { // 强制数组方法（from/every/filter/find/findIndex/map/reduce/reduceRight/some/sort）的回调中有 return 语句
      allowImplicit: false, // 是否允许使用 return; 语句隐式地返回 undefined
    }],
    'block-scoped-var': [2], // 强制变量只能在他们定义的作用域内使用
    'class-methods-use-this': [2, { // 强制 class 的实例方法使用 this，否则应写为 class 的静态（static）方法
      exceptMethods: [], // 自定义哪些方法不受此规则限制，默认为空，即所有方法都会检查
    }],
    'complexity': [2, { max: 20 }], // 配置在程序中允许的最大圈复杂度，默认 20 ，比如 if-else-if 语句超过 20 种情况报错
    'consistent-return': [2, { // 要求使用一致的 return 语句，要么全都返回值，要么全都不返回指定值
      treatUndefinedAsUnspecified: false, // 是否当即使是显式返回的 undefined 也当作未指定值的情况，这就要求其他 return 语句也只能隐式或显式返回 undefined
    }],
    'curly': [2, 'all'], // 强制使用大括号，即使是只有一条语句时
    'default-case': [2, { // 强制 switch 语句中必须有 default case，除非使用指定注释来表明不需要 default
      commentPattern: '^no default', // 正则字符串，匹配不需要 default 语句的注释，默认为 `// no default`
    }],
    // 'default-case-last': [2], // 强制 switch 中的 default 语句如果存在则只能放在最后
    'default-param-last': [2], // 强制默认参数必须放在最后
    'dot-location': [2, 'property'], // 强制当使用点号且需要换行时，在点号之前或之后换行，'object' (默认，点和对象一行) | 'property' (点和属性一行)
    'dot-notation': [2, { // 强制访问对象属性时，尽可能使用点号而不是方括号
      allowKeywords: true, // 是否允许关键字属性使用点号访问，比如 obj.class
      allowPattern: '', // 设置要允许方括号访问的属性的正则表达式字符串，默认无，比如 '^[a-z]+(_[a-z]+)+$'
    }],
    'eqeqeq': [2, 'always', { // 要求使用 === 和 !== ， 而不是 == 和 !=
      null: 'always', // 设置 null 字面量使用严格相等的情况，'always'(必须) | 'never'(禁止) | 'ignore'(对 null 忽略此规则)
    }],

    /**
     * 要求访问器属性 getter/setter 都存在时，必须紧邻。
     * 'getBeforeSet' 强制紧邻且 getter 在 setter 之前
     * 'setBeforeGet' 强制紧邻且 setter 在 getter 之前
     * 'anyOrder' 前后顺序无所谓，紧邻即可
     */
    'grouped-accessor-pairs': [2, 'getBeforeSet'],
    'guard-for-in': [2], // 要求 for-in 循环中必须包含 if 语句，避开原型链继承的可枚举属性，比如：if (Object.prototype.hasOwnProperty.call(obj, key)) {}
    'max-classes-per-file': [2, 1], // 限制每个文件中的 class 最大数量，默认为 1
    'no-alert': [2], // 禁止使用 `alert`, `confirm`, `prompt`
    'no-caller': [2], // 禁用 `arguments.caller` 或 `arguments.callee`，因为 ES5 严格模式已禁用，新规范已弃用
    'no-case-declarations': [2], // 禁止在 case 或 default 子句中出现词法声明，除非用 {} 将语句包裹，如： case x: { }
    'no-constructor-return': [2], // 禁止构造函数 constructor 中 return 任何值，单独 return; 语句除外
    'no-div-regex': [2], // 禁止在正则表达式开头显式地使用看起来像除法的运算符，比如： /=foo/ 写为 /[=]foo/
    'no-else-return': [2, { // 禁止 if 语句中，在 else 前出现 return，如果 if 中出现 return ，则 else 多余，应将其内容移至块外
      allowElseIf: false, // 是否允许在 return 之后有 else if 块
    }],
    'no-empty-function': [2, { // 禁止出现空函数，二参对象的 allow 数组指定允许的空函数列表，默认为 []
      allow: ['arrowFunctions'], // 'functions', 'arrowFunctions', 'generatorFunctions', 'methods', 'generatorMethods', 'getters', 'setters', 'constructors'
    }],
    'no-empty-pattern': [2], // 禁止使用空解构模式，如 const {} = foo; const {a: []} = foo; function foo({}) {}
    'no-eq-null': [2], // 禁止与 null 比较时使用 ==，应该使用 ===
    'no-eval': [2], // 禁用 eval()
    'no-extend-native': [2, { // 禁止扩展原生类型
      exceptions: [], // 指定对哪些原生类型免除此规则检查，默认为 []，比如：['Object', 'Function']
    }],
    'no-extra-bind': [2], // 禁止不必要的 .bind() 绑定，比如程序中未引用或是在内层函数引用 this，或是箭头函数使用，箭头函数无法绑定 this
    'no-extra-label': [2], // 禁用不必要的 label，如果循环中不包含嵌套循环或 switch 语句，则 label 就是不必要的
    'no-fallthrough': [2, { // 禁止 case 语句落空(case 语句没有以 throw | return | break 结束的情况)
      commentPattern: 'falls? through', // 正则字符串，表示通过写什么注释来显式标注某个 case 为故意落空，比如 `// falls through`
    }],
    'no-floating-decimal': [2], // 禁止字面量数字前/后的小数点，比如 .5, 2. -.7 应写为 0.5, 2.0, -0.7
    'no-global-assign': [2, { // 禁止直接对原生对象或只读的全局对象进行赋值
      exceptions: [], // 设置哪些对象可以被赋值，比如 ['Object']，默认为 []
    }],
    'no-implicit-coercion': [0, { // 禁止简写的类型转换，比如 !!foo; ~foo.indexOf('.'); +foo; foo += '';
      boolean: false, // 是否禁止简写 boolean 转换，默认为 true
      number: false, // 是否禁止简写 number 转换，默认为 true
      string: false, // 是否禁止简写 string 转换，默认为 true
      allow: ['~', '!!', '+', '*'], // 允许的简写类型转换，默认为 []
    }],
    'no-implicit-globals': [2], // 禁止全局作用域声明，即顶层 var/function，根选项 parserOptions.sourceType === 'module' 时，该规则会被忽略
    'no-implied-eval': [2], // 禁用隐式的 eval()，比如 setTimeout() / setInterval() 的第一个参数接收字符串为参数的情况，应始终传入函数作为第一个参数
    'no-invalid-this': [2], // 禁止在 class 和 class-like 对象以外访问 this，详见 https://eslint.org/docs/rules/no-invalid-this
    'no-iterator': [2], // 禁用 `__iterator__`，已废弃
    'no-labels': [2, { // 禁用 label 语句
      allowLoop: false, // 是否允许循环中使用，默认为 false
      allowSwitch: false, // 是否允许 switch 中使用，默认为 false
    }],
    'no-lone-blocks': [2], // 禁用不必要的独自出现的嵌套块(nested blocks, {})
    'no-loop-func': [2], // 禁止在循环语句中包含不安全引用的函数声明
    'no-magic-numbers': [0, { // 禁止使用魔术数字（直接使用的字面量数字，而不是先用变量声明的数字）
      ignore: [], // 一个数字数组，指定检测中可以忽略的数字，默认为 []
      ignoreArrayIndexes: true, // 是否忽略数字用作数组索引的检查，默认 false
      enforceConst: true, // 是否在数字变量的声明中要求 const 关键字，默认 false
      detectObjects: false, // 是否检测对象属性值为数字的情况，默认 false
    }],
    'no-multi-spaces': [2, { // 禁止多余空格
      ignoreEOLComments: false, // 是否忽略行尾注释前的多个空格
      exceptions: {}, // 忽略的节点，属性名是 AST 节点类型，默认不忽略任何节点
    }],
    'no-multi-str': [2], // 禁止多行字符串（以 `\` 结尾进行换行的单双引号字符串）
    'no-new': [2], // 禁止使用 new 创建实例后未被引用直接丢弃
    'no-new-func': [2], // 禁用 Function 构造函数，比如 new Function('a', 'b', 'return a + b');
    'no-new-wrappers': [2], // 禁止直接生成原始包装实例，比如： new String('hi'), new Number(1); new Boolean(true); 没必要
    'no-octal': [2], // 禁用八进制字面量，ECMAScript 5 已经弃用了八进制字面量，比如 const num = 071; 写为 const num = '071';
    'no-octal-escape': [2], // 禁止在字符串字面量中使用八进制转义序列，ES5 已弃用，应使用 Unicode 转义序列，'Copyright \251' 写为 'Copyright \u00A9'
    'no-param-reassign': [0, { // 禁止对函数参数再赋值
      props: false, // 是否禁用函数参数的属性修改
      ignorePropertyModificationsFor: [], // 设置参数属性修改将会被忽略的参数名数组，比如 ['bar']，则可修改 bar.foo = 'value'
    }],
    'no-proto': [2], // 禁用 __proto__，ES3.1 已弃用，应使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替
    'no-redeclare': [2, { // 禁止重复声明同名变量
      builtinGlobals: true, // 是否检查声明的变量是否重新声明了全局内建对象，如 var Object = 0;
    }],
    'no-restricted-properties': [2, { // 自定义禁止在哪些对象上禁用哪些属性，从第二个参数开始指定对象形式的配置，多个配置依次往后排列对象即可
      object: 'objName', // 指定要限制的对象名，如省略此属性，将禁止访问所有对象下的 propName
      property: 'propName', // 指定要限制指定对象名下的哪个属性禁止访问，若省略此属性，将禁止访问 objName 的所有属性
      message: 'objName.propName is restricted', // 设置一段解释的文字，原因或是应该怎么用
    }],
    'no-return-assign': [2, 'except-parens'], // 禁止在返回语句中赋值，'always'(完全禁止) | 'except-parens'(允许在括号包裹的情况下返回赋值语句)
    'no-return-await': [2], // 禁用不必要的 return await 语句，比如：async function foo() { return await bar(); } 内可以直接 return bar();
    'no-script-url': [2], // 禁用 Script URL，在链接中使用 `javascript:` 相当于 eval()。 比如 location.href = 'javascript:void(0)';
    'no-self-assign': [2, { // 禁止将自己赋值给自己
      props: true, // 是否禁止对象属性赋值给同一个对象属性
    }],
    'no-self-compare': [2], // 禁止将自己与自己比较
    'no-sequences': [2], // 禁用逗号操作符，除非是：显式括号包裹，初始化或更新部分 for 语句时
    'no-throw-literal': [2], // 禁止抛出字面量的异常，throw 'error' 应写为 throw new Error('error')，非字面量无法检测：const a = '1'; throw a;
    'no-unmodified-loop-condition': [2], // 禁止未被修改的循环条件
    'no-unused-expressions': [2, { // 禁止出现未使用过的表达式
      allowShortCircuit: true, // 是否允许在逻辑短路出现，比如 a && a()，默认 false
      allowTernary: true, // 是否允许在三元运算符中出现，比如 a ? a() : b()，默认 false
      allowTaggedTemplates: false, // 是否允许在表达式中使用带标签的模板字面量，比如 tag`some tagged template string`; 默认 false
    }],
    'no-unused-labels': [2], // 禁用出现未使用过的 label
    'no-useless-call': [2], // 禁用不必要的 .call() 和 .apply()，只能静态检测代码 thisArg 是否改变，thisArg 若为动态表达式无法被检测
    'no-useless-catch': [2], // 禁止不必要的 catch 子句，只是重新抛出原始错误的 catch 子句
    'no-useless-concat': [2], // 禁止没有必要的字符串拼接，比如两个字面量字符串拼接，应直接写为一个字符串
    'no-useless-escape': [2], // 禁用不必要的转义，比如 'hol\a'; '`${foo}\!`'; /\:/
    'no-useless-return': [2], // 禁止不必要的 return 语句
    'no-void': [2], // 禁止使用 void 操作符
    'no-warning-comments': [2, { // 自定义在注释中禁止使用哪些词
      terms: ['todo'], // 默认 ['todo', 'fixme', 'xxx']，大小写不敏感但匹配整个词：fix 匹配 FIX 但不匹配 fixing。
      location: 'start', // 在注释中检测匹配的位置， 默认 'start' 只匹配最开始，'anywhere' 匹配注释的任何位置
    }],
    'no-with': [2], // 禁用 with 语句s
    'prefer-named-capture-group': [2], // 强制优先在正则表达式中使用命名捕获组，比如 /(ba[rz])/; 应写为 /(?<id>ba[rz])/;
    'prefer-promise-reject-errors': [2, { // 要求使用 Error 对象作为 Promise 的 reject() 参数
      allowEmptyReject: false, // 是否允许不带参数的 reject()
    }],

    /**
     * 禁用正则构造函数 + 字符串字面量创建正则，比如 new RegExp('foo', 'u'); 用正则字面量代替
     * 正则构造函数 + 变量创建正则不会被警告，比如 new RegExp(foo, 'u')
     */
    'prefer-regex-literals': [2],
    'radix': [2, 'as-needed'], // 要求使用 parseInt() 时必须有基数，'as-needed'(仅必须时, 非 10 时) | 'always'(强制基数)
    'require-await': [2], // 禁止使用不带 await 表达式的 async 函数
    'require-unicode-regexp': [2], // 强制在 RegExp 上使用 u 标志，以正确处理 UTF-16 Surrogate Pair， 同时尽早抛出语法错误
    'vars-on-top': [2], // 要求将 var 声明语句放在作用域的顶部
    'wrap-iife': [ // 强制要求将 IIFE 用括号包裹，以及设置括号的位置，比如 const x = function () { return 1 }() 无括号包裹会报错
      2,
      'any', // 'outside' (默认，`const x = (function () { return 1 }())`) | 'inside' (`const x = (function () { return 1 })()`) | 'any' (只要包裹，前两者均可)
      {
        functionPrototypeMethods: true, // 使用 .call 和 .apply 调用时，强制要求用括号包裹函数。默认为 false。
      },
    ],
    /**
     * 要求(always)或者禁止(never) Yoda 条件语句
     * Yoda 条件：在条件判断中，字面量在前，变量在后
     * Yoda：if ('red' === color)
     * 非Yoda：if (color === 'red')，更符合阅读习惯
     * 早期为避免 ==/=== 被错写为 = 而出现，因为赋值给一个字面量会报错，如今插件已能提醒该错误，已不需要
     */
    'yoda': [2, 'never'],
  },
}
