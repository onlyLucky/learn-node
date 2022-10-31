<div align="center">
  <h1>TS 中那些奇怪的符号</h1>
  <p>对TS 学习的更深一步的探索</p>
</div>

## 目录

- [目录](#目录)
- [一、! 非空断言操作符](#一-非空断言操作符)
  - [1. 忽略 undefined 和 null 类型](#1-忽略-undefined-和-null-类型)
  - [2.调用函数时忽略 undefined 类型](#2调用函数时忽略-undefined-类型)
  - [3.确定赋值断言](#3确定赋值断言)
- [二、?.运算符(可选链)](#二运算符可选链)

## 一、! 非空断言操作符

### 1. 忽略 undefined 和 null 类型
```js
function myFunc(maybeString: string | undefined | null) {
  // Type 'string | null | undefined' is not assignable to type 'string'.
  // Type 'undefined' is not assignable to type 'string'. 
  const onlyString: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!; // Ok
}
```

### 2.调用函数时忽略 undefined 类型

```javascript
type NumGenerator = () => number;

function myFunc(numGenerator: NumGenerator | undefined) {
  // Object is possibly 'undefined'.(2532)
  // Cannot invoke an object which is possibly 'undefined'.(2722)
  const num1 = numGenerator(); // Error
  const num2 = numGenerator!(); //OK
}
```

### 3.确定赋值断言

  允许在实例属性和变量声明后面放置一个 ! 号，从而告诉 TypeScript 该属性会被明确地赋值

```javascript
let x!: number;
initialize();
console.log(2 * x); // Ok

function initialize() {
  x = 10;
}
```
如果不使用的话，变量 x 在赋值前被使用了，使用确定赋值断言可以解决。

## 二、?.运算符(可选链)

我们编写代码时会遇到 null 或 undefined 就可以立即停止某些表达式的运行

下面是可选链语法：

>obj?.prop<br>
>obj?.[expr]<br>
>arr?.[index]<br>
>func?.(args)

