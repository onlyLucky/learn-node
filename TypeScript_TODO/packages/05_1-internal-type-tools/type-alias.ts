/*
 * @Author: fg
 * @Date: 2022-11-01 16:11:00
 * @LastEditors: fg
 * @LastEditTime: 2022-11-01 16:25:55
 * @Description: type
 */

type StatusCode = 200 | 301 | 400 | 500 | 502;
type PossibleDataTypes = string | number | (() => unknown);

const status: StatusCode = 502;

type Handle = (e: Event) => void;

const clickHandler: Handle = (e) => { }
const moveHandler: Handle = (e) => { }
const dragHandler: Handle = (e) => { }

type ObjType = {
  name: string;
  age: number;
}

type Factory<T> = T | number | string;
type FactoryWithBool = Factory<boolean>;

const foo: FactoryWithBool = true;
type _Factory<NewType> = NewType | number | string;
type MaybeNull<T> = T | null;

function process(input: MaybeNull<{ handler: () => {} }>) {
  input?.handler();
}

type MaybeArray<T> = T | T[];

// 函数泛型
function ensureArray<T>(input: MaybeArray<T>): T[] {
  return Array.isArray(input) ? input : [input]
}

export { }