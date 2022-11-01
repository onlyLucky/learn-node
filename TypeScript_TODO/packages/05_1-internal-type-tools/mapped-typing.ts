/*
 * @Author: fg
 * @Date: 2022-10-31 16:22:18
 * @LastEditors: fg
 * @LastEditTime: 2022-11-01 16:09:26
 * @Description: content
 */

type Stringify<T> = {
  [K in keyof T]: string;
}
interface Foo {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: () => void;
}

type StringifiedFoo = Stringify<Foo>;

// 等价于
interface _StringifiedFoo {
  prop1: string;
  prop2: string;
  prop3: string;
  prop4: string;
}

type Clone<T> = {
  [K in keyof T]: T[K];
}

export { }