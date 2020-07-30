module.exports = {
  rules: {
    'array-bracket-newline': [2, 'consistent'], // 规定在数组方括号的换行规则，consistent 前后方括号保持一致换行即可
    'array-bracket-spacing': [2, 'never'], // 规定数组方括号两端是否允许空格, never 不允许两端空格
    'array-element-newline': [2, 'consistent'], // 强制数组元素之间换行规则，consistent 所有元素换行保持一致即可
    'block-spacing': [2, 'always'], // 强制块级代码开闭括号内有空白，默认 always 强制， never 禁止
    'brace-style': [2, '1tbs', { // 强制块级代码大括号的风格，默认 1tbs (one true brace style)
      allowSingleLine: true, // 允许块的开括号和闭括号在同一行
    }],
    'camelcase': [0, { // 强制使用驼峰命名而不是下划线命名，关闭以兼容不同后端命名风格
      properties: 'never', // 默认 always 强制属性驼峰命名， never 不检查属性名
      ignoreDestructuring: true, // 是否忽略解构赋值未使用驼峰的报错，默认 false
      allow: [], // 指定允许不使用驼峰命名的变量列表
    }],
    'capitalized-comments': [0], // 控制注释首字母是否强制大写，不启用该规则
    'comma-dangle': [2, 'always-multiline'], // 尾逗号，多行必须，单行禁止，以免添加逗号被版本管理视为当前行有变动
    'comma-spacing': [2, { // 控制逗号前后空格情况
      before: false, // 逗号前禁止空格
      after: true, // 逗号后强制空格
    }],
    'comma-style': [2, 'last'], // 规定逗号位置，last 行尾，first 行头
    'computed-property-spacing': [2, 'never'], // 禁止或强制在计算属性中使用空格， never 禁止， always 强制
    'consistent-this': [2, 'that'], // 强制在捕获当前执行上下文(this)时使用一致的命名，默认为 that
    'eol-last': [2, 'always'], // 要求或禁止文件末尾保留一行空行(LF)，默认 always 强制，never 禁止
    'func-call-spacing': [2], // 函数调用时，名称与括号间空格，默认 never 禁止，always 强制
    'func-name-matching': [2, { // 命名函数与所赋值的变量或属性名必须想同，默认 always 强制，never 禁止
      includeCommonJSModuleExports: false, // 是否检查 module.exports 和 module['exports']
      considerPropertyDescriptor: false, // 是否检查属性描述符，当使用 Object.create/defineProperty/defineProperties 和 Reflect.defineProperty
    }],
    'func-names': [0, 'as-needed'], // 要求或禁止命名的 function 表达式
    'func-style': [2, 'expression', { // 强制声明函数使用一致的风格，函数表达式 或 函数声明式
      allowArrowFunctions: true, // 仅在使用 declaration 时生效， 当强制函数声明式时，是否允许使用箭头函数的表达式
    }],
    'function-call-argument-newline': [0],
    'function-paren-newline': [2, 'consistent'], // 强制函数括号内参数使用一致的换行
    // 'id-denylist': [2, 'aaa', 'bbb'], // 自定义哪些变量名称禁止出现，从第二个参数依次排列字符串
    'id-length': [0, { // 限制标识符长度
      max: 20, // 变量最大长度
      min: 1, // 变量最小长度
      properties: 'always', // 默认 always 强制对象属性遵守规定，never 忽略属性名称
      exceptions: [], // 允许的不受限制的变量名列表
    }],
    'id-match': [2, '', { // 要求变量名标识符必须匹配特定的正则表达式，二参为正则字符串，比如 '^v' 要求所有变量以 v 开头
      properties: false, // 要求对象属性名满足规定
      onlyDeclarations: false, // 设为 true 只要求 var、function 和 class，false 要求所有
      ignoreDestructuring: true, // 忽略解构，默认 false
    }],
    'implicit-arrow-linebreak': [2, 'beside'], // 指定箭头函数体的默认返回是否换行，beside 禁止，below 强制
    'indent': [2, 2], // 强制缩进规则，二参数字表示缩进多少空格，或 'tab' 表示以 tab 为换行
    'jsx-quotes': [2, 'prefer-double'], // 强制 JSX 属性中使用一致单/双引号，默认 prefer-double 双引号优先， prefer-single
    'key-spacing': [2], // 对象字面量的 key 和 value 之间使用一致的空格，默认冒号前不空，后空一格
    'keyword-spacing': [2], // 关键字前后空格的一致性，默认前后都须空一格，比如： `} else if {}`
    'line-comment-position': [0, { // 单行注释的位置，规则只允许在行上方或行尾，所以不启用
      position: 'above', // 默认 above 强制在行上方，beside 强制在行尾
    }],
    'linebreak-style': [0, 'unix'], // 使用一致的换行符风格，默认 unix(LF, \n)，windows(CRLF, \r\n)
    'lines-around-comment': [0, { // 控制注释周围空行，该规则忽略 文件头尾 以及 代码注释同行 时
      beforeBlockComment: true, // 是否在块注释前必须空行
      afterBlockComment: true, // 是否在块注释后必须空行
      beforeLineComment: true, // 是否在行注释前必须空行
      afterLineComment: true, // 是否在行注释后必须空行
      allowBlockStart: true, // 是否允许在块语句中以注释开始
      allowBlockEnd: true, // 是否允许在块语句中以注释结尾
      allowObjectStart: true, // 是否允许在字面量对象中以注释开始
      allowObjectEnd: true, // 是否允许在字面量对象中以注释结尾
      allowArrayStart: true, // 是否允许在字面量数组中以注释开始
      allowArrayEnd: true, // 是否允许在字面量数组中以注释结尾
      allowClassStart: true, // 是否允许在 class 中以注释开始
      allowClassEnd: true, // 是否允许在 class 中以注释结尾
      applyDefaultIgnorePatterns: true, // 是否启用该规则忽略的默认注释模式
      ignorePattern: '', // 正则字符串，该规则忽略的自定义模式
    }],
    'lines-between-class-members': [2, 'always', { // 控制 class 成员之间是否出现空行，默认 always 强制；never 禁止
      exceptAfterSingleLine: false, //  是否排除对只占一行的类成员的检查，默认 false 不跳过
    }],
    'max-depth': [2, { // 规定块语句的最大可嵌套深度
      max: 4, // 默认最大深度 4
    }],
    'max-len': [2, { // 规定行的最大长度（Unicode 字符的数量）
      code: 120, // 一行的最大字符数，默认 80
      tabWidth: 4, // 一个 tab 算几个字符
      comments: 120, // 注释的最大长度，不配置时默认等同于 code 选项
      ignorePattern: '', // 正则字符串，匹配要忽略检查的行
      ignoreComments: false, // 是否忽略注释所占的长度
      ignoreTrailingComments: true, // 是否忽略拖尾注释
      ignoreUrls: true, // 是否忽略有链接地址的行
      ignoreStrings: false, // 是否忽略有字符串的行
      ignoreTemplateLiterals: false, // 是否忽略含有模版字符串的行
      ignoreRegExpLiterals: false, // 是否忽略含有正则表达式的行
    }],
    'max-lines': [2, { // 规定文件的最大行数
      max: 300, // 规定文件最大行数，默认 300
      skipBlankLines: false, // 是否忽略空行
      skipComments: true, // 是否忽略只有注释的行
    }],
    'max-lines-per-function': [0, { // 规定函数最大行数
      max: 50, // 函数内最大行数，默认 50
      skipBlankLines: false, // 是否忽略空行
      skipComments: false, // 是否忽略只有注释的行
      IIFEs: true, // 是否包含 IIFE 中的任何代码，默认 false
    }],
    'max-nested-callbacks': [2, { // 规定回调函数最大嵌套深度（回调地狱 Callback Hell）
      max: 5, // 最大回调深度，默认 10
    }],
    'max-params': [2, { // 规定函数最大参数个数
      max: 5, // 最大函数参数个数，默认 3
    }],
    'max-statements': [2, { // 规定函数块中的语句的最大数量
      max: 50, // 最大语句数量
    }, {
      ignoreTopLevelFunctions: true, // 是否忽略顶层函数，顶层函数通常逻辑偏多，所以忽略
    }],
    'max-statements-per-line': [2, { // 规定每一行中所允许的最大语句数量
      max: 1, // 默认 1
    }],
    /**
     * 多行注释风格
     * 'starred-block' 默认，禁用连续的单行注释，每行必须 * 开头
     * 'bare-block' 同上，但禁止 * 开头
     * 'separate-lines'，禁止块级注释，强制连续的单行注释
     */
    'multiline-comment-style': [0, 'starred-block'],
    /**
     * 规定三元表达式操作符是否换行
     * 'always' 默认，强制换行
     * 'always-multiline' 所有操作符保持一致的单行或多行
     * 'never' 禁止换行
     * 通过设置 rules['operator-linebreak'] 控制操作符换行时的位置
     */
    'multiline-ternary': [2, 'always-multiline'],

    /**
     * 强制构造函数首字母大写
     * Array/Boolean/Date/Error/Function/Number/Object/RegExp/String/Symbol/ 不受限制
     */
    'new-cap': [2, {
      newIsCap: true, // 是否强制 new 后首字母大写，默认 true
      capIsNew: true, // 是否强制首字母大写的函数必须用 new 调用，默认 true
      newIsCapExceptions: [], // 指定 new 后可以不大写的函数列表
      newIsCapExceptionPattern: '', // 正则字符串，指定 new 后可以不大写的匹配字符串
      capIsNewExceptions: [], // 指定首字母大写的可以不使用 new 的函数列表
      capIsNewExceptionPattern: '^[A-Z0-9]+$', // 指定首字母大写的可以不使用 new 的正则字符串
      properties: true, // 是否检查对象的属性
    }],
    'new-parens': [2, 'always'], // 强制调用无参数构造函数时带括号，默认 always 强制， never 禁止
    'newline-per-chained-call': [0, { // 强制方法链式调用时必须换行，多行时修改任意一个调用参数对版本管理来说更清晰
      ignoreChainWithDepth: 2, // 允许在同一行的链式调用深度，默认 2
    }],

    /**
     * 禁止使用 Array 或 new Array()
     * 原因一：单参数的陷阱：Array() 和 new Array() 只传入一个数值参数时，是构建一个传入数值长度的数组，其他情况则是将参数当作数组元素；
     * 原因二：全局范围的 Array 可能被重定义，通常不允许使用 Array 的构造函数来创建数组。
     * 规则不会警告单参数的使用，因为有可能需要传入一个数值来创建稀疏数组。
     */
    'no-array-constructor': [2],
    'no-bitwise': [2, { // 禁止使用按位操作符
      allow: [], // '~', '|', '&' 等允许作为例外情况出现的按位操作符列表
      int32Hint: true, // 是否允许使用在 `| 0`模式中按位或进行类型转换。
    }],
    'no-continue': [2], // 禁用 continue，通常可以修改逻辑替代
    'no-inline-comments': [0], // 禁止使用行内注释，包括代码中间及代码尾部
    'no-lonely-if': [2], // 禁止 if 语句作为唯一语句出现在 else 语句块中

    /**
     * 禁止无括号混合使用不同的二元操作符(&&, ||)<br />
     * groups 指定不能混合使用的分组，同一分组的二元操作符禁止混合使用
     * 默认按算术、位、比较、逻辑和关系运算符分组：
     * ['+', '-', '*', '/', '%', '**'],
     * ['&', '|', '^', '~', '<<', '>>', '>>>'],
     * ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
     * ['&&', '||'],
     * ['in', 'instanceof']
     */
    'no-mixed-operators': [2, {
      groups: [], // 二维数组，成员是要分成一个组的的操作符数组
      allowSamePrecedence: true, // 是否允许混合运算符具有相同的优先级，默认 true
    }],
    // 禁止使用 空格 和 tab 混合缩进，设置 'smart-tabs' 则表示当空格用于对齐时，允许混合制表符和空格
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-multi-assign': [2], // 禁止连续赋值
    'no-multiple-empty-lines': [2, { // 不允许多个空行
      max: 1, // 允许的最大连续空行数，默认 2
      maxBOF: 1, // 允许的文件开始的最大空行数，默认 1
      maxEOF: 0, // 允许的文件结尾的最大空行数，默认 1，rules['eol-last'] 要求了空行，此处不需要，所以设 0
    }],
    'no-negated-condition': [2], // 禁止在 含有 else 分支的 if 语句 和 三元表达式 中使用否定表达式(!)
    'no-nested-ternary': [0], // 禁止使用嵌套的三元表达式，配置不禁止
    'no-new-object': [2], // 禁止使用 Object 构造函数，强制使用字面量
    'no-plusplus': [0, { // 禁止使用一元操作符 ++ 和 --，配置不禁止
      allowForLoopAfterthoughts: true, // 是否允许在 for 循环的最后一个表达式中使用
    }],

    /**
     * 自定义禁止使用的语法，指定 ESTree 节点类型
     * AST 节点名称的完整列表 https://github.com/eslint/espree/blob/master/lib/ast-node-types.js
     * AST 节点名称在线解析器 https://eslint.org/parser/
     * 每一个对象指定一个禁用语法，多个对象依次往后排列
     * 属性 selector 表示禁用节点类型，比如 'FunctionExpression', BinaryExpression[operator='in']
     * 属性 message 表示报错提醒消息
     */
    'no-restricted-syntax': [2, {
      selector: 'WithStatement',
      message: 'WithStatement are not allowed!',
    }],
    'no-tabs': [2, { // 禁用 tab
      allowIndentationTabs: false, // 是否允许作为缩进使用的 tab，默认 false
    }],
    'no-ternary': [0], // 禁止使用三元操作符，不禁止，允许使用
    'no-trailing-spaces': [2, { // 禁止行尾出现空白
      skipBlankLines: false, // 是否跳过空白行检查
      ignoreComments: false, // 是否忽略注释
    }],
    'no-underscore-dangle': [0, { // 禁止使用悬空下划线（标识符中的开头或末尾使用下划线），不禁止
      allow: [], // 允许使用悬空下划线的标识符列表
      allowAfterThis: false, // 是否允许 this 对象的成员变量上使用悬空下划线，默认 false
      allowAfterSuper: false, // 是否允许在 super 对象的成员变量上使用悬空下划线，默认 false
      enforceInMethodNames: false, // 是否允许在方法名中使用悬空下划线，默认 false
    }],
    'no-unneeded-ternary': [2, { // 禁止出现非必要的三元操作符，比如 x === 2 ? true : false; 就是非必要的。
      defaultAssignment: true, // 是否允许条件表达式作为默认的赋值模式，默认 true
    }],
    'no-whitespace-before-property': [2], // 禁止访问对象属性时，点操作符或方括号两侧都空白

    /**
     * 指定在 if, else, while, do-while, for 中只有单行语句时是否换行
     * rules.curly === 'all' 时，此规则已无意义，因为已强制单行语句必须使用大括号
     * 默认 'beside' 禁止， 'below' 强制， 'any' 均可
     */
    'nonblock-statement-body-position': [2, 'beside', {
      overrides: { // 额外指定某些语句的单行语句的位置
        if: 'any', // 指定 if 语句换行均可
        // ...
      },
    }],

    /**
     * 要求或禁止花括号({})头尾换行
     * 二参是 字符串 或 对象，或是分开指定各种情况的对象
     * 字符串配置： 'always' 强制有换行， 'never' 禁止有换行
     * @example [2, 'always']
     * @example [2, { multiline: true, consistent: true }]
     * @example [2, { ObjectExpression: { multiline: true, consistent: true }}]
     */
    'object-curly-newline': [2, {
      ObjectExpression: { // 对象字面量的配置
        multiline: true, // 如果在属性内部或属性之间有换行符，则要求花括号有换行
        minProperties: 10, // 最少属性值，超过此值就强制有换行，consistent 为 true 时，此规则无效
        consistent: true, // 设为 true 后 minProperties 无效，
      },
      ObjectPattern: {
        multiline: true,
        consistent: true,
      },
      ImportDeclaration: {
        multiline: true,
        consistent: true,
      },
      ExportDeclaration: {
        multiline: true,
        consistent: true,
      },
    }],
    'object-curly-spacing': [2, 'always'], // 强制(always)或禁止(never，默认)花括号内前后使用空格并且前后一致
    'object-property-newline': [2, { // 强制对象的属性放在不同的行上
      allowAllPropertiesOnSameLine: true, // 允许所有属性都在同一行的情况，也就是允许全在一行，或不全部换行
    }],
    /**
     * 强制 var/let/const 在同一作用域下声明多个变量时，合并为一次声明，还是分开声明
     * 二参字符串或对象
     * 字符串：默认 always 强制合并； never 强制分开；consecutive 连续的必须单个
     * 注意是以作用域检查，要求合并时，属于同一作用域的声明即使相隔多行也会被警告
     * 关闭此规则，可合并可分开
     */
    'one-var': [0, 'never'],
    /**
     * 要求或禁止合并多个变量为一次声明时换行
     * initializations 强制有初始化值的变量换行，其他不强制
     * always 每一个变量强制换行
     * 如果 rules['one-var'] 为 never 禁止合并声明，此规则无意义
     */
    'one-var-declaration-per-line': [0, 'initializations'],
    'operator-assignment': [2, 'always'], // 要求或禁止尽可能地简写赋值操作，默认 always 强制，never 禁止

    /**
     * 换行时操作符的位置
     * after 换行符在操作符后，也就是操作费留在上一行
     * before 换行符在操作符前，也就是操作符换到下一行
     * none 禁止操作符前后换行，也就是强制一行写完
     */
    'operator-linebreak': [2, 'before', {
      overrides: { // 单独指定某些操作符换行所在位置，key 为换行符，value 为备选项
        '?': 'before', // 设置 ? 操作符换行时所在位置
        ':': 'before',
      },
    }],
    'padded-blocks': [2, 'never'], // 要求或禁止块内填充（块内以空行开始空行结束），默认 always 强制收尾空行， never 禁止

    /**
     * 要求或禁止在语句间填充空行
     * 详见 https://eslint.org/docs/rules/padding-line-between-statements
     */
    'padding-line-between-statements': [0],
    'prefer-exponentiation-operator': [2], // 禁用 `Math.pow`，而是用指数运算符 `**` 代替
    'prefer-object-spread': [2], // 优先使用对象扩展 ...obj 而不是 Object.assign

    /**
     * 指定对象属性名是否使用引号
     * always 默认，强制使用引号
     * as-needed 仅必要时才能用
     * consistent 所有属性一致即可，全用或全不用
     * consistent-as-needed 有属性必须用时，全用，否则全不用
     */
    'quote-props': [2, 'as-needed', {
      keywords: false, // 是否在关键字做属性时必须用，仅 as-needed 或 consistent-as-needed 时生效
      unnecessary: false, // 是否在属性非必须时禁用引号，默认 true，仅 as-needed 时生效，有时想保持一致使用引号
      numbers: false, // 数字作为属性时强制使用引号，仅 as-needed 时生效
    }],

    /**
     * 强制所有地方尽量使用一致的反引号、双引号或单引号
     * double 默认，尽可能使用双引号
     * single 默认，尽可能使用单引号
     * backtick 默认，尽可能使用反引号
     */
    'quotes': [2, 'single', {
      avoidEscape: true, // 首选引号被内部占用时，外层能否使用单/双引号代替，若设为 false 不允许，内部引号需要转义才能使用
      allowTemplateLiterals: false, // 是否不管首选引号是什么都允许使用反引号
    }],

    /**
     * 要求或禁止使用分号代替 ASI（自动分号插入）
     * 当一行以 `[  (  +  *  /  -  ,  .` 开头时，ASI不会在上一行自动插入分号
     * always 默认，强制写分号
     * never 禁止出现分号，除非是消除下一行以 [ ( / + - 开始的语句的歧义
     */
    'semi': [2, 'never'],
    'semi-spacing': [2, { before: false, after: true }], // 控制分号前后空格，默认强制前不空后空
    'semi-style': [2, 'last'], // 规定分号位置，默认 last 句末，first 句首
    'sort-keys': [0, 'asc', { // 要求对象属性按序排列，默认 asc 升序， desc 降序
      caseSensitive: true, // 排序区分大小写，默认 true
      minKeys: 2, // 最小的可不排序 key 数量，超过则必须排序，默认 2 也就是必须排序
      natural: false, // 按人的方式自然排序，也就是 10 在 3 后面，非自然排序 10 应在 3 前面，默认 false
    }],
    'sort-vars': [0, { ignoreCase: false }], // 检查合并声明的多个变量是否排序，ignoreCase 是否忽略大小写
    'space-before-blocks': [2, 'always'], // 要求或禁止语句块({})之前的空格，默认 always 强制空格， never 禁止空格
    'space-before-function-paren': [2, 'always'], // 要求或禁止函数圆括号之前有一个空格，默认 always 强制空格， never 禁止空格
    'space-in-parens': [2, 'never'], // 禁止或强制圆括号内的空格，默认 never 禁止空格， always 强制空格
    'space-infix-ops': [2, { // 要求中缀运算符（infix operators）周围有空格
      int32Hint: false, // 是否允许 a|0 不带空格，默认 false
    }],
    'space-unary-ops': [2, { // 强制一元操作符（unary operators）前后空格
      words: true, // 是否强制单词类一元操作符空格，通常强制
      nonwords: false, // 是否强制符号类一元操作符空格，通常禁止
      overrides: { // 额外指定一些操作符的规定
        'new': true,
        '!': false,
      },
    }],
    'spaced-comment': [2, 'always'], // 强制 `//` 或 `/*` 后空白，默认 always 强制空格，never 禁用
    'switch-colon-spacing': [2, { before: false, after: true }], // 规定 switch 冒号左右空格，默认前不空后空
    'template-tag-spacing': [2, 'never'], // 模板标记（template tags）和它们的字面量之间的空格，默认 never 禁用， always 强制
    'unicode-bom': [2, 'never'], // 使用 Unicode 字节顺序标记 (BOM)，默认 never 文件不能以 Unicode BOM 开头，always 则强制
    'wrap-regex': [0], // 强制正则表达式被圆括号包裹消除歧义，以免像除法运算符，比如 /foo/.test("bar") 写 (/foo/).test("bar")
  },
}
