/*
 * @Author: fg
 * @Date: 2022-11-03 09:12:28
 * @LastEditors: fg
 * @LastEditTime: 2022-11-03 09:40:16
 * @Description: 类型别名
 */

type Factory<T> = T | number | string;

type Stringify<T> = {
  [K in keyof T]: string;
}

type Clone<T> = {
  [K in keyof T]: T[K];
}

type _Partial<T> = {
  [P in keyof T]?: T[P];
}

interface IFoo {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: () => void;
}

type PartialIFoo = _Partial<IFoo>;
// 等价于
interface _PartialIFoo {
  prop1?: string;
  prop2?: number;
  prop3?: boolean;
  prop4?: () => void;
}

type IsEqual<T> = <T extends true ? 1 : 2 >

  type A = IsEqual<true>;//1
type B = IsEqual<false>;//2
type C = IsEqual<'toto'>;//2