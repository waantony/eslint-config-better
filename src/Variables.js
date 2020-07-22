module.exports = {
  rules: {
    'init-declarations': [2, 'always'], // 强制或禁止变量声明时必须初始化值 always 强制，never 禁止
    'no-delete-var': [2], // 禁止删除变量，比如 delete x; 会报错
    'no-label-var': [2], // 禁用同一作用域下 label 与变量同名
    'no-restricted-globals': [2, // 指定禁用的全局变量，每个对象指定一个禁用，多个对象依次往后排列
      {
        name: '', // 禁止使用的变量名，比如设置 name: 'location' 后，location.href = 'https://x.com' 会报错
        message: 'why you can not use xxx?', // 说明禁止使用的原因
      },
    ],
    'no-shadow': [2, { // 禁止内层作用域变量/函数声明覆盖外层作用域的同名变量
      builtinGlobals: true, // 是否检测覆盖了 Object，Array、Number 等内置对象名，默认为 false
      hoist: 'functions', // 是否将作用域的所有声明提前，再进行检测，functions（默认，仅函数提前） | all(变量和函数提前) | never(不提前)
      allow: [], // 指定允许被内层作用域覆盖的变量名称字符串
    }],
    'no-shadow-restricted-names': [2], // 禁止覆盖保留关键字，比如 NaN、Infinity、undefined、eval、arguments 等
    'no-undef': [2, { // 禁用未声明的变量，可用 /* global a, b: true, c */ 注释显式指明全局变量，b: true 表明是可写，否则是只读
      typeof: true, // 是否对 typeof 用到的未声明变量发出警告，默认 false
    }],
    'no-undef-init': [2], // 禁止初始化变量值为 undefined
    'no-undefined': [0], // 不允许使用 undefined 作为标识符
    'no-unused-vars': [2, { // 禁止出现未使用过的变量，仅被声明以及被赋值视为未使用，其他情况视为使用
      vars: 'all', // 默认 all 检测所有变量，包括全局环境中的变量；local 仅检测本作用域，允许不使用全局环境中的变量。
      varsIgnorePattern: 'ignore', // 正则字符串，只要未使用的变量名中，包含匹配该正则的字符串，则不报错，比如 const ignoreVar = 1
      args: 'none', // 默认 after-used 只警告最后使用过的参数之后的参数， all 所有未使用参数报错，none 参数不报该错
      argsIgnorePattern: '', // 正则字符串，未使用的函数参数名包含该正则匹配，则不报错
      ignoreRestSiblings: true, // 默认 false，是否忽略剩余参数的兄弟，比如 const { a, b, ...rest} = obj 只检查 rest 是否被使用
      caughtErrors: 'none', // 默认 none 不警告 catch(err){} 参数未被使用， all 警告 catch(err){} 所有未使用的参数
    }],
    'no-use-before-define': [2, { // 禁止变量在定义前使用
      functions: true, // 是否禁止函数在定义前使用，默认 true
      classes: true, // 是否禁止 class 在定义前使用，默认 true
      variables: true, // 是否禁止变量在定义前使用，默认 true
    }],
  },
}
