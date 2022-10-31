/*
 * @Author: fg
 * @Date: 2022-10-31 10:42:33
 * @LastEditors: fg
 * @LastEditTime: 2022-10-31 14:56:45
 * @Description: ! 非空断言操作符
 */

declare const foo: {
  func?: () => {
    prop?: number | null;
  }
}

foo.func().prop().toFixed();

/**
 * ! 非空断言操作符
 * 
 * 1.忽略 undefined 和 null 类型
 * 2.调用函数时忽略 undefined 类型
 * 3.确定赋值断言
 * 
 *  */

function myFunc(maybeString: string | undefined | null) {
  // Type 'string | null | undefined' is not assignable to type 'string'.
  // Type 'undefined' is not assignable to type 'string'. 
  const onlyString: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!; // Ok
}

foo.func!().prop!.toFixed();

let x: number;
initialize();
// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error

function initialize() {
  x = 10;
}
// 通过 let x!: number; 确定赋值断言
let x!: number;
initialize();
console.log(2 * x); // Ok

function initialize() {
  x = 10;
}

foo.func?.().prop?.toFixed();

/** 
 * ?. 运算符(可选链)
 *  
 * 1.可选元素访问
 * 2.可选链与函数调用
*/

function tryGetArrayElement<T>(arr?: T[], index: number = 0) {
  return arr?.[index];
}

// 使用可选链可以使表达式自动返回 undefined 而不是抛出一个异常。
let result = obj.customMethod?.();

(
  (
    foo.func as () => {
      prop?: number;
    }
  )().prop as number
).toFixed();

const element = document.querySelector('#id')!;

const target = [1, 2, 3, 599].find((item) => item === 599)!;

export { };