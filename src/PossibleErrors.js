module.exports = {
  rules: {
    'for-direction': [2], // 强制 for 循环中更新子句的计数器朝着正确的方向移动
    'getter-return': [2, { allowImplicit: false }], // 强制在 getter 属性中出现一个 return 语句，不允许隐式返回 undefined
    'no-async-promise-executor': [2], // 禁止使用异步函数作为 Promise executor 函数（也就是 new Promise() 的回调）
    'no-await-in-loop': [2], // 禁止在循环中 出现 await，因为这种情况应写为：立即创建所有 promise 然后使用 Promise.all()
    'no-compare-neg-zero': [2], // 禁止与 -0 进行比较
    'no-cond-assign': [2], // 禁止在条件语句中出现赋值操作符，括号包裹除外
    'no-console': [0], // 禁用 console，通常应该开发环境允许，生产环境不允许
    'no-constant-condition': [2], // 禁止在条件中使用常量表达式
    'no-control-regex': [2], // 禁止在正则表达式中使用控制字符，ASCII（0-31） 范围内的控制字符是特殊的、不可见的字符，不应使用。
    'no-debugger': [2], // 禁用 debugger，通常应该开发环境允许，生产环境不允许
    'no-dupe-args': [2], // 禁止在 function 定义中出现重复的参数
    'no-dupe-else-if': [2], // 禁止在 if-else-if 链中出现重复条件
    'no-dupe-keys': [2], // 禁止在对象字面量中出现重复的键
    'no-duplicate-case': [2], // 禁止重复 case 标签
    'no-empty': [2, { allowEmptyCatch: true }], // 禁止空块语句，但允许出现空的 catch 子句
    'no-empty-character-class': [2], // 禁止在正则表达式中出现空字符集，字符串形式无法检测：new RegExp('^abc[]')
    'no-ex-assign': [2], // 禁止对 catch 子句中的捕获的异常重新赋值
    'no-extra-boolean-cast': [2], // 禁止额外多余的布尔类型转换
    'no-extra-parens': [2, 'all', { // 禁止额外多余的括号，'all'(所有表达式) | 'functions'(函数表达式)，三参对象是 'all' 的列外情况
      conditionalAssign: false, // 是否禁止条件语句中赋值表达式中额外的圆括号，false 表示不禁止
      returnAssign: false, // 是否禁止在 return 语句中的赋值语句周围出现额外的圆括号，false 表示不禁止
      nestedBinaryExpressions: false, // 是否禁止在嵌套的二元表达式中出现额外的圆括号，false 表示不禁止
      ignoreJSX: 'none', // 忽略 JSX 中哪里出现的额外圆括号， 'none'(不忽略) | 'all'(所有) | 'multi-line'(多行) | 'single-line'(单行)，默认为 'none'
      enforceForArrowConditionals: false, // 是否禁止在箭头函数体中的三元表达式周围出现额外的圆括号，false 表示不禁止
    }],
    'no-extra-semi': [2], // 禁用额外多余的分号
    'no-func-assign': [2], // 禁止对 function 声明的变量重新赋值
    'no-import-assign': [2], // 禁止对导入的绑定变量赋值
    'no-inner-declarations': [2], // 禁止在嵌套的语句块中声明变量或 function
    'no-invalid-regexp': [2, { // 禁止在 RegExp 构造函数中出现无效的正则表达式字符串，parserOptions.ecmaVersion > 6 时可忽略第二参数
      allowConstructorFlags: ['u', 'y'], // 当顶层配置项 parserOptions.ecmaVersion < 6 时，手动指定允许的 ES6+ 新增的正则标志
    }],
    'no-irregular-whitespace': [2, { // 禁止不规则的空白（tab / space 以外的空白）
      skipStrings: false, // 是否忽略在字符串字面量中出现的任何空白字符，false 表示不忽略
      skipComments: false, // 是否忽略在注释中出现任何空白字符，false 表示不忽略
      skipRegExps: false, // 是否忽略允许在正则表达式中出现任何空白字符，false 表示不忽略
      skipTemplates: false, // 是否忽略在模板字面量中出现任何空白字符，false 表示不忽略
    }],
    'no-loss-of-precision': [2], // 不允许失去精度的字面量数字，Number.MAX_SAFE_INTEGER 为 9007199254740991
    'no-misleading-character-class': [2], // 不允许在字符类语法（character class syntax）中出现由多个 code points 组成的字符
    'no-obj-calls': [2], // 禁止将全局对象（Math、JSON 和 Reflect）当作函数进行调用
    'no-promise-executor-return': [2], // 不允许在 Promise executor 回调函数中返回值，必须调用 resolve / reject，然后才可以使用 return 阻止后续代码执行
    'no-prototype-builtins': [2], // 禁止在对象上直接调用属于 `Object.prototype` 的内置方法，foo.hasOwnProperty('bar') => Object.prototype.hasOwnProperty.call(foo, 'bar')
    'no-regex-spaces': [2], // 禁止正则表达式字面量中出现多个空格，比如：`/foo   bar/` 最好表示为 `/foo {3}bar/`
    'no-setter-return': [2], // 禁止从 setter 描述符中返回值
    'no-sparse-arrays': [2], // 禁用稀疏数组（sparse arrays），比如 [,,] | [ "red",, "blue" ] 等
    'no-template-curly-in-string': [2], // 禁止在常规字符串（单双引号字符串）中出现模板字面量占位符语法（${}），比如 'hello${foo}'
    'no-unexpected-multiline': [2], // 禁止使用令人困惑的多行表达式，比如上一行无分号结尾，下一行以 `[  (  +  *  /  -  ,  .` 开头
    'no-unreachable': [2], // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-unreachable-loop': [2], // 禁止出现主体只会进行一次循环的循环语句
    'no-unsafe-finally': [2], // 禁止在 finally 语句块中出现控制流语句（return、throw、break 和 continue）
    'no-unsafe-negation': [2], // 禁止对关系运算符的左操作数使用取反操作符（!），!key in object 应写为 !(key in object)
    'no-useless-backreference': [2], // 禁止在正则表达式中使用无用的反向引用，比如：/^(?:(a)|\1b)$/ （\1 非捕获组 ）; /\1(a)/ （\1 向前引用）;
    'require-atomic-updates': [2], // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值，详见 https://eslint.org/docs/rules/require-atomic-updates
    'use-isnan': [2], // 要求检查 NaN 时必须调用 isNaN()，而不是直接用 NaN 来做比较
    'valid-typeof': [2, { requireStringLiterals: true }], // 强制 typeof 表达式与有效的字符串进行比较，且必须是字面量字符串或是另一个 typeof 表达式，不允许是变量
  },
}
