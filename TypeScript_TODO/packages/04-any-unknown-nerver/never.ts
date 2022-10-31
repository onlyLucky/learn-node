/*
 * @Author: fg
 * @Date: 2022-10-31 14:57:21
 * @LastEditors: fg
 * @LastEditTime: 2022-10-31 15:15:30
 * @Description: never
 */

type UnionWithNever = 'hello' | 599 | true | void | never;

function justThrow(): never {
  throw new Error();
}

function foo(input: number) {
  if (input > 1) {
    justThrow();
    //  等同于 return语句后的代码，即 Dead Code
    const name = 'hello';
  }
}

declare const strOrNumOrBool: string | number | boolean;

if (typeof strOrNumOrBool === 'string') {
  strOrNumOrBool.charAt(1);
} else if (typeof strOrNumOrBool === 'number') {
  strOrNumOrBool.toFixed();
} else if (typeof strOrNumOrBool === 'boolean') {
  strOrNumOrBool === true;
} else {
  const _exhaustiveCheck: never = strOrNumOrBool;
  throw new Error(`Unknown input type: ${_exhaustiveCheck}`);
}