/*
 * @Author: fg
 * @Date: 2022-11-01 16:40:03
 * @LastEditors: fg
 * @LastEditTime: 2022-11-01 16:53:55
 * @Description: typeof
 */

const str = 'hello world';

const obj = { name: 'nolo' };

const nullVar = null;
const undefinedVar = undefined;

const func = (input: string) => {
  return input.length > 10;
}

type Str = typeof str; //'hello world'
type Obj = typeof obj; // { name: string; }
type Null = typeof nullVar; // null
type Undefined = typeof undefined; // undefined
type Func = typeof func; // (input: string) => boolean

const func2: typeof func = (name: string) => {
  return name === 'hello'
}

type FuncReturnType = ReturnType<typeof func>;
const isInputValid = (input: string) => {
  return input.length > 10
}