module.exports = {
  rules: {
    /**
     * 控制是否在模块或函数体开始位置放置一个 'use strict'; 字面量，
     * 当 parserOptions.sourceType === 'modules'
     * 或 ecmaFeatures.impliedStrict === true 时
     * 该规则会禁止使用 'use strict';
     *
     * 'global' 要求在当前文件全局有且只能有一个 'use strict';
     * 'function' 要求只能在函数声明或表达式开始位置有一个 'use strict';
     * 'safe' 默认，自动判断，CommonJS 设为 'global'，非 CommonJS 设为 'function'
     * 'never' 禁用 'use strict';
     */
    strict: [2, 'safe'],
  },
}
