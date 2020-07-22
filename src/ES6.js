module.exports = {
  rules: {
    'arrow-body-style': [2, 'as-needed'], // 箭头函数体大括号，禁止出现非必须的大括号
    'arrow-parens': [2, 'as-needed'], // 箭头函数参数圆括号，禁止出现非必须的圆括号
    'arrow-spacing': [2, { before: true, after: true }], // 箭头函数的箭头前后必须留空格
    'constructor-super': [2], // 继承类（subclass）必须在 constructor 中调用 super()，非继承类禁止调用 super()
    'generator-star-spacing': [2, { before: true, after: false }], // 规定 generator 函数的星号前后是否空格，规范没有规定，采取eslint默认值：前空后不空
    'no-class-assign': [2], // 禁止重新赋值给 class 变量
    'no-confusing-arrow': [2, { allowParens: true }], // 禁止在可能与比较操作符相混淆的地方使用箭头函数，除非用括号包括包裹 const fn = a => (a > 1 ? 2 : 3)
    'no-const-assign': [2], // 禁止重新赋值给 const 声明的变量
    'no-dupe-class-members': [2], // 禁止 class 中有重复的成员名称
    'no-duplicate-imports': [2, { includeExports: true }], // 禁止重复导入一个模块，也就是对一个模块的所有导入必须在一条语句中，包括引入后需要直接导出的变量
    'no-new-symbol': [2], // 禁止对 Symbol() 使用 new
    // 'no-restricted-exports': [2, { restrictedNamedExports: ['fs', 'path'] }], // 禁止 export 某些指定的名称，默认无禁止 restrictedNamedExports: []
    'no-restricted-imports': [2, 'fs', 'path'], // 禁止 import 某些其他环境特定的模块，比如 Node 下的 fs 等模块只能用 require 而不能用 import 导入
    'no-this-before-super': [2], // 继承类（subclass）必须在 constructor 中先调用 super() 后才能使用 this
    'no-useless-computed-key': [2], // 禁止在对象中使用不必要的计算属性名，如 const foo = {['a']: 'b'} 中计算的属性名 'a' 是不必要的
    'no-useless-constructor': [2], // 禁止不必要的 constructor，ES2015 为没有指定构造函数的类提供了默认构造函数。没必要写空的或仅调用了 super() 的构造函数
    'no-useless-rename': [2, { // 禁止不必要的重命名，比如：import { foo as foo } from 'bar'; export { foo as foo }; let { foo: foo } = bar;
      ignoreImport: false, // 是否忽略 import 语句
      ignoreExport: false, // 是否忽略 export 语句
      ignoreDestructuring: false, // 是否忽略解构语句
    }],
    'no-var': [2], // 要求使用 let 或 const 而不是 var 声明变量
    'object-shorthand': [2, 'always', { // 强制对象属性和方法使用简写形式
      avoidQuotes: true, // 是否避免 当 key 是引号包裹的字符串时强制简写
      ignoreConstructors: true, // 是否忽略对象中构造函数使用长格式的报错，因为简写的对象方法用作构造函数会报错。
      avoidExplicitReturnArrows: true, // 是否避免属性值是显示返回的箭头函数。比如对象中的：fn: () => {} 应写为 fn () {}
    }],
    'prefer-arrow-callback': [2, { // 偏向于尽可能使用箭头函数作为回调，而不是函数表达式
      allowUnboundThis: true, // 是否允许未被显示绑定 this 的函数表达式，foo(function () { return this.a })
      allowNamedFunctions: false, // 当允许函数表达式时，是否允许使用命名函数表达式，比如：foo(function fn () { return this.a })
    }],
    'prefer-const': [2, {
      destructuring: 'any', // 'all' | 'any'，使用 let 解构时，any 其中只要有一个变量未被修改即报错; all 当所有变量都未被修改才报错。
      ignoreReadBeforeAssign: true, // 是否在第一次赋值之前忽略检查
    }],
    'prefer-destructuring': [2, { // 强制使用对象或数组解构
      VariableDeclarator: { // 变量声明语句中
        array: false, // 不启用，因为直接访问数组的大索引时不适用解构
        object: true,
      },
      AssignmentExpression: { // 赋值表达式语句中
        array: false, // 不启用，因为直接访问数组的大索引时不适用解构
        object: true,
      },
    }, {
      enforceForRenamedProperties: false, // 属性重命名时是否强制使用解构
    }],
    'prefer-numeric-literals': [2], // 倾向于数字字面量，禁止调用 parseInt() 或 Number.parseInt() 时，一参为字符串字面量，且二参为 2 | 8 | 16 （进制）。
    'prefer-rest-params': [2], // 要求使用剩余参数代替 arguments
    'prefer-spread': [2], // 要求使用扩展语法（...）代替没有改变 this 指向的 x.apply()
    'prefer-template': [2], // 要求使用模板字面量代替字符串拼接
    'require-yield': [2], // 禁用函数内没有 yield 的 generator 函数
    'rest-spread-spacing': [2, 'never'], // 禁止或强制剩余参数和扩展运算符后留空格。'never'(禁止空格) | 'always'(必须空格)。

    /**
     * 强制对 import 语句进行排序
     * 通过二参对象的 memberSyntaxSortOrder 属性值，配置各类导入的顺序的数组
     * 导入类型包括：
     * 'none' 仅执行的 import 语句，比如 import 'foo.js'
     * 'all' 导入所有的 import 语句，比如 import * as bar from 'foo'
     * 'multiple' 导入对象中的属性的 import 语句，比如 import { foo, bar } from 'foobar.js'
     * 'single' 默认导入的 import 语句 比如 import foo from 'bar.js'
     */
    'sort-imports': [2, {
      ignoreCase: true, // 按字符编码排序，是否忽略大小写
      ignoreDeclarationSort: true, // 忽略 import 声明语句的排序
      ignoreMemberSort: true, // 忽略 'multiple' import 中成员的排序，比如忽略 import { c, b, a } 未按字符排序
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'], // 数组必须包含此4个成员，依次指定导入的顺序
    }],
    'symbol-description': [2], // 要求创建 symbol 时必须带有描述
    'template-curly-spacing': [2, 'never'], // 禁止或强制字符串模版大括号内前后留空格。'never'(禁止空格) | 'always'(必须空格)。
    'yield-star-spacing': [2, { before: false, after: true }], // 规定 yield* 表达式中星号前后是否空格，采取eslint默认值：前不空后空
  },
}
